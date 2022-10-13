---
title: Response.clone()
slug: Web/API/Response/clone
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的 clone() 方法创建了一个响应对象的克隆，这个对象在所有方面都是相同的，但是存储在一个不同的变量中。

如果已经使用了响应 {{domxref("Body")}}，`clone()` 会抛出{{jsxref("TypeError")}}。实际上，clone() 存在的主要原因是允许多次使用{{domxref("Body")}}对象 (当它们是一次性使用的时候)。

## 语法

```js
var response2 = response1.clone();
```

### Parameters

None.

### Value

一个 {{domxref("Response")}} 对象。

## 示例

在我们的 [Fetch Response 克隆示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response-clone) (请参阅 [Fetch Response clone live](http://mdn.github.io/fetch-examples/fetch-response-clone/)) 我们使用{{domxref("Request.Request","Request()")}} 构造函数创建一个新的 {{domxref("Request")}} 来传递一个 JPG 路径。然后我们使用 {{domxref("GlobalFetch.fetch","fetch()")}} 获取这个请求。当 fetch resolve 时，我们克隆它，使用两个{{domxref("Body.blob")}}调用从两个响应中提取 blob，使用{{domxref("URL.createObjectURL")}} 从 blob 创建对象 URL，并将它们显示在两个单独的{{htmlelement("img")}}元素中。

```js
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  var response2 = response.clone();

  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    image1.src = objectURL;
  });

  response2.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    image2.src = objectURL;
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
