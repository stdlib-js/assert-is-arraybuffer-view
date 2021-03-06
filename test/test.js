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

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var Int8Array = require( '@stdlib/array-int8' );
var Int16Array = require( '@stdlib/array-int16' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var isArrayBufferView = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isArrayBufferView, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment does not support array buffers, the main export is a polyfill which always returns `false`', function test( t ) {
	var isArrayBufferView;
	var values;
	var i;

	isArrayBufferView = proxyquire( './../lib', {
		'@stdlib/assert-has-arraybuffer-support': hasSupport
	});

	t.strictEqual( isArrayBufferView, require( './../lib/no_arraybuffer.js' ), 'exports a polyfill' );

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		false,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArrayBufferView( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();

	function hasSupport() {
		return false;
	}
});

tape( 'if an environment does support array buffers but not the `ArrayBuffer.isView` method, the main export is a polyfill checking for data views or typed arrays', function test( t ) {
	var isArrayBufferView;
	var values;
	var i;

	isArrayBufferView = proxyquire( './../lib', {
		'@stdlib/array-buffer': {
			'isView': null
		}
	});

	t.strictEqual( isArrayBufferView, require( './../lib/polyfill.js' ), 'exports a polyfill' );

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		false,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArrayBufferView( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}

	values = [
		new Float64Array( 10 ),
		new Float32Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int8Array( 10 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArrayBufferView( values[ i ] ), true, 'returns true when provided '+values[ i ] );
	}

	t.end();
});

tape( 'if an environment does support array buffers and the `ArrayBuffer.isView` method, the main export is not any of the polyfills', function test( t ) {
	var isArrayBufferView = proxyquire( './../lib', {
		'@stdlib/assert-has-arraybuffer-support': hasSupport,
		'./main.js': main
	});

	t.strictEqual( isArrayBufferView, isArrayBufferView, 'exports expected function' );
	t.end();

	function hasSupport() {
		return true;
	}

	function main() {
		return false;
	}
});
