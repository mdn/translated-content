---
title: Uint16Array
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array
---

{{JSRef}}

`该 Uint16Array` 类型数组表示 16 位无符号整数，按平台字节顺序排列。如果需要控制字节顺序，请使用 DataView 代替。内容被初始化为 0。建立后，就可以使用对象的方法或使用标准数组索引语法（即使用括号表示法）引用数组中的元素。

## 构造函数

- [`Uint16Array()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array/Uint16Array)
  - : 创建一个新的 `Uint16Array` 对象。

## 静态属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint16Array.BYTES_PER_ELEMENT")}}
  - : 返回元素大小的数值。在 `Uint16Array` 情况下为 `2`。

## 静态方法

- {{jsxref("TypedArray.from", "Uint16Array.from()")}}
  - : 从类数组或可迭代对象创建一个新的 `Uint16Array` 。可参阅 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of", "Uint16Array.of()")}}
  - : 创建一个新的具有可变参数数目的 `Uint16Array` 。可参阅 {{jsxref("Array.of()")}}。

## 实例属性

- {{jsxref("TypedArray.prototype.buffer", "Uint16Array.prototype.buffer")}}
  - : 返回 `Uint16Array` 在构造时固定引用的 {{jsxref("ArrayBuffer")}} 。因此是 **只读的**。
- {{jsxref("TypedArray.prototype.byteLength", "Uint16Array.prototype.byteLength")}}
  - : 返回 `Uint16Array` 从 {{jsxref("ArrayBuffer")}}开始的长度（以字节为单位）。在构建时固定，因此是 **只读的。**
- {{jsxref("TypedArray.prototype.byteOffset", "Uint16Array.prototype.byteOffset")}}
  - : 返回 `Uint16Array` 从 {{jsxref("ArrayBuffer")}}开始的偏移量（以字节为单位）。在构建时固定，因此是 **只读的。**
- {{jsxref("TypedArray.prototype.length", "Uint16Array.prototype.length")}}
  - : 返回 `Uint16Array` 中包含的元素数量。在构建时固定，因此是 **只读的。**

## 实例方法

- {{jsxref("TypedArray.copyWithin", "Uint16Array.prototype.copyWithin()")}}
  - : 复制数组中的一序列数组元素。可参阅 {{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.entries", "Uint16Array.prototype.entries()")}}
  - : 返回一个新的 `Array Iterator` 对象，该对象包含数组中的每个索引的键/值对。可参阅 {{jsxref("Array.prototype.entries()")}}。
- {{jsxref("TypedArray.every", "Uint16Array.prototype.every()")}}
  - : 测试数组中的所有元素是否通过函数提供的测试。可参阅 {{jsxref("Array.prototype.every()")}}。
- {{jsxref("TypedArray.fill", "Uint16Array.prototype.fill()")}}
  - : 使用静态值填充从开始索引到结束索引的数组的所有元素。可参阅 {{jsxref("Array.prototype.fill()")}}。
- {{jsxref("TypedArray.filter", "Uint16Array.prototype.filter()")}}
  - : 根据所提供的过滤函数，将所有返回 true 的所有元素创建一个新的数组。可参阅 {{jsxref("Array.prototype.filter()")}}。
- {{jsxref("TypedArray.find", "Uint16Array.prototype.find()")}}
  - : 返回数组中满足所提供的测试函数的值，没有则返回 `undefined` 。可参阅 {{jsxref("Array.prototype.find()")}}。
- {{jsxref("TypedArray.findIndex", "Uint16Array.prototype.findIndex()")}}
  - : 返回数组中满足所提供的测试函数的索引，没有则返回 -1。可参阅 {{jsxref("Array.prototype.findIndex()")}}。
- {{jsxref("TypedArray.forEach", "Uint16Array.prototype.forEach()")}}
  - : 为数组中的每个元素调用一个函数。可参阅 {{jsxref("Array.prototype.forEach()")}}。
- {{jsxref("TypedArray.includes", "Uint16Array.prototype.includes()")}}
  - : 判断数组中是否包含某个元素，有则返回 `true` ，无则返回 `false` 。可参阅 {{jsxref("Array.prototype.includes()")}}。
- {{jsxref("TypedArray.indexOf", "Uint16Array.prototype.indexOf()")}}
  - : 返回数组中等于指定的值的元素第一个（最小）索引，没有则返回 -1。可参阅 {{jsxref("Array.prototype.indexOf()")}}。
- {{jsxref("TypedArray.join", "Uint16Array.prototype.join()")}}
  - : 将数组中的所有元素连接成字符串。可参阅 {{jsxref("Array.prototype.join()")}}。
- {{jsxref("TypedArray.keys", "Uint16Array.prototype.keys()")}}
  - : f 返回一个新的 `Array Iterator` ，其包含数组中每个索引的键。可参阅 {{jsxref("Array.prototype.keys()")}}。
- {{jsxref("TypedArray.lastIndexOf", "Uint16Array.prototype.lastIndexOf()")}}
  - : 返回数组中最后一个（最大的）与指定值相等的元素的索引，没有则返回 -1。可参阅 {{jsxref("Array.prototype.lastIndexOf()")}}。
- {{jsxref("TypedArray.map", "Uint16Array.prototype.map()")}}
  - : 返回一个根据所提供的函数对每个元素处理后的新数组。可参阅 {{jsxref("Array.prototype.map()")}}。
- {{jsxref("TypedArray.reduce", "Uint16Array.prototype.reduce()")}}
  - : 根据所提供的函数对累加器和数组的每一个值（从左到右）进行处理，并返回最后调用函数的值。可参阅 {{jsxref("Array.prototype.reduce()")}}。
- {{jsxref("TypedArray.reduceRight", "Uint16Array.prototype.reduceRight()")}}
  - : 根据所提供的函数对累加器和数组的每一个值（从右到左）进行处理，并返回最后调用函数的值。可参阅 {{jsxref("Array.prototype.reduceRight()")}}。
- {{jsxref("TypedArray.reverse", "Uint16Array.prototype.reverse()")}}
  - : 颠倒数组的顺序，使第一个元素成为最后一个，最后一个元素成为第一个。可参阅 {{jsxref("Array.prototype.reverse()")}}。
- {{jsxref("TypedArray.set", "Uint16Array.prototype.set()")}}
  - : 在类型化数组中存储多个值，从指定数组中读取输入值。
- {{jsxref("TypedArray.slice", "Uint16Array.prototype.slice()")}}
  - : 截取数组中的一部分并作为新数组返回。可参阅 {{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "Uint16Array.prototype.some()")}}
  - : 判读数组中是否至少有一个元素满足所提供的测试函数，有则返回 true。可参阅 {{jsxref("Array.prototype.some()")}}。
- {{jsxref("TypedArray.sort", "Uint16Array.prototype.sort()")}}
  - : 对数组中的元素进行排序并返回排序后的数组。可参阅 {{jsxref("Array.prototype.sort()")}}。
- {{jsxref("TypedArray.subarray", "Uint16Array.prototype.subarray()")}}
  - : 从给定的开始与结束元素索引中返回一个新的 `Uint16Array` 。
- {{jsxref("TypedArray.values", "Uint16Array.prototype.values()")}}
  - : 返回一个新的 `Array Iterator` 对象，该对象包含数组中的每个索引的值。可参阅 {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Uint16Array.prototype.toLocaleString()")}}
  - : 返回表示数组及其元素的本地化字符串。可参阅 {{jsxref("Array.prototype.toLocaleString()")}}。
- {{jsxref("TypedArray.toString", "Uint16Array.prototype.toString()")}}
  - : 返回表示数组及其元素的字符串。可参阅 {{jsxref("Array.prototype.toString()")}}。
- {{jsxref("TypedArray.@@iterator", "Uint16Array.prototype[@@iterator]()")}}
  - : 返回一个新的 `Array Iterator` 对象，其包含数组中每个索引的值。

## 示例

### Different ways to create a Uint16Array

```js
// 长度
var uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// 数组
var arr = new Uint16Array([21, 31]);
console.log(arr[1]); // 31

// 另一个类型数组
var x = new Uint16Array([21, 31]);
var y = new Uint16Array(x);
console.log(y[0]); // 21

// 一个 ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint16Array(buffer, 0, 4);

// 可迭代
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uint16 = new Uint16Array(iterable);
// Uint16Array[1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 可参阅

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
