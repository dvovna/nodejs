var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname;
		console.log('Request for '+ pathName +'received');

		route(handle, pathName);

		response.writeHead(200, {"Content-Type": "text/plane"});
		response.write("Helolo");
		response.end();
	}

	http.createServer(onRequest).listen(8888);

	console.log('Server started');
}

exports.start = start;