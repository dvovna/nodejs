var fs = require('fs');
var generator = require('./json-generator');

var file = fs.openSync('scripts-for-generation/json-data.txt', 'w+');

var projectsJSON = generator.generateJSON(5);

console.log('----------writing----------\n');

console.log(projectsJSON, '\n');

fs.writeSync(file, projectsJSON);

console.log('------------DONE------------\n');