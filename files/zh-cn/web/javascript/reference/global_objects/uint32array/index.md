---
title: Uint32Array
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array
---

**`Uint32Array`** 表示一个由基于平台字节序的 32 位无符号字节组成的数组。如果需要对字节顺序进行控制 (译者注：即 littleEndian 或 bigEndian)，请使用 {{jsxref("DataView")}} 代替。数组中每个元素的初始值都是`0`。一旦创建，你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。

## 语法

```plain
new Uint32Array(); // new in ES2017
new Uint32Array(length);
new Uint32Array(typedArray);
new Uint32Array(object);
new Uint32Array(buffer [, byteOffset [, length]]);
```

更多的构造器语法和属性请参照 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#syntax)。_

## 静态属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint32Array.BYTES_PER_ELEMENT")}}
  - : 返回一个数值，代表`Uint32Array`中单个元素的字节大小。`Uint32Array` 返回 `4`。
- Uint32Array.length
  - : 固定值 (static) 属性，值为 3。使用 {{jsxref("TypedArray.prototype.length", "Uint32Array.prototype.length")}} 获得数组的真实长度（元素个数）。
- {{jsxref("TypedArray.prototype", "Uint32Array.prototype")}}
  - : _TypedArray_ 对象的原型链。

## 静态方法

- {{jsxref("TypedArray.from", "Uint32Array.from()")}}
  - : 从类似数组或者可迭代对象创建一个新的 `Uint32Array`。请参考 {{jsxref("Array.from()")}}。
- {{jsxref("TypedArray.of", "Uint32Array.of()")}}
  - : 从可变长度的参数创建一个新的 `Uint32Array`。请参考 {{jsxref("Array.of()")}}。

## 实例属性

_还从其父接口 {{jsxref("TypedArray")}} 继承实例属性。_

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

## 实例方法

_从其父接口 {{jsxref("TypedArray")}} 继承实例方法。_

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

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
