'use strict';

var values = require('../');

var test = require('tape');
var keys = require('object-keys');
var forEach = require('foreach');
var isArray = require('isarray');

function testItem(t, key, item) {
	t.ok(item || item === false, key + ' is truthy or literal `false`');
	if (isArray(item)) {
		t.ok(true, key + ' is an array');
	} else if (typeof item === 'function') {
		t.equal(typeof item, 'function', key + ' is a function');
		if (key.slice(-'Object'.length) !== 'Object') {
			t.equal(typeof item(), 'object', key + ' function returns an object');
		}
	} else if (typeof item === 'object') {
		t.ok(typeof item === 'object', key + ' is an object');
		if (key.slice(-'Object'.length) !== 'Object') {
			forEach(keys(item), function (itemKey) {
				testItem(t, key + '.' + itemKey, item[itemKey]);
			});
		}
	} else {
		t.ok(true, key + ' is a ' + typeof item);
	}
}

test('es-value-fixtures', function (t) {
	var expected = [
		'booleans',
		'coercibleFnObject',
		'coercibleObject',
		'falsies',
		'hasSymbols',
		'infinities',
		'int32s',
		'integerNumbers',
		'nonArrays',
		'nonBigInts',
		'nonBooleans',
		'nonFunctions',
		'arrowFunctions',
		'generatorFunctions',
		'asyncFunctions',
		'nonConstructorFunctions',
		'nonIntegerNumbers',
		'notNonNegativeIntegers',
		'nonNullPrimitives',
		'nonNumberPrimitives',
		'nonNumbers',
		'nonPropertyKeys',
		'nonStrings',
		'nonSymbolPrimitives',
		'nonUndefinedPrimitives',
		'nullPrimitives',
		'numbers',
		'objects',
		'primitives',
		'propertyKeys',
		'strings',
		'symbols',
		'timestamps',
		'toStringOnlyObject',
		'truthies',
		'uncoercibleFnObject',
		'uncoercibleObject',
		'valueOfOnlyObject',
		'zeroes',
		'bothDescriptor',
		'bothDescriptorWritable',
		'accessorDescriptor',
		'mutatorDescriptor',
		'dataDescriptor',
		'genericDescriptor',
		'descriptors'
	];

	t.deepEqual(keys(values), expected, 'has expected fixture names');

	forEach(expected, function (key) {
		testItem(t, key, values[key]);
	});

	t.end();
});
