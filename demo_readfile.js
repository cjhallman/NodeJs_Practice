var http = require('http');
var fs = require('fs');
var url = require('url');

fs.writeFile('newfile2.txt', 'Hello for the first time ;)', function (err) {
	if (err) throw err;
	console.log('Saved!');
});
fs.appendFile('newfile2.txt','Hello world', function (err) {
	if(err) throw err;
	console.log('Saved!');
});

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.write(txt);
	fs.readFile('demofile1.html', function(err, data) {
		res.write(data);
		return res.end();
	});
}).listen(8080);