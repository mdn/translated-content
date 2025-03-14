---
title: CompressionStream()
slug: Web/API/CompressionStream/CompressionStream
---

{{APIRef("Compression Streams API")}}

**`CompressionStream()`** 构造函数创建一个新的 {{domxref("CompressionStream")}} 对象，该对象用于压缩数据流。

## 语法

```js-nolint
new CompressionStream(format)
```

### 参数

- `format`

  - : 以下允许的压缩格式之一：

    - `"gzip"`
    - `"deflate"`
    - `"deflate-raw"`

## 异常

- {{jsxref("TypeError")}}
  - : 如果传递给构造函数的格式是不支持的则抛出。

## 示例

在此示例中，使用 gzip 压缩流。

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
