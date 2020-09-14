// Require all modules
const express       = require('express'),
      mongoose      = require('mongoose'),
      bodyParser    = require('body-parser'),
      cors          = require('cors');

// Require all routes
const productRoutes = require('./routes/product'),
      cartRoutes    = require('./routes/cart');

// Define app
const app = express();

// PORT
const port = process.env.PORT || 8000;

// middleware
app.use(bodyParser.json());
app.use(cors());

// DB Connection
mongoose.connect('mongodb://localhost:27017/product_api',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then(() => {
    console.log('DB Connected');
})

// Routes
app.use('/api',productRoutes);
app.use('/api',cartRoutes);

// Starting a server
app.listen(port,() => {
    console.log(`Node JS Test is running on ${port}`);
});