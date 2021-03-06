<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# gdot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the dot product of two vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

<div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b7a453f335bade718a3f48a61658d1564dc3f786/lib/node_modules/@stdlib/blas/gdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-gdot
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var gdot = require( '@stdlib/blas-gdot' );
```

#### gdot( x, y )

Calculates the dot product of vectors `x` and `y`.

```javascript
var Int32Array = require( '@stdlib/array-int32' );
var array = require( '@stdlib/ndarray-array' );

var x = array( new Int32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Int32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

var z = gdot( x, y );
// returns -5.0
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] or an array-like object.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] or an array-like object.

If provided empty vectors, the function returns `0.0`.

```javascript
var z = gdot( [], [] );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `gdot()` corresponds to the [BLAS][blas] level 1 function [`ddot`][ddot] with the exception that this implementation works with any array type, not just Float64Arrays.
-   In general, for best performance, especially for large vectors, provide 1-dimensional [`ndarrays`][@stdlib/ndarray/array] whose underlying data type is either `float64` or `float32`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var gdot = require( '@stdlib/blas-gdot' );

var rand1 = discreteUniform.factory( 0, 100 );
var rand2 = discreteUniform.factory( 0, 10 );

var x = [];
var y = [];
var i;
for ( i = 0; i < 10; i++ ) {
    x.push( rand1() );
    y.push( rand2() );
}
console.log( x );
console.log( y );

var z = gdot( x, y );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/gdot`][@stdlib/blas/base/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/ddot`][@stdlib/blas/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/sdot`][@stdlib/blas/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-gdot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-gdot

[test-image]: https://github.com/stdlib-js/blas-gdot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-gdot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-gdot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-gdot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-gdot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-gdot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-gdot/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-gdot/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-gdot/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-gdot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-gdot/main/LICENSE

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[ddot]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

<!-- <related-links> -->

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas-base-gdot

[@stdlib/blas/ddot]: https://github.com/stdlib-js/blas-ddot

[@stdlib/blas/sdot]: https://github.com/stdlib-js/blas-sdot

<!-- </related-links> -->

</section>

<!-- /.links -->
