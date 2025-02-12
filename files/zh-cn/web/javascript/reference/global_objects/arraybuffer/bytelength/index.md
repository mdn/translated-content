---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 实例的 `byteLength` 访问器属性返回该数组缓冲区的长度（以字节为单位）。

{{InteractiveExample("JavaScript Demo: ArrayBuffer.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## 描述

`byteLength` 属性是一个访问器属性，它的 set 访问器函数是 `undefined`，这意味着你只能读取这个属性。该值在数组创建时确定，并且无法修改。如果这个 `ArrayBuffer` 被分离，则此属性返回 0。

## 示例

### 使用 byteLength

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
