---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的 `Response` 接口呈现了对一次请求的响应数据。

你可以使用 {{domxref("Response.Response()")}} 构造函数来创建一个 `Response` 对象，但通常更可能遇到的情况是，其他的 API 操作返回了一个 Response 对象。例如一个 service worker 的 {{domxref("Fetchevent.respondWith")}}，或者一个简单的 {{domxref("GlobalFetch.fetch()")}}。

## 构造函数

- {{domxref("Response.Response","Response()")}}
  - : 创建一个新的 `Response` 对象。

## 属性

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : 包含此 Response 所关联的 {{domxref("Headers")}} 对象。
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : 包含了一个布尔值，标示该 Response 成功（HTTP 状态码的范围在 200-299）。
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : 表示该 Response 是否来自一个重定向，如果是的话，它的 URL 列表将会有多个条目。
- {{domxref("Response.status")}} {{readonlyinline}}
  - : 包含 Response 的状态码（例如 `200` 表示成功）。
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : 包含了与该 Response 状态码一致的状态信息（例如，OK 对应 `200`）。
- {{domxref("Response.type")}} {{readonlyinline}}
  - : 包含 Response 的类型（例如，`basic`、`cors`）。
- {{domxref("Response.url")}} {{readonlyinline}}
  - : 包含 Response 的 URL。
- {{domxref("Response.useFinalURL")}}
  - : 包含了一个布尔值，来标示这是否是该 Response 的最终 URL。

`Response` 实现了 {{domxref("Body")}} 接口，所以以下属性亦可用：

- {{domxref("Response.body")}} {{readonlyInline}}
  - : 一个简单的 getter，用于暴露一个 {{domxref("ReadableStream")}} 类型的 body 内容。
- {{domxref("Response.bodyUsed")}} {{readonlyInline}}
  - : 包含了一个{{domxref("Boolean", "布尔值")}}来标示该 Response 是否读取过 {{domxref("Body")}}。

## 方法

- {{domxref("Response.clone()")}}
  - : 创建一个 `Response` 对象的克隆。
- {{domxref("Response.error()")}}
  - : 返回一个绑定了网络错误的新的 `Response` 对象。
- {{domxref("Response.redirect()")}}
  - : 用另一个 URL 创建一个新的 `Response`。

`Response` 实现了 {{domxref("Body")}} 接口，所以以下方法同样可用：

- {{domxref("Body.arrayBuffer()")}}
  - : 读取 {{domxref("Response")}} 对象并且将它设置为已读（因为 Responses 对象被设置为了 stream 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxref("ArrayBuffer")}} 格式的 Promise 对象。
- {{domxref("Body.blob()")}}
  - : 读取 {{domxref("Response")}} 对象并且将它设置为已读（因为 Responses 对象被设置为了 stream 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxref("Blob")}} 格式的 Promise 对象。
- {{domxref("Body.formData()")}}
  - : 读取{{domxref("Response")}} 对象并且将它设置为已读（因为 Responses 对象被设置为了 stream 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxref("FormData")}} 格式的 Promise 对象。
- {{domxref("Body.json()")}}
  - : 读取 {{domxref("Response")}} 对象并且将它设置为已读（因为 Responses 对象被设置为了 stream 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxref("JSON")}} 格式的 Promise 对象。
- {{domxref("Body.text()")}}
  - : 读取 {{domxref("Response")}} 对象并且将它设置为已读（因为 Responses 对象被设置为了 stream 的方式，所以它们只能被读取一次），并返回一个被解析为 {{domxref("USVString")}} 格式的 Promise 对象。

## 示例

在我们的[基础实例](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([点击运行](https://mdn.github.io/fetch-examples/basic-fetch/)) 中，我们使用了一个简单的函数调用，调用了 `fetch()` 函数来获取一张图片并将其显示在 HTML 的 IMG 标签中，`fetch()` 函数返回了一个 Promise，它使用与资源获取操作相关联的 Response 对象进行解析。你会注意到，由于我们正在请求一张图片，我们需要运行 {{domxref("Body.blob")}}（{{domxref("Response")}} 实现了），以为响应提供正确的 MIME 类型。

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob) {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

你也可以使用 {{domxref("Response.Response()")}} 这样的构造方法，来创建自定义的 `Response` 对象：

```js
const response = new Response();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
