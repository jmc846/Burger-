// // * Inside `burger.js`, import `orm.js` into `burger.js`
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burgers = {
  all: (cb) => orm.all("burger", res => cb(res)),
  read: (cb) => orm.read("burger", (res) => cb(res)),
  // The variables cols and vals are arrays.
  create: (name, cb) => orm.create("burger", ["burger_name", "devoured"], [name, false], cb),
  update: (objColVals, condition) =>
    orm.update("burger", objColVals, condition),
  delete: (condition) => orm.delete("burger", condition),
};


// * Export at the end of the `burger.js` file.
module.exports = burgers;
