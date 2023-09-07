---
title: 原因：Multiple CORS header 'Access-Control-Allow-Origin' not allowed
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
---

{{HTTPSidebar}}

## 原因

```plain
原因：Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## 哪里错了？

服务器返回了多个 {{HTTPHeader("Access-Control-Allow-Origin")}} 标头。这是不允许的。

如果你有权访问该该服务器，请更改你的实现以在 `Access-Control-Allow-Origin` 标头返回该源。你不能发回源列表，因为浏览器仅接受单一的源或者空值。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [启用 CORS：我想让自己的服务支持 CORS](https://enable-cors.org/server.html)
