'use strict';

var assign = require('object.assign');

var hasSymbols = require('has-symbols')();
var hasBigInts = require('has-bigints')();
var arrowFunctions = require('make-arrow-function').list();
var generatorFunctions = require('make-generator-function')();
var asyncFunctions = require('make-async-function').list();
var IntlFallbackSymbol = require('intl-fallback-symbol');

var coercibleObject = { valueOf: function () { return 3; }, toString: function () { return 42; } };
var coercibleFnObject = {
	valueOf: function () { return function valueOfFn() {}; },
	toString: function () { return 42; }
};
var valueOfOnlyObject = { valueOf: function () { return 4; }, toString: function () { return {}; } };
var toStringOnlyObject = { valueOf: function () { return {}; }, toString: function () { return 7; } };
var uncoercibleObject = { valueOf: function () { return {}; }, toString: function () { return {}; } };
var uncoercibleFnObject = {
	valueOf: function () { return function valueOfFn() {}; },
	toString: function () { return function toStrFn() {}; }
};
var objects = [{}, coercibleObject, coercibleFnObject, toStringOnlyObject, valueOfOnlyObject];
var nullPrimitives = [undefined, null];
var nonIntegerNumbers = [-1.3, 0.2, 1.8, 1 / 3];
var int32s = [1, 7, 42];
var integerNumbers = int32s.concat([1e17]);
var zeroes = [0, -0];
var infinities = [Infinity, -Infinity];
var numbers = zeroes.concat([42], infinities, nonIntegerNumbers);
var strings = ['', 'foo', 'a\uD83D\uDCA9c'];
var booleans = [true, false];
var $symbolFor = hasSymbols && Symbol['for']; // eslint-disable-line no-restricted-properties
/** @type {symbol[]} */
var unregisteredSymbols = hasSymbols ? [].concat(
	// @ts-expect-error TS sucks with concat
	Symbol(), // eslint-disable-line symbol-description
	Symbol('foo')
) : [];
/** @type {symbol[]} */
var registeredSymbols = hasSymbols && $symbolFor ? [].concat(
	// @ts-expect-error TS sucks with concat
	$symbolFor(),
	$symbolFor('registered!')
) : [];
/** @type {symbol[]} */
var symbols = hasSymbols ? [].concat(
	// @ts-expect-error TS sucks with concat
	Symbol.iterator,
	unregisteredSymbols,
	registeredSymbols,
	IntlFallbackSymbol || []
) : [];
/** @type {symbol[]} */
var wellKnownSymbols = hasSymbols ? [].concat(
	// @ts-expect-error TS sucks with concat
	Symbol.iterator || [],
	Symbol.toStringTag || [],
	Symbol.hasInstance || [],
	Symbol.isConcatSpreadable || [],
	Symbol.asyncIterator || [],
	Symbol.match || [],
	Symbol.matchAll || [],
	Symbol.replace || [],
	Symbol.search || [],
	Symbol.species || [],
	Symbol.split || [],
	Symbol.toPrimitive || [],
	Symbol.unscopables || [],
	Symbol.dispose || [],
	Symbol.asyncDispose || []
) : [];
var bigints = hasBigInts ? [BigInt(42), BigInt(0)] : [];
/** @type {(null | undefined | boolean | string | number | bigint)[]} */
// @ts-expect-error TS sucks with concat
var nonSymbolPrimitives = [].concat(nullPrimitives, booleans, strings, numbers, bigints);
/** @type {(null | undefined | boolean | string | symbol)[]} */
// @ts-expect-error TS sucks with concat
var nonNumberPrimitives = [].concat(nullPrimitives, booleans, strings, symbols);
/** @type {(boolean | string | number | symbol | bigint)[]} */
// @ts-expect-error TS sucks with concat
var nonNullPrimitives = [].concat(booleans, strings, numbers, symbols, bigints);
/** @type {(null | boolean | string | number | symbol | bigint)[]} */
// @ts-expect-error TS sucks with concat
var nonUndefinedPrimitives = [].concat(null, nonNullPrimitives);
/** @type {(null | undefined | boolean | number | symbol | object | bigint)[]} */
// @ts-expect-error TS sucks with concat
var nonStrings = [].concat(nullPrimitives, booleans, numbers, symbols, objects, bigints);
/** @type {(null | undefined | boolean | number | string | symbol | bigint)[]} */
// @ts-expect-error TS sucks with concat
var primitives = [].concat(nullPrimitives, nonNullPrimitives);
/** @type {(null | undefined | boolean | number | bigint)[]} */
// @ts-expect-error TS sucks with concat
var nonPropertyKeys = [].concat(nullPrimitives, booleans, numbers, objects);
/** @type {(string | symbol)[]} */
// @ts-expect-error TS sucks with concat
var propertyKeys = [].concat(strings, symbols);
/** @type {(null | undefined | string | symbol | number | bigint | object)[]} */
// @ts-expect-error TS sucks with concat
var nonBooleans = [].concat(nullPrimitives, strings, symbols, numbers, bigints, objects);
/** @type {[null, undefined, false, '', 0, -0, NaN]} */
// @ts-expect-error TS sucks with concat
var falsies = [].concat(nullPrimitives, false, '', 0, -0, NaN);
/** @type {(true | string | number | bigint | symbol | object)[]} */
// @ts-expect-error TS sucks with concat
var truthies = [].concat(true, 'foo', 42, hasBigInts ? BigInt(42) : [], symbols, objects);
/** @type {number[]} */
// @ts-expect-error TS sucks with concat
var timestamps = [].concat(0, 946713600000, 1546329600000);
/** @type {unknown[]} */
// @ts-expect-error TS sucks with concat
var nonFunctions = [].concat(primitives, objects, [42]);
/** @type {unknown[]} */
// @ts-expect-error TS sucks with concat
var nonArrays = [].concat(nonFunctions);
/** @type {(null | undefined | string | boolean | symbol | number)[]} */
// @ts-expect-error TS sucks with concat
var nonBigInts = [].concat(nonNumberPrimitives, numbers);
/** @type {Function[]} */
// @ts-expect-error TS sucks with concat
var nonConstructorFunctions = [].concat(arrowFunctions, generatorFunctions, asyncFunctions);
/** @type {(null | undefined | boolean | string | symbol | object)[]} */
// @ts-expect-error TS sucks with concat
var nonNumbers = nonNumberPrimitives.concat(objects);
/** @type {(null | undefined | boolean | string | symbol | object | number)[]} */
// @ts-expect-error TS sucks with concat
var notNonNegativeIntegers = nonNumbers.concat(nonIntegerNumbers, NaN, infinities, [-1, -7, -42, -1e17]);

