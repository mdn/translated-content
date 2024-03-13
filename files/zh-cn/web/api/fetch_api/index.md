---
title: Fetch API
slug: Web/API/Fetch_API
---

{{DefaultAPISidebar("Fetch API")}}

Fetch API 提供了一个获取资源的接口（包括跨网络通信）。对于任何使用过 {{domxref("XMLHttpRequest")}} 的人都能轻松上手，而且新的 API 提供了更强大和灵活的功能集。

{{AvailableInWorkers}}

## 概念和用法

Fetch 提供了对 {{domxref("Request")}} 和 {{domxref("Response")}}（以及其他与网络请求有关的）对象的通用定义。这将在未来更多需要它们的地方使用它们，无论是 service worker、Cache API，又或者是其他处理请求和响应的方式，甚至是任何一种需要你自己在程序中生成响应的方式（即使用计算机程序或者个人编程指令）。

它同时还为有关联性的概念，例如 CORS 和 HTTP Origin 标头信息，提供一种新的定义，取代它们原来那种分离的定义。

发送请求或者获取资源，请使用 {{domxref("fetch()")}} 方法。它在很多接口中都被实现了，更具体地说，是在 {{domxref("Window")}} 和 {{domxref("WorkerGlobalScope")}} 接口上。因此在几乎所有环境中都可以用这个方法获取资源。

`fetch()` 强制接受一个参数，即要获取的资源的路径。它返回一个 {{JSxRef("Promise")}}，该 Promise 会在服务器使用标头响应后，兑现为该请求的 {{domxref("Response")}}——**即使服务器的响应是 HTTP 错误状态**。你也可以传一个可选的第二个参数 `init`（参见 {{domxref("Request")}}）。

一旦 {{domxref("Response")}} 被返回，有许多方法可以获取主体定义的内容以及如何处理它。

你也可以通过 {{domxref("Request.Request","Request()")}} 和 {{domxref("Response.Response","Response()")}} 构造函数直接创建请求和响应。但是我们不建议这么做，它们更可能被创建为其他的 API 操作的结果（比如，service worker 中的 {{domxref("FetchEvent.respondWith")}}）。

### 与 jQuery 的区别

`fetch` 规范主要在三个方面与 `jQuery.ajax()` 不同：

- 从 `fetch()` 返回的 Promise **不会因 HTTP 的错误状态而被拒绝**，即使响应是 HTTP `404` 或 `500`。相反，它将正常兑现（`ok` 状态会被设置为 `false`），并且只有在网络故障或者有任何阻止请求完成时，才拒绝。
- 除非你在 [init 对象中](/zh-CN/docs/Web/API/fetch#参数)设置（去包含）_credentials_，否则 `fetch()` **将不会发送跨源 cookie**。

  - [2018 年 4 月](https://github.com/whatwg/fetch/pull/585)，该规范将默认的 credentials 策略更改为 `'same-origin'`。以下浏览器发布了过时的原生 fetch，并在以下版本中更新：Firefox 61.0b13、Safari 12、Chrome 68。
  - 如果你的目标是这些旧的浏览器，请务必在所有可能接受 cookie/用户登录状态影响的 API 请求中包含拥有 `credentials: 'same-origin'` 的 [init 对象](/zh-CN/docs/Web/API/fetch#参数)。

> **备注：** 更多关于 Fetch API 的用法，参考[使用 Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)，以及一些概念 [Fetch 基础概念](/zh-CN/docs/Web/API/Fetch_API/Basic_concepts)。

### 中止 fetch

要中止未完成的 `fetch()`，甚至 `XMLHttpRequest` 操作，请使用 {{DOMxRef("AbortController")}} 和 {{DOMxRef("AbortSignal")}} 接口。

## Fetch 接口

- {{domxref("fetch()")}}
  - : 包含了 `fetch()` 方法，用于获取资源。
- {{domxref("Headers")}}
  - : 表示响应/请求的标头信息，允许你查询它们，或者针对不同的结果做不同的操作。
- {{domxref("Request")}}
  - : 相当于一个资源请求。
- {{domxref("Response")}}
  - : 相当于请求的响应

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch 基础概念](/zh-CN/docs/Web/API/Fetch_API/Basic_concepts)
