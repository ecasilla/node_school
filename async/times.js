var async = require('async'),
    http  = require('http'),
    args  = process.argv.slice(2),
    host  = args[0],
    port  = args[1],
    url = 'http://' +  hostname + ':' + port; 

var logger = function() {
  console.log.apply(this,arguments);
}

logger(url)

function createUser(id, callback) {
  var user = {user_id: id}
  callback(null, JSON.Stringify(user));
}
function req_url(url,callback) {
 var data;
 http.get(url,function(res) {
  res.on('data',function(chunk) {
    data += chunck
  })
  res.on('end',function() {
   callback(null,data);
  })
 }).on('error',function(error) {
  callback(error,null); 
 });
}

function series(obj,cb) {
  async.series(obj,cb)
}

var config = {
 times: async.times(5,function(n,next) {
  createUser(n,function(err,user) {
    next(err,user)
  }) 
 })
 post(url,user,function(err) {
   
 })
}

series(config,function(err,results) {
  if (err) {
   logger(err);
  }
 logger(results);
})
