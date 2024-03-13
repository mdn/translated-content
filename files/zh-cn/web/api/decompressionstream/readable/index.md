---
title: DecompressionStream.readable
slug: Web/API/DecompressionStream/readable
---

{{APIRef("Compression Streams API")}}

{{domxref("DecompressionStream")}} 接口的 **`readable`** 只读属性返回 {{domxref("ReadableStream")}}。

## 值

一个 {{domxref("ReadableStream")}}。

## 示例

以下示例从 `DecompressionStream` 返回 {{domxref("ReadableStream")}}。

```js
let stream = new DecompressionStream("gzip");
console.log(stream.readable); //一个 ReadableStream
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
