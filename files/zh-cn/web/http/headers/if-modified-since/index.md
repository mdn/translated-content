---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
---

{{HTTPSidebar}}

**`If-Modified-Since`** 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 {{HTTPStatus("200")}} 。如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的 {{HTTPStatus("304")}} 响应，而在 {{HTTPHeader("Last-Modified")}} 首部中会带有上次修改时间。不同于 {{HTTPHeader("If-Unmodified-Since")}}, `If-Modified-Since` 只可以用在 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 请求中。

当与 {{HTTPHeader("If-None-Match")}} 一同出现时，它（**`If-Modified-Since`**）会被忽略掉，除非服务器不支持 `If-None-Match`。

最常见的应用场景是来更新没有特定 {{HTTPHeader("ETag")}} 标签的缓存实体。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
