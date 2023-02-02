const Product = require("../models/productSchema");

module.exports.create = async (req, res) => {
  const { name, quantity } = req.body.product;
  if (!name || !quantity) {
    return res
      .status(400)
      .send({ error: "Both name and quantity fields are required." });
  }

  try {
    const product = new Product(req.body.product);
    await product.save();
    res.json({ data: { product: product } });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    Product.find({}, (err, products) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error while retrieving products from database." });
      } else {
        res.json({ data: { products: products } });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    Product.findByIdAndDelete(id, (err, product) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error while retrieving products from database." });
      }
      if (!product) return res.status(404).send({ error: "Product not found" });

      return res.json({ data: { message: "product deleted" } });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.updateProduct = async (req, res) => {

try {
    const { id } = req.params;
    const { number } = req.query;

    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: number } },
      { new: true }
    );

    if (!product) return res.status(404).send({ error: 'Product not found' });

    return res.json({
                  data: {
                    product,
                    message: "updated successfully",
                  },
                });
  } catch (error) {
    return res.status(500).send({ error: error.message+ '>>Failed to update quantity' });
  }
};
