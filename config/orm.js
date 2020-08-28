// Import MySQL connection.
const connection = require("../config/connection.js");


// Helper function for SQL syntax.

//object for all our SQL statment functions
var orm = {

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
selectAllBurgers: function(tableInput, ){
 let queryString = 'SELECT ?? FROM ??' + tableInput + '+';
return connectionQuery(query, [colName, tableName])
.then  (result => {
console.log(results);

})
},
// * `insertOne()`
InsertOne: function (table, cols, vals, cb){
    let queryString = 'SELECT ?? FROM ??' + tableInput + '+';
    return connectionQuery(query, [colName, tableName])
    .then  (result => {
    console.log(results);
    
    })
    },
// * `updateOne()`
updateOne: function (table, cols, vals, cb){
    let queryString = 'SELECT ?? FROM ??' + tableInput + '+';
    return connectionQuery(query, [colName, tableName])
    .then  (result => {
    console.log(results);
    
    })
    },
};
// * Export the ORM object in `module.exports`.
module.exports = orm;