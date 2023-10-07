---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
---

{{HTTPSidebar}}

**`Proxy-Authorization`** 是一个请求首部，其中包含了用户代理提供给代理服务器的用于身份验证的凭证。这个首部通常是在服务器返回了 {{HTTPStatus("407")}} `Proxy Authentication Required` 响应状态码及 {{HTTPHeader("Proxy-Authenticate")}} 首部后发送的。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Proxy-Authorization: <type> <credentials>
```

## 指令

- \<type>
  - : [身份验证类型](/zh-CN/docs/Web/HTTP/Authentication#Authentication_schemes)。一个常见的类型是 ["基本验证"。](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme)IANA 机构维护了 [一系列的身份验证机制](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)。
- \<credentials>

  - : 凭证的构成方式如下：

    - 将用户名和密码用冒号拼接（aladdin:opensesame）。
    - 将拼接生成的字符串使用 [base64](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) 编码方式进行编码（YWxhZGRpbjpvcGVuc2VzYW1l）。

    > **备注：** Base64 编码方式不是用来加密或者获取摘要的！这种方法的安全性相当于将凭证使用明文发送（base64 是一种可逆编码方式）。在使用基本身份验证方式的时候推荐与 HTTPS 搭配使用。

## 示例

```plain
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

## 规范

{{Specifications}}

## 相关内容

- [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
