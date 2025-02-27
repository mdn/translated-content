---
title: 201 Created
slug: Web/HTTP/Status/201
---

{{HTTPSidebar}}

在 HTTP 协议中，**`201 Created`** 是一个代表成功的应答状态码，表示请求已经被成功处理，并且创建了新的资源。新的资源在应答返回之前已经被创建。同时新增的资源会在应答消息体中返回，其地址或者是原始请求的路径，或者是 {{HTTPHeader("Location")}} 首部的值。

这个状态码的常规使用场景是作为 {{HTTPMethod("POST")}} 请求的返回值。

## 状态

```plain
201 Created
```

## 规范

{{Specifications}}

## 参见

- [HTTP request methods](/zh-CN/docs/Web/HTTP/Methods)
