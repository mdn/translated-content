---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
---

{{JSRef}}

**`BigUint64Array`** 类型数组表示一个平台字节顺序的 64 位无符号整型数组。如果想要控制字符顺序，请使用 {{jsxref("DataView")}} 替代。内容初始化为 `0n`. 创建之后可以使用对象中的方法或使用标准数组索引语法 (括号表示法) 来获取数组中的元素。

## 句法

```plain
new BigUint64Array();
new BigUint64Array(length);
new BigUint64Array(typedArray);
new BigUint64Array(object);
new BigUint64Array(buffer [, byteOffset [, length]]);
```

更多有关构造方法和参数的信息，参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : 返回一个元素容量的数字值。`8` in the case of a `BigUint64Array`.
- BigUint64Array.length
  - : Static length property whose value is 3. For the actual length (number of elements), see {{jsxref("TypedArray.prototype.length", "BigUint64Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "BigUint64Array.name")}}
  - : Returns the string value of the constructor name. In the case of the `BigUint64Array` type: "BigUint64Array".
- {{jsxref("TypedArray.prototype", "BigUint64Array.prototype")}}
  - : Prototype for the _TypedArray_ objects.

## Methods

- {{jsxref("TypedArray.from", "BigUint64Array.from()")}}
  - : Creates a new `BigUint64Array` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "BigUint64Array.of()")}}
  - : Creates a new `BigUint64Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## `BigUint64Array` prototype

All `BigUint64Array` objects inherit from {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Properties

- `BigUint64Array.prototype.constructor`
  - : Returns the function that created an instance's prototype. This is the `BigUint64Array` constructor by default.
- {{jsxref("TypedArray.prototype.buffer", "BigUint64Array.prototype.buffer")}} {{readonlyInline}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `BigUint64Array`. Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "BigUint64Array.prototype.byteLength")}} {{readonlyInline}}
  - : Returns the length (in bytes) of the `BigUint64Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "BigUint64Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Returns the offset (in bytes) of the `BigUint64Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "BigUint64Array.prototype.length")}} {{readonlyInline}}
  - : Returns the number of elements hold in the `BigUint64Array`. Fixed at construction time and thus **read only.**

### Methods

- {{jsxref("TypedArray.copyWithin", "BigUint64Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "BigUint64Array.prototype.entries()")}}
  - : Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "BigUint64Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "BigUint64Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "BigUint64Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "BigUint64Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "BigUint64Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "BigUint64Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "BigUint64Array.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "BigUint64Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "BigUint64Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "BigUint64Array.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "BigUint64Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "BigUint64Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "BigUint64Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "BigUint64Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "BigUint64Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "BigUint64Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "BigUint64Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "BigUint64Array.prototype.some()")}}
  - : Returns true if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "BigUint64Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "BigUint64Array.prototype.subarray()")}}
  - : Returns a new `BigUint64Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "BigUint64Array.prototype.values()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "BigUint64Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "BigUint64Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "BigUint64Array.prototype[@@iterator]()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array.

## Examples

Different ways to create a `BigUint64Array`:

```js
// From a length
var biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new BigUint64Array([21n,31n]);
console.log(arr[1]); // 31n

// From another TypedArray
var x = new BigUint64Array([21n, 31n]);
var y = new BigUint64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigUint64Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1n, 2n, 3n]; }();
var biguint64 = new BigUint64Array(iterable);
// BigUint64Array[1n, 2n, 3n]
```

## Specifications

[BigInt proposal](https://tc39.github.io/proposal-bigint/#sec-typedarrays-and-dataview)

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigInt64Array")}}
- {{jsxref("DataView")}}
