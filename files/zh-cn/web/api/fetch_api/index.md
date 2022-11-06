---
title: Fetch API
slug: Web/API/Fetch_API
---

{{DefaultAPISidebar("Fetch API")}}

Fetch API 提供了一个获取资源的接口（包括跨域请求）。任何使用过 {{domxref("XMLHttpRequest")}} 的人都能轻松上手，而且新的 API 提供了更强大和灵活的功能集。

## 概念和用法

Fetch 提供了对 {{domxref("Request")}} 和 {{domxref("Response")}} （以及其他与网络请求有关的）对象的通用定义。使之今后可以被使用到更多地应用场景中：无论是 service worker、Cache API、又或者是其他处理请求和响应的方式，甚至是任何一种需要你自己在程序中生成响应的方式。

它同时还为有关联性的概念，例如 CORS 和 HTTP 原生头信息，提供一种新的定义，取代它们原来那种分离的定义。

发送请求或者获取资源，需要使用 {{domxref("fetch()")}} 方法。它在很多接口中都被实现了，更具体地说，是在 {{domxref("Window")}} 和 {{domxref("WorkerGlobalScope")}} 接口上。因此在几乎所有环境中都可以用这个方法获取到资源。

`fetch()` 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 Promise 对象，resolve 对应请求的 {{domxref("Response")}}。你也可以传一个可选的第二个参数 `init`（参见 {{domxref("Request")}}）。

一旦 {{domxref("Response")}} 被返回，就可以使用一些方法来定义内容的形式，以及应当如何处理内容（参见 {{domxref("Body")}}）。

你也可以通过 {{domxref("Request.Request","Request()")}} 和 {{domxref("Response.Response","Response()")}} 的构造函数直接创建请求和响应，但是我们不建议这么做。他们应该被用于创建其他 API 的结果（比如，service workers 中的 {{domxref("FetchEvent.respondWith")}}）。

> **备注：** 更多关于 Fetch API 的用法，参考 [Using Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)，以及一些概念 [Fetch basic concepts](/zh-CN/docs/Web/API/Fetch_API/Basic_concepts)。

### 中止 fetch

浏览器已经开始为 {{domxref("AbortController")}} 和 {{domxref("AbortSignal")}} 接口（也就是 Abort API）添加实验性支持，允许像 Fetch 和 XHR 这样的操作在还未完成时被中止。请参阅接口页面了解更多详情。

## Fetch 接口

- {{domxref("fetch()")}}
  - : 包含了`fetch()` 方法，用于获取资源。
- {{domxref("Headers")}}
  - : 相当于 response/request 的头信息，可以使你查询到这些头信息，或者针对不同的结果做不同的操作。
- {{domxref("Request")}}
  - : 相当于一个资源请求。
- {{domxref("Response")}}
  - : 相当于请求的响应

## Fetch mixin

- {{domxref("Body")}}
  - : 提供了与 response/request 中的 body 有关的方法，可以定义它的内容形式以及处理方式。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- [Using Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/zh-CN/docs/Web/API/Fetch_API/Basic_concepts)
