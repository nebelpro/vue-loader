/**
看代码，此部分与vue的loader逻辑无关，
可作为通用的逻辑

*/

var path = require('path')
var parse = require('./parser')
var loaderUtils = require('loader-utils')

module.exports = function (content) {
  this.cacheable()
  var query = loaderUtils.parseQuery(this.query)
  var filename = path.basename(this.resourcePath)
  var parts = parse(content, filename, this.sourceMap)
  var part = parts[query.type]
  if (Array.isArray(part)) {
    part = part[query.index]
  }
  this.callback(null, part.content, part.map)
}
