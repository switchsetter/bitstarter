var  fs = require('fs'); 

   express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World 2! I think there are better ways!');
  response.send(fs.readFileSync("index.html"));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
