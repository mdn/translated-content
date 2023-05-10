---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
---

{{HTTPSidebar}}

**`X-Forwarded-For`** (XFF) 在客户端访问服务器的过程中如果需要经过 HTTP 代理或者负载均衡服务器，可以被用来获取最初发起请求的客户端的 IP 地址，这个消息首部成为事实上的标准。在消息流从客户端流向服务器的过程中被拦截的情况下，服务器端的访问日志只能记录代理服务器或者负载均衡服务器的 IP 地址。如果想要获得最初发起请求的客户端的 IP 地址的话，那么 X-Forwarded-For 就派上了用场。

这个消息首部会被用来进行调试和统计，以及生成基于位置的定制化内容，按照设计的目的，它会暴露一定的隐私和敏感信息，比如客户端的 IP 地址。所以在应用此消息首部的时候，需要将用户的隐私问题考虑在内。

HTTP 协议中的 {{HTTPHeader("Forwarded")}} 是这个消息首部的标准化版本。

`X-Forwarded-For` 也是一个电子邮件相关协议中用到的首部，用来表示一封电子邮件是从其他账户转发过来的。

| Header type                                      | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 语法

```plain
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## 指令

- \<client>
  - : 客户端的 IP 地址。
- \<proxy1>, \<proxy2>
  - : 如果一个请求经过了多个代理服务器，那么每一个代理服务器的 IP 地址都会被依次记录在内。也就是说，最右端的 IP 地址表示最近通过的代理服务器，而最左端的 IP 地址表示最初发起请求的客户端的 IP 地址。

## 示例

```plain
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

其他非标准形式：

```plain
# Used for some Google services
X-ProxyUser-Ip: 203.0.113.19
```

## 规范

不属于任何一份既有规范。这个消息首部的标准版本是 {{HTTPHeader("Forwarded")}}.

## 相关内容

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
