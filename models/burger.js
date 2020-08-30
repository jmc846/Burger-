// // * Inside `burger.js`, import `orm.js` into `burger.js`
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burgers = {
    // selectAllBurgers: function(cb) {
    //   orm.selectAllBurgers("burgers", function(res) {
    //     cb(res);
    //   });
    // },
    // // The variables cols and vals are arrays.
    // InsertOne: function(cols, vals, cb) {
    //   orm.InsertOne("burger", cols, vals, function(res) {
    //     cb(res);
    //   });
    // },
    // updateOne: function(objColVals, condition, cb) {
    //   orm.updateOne("burgers", objColVals, condition, function(res) {
    //     cb(res);
    //   });
    // },
    // delete: function(condition, cb) {
    //   orm.delete("burgers", condition, function(res) {
    //     cb(res);
    //   });
    // }

    read: (cb) => orm.read("burger", (res)=>cb(res)),
    // The variables cols and vals are arrays.
create: (cols, vals) => orm.create("burger", cols, vals),
update: (objColVals, condition) => orm.update("burger", objColVals, condition),
delete: condition => orm.delete("burger", condition),
  };
  


  
  
 

  
// * Export at the end of the `burger.js` file.
module.exports = burgers;