<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isArrayBufferView

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an [ArrayBuffer][mdn-arraybuffer] view.



<section class="usage">

## Usage

```javascript
import isArrayBufferView from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer-view@esm/index.mjs';
```

#### isArrayBufferView( value )

Tests if a value is an [`ArrayBuffer`][mdn-arraybuffer] view such as a [`DataView`][mdn-dataview] or [`TypedArray`][mdn-typed-array].

```javascript
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';

var bool = isArrayBufferView( new Int8Array( 10 ) );
// returns true

bool = isArrayBufferView( new ArrayBuffer( 10 ) );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import isArrayBufferView from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer-view@esm/index.mjs';

var bool = isArrayBufferView( new Int8Array( 10 ) );
// returns true

bool = isArrayBufferView( new Int16Array( 10 ) );
// returns true

bool = isArrayBufferView( new Uint16Array( 10 ) );
// returns true

bool = isArrayBufferView( new Int32Array( 10 ) );
// returns true

bool = isArrayBufferView( new Float64Array( 10 ) );
// returns true

bool = isArrayBufferView( new Float32Array( 10 ) );
// returns true

bool = isArrayBufferView( new ArrayBuffer( 10 ) );
// returns false

bool = isArrayBufferView( [] );
// returns false

bool = isArrayBufferView( {} );
// returns false

bool = isArrayBufferView( null );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-dataview`][@stdlib/assert/is-dataview]</span><span class="delimiter">: </span><span class="description">test if a value is a DataView.</span>
-   <span class="package-name">[`@stdlib/assert-is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-arraybuffer-view.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-arraybuffer-view

[test-image]: https://github.com/stdlib-js/assert-is-arraybuffer-view/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-arraybuffer-view/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-arraybuffer-view/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-arraybuffer-view?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-arraybuffer-view.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-arraybuffer-view/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-arraybuffer-view/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-arraybuffer-view/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-arraybuffer-view/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-arraybuffer-view/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-arraybuffer-view/main/LICENSE

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-dataview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

<!-- <related-links> -->

[@stdlib/assert/is-dataview]: https://github.com/stdlib-js/assert-is-dataview/tree/esm

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert-is-typed-array/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
