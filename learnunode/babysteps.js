
function sum(args) {
  var x = 0;
  for (var i = 2, l =args.length; i < l; i ++) {
    var v = +args[i],
        x = x + v;
  }
  return x;
}

console.log(sum(process.argv));
