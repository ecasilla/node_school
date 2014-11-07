var async = require('async'),
    http  = require('http'),
    fs    = require('fs'),
    file  = process.argv[2];


var logger = function() {
  console.log.apply(this,arguments);
}

function read_file(callback) {
 fs.readFile(file,'utf8',function(err,data) {
   if (err) {
    callback(err);
   }else{
    callback(null,data);
   }
 });
}

function req_url(url,callback) {
  var body = '';
 http.get(url.toString().trimRight(),function(res) {
  res.on('data',function(chunk) {
   body += chunk.toString();
  })
  res.on('end',function() {
   callback(null,body);
  })
 }).on('error',function(error) {
  callback(error); 
 });
}


async.waterfall([
  read_file,
  req_url
  ],function(err,result) {
  if (err) {
   return logger(err); 
  }else{
    return logger(result);
  }
});
