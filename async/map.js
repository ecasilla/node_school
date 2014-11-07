var async = require('async'),
    http  = require('http'),
    args  = process.argv.slice(2);

var logger = function() {
  console.log.apply(this,arguments);
}

function req_url(item,callback) {
  var body = '';
  var req = http.get(item, function(res) {

    res.on('data', function(chunk) {
      body += chunk.toString();
    })
    res.on('end', function() {
      return callback(null,body);
    })
  }).on('error', function(error) {
    callback(error);
  })
}

async.map(args, function(item,callback) {
  req_url(item,callback) 
},
function(err,result) {
 if(err){
  return logger(err);
 }else{
  return logger(result);
 }
});
