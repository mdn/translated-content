---
title: SharedArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jsxref("SharedArrayBuffer")}} 实例的 **`maxByteLength`** 访问器属性返回当前 `SharedArrayBuffer` 可以增大到的最大长度（以字节为单位）。

## 描述

`maxByteLength` 属性是一个访问器属性，其设置访问器函数为 `undefined`，因此你只能读取该属性。该属性的值在构造数组时确定。通过 {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} 构造函数的 `maxByteLength` 选项来设置该值，并且无法更改。

如果当前 `SharedArrayBuffer` 构造时时没有指定 `maxByteLength` 的值，这个属性会返回一个等于 `SharedArrayBuffer` 的 {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} 属性值的数值。

## 示例

### 使用 maxByteLength

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整到的最大长度是 16 字节，然后返回其 `maxByteLength`：

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("SharedArrayBuffer")}}
