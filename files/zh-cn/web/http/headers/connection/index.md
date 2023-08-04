---
title: Connection
slug: Web/HTTP/Headers/Connection
---

{{HTTPSidebar}}

**`Connection`** 通用标头控制网络连接在当前会话完成后是否仍然保持打开状态。如果发送的值是 `keep-alive`，则连接是持久的，不会关闭，允许对同一服务器进行后续请求。

> **警告：** 在 [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) 和 [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) 中，禁止使用特定于连接的标头字段，如 `Connection` 和 `Keep-Alive`。Chrome 和 Firefox 会在 HTTP/2 响应中忽略它们，但 Safari 遵循 HTTP/2 规范要求，不会加载包含这些字段的任何响应。

除去标准的逐段传输（hop-by-hop）头（{{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Connection")}}, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} and {{HTTPHeader("Proxy-Authenticate")}}），任何逐段传输头都需要在 Connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头。标准的逐段传输头也可以列出（常见的例子是 {{HTTPHeader("Keep-Alive")}}，但这不是必须的）。

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```http
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
