---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
---

{{JSRef}}

Объект **`Float64Array`** представляет типизированный массив 64-битных чисел с плавающей запятой (соответствует типу `double` в языке C) с платформо-зависимым порядком байт.Если необходим контроль за порядком байт, то вместо этого объекта используйте [`DataView`](/ru/docs/Web/JavaScript/Reference/DataView). Содержимое инициализируется значением `0`. Создав экземпляр **`Float64Array`** , можно получить доступ к элементам массива, используя методы объекта или стандартный синтаксис доступа к элементу массива по его индексу (с помощью скобочной нотации - квадратные скобки).

## Syntax

```
new Float64Array(); // new in ES2017
new Float64Array(length);
new Float64Array(typedArray);
new Float64Array(object);
new Float64Array(buffer [, byteOffset [, length]]);
```

For more information about the constructor syntax and the parameters, see _[TypedArray](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `8` in the case of an `Float64Array`.
- Float64Array.length
  - : Static length property whose value is 0. For the actual length (number of elements), see {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float64Array.name")}}
  - : Returns the string value of the constructor name. In the case of the `Float64Array` type: "Float64Array".
- {{jsxref("TypedArray.prototype", "Float64Array.prototype")}}
  - : Prototype for the _TypedArray_ objects.

## Methods

- {{jsxref("TypedArray.from", "Float64Array.from()")}}
  - : Creates a new `Float64Array` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float64Array.of()")}}
  - : Creates a new `Float64Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## `Float64Array` prototype

All `Float64Array` objects inherit from {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Properties

- `Float64Array.prototype.constructor`
  - : Returns the function that created an instance's prototype. This is the `Float64Array` constructor by default.
- {{jsxref("TypedArray.prototype.buffer", "Float64Array.prototype.buffer")}} {{readonlyInline}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `Float64Array` Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Float64Array.prototype.byteLength")}} {{readonlyInline}}
  - : Returns the length (in bytes) of the `Float64Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "Float64Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Returns the offset (in bytes) of the `Float64Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}} {{readonlyInline}}
  - : Returns the number of elements hold in the `Float64Array`. Fixed at construction time and thus **read only.**

### Methods

- {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float64Array.prototype.entries()")}}
  - : Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float64Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float64Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float64Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float64Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float64Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float64Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float64Array.prototype.includes()")}} {{experimental_inline}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float64Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float64Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float64Array.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float64Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float64Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float64Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Former non-standard version of {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float64Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float64Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Float64Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float64Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Float64Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float64Array.prototype.some()")}}
  - : Returns true if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Float64Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float64Array.prototype.subarray()")}}
  - : Returns a new `Float64Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "Float64Array.prototype.values()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float64Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float64Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float64Array.prototype[@@iterator]()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array.

## Examples

Different ways to create a `Float64Array`:

```js
// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// From an iterable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
```

## Specifications

| Specification                                                   | Status                   | Comment                                                                                                                          |
| --------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                     | {{Spec2('Typed Array')}} | Superseded by ECMAScript 2015.                                                                                                   |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}}  | {{Spec2('ES2015')}}      | Initial definition in an ECMA standard. Specified that `new` is required.                                                        |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 changed the `Float64Array` constructor to use the `ToIndex` operation and allows constructors with no arguments. |

## Browser compatibility

{{Compat}}

## Compatibility notes

Starting with ECMAScript 2015, `Float64Array` constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a `Float64Array` constructor as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float64Array([1, 2, 3]);
```

## See also

- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
