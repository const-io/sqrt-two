SQRT2
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Square root][math-sqrt] of `2`.


## Installation

``` bash
$ npm install const-sqrt-two
```


## Usage

``` javascript
var SQRT2 = require( 'const-sqrt-two' );
```

#### SQRT2

[Square root][math-sqrt] of `2`.

``` javascript
SQRT2 === 1.4142135623730951;
```


## Examples

``` javascript
var SQRT2 = require( 'const-sqrt-two' );

console.log( SQRT2 );
// returns 1.4142135623730951
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-sqrt-two.svg
[npm-url]: https://npmjs.org/package/const-sqrt-two

[build-image]: http://img.shields.io/travis/const-io/sqrt-two/master.svg
[build-url]: https://travis-ci.org/const-io/sqrt-two

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/sqrt-two/master.svg
[coverage-url]: https://codecov.io/github/const-io/sqrt-two?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/sqrt-two.svg
[dependencies-url]: https://david-dm.org/const-io/sqrt-two

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/sqrt-two.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/sqrt-two

[github-issues-image]: http://img.shields.io/github/issues/const-io/sqrt-two.svg
[github-issues-url]: https://github.com/const-io/sqrt-two/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io
[math-sqrt]: https://github.com/math-io/sqrt
