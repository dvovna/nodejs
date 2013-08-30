var fs = require('fs');
var generator = require('./json-generator');

var file = fs.openSync('scripts-for-generation/json-data.txt', 'w+');

var projectsJSON = generator.generate(10);

console.log('writing');

console.log(projectsJSON);

fs.writeSync(file, projectsJSON);

console.log('done');