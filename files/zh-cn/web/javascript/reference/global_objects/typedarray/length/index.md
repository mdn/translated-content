---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("TypedArray")}} 实例的 **`length`** 访问器属性返回该类型化数组的长度（以元素为单位）。

{{InteractiveExample("JavaScript Demo: TypedArray.length", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.length);
// Expected output: 6
```

## 描述

`length` 属性是一个 set 访问器函数为 `undefined` 的访问器属性，这意味着你只能读取该属性。该值在构建 _TypedArray_ 时确定，不可更改。如果 _TypedArray_ 没有指定 `byteOffset` 或 `length`，则将返回引用的 {{jsxref("ArrayBuffer")}} 的长度。_TypedArray_ 是 [TypedArray 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 示例

### 使用 `length` 属性

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8（与缓冲区 length 相匹配）

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5（在构造 Uint8Array 时指定）

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6（根据被构造的 Uint8Array 的偏移量）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
