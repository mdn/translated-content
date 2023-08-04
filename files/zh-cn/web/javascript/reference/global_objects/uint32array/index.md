---
title: Uint32Array
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array
---

{{JSRef("Global_Objects", "TypedArray", "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array")}}

**`Uint32Array`** 表示一个由基于平台字节序的 32 位无符号字节组成的数组。如果需要对字节顺序进行控制 (译者注：即 littleEndian 或 bigEndian)，请使用 {{jsxref("DataView")}} 代替。数组中每个元素的初始值都是`0`。一旦创建，你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。

## 语法

```plain
new Uint32Array(); // new in ES2017
new Uint32Array(length);
new Uint32Array(typedArray);
new Uint32Array(object);
new Uint32Array(buffer [, byteOffset [, length]]);
```

更多的构造器语法和属性请参照 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)。_

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint32Array.BYTES_PER_ELEMENT")}}
  - : 返回一个数值，代表`Uint32Array`中单个元素的字节大小。`Uint32Array` 返回 `4`。
- Uint32Array.length
  - : 固定值 (static) 属性，值为 3。使用 {{jsxref("TypedArray.prototype.length", "Uint32Array.prototype.length")}} 获得数组的真实长度（元素个数）。
- {{jsxref("TypedArray.prototype", "Uint32Array.prototype")}}
  - : _TypedArray_ 对象的原型链。

## 方法

