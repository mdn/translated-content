---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

服务器设置 **`Accept-CH-Lifetime`** 标头以指定{{HTTPHeader("Accept-CH")}}标头值的持久性，该值指定客户端应在后续请求中包括哪些[Client Hints](/zh-CN/docs/Glossary/Client_hints)标头。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | ?                               |

> **备注：** [Client Hints](/zh-CN/docs/Glossary/Client_hints)只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 Accept-CH 和 Accept-CH-Lifetime 头，以确保[Client Hints](/zh-CN/docs/Glossary/Client_hints)可靠地发送。

## 语法

```plain
Accept-CH-Lifetime: <age>
```

## 示例

```plain
Accept-CH: Viewport-Width, DPR
Accept-CH-Lifetime: 86400
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Vary")}}
