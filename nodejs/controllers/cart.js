const Cart = require('../models/cart');

// add product to the cart
exports.addToCart = (req,res) => {
    const cart = new Cart(req.body);
    cart.save((err,cart) => {
        if(err) {
            return res.status(400).json({
                Error : 'Product not going to the cart'
            });
        }
        res.json(cart);
    });
};

// update cart product quantity
exports.listAllProductsInCart = (req,res) => {
    Cart.find()
        .populate('product')
        .exec((err,cart) => {
            if(err) {
                return res.status(400).json({
                    Error : 'No order found in cart'
                });
            }
            res.json(cart);
        });
};

// update cart product quantity
exports.updateQuantity = (req,res) => {
    Cart.findByIdAndUpdate( 
        req.body._id , 
        { quantity : req.body.quantity } , 
        {useFindAndModify : false }, 
        (err,cart) => {
        if(err) {
            return res.status(400).json({
                Error : 'Quantity not updated'
            });
        }
        res.json(cart);
    });
};
  