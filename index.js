const express = require('express');
const cors = require('cors');
const { signIn } = require('./src/controllers/SignInController');
const app = express();
const routes = require('./src/routes/Routes');
// const { initializeDb } = require('./src/util/dbConnection');
const { initializeMongoDb } = require('./src/util/mongoDbConnection');
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    next();
});

app.use("/userDetails", routes);


// const dbCon = () => {
//     try {
//         initializeDb();
//         app.listen(3001, function (err) {
//             if (err) console.log("Error in server setup");
//             console.log("Server listening on Port", 3001);
//         })
//     } catch (e) {
//         console.log(e);
//     }
// }
try {
    initializeMongoDb();
} catch (e) {
    console.log('failed to connect to db',);
}

app.listen(3001, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", 3001);
})

// dbCon();