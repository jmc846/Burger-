const express = require('express');

const orm = require("./config/orm.js");



// ORMs

orm.selectAllBurgers('burger_name','burgers')

orm.InsertOne('burger_name','burgers')

orm.updateOne('burger_name','burgers')