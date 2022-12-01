---
title: Web Workers 可以使用的函数和类
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
---

{{DefaultAPISidebar("Web Workers API") }}

除了标准的 [JavaScript](/zh-CN/docs/Web/JavaScript) 函数集（例如 {{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("Object")}}、{{jsxref("JSON")}} 等）DOM 中的许多函数都可在 worker 中使用。本文列出了这些函数。

## Worker 上下文和函数

**Worker 在另一个全局上下文中运行，与当前的 window 不同！**{{domxref("Window")}} 并不直接在 worker 中可用，其中的很多方法都通过共享的混入（`WindowOrWorkerGlobalScope`）定义，并通过 worker 派生的 {{domxref("WorkerGlobalScope")}} 上下文提供这些方法：

- {{domxref("DedicatedWorkerGlobalScope")}}——专用 worker
- {{domxref("SharedWorkerGlobalScope")}}——共享 worker
- {{domxref("ServiceWorkerGlobalScope")}}——[service worker](/zh-CN/docs/Web/API/Service_Worker_API)

一些函数在所有的 worker 和主线程中均可用（来自 `WindowOrWorkerGlobalScope`）：{{domxref("atob", "atob()")}}、{{domxref("btoa", "btoa()")}}、{{domxref("clearInterval", "clearInterval()")}}、{{domxref("clearTimeout()")}}、{{domxref("Window.dump()", "dump()")}} {{non-standard_inline}}、{{domxref("setInterval()")}}、{{domxref("setTimeout()")}}。

以下函数**仅**在 worker 中可用：

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}}（所有的 worker）
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}（仅专用 worker）

## Worker 中可用的 Web API

> **备注：** 下面列出的 API 若仅被某一平台的特定版本支持，也假设其在 web worker 中可用。

以下 Web API 在 worker 中可用：{{domxref("Broadcast_Channel_API","Broadcast Channel API")}}、{{domxref("Cache", "Cache API")}}、{{domxref("Channel_Messaging_API", "Channel Messaging API")}}、{{domxref("Console API", "Console API")}}、{{domxref("Crypto")}}、{{domxref("CustomEvent")}}、{{domxref("Data_Store_API", "Data Store")}}（仅 Firefox）、`DOMRequest` 和 `DOMCursor`、{{domxref("Fetch_API", "Fetch")}}、{{domxref("FileReader")}}、{{domxref("FileReaderSync")}}（仅在 worker 中可用）、{{domxref("FormData")}}、{{domxref("ImageData")}}、{{domxref("IndexedDB_API", "IndexedDB")}}、[Network Information API](/zh-CN/docs/Web/API/Network_Information_API)、{{domxref("Notifications_API", "Notifications")}}、{{domxref("Performance")}}、{{domxref("PerformanceEntry")}}、{{domxref("PerformanceMeasure")}}、{{domxref("PerformanceMark")}}、{{domxref("PerformanceObserver")}}、{{domxref("PerformanceResourceTiming")}}、{{jsxref("Promise")}}、[Server-sent 事件](/zh-CN/docs/Web/API/Server-sent_events)、{{domxref("ServiceWorkerRegistration")}}、{{domxref("TextEncoder")}} 和 {{domxref("TextDecoder")}}、{{ domxref("URL") }}、[WebGL](/zh-CN/docs/Web/API/WebGL_API) 中的 {{domxref("OffscreenCanvas")}}（通过特性首选项 `gfx.offscreencanvas.enabled` 启用）、{{domxref("WebSocket")}}、{{domxref("XMLHttpRequest")}}（尽管 `responseXML` 和 `channel` 属性始终为 null）。

worker 也可以创建其它的 worker，所以以下的 API 也同样可用：{{domxref("Worker")}}、{{domxref("WorkerGlobalScope")}}、{{domxref("WorkerLocation")}}、{{domxref("WorkerNavigator")}}。

## 参见

- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
