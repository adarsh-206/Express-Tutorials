// Hello World Program

var express = require('express')                           // require express in our module
var app = express()                                       // get express object in app variable

const PORT = 3000                                        // define default port

app.get('/', (req, res) => {                             // Configuring a route for GET (it takes two arguments:- endpoint and callback)
    res.send("Hello World!")                            // Whenever we request for this endpoint this response is sent
})

app.listen(`${PORT}`, () => {
    console.log(`Server is running on ${PORT}`);       // calls http.createServer and start server on port = 3000
})