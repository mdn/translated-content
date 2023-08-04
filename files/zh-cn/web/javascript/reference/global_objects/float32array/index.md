---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
---

{{JSRef}}

**`Float32Array`** 类型数组代表的是平台字节顺序为 32 位的浮点数型数组 (对应于 C 浮点数据类型) 。如果需要控制字节顺序，使用 {{jsxref("DataView")}} 替代。其内容初始化为 `0`。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

## 语法

```plain
new Float32Array(length);
new Float32Array(typedArray);
new Float32Array(object);
new Float32Array(buffer [, byteOffset [, length]]);
```

更多的语法信息和参数，参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)。_

## 属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : 返回元素字节数。在 `Float32Array` 的情况下返回 4。
- Float32Array.length
  - : 长度属性的值为 3。关于其实际长度 (元素数量) 参见{{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}}。
- {{jsxref("TypedArray.prototype", "Float32Array.prototype")}}
  - : _TypedArray_ 对象的原型。

## 方法

- {{jsxref("TypedArray.from", "Float32Array.from()")}}
  - : 从一个类数组对象或可遍历对象创建一个新的 Float32Array。参见 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of", "Float32Array.of()")}}
  - : 用可变数量的参数创建一个新的 Float32Array。参见 {{jsxref("Array.of()")}}。

## `Float32Array` 属性

所有的`Float32Array 对象都`继承自 {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}。

### 特性

- `Float32Array.prototype.constructor`
  - : 返回创建这个实例原型的函数。这是 `Float32Array` 默认的构造函数。
- {{jsxref("TypedArray.prototype.buffer", "Float32Array.prototype.buffer")}} {{readonlyInline}}
  - : 返回这个`Float32Array` 引用的 {{jsxref("ArrayBuffer")}}。构造时已固定，所以是**只读**的。
- {{jsxref("TypedArray.prototype.byteLength", "Float32Array.prototype.byteLength")}} {{readonlyInline}}
  - : 返回从`Float32Array` 的 {{jsxref("ArrayBuffer")}} 开头开始的长度 (以字节为单位) 。构造时已固定，所以是**只读**的。
