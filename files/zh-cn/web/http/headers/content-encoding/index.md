---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

{{Glossary("representation header", "表示标头")}} **`Content-Encoding`** 列出了对当前应用资源的任何编码类型，以及编码的顺序。它让接收者知道需要以何种顺序解码数据以获得 {{HTTPHeader("Content-Type")}} 标头中描述的原始内容格式。内容编码主要用于在不丢失原媒体类型内容的情况下压缩内容。

一般建议服务器应对数据尽可能地进行压缩，并在适当情况下对内容进行编码。对一种压缩过的媒体类型如 .zip 或 .jpeg 进行额外的压缩并不合适，因为这反而有可能会使内容增大。如果原始媒体以某种方式编码（例如 .zip 文件），则该信息不应该被包含在 `Content-Encoding` 标头内。

当存在 `Content-Encoding` 标头时，其他元数据（例如 {{HTTPHeader("Content-Type")}}）指示的是数据编码后的形式，而不是原始数据的形式（除非显式声明）。内容编码与 {{HTTPHeader("Transfer-Encoding")}} 不同，因为 `Transfer-Encoding` 处理的是 HTTP 消息本身如何在网络上[逐跳](/zh-CN/docs/Web/HTTP/Headers#逐跳（hop-by-hop）标头)传输。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">标头类型</th>
   <td>{{Glossary("Representation header", "表示标头")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
   <td>否</td>
  </tr>
 </tbody>
</table>

## 语法

```http
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br
Content-Encoding: zstd

// 多个，按应用的编码顺序列出
Content-Encoding: deflate, gzip
```

## 指令

- `gzip`
  - : 表示采用 [Lempel-Ziv coding](https://zh.wikipedia.org/wiki/LZ77与LZ78#LZ77)（LZ77）压缩算法，以及 32 位 CRC 校验的编码方式。这个编码方式最初由 UNIX 平台上的 _gzip_ 程序采用。出于兼容性的考虑，HTTP/1.1 标准提议支持这种编码方式的服务器应该识别作为别名的 `x-gzip` 指令。
- `compress`
  - : 采用 [Lempel-Ziv-Welch](https://zh.wikipedia.org/wiki/LZW)（LZW）压缩算法。这个名称来自 UNIX 系统的 _compress_ 程序，该程序实现了前述算法。与其同名程序已经在大部分 UNIX 发行版中消失一样，这种内容编码方式已经被大部分浏览器弃用，部分因为专利问题（这项专利在 2003 年到期）。
- `deflate`
  - : 采用 [zlib](https://zh.wikipedia.org/wiki/zlib) 结构（在 {{rfc(1950)}} 中规定）和 [deflate](https://zh.wikipedia.org/wiki/DEFLATE) 压缩算法（在 {{rfc(1951)}} 中规定)。
- `br`
  - : 采用 {{glossary("Brotli compression","Brotli")}} 算法结构（在 {{rfc(7932)}} 中规定）的格式。
- `zstd`
  - : 采用 {{glossary("Zstandard compression","Zstandard")}} 算法结构（在 {{rfc(8878)}} 中规定）的格式。

## 示例

### 使用 gzip 方式进行压缩

在客户端，可以声明一个将在 HTTP 请求中一齐发送的压缩模式列表。{{HTTPHeader("Accept-Encoding")}} 标头用于协商内容编码。

```http
Accept-Encoding: gzip, deflate
```

服务器通过 `Content-Encoding` 响应标头指示所使用的模式进行响应。

```http
Content-Encoding: gzip
```

需要注意的是，服务器端并不强制要求一定使用何种压缩模式。采用哪种压缩方式高度依赖于服务器端的设置，及其所采用的模块。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{Glossary("Brotli compression", "Brotli 压缩")}}
- {{Glossary("GZip compression", "GZip 压缩")}}
- {{Glossary("Zstandard compression", "Zstandard 压缩")}}
