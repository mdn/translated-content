---
title: Range
slug: Web/HTTP/Headers/Range
---

{{HTTPSidebar}}

The **`Range`** 是一个请求首部，告知服务器返回文件的哪一部分。在一个 `Range` 首部中，可以一次性请求多个部分，服务器会以 multipart 文件的形式将其返回。如果服务器返回的是范围响应，需要使用 {{HTTPStatus("206")}} `Partial Content` 状态码。假如所请求的范围不合法，那么服务器会返回 {{HTTPStatus("416")}} `Range Not Satisfiable` 状态码，表示客户端错误。服务器允许忽略 `Range` 首部，从而返回整个文件，状态码用 {{HTTPStatus("200")}} 。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
```

## 指令

- \<unit>
  - : 范围所采用的单位，通常是字节（bytes）。

<!---->

- \<range-start>
  - : 一个整数，表示在特定单位下，范围的起始值。
- \<range-end>
  - : 一个整数，表示在特定单位下，范围的结束值。这个值是可选的，如果不存在，表示此范围一直延伸到文档结束。

## 示例

```plain
Range: bytes=200-1000, 2000-6576, 19000-
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
