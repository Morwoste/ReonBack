const mysql = require("mysql");

const db = mysql.createConnection({
    host: "b9f4ytqvlfgiclrzlzdc-mysql.services.clever-cloud.com",
    user: "ume9l7mzu4m7mu6g",
    password: "wIrNO0S59epcI8hwx1nF",
    database: "b9f4ytqvlfgiclrzlzdc"
});

db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;