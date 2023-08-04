---
title: Response.ok
slug: Web/API/Response/ok
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Response")}} 接口的只读属性 **`ok`** 包含一个布尔值，表明响应是否成功（状态码在 200-299 范围内）.

## 语法

```plain
var myOK = response.ok;
```

### 值

{{domxref("Boolean")}}.

## 示例

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response) (see [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path. We then fetch this request using {{domxref("GlobalFetch.fetch","fetch()")}}, extract a blob from the response using {{domxref("Body.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `ok` value to the console.

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest).then(function (response) {
  console.log(response.ok); // returns true if the response returned successfully
  response.blob().then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
