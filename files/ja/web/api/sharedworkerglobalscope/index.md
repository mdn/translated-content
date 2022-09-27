---
title: SharedWorkerGlobalScope
slug: Web/API/SharedWorkerGlobalScope
---

{{APIRef("Web Workers API")}}

**`SharedWorkerGlobalScope`** オブジェクト ( {{domxref("SharedWorker")}} グローバルスコープ) は、 {{domxref("window.self","self")}} キーワードでアクセスできます。一部の追加のグローバル関数、名前空間オブジェクト、コンストラクターは、通常はワーカーのグローバルスコープに関連付けられていませんが、利用することができ、 [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)に列挙されています。[ワーカーで利用できる機能](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)の完全なリストを参照してください。

## プロパティ

_このインターフェイスは {{domxref("WorkerGlobalScope")}}、またその親の {{domxref("EventTarget")}} インターフェイスからプロパティを継承しており、したがって {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, {{domxref("WindowEventHandlers")}} のプロパティを実装しています。_

- {{domxref("SharedWorkerGlobalScope.name")}} {{readOnlyinline}}
  - : The name that the {{domxref("SharedWorker")}} was (optionally) given when it was created using the {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructor. This is mainly useful for debugging purposes.
- {{domxref("SharedWorkerGlobalScope.applicationCache")}} {{readOnlyinline}} {{deprecated_inline}}
  - : This property returns the {{domxref("ApplicationCache")}} object for the worker (see [Using the application cache](/ja/docs/Web/HTML/Using_the_application_cache)).

### WorkerGlobalScope から継承しているプロパティ

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

### イベントハンドラー

_This interface inherits event handlers from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements event handlers from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("SharedWorkerGlobalScope.onconnect")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("connect")}} event is raised — that is, when a {{domxref("MessagePort")}} connection is opened between the associated {{domxref("SharedWorker")}} and the main thread.

## メソッド

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements methods from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("SharedWorkerGlobalScope.close()")}}
  - : Discards any tasks queued in the `SharedWorkerGlobalScope`'s event loop, effectively closing this particular scope.

### WorkerGlobalScope から継承したもの

- {{domxref("WorkerGlobalScope.close()")}} {{deprecated_inline}}
  - : Discards any tasks queued in the `WorkerGlobalScope`'s event loop, effectively closing this particular scope.
- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : Allows you to write a message to stdout — i.e. in your terminal. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`

### 他の場所から実装したもの

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

## イベント

Listen to this event using [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`connect`](/ja/docs/Web/API/SharedWorkerGlobalScope/connect_event)
  - : Fired on shared workers when a new client connects.
    Also available via the [`onconnect`](/ja/docs/Web/API/SharedWorkerGlobalScope/onconnect) property.

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#sharedworkerglobalscope', 'SharedWorkerGlobalScope')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("api.SharedWorkerGlobalScope")}}

## 関連情報

- {{domxref("SharedWorker")}}
- {{domxref("WorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [ワーカーで使用できる関数](/ja/docs/Web/Guide/Needs_categorization/Functions_available_to_workers)
