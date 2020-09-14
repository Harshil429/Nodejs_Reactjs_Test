const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
    },
    price : {
        type : Number,
        required : true,
    },
    imageName : {
        type : String
    }
},
{
    timestamps : true
});

module.exports = mongoose.model('Product',productSchema);