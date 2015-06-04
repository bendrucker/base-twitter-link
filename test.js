'use strict'

var test = require('tape')
var Twitter = require('./')

test(function (t) {
  var basic = new Twitter().render('bendrucker')
  t.equal(basic.tagName, 'A')
  t.equal(basic.properties.title, 'Follow me on Twitter @bendrucker')
  t.equal(basic.properties.href, 'https://twitter.com/bendrucker')
  t.equal(basic.properties.rel, 'me')
  t.deepEqual(basic.children, [{text: '@bendrucker'}])
  var adv = new Twitter().render({
    username: 'bendrucker',
    title: 'Followers plz'
  })
  t.equal(adv.properties.title, 'Followers plz')
  t.end()
})
