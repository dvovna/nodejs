var exec = require("child_process").exec;

function start(response) {
	console.log('start handler');
	exec("find /", 
		{timeout: 10000, maxBuffer: 20000*1024},
	 	function (error, stdout, stderr) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("wrong smth", stdout);
			response.end();
		}
	);
}

function upload(response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('Hello upload');
	response.end();
	console.log('upload handler');
}

exports.start = start;
exports.upload = upload;