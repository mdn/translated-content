---
title: 原因：invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader
---

## 原因

```plain
原因：invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## 哪里错了？

服务器发送的对 {{Glossary("CORS")}} 请求的响应包含 {{HTTPHeader("Access-Control-Allow-Headers")}} 标头，并且至少含有一个无效的标头名称。

`Access-Control-Allow-Headers` 标头通过服务器发送以响应[预检请求](/zh-CN/docs/Glossary/Preflight_request)；它让客户端知道 CORS 请求中允许哪些 [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)。如果客户端{{Glossary("user agent","用户代理")}}在逗号分隔的值中找到由该标头提供的任何它无法识别的标头名称，都会发生此错误。

这很有可能只能在服务端解决，方法是修改服务器的配置以不再发送带有 `Access-Control-Allow-Headers` 标头的无效或未知标头名称。检查以确保你的用户代理或者使用的客户端的 HTTP 库是最新的。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)
