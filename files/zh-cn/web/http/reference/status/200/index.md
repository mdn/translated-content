---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
---

HTTP **`200 OK`** [成功响应](/zh-CN/docs/Web/HTTP/Reference/Status#成功响应)状态码表明请求已经成功。默认情况下 `200 OK` 的响应可以被缓存。

根据 HTTP 请求方法的不同，`200 OK` 响应的含义和格式也有所不同。以下是不同请求方法的具体区别：

- {{HTTPMethod("GET")}}：已经取得资源，并将资源添加到响应主体中。
- {{HTTPMethod("POST")}}：操作成功，响应描述结果的消息主体。
- {{HTTPMethod("HEAD")}}：与 `GET` 相同，但没有消息主体。
- {{HTTPMethod("TRACE")}}：响应的消息体中包含服务器接收到的请求信息。

{{HTTPMethod("PUT")}} 和 {{HTTPMethod("DELETE")}} 的请求成功通常并不是响应 `200 OK` 的状态码而是 {{HTTPStatus("204", "204 No Content")}} 表示无内容（或者 {{HTTPStatus("201", "201 Created")}} 表示一个资源首次被创建成功）。

## 状态码

```http
200 OK
```

## 示例

### 接收 `GET` 请求的 `200 OK` 响应

在这个示例中，对 `https://example.com` 的 `GET` 请求成功返回 `200 OK` 响应。该响应包含了表示标头和带有 HTML 内容的消息主体。

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
<!-- 下面跟随 HTML 的内容 -->
```

### 接收通过表单提交 `POST` 请求的 `200 OK` 响应

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
- 术语：{{Glossary("Idempotent", "幂等")}}
