const express = require('express');

const route = express.Router();

const read_path = require("../controllers/read.js");

route.get("/", read_path.allList);
// route.get("/", (req, res)=> {
//     return res.send("Hello")
// });

module.exports = route;