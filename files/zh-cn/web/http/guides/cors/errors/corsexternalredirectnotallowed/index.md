---
title: 原因：CORS request external redirect not allowed
slug: Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed
---

## 原因

```plain
原因：CORS request external redirect not allowed
```

## 哪里错了？

服务器响应了 {{Glossary("CORS")}} 请求，并将 HTTP 重定向到与原始请求不同源的 URL 上，这在 CORS 请求期间是不允许的。

例如，如果页面请求 `https://service.tld/fetchdata`，并且服务器的 HTTP 响应是“301 Moved Permanently”、“307 Temporary Redirect”或“308 Permanent Redirect”，并且 `Location` 是`https://anotherservice.net/getdata`，那么 CORS 请求将以这种方式失败。

要解决此问题，请更新代码以使用重定向报告的新 URL，从而避免重定向。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/Guides/CORS)
