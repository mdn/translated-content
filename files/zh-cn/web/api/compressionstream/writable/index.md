---
title: CompressionStream.writable
slug: Web/API/CompressionStream/writable
---

{{APIRef("Compression Streams API")}}

{{domxref("CompressionStream")}} 接口的 **`writable`** 属性返回 {{domxref("WritableStream")}}。

## 值

一个 {{domxref("WritableStream")}}。

## 示例

以下示例从 `CompressionStream` 返回 {{domxref("WritableStream")}}。

```js
let stream = new CompressionStream("gzip");
console.log(stream.writeable); //一个 WritableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
