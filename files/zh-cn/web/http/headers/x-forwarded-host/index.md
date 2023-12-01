---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
---

{{HTTPSidebar}}

The **`X-Forwarded-Host`** (XFH) 是一个事实上的标准首部，用来确定客户端发起的请求中使用 {{HTTPHeader("Host")}} 指定的初始域名。

反向代理（如负载均衡服务器、CDN 等）的域名或端口号可能会与处理请求的源头服务器有所不同，在这种情况下，X-Forwarded-Host 可以用来确定哪一个域名是最初被用来访问的。

这个消息首部会被用来进行调试和统计，以及生成基于位置的定制化内容，按照设计的目的，它会暴露一定的隐私和敏感信息，比如客户端的 IP 地址。所以在应用此消息首部的时候，需要将用户的隐私问题考虑在内。

HTTP 协议中的 {{HTTPHeader("Forwarded")}} 是这个消息首部的标准化版本。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
X-Forwarded-Host: <host>
```

## 指令

- \<host>
  - : 被转发的服务器的域名。

## 示例

```plain
X-Forwarded-Host: id42.example-cdn.com
```

## 规范

不属于任何一份既有规范。这个消息首部的标准版本是 {{HTTPHeader("Forwarded")}}.

## 相关内容

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
