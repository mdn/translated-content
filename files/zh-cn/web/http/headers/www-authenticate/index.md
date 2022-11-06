---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
---

{{HTTPSidebar}}

HTTP **`WWW-Authenticate`** 响应头定义了使用何种验证方式去获取对资源的连接。

`WWW-Authenticate` header 通常会和一个 {{HTTPStatus("401")}} `Unauthorized` 的响应一同被发送。

| Header type                                      | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 语法

```plain
WWW-Authenticate: <type> realm=<realm>
```

## 指令

- \<type>
  - : [Authentication type](/zh-CN/docs/Web/HTTP/Authentication#Authentication_schemes)，一个通用类型 ["Basic"](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme)。IANA 维护了一个 [list of Authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)。
- realm=\<realm>
  - : 一个保护区域的描述。如果未指定 realm，客户端通常显示一个格式化的主机名来替代。
- charset=\<charset>
  - : 当提交用户名和密码时，告知客户端服务器首选的编码方案。唯一的允许值是不区分大小写的字符串"UTF-8"。这与 realm 字符串的编码无关。

## 示例

通常的，一个服务器响应包含一个像如下`WWW-Authenticate`的头信息：

```plain
WWW-Authenticate: Basic

WWW-Authenticate: Basic realm="Access to the staging site"
```

作为一个例子，可以查看 [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication) 页面，了解如何配置 Apache 和 nginx 服务器来使用 HTTP basic authentication 密码保护你的站点。

## 规范

{{Specifications}}

## 另请参阅

- [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
