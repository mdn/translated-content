---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Transfer-Encoding`** 标头指明了将{{Glossary("Payload body","有效负载体")}}安全传输给用户所采用的编码形式。

> **备注：** [HTTP/2](https://zh.wikipedia.org/wiki/HTTP/2) 禁止使用除 HTTP/2 特有的 `"trailers"` 以外的所有 Transfer-Encoding 标头。HTTP 2 提供了比分块传输更有效的数据流机制，并禁止使用该标头。在 HTTP/2 中使用该标头可能会导致特定的 `protocol error`，因为 HTTP/2 协议禁止使用该标头。

`Transfer-Encoding` 是一个[逐跳传输标头](/zh-CN/docs/Web/HTTP/Headers#逐跳（hop-by-hop）标头)，即仅应用于两个节点之间的消息传递，而不是所请求的资源本身。一个多节点连接中的每一段都可以应用不同的 `Transfer-Encoding` 值。如果你想要将压缩后的数据应用于整个连接，那么请使用端到端标头 {{HTTPHeader("Content-Encoding")}}。

当这个标头出现在 {{HTTPMethod("HEAD")}} 请求的响应中，而这样的响应没有消息体，那么它其实指的是应用在相应的 {{HTTPMethod("GET")}} 请求的应答的值。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}、{{Glossary("Payload header", "有效负载标头")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip

// 可以列出多个值，用逗号分割
Transfer-Encoding: gzip, chunked
```

## 指令

- `chunked`
  - : 数据以一系列分块的形式进行发送。{{HTTPHeader("Content-Length")}} 标头在这种情况下不被发送。在每一个分块的开头需要添加当前分块的长度，以十六进制的形式表示，后面紧跟着“`\r\n`”，之后是分块本身，后面也是“`\r\n`”。终止块是一个常规的分块，不同之处在于其长度为 0。终止块后面是一个挂载（trailer），由一系列的标头（可能为空）构成。
- `compress`
  - : 采用 [Lempel-Ziv-Welch](http://zh.wikipedia.org/wiki/LZW)（LZW）压缩算法。这个名称来自 UNIX 系统的 _compress_ 程序，该程序实现了前述算法。与已从大多数 UNIX 发行版中消失的 compress 程序一样，如今几乎没有浏览器使用这种内容编码，部分原因是专利问题（2003 年到期）。
- `deflate`
  - : 采用 [zlib](http://zh.wikipedia.org/wiki/Zlib) 结构（于 [RFC 1950](https://tools.ietf.org/html/rfc1950) 定义）和 [_deflate_](https://zh.wikipedia.org/wiki/Deflate) 压缩算法（于 [RFC 1951](https://tools.ietf.org/html/rfc1952) 定义）。
- `gzip`
  - : 表示采用 [Lempel-Ziv coding](https://zh.wikipedia.org/wiki/LZ77与LZ78#LZ77)（LZ77）压缩算法，以及 32 位 CRC 校验的编码方式。这个编码方式最初由 UNIX 平台上的 _gzip_ 程序采用。出于兼容性的考虑，HTTP/1.1 标准提议支持这种编码方式的服务器应该识别作为别名的 `x-gzip` 指令。

## 示例

### 分块编码

分块编码主要应用于如下场景，即要传输大量的数据，但是在请求在没有被处理完之前响应的长度是无法获得的。例如，当需要用从数据库中查询获得的数据生成一个大的 HTML 表格的时候，或者需要传输大量的图片的时候。一个分块响应形式如下：

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
11\r\n
Developer Network\r\n
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
- 规范挂载使用的标头字段：{{HTTPHeader("TE")}}（请求）和 {{HTTPHeader("Trailer")}}（响应）。
- [分块传输编码](https://zh.wikipedia.org/wiki/分块传输编码)
