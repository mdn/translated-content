---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 3eea6ef9070a54ffd6379164ff9fd39db66b5172
---

**`Access-Control-Allow-Methods`** 响应标头指定了在响应{{glossary("preflight request", "预检请求")}}时访问资源所允许的一个或多个方法。

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## 指令

- \<method>
  - : 一个以逗号分隔，表示允许使用的 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)的列表。
- `*`（通配符）
  - : “`*`”值仅在无凭据的请求（即不包含 [HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies) 或 HTTP 认证信息的请求）中视为特殊的通配符值。在带有凭据的请求中，它被当作字面意义的标头名称“`*`”处理，不具有特殊语义。

## 示例

```http
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Methods: *
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
