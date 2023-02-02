const express = require("express");

const router = express.Router();

//adds a new route for products
router.use("/products", require("./products"));

module.exports = router;
