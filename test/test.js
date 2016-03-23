'use strict';

// MODULES //

var tape = require( 'tape' );
var sqrt = require( 'math-sqrt' );
var SQRT2 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof SQRT2, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the square root of 2', function test( t ) {
	var expected = sqrt( 2 );
	t.equal( SQRT2, expected, 'equals sqrt(2)' );
	t.end();
});
