---
title: Request.url
slug: Web/API/Request/url
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("Request")}} interface contains the URL of the request.

## 句法

```plain
var myURL = request.url;
```

### Value

A {{domxref("USVString")}} indicating the url of the request.

## 举例

In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the url of the request in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myURL = myRequest.url; // "http://mdn.github.io/fetch-examples/fetch-request/flowers.jpg"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
