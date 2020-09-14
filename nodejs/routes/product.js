const express = require('express'),
      router  = express.Router();

const { createProduct, getAllProducts } = require('../controllers/product');

// Create Product Route
router.post('/create/product',createProduct);

// List All Products
router.get('/products',getAllProducts);

module.exports = router;