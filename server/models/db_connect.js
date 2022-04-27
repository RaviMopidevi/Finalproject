require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PSWD,
  database: process.env.MYSQL_DB
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Database Connected!!");
  con.query("CREATE DATABASE IF NOT EXISTS bmi_db", function(err, result) {
    if(err) throw err;
    console.log("Databse Created!");
  })
});

module.exports = con;