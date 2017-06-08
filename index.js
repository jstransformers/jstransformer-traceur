'use strict'

const traceur = require('traceur')
const extend = require('extend-shallow')

exports.name = 'traceur'
exports.inputFormats = ['es6', 'traceur']
exports.outputFormat = 'js'

exports.render = function (str, options, locals) {
  const opts = extend({}, options || {}, locals || {})
  const sourceName = opts.sourceName || null
  const outputName = opts.outputName || null

  return traceur.compile(str, options, sourceName, outputName)
}
