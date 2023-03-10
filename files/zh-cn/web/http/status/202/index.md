---
title: 202 Accepted
slug: Web/HTTP/Status/202
---

{{HTTPSidebar}}

响应状态码 **202 Accepted** 表示服务器端已经收到请求消息，但是尚未进行处理。但是对于请求的处理却是无保证的，即稍后无法通过 HTTP 协议给客户端发送一个异步请求来告知其请求的处理结果。这个状态码被设计用来将请求交由另外一个进程或者服务器来进行处理，或者是对请求进行批处理的情形。

## 状态

```plain
202 Accepted
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("Accept")}}
