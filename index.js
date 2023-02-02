// Imports the necessary packages: express, body-parser, and mongoose
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); //Initializes the Express app
const port = process.env.PORT || 8000; //setting the port

const db = require("./config/mongoose"); //Connects to the MongoDB database using mongoose.

app.use(bodyParser.json()); //use the body-parser middleware to parse JSON data from requests.

//Use express router
app.use("/", require("./routes"));

//Listens to the specified port and starts the Express app
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
