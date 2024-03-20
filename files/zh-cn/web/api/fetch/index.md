---
title: 全局函数 fetch()
slug: Web/API/fetch
l10n:
  sourceCommit: 272cd2b471705d5071dd63764ba13b4c46a260d7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

全局 **`fetch()`** 方法用于发起获取资源的请求，它会返回一个会在请求响应后兑现的 promise。

该 promise 会兑现一个表示请求响应的 {{domxref("Response")}} 对象。

当遇到网络错误（因为权限或其他类似的问题）时，`fetch()` 返回的 promise 才会被拒绝。`fetch()` 的 promise *不会*因为 HTTP 错误而被拒绝（比如 `404`、`504`，等）。因此，`then()` 处理器必须检查 {{domxref("Response.ok")}} 和/或 {{domxref("Response.status")}} 属性。

`fetch()` 方法由 [Content Security Policy](/zh-CN/docs/Security/CSP/CSP_policy_directives) 的 `connect-src` 指令控制，而不是它请求的资源。

> **备注：** `fetch()` 方法的参数与 {{domxref("Request.Request","Request()")}} 构造器是一样的。

## 语法

```plain
Promise<Response> fetch(input[, init]);
```

### 参数

- `resource`

  - : 定义你想要获取的资源。这可能是：

    - 一个字符串或任何其他具有 {{Glossary("stringifier")}} 的对象，包括 {{domxref("URL")}} 对象——提供你想要获取的资源的 URL。
    - 一个 {{domxref("Request")}} 对象。

- `options` {{optional_inline}}

  - : 一个包含要应用于请求的自定义设置的对象。可能的选项有：

    - `body`

      - : 你想要添加到请求中的任意消息主体：可以是一个 {{domxref("Blob")}}、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("FormData")}}、{{domxref("URLSearchParams")}}、字符串对象或者字符串字面量，或者 {{domxref("ReadableStream")}} 对象。注意 `GET` 或 `HEAD` 方法的请求不能包含消息主体。

    - `browsingTopics` {{experimental_inline}}

      - : 布尔值，表示当前用户选择的主题是否应该在关联请求的 {{httpheader("Sec-Browsing-Topics")}} 标头中发送。有关更多详细信息，请参阅[使用 Topics API](/zh-CN/docs/Web/API/Topics_API/Using)。

    - `cache`

      - : 字符串，表示请求如何与浏览器的 [HTTP 缓存](/zh-CN/docs/Web/HTTP/Caching)进行交互。可能的值有 `default`、`no-store`、`reload`、`no-cache`、`force-cache` 和 `only-if-cached`，这些取值在 {{domxref("Request")}} 对象的 {{domxref("Request/cache", "cache")}} 属性的文档中有记录。

    - `credentials`

      - : 控制浏览器如何处理凭据（[cookie](/zh-CN/docs/Web/HTTP/Cookies)、[HTTP authentication](/zh-CN/docs/Web/HTTP/Authentication) 条目和 TLS 客户端证书）。必须是以下字符串之一：

        - `omit`：告诉浏览器在请求中排除凭据，并忽略响应中发送的任何凭据（例如，任何 {{HTTPHeader("Set-Cookie")}} 标头）。
        - `same-origin`：告诉浏览器在请求同源 URL 时包含凭据，并使用来自同源 URL 响应中返回的凭据。**这是默认值。**
        - `include`：告诉浏览器在同源和跨源请求中都包含凭据，并始终使用响应中返回的凭据。

          > **备注：** 凭据可以包含在简单和“最终”的跨源请求中，但不应包含在 [CORS 预检请求](/zh-CN/docs/Web/HTTP/CORS#预检请求)中。

    - `headers`

      - : 任意你想要附加到请求的标头，可以是 {{domxref("Headers")}} 对象或者带有{{jsxref("String", "字符串")}}值的对象字面量。注意[有些标头是被禁止的](/zh-CN/docs/Glossary/Forbidden_header_name)。

        > **备注：** 请求中可能会有 [`Authorization`](/zh-CN/docs/Web/HTTP/Headers/Authorization) HTTP 标头，但是如果请求跨源重定向的话就会被删除。

    - `integrity`

      - : 包含请求的[子资源完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)值（比如 `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`）。

    - `keepalive`
      - : `keepalive` 选项可以允许请求持续保持连接，甚至页面已经关闭的情况。使用 `keepalive` 标志的 Fetch 是 {{domxref("Navigator.sendBeacon()")}} API 的一种替代方案。
    - `method`

      - : 请求的方法，比如 `"GET"`、`"POST"`，默认值是 `"GET"`。注意 {{HTTPMethod("HEAD")}} 或者 {{HTTPMethod("GET")}} 的 Fetch 请求不会设置 {{httpheader("Origin")}} 标头（此行为已在 Firefox 65 中修正——参见 [Firefox bug 1508661](https://bugzil.la/1508661)）。不区分大小写的情况下能匹配上 [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110#name-overview) 中的任意字符串都会自动被转成大小。如果你想使用自定义的方法（比如 `PATCH`），你应该将它变为大写。

    - `mode`
      - : 你想要使用的模式，比如 `cors`、`no-cors` 或 `same-origin`。
    - `priority`
      - : 指定相对于其他同类型的请求的 fetch 请求的优先级。必须是以下字符串之一：
        - `high`
          - : 相对于其他同类型的请求而言，这是一个高优先级的 fetch 请求。
        - `low`
          - : 相对于其他同类型的请求而言，这是一个低优先级的 fetch 请求。
        - `auto`
          - : 自动确定相对于同类型的其他请求的 fetch 请求的优先级（默认）。
    - `redirect`

      - : 如何处理重定向（`redirect`）响应：

        - `follow`
          - : 自动跟随重定向。除非另有说明，否则重定向模式设置为 `follow`。
        - `error`
          - : 如果发生重定向，则中止并显示错误。
        - `manual`
          - : 调用者打算在另一个上下文中处理响应。详细信息请参阅 [WHATWG fetch 规范](https://fetch.spec.whatwg.org/#concept-request-redirect-mode)。

    - `referrer`

      - : 一个指定请求的引用者的字符串。这可以是同源 URL、`about:client` 或空字符串。

    - `referrerPolicy`
      - : 指定请求所使用的 [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies)。可能是以下其中之一 `no-referrer`、`no-referrer-when-downgrade`、`same-origin`、`origin`、`strict-origin`、`origin-when-cross-origin`、`strict-origin-when-cross-origin` 或者 `unsafe-url`。
    - `signal`
      - : 一个 {{domxref("AbortSignal")}} 对象实例；允许你通过 {{domxref("AbortController")}} 与 fetch 请求进行通信，并在需要时中止请求。

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

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
