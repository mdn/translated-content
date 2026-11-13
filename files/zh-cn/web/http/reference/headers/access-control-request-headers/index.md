---
title: Access-Control-Request-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

**`Access-Control-Request-Headers`** 请求标头用于浏览器在发起{{glossary("preflight request", "预检请求")}}时告知服务器客户端在实际请求发送时（例如使用 {{domxref("fetch()")}} 或 {{domxref("XMLHttpRequest.setRequestHeader()")}}）可能附带的 [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)。服务器端对应的响应标头为 {{HTTPHeader("Access-Control-Allow-Headers")}}，表示对浏览器的请求标头的回应。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Access-Control-Request-Headers: <header-name>,<header-name>,…
```

## 指令

- \<header-name>
  - : 在请求中包含唯一的、以逗号分隔的小写 [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)的排序列表。

## 示例

```http
Access-Control-Request-Headers: content-type,x-pingother
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Access-Control-Request-Method")}}
