---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch")}}{{SeeCompatTable}}[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的 **`Request`**接口？用来表示资源请求。

你可以使用 {{domxref("Request.Request()")}} ?构造函数创建一个 `Request` 对象，但是你可能会遇到一个 Request 对象作为其他 API 的操作被返回，比如一个 `service worker` 的{{domxref("FetchEvent.request")}}。

## 构造器

- {{domxref("Request.Request()")}}
  - : 创建一个新的 `Request` 对象。

## 属性

- {{domxref("Request.method")}} {{readonlyInline}}
  - : 包含请求的方法 (`GET`, `POST`, 等.)
- {{domxref("Request.url")}} {{readonlyInline}}
  - : 包含这个请求的 URL。
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : 包含请求相关的{{domxref("Headers")}}对象。
- {{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}
  - : 包含请求的上下文 (例如：`audio`, `image`, `iframe`, 等)
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : ?包含请求的来源 (例如：`client`)。
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : ?包含请求来源的策略 (例如：`no-referrer`)。
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : 包含请求的模式 (例如： `cors`, `no-cors`, `same-origin`, `navigate`).
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : 包含请求的证书 (例如： `omit`, `same-origin`).
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : 包含？如何处理重定向模式，它可能是一个` follow `，`error`或者`manual`。
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : 包含请求的[子资源的完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)值 (例如： `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.cache")}} {{readonlyInline}}
  - : 包含请求的缓存模式 (例如： `default`, `reload`, `no-cache`).

`Request`实现了{{domxref("Body")}}, 所以它还具有以下属性可用：

- {{domxref("Body.body")}} {{readonlyInline}}
  - : 一个简单 getter 用于曝光一个{{domxref("ReadableStream")}}的主体内容。
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : 存储一个{{domxref("Boolean")}}判断主体是否已经被用于一个响应中。

## 方法

- {{domxref("Request.clone()")}}
  - : 创建当前 request 的副本。

`Request`实现 {{domxref("Body")}}, 因此它也有以下方法可用：

- {{domxref("Body.arrayBuffer()")}}
  - : 返回解决一个{{domxref("ArrayBuffer")}}表示的请求主体的 promise.
- {{domxref("Body.blob()")}}
  - : 返回解决一个{{domxref("Blob")}}表示的请求主体的 promise.
- {{domxref("Body.formData()")}}
  - : 返回解决一个{{domxref("FormData")}}表示的请求主体的 promise.
- {{domxref("Body.json()")}}
  - : 返回解决一个{{domxref("JSON")}}表示的请求主体的 promise.
- {{domxref("Body.text()")}}
  - : 返回解决一个{{domxref("USVString")}}(文本) 表示的请求主体的 promise.

注意：这些 Body 功能只能运行一次; 随后的调用将通过空 strings/ ArrayBuffers 解析。

## 示例

在下面的代码中，我们使用 Request ( ) 构造函数创建了一个新的 request 实例（用来请求同一目录下的图片）, 然后返回请求的一些属性。

```js
const myRequest = new Request('http://localhost/flowers.jpg');

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit
```

然后，通过将 Request 对象作为参数传递给[{{domxref("GlobalFetch.fetch()")}}](/zh-CN/docs/Web/API/GlobalFetch/fetch)调用来获取此请求，例如：

```js
fetch(myRequest)
  .then(response => response.blob())
  .then(blob => {
    myImage.src = URL.createObjectURL(blob);
  });
```

在下面的代码片段中，我们使用`Request()`构造函数创建了一个新的 request，其中包含一些初始数据和正文内容，用于需要主体有效载荷的 api 请求：

```js
const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"foo":"bar"}'});

const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed;
```

注意：body 类型只能是一个{{domxref("Blob")}},{{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} 或者{{domxref("ReadableStream")}}类型，因此增加一个 JSON 对象的有效载荷则需要字符串化该对象。

例如，您可以通过将`Request`对象作为参数传递给{{domxref("GlobalFetch.fetch()")}}调用来获取此 api 请求，并获得响应：

```
fetch(myRequest)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
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
