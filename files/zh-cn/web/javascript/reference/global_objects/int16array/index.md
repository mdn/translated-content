---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`Int16Array`** 类型化数组表示按平台字节顺序排列的 16 位有符号整数数组。如果需要控制字节顺序，请使用 {{jsxref("DataView")}} 代替。数组内容初始化为 `0`。建立后，可以使用对象的方法或标准数组索引语法（即使用方括号表示法）引用数组中的元素。

`Int16Array` 是隐藏类 {{jsxref("TypedArray")}} 的子类。

## 构造函数

- {{jsxref("Int16Array/Int16Array", "Int16Array()")}}
  - : 创建一个新的 `Int16Array` 对象。

## 静态属性

_从父对象 {{jsxref("TypedArray")}} 继承静态属性。_

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : 返回元素大小的数值。在 `Int16Array` 中该值为 `2`。

## 静态方法

_从父对象 {{jsxref("TypedArray")}} 继承静态方法。_

## 实例属性

_从父对象 {{jsxref("TypedArray")}} 继承实例属性。_

这些属性在 `Int16Array.prototype` 中定义，并为所有 `Int16Array` 实例共享。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int16Array.prototype.BYTES_PER_ELEMENT")}}
  - : 返回元素大小的数值。在 `Int16Array` 中该值为 `2`。
- {{jsxref("Object/constructor", "Int16Array.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `Int16Array` 实例，初始值是 {{jsxref("Int16Array/Int16Array", "Int16Array")}} 构造函数。

## 实例方法

_从父对象 {{jsxref("TypedArray")}} 继承实例方法。_

## 示例

### 创建 Int16Array 的不同方法

```js
// 给定长度
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// 从一个数组
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// 从另外一个 TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// 从一个 ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// 从可迭代对象
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Int16Array` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
