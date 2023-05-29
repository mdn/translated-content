---
title: TextEncoderStream.readable
slug: Web/API/TextEncoderStream/readable
---

{{APIRef("Encoding API")}}

{{domxref("TextEncoderStream")}} 接口的只读属性 **`readable`** 返回一个 {{domxref("ReadableStream")}}。

## 值

一个 {{domxref("ReadableStream")}}。

## 示例

以下示例演示了如何从一个 `TextEncoderStream` 对象返回一个 `ReadableStream`。

```js
stream = new TextEncoderStream();
console.log(stream.readable); //a ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
