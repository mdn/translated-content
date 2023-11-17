---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
---

{{HTTPSidebar}}

HTTP 请求头 **Accept-Encoding** 会将客户端能够理解的内容编码方式——通常是某种压缩算法——进行通知（给服务端）。通过内容协商的方式，服务端会选择一个客户端提议的方式，使用并在响应头 {{HTTPHeader("Content-Encoding")}} 中通知客户端该选择。

即使客户端和服务器都支持相同的压缩算法，在 identity 指令可以被接受的情况下，服务器也可以选择对响应主体不进行压缩。导致这种情况出现的两种常见的情形是：

- 要发送的数据已经经过压缩，再次进行压缩不会导致被传输的数据量更小。一些图像格式的文件会存在这种情况；
- 服务器超载，无法承受压缩需求导致的计算开销。通常，如果服务器使用超过 80% 的计算能力，微软建议不要压缩。

只要 identity —— 表示不需要进行任何编码——没有被明确禁止使用（通过 identity;q=0 指令或是 \*;q=0 而没有为 identity 明确指定权重值），则服务器禁止返回表示客户端错误的 {{HTTPStatus("406")}} Not Acceptable 响应。

> **备注：** IANA 维护了[一个完整的官方支持的编码方式列表](http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)。
>
> - 另外两种编码方式—— bzip 和 bzip2 ——有时候也会用到，尽管并未在标准中出现。这两种方式实现了 UNIX 系统上的同名程序所采用的算法。注意第一种由于专利许可问题已经停止维护。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the {{Glossary("Quality Values", "quality value")}} syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## 指令

- `gzip`
  - : 表示采用 [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) 压缩算法，以及 32 位 CRC 校验的编码方式。
- `compress`
  - : 采用 [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) 压缩算法。
- `deflate`
  - : 采用 [zlib](http://en.wikipedia.org/wiki/Zlib) 结构和 [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) 压缩算法。
- `br`
  - : 表示采用 [Brotli](https://en.wikipedia.org/wiki/Brotli) 算法的编码方式。
- `identity`
  - : 用于指代自身（例如：未经过压缩和修改）。除非特别指明，这个标记始终可以被接受。
- `*`
  - : 匹配其他任意未在该请求头字段中列出的编码方式。假如该请求头字段不存在的话，这个值是默认值。它并不代表任意算法都支持，而仅仅表示算法之间无优先次序。
- `;q=` (qvalues weighting)
  - : 值代表优先顺序，用相对[质量价值](/zh-CN/docs/Glossary/Quality_values) 表示，又称为权重。

## 示例

```plain
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)
- 包含有内容协商结果的响应头： {{HTTPHeader("Content-Encoding")}}
- 其他相似的请求头：{{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
