---
title: Request.mode
slug: Web/API/Request/mode
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 接口的 **`mode`** 只读属性包含请求的模式（例如：`cors` 、 `no-cors` 、 `cors-with-forced-preflight` 、 `same-origin` 或 `navigate` 。）这用于确定跨域请求是否能得到有效的响应，以及响应的哪些属性是可读的。

## 语法

```plain
var myMode = request.mode;
```

### 属性值

一个 `RequestMode` 值。

- `same-origin` — 如果使用此模式向另外一个源发送请求，显而易见，结果会是一个错误。你可以设置该模式以确保请求总是向当前的源发起的。
- `no-cors` — 保证请求对应的 method 只有 `HEAD`，`GET` 或 `POST` 方法，并且请求的 headers 只能有简单请求头 ([simple headers](https://fetch.spec.whatwg.org/#simple-header))。如果 ServiceWorker 劫持了此类请求，除了 [simple header](https://fetch.spec.whatwg.org/#simple-header) 之外，不能添加或修改其他 header。另外 JavaScript 不会读取 {{domxref("Response")}} 的任何属性。这样将会确保 ServiceWorker 不会影响 Web 语义 (semantics of the Web)，同时保证了在跨域时不会发生安全和隐私泄露的问题。
- `cors` — 允许跨域请求，例如访问第三方供应商提供的各种 API。预期将会遵守 [CORS protocol](/zh-CN/docs/Web/HTTP/Access_control_CORS) 。仅有[有限部分](https://fetch.spec.whatwg.org/#concept-filtered-response-cors)的头部暴露在 {{domxref("Response")}} ，但是 body 部分是可读的。
- `navigate` — 表示这是一个浏览器的页面切换请求 (request)。navigate 请求仅在浏览器切换页面时创建，该请求应该返回 HTML。

#### 默认模式

可以以多种方式发起请求，并且请求的模式取决于发起请求的特定方式。

例如，当一个 `Request` 对象以 {{domxref("Request.Request")}} 方式创建，该`Request` 的 `mode` 的值为 `cors` 。

然而，除了以 {{domxref("Request.Request")}} 创建的请求，模式通常为 `no-cors` 。例如，对与嵌入资源发起的请求，除非存在 [`crossorigin`](/zh-CN/docs/Web/HTML/CORS_settings_attributes) 属性，即对于 {{HTMLElement("link")}} 、 {{HTMLElement("script")}}（除了和模块一起使用之外）、 {{HTMLElement("img")}}、 {{HTMLElement("audio")}}、 {{HTMLElement("video")}}、 {{HTMLElement("object")}}、 {{HTMLElement("embed")}}还有 {{HTMLElement("iframe")}} 元素，在大多数情况下是使用 `no-cors` 模式。

## 示例

在下面代码段中，我们使用 {{domxref("Request.Request()")}} 创建请求（请求与脚本位于同一目录中的图像文件），然后将请求模式保存在一个变量中：

In the following snippet, we create a new request using theconstructor (for an image file in the same directory as the script), then save the request mode in a variable:

```js
var myRequest = new Request("flowers.jpg");
var myMode = myRequest.mode; // returns "cors" by default
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
