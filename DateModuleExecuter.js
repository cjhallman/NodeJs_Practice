var http = require('http');
var datetime = require('./DateModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + datetime.myDateTime());
  res.end();
}).listen(8080);