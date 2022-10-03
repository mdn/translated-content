---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
---

{{APIRef("Web Workers API")}}

[Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API) 的 **`WorkerGlobalScope`** 接口 是一个代表了任何 scope of worker 的接口。Workers 没有浏览内容；这个 scope 包含的信息总是通过 {{domxref("Window")}} objects 传递 — 比如 event handlers, the console or the associated {{domxref("WorkerNavigator")}} object。每个 `WorkerGlobalScope` 都有自己的事件循环。

每个 worker type 都有专门的这个接口：{{domxref("DedicatedWorkerGlobalScope")}} for dedicated workers, {{domxref("SharedWorkerGlobalScope")}} for shared workers, and {{domxref("ServiceWorkerGlobalScope")}} for [ServiceWorker](/zh-CN/docs/Web/API/ServiceWorker_API). `self` 属性返回每个内容的专门 scope.

## Properties

_This interface inherits properties from the {{domxref("EventTarget")}} interface and implements properties from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

### Standard properties

- {{domxref("WorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables [service worker](/zh-CN/docs/Web/API/ServiceWorker_API) functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. It is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.self")}} {{readOnlyinline}}
  - : Returns a reference to the `WorkerGlobalScope` itself. Most of the time it is a specific scope like {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}} or {{domxref("ServiceWorkerGlobalScope")}}.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. It is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.

### Non-standard properties

- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}}
  - : Returns the {{domxref("Performance")}} associated with the worker. It is a regular performance object, except that only a subset of its property and methods are available to workers.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Returns the {{domxref("Console")}} associated with the worker.

### Event Handlers

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface and implements event handlers from {{domxref("WindowTimers")}}, and {{domxref("WindowBase64")}}._

- {{domxref("WorkerGlobalScope.onerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("error")}} event is raised.
- {{domxref("WorkerGlobalScope.onoffline")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("offline")}} event is raised.
- {{domxref("WorkerGlobalScope.ononline")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("online")}} event is raised.
- {{domxref("WorkerGlobalScope.onlanguagechange")}}
  - : An {{event("Event_handlers", "event handler")}} fired at the global/worker scope object when the user's preferred languages change.
- {{domxref("WorkerGlobalScope.onclose")}} {{non-standard_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("close")}} event is raised.
- {{domxref("WorkerGlobalScope.onrejectionhandled")}} {{non-standard_inline}}
  - : An event handler for handled [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) rejection events.
- {{domxref("WorkerGlobalScope.onunhandledrejection")}} {{non-standard_inline}}
  - : An event handler for unhandled [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) rejection events.

## Methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface and implements methods from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, {{domxref("WindowEventHandlers")}}, and {{domxref("GlobalFetch")}}._

### Standard methods

- {{domxref("WorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `WorkerGlobalScope`'s event loop, effectively closing this particular scope.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`

### Non-standard methods

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.

### Methods implemented from elsewhere

- {{domxref("WindowBase64.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("WindowBase64.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("WindowTimers.setInterval()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("WindowTimers.setTimeout()")}}.
- {{domxref("ImageBitmapFactories.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{domxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}.
- {{domxref("GlobalFetch.fetch()")}}
  - : Starts the process of fetching a resource.
- {{domxref("WindowTimers.setInterval()")}}
  - : Schedules the execution of a function each X milliseconds.
- {{domxref("WindowTimers.setTimeout()")}}
  - : Sets a delay for executing a function.

## Example

You won't access `WorkerGlobalScope` directly in your code; however, its properties and methods are inherited by more specific global scopes such as {{domxref("DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope")}}. For example, you could import another script into the worker and print out the contents of the worker scope's `navigator` object using the following two lines:

```js
importScripts('foo.js');
console.log(navigator);
```

> **备注：** Since the global scope of the worker script is effectively the global scope of the worker you are running ({{domxref("DedicatedWorkerGlobalScope")}} or whatever) and all worker global scopes inherit methods, properties, etc. from `WorkerGlobalScope`, you can run lines such as those above without specifying a parent object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other global object interface: {{domxref("Window")}}, {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, , {{domxref("ServiceWorkerGlobalScope")}}
- Other Worker-related interfaces: {{domxref("Worker")}}, {{domxref("WorkerLocation")}}, {{domxref("WorkerGlobalScope")}}, and {{domxref("ServiceWorkerGlobalScope")}}.
- [Using web workers.](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
