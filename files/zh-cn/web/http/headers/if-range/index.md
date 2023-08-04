---
title: If-Range
slug: Web/HTTP/Headers/If-Range
---

{{HTTPSidebar}}

**`If-Range`** HTTP 请求头字段用来使得 **`Range`** 头字段在一定条件下起作用：当字段值中的条件得到满足时，**`Range`** 头字段才会起作用，同时服务器回复{{HTTPStatus("206")}} 部分内容状态码，以及**`Range`** 头字段请求的相应部分；如果字段值中的条件没有得到满足，服务器将会返回 {{HTTPStatus("200")}} `OK` 状态码，并返回完整的请求资源。

字段值中既可以用 {{HTTPHeader("Last-Modified")}} 时间值用作验证，也可以用{{HTTPHeader("ETag")}}标记作为验证，但不能将两者同时使用。

**`If-Range`** 头字段通常用于断点续传的下载过程中，用来自从上次中断后，确保下载的资源没有发生改变。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## 说明

- \<etag>
  - : 一个资源标签（entity tag）代表着所请求的资源。它是由被双引号包围的 ACSII 编码的字符串组成的（例如`"675af34563dc-tr34"`）。当应用弱匹配算法时，E-Tag 会有一个 `W/` 前缀。

<!---->

- \<day-name>
  - : `"Mon"`，`"Tue"`，`"Wed"`，`"Thu"`，`"Fri"`，`"Sat"` 或者 `"Sun"` 当中的一个（大小写敏感）。
- \<day>
  - : 两位数字，例如`"04"或者"23"`。
- \<month>
  - : `"Jan"`，`"Feb"`，`"Mar"`，`"Apr"`，`"May"`，`"Jun"`，`"Jul"`，`"Aug"`，`"Sep"`，`"Oct"`，`"Nov"`，或者 `"Dec"` 中的一个（大小写敏感）。
- \<year>
  - : 四位数字，例如`"1990"` 或者 `"2016"`。
- \<hour>
  - : 两位数字，例如 `"09"` 或者 `"23"`。
- \<minute>
  - : 两位数字，例如 `"04"` 或者 `"59"`。
- \<second>
  - : 两位数字，例如 `"04"` 或者 `"59"`。
- `GMT`
  - : 格林威治标准时间。HTTP 协议的日期总是要使用 GMT，而不是当地时间。

## 示例

```plain
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206")}} Partial Content
- [HTTP Conditional Requests](/zh-CN/docs/Web/HTTP/Conditional_requests)
