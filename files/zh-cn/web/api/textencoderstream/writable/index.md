---
title: TextEncoderStream.writable
slug: Web/API/TextEncoderStream/writable
---

{{APIRef("Encoding API")}}

{{domxref("TextEncoderStream")}} 接口的只读属性 **`writable`** 返回一个 {{domxref("WritableStream")}}。

## 值

一个 {{domxref("WritableStream")}}。

## 示例

以下示例演示了如何从一个 `TextEncoderStream` 对象返回一个 `WritableStream`。

```js
stream = new TextEncoderStream();
console.log(stream.writeable); //a WritableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
