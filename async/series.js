var async = require('async'),
    http  = require('http'),
    fs    = require('fs');


var logger = function() {
  console.log.apply(this,arguments);
}


function req_one(callback) {
  var body = '';
  var url = process.argv[2];
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

function req_two(callback) {
  var body = '';
  var url = process.argv[3];
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

async.series({
  requestOne: req_one,
  requestTwo: req_two
},function(error,results) {
  if (error) {
   logger(error); 
  }else{
  logger(results);
  }
})
