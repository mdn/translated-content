---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

**`Access-Control-Allow-Credentials`** 响应头用于在请求要求包含 credentials（{{domxref("Request.credentials")}} 的值为 `include`）时，告知浏览器是否可以将对请求的响应暴露给前端 JavaScript 代码。

当请求的 credentials 模式（{{domxref("Request.credentials")}}）为 `include` 时，浏览器仅在响应标头 `Access-Control-Allow-Credentials` 的值为 `true` 的情况下将响应暴露给前端的 JavaScript 代码。

Credentials 可以是 cookies、authorization headers 或 TLS client certificates。

当作为对预检请求的响应的一部分时，这能表示是否真正的请求可以使用 credentials。注意简单的{{HTTPMethod("GET")}} 请求没有预检，所以若一个对资源的请求带了 credentials，如果这个响应头没有随资源返回，响应就会被浏览器忽视，不会返回到 web 内容。

`Access-Control-Allow-Credentials` 标头需要与 {{domxref("XMLHttpRequest.withCredentials")}} 或 Fetch API 的 {{domxref("Request.Request()", "Request()")}} 构造函数中的 `credentials` 选项结合使用。Credentials 必须在前后端都被配置（即 `Access-Control-Allow-Credentials` header 和 XHR 或 Fetch request 中都要配置）才能使带 credentials 的 CORS 请求成功。

| 头部类型                              | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Access-Control-Allow-Credentials: true
```

## 指令

- true
  - : 这个头的唯一有效值（区分大小写）。如果不需要 credentials，相比将其设为 false，请直接忽视这个头。

## 例子

允许 credentials:

```plain
Access-Control-Allow-Credentials: true
```

使用带 credentials 的 [XHR](/zh-CN/docs/Web/API/XMLHttpRequest)：

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

使用带 credentials 的 [Fetch](/zh-CN/docs/Web/API/Fetch_API)：

```js
fetch(url, {
  credentials: "include",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