- {{jsxref("TypedArray.prototype.byteOffset", "Float32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : 返回从`Float32Array` 的 {{jsxref("ArrayBuffer")}} 开头开始的偏移量（以字节为单位）。构造时已固定，所以是**只读**的。
- {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}} {{readonlyInline}}
  - : 返回 `Float32Array` 中的元素个数。构造时已固定，所以是**只读**的。

### 方法

- {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}
  - : 从数组复制元素。参见{{jsxref("Array.prototype.copyWithin()")}}。
- {{jsxref("TypedArray.entries", "Float32Array.prototype.entries()")}}
  - : `返回一个包含数组中每个元素键值对的数组遍历器对象`。参见{{jsxref("Array.prototype.entries()")}}。
- {{jsxref("TypedArray.every", "Float32Array.prototype.every()")}}
  - : 检测是否所有元素都能通过给定函数的测试。参见{{jsxref("Array.prototype.every()")}}。
- {{jsxref("TypedArray.fill", "Float32Array.prototype.fill()")}}
  - : 用一个静态值填充给定的起始位置。参见{{jsxref("Array.prototype.fill()")}}。
- {{jsxref("TypedArray.filter", "Float32Array.prototype.filter()")}}
  - : 创建一个新数组，数据为原数组中所有能让给入函数返回 true 的元素。参见{{jsxref("Array.prototype.filter()")}}。
- {{jsxref("TypedArray.find", "Float32Array.prototype.find()")}}
  - : 返回满足测试函数的值，如果没有找到，返回 undefined。参见{{jsxref("Array.prototype.find()")}}。
- {{jsxref("TypedArray.findIndex", "Float32Array.prototype.findIndex()")}}
  - : 返回满足测试函数的值的位置，如果没有找到，返回 -1。参见{{jsxref("Array.prototype.findIndex()")}}。
- {{jsxref("TypedArray.forEach", "Float32Array.prototype.forEach()")}}
  - : 以每个元素为参数各调用一次函数。参见{{jsxref("Array.prototype.forEach()")}}。
- {{jsxref("TypedArray.includes", "Float32Array.prototype.includes()")}} {{experimental_inline}}
  - : 判断是否包含某个元素，返回 `true` 或 `false`。参见{{jsxref("Array.prototype.includes()")}}。
- {{jsxref("TypedArray.indexOf", "Float32Array.prototype.indexOf()")}}
  - : 返回数组中等于给定值的元素的第一个（最小）位置，没有找到则返回 -1。参见{{jsxref("Array.prototype.indexOf()")}}。
- {{jsxref("TypedArray.join", "Float32Array.prototype.join()")}}
  - : 合并所有数组元素到一个字符串中。参见{{jsxref("Array.prototype.join()")}}。
- {{jsxref("TypedArray.keys", "Float32Array.prototype.keys()")}}
  - : 返回一个包含数组中所有索引的数组遍历器。参见{{jsxref("Array.prototype.keys()")}}。
- {{jsxref("TypedArray.lastIndexOf", "Float32Array.prototype.lastIndexOf()")}}
  - : 返回数组中等于给定值的元素的最后（最大）位置，没有找到则返回 -1。参见{{jsxref("Array.prototype.lastIndexOf()")}}。
- {{jsxref("TypedArray.map", "Float32Array.prototype.map()")}}
  - : 创建一个新的数组，数据由原数组每个元素依次传入给定函数后返回的值组成。参见{{jsxref("Array.prototype.map()")}}。
- {{jsxref("TypedArray.move", "Float32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}以前的一个非标准版本。
- {{jsxref("TypedArray.reduce", "Float32Array.prototype.reduce()")}}
  - : 传入一个函数作为累加器，从左到右遍历，最终得到一个值。参见{{jsxref("Array.prototype.reduce()")}}。
- {{jsxref("TypedArray.reduceRight", "Float32Array.prototype.reduceRight()")}}
  - : 传入一个函数作为累加器，从右到左遍历，最终得到一个值。参见{{jsxref("Array.prototype.reduceRight()")}}。
- {{jsxref("TypedArray.reverse", "Float32Array.prototype.reverse()")}}
  - : 反转数组元素的顺序 — 第一个变为最后一个，最后一个变为第一个。参见{{jsxref("Array.prototype.reverse()")}}。
- {{jsxref("TypedArray.set", "Float32Array.prototype.set()")}}
  - : 从给定的数组存入多个数值。
- {{jsxref("TypedArray.slice", "Float32Array.prototype.slice()")}}
  - : 提取数组的一部分并且返回一个新数组。参见{{jsxref("Array.prototype.slice()")}}。
- {{jsxref("TypedArray.some", "Float32Array.prototype.some()")}}
  - : 如果数组中至少有一个元素满足测试函数的要求则返回 true。参见{{jsxref("Array.prototype.some()")}}。
- {{jsxref("TypedArray.sort", "Float32Array.prototype.sort()")}}
  - : 对数组元素进行排序并返回数组。参见{{jsxref("Array.prototype.sort()")}}。
- {{jsxref("TypedArray.subarray", "Float32Array.prototype.subarray()")}}
  - : 从给定的起始位置返回一个新的`Float32Array` 。
- {{jsxref("TypedArray.values", "Float32Array.prototype.values()")}}
  - : 返回一个包含所有数组元素的数组遍历器对象。参见{{jsxref("Array.prototype.values()")}}。
- {{jsxref("TypedArray.toLocaleString", "Float32Array.prototype.toLocaleString()")}}
  - : 返回一个代表数组和其元素的本地化格式字符串。参见{{jsxref("Array.prototype.toLocaleString()")}}。
- {{jsxref("TypedArray.toString", "Float32Array.prototype.toString()")}}
  - : 返回一个代表数组和它的元素的字符串。参见{{jsxref("Array.prototype.toString()")}}。
- {{jsxref("TypedArray.@@iterator", "Float32Array.prototype[@@iterator]()")}}
  - : 返回一个新的包含数组元素的数组迭代器对象。

## 示例

```js
// From a length
var float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Float32Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float32Array([21, 31]);
var y = new Float32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Float32Array(buffer, 0, 4);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 一致性提示

从 ECMAScript 2015 (ES6) 开始， `Float32Array`构造函数需要用一个{{jsxref("Operators/new", "new")}}操作符来构造。现在直接把`Float32Array 构造函数当函数调用而不使用 new，会抛出一个`{{jsxref("TypeError")}}。

```js example-bad
var dv = Float32Array([1, 2, 3]);
// TypeError: calling a builtin Float32Array constructor
// 不允许不使用 new
```

```js example-good
var dv = new Float32Array([1, 2, 3]);
```

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
