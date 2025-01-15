---
title: 原因：CORS disabled
slug: Web/HTTP/CORS/Errors/CORSDisabled
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS disabled
```

## 哪里错了？

发送了一个需要使用 {{Glossary("CORS")}} 的请求，但在用户的浏览器中禁用了 CORS。发生这种情况时，用户需要在浏览器中重新打开 CORS。

在 Firefox 中，禁用 CORS 的首选项是 `content.cors.disable`。将此设置为 `true` 将禁用 CORS，因此在这种情况下，CORS 请求将始终因此错误而失败。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
