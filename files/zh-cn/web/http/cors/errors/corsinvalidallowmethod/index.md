---
title: 原因：invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
---

{{HTTPSidebar}}

## 原因

```plain
原因：invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## 哪里错了？

服务器发送的对 {{Glossary("CORS")}} 请求的响应包含 {{HTTPHeader("Access-Control-Allow-Methods")}} 标头信息，并且含有至少一个无效的方法名称。

服务器发送 `Access-Control-Allow-Methods` 标头信息，让客户端知道它对 CORS 请求支持哪些 [HTTP 请求方法](/zh-CN/docs/Glossary/HTTP)。`Access-Control-Allow-Methods` 的值是以逗号分隔的 HTTP 方法，例如 {{HTTPMethod("GET")}}、{{HTTPMethod("POST")}} 或 {{HTTPMethod("HEAD")}}。如果客户端{{Glossary("user agent","用户代理")}}无法识别返回的值，则会发生此错误。

这很有可能只能在服务端解决，方法是修改服务器的配置以不再发送带有 `Access-Control-Allow-Methods` 标头的无效或未知方法名称。检查你的用户代理或者你使用的浏览器中的 HTTP 库是最新的。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)
