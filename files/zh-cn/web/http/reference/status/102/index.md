---
title: 102 Processing
slug: Web/HTTP/Reference/Status/102
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{deprecated_header}}

HTTP **`102 Processing`** [信息响应](/zh-CN/docs/Web/HTTP/Reference/Status#信息响应)状态码用于告知客户端请求已被完整接收，服务器正在处理中。此状态码仅在服务器预期该请求将耗费较长时间时才会发送。

> [!NOTE]
> 常规的 Web 服务器不会返回该响应。此状态码最初在基于 Web 的分布式编写与版本控制（{{Glossary("WebDAV")}}）的 {{RFC("2518")}} 中引入，但在 {{RFC("4918")}} 中已被移除。

## 状态

```http
102 Processing
```

## 规范

{{Specifications}}

## 浏览器兼容性

该功能已被弃用，浏览器会忽略此响应标头。

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100")}}
- [rfc4918 '102 Processing' 移除说明](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
