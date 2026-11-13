---
title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Access-Control-Request-Method`** 请求标头会由浏览器在发出{{glossary("preflight request", "预检请求")}}时使用，通知服务器在实际请求中发出时将会采用哪种 [HTTP 方法](/zh-CN/docs/Web/HTTP/Reference/Methods)。此标头是必需的，因为预检请求总是采用 {{HTTPMethod("OPTIONS")}} 方法，这与实际请求所使用的方法并不相同。

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
Access-Control-Request-Method: <method>
```

## 指令

- \<method>
  - : 一种 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)，例如 {{HTTPMethod("GET")}}、{{HTTPMethod("POST")}} 或 {{HTTPMethod("DELETE")}}。

## 示例

```http
Access-Control-Request-Method: POST
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Access-Control-Request-Headers")}}
