---
title: 原因：CORS header 'Access-Control-Allow-Origin' missing
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS header 'Access-Control-Allow-Origin' missing
```

## 哪里出错了？

对 {{Glossary("CORS")}} 请求的响应缺少必需的 {{HTTPHeader("Access-Control-Allow-Origin")}} 标头，该标头用于确定在当前源中的操作是否可以访问资源。

如果服务器在你的控制之下，请将请求站点的源添加到允许访问的域集，方法是将其添加到 `Access-Control-Allow-Origin` 标头的值。

例如，要允许 `https://example.com` 上的站点使用 CORS 访问资源，这个标头应该是：

```http
Access-Control-Allow-Origin: https://example.com
```

你还可以使用 `*` 通配符配置站点，这样可以允许任何站点访问它。这样的处理应该只用于公共的 API。私有 API 永远不应使用 `*`，而应设置特定的域（可以不止一个）。此外，通配符仅适用于将 [`crossorigin`](/zh-CN/docs/Web/HTML/Attributes/crossorigin) 属性设置为 `anonymous` 的请求，并且它阻止在请求中发送诸如 cookie 之类的凭据。

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> 使用通配符允许所有站点访问私有 API 是显而易见的坏主意。

如果要在*不使用* `*` 通配符的情况下让任意站点发出 CORS 请求（例如，为了启用凭证），你的服务器必须读取请求的 `Origin` 标头，将那个值设置为 `Access-Control-Allow-Origin` 的值，且必须一并设置 `Vary: Origin` 标头，表明一部分标头由源动态决定。

设置标头的命令取决于你的 Web 服务器。例如，在 Apache 服务器中，将下面一行添加到服务器的配置中（在相应的 `<Directory>`、`<Location>`、`<Files>` 或 `<VirtualHost>` 部分中）。配置通常位于 `.conf` 文件中（`httpd.conf` 和 `apache.conf` 是这些文件的通用名称）或者位于 `.htaccess` 文件中。

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

对于 Nginx，设置此标头的命令是：

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
