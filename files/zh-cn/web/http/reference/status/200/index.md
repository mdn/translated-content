---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
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

## 示例

### 接收一个 `GET` 请求的 `200 OK` 响应

在这个示例中，对 `https://example.com` 的 `GET` 请求成功返回 `200 OK` 响应。该响应包含了表示标头和带有 HTML 内容的消息体。

```http
HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 294510
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Etag: "3147526947"
Expires: Fri, 28 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECAcc (nyd/D10E)
X-Cache: HIT
Content-Length: 1256

<!doctype html>
<!-- HTML content follows here -->
```

### 接收一个通过表单提交 `POST` 请求的 `200 OK` 响应

假设存在一个表单，用于向 `http://example.com/subscribe` 端点发送订阅数据，订阅用户的 `POST` 请求可能如下所示：

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

在这个示例中，`200 OK` 响应状态可能如下所示：

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "用户订阅待处理，已发送确认电子邮件。",
  "subscription": {
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "id": 123,
    "feed": "default"
  }
}
```

## 规范

{{Specifications}}

## 参见

- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- 术语表：{{Glossary("Idempotent", "幂等")}}
