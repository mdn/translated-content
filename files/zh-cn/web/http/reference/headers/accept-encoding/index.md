---
title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: ad2254c776cebeec3ff0a390a70886a4c4b57fb7
---

**`Accept-Encoding`** 请求 HTTP 标头表示客户端能够理解的内容编码（通常是某种压缩算法）。服务器使用[内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)从中选择一个提议，并通过 {{HTTPHeader("Content-Encoding")}} 响应标头告知客户端这一选择。

即使客户端和服务器都支持相同的压缩算法，在 `identity` 值可以被接受的情况下，服务器也可以选择不对响应体进行压缩。导致出现这种情况的常见原因有两个：

- 要发送的数据已经经过压缩，再次压缩不会减少传输的数据量。这适用于预先压缩过的图像格式（如 JPEG）。
- 服务器过载，无法分配计算资源来进行压缩。例如，微软建议如果服务器使用超过其计算能力的 80%，则不应进行压缩。

只要 `identity;q=0` 或 `*;q=0` 指令不明确禁止表示无编码的 `identity` 值，服务器就绝对不应返回 {{HTTPStatus("406")}} `Not Acceptable` 错误。

> [!NOTE]
>
> - IANA 维护了[一个完整的官方支持的编码方式列表](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)。
> - 另外两种内容编码 `bzip` 和 `bzip2` 有时也会被使用。这两种非标准编码实现了这两个 UNIX 程序所使用的算法。请注意，由于专利许可问题，`bzip` 已被弃用。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: identity
Accept-Encoding: *

// 使用{{Glossary("Quality Values", "质量价值")}}语法对多个算法进行加权：
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## 指令

- `gzip`
  - : 一种使用 [Lempel-Ziv 编码](https://zh.wikipedia.org/wiki/LZ77与LZ78#LZ77)（LZ77）压缩算法，以及 32 位 CRC 校验的压缩格式。
- `compress`
  - : 一种使用 [Lempel-Ziv-Welch](https://zh.wikipedia.org/wiki/LZW)（LZW）算法的压缩格式。
- `deflate`
  - : 一种使用 [zlib](https://zh.wikipedia.org/wiki/Zlib) 结构和 [_deflate_](https://zh.wikipedia.org/wiki/DEFLATE) 压缩算法的压缩格式。
- `br`
  - : 一种使用 [Brotli](https://zh.wikipedia.org/wiki/Brotli) 算法的压缩格式。
- `zstd`
  - : 一种使用 [Zstandard](https://zh.wikipedia.org/wiki/Zstd) 算法的压缩格式。
- `identity`
  - : 表示恒等函数（即不作任何修改或压缩）。即使省略，此值始终被视为是可接受的。
- `*`
  - : 匹配其他任意未在该请求标头字段中列出的编码方式。假如该请求标头字段不存在的话，这个值是默认值。它并不代表任意算法都支持，而仅仅表示算法之间无优先次序。
- `;q=`（q 值加权）
  - : 任何值都按照使用称为*权重*的相对[质量价值](/zh-CN/docs/Glossary/Quality_values)表达的优先级顺序排列。

## 示例

```http
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: gzip, compress, br, zstd

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)
- 包含有内容协商结果的响应标头：{{HTTPHeader("Content-Encoding")}}
- 其他相似的请求标头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli compression", "Brotli 压缩")}}
- {{Glossary("GZip compression", "GZip 压缩")}}
- {{Glossary("Zstandard compression", "Zstandard 压缩")}}
