---
title: TransformStream.writable
slug: Web/API/TransformStream/writable
---

{{APIRef("Streams")}}

{{domxref("TransformStream")}} 接口的只读属性 **`writable`** 返回由这个 `TransformStream` 控制的 {{domxref("WritableStream")}} 实例。

## 值

一个 {{domxref("WritableStream")}}。

## 示例

以下示例创建了一个新的 {{domxref("TransformStream")}} 并将其赋值给 `textEncoderStream`，然后将 `writable` 的值打印到控制台上。

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.writable); // a WritableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
