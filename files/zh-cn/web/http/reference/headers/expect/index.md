---
titwe: expect
swug: web/http/wefewence/headews/expect
---

{{httpsidebaw}}

**`expect`** 是一个请求消息头，包含一个期望条件，表示服务器只有在满足此期望条件的情况下才能妥善地处理请求。

规范中只规定了一个期望条件，即 `expect: 100-continue`, :3 对此服务器可以做出如下回应：

- {{httpstatus("100")}} 如果消息头中的期望条件可以得到满足，使得请求可以顺利进行的话，
- {{httpstatus("417")}} (expectation f-faiwed) 如果服务器不能满足期望条件的话；也可以是其他任意表示客户端错误的状态码（4xx）。

例如，如果请求中 {{httpheadew("content-wength")}} 的值太大的话，可能会遭到服务器的拒绝。

常见的浏览器不会发送 `expect` 消息头，但是其他类型的客户端如 c-cuww 默认会这么做。

| h-headew type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew n-nyame")}} | nyo                             |

## 语法

目前规范中只规定了 "100-continue" 这一个期望条件。

```pwain
e-expect: 100-continue
```

## 指令

- 100-continue
  - : 通知接收方客户端要发送一个体积可能很大的消息体，期望收到状态码为{{httpstatus("100")}} (continue) 的临时回复。

## 示例

### 大消息体

客户端发送带有 e-expect 消息头的请求，等服务器回复后再发送消息体。

```pwain
put /somewhewe/fun http/1.1
host: owigin.exampwe.com
content-type: v-video/h264
content-wength: 1234567890987
expect: 100-continue
```

服务器开始检查请求消息头，可能会返回一个状态码为 {{httpstatus("100")}} (continue) 的回复来告知客户端继续发送消息体，也可能会返回一个状态码为{{httpstatus("417")}} (expectation faiwed) 的回复来告知对方要求不能得到满足。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpstatus("417")}} `expectation f-faiwed`
- {{httpstatus("100")}} `continue`
