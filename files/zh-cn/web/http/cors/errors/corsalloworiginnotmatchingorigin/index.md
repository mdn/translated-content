---
title: 原因：CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## 出了什么问题？

发出请求的源不能与 {{HTTPHeader("Access-Control-Allow-Origin")}} 标头允许的源相匹配。如果响应包含多个 `Access-Control-Allow-Origin` 标头，也会发生此错误。

如果你代码使用 CORS 请求访问的服务在你的控制之下，请确保在它的 `Access-Control-Allow-Origin` 标头中包含了你的源。此外，确定响应中只有一个这样的标头，并且它只能包含一个单独的源。

例如，在 Apache 中，将以下行添加到服务器的配置中（在相应的 `<Directory>`、`<Location>`、`<Files>` 或 `<VirtualHost>` 部分中）。配置通常位于 `.conf` 文件中（`httpd.conf` 和 `apache.conf` 是这些文件的通用名称）或者位于 `.htaccess` 文件中。

> [!WARNING]
> 你必须将 HTTPS 或 HTTP 协议作为源的一部分。

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

在 Nginx 中，对应的配置为：

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [开启 CORS：我希望在自己的服务器上添加对 CORS 的支持](https://enable-cors.org/server.html)
