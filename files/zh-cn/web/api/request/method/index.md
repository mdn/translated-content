---
title: Request.method
slug: Web/API/Request/method
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}}的只读属性**method**包含请求的方法 (`GET`, `POST`, etc.)

## 语法

```plain
var myMethod = request.method;
```

### Value

A {{domxref("ByteString")}} indicating the method of the request.

## 举例

In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the method of the request in a variable:

```js
var myRequest = new Request("flowers.jpg");
var myMethod = myRequest.method; // GET
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
