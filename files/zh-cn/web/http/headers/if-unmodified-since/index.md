---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
---

{{HTTPSidebar}}

HTTP 协议中的 **`If-Unmodified-Since`** 消息头用于请求之中，使得当前请求成为条件式请求：只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源，或是接受 {{HTTPMethod("POST")}} 或其他 non-{{Glossary("safe")}} 方法的请求。如果所请求的资源在指定的时间之后发生了修改，那么会返回 {{HTTPStatus("412")}} (Precondition Failed) 错误。

常见的应用场景有两种：

- 与 non-{{Glossary("safe")}} 方法如 {{HTTPMethod("POST")}} 搭配使用，可以用来[优化并发控制](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)，例如在某些 wiki 应用中的做法：假如在原始副本获取之后，服务器上所存储的文档已经被修改，那么对其作出的编辑会被拒绝提交。
- 与含有 {{HTTPHeader("If-Range")}} 消息头的范围请求搭配使用，用来确保新的请求片段来自于未经修改的文档。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPHeader("If-Range")}}
- {{HTTPStatus("412")}} `Precondition Failed`
