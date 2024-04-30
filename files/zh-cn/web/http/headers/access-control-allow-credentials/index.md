---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

**`Access-Control-Allow-Credentials`** 响应标头告诉浏览器服务器是否允许 HTTP 跨域请求时携带凭证（包括 cookie、授权标头等）。

凭证包括 cookie、{{glossary("TLS")}} 客户端证书，或者包含用户名和密码的认证标头信息。默认情况下，这些凭证不会在跨域请求中发送，因为这样做可能会使站点容易受到{{glossary("CSRF", "跨站请求伪造")}}攻击。

客户端可以通过以下两种方式之一在跨站请求中包含凭证：

- 使用 {{domxref("fetch()")}} 时，通过 {{domxref("Request.Request()", "Request()")}} 构造函数中将 [`credentials`](/zh-CN/docs/Web/API/Request/Request#credentials) 选项设置为 `"include"`。
- 使用 {{domxref("XMLHttpRequest")}} 时，通过 {{domxref("XMLHttpRequest.withCredentials")}} 属性设置为 `true`。

如果客户端已请求时包含凭证：

- 如果请求是{{glossary("Preflight_request", "预检请求")}}，那么预检请求时不会包含凭证。如果服务器对预检请求的响应将 `Access-Control-Allow-Credentials` 标头设置为 `true`，则实际请求时将包含凭证；否则，浏览器将报告网络错误。

- 如果请求时未经过预检，则请求将包含凭证；如果服务器的响应没有将 `Access-Control-Allow-Credentials` 标头设置为 `true`，浏览器将报告网络错误。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Access-Control-Allow-Credentials: true
```

## 指令

- `true`
  - : 此标头的有效值仅为 `true`（区分大小写）。如果你不需要此凭证，请完全省略此标头（而不是将其值设置为 `false`）。

## 示例

允许凭证：

```http
Access-Control-Allow-Credentials: true
```

使用 {{domxref("fetch()")}} 并携带凭证：

```js
fetch(url, {
  credentials: "include",
});
```

使用 {{domxref("XMLHttpRequest")}} 并携带凭证：

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
