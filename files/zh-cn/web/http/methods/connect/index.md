---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

在 HTTP 协议中，**`CONNECT` **方法可以开启一个客户端与所请求资源之间的双向沟通的通道。它可以用来创建隧道（tunnel）。

例如，**`CONNECT` **可以用来访问采用了 {{Glossary("SSL")}} ({{Glossary("HTTPS")}}) 协议的站点。客户端要求代理服务器将 TCP 连接作为通往目的主机隧道。之后该服务器会代替客户端与目的主机建立连接。连接建立好之后，代理服务器会面向客户端发送或接收 TCP 消息流。

`CONNECT` 是一个应用范围为点到点的方法。

| Request has body                                          | No  |
| --------------------------------------------------------- | --- |
| Successful response has body                              | Yes |
| {{Glossary("Safe")}}                              | No  |
| {{Glossary("Idempotent")}}                      | No  |
| {{Glossary("Cacheable")}}                          | No  |
| Allowed in [HTML forms](/zh-CN/docs/Web/Guide/HTML/Forms) | No  |

## 语法

```plain
CONNECT www.example.com:443 HTTP/1.1
```

## 示例

一些代理服务器在创建隧道时会要求进行身份验证。参见 {{HTTPHeader("Proxy-Authorization")}} 首部。

```plain
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
