const mongoose = require("mongoose");
require("dotenv").config();
//connects to the database using the URI
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;
//An 'error' event listener
db.on("error", console.error.bind(console, "Error connecting to mongo db"));

// A 'open' event listener for successful connection
db.once("open", function () {
  console.log("Connected to mongo-db");
});

module.exports = db;
