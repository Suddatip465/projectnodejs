const mysql = require("mysql2");
const dbConnection = mysql.createpool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs_login"
}).promise()

module.exports = dbConnection;