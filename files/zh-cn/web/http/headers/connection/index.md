---
title: Connection
slug: Web/HTTP/Headers/Connection
---

{{HTTPSidebar}}

**Connection** 头（header）决定当前的事务完成后，是否会关闭网络连接。如果该值是“keep-alive”，网络连接就是持久的，不会关闭，使得对同一个服务器的请求可以继续在该连接上完成。

> **备注：** [特定于连接的标头字段（例如 Connection）不得与 HTTP/2 一起使用。](https://tools.ietf.org/html/rfc7540#section-8.1.2.2)

除去标准的逐段传输（hop-by-hop）头（{{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Connection")}}, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} and {{HTTPHeader("Proxy-Authenticate")}}），任何逐段传输头都需要在 Connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头。标准的逐段传输头也可以列出（常见的例子是 {{HTTPHeader("Keep-Alive")}}，但这不是必须的）。

| Header type                                      | {{Glossary("General header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                                      |

## 语法

```plain
Connection: keep-alive
Connection: close
```

## 指令

- `close`
  - : 表明客户端或服务器想要关闭该网络连接，这是 HTTP/1.0 请求的默认值
- 以逗号分隔的 HTTP 头 \[通常仅有 `keep-alive`]
  - : 表明客户端想要保持该网络连接打开，HTTP/1.1 的请求默认使用一个持久连接。这个请求头列表由头部名组成，这些头将被第一个非透明的代理或者代理间的缓存所移除：这些头定义了发出者和第一个实体之间的连接，而不是和目的地节点间的连接。

## 浏览器兼容性

{{Compat}}
