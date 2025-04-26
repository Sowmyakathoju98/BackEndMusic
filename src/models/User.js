import mongoose, { version } from 'mongoose';
//SQL CREATE TABLE: The userSchema in Mongoose defines the structure of your data, similar to a SQL table.
// SQL INSERT INTO: The User.create() method inserts a new document into the MongoDB collection, similar to inserting a row in SQL.
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, // Equivalent to EMAIL_ID
    firstName: { type: String, required: true }, // Equivalent to FIRST_NAME
    lastName: { type: String, required: true }, // Equivalent to LAST_NAME
    password: { type: String }, // Equivalent to PASSWORD
    image: { type: Buffer }, // Equivalent to IMAGE
    signIn: { type: Boolean, default: false },
},{ versionKey: false });

const User = mongoose.model('User', userSchema);

export default User;