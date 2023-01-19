---
title: Response.type
slug: Web/API/Response/type
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

**`type`** 是{{domxref("Response")}} 接口包含的一种响应类型，是只读属性。它可以是以下某一种值：

- `basic`: 标准值，同源响应，带有所有的头部信息除了“Set-Cookie”和“Set-Cookie2″.
- `cors`: Response 接收到一个有效的跨域请求。[部分 headers 和 body](https://fetch.spec.whatwg.org/#concept-filtered-response-cors)可以被访问。
- `error`: 网络错误。没有有用的描述错误的信息。响应的状态为 0，header 为空且不可变。从 `Response.error()`中获得的响应的类型。
- `opaque`: 响应“no-cors”的跨域请求。[严重受限](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque).

> **备注：** “错误”响应从来没有真正暴露于脚本：这种响应 {{domxref("GlobalFetch.fetch","fetch()")}} 将被 promise 拒绝。

## Syntax

```js
var myType = response.type;
```

### Value

`ResponseType`说明响应类型。

## Example

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response) (see [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path. We then fetch this request using {{domxref("GlobalFetch.fetch","fetch()")}}, extract a blob from the response using {{domxref("Body.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `type` to the console.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.type); // returns basic by default
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
