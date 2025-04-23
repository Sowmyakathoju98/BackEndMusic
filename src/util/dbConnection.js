const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'practice'
});

const initializeDb = () => {
    if (!global.con) {
        global.con = connection;
        connection.connect(err => {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log('Connected to database');
        });
    }
}

module.exports = { initializeDb, connection }