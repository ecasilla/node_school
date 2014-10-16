'use-strict';

var _ = require('lodash');

var every = function every(coll) {
  _.forEach(coll,function(value,key) {
    if (value.population > 1.0) {
      coll[key].size = "big"
    } else if(value.population > 0.5){
      coll[key].size = "med"
    }else{
      coll[key].size = 'small'
    }
  }); 
  return coll;
};

module.exports = every;
