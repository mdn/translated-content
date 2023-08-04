---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
---

{{HTTPSidebar}}

**`Keep-Alive`** 是一个通用消息头，允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数。

> **备注：** 需要将 The {{HTTPHeader("Connection")}} 首部的值设置为 "keep-alive" 这个首部才有意义。同时需要注意的是，在 HTTP/2 协议中， {{HTTPHeader("Connection")}} 和 {{HTTPHeader("Keep-Alive")}} 是被忽略的；在其中采用其他机制来进行连接管理。

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Keep-Alive: parameters
```

## 指令

- _parameters_

  - : 一系列用逗号隔开的参数，每一个参数由一个标识符和一个值构成，并使用等号 (`'='`) 隔开。下述标识符是可用的：

    - `timeout`：指定了一个空闲连接需要保持打开状态的最小时长（以秒为单位）。需要注意的是，如果没有在传输层设置 keep-alive TCP message 的话，大于 TCP 层面的超时设置会被忽略。
    - `max`：在连接关闭之前，在此连接可以发送的请求的最大值。在非管道连接中，除了 0 以外，这个值是被忽略的，因为需要在紧跟着的响应中发送新一次的请求。HTTP 管道连接则可以用它来限制管道的使用。

## 示例

`含有 Keep-Alive` 首部的响应示例：

```plain
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Connection")}}
- [Connection management in HTTP/1.x](/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
