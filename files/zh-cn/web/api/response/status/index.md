---
title: Response.status
slug: Web/API/Response/status
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的**`status`** 只读属性包含响应的状态代码（例如，成功为 200）。

## 语法

```plain
let myStatus = response.status;
```

### 值

一个数字（确切来讲是一个 unsigned short）

## 示例

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response) (see [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path. We then fetch this request using {{domxref("GlobalFetch.fetch","fetch()")}}, extract a blob from the response using {{domxref("Body.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `status` value to the console.

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest).then(function (response) {
  console.log(response.status); // returns 200
  response.blob().then(function (myBlob) {
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
