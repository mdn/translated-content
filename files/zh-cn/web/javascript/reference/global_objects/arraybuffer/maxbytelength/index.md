---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 实例的 **`maxByteLength`** 访问器属性返回该数组缓冲区可调整到的最大长度（以字节为单位）。

{{InteractiveExample("JavaScript Demo: ArrayBuffer.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

console.log(buffer.maxByteLength);
// Expected output: 16
```

## 描述

`maxByteLength` 属性是一个访问器属性，其设置访问器函数为 `undefined`，这意味着你只能读取此属性。该值在构造数组时通过 {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} 构造函数的 `maxByteLength` 选项设置，并且不能更改。

如果该 `ArrayBuffer` 已分离，则该属性返回 0。如果该 `ArrayBuffer` 构造时未指定 `maxByteLength` 值，则该属性返回 `ArrayBuffer` 的 {{jsxref("ArrayBuffer/byteLength", "byteLength")}} 值。

## 示例

### 使用 maxByteLength

在该示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整到的最大长度为 16 字节，然后返回其 `maxByteLength`：

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
