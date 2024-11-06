---
title: DecompressionStream()
slug: Web/API/DecompressionStream/DecompressionStream
---

{{APIRef("Compression Streams API")}}

**`DecompressionStream()`** 构造函数创建一个新的 {{domxref("DecompressionStream")}}，该对象用于解压数据流。

## 语法

```js-nolint
new DecompressionStream(format)
```

### 参数

- `format`

  - : 以下允许的解压格式之一：

    - `"gzip"`
    - `"deflate"`
    - `"deflate-raw"`

## 异常

- {{jsxref("TypeError")}}
  - : 如果传递给构造函数的格式是不支持的则抛出。

## 示例

在此示例中，使用 gzip 对 blob 解压缩。

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
