---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
---

{{JSRef}}

**`slice()`** 方法将一个类型化数组的一部分浅拷贝到一个新的类型化数组对象中并返回。此方法采用与 {{jsxref("Array.prototype.slice()")}} 相同的算法。_TypedArray_ 指[类型化数组的类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)中的一员。

{{InteractiveExample("JavaScript Demo: TypedArray.slice()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const array1 = uint8.slice(1, 3);

console.log(array1);
// Expected output: Uint8Array [20, 30]
```

## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
```

## 参数

- `begin` {{optional_inline}}
  - : 从 0 开始的索引位置。可以使用负值索引，表示从数组末尾往前的偏移量。`slice(-2)` 表示提取数组中的末尾两个元素。如果没有设定起始位置，则将从开始位置开始截取。
- `end` {{optional_inline}}
  - : 从 0 开始到尾元素前的索引值。 `slice` 取出的元素到此位置之前，不包含该位置。例，`slice(1,4)` 表示读取第 2 个元素到第 4 个元素 (元素索引：1, 2, 3)。可以使用负值索引，表示从数组末尾往前的偏移量。 `slice(2,-1)` 表示取出数组中的第 3 个到倒数第 2 个元素。如果没有设定结束位置，则将从开始位置截取到序列尾部。(默认值为`typedarray.length`).

### 返回值

包含取出元素的新 typed array。

## 描述

`slice`方法并不会改变原数组的内容，它只是返回从原数组中取出的元素的浅复制集合。

如果一个新元素被添加到它们任何一个数组中去，另外一个数组不会受到影响。

## 示例

### 返回已存在类型数组的一部分片段

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.slice` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
