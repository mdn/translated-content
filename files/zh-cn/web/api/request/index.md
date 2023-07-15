---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch API")}}

[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的 **`Request`** 接口用来表示资源请求。

你可以使用 {{domxref("Request.Request","Request()")}} 构造函数创建一个新的 `Request` 对象，但是你更可能会遇到作为其他 API 操作结果返回的 Request 对象，比如 service worker 的 {{domxref("FetchEvent.request")}}。

## 构造函数

- {{domxref("Request.Request","Request()")}}
  - : 创建一个新的 `Request` 对象。

## 实例属性

- {{domxref("Request.body")}} {{ReadOnlyInline}}
  - : 主体内容的 {{domxref("ReadableStream")}}。
- {{domxref("Request.bodyUsed")}} {{ReadOnlyInline}}
  - : 存储 `true` 或 `false`，以指示请求是否仍然未被使用。
- {{domxref("Request.cache")}} {{ReadOnlyInline}}
  - : 包含请求的缓存模式（例如，`default`、`reload`、`no-cache`）。
- {{domxref("Request.credentials")}} {{ReadOnlyInline}}
  - : 包含请求的凭据（例如，`omit`、`same-origin`、`include`）。默认是 `same-origin`。
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : 返回一个描述请求的目的字符串。这是一个字符串，指示所请求的内容类型。
- {{domxref("Request.headers")}} {{ReadOnlyInline}}
  - : 包含请求相关联的 {{domxref("Headers")}} 对象。
- {{domxref("Request.integrity")}} {{ReadOnlyInline}}
  - : 包含请求的[子资源完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)值（例如 `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`）。
- {{domxref("Request.method")}} {{ReadOnlyInline}}
  - : 包含请求的方法（`GET`、`POST` 等）。
- {{domxref("Request.mode")}} {{ReadOnlyInline}}
  - : 包含请求的模式（例如，`cors`、`no-cors`、`same-origin`、`navigate`）。
- {{domxref("Request.redirect")}} {{ReadOnlyInline}}
  - : 包含如何处理重定向的模式。它可能是 `follow`、`error` 或 `manual` 之一。
- {{domxref("Request.referrer")}} {{ReadOnlyInline}}
  - : 包含请求的 referrer（例如，`client`）。
- {{domxref("Request.referrerPolicy")}} {{ReadOnlyInline}}
  - : 包含请求的 referrer 策略（例如，`no-referrer`）。
- {{domxref("Request.signal")}} {{ReadOnlyInline}}
  - : 返回与请求相关联的 {{domxref("AbortSignal")}}。
- {{domxref("Request.url")}} {{ReadOnlyInline}}
  - : 包含请求的 URL。

## 实例方法

- {{domxref("Request.arrayBuffer()")}}
  - : 返回 promise，其兑现值为请求主体的 {{jsxref("ArrayBuffer")}} 表示形式。
- {{domxref("Request.blob()")}}
  - : 返回 promise，其兑现值为请求主体的 {{domxref("Blob")}} 表示形式。
- {{domxref("Request.clone()")}}
  - : 创建一个当前 `Request` 对象的副本。
- {{domxref("Request.formData()")}}
  - : 返回 promise，其兑现值为请求主体的 {{domxref("FormData")}} 表示形式。
- {{domxref("Request.json()")}}
  - : 返回 promise，其兑现值为请求主体经过 {{JSxRef("JSON")}} 解析的结果。
- {{domxref("Request.text()")}}
  - : 返回 promise，其兑现值为请求主体的文本表示形式。

> **备注：** 这些请求主体上的函数只能运行一次，随后的调用将出现 TypeError 错误，表明请求主体流已被使用。

## 示例

在下面的代码中，我们使用 `Request()` 构造函数创建了一个新的请求（用来请求与脚本处于同一目录下的图片），然后返回请求的一些属性：

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

然后，通过将 `Request` 对象作为参数传递给 {{domxref("fetch()")}} 调用来获取此请求，例如：

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

在下面的代码片段中，我们使用 `Request()` 构造函数创建了一个新的请求，其中包含一些初始数据和主体内容，用于需要主体有效载荷的 API 请求：

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> **备注：** body 只能是一个 {{domxref("Blob")}}、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("FormData")}}、{{domxref("URLSearchParams")}}、{{domxref("ReadableStream")}} 或 {{jsxref("String")}} 对象，也可以是一个字符串字面量，因此增加一个 JSON 对象的有效载荷则需要字符串化该对象。

然后，通过将 `Request` 对象作为参数传递给 {{domxref("fetch()")}} 调用来获取此请求，并取得响应，例如：

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
