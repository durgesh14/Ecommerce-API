const mongoose = require("mongoose");

//Creating Schema for Products [fields: id, name, quantity]
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
