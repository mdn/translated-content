---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Accept-Post`** HTTP 响应标头用于告知客户端服务器在接受 HTTP 的 POST 请求时能处理哪些[媒体类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)。

响应中对于任何方法的 **`Accept-Post`** 字段意味着允许在请求的资源上执行 `POST` 操作（标头中任何提及的文档或媒体格式进一步表明该格式的文档也被允许）。

例如，服务器接收到具有不支持的媒体类型的 `POST` 请求时，可以回复 {{HTTPStatus("415")}} `Unsupported Media Type`（不支持的媒体类型）状态码，并在响应中包含一个 **`Accept-Post`** 标头，其中引用了一个或多个支持的媒体类型。

> **备注：** IANA 维护了[一个完整的官方支持的编码方式列表](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

> **备注：** `Accept-Post` 标头与 {{HTTPHeader("Accept")}} 标头类似，用于指定接受的媒体类型范围，但不同之处在于它并不支持优先级概念（即没有 `q` 参数）。这是因为 `Accept-Post` 是响应标头，而 `Accept` 是请求标头。

## 指令

无。

## 示例

```http
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## 规范

{{Specifications}}

## 浏览器兼容性

对于此标头而言，浏览器兼容性无关紧要（该标头由服务器发送，且规范未定义客户端行为）。

## 参见

- HTTP 方法 {{HTTPMethod("POST")}}
- HTTP 语义与上下文 {{RFC("7231", "POST", "4.3.3")}}
