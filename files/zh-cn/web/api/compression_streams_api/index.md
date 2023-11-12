---
title: Compression Stream API
slug: Web/API/Compression_Streams_API
---

{{DefaultAPISidebar("Compression Streams API")}}

**Compression Stream API** 提供了一种 JavaScript API，使用 gzip 或者默认格式压缩和解压缩数据流。

内置的压缩库意味着 JavaScript 应用不再需要包含其它压缩库，这使得应用程序的下载大小更小。

## 接口

- {{domxref("CompressionStream")}}
  - : 压缩数据流。
- {{domxref("DecompressionStream")}}
  - : 解压缩数据流。

## 示例

在此示例中，使用 gzip 对流进行压缩。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

以下示例中，函数使用 gzip 解压缩 blob。

```js
async function DecompressBlob(blob) {
  const ds = new DecompressionStream("gzip");
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
