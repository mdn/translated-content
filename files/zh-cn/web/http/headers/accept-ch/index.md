---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`Accept-CH`** 头由服务器设置，以指定客户端应在后续请求中应包含哪些客户端 [Client Hints](/zh-CN/docs/Glossary/Client_hints) 提示头。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | ?                               |

> **备注：** [Client Hints](/zh-CN/docs/Glossary/Client_hints) 只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 Accept-CH 和 Accept-CH-Lifetime 头，以确保 [Client Hints](/zh-CN/docs/Glossary/Client_hints) 可靠地发送。

## 语法

```plain
Accept-CH: <list of client hints>
```

## 例子

```plain
Accept-CH: DPR, Viewport-Width
Accept-CH: Width
Accept-CH-Lifetime: 86400
Vary: DPR, Viewport-Width, Width
```

> **备注：** 牢记要根据所接受的 Client Hints [更改响应](/zh-CN/docs/Glossary/Client_hints#Varying_Client_Hints)。

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
