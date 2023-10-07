---
title: fetch()
slug: Web/API/fetch
---

{{APIRef("Fetch")}}

全局的 **`fetch()`** 方法用于发起获取资源的请求。它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 {{domxref("Response")}} 对象。

{{domxref("Window")}} 和 {{domxref("WorkerGlobalScope")}} 都实现了 WorkerOrGlobalScope。 ——这意味着基本在任何场景下只要你想获取资源，都可以使用 位于 WorkerOrGlobalScope 中的 `fetch()` 方法。

当遇到网络错误时，{{domxref("fetch()")}} 返回的 promise 会被 reject，并传回 {{jsxref("TypeError")}}，虽然这也可能因为权限或其他问题导致。成功的 fetch() 检查不仅要包括 promise 被 resolve，还要包括 {{domxref("Response.ok")}} 属性为 true。HTTP 404 状态并不被认为是网络错误。

`fetch()` 方法由 [Content Security Policy](/zh-CN/docs/Security/CSP/CSP_policy_directives) 的 `connect-src`指令控制，而不是它请求的资源。

> **备注：** {{domxref("fetch()")}} 方法的参数与 {{domxref("Request.Request","Request()")}} 构造器是一样的。

## 语法

```plain
Promise<Response> fetch(input[, init]);
```

### 参数

- _?input_

  - : 定义要获取的资源。这可能是：

    - 一个 {{domxref("USVString")}} 字符串，包含要获取资源的 URL。一些浏览器会接受 `blob:` 和 `data:` 作为 schemes.
    - 一个 {{domxref("Request")}} 对象。

- _init_ {{optional_inline}}

  - : 一个配置项对象，包括所有对请求的设置。可选的参数有：

    - `method`: 请求使用的方法，如 `GET`、`POST`。
    - `headers`: 请求的头信息，形式为 {{domxref("Headers")}} 的对象或包含 {{domxref("ByteString")}} 值的对象字面量。
    - `body`: 请求的 body 信息：可能是一个 {{domxref("Blob")}}、{{domxref("BufferSource")}}、{{domxref("FormData")}}、{{domxref("URLSearchParams")}} 或者 {{domxref("USVString")}} 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
    - `mode`: 请求的模式，如 `cors`、`no-cors` 或者 `same-origin`。
    - `credentials`: 请求的 credentials，如 `omit`、`same-origin` 或者 `include`。为了在当前域名内自动发送 cookie，必须提供这个选项，从 Chrome 50 开始，这个属性也可以接受 {{domxref("FederatedCredential")}} 实例或是一个 {{domxref("PasswordCredential")}} 实例。
    - `cache`: 请求的 cache 模式：`default`、 `no-store`、 `reload` 、 `no-cache`、 `force-cache` 或者 `only-if-cached`。
    - `redirect`: 可用的 redirect 模式：`follow` (自动重定向), `error` (如果产生重定向将自动终止并且抛出一个错误），或者 `manual` (手动处理重定向)。在 Chrome 中默认使用 `follow`（Chrome 47 之前的默认值是 `manual`）。
    - `referrer`: 一个 {{domxref("USVString")}} 可以是 `no-referrer`、`client` 或一个 URL。默认是 `client`。
    - `referrerPolicy`: 指定了 HTTP 头部 referer 字段的值。可能为以下值之一：`no-referrer`、 `no-referrer-when-downgrade`、`origin`、`origin-when-cross-origin`、 `unsafe-url`。
    - `integrity`: 包括请求的 [subresource integrity](/zh-CN/docs/Web/Security/Subresource_Integrity) 值（例如： `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`）。

### 返回值

一个 {{jsxref("Promise")}}，resolve 时回传 {{domxref("Response")}} 对象。

### 例外

| 类型         | **描述**                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AbortError` | 请求被{{domxref("AbortController.abort()")}}终止。                                                                                                                             |
| `TypeError`  | 从[Firefox 43](/zh-CN/docs/Mozilla/Firefox/Releases/43)开始，如果`fetch()`接收到含有用户名和密码的 URL（例如`http://user:password@example.com`），它将会抛出一个`TypeError` 。 |

## 示例

在 [Fetch Request 示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request) (参见 [Fetch Request live](http://mdn.github.io/fetch-examples/fetch-request/)) 中，我们使用对应的构造器创建了一个新的 {{domxref("Request")}} 对象，然后调用 fetch() 方法获取资源。因为我们是在请求一个图片，为了解析正常，我们对响应执行 {{domxref("Body.blob")}} 来设置相应的 MIME 类型。然后创建一个 Object URL，并在 {{htmlelement("img")}} 元素中把它显示出来。

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

在 [Fetch with init then Request 示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-with-init-then-request) (参见 [Fetch Request init live](http://mdn.github.io/fetch-examples/fetch-with-init-then-request/)) 中，我们做同样的操作，除了在调用 fetch() 时传入一个 init 对象：

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg');

fetch(myRequest,myInit).then(function(response) {
  ...
});
```

你也可以传入同样的 init 对象到 Request 构造器，来实现同样的效果，如：

```js
var myRequest = new Request("flowers.jpg", myInit);
```

`init` 对象中的 `headers` 也可以是一个对象字面量：

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
