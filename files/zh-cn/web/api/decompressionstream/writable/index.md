---
title: DecompressionStream.writable
slug: Web/API/DecompressionStream/writable
---

{{APIRef("Compression Streams API")}}

{{domxref("DecompressionStream")}} 接口的 **`writable`** 属性返回 {{domxref("WritableStream")}}。

## 值

一个 {{domxref("WritableStream")}}。

## 示例

以下示例从 `DecompressionStream` 返回 {{domxref("WritableStream")}}。

```js
let stream = new DecompressionStream("gzip");
console.log(stream.writeable); //一个 WritableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
