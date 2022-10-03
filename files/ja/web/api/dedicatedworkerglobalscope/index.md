---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

The **`DedicatedWorkerGlobalScope`** object (the {{domxref("Worker")}} global scope) is accessible through the {{domxref("window.self","self")}} keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the [JavaScript Reference](/ja/docs/Web/JavaScript/Reference). See also: [Functions available to workers](/ja/docs/Web/Guide/Needs_categorization/Functions_available_to_workers).

## プロパティ

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements properties from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

### WorkerGlobalScope から継承したプロパティ

- {{domxref("WorkerGlobalScope.self")}}
  - : Returns an object reference to the `DedicatedWorkerGlobalScope` object itself.
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}}
  - : Returns the {{domxref("Console")}} associated with the worker.
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. `WorkerLocation` is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. `WorkerNavigator` is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.

### イベントハンドラ

_This interface inherits event handlers from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements event handlers from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("DedicatedWorkerGlobalScope.onmessage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("message")}} event is raised. These events are of type {{domxref("MessageEvent")}} and will be called when the worker receives a message from the document that started it (i.e. from the {{domxref("Worker.postMessage")}} method.)

## メソッド

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements methods from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("DedicatedWorkerGlobalScope.postMessage")}}
  - : Sends a message — which can consist of `any` JavaScript object — to the parent document that first spawned the worker.

### WorkerGlobalScope から継承したもの

- {{domxref("WorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `WorkerGlobalScope`'s event loop, effectively closing this particular scope.
- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`

### 他の場所で実装されているもの

- {{domxref("WindowBase64.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("WindowBase64.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("WindowTimers.setInterval()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("WindowTimers.setTimeout()")}}.
- {{domxref("WindowTimers.setInterval()")}}
  - : Schedules the execution of a function every X milliseconds.
- {{domxref("WindowTimers.setTimeout()")}}
  - : Sets a delay for executing a function.

## 仕様

| Specification                                                                                                        | Status                           | Comment                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dedicatedworkerglobalscope', 'DedicatedWorkerGlobalScope')}} | {{Spec2('HTML WHATWG')}} | No change from {{SpecName("Web Workers")}}. |
| {{SpecName('Web Workers', '#dedicatedworkerglobalscope', 'DedicatedWorkerGlobalScope')}} | {{Spec2('Web Workers')}} | Initial definition.                                  |

## ブラウザ互換性

{{Compat("api.DedicatedWorkerGlobalScope")}}

## 関連項目

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [Web worker を使用する](/ja/docs/Web/Guide/Performance/Using_web_workers)
- [Web Worker が使用できる関数とクラス](/ja/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)
