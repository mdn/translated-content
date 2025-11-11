---
title: CompressionStream
slug: Web/API/CompressionStream
---

{{APIRef("Compression Streams API")}}

{{domxref('Compression Streams API', '', '', 1)}} 的 **`CompressionStream`** 接口是一个用于压缩数据流的 API。

## 构造函数

- {{domxref("CompressionStream.CompressionStream", "CompressionStream()")}}
  - : 创建新的 `CompressionStream`。

## 实例属性

- {{domxref("CompressionStream.readable")}}
  - : 返回由此对象控制的 {{domxref("ReadableStream")}} 实例。
- {{domxref("CompressionStream.writable")}}
  - : 返回由此对象控制的 {{domxref("WritableStream")}} 实例。

## 示例

在该示例中，使用 gzip 对流进行压缩。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
