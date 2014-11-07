var args = process.argv[2],
    buff_arr = [];

for (var i = 2, l = args.length; i < l; i ++) {
  var arg_num = new Buffer(args[i],'hex');
  buff_arr.push(arg_num);
  console.log(buff_arr);
}


