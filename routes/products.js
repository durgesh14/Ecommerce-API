const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
router.post("/create", productController.create);

router.get("/", productController.getProducts);

router.delete("/:id", productController.deleteProduct);

router.post("/:id/update_quantity", productController.updateProduct);

module.exports = router;
