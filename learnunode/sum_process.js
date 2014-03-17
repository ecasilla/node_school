//console.log(process.argv[2]);

function sum(args) {
  for (var i = 0, l =args.length; i < l; i ++) {
    var v = +args[i];
    console.log(v);
    var x = x + v;
    console.log(x);
  }
  return x;
}

console.log(sum(process.argv[2]));
