const express = require('express');

const route = express.Router();

const read_path = require("../controllers/read.js");

route.get("/", read_path.allList);
route.post("/getPrice", read_path.getPrice);

module.exports = route;