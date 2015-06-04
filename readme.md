# base-twitter-link [![Build Status](https://travis-ci.org/bendrucker/base-twitter-link.svg?branch=master)](https://travis-ci.org/bendrucker/base-twitter-link)

> A basic link to your Twitter built with [base-element](https://github.com/shama/base-element)


## Install

```
$ npm install --save base-twitter-link
```


## Usage

```js
var TwitterLink = require('base-twitter-link')
new TwitterLink().toString('bendrucker')
```

```html
<a href="https://twitter.com/bendrucker" rel="me" title="Follow me on Twitter @bendrucker">@bendrucker</a>
```

## API

#### `new TwitterLink([el])` -> `link`

##### el

Type: `HTMLElement`

The optional HTML element to append to.

#### `link.render(username)` -> `vdom`

##### username

*Required*  
Type: `string` / `object`

Your username. Optionally, pass an object with properties for the `<a>` element like `title` to override the defaults.

#### `link.toString(username)` -> `html`

Same signature as `link.render`, returning an html string instead of vdom. 

## License

MIT © [Ben Drucker](http://bendrucker.me)
