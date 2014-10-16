'use-strict';
var _ = require('lodash');

var worker = function(array) {
 return _.where(array, {active:true})
};

module.exports = worker;
