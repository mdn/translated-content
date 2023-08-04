---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
---

{{JSRef}}

该 **`Int32Array`** 类型表示在平台顺序字节中一个双补码 32 位有符号的整型数组。如果需要控制字节顺序，请改用 {{jsxref("DataView")}}。此内容的初始化为 `0`。一旦创建，你可以使用对象的方法或者标准数组索引的语法 (即使用括号表示法)。

## 语法

```plain
new Int32Array(length);
new Int32Array(typedArray);
new Int32Array(object);
new Int32Array(buffer [, byteOffset [, length]]);
```

更多关于构造函数语法和参数的详细信息，请参阅*[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)。*

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `4` in the case of an `Int32Array`.
- Int32Array.length
  - : Static length property whose value is 3. For the actual length (number of elements), see {{jsxref("TypedArray.prototype.length", "Int32Array.prototype.length")}}.
- {{jsxref("TypedArray.prototype", "Int32Array.prototype")}}
  - : Prototype for the _TypedArray_ objects.

## 方法

- {{jsxref("TypedArray.from", "Int32Array.from()")}}
  - : 从类似数组或者可迭代对象中创建一个新的 `Int32Array`。另见 {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int32Array.of()")}}
  - : 创建一个新的具有可变数量参数的 `Int32Array`。另见 {{jsxref("Array.of()")}}。

## `Int32Array` 属性

所有的`Int32Array`对象都继承自 {jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}。

### 属性

- `Int32Array.prototype.constructor`
  - : 返回创建实例原型的函数。默认情况下，它是 `Int32Array` 的构造函数。
- {{jsxref("TypedArray.prototype.buffer", "Int32Array.prototype.buffer")}} {{readonlyInline}}
  - : 返回在构造时被固定的 `Int32Array` 引用的 {{jsxref("ArrayBuffer")}}，因此只读。
- {{jsxref("TypedArray.prototype.byteLength", "Int32Array.prototype.byteLength")}} {{readonlyInline}}
  - : 返回从其 {{jsxref("ArrayBuffer")}} 开始的 `Int32Array` 长度的 (以字节为单位)。在构造时被固定，因此只读。
- {{jsxref("TypedArray.prototype.byteOffset", "Int32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : 返回从其 {{jsxref("ArrayBuffer")}} 开始的偏移量 (以字节为单位)。在构造时被固定，因此只读。
- {{jsxref("TypedArray.prototype.length", "Int32Array.prototype.length")}} {{readonlyInline}}
  - : 返回 `Int32ArrayInt32Array` 包含的元素个数。在构造时被固定，因此只读。

### 方法

- {{jsxref("TypedArray.copyWithin", "Int32Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int32Array.prototype.entries()")}}
  - : Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int32Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int32Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int32Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int32Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int32Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int32Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int32Array.prototype.includes()")}} {{experimental_inline}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int32Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int32Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int32Array.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int32Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int32Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Former non-standard version of {{jsxref("TypedArray.copyWithin", "Int32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int32Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int32Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int32Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int32Array.prototype.set()")}}
  - : 在类型化数组中存储多个值，从指定数组中读取输入值。
- {{jsxref("TypedArray.slice", "Int32Array.prototype.slice()")}}
  - : 提取数组中的一部分，并返回一个新的数组。更多请见{{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "Int32Array.prototype.some()")}}
  - : 如果数组中至少有一个元素满足所提供的测试函数，则返回 true。更多请见{{jsxref("Array.prototype.some()")}}。
- {{jsxref("TypedArray.sort", "Int32Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int32Array.prototype.subarray()")}}
  - : Returns a new `Int32Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "Int32Array.prototype.values()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int32Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int32Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int32Array.prototype[@@iterator]()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array.

## 示例

不同的方式创建一个 `Int32Array`

```js
// 从一个数字
var int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// 从一个数组
var arr = new Int32Array([21, 31]);
console.log(arr[1]); // 31

// 从一个其他 TypedArray
var x = new Int32Array([21, 31]);
var y = new Int32Array(x);
console.log(y[0]); // 21

// 从一个 ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Int32Array(buffer, 0, 4);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性说明

Starting with ECMAScript 2015 (ES6), `In32Array` constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a `Int32Array` constructor as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Int32Array([1, 2, 3]);
// TypeError: calling a builtin Int32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int32Array([1, 2, 3]);
```

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
