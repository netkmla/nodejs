var express = require("express");
var http = require("http");
var path = require("path");

const port = process.env.PORT || 8000;

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(express.static(path.join(__dirname, 'styles')));

app.listen(port, () => {
    console.log("app is working on port " + port);
});
