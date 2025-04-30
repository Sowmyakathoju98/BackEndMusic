import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    roomId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    userList: { type: [String] }, 
    musicIds: { type: [Buffer] }  
}, { versionKey: false });

const Room = mongoose.model('Room', roomSchema);

export default Room;