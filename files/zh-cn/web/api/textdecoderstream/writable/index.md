---
title: TextDecoderStream.writable
slug: Web/API/TextDecoderStream/writable
---

{{APIRef("Encoding API")}}

{{domxref("TextDecoderStream")}} 接口的只读属性 **`writable`** 返回一个 {{domxref("WritableStream")}}。

## 值

一个 {{domxref("WritableStream")}}。

## 示例

从一个 `TextDecoderStream` 返回一个 {{domxref("WritableStream")}}。

```js
stream = new TextDecoderStream();
console.log(stream.writeable); //a WritableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
