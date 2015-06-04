'use strict'

var BaseElement = require('base-element')
var extend = require('xtend')

module.exports = TwitterLink

function TwitterLink (el) {
  BaseElement.call(this, el)
}
TwitterLink.prototype = Object.create(BaseElement.prototype)
TwitterLink.prototype.render = function (options) {
  if (typeof options === 'string') {
    options = {username: options}
  }
  return this.afterRender(this.html('a', props(options), '@' + options.username))
}

function props (options) {
  var username = options.username
  return extend({
    title: 'Follow me on Twitter @' + username,
    href: 'https://twitter.com/' + username,
    rel: 'me'
  }, options)
}
