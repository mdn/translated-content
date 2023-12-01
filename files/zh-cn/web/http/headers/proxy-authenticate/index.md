---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
---

{{HTTPSidebar}}

The HTTP **`Proxy-Authenticate`** 是一个响应首部，指定了获取 {{Glossary("proxy server")}}（代理服务器）上的资源访问权限而采用的身份验证方式。代理服务器对请求进行验证，以便它进一步传递请求。

`Proxy-Authenticate` 首部需要与 {{HTTPStatus("407")}} `Proxy Authentication Required` 响应一起发送。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Proxy-Authenticate: <type> realm=<realm>
```

## 指令

- \<type>
  - : [身份验证类型](/zh-CN/docs/Web/HTTP/Authentication#Authentication_schemes)。一个常见的类型是 ["基本验证"。](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme)IANA 机构维护了 [一系列的身份验证机制](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)。
- realm=\<realm>
  - : 对于被保护区域（即安全域）的描述。如果没有指定安全域，客户端通常用一个格式化的主机名来代替。

## 示例

```plain
Proxy-Authenticate: Basic

Proxy-Authenticate: Basic realm="Access to the internal site"
```

## 规范

{{Specifications}}

## 相关内容

- [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
