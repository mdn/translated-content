---
title: Request.credentials
slug: Web/API/Request/credentials
---

{{APIRef("Fetch")}}

**`credentials`** 是{{domxref("Request")}}接口的只读属性，用于表示用户代理是否应该在跨域请求的情况下从其他域发送 cookies。这与 XHR 的 withCredentials 标志相似，不同的是有三个可选值（后者是两个）：

- `omit`: 从不发送 cookies.
- `same-origin`: 只有当 URL 与响应脚本同源才发送 cookies、HTTP Basic authentication 等验证信息.(浏览器默认值，在旧版本浏览器，例如 safari 11 依旧是 omit，safari 12 已更改)
- `include`: 不论是不是跨域的请求，总是发送请求资源域在本地的 cookies、HTTP Basic authentication 等验证信息。

## 语法

```js
var myCred = request.credentials;
```

### Value

A {{domxref("RequestCredentials")}} value.

## 举例

在以下代码中，我们使用{{domxref("Request.Request()")}}创建了一个新的 request（为了一个与脚本在同一目录下的图片文件），接着将 request credentials 存入一个变量：

```js
var myRequest = new Request("flowers.jpg");
var myCred = myRequest.credentials; // returns "same-origin" by default
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
