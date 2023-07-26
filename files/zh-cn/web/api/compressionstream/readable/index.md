---
title: CompressionStream.readable
slug: Web/API/CompressionStream/readable
---

{{APIRef("Compression Streams API")}}

{{domxref("CompressionStream")}} 接口的 **`readable`** 只读属性返回 {{domxref("ReadableStream")}}。

## 值

一个 {{domxref("ReadableStream")}}。

## 示例

以下示例从 `CompressionStream` 返回 {{domxref("ReadableStream")}}。

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); //一个 ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
