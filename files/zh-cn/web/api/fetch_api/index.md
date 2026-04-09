---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{DefaultAPISidebar("Fetch API")}}

Fetch API 提供了一个获取资源的接口（包括跨网络通信）。它是 {{DOMxRef("XMLHttpRequest")}} 更强大、更灵活的替代方案。

## 概念和用法

Fetch API 使用 {{DOMxRef("Request")}} 和 {{DOMxRef("Response")}} 对象（以及其他与网络请求相关的内容），以及 CORS 和 HTTP Origin 标头语义等相关概念。

要发起请求并获取资源，请使用 {{domxref("Window/fetch", "fetch()")}} 方法。它是在 {{DOMxRef("Window")}} 和 {{DOMxRef("WorkerGlobalScope", "Worker")}} 上下文中的全局方法。这使得你几乎可以在任何需要获取资源的上下文中使用它。

`fetch()` 方法接受一个必需参数，即要获取资源的路径。它返回一个 {{JSxRef("Promise")}}，该 Promise 会在服务器使用标头响应后，兑现为该请求的 {{DOMxRef("Response")}}——**即使服务器的响应是 HTTP 错误状态**。你也可以传入一个可选的 `init` 选项对象作为第二个参数（参见 {{DOMxRef("Request")}}）。

一旦获取到 {{DOMxRef("Response")}}，就有多种方法可用于定义主体内容及其处理方式。

你也可以使用 {{DOMxRef("Request.Request", "Request()")}} 和 {{DOMxRef("Response.Response", "Response()")}} 构造函数直接创建请求和响应对象，但直接这样做并不常见。通常，它们会作为其他 API 操作的结果被创建（例如，来自 service worker 的 {{DOMxRef("FetchEvent.respondWith()")}}）。

在[使用 Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 中了解更多关于使用 Fetch API 功能的信息。

### 延迟 Fetch

{{domxref("Window/fetchLater", "fetchLater()")}} API 允许开发者请求一个*延迟 fetch*，它可以在指定的时间段之后发送，或者在页面关闭或导航离开时发送。参见[使用延迟 Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch)。

## 接口

- {{domxref("Window.fetch()")}} 和 {{domxref("WorkerGlobalScope.fetch()")}}
  - : 用于获取资源的 `fetch()` 方法。
- {{domxref("Window.fetchLater()")}}
  - : 用于发起延迟 fetch 请求。
- {{domxref("DeferredRequestInit")}}
  - : 表示可用于配置延迟 fetch 请求的选项集合。
- {{domxref("FetchLaterResult")}}
  - : 表示请求延迟 fetch 的结果。
- {{DOMxRef("Headers")}}
  - : 表示响应/请求的标头信息，允许你查询它们并根据结果采取不同的操作。
- {{DOMxRef("Request")}}
  - : 表示一个资源请求。
- {{DOMxRef("Response")}}
  - : 表示对请求的响应。

## HTTP 标头

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : 控制 `fetchLater()` API 的[顶级配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)。
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : 控制 `fetchLater()` API 的[跨源子框架共享配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
