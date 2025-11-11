---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jsxref("TypedArray")}} 实例的 **`byteOffset`** 访问器属性返回该类型化数组相对于其 {{jsxref("ArrayBuffer")}} 或 {{jsxref("SharedArrayBuffer")}} 开始位置的偏移量（以字节为单位）。

## 描述

`byteOffset` 属性是一个访问器属性，其设置访问器函数为 `undefined`，意味着该属性只能读取。该值在构造 _TypedArray_ 时确定，并且不能被更改。_TypedArray_ 是[类型化数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 示例

### 使用 byteOffset 属性

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0（未指定偏移量）

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3（在构造 Uint8Array 时指定）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray")}}
