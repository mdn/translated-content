---
title: DecompressionStream
slug: Web/API/DecompressionStream
---

{{APIRef("Compression Streams API")}}

{{domxref('Compression Streams API','','',1)}} 的 **`DecompressionStream`** 接口是一个用于解压缩数据流的 API。

## 构造函数

- {{domxref("DecompressionStream.DecompressionStream", "DecompressionStream()")}}
  - : 创建一个新 `DecompressionStream`。

## 实例属性

- {{domxref("DecompressionStream.readable")}}
  - : 返回由此对象控制的 {{domxref("ReadableStream")}} 实例。
- {{domxref("DecompressionStream.writable")}}
  - : 返回由此对象控制的 {{domxref("WritableStream")}} 实例。

## 示例

在此示例中，使用 gzip 对 blob 进行解压缩。

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
