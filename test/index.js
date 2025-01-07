'use strict';

/** @type {Record<string, unknown>} */
var values = require('../');

var test = require('tape');
var ownKeys = require('reflect.ownkeys');
var forEach = require('foreach');
var isArray = require('isarray');
var hasSymbols = require('has-symbols')();
var flatMap = require('array.prototype.flatmap');
var description = require('symbol.prototype.description');
var IntlFallbackSymbol = require('intl-fallback-symbol');
var wellKnownSymbols = require('well-known-symbols');
var GetIntrinsic = require('get-intrinsic');

var isBrokenNodePolyfill = hasSymbols
	&& Symbol.dispose
	&& Symbol.keyFor(Symbol.dispose)
	&& Symbol.asyncDispose
	&& Symbol.keyFor(Symbol.asyncDispose);

/** @type {(t: test.Test, key: string, item: unknown) => void} */
function testItem(t, key, item) {
	t.ok(item || item === false, key + ' is truthy or literal `false`');
	if (isArray(item)) {
		t.ok(true, key + ' is an array');
	} else if (typeof item === 'function') {
		t.equal(typeof item, 'function', key + ' is a function');
		if (key.slice(-'Object'.length) !== 'Object') {
			t.equal(typeof item(), 'object', key + ' function returns an object');
		}
	} else if (item && typeof item === 'object') {
		t.ok(typeof item === 'object', key + ' is an object');
		if (key.slice(-'Object'.length) !== 'Object') {
			forEach(ownKeys(item), /** @param {string} itemKey */ function (itemKey) {
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
		'registeredSymbols',
		'unregisteredSymbols',
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

	forEach(expected, /** @param {string} key */ function (key) {
		testItem(t, key, values[key]);
	});

	t.end();
});

test('well-known symbols', { skip: !hasSymbols }, function (t) {
	var actual = flatMap(
		ownKeys(Symbol),
		/** @param {keyof SymbolConstructor} k */
		function (k) {
			if (typeof Symbol[k] !== 'symbol') {
				return [];
			}
			if (isBrokenNodePolyfill && (k === 'dispose' || k === 'asyncDispose')) {
				return Symbol[k];
			}
			if (Symbol.keyFor(Symbol[k])) {
				return [];
			}
			return Symbol[k];
		}
	);

	if (IntlFallbackSymbol) {
		t.equal(
			values.wellKnownSymbols.indexOf(IntlFallbackSymbol),
			-1,
			'IntlFallbackSymbol is not a well-known symbol'
		);
	}

	/** @type {(a: symbol, b: symbol) => number} */
	var comparator = function (a, b) {
		return description(a).localeCompare(description(b));
	};

	t.deepEqual(
		values.wellKnownSymbols.sort(comparator),
		actual.sort(comparator),
		'well-known symbols are accounted for'
	);

	var actualWKS = wellKnownSymbols.map(function (x) { return GetIntrinsic('%' + x + '%', true); }).filter(Boolean);
	t.equal(values.wellKnownSymbols.length, actualWKS.length, 'es-value-fixtures and well-known-symbols agree');

	t.end();
});
