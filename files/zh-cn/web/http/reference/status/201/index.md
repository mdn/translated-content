---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
---

在 HTTP 协议中，**`201 Created`** 是一个代表成功的应答状态码，表示请求已经被成功处理，并且创建了新的资源。新的资源在应答返回之前已经被创建。同时新增的资源会在应答消息体中返回，其地址或者是原始请求的路径，或者是 {{HTTPHeader("Location")}} 标头的值。

这个状态码的常规使用场景是作为 {{HTTPMethod("POST")}} 请求的返回值。

## 状态

```http
201 Created
```

## 示例

### 接收创建用户的响应

假设有一个用于管理用户的 RESET API，其端点位于 `http://example.com/users`。在这个示例中，我们发送一个带有以下主体的 `POST` 请求来创建用户。

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "firstName": "Brian",
  "lastName": "Smith",
  "email": "brian.smith@example.com"
}
```

用户创建成功后，`201 Created` 响应如下所示：

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "新用户已创建",
  "user": {
    "id": 123,
    "firstName": "Brian",
    "lastName": "Smith",
    "email": "brian.smith@example.com"
  }
}
```

## 规范

{{Specifications}}

## 参见

- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
