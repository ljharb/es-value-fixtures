declare const values: {
    booleans: boolean[];
	coercibleFnObject: {
        valueOf(): () => void;
        toString(): number;
    };
	coercibleObject: {
        valueOf(): number;
        toString(): number;
    };
	falsies: (null | undefined | false | '' | number)[];
	hasSymbols: boolean;
	infinities: number[];
	int32s: number[];
	integerNumbers: number[];
	nonArrays: unknown[];
	bigints: bigint[];
	nonBigInts: (string | number | boolean | symbol | null | undefined)[];
	nonBooleans: (string | number | bigint | symbol | null | undefined | object)[];
	nonFunctions: unknown[];
	arrowFunctions: Function[];
	generatorFunctions: GeneratorFunction[];
	asyncFunctions: Function[];
	nonConstructorFunctions: Function[];
	nonIntegerNumbers: number[];
	notNonNegativeIntegers: number[];
	nonNullPrimitives: (string | number | bigint | boolean | symbol)[];
	nonNumberPrimitives: (string | boolean | symbol | null | undefined)[];
	nonNumbers: (string | boolean | symbol | object | null | undefined)[];
	nonPropertyKeys: (number | bigint | boolean | null | undefined)[];
	nonStrings: (null | undefined | boolean | number | symbol | object | bigint)[];
	nonSymbolPrimitives: (string | number | bigint | boolean | null | undefined)[];
	nonUndefinedPrimitives: (string | number | bigint | boolean | symbol | null)[];
	nullPrimitives: [null, undefined];
	numbers: number[];
	objects: object[];
	primitives: (string | number | bigint | boolean | symbol | null | undefined)[];
	propertyKeys: (string | symbol)[];
	strings: string[];
	symbols: symbol[];
	wellKnownSymbols: symbol[];
	registeredSymbols: symbol[];
	unregisteredSymbols: symbol[];
	timestamps: number[];
	toStringOnlyObject: {
        valueOf(): object;
        toString(): number;
    };
	truthies: (true | string | number | bigint | symbol | object)[];
	uncoercibleFnObject: {
        valueOf(): () => void;
        toString(): () => void;
    };
	uncoercibleObject: {
        valueOf(): object;
        toString(): object;
    };
	valueOfOnlyObject:  {
        valueOf(): number;
        toString(): object;
    };
	zeroes: number[];
	bothDescriptor(): { '[[Get]]'(): void, '[[Value]]': true };
	bothDescriptorWritable(): { '[[Writable]]': true, '[[Get]]'(): void };
	accessorDescriptor<T extends unknown>(value?: T): { '[[Enumerable]]': true, '[[Configurable]]': true, '[[Get]]'(): T; };
	mutatorDescriptor(): { '[[Enumerable]]': true, '[[Configurable]]': true, '[[Set]]'(): void };
	dataDescriptor<T extends unknown>(value?: T): { '[[Writable]]': false, '[[Value]]': T | 42 };
	genericDescriptor(): { '[[Configurable]]': true, '[[Enumerable]]': false };
	assignedDescriptor<T extends unknown>(value?: T): { '[[Configurable]]': true, '[[Enumerable]]': true, '[[Writable]]': true, '[[Value]]': T };
	descriptors: {
        configurable<T extends object>(descriptor?: T): T & { '[[Configurable]]': true };
        nonConfigurable<T extends object>(descriptor?: T): T & { '[[Configurable]]': false };
        enumerable<T extends object>(descriptor?: T): T & { '[[Enumerable]]': true };
        nonEnumerable<T extends object>(descriptor?: T): T & { '[[Enumerable]]': false };
        writable<T extends object>(descriptor?: T): T & { '[[Writable]]': true };
        nonWritable<T extends object>(descriptor?: T): T & { '[[Writable]]': false };
		getter<T>(value?: T): { '[[Get]]'(): T | undefined };
		setter(): { '[[Set]]'(v: unknown): void };
		value<T>(value: T): { '[[Value]]': T };
    };
};

export = values;
