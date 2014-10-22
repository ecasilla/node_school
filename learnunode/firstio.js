var fs = require('fs');

function io() {
  var buf = fs.readFileSync(process.argv[2],'utf-8').split('\n').length - 1;
  console.log(buf);
}
io();
