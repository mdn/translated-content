---
title: 'Reason: CORS header ''Access-Control-Allow-Origin'' missing'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---
{{HTTPSidebar}}

## 原因

```plain
原因：缺少 CORS “Access-Control-Allow-Origin”
```

## 哪里出错了？

对 {{Glossary("CORS")}} 请求的响应缺少必需的{{HTTPHeader("Access-Control-Allow-Origin")}}头，其用于确定在当前源内操作的资源是否可以访问。

如果服务器在您的控制之下，请将请求站点的源添加到允许访问的域集，方法是将其添加到`Access-Control-Allow-Origin`头的值。

例如，要允许 https\://amazing.site 上的站点使用 CORS 访问资源，这个 http 头应该为：

```plain
Access-Control-Allow-Origin: https://amazing.site
```

您还可以使用`"*"`通配符配置站点使得允许任何站点访问它。您应该只将它用于公共的 API。私有 API 永远不应使用`"*"`，而应设置特定的一个域或一些域。此外，通配符仅适用于将{{htmlattrxref("crossorigin")}} 属性设置为`"anonymous"`的请求。

```plain
Access-Control-Allow-Origin: *
```

> **警告：** 使用通配符允许所有站点访问私有 API 是显而易见的坏主意。

例如，在 Apache 服务器中，将下面一行添加到服务器的配置中（在相应的\<Directory>，\<Location>，\<Files>或\<VirtualHost>部分中）。 配置通常位于.conf 文件中（httpd.conf 和 apache.conf 是这些文件的通用名称），或者位于`.htaccess`文件中。

```plain
Header set Access-Control-Allow-Origin 'origin-list'
```

对于 Nginx，设置此 http 头的命令是：

```plain
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
