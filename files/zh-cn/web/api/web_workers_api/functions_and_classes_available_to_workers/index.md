---
title: Web Workers 可以使用的函数和类
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
---

{{DefaultAPISidebar("Web Workers API")}}

除了标准的 [JavaScript](/zh-CN/docs/Web/JavaScript) 函数集（例如 {{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("Object")}}、{{jsxref("JSON")}} 等）DOM 中的许多函数都可在 worker 中使用。本文列出了这些函数。

## Worker 上下文和函数

**Worker 在另一个全局上下文中运行，与当前的 window 不同！**{{domxref("Window")}} 并不直接在 worker 中可用，其中的很多方法都通过共享的混入（`WindowOrWorkerGlobalScope`）定义，并通过 worker 派生的 {{domxref("WorkerGlobalScope")}} 上下文提供这些方法：

- {{domxref("DedicatedWorkerGlobalScope")}} 用于专用 worker
- {{domxref("SharedWorkerGlobalScope")}} 用于共享 worker
- {{domxref("ServiceWorkerGlobalScope")}} 用于 [service worker](/zh-CN/docs/Web/API/Service_Worker_API)

一些函数在所有的 worker 和主线程中均可用（来自 `WindowOrWorkerGlobalScope`）：

- {{domxref("atob", "atob()")}}
- {{domxref("btoa", "btoa()")}}
- {{domxref("clearInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}
- {{domxref("queueMicrotask()")}}
- {{domxref("setInterval()")}}
- {{domxref("setTimeout()")}}
- {{domxref("structuredClone()")}}
- {{domxref("window.requestAnimationFrame")}}（仅专用 worker）
- {{domxref("window.cancelAnimationFrame")}}（仅专用 worker）

以下函数**仅**在 worker 中可用：

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}}（所有的 worker）
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}（仅专用 worker）

## Worker 中可用的 Web API

> **备注：** 如果列出的 API 被某一平台的特定版本所支持，那么一般可以认为它在 web worker 中是可用的。你也可以使用网站来测试对某个特定对象/函数的支持：<https://worker-playground.glitch.me/>

以下 Web API 在 worker 中可用：

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

## 参见

- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
