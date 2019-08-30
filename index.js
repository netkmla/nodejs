const express = require('express')
const socket = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socket(server)
const port = process.env.PORT || 8000
const fs  = require('fs')
var path = require("path");

app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

server.listen(port, function(){
    console.log('server working on port:'+port)
})