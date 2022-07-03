---
title: TransformStream.writable
slug: Web/API/TransformStream/writable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - writable
  - TransformStream
translation_of: Web/api/TransformStream/writable
---
{{APIRef("Streams")}}

{{domxref("TransformStream")}} 接口的只读属性 **`writable`** 返回由这个 `TransformStream` 控制的 {{domxref("WritableStream")}} 实例.

## 值

一个 {{domxref("WritableStream")}}.

## Examples

一下实例创建了一个新的 {{domxref("TransformStream")}} 并且作为一个 `textEncoderStream`,并将 `writable` 的值打印输出到控制台上.

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.writable) // a WritableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
