---
title: If-Match
slug: Web/HTTP/Headers/If-Match
---

{{HTTPSidebar}}

请求首部 **`If-Match`** 的使用表示这是一个条件请求。在请求方法为 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}} 的情况下，服务器仅在请求的资源满足此首部列出的 `ETag`值时才会返回资源。而对于 {{HTTPMethod("PUT")}} 或其他非安全方法来说，只有在满足条件的情况下才可以将资源上传。

{{HTTPHeader("ETag")}} 之间的比较使用的是**强比较算法**，即只有在每一个字节都相同的情况下，才可以认为两个文件是相同的。在 ETag 前面添加 `W/` 前缀表示可以采用相对宽松的算法。

以下是两个常见的应用场景：

- 对于 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}} 方法，搭配 {{HTTPHeader("Range")}}首部使用，可以用来保证新请求的范围与之前请求的范围是对同一份资源的请求。如果 ETag 无法匹配，那么需要返回 {{HTTPStatus("416")}} (Range Not Satisfiable，范围请求无法满足) 响应。
- 对于其他方法来说，尤其是 {{HTTPMethod("PUT")}}, `If-Match` 首部可以用来避免[更新丢失问题](https://www.w3.org/1999/04/Editing/#3.1)。它可以用来检测用户想要上传的不会覆盖获取原始资源之后做出的更新。如果请求的条件不满足，那么需要返回 {{HTTPStatus("412")}} (Precondition Failed，先决条件失败) 响应。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## 指令

- \<etag_value>
  - : 唯一地表示一份资源的实体标签。标签是由 ASCII 字符组成的字符串，用双引号括起来（如 "675af34563dc-tr34"）。前面可以加上 W/ 前缀表示应该采用弱比较算法。
- `*`
  - : 星号是一个特殊值，可以指代任意资源。

## 示例

```plain
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: W/"67ab43", "54ed21", "7892dd"

If-Match: *
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("416")}} `Range Not Satisfiable`
- {{HTTPStatus("412")}} `Precondition Failed`
