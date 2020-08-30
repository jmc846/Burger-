// // * Inside `burger.js`, import `orm.js` into `burger.js`
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burgers = {
   

    read: (cb) => orm.read("burger", (res)=>cb(res)),
    // The variables cols and vals are arrays.
create: (cols, vals) => orm.create("burger", cols, vals),
update: (objColVals, condition) => orm.update("burger", objColVals, condition),
delete: condition => orm.delete("burger", condition),
  }; 
 

  
// * Export at the end of the `burger.js` file.
module.exports = burgers;