/** @type {import('.')['descriptors']} */
var descriptors = {
	configurable: function (descriptor) {
		// eslint-disable-next-line no-extra-parens
		return assign({}, descriptor, { '[[Configurable]]': /** @type {true} */ (true) });
	},
	nonConfigurable: function (descriptor) {
		// eslint-disable-next-line no-extra-parens
		return assign({}, descriptor, { '[[Configurable]]': /** @type {false} */ (false) });
	},
	enumerable: function (descriptor) {
		// eslint-disable-next-line no-extra-parens
		return assign({}, descriptor, { '[[Enumerable]]': /** @type {true} */ (true) });
	},
	nonEnumerable: function (descriptor) {
		// eslint-disable-next-line no-extra-parens
		return assign({}, descriptor, { '[[Enumerable]]': /** @type {false} */ (false) });
	},
	writable: function (descriptor) {
		// eslint-disable-next-line no-extra-parens
		return assign({}, descriptor, { '[[Writable]]': /** @type {true} */ (true) });
	},
	nonWritable: function (descriptor) {
		// eslint-disable-next-line no-extra-parens
		return assign({}, descriptor, { '[[Writable]]': /** @type {false} */ (false) });
	},
	getter: function (value) {
		return { '[[Get]]': function get() { return value; } };
	},
	setter: function () {
		return { '[[Set]]': function () {} };
	},
	value: function (value) {
		return { '[[Value]]': value };
	}
};

/** @type {import('.')} */
module.exports = {
	booleans: booleans,
	coercibleFnObject: coercibleFnObject,
	coercibleObject: coercibleObject,
	falsies: falsies,
	hasSymbols: hasSymbols,
	infinities: infinities,
	int32s: int32s,
	integerNumbers: integerNumbers,
	nonArrays: nonArrays,
	bigints: bigints,
	nonBigInts: nonBigInts,
	nonBooleans: nonBooleans,
	nonFunctions: nonFunctions,
	arrowFunctions: arrowFunctions,
	generatorFunctions: generatorFunctions,
	asyncFunctions: asyncFunctions,
	nonConstructorFunctions: nonConstructorFunctions,
	nonIntegerNumbers: nonIntegerNumbers,
	notNonNegativeIntegers: notNonNegativeIntegers,
	nonNullPrimitives: nonNullPrimitives,
	nonNumberPrimitives: nonNumberPrimitives,
	nonNumbers: nonNumbers,
	nonPropertyKeys: nonPropertyKeys,
	nonStrings: nonStrings,
	nonSymbolPrimitives: nonSymbolPrimitives,
	nonUndefinedPrimitives: nonUndefinedPrimitives,
	nullPrimitives: nullPrimitives,
	numbers: numbers,
	objects: objects,
	primitives: primitives,
	propertyKeys: propertyKeys,
	strings: strings,
	symbols: symbols,
	wellKnownSymbols: wellKnownSymbols,
	registeredSymbols: registeredSymbols,
	unregisteredSymbols: unregisteredSymbols,
	timestamps: timestamps,
	toStringOnlyObject: toStringOnlyObject,
	truthies: truthies,
	uncoercibleFnObject: uncoercibleFnObject,
	uncoercibleObject: uncoercibleObject,
	valueOfOnlyObject: valueOfOnlyObject,
	zeroes: zeroes,
	bothDescriptor: function () {
		return assign({}, descriptors.getter(), descriptors.value(true));
	},
	bothDescriptorWritable: function () {
		return descriptors.writable(descriptors.getter());
	},
	accessorDescriptor: function (value) {
		return descriptors.enumerable(descriptors.configurable(descriptors.getter(value)));
	},
	mutatorDescriptor: function () {
		return descriptors.enumerable(descriptors.configurable(descriptors.setter()));
	},
	dataDescriptor: function (value) {
		return descriptors.nonWritable(descriptors.value(arguments.length > 0 ? value : 42));
	},
	genericDescriptor: function () {
		return descriptors.configurable(descriptors.nonEnumerable());
	},
	assignedDescriptor: function (value) {
		return descriptors.configurable(descriptors.enumerable(descriptors.writable(descriptors.value(value))));
	},
	descriptors: descriptors
};
