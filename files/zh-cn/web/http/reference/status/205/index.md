---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
---

HTTP **`205 Reset Content`** [成功响应](/zh-CN/docs/Web/HTTP/Reference/Status#成功响应)状态码表示请求已成功处理，客户端应重置文档视图。

此响应旨在支持以下用例：用户接收支持数据输入的内容、在请求中提交用户编辑的数据，并且需要重置内容以供下次输入。“重置内容”指令可以表示清除表单内容、重置画布状态或刷新 UI；具体实现取决于客户端。

> [!NOTE]
> 在使用 `205` 状态的 Web 应用中，会假设客户端会在 `205` 响应后处理内容重置。
> 这通常通过 JavaScript 实现，因为浏览器本身并不支持在 `205` 响应后重置表单等内容。

请注意，该响应不得包含任何内容或 {{HTTPHeader("Content-Length")}} 标头（浏览器可能会拒绝包含内容的响应）。空响应也可以使用包含空分块的 {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} 标头来表示。

## 状态

```http
205 Reset Content
```

## 示例

### 收到 `205 Reset Content` 响应后重置表单

在这个示例中，客户端发送了一个带有评论 `Hello!` 表单的 `POST` 请求：

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

成功处理表单提交后，服务器将返回以下 `205` 响应，表明客户端应重置表单。

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus(204)}} No Content
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
