---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

通过使用 Web Workers，Web 应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是 UI 线程）不会因此被阻塞/放慢。

## Web Workers 概念与用法

使用构造函数（例如，{{domxref("Worker.Worker", "Worker()")}}）创建一个 **worker** 对象，构造函数接受一个 JavaScript 文件 URL — 这个文件包含了将在 worker 线程中运行的代码。worker 将运行在与当前 {{domxref("window")}}不同的另一个全局上下文中，这个上下文由一个对象表示，标准情况下为{{domxref("DedicatedWorkerGlobalScope")}} （标准 workers 由单个脚本使用; 共享 workers 使用{{domxref("SharedWorkerGlobalScope")}}）。

你可以在 worker 线程中运行任意的代码，但注意存在一些例外：你不能直接在 worker 线程中操纵 DOM 元素；或使用{{domxref("window")}} 对象中的某些方法和属性。大部分 window 对象的方法和属性是可以使用的，包括 [WebSockets](/zh-CN/docs/WebSockets)，以及诸如 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 和 FireFox OS 中独有的 [Data Store API](/zh-CN/docs/Web/API/Data_Store_API) 这一类数据存储机制。更多信息请参见： [Functions and classes available to workers](/zh-CN/docs/Web/API/Worker/Functions_and_classes_available_to_workers) 。

主线程和 worker 线程相互之间使用 `postMessage()` 方法来发送信息，并且通过 `onmessage` 这个 event handler 来接收信息（传递的信息包含在 [`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event) 这个事件的`data`属性内) 。数据的交互方式为传递副本，而不是直接共享数据。

worker 可以另外生成新的 worker，这些 worker 与它们父页面的宿主相同。此外，worker 可以通过 [`XMLHttpRequest`](/zh-CN/DOM/XMLHttpRequest) 来访问网络，只不过 `XMLHttpRequest` 的 `responseXML` 和 `channel` 这两个属性的值将总是 `null` 。

除了专用 worker 之外，还有一些其他种类的 worker：

- Shared Workers 可被不同的窗体的多个脚本运行，例如 IFrames 等，只要这些 workers 处于同一主域。共享 worker 比专用 worker 稍微复杂一点 — 脚本必须通过活动端口进行通讯。详情请见{{domxref("SharedWorker")}}。
- [Service Workers](/zh-CN/docs/Web/API/Service_Worker_API) 一般作为 web 应用程序、浏览器和网络（如果可用）之间的代理服务。他们旨在（除开其他方面）创建有效的离线体验，拦截网络请求，以及根据网络是否可用采取合适的行动，更新驻留在服务器上的资源。他们还将允许访问推送通知和后台同步 API。
- Chrome Workers 是一种仅适用于 firefox 的 worker。如果您正在开发附加组件，希望在扩展程序中使用 worker 且可以访问 [js-ctypes](/zh-CN/js-ctypes)，那么可以使用 Chrome Workers。详情请见{{domxref("ChromeWorker")}}
- 音频 [Workers](/zh-CN/docs/Web/API/Web_Audio_API#Audio_Workers)可以在网络 worker 上下文中直接完成脚本化音频处理。

> **备注：** 根据网络 worker 规范，worker 错误事件不应该冒泡（参见 [Firefox bug 1188141](https://bugzil.la/1188141)）。该规范已在 Firefox 42 中实现。

## Web Worker 接口

- {{domxref("AbstractWorker")}}
  - : 抽象属性和方法是所有类型的 worker 中常用的（例如{{domxref("Worker")}}或 {{domxref("SharedWorker")}}）
- {{domxref("Worker")}}
  - : 表示正在运行的 worker 线程，允许你将信息传递到正在运行的 worker 程序代码。
- {{domxref("SharedWorker")}}
  - : 表示一种可以同时被多个浏览器环境访问的特殊类型的 worker。这些浏览器环境可以是多个 window, iframes 或者甚至是多个 worker.
- {{domxref("WorkerGlobalScope")}}
  - : 表示任意 worker 的通用作用域（对于正常的网页类容来说与{{domxref("Window")}} 有相同的作用）。不同类型的 worker 都有从接口继承作用于对象，并且可以添加更多特定功能。
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : 表示一个专用 worker 的作用域，继承自{{domxref("WorkerGlobalScope")}}，且可添加一些特有的功能。
- {{domxref("SharedWorkerGlobalScope")}}
  - : 表示一个共享 worker 的作用域，继承自{{domxref("WorkerGlobalScope")}}，且可添加一些特有的功能。
- {{domxref("WorkerNavigator")}}
  - : 表示用户代理（客户端）的身份和状态。

## 示例

我们创建了几个简单的 demos 以演示基本用法：

- [基本的 dedicated worker 示例](https://github.com/mdn/simple-web-worker) ([运行 dedicated worker](http://mdn.github.io/simple-web-worker/)).
- [基本的 shared worker 示例](https://github.com/mdn/simple-shared-worker) ([运行 shared worker](http://mdn.github.io/simple-shared-worker/)).

你可以在[使用 web workers](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)中找到有关这些 demos 是如何工作的更多信息。

## 规范

{{Specifications}}

## 相关链接

- [Using Web Workers](/zh-CN/docs/Web/API/Web_Workers_API/basic_usage)
- [Worker Interface](/zh-CN/docs/Web/API/Worker)
- [SharedWorker interface](/zh-CN/docs/Web/API/SharedWorker)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [Functions and classes available to workers](/zh-CN/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/zh-CN/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples)
- [ChromeWorker](/zh-CN/docs/Web/API/ChromeWorker): for using workers in privileged/chrome code
