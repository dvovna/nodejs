// var sys = require("sys");
var exec = require("child_process").exec;


function start(response) {
	console.log('start handler');
	// var body= '<html>'+
	//     '<head>'+
	//     '<meta http-equiv="Content-Type" content="text/html; '+
	//     'charset=UTF-8" />'+
	//     '</head>'+
	//     '<body>'+
	//     '<form action="/upload" method="post">'+
	//     '<textarea name="text" rows="20" cols="60"></textarea>'+
	//     '<input type="submit" value="Submit text" />'+
	//     '</form>'+
	//     '</body>'+
	//     '</html>';

	exec("ls", 
		{timeout: 10000, maxBuffer: 20000*1024},
	 	function (error, stdout, stderr) {
	 		console.log('here', arguments);
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write('dont', stdout, stderr, error.code);
			response.end();
		}
	);
	response.writeHead(200, {"Content-Type": "text/plain"})
}

function upload(response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('Hello upload');
	response.end();
	console.log('upload handler');
}

exports.start = start;
exports.upload = upload;