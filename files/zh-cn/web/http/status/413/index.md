---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
---

{{HTTPSidebar}}

HTTP 响应状态码 **`413 Content Too Large`** 表示请求主体的大小超过了服务器愿意或有能力处理的限度，服务器可能会关闭连接或返回 {{HTTPHeader("Retry-After")}} 标头字段。

在 RFC 9110 标准之前，该响应的短语为 **`Payload Too Large`**，它仍在被广泛使用。

## 状态

```http
413 Content Too Large
```

## 规范

{{Specifications}}

## 参见

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
