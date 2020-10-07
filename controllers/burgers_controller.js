// dependencies
const express = require("express");

const router = express.Router();

// Import the model (burgers.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.read(function(burgerData) {
    var hbsObject = {
      burger_data: burgerData,
    };
    //console.log(hbsObject);
    res.render("index", {
      burger_data: burgerData,
    });
  });
});
router.post("/api/burgers", function (req, res) {
  //   var cols = Object.entries(req.body).map(e => e[0]); // get columns
  // var vals = Object.entries(req.body).map(e => e[1]); // get values

  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/");
  });
  // .then( results => {
  //     console.log(results);
  //     res.json({id: results.insertId});
  //   })
  //   .catch( err => {
  //     console.log(err);
  //   });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger
    .update(
      {
        devoured: req.body.devoured,
      },
      condition
    )
    .then((result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger
    .delete(condition)
    .then((result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Export routes for server.js to use.
module.exports = router;
