const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reon_todo"
});

db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;