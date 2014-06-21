var sys = require("sys");
var exec = require("child_process").exec;

exports.about = initialize;

function initialize(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Hello upload');
    response.end();
    console.log('upload handler');
}

