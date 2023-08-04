---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
---

{{HTTPSidebar}}

HTTP 协议的 **`506 Variant Also Negotiates`** 响应状态码 可以在 TCN（透明内容协商，见 RF2295）上下文给出。TCN 协议允许客户端取回给定资源的最佳变量/变元，这里服务器支持多个变量/变元。

506 码表示内部服务器配置错误，其中所选变量/变元自身被配置为参与内容协商，因此并不是合适的协商端点。

## Status

```plain
506 Variant Also Negotiates
```

## Specifications

{{Specifications}}
