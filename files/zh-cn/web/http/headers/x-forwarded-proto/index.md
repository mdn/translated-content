---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
---

{{HTTPSidebar}}

**`X-Forwarded-Proto`** (XFP) 是一个事实上的标准首部，用来确定客户端与代理服务器或者负载均衡服务器之间的连接所采用的传输协议（HTTP 或 HTTPS）。在服务器的访问日志中记录的是负载均衡服务器与服务器之间的连接所使用的传输协议，而非客户端与负载均衡服务器之间所使用的协议。为了确定客户端与负载均衡服务器之间所使用的协议，X-Forwarded-Proto 就派上了用场。

HTTP 协议中的 {{HTTPHeader("Forwarded")}} 是这个消息首部的标准化版本。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
X-Forwarded-Proto: <protocol>
```

## 指令

- \<protocol>
  - : 经过转发的传输协议（http 或 https）。

## 示例

```plain
X-Forwarded-Proto: https
```

其他非标准形式：

```plain
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## 规范

不属于任何一份既有规范。这个消息首部的标准版本是 {{HTTPHeader("Forwarded")}}.

## 相关内容

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
