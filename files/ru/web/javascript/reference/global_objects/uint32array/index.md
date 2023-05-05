---
title: Uint32Array
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array
translation_of: Web/JavaScript/Reference/Global_Objects/Uint32Array
---
{{JSRef}}

Объект **`Uint32Array`** представляет типизированный массив 32-битных целых беззнаковых чисел с платформо-зависимым порядком байт. Если необходим контроль за порядком байт, то вместо этого объекта используйте [`DataView`](/ru/docs/Web/JavaScript/Reference/Global_Objects/DataView). Содержимое инициализируется значением `0`. Создав экземпляр **`Uint32Array`**, можно получить доступ к элементам массива, используя методы объекта или стандартный синтаксис доступа к элементу массива по его индексу (с помощью скобочной нотации).

## Syntax

```
new Uint32Array(); // new in ES2017
new Uint32Array(length);
new Uint32Array(typedArray);
new Uint32Array(object);
new Uint32Array(buffer [, byteOffset [, length]]);
```

For more information about the constructor syntax and the parameters, see _[TypedArray](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint32Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `4` in the case of an `Uint32Array`.
- Uint32Array.length
  - : Static length property whose value is 0. For the actual length (number of elements), see {{jsxref("TypedArray.prototype.length", "Uint32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Uint32Array.name")}}
  - : Returns the string value of the constructor name. In the case of the `Uint32Array` type: "Uint32Array".
- {{jsxref("TypedArray.prototype", "Uint32Array.prototype")}}
  - : Prototype for the _TypedArray_ objects.

## Methods

- {{jsxref("TypedArray.from", "Uint32Array.from()")}}
  - : Creates a new `Uint32Array` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint32Array.of()")}}
  - : Creates a new `Uint32Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## `Uint32Array` prototype

All `Uint32Array` objects inherit from {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Properties

- `Uint32Array.prototype.constructor`
  - : Returns the function that created an instance's prototype. This is the `Uint32Array` constructor by default.
- {{jsxref("TypedArray.prototype.buffer", "Uint32Array.prototype.buffer")}} {{readonlyInline}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `Uint32Array` Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Uint32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Returns the length (in bytes) of the `Uint32Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "Uint32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Returns the offset (in bytes) of the `Uint32Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "Uint32Array.prototype.length")}} {{readonlyInline}}
  - : Returns the number of elements hold in the `Uint32Array`. Fixed at construction time and thus **read only.**

### Methods

- {{jsxref("TypedArray.copyWithin", "Uint32Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Uint32Array.prototype.entries()")}}
  - : Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Uint32Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Uint32Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Uint32Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Uint32Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Uint32Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Uint32Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Uint32Array.prototype.includes()")}} {{experimental_inline}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Uint32Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Uint32Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Uint32Array.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Uint32Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Uint32Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Uint32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Former non-standard version of {{jsxref("TypedArray.copyWithin", "Uint32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Uint32Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Uint32Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Uint32Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Uint32Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Uint32Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Uint32Array.prototype.some()")}}
  - : Returns true if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Uint32Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Uint32Array.prototype.subarray()")}}
  - : Returns a new `Uint32Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "Uint32Array.prototype.values()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Uint32Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Uint32Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Uint32Array.prototype[@@iterator]()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array.

## Examples

Different ways to create a `Uint32Array`:

```js
// From a length
var uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Uint32Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint32Array([21, 31]);
var y = new Uint32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Uint32Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var uint32 = new Uint32Array(iterable);
// Uint32Array[1, 2, 3]
```

## Specifications

| Specification                                                                        | Status                           | Comment                                                                                                                         |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Superseded by ECMAScript 2015.                                                                                                  |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Initial definition in an ECMA standard. Specified that `new` is required.                                                       |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 changed the `Uint32Array` constructor to use the `ToIndex` operation and allows constructors with no arguments. |

## Browser compatibility

{{Compat}}

## Compatibility notes

Starting with ECMAScript 2015, `Uint32Array` constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a `Uint32Array` constructor as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Uint32Array([1, 2, 3]);
// TypeError: calling a builtin Uint32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Uint32Array([1, 2, 3]);
```

## See also

- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
