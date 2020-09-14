const formidabel = require('formidable'),
      fs         = require('fs'),
      path       = require('path'); 

const Product = require('../models/product');

// create controller
exports.createProduct = (req,res) => {
    let form = new formidabel.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) => {

        if(err) {
            return res.status(400).json({
                Error : 'Problem with image'
            });
        } 

        // destructure the fields
        const {name, description, quantity, price} = fields;

        if(!name || !description || !quantity || !price) {
            return res.status(400).json({
                Error : 'Please include all the fields'
            });
        }

        if(!file.photo) {
            return res.status(400).json({
                Error : 'Please upload product image'
            });
        }

        let product = new Product(fields);

        // handle image
        var fileName = `${Date.now()} ${file.photo.name}`;
        var oldPath = file.photo.path;
        var newPath = path.join(
            __dirname,
            '../',
            '../',
            'reactjs',
            'src',
            'product_images',
            '/',
            fileName
        );
        var data = fs.readFileSync(oldPath);

        fs.writeFile(newPath, data, (err) => {
            if(err) {
                console.log(err);
            }
        });

        product.imageName = fileName;

        // save product to DB
        product.save((err,product) => {
            if(err) {
                return res.status(400).json({
                    Error : 'Product is not saved in DB, FAILED.!'
                });
            }
            res.json(product);
        });
        
    });
};

// get all products
exports.getAllProducts = (req,res) => {
    Product.find()
           .exec((err,products) => {
                if(err) {
                    return res.status(400).json({
                        Error : 'No product found'
                    });
                }
                res.json(products);
           });
}