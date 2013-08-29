var fs = require('fs');

var file = fs.openSync('test.txt', 'w+');

fs.writeSync(file, 'blablabla');