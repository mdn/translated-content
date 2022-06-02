---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
tags:
  - HTTP
  - Headers
  - Reference
translation_of: Web/HTTP/Headers/Content-Encoding
---
{{HTTPSidebar}}

{{Glossary("representation header", "实体消息首部")}} **`Content-Encoding`** 列出了对当前实体消息（消息荷载）应用的任何编码类型，以及编码的顺序。它让接收者知道需要以何种顺序解码该实体消息才能获得原始荷载格式。 Content-Encoding 主要用于在不丢失原媒体类型内容的情况下压缩消息数据。

请注意原始媒体/内容的类型通过 {{HTTPHeader("Content-Type")}} 首部给出，而 `Content-Encoding` 应用于数据的表示，或“编码形式”。如果原始媒体以某种方式编码（例如 zip 文件），则该信息不应该被包含在 `Content-Encoding` 首部内。

一般建议服务器应对数据尽可能地进行压缩，并在适当情况下对内容进行编码。对一种压缩过的媒体类型如 zip 或 jpeg 进行额外的压缩并不合适，因为这反而有可能会使荷载增大。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Representation header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

## 语法

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br

// 多个，按应用的编码顺序列出
Content-Encoding: deflate, gzip
```

## 指令

- `gzip`
  - : 表示采用 {{interWiki("wikipedia", "LZ77与LZ78#LZ77", "Lempel-Ziv coding")}}（LZ77）压缩算法，以及 32 位 CRC 校验的编码方式。这个编码方式最初由 UNIX 平台上的 _gzip_ 程序采用。出于兼容性的考虑，HTTP/1.1 标准提议支持这种编码方式的服务器应该识别作为别名的 `x-gzip` 指令。
- `compress`
  - : 采用 {{interWiki("wikipedia", "LZW", "Lempel-Ziv-Welch")}}（LZW）压缩算法。这个名称来自 UNIX 系统的 _compress_ 程序，该程序实现了前述算法。与其同名程序已经在大部分 UNIX 发行版中消失一样，这种内容编码方式已经被大部分浏览器弃用，部分因为专利问题（这项专利在 2003 年到期）。
- `deflate`
  - : 采用 {{interWiki("wikipedia", "zlib")}} 结构（在 {{rfc(1950)}} 中规定），和 {{interWiki("wikipedia", "DEFLATE", "deflate")}} 压缩算法（在 {{rfc(1951)}} 中规定)。
- `br`
  - : 表示采用 {{interWiki("wikipedia", "Brotli")}} 算法的编码方式。

## 示例

### 使用 gzip 方式进行压缩

客户端可以事先声明一系列可以支持的压缩模式，与请求一齐发送。{{HTTPHeader("Accept-Encoding")}} 这个首部就是用来进行这种内容编码形式协商的：

```
Accept-Encoding: gzip, deflate
```

服务器在 `Content-Encoding` 响应首部提供了实际采用的压缩模式：

```
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
