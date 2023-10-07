---
title: Request()
slug: Web/API/Request/Request
---

{{APIRef("Fetch")}}{{ SeeCompatTable() }}

**`Request()`** 构造器创建一个新的{{domxref("Request")}} 对象。

## 语法

```
var myRequest = new Request(input[, init]);
```

### 参数

- _input_

  - : 定义你想要 fetch 的资源。可以是下面两者之一：

    - 一个直接包含你希望 fetch 的资源的 URL 的 {{domxref("USVString")}}。
    - 一个 {{domxref("Request")}} 对象。请注意以下行为更新，以在保留安全性的同时使构造函数不太可能引发异常：

      - 如果此对象存在于构造函数调用的另一个起源上，则将除去{{domxref("Request.referrer")}}。
      - 如果此对象的导航为 {{domxref("Request.mode")}}，则`mode`将转换为`same-origin`。

- _init_ {{optional_inline}}

  - : 一个可选对象，包含希望被包括到请求中的各种自定义选项。可用的选项如下：

    - `method`: 请求的方法，例如：`GET`, `POST`。
    - `headers`: 任何你想加到请求中的头，其被放在{{domxref("Headers")}}对象或内部值为{{domxref("ByteString")}} 的对象字面量中。
    - `body`: 任何你想加到请求中的 body，可以是{{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}}，或{{domxref("ReadableStream")}}对象。注意`GET` 和 `HEAD` 请求没有 body。
    - `mode`: 请求的模式，比如 `cors`, `no-cors`, `same-origin`, 或 `navigate`。默认值为 `cors`。
    - `credentials`: 想要在请求中使用的 credentials：: `omit`, `same-origin`, 或 `include`。默认值应该为`omit`。但在 Chrome 中，Chrome 47 之前的版本默认值为 `same-origin` ，自 Chrome 47 起，默认值为 `include`。
    - `cache`: 请求中想要使用的 [cache mode](/zh-CN/docs/Web/API/Request/cache)
    - `redirect`: 对重定向处理的模式： `follow`, `error`, or `manual`。在 Chrome 中，Chrome 47 之前的版本默认值为 `manual`，自 Chrome 47 起，默认值为 `follow`。
    - `referrer`: 一个指定了`no-referrer`, `client`, 或一个 URL 的 {{domxref("USVString")}} 。默认值是`about:client`。
    - `integrity`: 包括请求的 [subresource integrity](/zh-CN/docs/Web/Security/Subresource_Integrity) 值 (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

## Errors

| **Type**  | **Description**                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TypeError | 自 [Firefox 43](/zh-CN/docs/Mozilla/Firefox/Releases/43)后，若 URL 有 credentials，`Request()` 会抛出 TypeError , 例如 `http://user:password\@example.com`。 |

## Example

在我们的获取请求示例 [Fetch Request example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request) (see [Fetch Request live](http://mdn.github.io/fetch-examples/fetch-request/)) 中，我们使用构造函数创建一个新的`Request`对象，然后使用 {{domxref("GlobalFetch.fetch")}} 发送请求。由于我们正在获取图像，我们在响应上运行 {{domxref("Body.blob")}} 以为其提供正确的 MIME 类型，以便对其进行正确处理，然后为其创建一个 Object URL，并将其显示在 {{htmlelement("img")}} 元素中。

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

在[Fetch Request with init example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request-with-init) (参见 [Fetch Request init live](http://mdn.github.io/fetch-examples/fetch-request-with-init/)) 我们做了同样的事情，只不过我们在调用`fetch() 时，还`传递进了一个 init 对象：

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg',myInit);

fetch(myRequest).then(function(response) {
  ...
});
```

注意你也可以把 init 对象作为参数传递到`fetch`调用中来达到同样的效果。如下：

```js
fetch(myRequest,myInit).then(function(response) {
  ...
});
```

也可以使用在 init 中使用对象字面量作为 `headers`。

```js
var myInit = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);
```

也可以把 {{domxref("Request")}} 对象再作参数传递进 `Request()` 构造器来创建一个请求的副本（就像调用{{domxref("Request.clone","clone()")}}一样）。

> **备注：** This last usage is probably only useful in [ServiceWorkers](/zh-CN/docs/Web/API/ServiceWorker_API).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
