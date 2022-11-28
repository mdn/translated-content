---
title: 'Reason: CORS request external redirect not allowed'
slug: Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS 不允许请求外部重定向
```

## 哪里错了？

{{Glossary("CORS")}} 请求被服务器响应了一个 HTTP 重定向到与原始请求的 Origin 不同的 URL 上，这在 CORS 请求中是不允许的。

例如，如果请求 `https://service.tld/fetchdata` ，但服务器的 HTTP 响应是 "301 永久移动"， "307 暂时重定向"，或 "308 永久重定向" 并且 `Location` 是`https://anotherservice.net/getdata`，那么 CORS 请求将会失败。

要解决此问题，请更新代码以使用重定向报告的新 URL，从而避免重定向。

## 参见

- [HTTP 访问控制（CORS）错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Access_control_CORS)
