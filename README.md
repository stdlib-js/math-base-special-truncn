<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# truncn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Round a numeric value to the nearest multiple of 10^n toward zero.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-truncn
```

</section>

<section class="usage">

## Usage

```javascript
var truncn = require( '@stdlib/math-base-special-truncn' );
```

#### truncn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n` toward zero.

```javascript
// Round a value to 4 decimal places:
var v = truncn( 3.141592653589793, -4 );
// returns 3.1415

// If n = 0, `truncn` behaves like `trunc`:
v = truncn( 3.141592653589793, 0 );
// returns 3.0

// Round a value to the nearest thousand:
v = truncn( 12368.0, 3 );
// returns 12000.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var truncn = require( '@stdlib/math-base-special-truncn' );

var x;
var n;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = truncn( randu()*5.0, 0 );
    v = truncn( x, -n );
    console.log( 'x: %d. Number of decimals: %d. Rounded: %d.', x, n, v );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-truncn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-truncn

[test-image]: https://github.com/stdlib-js/math-base-special-truncn/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-truncn/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-truncn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-truncn?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-truncn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-truncn/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-truncn/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
