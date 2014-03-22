//console.log(process.argv[2]);
var fs = require("fs");

var file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);

