---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
---

{{HTTPSidebar}}

状态码 **`407 Proxy Authentication Required`** 代表客户端错误，指的是由于缺乏位于浏览器与可以访问所请求资源的服务器之间的代理服务器（{{Glossary("proxy server")}} ）要求的身份验证凭证，发送的请求尚未得到满足。

这个状态码会与 {{HTTPHeader("Proxy-Authenticate")}} 首部一起发送，其中包含有如何进行验证的信息。

## 状态

```plain
407 Proxy Authentication Required
```

## 响应示例

```plain
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## 规范

{{Specifications}}

## 参见

- [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
