var  fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(fs.readFileSync("index.html"),"utf-8");


app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
