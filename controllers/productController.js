const Product = require("../models/productSchema");

//handling creation of product
module.exports.create = async (req, res) => {
  //Getting name and quantity from req body.
  const { name, quantity } = req.body.product;
  if (!name || !quantity) {
    //validation if req is empty
    return res
      .status(400)
      .send({ error: "Both name and quantity fields are required." });
  }

  try {
    //creates a new instance of the Product model
    const product = new Product(req.body.product);
    await product.save(); // save product to database
    res.json({ data: { product: product } });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//handling fetching all of product
module.exports.getProducts = async (req, res) => {
  try {
    //finding products using find method
    Product.find({}, (err, products) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error while retrieving products from database." });
      } else {
        //returing product data in json
        res.json({ data: { products: products } });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//handling deleting of product
module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id; //getting id from params
  try {
    //Deleting product after finding it using id.
    await Product.findByIdAndDelete(id, (err, product) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error while retrieving products from database." });
      }
      if (!product) return res.status(404).send({ error: "Product not found" });
      //returning success msg.
      return res.json({ data: { message: "product deleted" } });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//handling updation of product
module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params; //geting param from URL
    const { number } = req.query; //getting query from URL
    //Finds the product by its id using the findByIdAndUpdate method and
    //increments its quantity by the value of number
    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: number } },
      { new: true } //used to return the updated document, instead of the original.
    );
    //If the product is not found, it returns a 404
    if (!product) return res.status(404).send({ error: "Product not found" });
    //If the product is found, it updates its quantity and returns a success message
    return res.json({
      data: {
        product,
        message: "updated successfully",
      },
    });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message + ">>Failed to update quantity" });
  }
};
