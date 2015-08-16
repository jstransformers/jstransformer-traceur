# jstransformer-traceur

[Traceur](http://npm.im/traceur) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-traceur/master.svg)](https://travis-ci.org/jstransformers/jstransformer-traceur)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-traceur/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-traceur?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-traceur/master.svg)](http://david-dm.org/jstransformers/jstransformer-traceur)
[![NPM version](https://img.shields.io/npm/v/jstransformer-traceur.svg)](https://www.npmjs.org/package/jstransformer-traceur)

## Installation

    npm install jstransformer-traceur

## API

```js
var traceur = require('jstransformer')(require('jstransformer-traceur'))

traceur.render('let x = 10').body
//=> Compiled ES5 JavaScript
```

## License

MIT
