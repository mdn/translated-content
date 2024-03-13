---
title: Response()
slug: Web/API/Response/Response
---

{{APIRef("Fetch")}}

**`Response()`** 构造函数创建了一个新的 {{domxref("Response")}} 对象。

## 语法

```plain
let myResponse = new Response(body, init);
```

### 参数

- _body_ {{optional_inline}}

  - : 一个定义 response 中 body 的对象。可以为 `null` ，或是以下其中一个：

    - {{domxref("Blob")}}
    - {{domxref("BufferSource")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("USVString")}}

- _init_ {{optional_inline}}

  - : 一个参数 (options) 对象，包含要应用到 response 上的任何自定义设置。可能参数 (options) 是：

    - `status`: response 的状态码，例如：`200`.
    - `statusText`: 和状态码关联的状态消息，例如：`OK`.
    - `headers`: 你想加到 response 上的任何 headers，包含了一个 {{domxref("Headers")}} 对象或满足对象语法的 {{domxref("ByteString")}} key/value 对 (详见 [HTTP headers](/zh-CN/docs/Web/HTTP/Headers)).

## 例子

在我们的 [Fetch Response 示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response)中 (参见[Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) 我们使用构造函数创建了一个新的 Response 对象，传递一个新的 {{domxref("Blob")}} 作为 body，和一个包含自定义 `status` 和`statusText`的 init 对象：

```js
var myBlob = new Blob();
var init = { status: 200, statusText: "SuperSmashingGreat!" };
var myResponse = new Response(myBlob, init);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
