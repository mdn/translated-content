---
title: Via
slug: Web/HTTP/Headers/Via
---

{{HTTPSidebar}}

**`Via`** 是一个通用首部，是由代理服务器添加的，适用于正向和反向代理，在请求和响应首部中均可出现。这个消息首部可以用来追踪消息转发情况，防止循环请求，以及识别在请求或响应传递链中消息发送者对于协议的支持能力。

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
or
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## 指令

- \<protocol-name>
  - : 可选。所使用的协议名称，如 "HTTP"。
- \<protocol-version>
  - : 所使用的协议版本号，例如 "1.1"。
- \<host> and \<port>
  - : 公共代理的 URL 及端口号。
- \<pseudonym>
  - : 内部代理的名称或别名。

## 示例

```plain
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("X-Forwarded-For")}}
- [Heroku 的代理库 Vegur](https://github.com/heroku/vegur)
