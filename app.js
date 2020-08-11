//Load the express module
var express = require('express');
var app = express();

// Respond requests
app.get('/', function(req, res){
    res.send("Hello world!");
});

//Listen on port 3000
app.listen(3000, function(){
    console.log("Express server started succesfully.")
});