// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config()
var connection = mysql.createConnection(process.env.JAWSDB_URL ||{
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE

  });
  // if (typeof jawsSql ===undefined || jawsSql ===00)

  // Make connection.
  
  
  // connection= mysql.createConnection(jawsSql);
  
  // console.log(jawsSql)
  
  // Export connection for our ORM to use.
  module.exports = connection;


 