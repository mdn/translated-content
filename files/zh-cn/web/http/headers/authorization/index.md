---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

HTTP 协议中的 **`Authorization`** 请求消息头含有服务器用于验证用户代理身份的凭证，通常会在服务器返回{{HTTPStatus("401")}} `Unauthorized` 状态码以及{{HTTPHeader("WWW-Authenticate")}} 消息头之后在后续请求中发送此消息头。

| Header type                                      | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 语法

```plain
Authorization: <type> <credentials>
```

## 指令

- \<type>
  - : [验证类型](/zh-CN/docs/Web/HTTP/Authentication#Authentication_schemes)。常见的是 ["基本验证（Basic）"](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme) 。其他类型包括：

    - [在 IANA 机构注册的验证方案](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
    - [AWS 服务器的验证方案 (`AWS4-HMAC-SHA256`)](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)
- \<credentials>
  - : 如果使用“基本验证”方案，凭证通过如下步骤生成：

    - 用冒号将用户名和密码进行拼接（如：aladdin:opensesame）。
    - 将第一步生成的结果用 [base64](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) 方式编码 (YWxhZGRpbjpvcGVuc2VzYW1l)。

    > **备注：** Base64 编码并不是一种加密方法或者 hashing 方法！这种方法的安全性与明文发送等同（base64 可以逆向解码）。“基本验证”方案需要与 HTTPS 协议配合使用。

## 示例

```plain
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

请参考 [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication) 来获取在 Apache 或 nginx 中使用 HTTP 基本验证方案加密保护站点的配置示例。

## 规范

{{Specifications}}

## 参见

- [HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
