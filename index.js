const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/UserRoute');
const { initializeMongoDb } = require('./src/util/mongoDbConnection');
app.use(cors());
app.use(express.json());
app.use("/userDetails", routes);

try {
    initializeMongoDb();
} catch (e) {
    console.log('failed to connect to db',);
}

app.listen(3001, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", 3001);
})