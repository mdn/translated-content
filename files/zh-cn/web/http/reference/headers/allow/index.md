---
title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Allow`** 标头列出了资源支持的方法集。

当服务器响应带有 {{HTTPStatus("405")}} `Method Not Allowed` 状态码时必须发送此标头，以表示可以使用哪些请求方法。`Allow` 空标头表示该资源不允许使用任何请求方法，例如，这种情况可能针对某个特定资源会临时出现。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Allow: <http-methods>
```

## 指令

- \<http-methods>
  - : 以逗号分隔的允许 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)列表。

## 示例

```http
Allow: GET, POST, HEAD
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
