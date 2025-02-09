---
title: 510 Not Extended
slug: Web/HTTP/Status/510
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

HTTP **`510 Not Extended`** [服务端错误响应](/zh-CN/docs/Web/HTTP/Status#服务端错误响应)状态码在客户端请求声明了应使用 HTTP 扩展（{{RFC("2774")}}）来处理请求，但服务器不支持该扩展时发送。

## 状态

```http
510 Not Extended
```

## 示例

### 扩展不受支持

在以下示例中，客户端发送了一个请求，并在 `C-MAN` 标头中指定了强制扩展。{{HTTPHeader("Connection")}} 标头指定这些扩展应基于[逐跳标头](/zh-CN/docs/Web/HTTP/Headers#逐跳（hop-by-hop）标头)进行处理。{{Glossary("Proxy_server", "代理")}}转发了扩展请求，但在传输过程中 {{HTTPHeader("Connection")}} 标头被移除。由于源服务器未收到有关 `M-GET` 方法的任何信息，因此它发送了 `510` 作为响应：

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## 规范

{{Specifications}}

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)
