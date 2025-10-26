const mysql2 = require("mysql2")
require('dotenv').config()
const connection = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.DBPORT || 3306,
})
connection.connect(err => {
    console.log(err ? "mysql connection failed " + err : "mysql connected")
})
module.exports = connection