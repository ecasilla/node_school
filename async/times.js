var async = require('async'),
    http  = require('http'),
    args  = process.argv.slice(2);

var logger = function() {
  console.log.apply(this,arguments);
}

function req_url(item,callback) {
 http.get(item,function(res) {
  res.on('data',function(chunk) {
  })
  res.on('end',function() {
   callback(null);
  })
 }).on('error',function(error) {
  callback(error); 
 });
}

async.each(args,function(item,callback) {
  req_url(item,callback) 
},
function(err,result) {
 if(err){
  return logger(err);
 }else{
  logger(result);
 }
});
