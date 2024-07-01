---
title: TE
slug: Web/HTTP/Headers/TE
---

{{HTTPSidebar}}

**`TE`** 请求型头部用来指定用户代理希望使用的传输编码类型。(可以将其非正式称为 `Accept-Transfer-Encoding`，这个名称显得更直观一些)。

可以参考 {{HTTPHeader("Transfer-Encoding")}} 来获取更多关于传输编码的细节信息。值得注意的是，支持 HTTP/1.1 协议的接收方一定可以处理 `chunked` 传输编码请求，所以没有必要一定在 `TE` 首部指定“chunked”关键字。然而，如果客户端将要接收编码在 chunked 包体里面的"trailer"信息的时候，主动指定该头部将会非常有用。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
TE: compress
TE: deflate
TE: gzip
TE: trailers

// 多个指令，使用 {{glossary("quality values", "quality value")}} 语法来表示优先级：
TE: trailers, deflate;q=0.5
```

## 指令

- `compress`
  - : 这个名称代表采用了 [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) 压缩算法的传输编码格式。
- `deflate`
  - : 这个名称代表采用了 [zlib](http://en.wikipedia.org/wiki/Zlib) 结构的传输编码格式。
- `gzip`
  - : 这个名称代表采用了 [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) 压缩算法，以及 32 位 CRC 校验的传输编码格式。
- trailers
  - : 表示客户端期望在采用分块传输编码的响应中接收挂载字段。
- q
  - : 当多种形式的传输编码格式都可以接受的时候，这个采用了[质量价值](/zh-CN/docs/Glossary/Quality_values)语法的参数可以用来对不同的编码形式按照优先级进行排序。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关资料

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
