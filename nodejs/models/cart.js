const mongoose   = require('mongoose'),
      {ObjectId} = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    user : {
        type : String
    },
    product : {
        type : ObjectId,
        ref  : 'Product'
    },
    quantity : {
        type : Number,
        min  : 1
    },
    totalPrice : Number
},
{
    timestamps : true
});

module.exports = mongoose.model('Cart',cartSchema);

