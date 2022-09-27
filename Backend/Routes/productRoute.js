const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../Controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);
router.route("/products/new").post(createProduct);
router.route("/product/update/:id").put(updateProduct);
router.route("/product/delete/:id").delete(deleteProduct);

module.exports = router;
