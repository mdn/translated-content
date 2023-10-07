---
title: 原因：missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
---

{{HTTPSidebar}}

## 原因

```plain
原因：missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## 哪里错了？

`Access-Control-Allow-Headers` 标头由服务端发送，让客户端知道它支持哪些标头用于 {{Glossary("CORS")}} 请求。`Access-Control-Allow-Headers` 的值应该是逗号分隔的标头名称列表，例如“`X-Custom-Information`”或任何标准但非基本的标头名称（始终允许）。

尝试预检未明确允许的标头时会发生此错误（即，它不包含在服务器发送的 `Access-Control-Allow-Headers` 标头指定的列表中）。要解决此问题，需要更新服务器以允许指定的标头，或者需要避免使用该标头。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)
