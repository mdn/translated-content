---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

HTTP **`511 Network Authentication Required`** [服务端错误响应](/zh-CN/docs/Web/HTTP/Status#服务端错误响应)状态码表示客户端需要进行认证才能获得网络访问权限。此状态不是由源服务器生成的，而是由控制网络访问的{{Glossary("Proxy_server", "代理服务器")}}拦截生成的。

网络运营商有时会要求用户进行一些身份验证、接受条款或其他互动，才能授予访问权限（例如在网吧或机场）。他们通常使用客户端的媒体访问控制（MAC）地址来识别尚未完成上述操作的用户。

## 状态

```http
511 Network Authentication Required
```

## 示例

### GET 请求的 511 响应

在以下示例中，客户端尝试访问网络上的某个资源。该请求未经身份验证，代理服务器返回 `511` 状态码，提示访问者进行登录。`511` 状态码确保非浏览器客户端不会将该响应误解为来自源服务器的响应。浏览器会在 10 秒后通过 {{HTMLelement("meta")}} 标签自动重定向，或者通过点击响应正文中的链接进行跳转：

```http
GET /document HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html>
  <head>
    <title>需要网络身份验证</title>
    <meta http-equiv="refresh" content="10; url=https://login.example.net/">
  </head>
  <body>
      <p>你需要通过<a href="https://login.example.net/">本地网络认证</a>才能获得访问权限。</p>
  </body>
</html>
```

## 规范

{{Specifications}}

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)
- {{Glossary("Proxy server", "代理服务器")}}
