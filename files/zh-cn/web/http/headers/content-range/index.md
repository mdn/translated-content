---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
---

{{HTTPSidebar}}

在 HTTP 协议中，响应首部 **`Content-Range`** 显示的是一个数据片段在整个文件中的位置。

| Header type                                                               | {{Glossary("Response header")}} |
| ------------------------------------------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                              |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | no                              |

## 语法

```plain
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## 指令

- \<unit>
  - : 数据区间所采用的单位。通常是字节（byte）。

<!---->

- \<range-start>
  - : 一个整数，表示在给定单位下，区间的起始值。
- \<range-end>
  - : 一个整数，表示在给定单位下，区间的结束值。
- \<size>
  - : 整个文件的大小（如果大小未知则用"\*"表示）。

## 示例

```plain
Content-Range: bytes 200-1000/67589
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
