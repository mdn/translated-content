---
title: 'Reason: Multiple CORS header ''Access-Control-Allow-Origin'' not allowed'
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
---

{{HTTPSidebar}}

## 原因

```plain
原因：不允许出现多个‘Access-Control-Allow-Origin’CORS 头信息。
```

## 为什么会出现该问题？

服务器返回了超过一个 {{HTTPHeader("Access-Control-Allow-Origin")}} 标头信息，因此被认为是错误的。

如果您正在管理该服务，请改正只返回一个 `Access-Control-Allow-Origin` 标头信息。同时需要注意，服务器返回的 `Access-Control-Allow-Origin` 值不应该是一个列表，因为浏览器只会接受一个值，并且不能为空。

## 查看更多

- [CORS](/zh-CN/docs/Web/HTTP/CORS/Errors) 错误
- Glossary: {{Glossary("CORS")}}
- [CORS](/zh-CN/docs/Web/HTTP/CORS) 介绍
- [启用 CORS: 我想让自己的服务支持 CORS](https://enable-cors.org/server.html)
