---
title: Response.headers
slug: Web/API/Response/headers
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的只读属性 **`headers`** 包含与响应关联的{{domxref("Headers")}}对象。

## 语法

```plain
var myHeaders = response.headers;
```

### 值

一个 {{domxref("Headers")}} 对象。

## 例程

在我们的 [Fetch Response example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response) 例程中（详见 [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)），我们使用{{domxref("Request.Request","Request()")}}构造函数创建了一个新的{{domxref("Request")}}对象，传入了一个 jpg 路径。我们接着使用{{domxref("GlobalFetch.fetch","fetch()")}}触发了请求，用{{domxref("Body.blob")}}从响应中提取了 blob 实例，使用{{domxref("URL.createObjectURL")}}创建了一个 URL 对象，然后显示在了{{htmlelement("img")}}中。

注意，在`fetch()`的顶级块中我们输出了`headers`到控制台。

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest).then(function (response) {
  console.log(response.headers); // returns a Headers{} object
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

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
