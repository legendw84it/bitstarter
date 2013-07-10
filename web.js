var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buf =new buffer(256);

var output = buf.write(fs.readFileSync("index.html"));


app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
