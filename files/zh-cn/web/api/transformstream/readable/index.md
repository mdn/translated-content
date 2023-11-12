---
title: TransformStream.readable
slug: Web/API/TransformStream/readable
---

{{APIRef("Streams")}}

{{domxref("TransformStream")}} 接口的只读属性 **`readable`** 返回由这个 `TransformStream` 控制的 {{domxref("ReadableStream")}} 实例。

## 值

一个 {{domxref("ReadableStream")}}。

## 示例

以下示例创建了一个新的 {{domxref("TransformStream")}} 并将其赋值给 `textEncoderStream`，然后将 `readable` 的值打印到控制台上。

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.readable); // a ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
