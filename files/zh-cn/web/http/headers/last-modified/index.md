---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
---

{{HTTPSidebar}}

**`Last-Modified`** 是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比 {{HTTPHeader("ETag")}} 要低，所以这是一个备用机制。包含有 {{HTTPHeader("If-Modified-Since")}} 或 {{HTTPHeader("If-Unmodified-Since")}} 首部的条件请求会使用这个字段。

| Header type                                                               | {{Glossary("Response header")}} |
| ------------------------------------------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                              |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | yes                             |

## 语法

```plain
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 指令

- \<day-name>
  - : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" 或 "Sun" 之一（区分大小写）。
- \<day>
  - : 两位数字表示的天数，例如"04" or "23"。
- \<month>
  - : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 之一（区分大小写）。
- \<year>
  - : 4 位数字表示的年份，例如 "1990" 或者"2016"。
- \<hour>
  - : 两位数字表示的小时数，例如 "09" 或者 "23"。
- \<minute>
  - : 两位数字表示的分钟数，例如"04" 或者 "59"。
- \<second>
  - : 两位数字表示的秒数，例如 "04" 或者 "59"。
- `GMT`
  - : 国际标准时间。HTTP 中的时间均用国际标准时间表示，从来不使用当地时间。

## 示例

```plain
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
