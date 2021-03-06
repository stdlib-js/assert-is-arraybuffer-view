/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Test if a value is an `ArrayBuffer` view.
*
* @module @stdlib/assert-is-arraybuffer-view
*
* @example
* var isArrayBufferView = require( '@stdlib/assert-is-arraybuffer-view' );
* var Int32Array = require( '@stdlib/array-int32' );
*
* var bool = isArrayBufferView( new Int32Array( 10 ) );
* // returns true
*
* bool = isArrayBufferView( {} );
* // returns false
*/

// MODULES //

var hasArrayBufferSupport = require( '@stdlib/assert-has-arraybuffer-support' );
var isFunction = require( '@stdlib/assert-is-function' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var noArraybuffer = require( './no_arraybuffer.js' );
var polyfill = require( './polyfill.js' );
var main = require( './main.js' );


// MAIN //

var isArrayBufferView;
if ( hasArrayBufferSupport() ) {
	if ( isFunction( ArrayBuffer.isView ) ) {
		isArrayBufferView = main;
	} else {
		isArrayBufferView = polyfill;
	}
} else {
	isArrayBufferView = noArraybuffer;
}


// EXPORTS //

module.exports = isArrayBufferView;
