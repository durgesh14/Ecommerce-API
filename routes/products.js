const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
//uses the create method from productController - to create product.
router.post("/create", productController.create);

//uses the getProducts method from productController - to get all products.
router.get("/", productController.getProducts);

//uses the deleteProduct method from productController - to delete product by id
router.delete("/:id", productController.deleteProduct);

//uses the updateProduct method from productController - to update product by id
router.post("/:id/update_quantity", productController.updateProduct);

module.exports = router;
