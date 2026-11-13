---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jsxref("SharedArrayBuffer")}} 实例的 **`byteLength`** 访问器属性返回该 `SharedArrayBuffer` 的大小（以字节为单位）。

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.byteLength", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 描述

`byteLength` 属性是一个访问器属性，它的设置访问器函数为 `undefined`，这意味着你只能读取该属性。该值在创建共享数组时就确定了，不能更改。

## 示例

### 使用 byteLength

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("SharedArrayBuffer")}}