- {{jsxref("TypedArray.from", "Uint32Array.from()")}}
  - : 从类似数组或者可迭代对象创建一个新的 `Uint32Array` 。请参考 {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint32Array.of()")}}
  - : 从可变长度的参数创建一个新的 `Uint32Array` 。请参考 {{jsxref("Array.of()")}}.

## `Uint32Array` 原型

所有 `Uint32Array` 对象继承自 {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### 属性

- `Uint32Array.prototype.constructor`
  - : 返回创建实例原型的函数。默认返回 `Uint32Array` 的构造器。
- {{jsxref("TypedArray.prototype.buffer", "Uint32Array.prototype.buffer")}} {{readonlyInline}}
  - : 返回 `Uint32Array`引用的 {{jsxref("ArrayBuffer")}}。由于构造时已固定，所以是**只读的**。
- {{jsxref("TypedArray.prototype.byteLength", "Uint32Array.prototype.byteLength")}} {{readonlyInline}}
  - : 返回从其 {{jsxref("ArrayBuffer")}} 开始的 `Uint32Array` 字节长度。由于构造时已固定，所以是**只读的**。
- {{jsxref("TypedArray.prototype.byteOffset", "Uint32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : 返回从其 {{jsxref("ArrayBuffer")}} 的偏移开始的 `Uint32Array` 字节长度。由于构造时已固定，所以是**只读的**。
- {{jsxref("TypedArray.prototype.length", "Uint32Array.prototype.length")}} {{readonlyInline}}
  - : 返回 `Uint32Array` 中元素的个数。由于构造时已固定，所以是**只读的**。

### 方法

- {{jsxref("TypedArray.copyWithin", "Uint32Array.prototype.copyWithin()")}}
  - : 拷贝（浅拷贝）数组的部分元素到本数组的不同位置（不改变数组的大小）。请参考 {{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.entries", "Uint32Array.prototype.entries()")}}
  - : 返回一个 `Array Iterator` 对象，该对象包含数组中每一对索引的键值对。请参考 {{jsxref("Array.prototype.entries()")}}。
- {{jsxref("TypedArray.every", "Uint32Array.prototype.every()")}}
  - : 测试是否数组中的所有元素都通过给定的测试函数。请参考 {{jsxref("Array.prototype.every()")}}。
- {{jsxref("TypedArray.fill", "Uint32Array.prototype.fill()")}}
  - : 使用静态值填充从起始下标到终止下标的数组元素。请参考 {{jsxref("Array.prototype.fill()")}}。
- {{jsxref("TypedArray.filter", "Uint32Array.prototype.filter()")}}
  - : 创造一个新数组，含有原数组中可通过给定的过滤器函数的所有元素。请参考 {{jsxref("Array.prototype.filter()")}}。
- {{jsxref("TypedArray.find", "Uint32Array.prototype.find()")}}
  - : 如果数组中的元素满足提供的测试函数，返回找到的值，如果没有找到则返回 `undefined`。请参考 {{jsxref("Array.prototype.find()")}}。
- {{jsxref("TypedArray.findIndex", "Uint32Array.prototype.findIndex()")}}
  - : 如果数组中的元素满足提供的测试函数，返回找到的下标，如果没有找到则返回 -1。请参考 {{jsxref("Array.prototype.findIndex()")}}。
- {{jsxref("TypedArray.forEach", "Uint32Array.prototype.forEach()")}}
  - : 对数组内的每个元素调用一个函数。请参考 {{jsxref("Array.prototype.forEach()")}}。
- {{jsxref("TypedArray.includes", "Uint32Array.prototype.includes()")}}
  - : 判断该数组是否包含特定值，如果包含返回 `true`，否则返回`false`。请参考 {{jsxref("Array.prototype.includes()")}}。
- {{jsxref("TypedArray.indexOf", "Uint32Array.prototype.indexOf()")}}
  - : 返回数组中等于特定值的第一个元素（下标最小）的下标，如果没有找到则返回 -1。请参考 {{jsxref("Array.prototype.indexOf()")}}。
- {{jsxref("TypedArray.join", "Uint32Array.prototype.join()")}}
  - : 将数组内的元素拼接成一个字符串。请参考 {{jsxref("Array.prototype.join()")}}。
- {{jsxref("TypedArray.keys", "Uint32Array.prototype.keys()")}}
  - : 返回一个 `Array Iterator` 对象，该对象包含数组中所有索引 (key)。请参考 {{jsxref("Array.prototype.keys()")}}。
- {{jsxref("TypedArray.lastIndexOf", "Uint32Array.prototype.lastIndexOf()")}}
  - : 返回数组中等于特定值的最后一个元素（下标最大）的下标，如果没有找到则返回 -1。请参考 {{jsxref("Array.prototype.lastIndexOf()")}}。
- {{jsxref("TypedArray.map", "Uint32Array.prototype.map()")}}
  - : 用该数组的每个元素调用给定函数的结果创建新数组。请参考 {{jsxref("Array.prototype.map()")}}。
- {{jsxref("TypedArray.reduce", "Uint32Array.prototype.reduce()")}}
  - : 对累加器和数组的每个值应用函数（从左到右），使其归约为单一的值。请参考 {{jsxref("Array.prototype.reduce()")}}。
- {{jsxref("TypedArray.reduceRight", "Uint32Array.prototype.reduceRight()")}}
  - : 对累加器和数组的每个值应用函数（从右到左），使其归约为单一的值。请参考 {{jsxref("Array.prototype.reduceRight()")}}。
- {{jsxref("TypedArray.reverse", "Uint32Array.prototype.reverse()")}}
  - : 翻转数组中的元素顺序——首尾颠倒。请参考 {{jsxref("Array.prototype.reverse()")}}。
- {{jsxref("TypedArray.set", "Uint32Array.prototype.set()")}}
  - : 从一个给定的数组中读取多个数据并存储至 typed array。
- {{jsxref("TypedArray.slice", "Uint32Array.prototype.slice()")}}
  - : 提取数组的某个部分并返回新的数组。请参考 {{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "Uint32Array.prototype.some()")}}
  - : 测试是否数组中有（至少一个）元素可通过给定的测试函数。请参考 {{jsxref("Array.prototype.some()")}}。
- {{jsxref("TypedArray.sort", "Uint32Array.prototype.sort()")}}
  - : 就地排序数组中的元素，并返回该数组。请参考 {{jsxref("Array.prototype.sort()")}}。
- {{jsxref("TypedArray.subarray", "Uint32Array.prototype.subarray()")}}
  - : 根据给定的起始和结束元素下标，返回一个新的 `Uint32Array` 子数组。
- {{jsxref("TypedArray.values", "Uint32Array.prototype.values()")}}
  - : 返回新的 `Array Iterator` 对象，其含有数组中每个索引的值。请参考 {{jsxref("Array.prototype.values()")}}。
- {{jsxref("TypedArray.toLocaleString", "Uint32Array.prototype.toLocaleString()")}}
  - : 返回表示数组及其元素的本地化字符串。请参考 {{jsxref("Array.prototype.toLocaleString()")}}。
- {{jsxref("TypedArray.toString", "Uint32Array.prototype.toString()")}}
  - : 返回表示数组及其元素的字符串。请参考 {{jsxref("Array.prototype.toString()")}}。
- {{jsxref("TypedArray.@@iterator", "Uint32Array.prototype[@@iterator]()")}}
  - : 返回新的 `Array Iterator` 对象，其含有数组中每个索引的值。

## 示例

用不同的方法创建 `Uint32Array`：

```js
// 给定长度
var uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// 给定数组
var arr = new Uint32Array([21, 31]);
console.log(arr[1]); // 31

// 给定 TypedArray
var x = new Uint32Array([21, 31]);
var y = new Uint32Array(x);
console.log(y[0]); // 21

// 给定 ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Uint32Array(buffer, 0, 4);

// 给定可迭代对象
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uint32 = new Uint32Array(iterable);
// Uint32Array[1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
