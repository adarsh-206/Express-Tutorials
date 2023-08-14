// NOTE:- Remeber the order of the methods is extremely important
var express = require('express');
var router = express.Router();

// Middleware (execute before route)
router.use('/', (req, res, next) => {
    console.log("API call recieved");
    next();
})

// Middleware (execute before route)
router.use('/', (req, res, next) => {
    console.log("Adding header");
    req.headers['content-type'] = 'application/json'
    // check if user is authenticated
    // check if data is correct
    // check if all data is present
    next();
})

// Default route
router.get('/', (req, res, next) => {              // added next to run below middleware
    res.send("Headers Recieved" + req.headers['content-type'])
    res.send("Get user details")
    next();
});

// Middleware (execute after route)
router.use('/', (req, res, next) => {
    console.log("API call ended");
})

module.exports = router;
