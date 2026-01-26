---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Reference/Status/451
---

**`451 Unavailable For Legal Reasons`**（因法律原因不可用）是一种 HTTP 协议的错误状态代码，表示服务器由于法律原因，无法提供客户端请求的资源，例如可能会导致法律诉讼的页面。

## 状态

```plain
451 Unavailable For Legal Reasons
```

## 示例

这个响应示例来自 IETF RFC 规范（见下文），其中提到了英国戏剧电影[Monty Python's Life of Brian](https://zh.wikipedia.org/wiki/蒙提·派森之布莱恩的一生)（《蒙提·派森之布莱恩的一生》）。

注意 {{HTTPHeader("Link")}} 首部中可能会包含一个 `rel="blocked-by"` 字段，用于标明为该资源无法提供负责的主体，例如颁布法令将资源删除的个人或组织的名称。

```plain
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
<head><title>Unavailable For Legal Reasons</title></head>
<body>
<h1>Unavailable For Legal Reasons</h1>
<p>This request may not be serviced in the Roman Province
of Judea due to the Lex Julia Majestatis, which disallows
access to resources hosted on servers deemed to be
operated by the People's Front of Judea.</p>
</body>
</html>
```

## 规范

{{Specifications}}

## 参见

- [Wikipedia: HTTP 451](https://zh.wikipedia.org/wiki/HTTP_451)
- [Wikipedia: Fahrenheit 451](https://zh.wikipedia.org/wiki/Fahrenheit_451) (which gave this status code its number)
