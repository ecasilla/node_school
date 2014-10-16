'use-strict';

var _ = require('lodash');

var sorter = function sorter(arr) {
 return asc = _.sortBy(arr,function(item) {
    return -item.quantity; 
 });
};

module.exports = sorter;
