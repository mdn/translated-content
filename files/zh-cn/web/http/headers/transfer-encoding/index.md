---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
---

{{HTTPSidebar}}

**`Transfer-Encoding`** 消息首部指明了将 {{Glossary("Entity header","entity")}} 安全传递给用户所采用的编码形式。

`Transfer-Encoding` 是一个[逐跳传输消息首部](/zh-CN/docs/Web/HTTP/Headers#hbh)，即仅应用于两个节点之间的消息传递，而不是所请求的资源本身。一个多节点连接中的每一段都可以应用不同的`Transfer-Encoding` 值。如果你想要将压缩后的数据应用于整个连接，那么请使用端到端传输消息首部 {{HTTPHeader("Content-Encoding")}} 。

当这个消息首部出现在 {{HTTPMethod("HEAD")}} 请求的响应中，而这样的响应没有消息体，那么它其实指的是应用在相应的 {{HTTPMethod("GET")}} 请求的应答的值。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                             |

## 语法

```plain
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

// Several values can be listed, separated by a comma
Transfer-Encoding: gzip, chunked
```

## 指令

- `chunked`
  - : 数据以一系列分块的形式进行发送。 {{HTTPHeader("Content-Length")}} 首部在这种情况下不被发送。。在每一个分块的开头需要添加当前分块的长度，以十六进制的形式表示，后面紧跟着 '`\r\n`' ，之后是分块本身，后面也是'`\r\n`' 。终止块是一个常规的分块，不同之处在于其长度为 0。终止块后面是一个挂载（trailer），由一系列（或者为空）的实体消息首部构成。
- `compress`
  - : 采用 [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) 压缩算法。这个名称来自 UNIX 系统的 _compress_ 程序，该程序实现了前述算法。
    与其同名程序已经在大部分 UNIX 发行版中消失一样，这种内容编码方式已经被大部分浏览器弃用，部分因为专利问题（这项专利在 2003 年到期）。
- `deflate`
  - : 采用 [zlib](http://en.wikipedia.org/wiki/Zlib) 结构 (在 [RFC 1950](http://tools.ietf.org/html/rfc1950) 中规定)，和 [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) 压缩算法 (在 [RFC 1951](http://tools.ietf.org/html/rfc1952) 中规定)。
- `gzip`
  - : 表示采用 [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) 压缩算法，以及 32 位 CRC 校验的编码方式。这个编码方式最初由 UNIX 平台上的 _gzip_ 程序采用。处于兼容性的考虑，HTTP/1.1 标准提议支持这种编码方式的服务器应该识别作为别名的 `x-gzip` 指令。
- `identity`
  - : 用于指代自身（例如：未经过压缩和修改）。除非特别指明，这个标记始终可以被接受。

## 示例

### 分块编码

分块编码主要应用于如下场景，即要传输大量的数据，但是在请求在没有被处理完之前响应的长度是无法获得的。例如，当需要用从数据库中查询获得的数据生成一个大的 HTML 表格的时候，或者需要传输大量的图片的时候。一个分块响应形式如下：

```plain
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Header fields that regulate the use of trailers: {{HTTPHeader("TE")}} (requests) and {{HTTPHeader("Trailer")}} (responses).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
