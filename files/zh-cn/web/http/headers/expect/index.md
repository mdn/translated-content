---
title: Expect
slug: Web/HTTP/Headers/Expect
---

{{HTTPSidebar}}

**`Expect`** 是一个请求消息头，包含一个期望条件，表示服务器只有在满足此期望条件的情况下才能妥善地处理请求。

规范中只规定了一个期望条件，即 `Expect: 100-continue`, 对此服务器可以做出如下回应：

- {{HTTPStatus("100")}} 如果消息头中的期望条件可以得到满足，使得请求可以顺利进行的话，
- {{HTTPStatus("417")}} (Expectation Failed) 如果服务器不能满足期望条件的话；也可以是其他任意表示客户端错误的状态码（4xx）。

例如，如果请求中 {{HTTPHeader("Content-Length")}} 的值太大的话，可能会遭到服务器的拒绝。

常见的浏览器不会发送 `Expect` 消息头，但是其他类型的客户端如 cURL 默认会这么做。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

目前规范中只规定了 "100-continue" 这一个期望条件。

```plain
Expect: 100-continue
```

## 指令

- 100-continue
  - : 通知接收方客户端要发送一个体积可能很大的消息体，期望收到状态码为{{HTTPStatus("100")}} (Continue) 的临时回复。

## 示例

### 大消息体

客户端发送带有 Expect 消息头的请求，等服务器回复后再发送消息体。

```plain
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

服务器开始检查请求消息头，可能会返回一个状态码为 {{HTTPStatus("100")}} (Continue) 的回复来告知客户端继续发送消息体，也可能会返回一个状态码为{{HTTPStatus("417")}} (Expectation Failed) 的回复来告知对方要求不能得到满足。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus("417")}} `Expectation Failed`
- {{HTTPStatus("100")}} `Continue`
