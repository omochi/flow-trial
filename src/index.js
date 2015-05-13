// @flow
var http = require("http");
var server: http.Server = http.createServer(function(req, res): void {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.write("Hello World");
	res.end();
});
server.listen(5000);
