var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

<<<<<<< HEAD
var page = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(page.toString('utf8'));
=======
var output = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(output.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
