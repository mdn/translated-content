---
title: 原因：CORS 头 'Access-Control-Allow-Origin'与'xyz'不匹配
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS 头 'Access-Control-Allow-Origin'与'xyz'不匹配
```

## 出了什么问题？

简而言之，发出请求的原点与 {{HTTPHeader("Access-Control-Allow-Origin")}} 标题允许的任何来源都不匹配。

如果响应包含多个 `Access-Control-Allow-Origin` 标头，也会发生此错误。

如果您的代码使用 CORS 请求访问的服务在您的控制之下，请确保将其配置为将其来源包含在其 `Access-Control-Allow-Origin` 标头中，并且响应中仅包含一个此类标头。标题本身接受逗号描述的起源列表，因此添加新的起源并不困难。

例如，在 Apache 中，将以下行添加到服务器的配置中（在相应的 `<Directory>`，`<Location>`，`<Files>` 或 `<VirtualHost>` 部分中）。配置通常位于 `.conf` 文件中（`httpd.conf` 和 `apache.conf` 是这些文件的通用名称），或者位于 `.htaccess` 文件中。

```plain
Header set Access-Control-Allow-Origin 'origin-list'
```

在 Nginx 中，对应的配置为：

```plain
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## 查看更多

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [开启 CORS: 我希望在自己的服务器上添加对 CORS 的支持](https://enable-cors.org/server.html)
