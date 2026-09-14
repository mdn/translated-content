---
title: 原因：CORS header 'Origin' cannot be added
slug: Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded
---

## 原因

```plain
原因：CORS header 'Origin' cannot be added
```

## 哪里错了？

{{Glossary("user agent","用户代理")}}不能把所需的 {{HTTPHeader("Origin")}} 标头添加到 {{Glossary("HTTP")}} 请求中。所有的 CORS 请求必须有 `Origin` 标头。

例如，如果 JavaScript 代码以增强的权限运行，允许它访问多个域名的内容，则会发生这种情况。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/Guides/CORS)
