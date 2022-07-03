---
title: TransformStream.readable
slug: Web/API/TransformStream/readable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - readable
  - TransformStream
translation_of: Web/api/TransformStream/readable
---
{{APIRef("Streams")}}

{{domxref("TransformStream")}} 接口的只读属性 **`readable`**  返回由这个 `TransformStream` 控制的 {{domxref("ReadableStream")}} 实例。

## 值

一个 {{domxref("ReadableStream")}}。

## 示例

一下实例创建了一个新的 {{domxref("TransformStream")}} 并且作为一个 `textEncoderStream`，并将 `readable` 的值打印输出到控制台上。

```js
const textEncoderStream = new TransformStream();
console.log(textEncoderStream.readable) // a ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
