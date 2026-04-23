---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

HTTP **`421 Misdirected Request`** [客户端错误响应](/zh-CN/docs/Web/HTTP/Reference/Status#客户端错误响应)状态码表示请求被定向到了一个无法生成响应的服务器。此响应可以由未配置为针对请求 URI 中包含的 [scheme](/zh-CN/docs/Web/URI/Reference/Schemes) 和 [authority](/zh-CN/docs/Web/URI/Reference/Authority) 组合生成响应的服务器发送。

客户端可以通过不同的连接重试请求。

## 状态

```http
421 Misdirected Request
```

## 示例

### Apache SNI 错误

给定以下请求：

```http
GET / HTTP/1.1
Host: abc.example.com
```

在使用了通配符证书（`*.example.com`）且连接复用于多个域名（`abc.example.com`、`def.example.com`）等情况下，服务器可能会返回 421 响应：

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## 规范

{{Specifications}}

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- [多主机和错误定向请求的](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache 服务器文档
- [TLS 1.3](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- [服务器名称指示（SNI）](https://zh.wikipedia.org/wiki/服务器名称指示)
- [传输层安全（TLS）配置](/zh-CN/docs/Web/Security/Practical_implementation_guides/TLS)
- Apache [错误代码 `AH02032`](https://svn.apache.org/viewvc?view=revision&revision=1705672) 的实现
