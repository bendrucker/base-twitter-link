'use strict'

var BaseElement = require('base-element')
var inherits = require('inherits')
var extend = require('xtend')
var omit = require('object-omit')

module.exports = TwitterLink

function TwitterLink (el) {
  if (!(this instanceof TwitterLink)) return new TwitterLink(el)
  BaseElement.call(this, el)
}

inherits(TwitterLink, BaseElement)

TwitterLink.prototype.render = function (state) {
  if (typeof state === 'string') {
    state = {username: state}
  }
  return this.afterRender(this.html('a', properties(state), '@' + state.username))
}

function properties (state) {
  var username = state.username
  return extend({
    title: 'Follow me on Twitter @' + username,
    href: 'https://twitter.com/' + username,
    rel: 'me'
  }, omit(state, 'username'))
}
