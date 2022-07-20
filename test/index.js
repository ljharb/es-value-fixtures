'use strict';

var values = require('../');

var test = require('tape');
var ownKeys = require('reflect.ownkeys');
var forEach = require('foreach');
var isArray = require('isarray');
var hasSymbols = require('has-symbols')();
var flatMap = require('array.prototype.flatmap');
var description = require('symbol.prototype.description');
var IntlFallbackSymbol = require('intl-fallback-symbol');

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
			forEach(ownKeys(item), function (itemKey) {
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
		'bigints',
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
		'wellKnownSymbols',
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
		'assignedDescriptor',
		'descriptors'
	];

	t.deepEqual(ownKeys(values).sort(), expected.sort(), 'has expected fixture names');

	forEach(expected, function (key) {
		testItem(t, key, values[key]);
	});

	t.end();
});

test('well-known symbols', { skip: !hasSymbols }, function (t) {
	var comparator = function (a, b) {
		return description(a).localeCompare(description(b));
	};

	var actual = flatMap(
		ownKeys(Symbol),
		function (k) { return typeof Symbol[k] === 'symbol' ? Symbol[k] : []; }
	);

	t.equal(
		values.wellKnownSymbols.indexOf(IntlFallbackSymbol),
		-1,
		'IntlFallbackSymbol is not a well-known symbol'
	);

	t.deepEqual(
		values.wellKnownSymbols.sort(comparator),
		actual.sort(comparator),
		'well-known symbols are accounted for'
	);

	t.end();
});
