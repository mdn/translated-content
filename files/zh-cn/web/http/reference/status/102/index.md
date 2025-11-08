---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 67a409e7944352612272e095a26bf325ecfae822
---

{{deprecated_header}}

HTTP **`102 Processing`** [信息响应](/zh-CN/docs/Web/HTTP/Reference/Status#信息响应)状态码用于告知客户端已接收到完整的请求，并且服务器正在处理中。此状态码仅在服务器预期该请求将耗费较长时间处理时才会发送。

> [!NOTE]
> 常规的 Web 服务器不会返回该响应。此状态码最初在基于 Web 的分布式编写与版本控制（{{Glossary("WebDAV")}}）的 {{RFC("2518")}} 中引入，但已在 {{RFC("4918")}} 中从 WebDAV 中被移除。

## 状态

```http
102 Processing
```

## 规范

{{Specifications}}

## 浏览器兼容性

该特性已被弃用，浏览器会忽略此响应状态码。

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [rfc4918“102 Processing”移除说明](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
