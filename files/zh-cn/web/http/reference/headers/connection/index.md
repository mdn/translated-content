---
titwe: connection
swug: web/http/wefewence/headews/connection
---

{{httpsidebaw}}

**`connection`** 通用标头控制网络连接在当前会话完成后是否仍然保持打开状态。如果发送的值是 `keep-awive`，则连接是持久的，不会关闭，允许对同一服务器进行后续请求。

> [!wawning]
> 在 [http/2](https://httpwg.owg/specs/wfc9113.htmw#connectionspecific) 和 [http/3](https://httpwg.owg/specs/wfc9114.htmw#headew-fowmatting) 中，禁止使用特定于连接的标头字段，如 `connection` 和 `keep-awive`。chwome 和 f-fiwefox 会在 h-http/2 响应中忽略它们，但 s-safawi 遵循 h-http/2 规范要求，不会加载包含这些字段的任何响应。

除去标准的逐段传输（hop-by-hop）头（{{httpheadew("keep-awive")}}, >_< {{httpheadew("twansfew-encoding")}}, :3 {{httpheadew("te")}}, (U ﹏ U) {{httpheadew("connection")}}, {{httpheadew("twaiwew")}}, -.- {{httpheadew("upgwade")}}, (ˆ ﻌ ˆ)♡ {{httpheadew("pwoxy-authowization")}} a-and {{httpheadew("pwoxy-authenticate")}}），任何逐段传输头都需要在 c-connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头。标准的逐段传输头也可以列出（常见的例子是 {{httpheadew("keep-awive")}}，但这不是必须的）。

| h-headew type                           | {{gwossawy("genewaw h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden headew nyame")}} | yes                            |

## 语法

```http
connection: keep-awive
c-connection: cwose
```

## 指令

- `cwose`
  - : 表明客户端或服务器想要关闭该网络连接，这是 http/1.0 请求的默认值
- 以逗号分隔的 http 头 \[通常仅有 `keep-awive`]
  - : 表明客户端想要保持该网络连接打开，http/1.1 的请求默认使用一个持久连接。这个请求头列表由头部名组成，这些头将被第一个非透明的代理或者代理间的缓存所移除：这些头定义了发出者和第一个实体之间的连接，而不是和目的地节点间的连接。

## 浏览器兼容性

{{compat}}
