var express = require('express');
var router = express.Router();

// Default route
router.get('/', (req, res) => {
    res.send("Users Route");
});

// Dynamic Routes: User ID
router.get('/:id', (req, res) => {
    res.send("This is route for user ID " + req.params.id);
});

// Dynamic Routes: Search by City and State
router.get('/search-city-state/:state/:city', (req, res) => {
    res.send("The user found with state " + req.params.state + " and city is " + req.params.city);
});

// Pattern Matched Routes: Search by Key (numeric, exactly 5 digits)
router.get('/search-by-key/:key([0-9]{5})', (req, res) => {
    res.send("This is a user's key: " + req.params.key);
});

// Pattern Matched Routes: Search by State (alphabetic)
router.get('/search-by-state/:state([a-zA-Z]+)', (req, res) => {
    res.send("This is a user's state: " + req.params.state);
});

// Wildcard Route (Error 404 - Not Found)
router.get('*', (req, res) => {
    res.status(404).send({
        statusCode: "404",
        statusMsg: "User not found"
    });
});

module.exports = router;