---
title: Keep-Alive
slug: Web/HTTP/Reference/Headers/Keep-Alive
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

HTTP **`Keep-Alive`** {{Glossary("request header", "响应标头")}}和{{Glossary("response header", "请求标头")}}允许消息发送者提示连接的状态，还可以用来设置超时时长和最大请求数。

> [!NOTE]
> 要使得 `Keep-Alive` 有效，消息必须包含 {{HTTPHeader("Connection", "Connection: keep-alive")}} 标头。

HTTP/1.0 默认在每次请求/响应交互后关闭连接，因此 HTTP/1.0 中的持久连接必须经过明确协商。一些客户端和服务器可能希望与以前的持久连接方式兼容，可以使用 `Connection: keep-alive` 请求标头来实现这一点。连接的其他参数可通过 `Keep-Alive` 标头请求。

> [!WARNING]
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) 和 [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) 禁止使用特定于连接的标头字段，如 {{HTTPHeader("Connection")}} 和 `Keep-Alive`。Chrome 浏览器和 Firefox 浏览器在 HTTP/2 响应中忽略了它们，但 Safari 浏览器符合 HTTP/2 规范要求，不会加载任何包含它们的响应。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Keep-Alive: <parameters>
```

## 指令

- `<parameters>`
  - : 一系列用逗号隔开的参数，每一个参数由一个标识符和一个值构成，并使用等号（`'='`）隔开。下述标识符是可用的：
    - `timeout`：指定了主机允许空闲连接保持打开状态的时长（以秒为单位的整数）。当主机没有接收或发送数据时，就认为连接是空闲的。主机可以保持连接超过 `timeout` 秒，但应该确保至少保持连接 `timeout` 秒。
    - `max`：在此连接关闭之前，可以发送的请求的最大值。在非管道连接中，除了 `0` 以外，这个值是被忽略的，因为需要在紧跟着的响应中发送新一次的请求。HTTP 管道连接则可以用它来限制管道的使用。

## 示例

包含 `Keep-Alive` 标头的响应示例：

```http
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=200
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Connection")}}
- [HTTP/1.x 的连接管理](/zh-CN/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
