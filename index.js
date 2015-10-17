'use strict';

var traceur = require('traceur');
var extend = require('extend-shallow');

exports.name = 'traceur';
exports.inputFormats = ['es6', 'traceur'];
exports.outputFormat = 'js';

exports.render = function (str, options, locals) {
  var opts = extend({}, options || {}, locals || {});
  var sourceName = opts.sourceName || null;
  var outputName = opts.outputName || null;

  return traceur.compile(str, options, sourceName, outputName);
};
