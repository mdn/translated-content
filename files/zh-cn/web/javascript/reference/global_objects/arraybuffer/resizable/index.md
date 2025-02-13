---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 实例的 **`resizable`** 访问器属性返回此数组缓冲区是否可以调整大小。

{{InteractiveExample("JavaScript Demo: ArrayBuffer.resizable")}}

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// Expected output: true

console.log(buffer2.resizable);
// Expected output: false
```

## 描述

`resizable` 是一个访问器属性，其 set 访问器函数是 `undefined`，这意味着你只能读取该属性。该属性的值在数组创建时就确定了。如果在构造函数中设置了 `maxByteLength` 选项，`resizable` 将返回 `true`；否则，它将返回 `false`。

## 示例

### 使用 resizable

在这个示例中，我们创建了一个 8 字节缓冲区，该缓冲区可调整到的最大长度为 16 字节，然后检查它的 `resizable` 属性，如果 `resizable` 返回 `true` 则调整它的大小：

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("缓冲区可以调整大小！");
  buffer.resize(12);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
