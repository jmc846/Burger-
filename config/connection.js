// Set up MySQL connection.
var mysql = require("mysql");
var jawsSql= process.env.JAWSDB_URL;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "67504@jc",
    database: "burgers_db"

  });
  if (typeof jawsSql ===undefined || jawsSql ===00)

  // Make connection.
  
  
  connection= mysql.createConnection(jawsSql);
  
  console.log(jawsSql)
  
  // Export connection for our ORM to use.
  module.exports = connection;


 