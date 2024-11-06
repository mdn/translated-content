---
title: 200 OK
slug: Web/HTTP/Status/200
---

{{HTTPSidebar}}

状态码 **`200 OK`** 表明请求已经成功。默认情况下状态码为 200 的响应可以被缓存。

不同请求方式对于请求成功的意义如下：

- {{HTTPMethod("GET")}}: 已经取得资源，并将资源添加到响应的消息体中。
- {{HTTPMethod("HEAD")}}: 响应的消息体为头部信息。
- {{HTTPMethod("POST")}}: 响应的消息体中包含此次请求的结果。
- {{HTTPMethod("TRACE")}}: 响应的消息体中包含服务器接收到的请求信息。

{{HTTPMethod("PUT")}} 和 {{HTTPMethod("DELETE")}} 的请求成功通常并不是响应`200` `OK`的状态码而是 {{HTTPStatus("204")}} `No Content` 表示无内容（或者 {{HTTPStatus("201")}} `Created`表示一个资源首次被创建成功）。

## 状态码

```plain
200 OK
```

## 规范

{{Specifications}}

## 参见

- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)
