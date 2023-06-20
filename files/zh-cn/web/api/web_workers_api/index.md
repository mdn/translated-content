---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

Web Workers 使得在一个独立于 Web 应用程序主执行线程的后台线程中运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，使主线程（通常是 UI 线程）的运行不会被阻塞/放慢。

## Web Worker 概念与用法

Worker 是一个使用构造函数创建的对象（例如 {{domxref("Worker.Worker", "Worker()")}}），它运行一个命名的 JavaScript 文件——该文件包含将在 worker 线程中运行的代码。

除了标准的 [JavaScript](/zh-CN/docs/Web/JavaScript) 函数集（如 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)、 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`Object`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)、[`JSON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) 等等 )，你可以在 worker 线程中运行任意的代码，但注意存在一些例外：你不能直接在 worker 线程中操作 DOM 元素；或使用 [`window`](/zh-CN/docs/Web/API/Window) 对象中的某些方法和属性。有关你可以运行的代码的信息，请参见下面的 [worker global context and functions](#worker_global_contexts_and_functions) 和 [supported web APIs](#supported_web_apis) 。

数据通过消息系统在 worker 和主线程之间发送——双方都使用 `postMessage()` 方法发送消息，并通过 `onmessage` 事件处理程序响应消息（消息包含在 {{domxref("Worker/message_event", "message")}} 事件的 `data` 属性中）。数据是复制的，而不是共享的。

worker 可以依次生成新的 worker，只要这些 worker 与父页面托管在同一个 {{glossary("origin")}} 中。此外，worker 可以通过 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest)  来访问网络，但 `XMLHttpRequest` 的 `responseXML` 和 `channel` 属性始终返回 `null`。

### Worker 类型

有许多不同类型的 worker：

- 专用 worker 是由一个脚本使用的工作器。这种情况由 {{DOMxRef("DedicatedWorkerGlobalScope")}} 对象来表示。
- {{DOMxRef("SharedWorker","Shared worker")}} 是可以由在不同窗口、IFrame等中运行的多个脚本使用的 worker ，只要它们与工作者在同一域中。它们比专用的 worker 稍微复杂一点——脚本必须通过活动端口进行通信。
- [Service Workers](/zh-CN/docs/Web/API/Service_Worker_API) 基本上是作为代理服务器，位于 web 应用程序、浏览器和网络（如果可用）之间。它们的目的是（除开其他方面）创建有效的离线体验，拦截网络请求，以及根据网络是否可用采取合适的行动并更新驻留在服务器上的资源。它们还将允许访问推送通知和后台同步 API。

> **备注：** 根据[web worker 规范](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2)，worker 错误事件不应该冒泡（参见 [Firefox bug 1188141](https://bugzil.la/1188141)）。该规范已在 Firefox 42 中实现。

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
