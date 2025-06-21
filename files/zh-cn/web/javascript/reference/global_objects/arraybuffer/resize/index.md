---
title: ArrayBuffer.prototype.resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 实例的 **`resize()`** 方法将 `ArrayBuffer` 调整为指定的大小，以字节为单位。

{{InteractiveExample("JavaScript Demo: ArrayBuffer.resize()")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

buffer.resize(12);

console.log(buffer.byteLength);
// Expected output: 12
```

## 语法

```js-nolint
resize(newLength)
```

### 参数

- `newLength`
  - : `ArrayBuffer` 要调整到的新的长度，以字节为单位。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `ArrayBuffer` 已分离或不可调整大小，则抛出该错误。
- {{jsxref("RangeError")}}
  - : 如果 `newLength` 大于该 `ArrayBuffer` 的 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}，则抛出该错误。

## 描述

`resize()` 方法将 `ArrayBuffer` 调整为 `newLength` 参数指定的大小，前提是该 `ArrayBuffer` 是[可调整大小的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable)并且新的大小小于或等于该 `ArrayBuffer` 的 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}。新字节被初始化为 0。

请注意，你可以使用 `resize()` 来缩小和增大 `ArrayBuffer`——即使 `newLength` 小于 `ArrayBuffer` 的当前 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}。

## 示例

### 使用 resize()

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 `resizable` 属性，如果 `resizable` 返回 `true` 则调整其大小：

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("缓冲区大小是可调整的！");
  buffer.resize(12);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.resizable")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
