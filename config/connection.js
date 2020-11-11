// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
}

connection.connect();

module.exports = connection; 