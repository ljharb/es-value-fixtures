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
/** @type {symbol[]} */
var symbols = hasSymbols ? [].concat(
	// @ts-expect-error TS sucks with concat
	Symbol.iterator,
	Symbol('foo'),
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
	Symbol.unscopables || []
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
	// @ts-expect-error FIXME: figure out how to infer this properly
	configurable: function (descriptor) {
		return assign({}, descriptor, { '[[Configurable]]': true });
	},
	// @ts-expect-error FIXME: figure out how to infer this properly
	nonConfigurable: function (descriptor) {
		return assign({}, descriptor, { '[[Configurable]]': false });
	},
	// @ts-expect-error FIXME: figure out how to infer this properly
	enumerable: function (descriptor) {
		return assign({}, descriptor, { '[[Enumerable]]': true });
	},
	// @ts-expect-error FIXME: figure out how to infer this properly
	nonEnumerable: function (descriptor) {
		return assign({}, descriptor, { '[[Enumerable]]': false });
	},
	// @ts-expect-error FIXME: figure out how to infer this properly
	writable: function (descriptor) {
		return assign({}, descriptor, { '[[Writable]]': true });
	},
	// @ts-expect-error FIXME: figure out how to infer this properly
	nonWritable: function (descriptor) {
		return assign({}, descriptor, { '[[Writable]]': false });
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
	timestamps: timestamps,
	toStringOnlyObject: toStringOnlyObject,
	truthies: truthies,
	uncoercibleFnObject: uncoercibleFnObject,
	uncoercibleObject: uncoercibleObject,
	valueOfOnlyObject: valueOfOnlyObject,
	zeroes: zeroes,
	bothDescriptor: function () {
		return { '[[Get]]': function () {}, '[[Value]]': true };
	},
	bothDescriptorWritable: function () {
		// @ts-expect-error FIXME: figure out how to infer this properly
		return descriptors.writable({ '[[Get]]': function () {} });
	},
	/** @type {(value: unknown) => object} */
	accessorDescriptor: function (value) {
		return descriptors.enumerable(descriptors.configurable({
			'[[Get]]': function get() { return value; }
		}));
	},
	mutatorDescriptor: function () {
		return descriptors.enumerable(descriptors.configurable({
			'[[Set]]': function () {}
		}));
	},
	/** @type {(value: unknown) => object} */
	dataDescriptor: function (value) {
		return descriptors.nonWritable({
			'[[Value]]': arguments.length > 0 ? value : 42
		});
	},
	genericDescriptor: function () {
		return descriptors.configurable(descriptors.nonEnumerable());
	},
	/** @type {(value: unknown) => object} */
	assignedDescriptor: function (value) {
		return descriptors.configurable(descriptors.enumerable(descriptors.writable({ '[[Value]]': value })));
	},
	descriptors: descriptors
};
