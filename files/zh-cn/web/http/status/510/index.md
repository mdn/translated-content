---
title: 510 Not Extended
slug: Web/HTTP/Status/510
---

{{HTTPSidebar}}

HTTP 协议的 **`510 Not Extended`** 响应状态码在 HTTP 扩展框架协议（参见 [RFC 2774](https://tools.ietf.org/html/rfc2774)）中发送。

在 HTTP 扩展框架协议中，一个客户端可以发送一个包含扩展声明的请求，该声明描述了要使用的扩展。如果服务器接收到这样的请求，但是请求不支持任何所描述的扩展，那么服务器将使用 510 状态码进行响应。

## Status

```plain
510 Not Extended
```

## Specifications

{{Specifications}}
