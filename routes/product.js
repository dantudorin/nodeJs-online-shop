const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.get('/productDetails/:productId', productController.getDetails);
router.get('/productForm', productController.renderProductForm);
router.post('/addProduct', productController.addProduct);
router.get('/deleteProducts', productController.deleteAllProducts);

module.exports = router;