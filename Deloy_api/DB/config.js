const mysql = require('mysql');
const dotenv = require('dotenv').config();
const conn = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})
conn.connect();
module.exports = conn;