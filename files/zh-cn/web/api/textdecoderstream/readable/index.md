---
title: TextDecoderStream.readable
slug: Web/API/TextDecoderStream/readable
---

{{APIRef("Encoding API")}}

{{domxref("TextDecoderStream")}} 接口的只读属性 **`readable`** 返回一个 {{domxref("ReadableStream")}}。

## 值

一个 {{domxref("ReadableStream")}}。

## 示例

这个示例展示了如何从一个 `TextDecoderStream` 返回一个 {{domxref("ReadableStream")}}。

```js
stream = new TextDecoderStream();
console.log(stream.readable); //a ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
