const express = require('express'),
      router  = express.Router();

const { addToCart, listAllProductsInCart, updateQuantity } = require('../controllers/cart');

// Add product to cart
router.post('/add/cart',addToCart);

// List All Products In Cart
router.get('/cart',listAllProductsInCart);

// Update quantity
router.post('/cart/update/quantity',updateQuantity);

module.exports = router;