// Import the Express library
var express = require('express');

// Import the routers for products and users
var products = require('./router-middlewares/products');
var users = require('./router-middlewares/users');
var user_middleware = require('./router-middlewares/user-middleware');

// Create an instance of the Express application
var app = express();

// Mount the products router on the '/products' path
app.use('/products', products);

// Mount the users router on the '/users' path
app.use('/users', users);

// Mount the users router on the '/users' path
app.use('/user-middleware', user_middleware);

// Define the port number for the server to listen on
const PORT = 3000;

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});