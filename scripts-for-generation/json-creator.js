var fs = require('fs');
var generator = require('./json-generator');

var file = fs.openSync('scripts-for-generation/json-data.txt', 'w+');

fs.writeSync(file, generator.generate());