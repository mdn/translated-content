---
title: 'Reason: CORS header ‘Origin’ cannot be added'
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
---

{{HTTPSidebar}}

## 原因

```plain
原因：没有添加头字段‘Origin’
```

## 哪里错了？

{{Glossary("user agent")}} 不能把 {{HTTPHeader("Origin")}} 头字段添加到 {{Glossary("HTTP")}} 请求中。所有的 CORS 请求必须有 `Origin` 头字段。

例如，如果 JavaScript 代码以增强的权限运行，允许它访问多个域名的内容，则会发生这种情况。

## 参见

- [HTTP 访问控制（CORS）错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Access_control_CORS)
