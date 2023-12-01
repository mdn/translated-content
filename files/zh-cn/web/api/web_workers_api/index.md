---
title: Web Worker API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Worker** 使得在一个独立于 Web 应用程序主执行线程的后台线程中运行脚本操作成为可能。这样做的好处是可以在独立线程中执行费时的处理任务，使主线程（通常是 UI 线程）的运行不会被阻塞/放慢。

## Web Worker 概念与用法

Worker 是一个使用构造函数创建的对象（例如 {{domxref("Worker.Worker", "Worker()")}}），它运行一个具名 JavaScript 文件——该文件包含将在 worker 线程中运行的代码。

除了标准的 [JavaScript](/zh-CN/docs/Web/JavaScript) 函数集（如 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)、[`JSON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) 等），你可以在 worker 线程中运行任何你喜欢的代码，有一些例外：你不能直接在 worker 线程中操作 DOM 元素，或使用 [`window`](/zh-CN/docs/Web/API/Window) 对象中的某些方法和属性。有关你可以运行的代码的信息，请参见下面的 [Worker 全局上下文和函数](#worker_全局上下文和函数)和[支持的 Web API](#支持的_web_api) 。

数据通过消息系统在 worker 和主线程之间发送——双方都使用 `postMessage()` 方法发送消息，并通过 `onmessage` 事件处理程序响应消息（消息包含在 {{domxref("Worker/message_event", "message")}} 事件的 `data` 属性中）。数据是复制的，而不是共享的。

worker 可以依次生成新的 worker，只要这些 worker 与父页面托管在同一个 {{glossary("origin")}} 中。此外，worker 可以通过 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 来访问网络，但 `XMLHttpRequest` 的 `responseXML` 和 `channel` 属性始终返回 `null`。

### Worker 类型

有许多不同类型的 worker：

- 专用 worker 是由单个脚本使用的 worker。该上下文由 {{DOMxRef("DedicatedWorkerGlobalScope")}} 对象表示。
- {{DOMxRef("SharedWorker","Shared worker")}} 是可以由在不同窗口、IFrame 等中运行的多个脚本使用的 worker，只要它们与 worker 在同一域中。它们比专用的 worker 稍微复杂一点——脚本必须通过活动端口进行通信。
- [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 基本上是作为代理服务器，位于 web 应用程序、浏览器和网络（如果可用）之间。它们的目的是（除开其他方面）创建有效的离线体验、拦截网络请求，以及根据网络是否可用采取合适的行动并更新驻留在服务器上的资源。它们还将允许访问推送通知和后台同步 API。

> **备注：** 根据 [web worker 规范](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2)，worker 错误事件不应该冒泡（参见 [Firefox bug 1188141](https://bugzil.la/1188141)）。该规范已在 Firefox 42 中实现。

### Worker 全局上下文和函数

worker 在一个与当前 {{DOMxRef("window")}} 不同的全局上下文中运行！虽然 {{domxref("Window")}} 不能直接用于 worker，但许多相同的方法被定义在一个共享的混入（`WindowOrWorkerGlobalScope`）中，并通过 worker 自己的 {{domxref("WorkerGlobalScope")}} 衍生的上下文提供给它们：

- {{domxref("DedicatedWorkerGlobalScope")}} 用于专用 worker
- {{domxref("SharedWorkerGlobalScope")}} 用于共享 worker
- {{domxref("ServiceWorkerGlobalScope")}} 用于 [service worker](/zh-CN/docs/Web/API/Service_Worker_API)

所有 worker 和主线程（来自 `WindowOrWorkerGlobalScope`）共有的一些函数（子集）是：

- {{domxref("atob", "atob()")}}
- {{domxref("btoa", "btoa()")}}
- {{domxref("clearInterval", "clearInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}
- {{domxref("queueMicrotask()")}}
- {{domxref("setInterval()")}}
- {{domxref("setTimeout()")}}
- {{domxref("structuredClone()")}}
- {{domxref("window.requestAnimationFrame")}}（仅专用 worker）
- {{domxref("window.cancelAnimationFrame")}}（仅专用 worker）

以下函数**仅**对 worker 可用：

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}}（所有 worker）
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}（仅限专用 worker）

### 支持的 Web API

> **备注：** 如果列出的 API 被某一平台的特定版本所支持，那么一般可以认为它在 web worker 中是可用的。你也可以使用网站来测试对某个特定对象/函数的支持：<https://worker-playground.glitch.me/>

以下 Web API 对 worker 是可用的：

- {{domxref("Barcode_Detection_API","Barcode Detection API")}}
- {{domxref("Broadcast_Channel_API","Broadcast Channel API")}}
- {{domxref("Cache", "Cache API")}}
- {{domxref("Channel_Messaging_API", "Channel Messaging API")}}
- {{domxref("Console API", "Console API")}}
- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)（例如 {{domxref("Crypto")}}）
- [CSS Font Loading API](/zh-CN/docs/Web/API/CSS_Font_Loading_API)
- {{domxref("CustomEvent")}}
- {{domxref("Encoding_API", "Encoding API")}}（例如 {{domxref("TextEncoder")}}、{{domxref("TextDecoder")}}）
- {{domxref("Fetch_API", "Fetch API")}}
- {{domxref("FileReader")}}
- {{domxref("FileReaderSync")}}（仅在 worker 中有效！）
- {{domxref("FormData")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("IndexedDB_API", "IndexedDB")}}
- {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}}（仅限专用 worker）
- [Network Information API](/zh-CN/docs/Web/API/Network_Information_API)
- {{domxref("Notifications_API", "Notifications API")}}
- {{domxref("OffscreenCanvas")}}（和所有的 canvas context API）
- {{domxref("Performance_API","Performance API")}}，包括：
  - {{domxref("Performance")}}
  - {{domxref("PerformanceEntry")}}
  - {{domxref("PerformanceMeasure")}}
  - {{domxref("PerformanceMark")}}
  - {{domxref("PerformanceObserver")}}
  - {{domxref("PerformanceResourceTiming")}}
- [Server-sent 事件](/zh-CN/docs/Web/API/Server-sent_events)
- {{domxref("ServiceWorkerRegistration")}}
- {{domxref("URL_API","URL API")}}（例如 {{domxref("URL")}}）
- {{domxref('WebCodecs_API','','','true')}}
- {{domxref("WebSocket")}}
- {{domxref("XMLHttpRequest")}}

worker 也可以派生其他 worker，所以这些 API 也是可用的：

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("WorkerLocation")}}
- {{domxref("WorkerNavigator")}}

## Web Worker 接口

- {{domxref("Worker")}}
  - : 表示正在运行的 worker 线程，允许你将信息传递到正在运行的 worker 程序代码。
- {{DOMxRef("WorkerLocation")}}
  - : 定义由 {{domxref("Worker")}} 执行的脚本的绝对位置。
- {{domxref("SharedWorker")}}
  - : 表示一种特定的 worker，可以从多个{{glossary("browsing context", "浏览上下文")}}（即窗口、标签或 iframe）甚至其他 worker 访问。
- {{domxref("WorkerGlobalScope")}}
  - : 表示任意 worker 的通用作用域（对于正常的网页类容来说与 {{domxref("Window")}} 有相同的作用）。不同类型的 worker 都有从接口继承作用域对象，并且可以添加更多特定特性。
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : 表示一个专用 worker 的作用域，继承自 {{domxref("WorkerGlobalScope")}}，且可添加一些特有的特性。
- {{domxref("SharedWorkerGlobalScope")}}
  - : 表示一个共享 worker 的作用域，继承自 {{domxref("WorkerGlobalScope")}}，且可添加一些特有的特性。
- {{domxref("WorkerNavigator")}}
  - : 表示用户代理（客户端）的身份和状态。

## 示例

我们创建了几个演示来展示 Web Worker 的使用：

- [基本的专用 worker 示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker)（[运行专用 worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）。
- [基本的共享 worker 示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[运行共享 worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）。
- [OffscreenCanvas worker 示例](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker)（[运行 OffscreenCanvas worker](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)）。

你可以在[使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 中找到有关这些演示是如何工作的更多信息。

## 规范

{{Specifications}}

## 参见

- [使用 Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}} 接口
- {{domxref("SharedWorker")}} 接口
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
