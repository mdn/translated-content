---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** are a mechanism by which a script operation can be made to run in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.

## Web Workers concepts and usage

A worker is an object created using `a` constructor (e.g. {{domxref("Worker.Worker", "Worker()")}}) that runs a named JavaScript file — this file contains the code that will run in the worker thread; workers run in another global context that is different from the current {{domxref("window")}}. This context is represented by a {{domxref("DedicatedWorkerGlobalScope")}} object in the case of dedicated workers (standard workers that are utilized by a single script; shared workers use {{domxref("SharedWorkerGlobalScope")}}).

You can run whatever code you like inside the worker thread, with some exceptions. For example, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the {{domxref("window")}} object. But you can use a large number of items available under `window`, including [WebSockets](/zh-TW/docs/WebSockets), and data storage mechanisms like [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API) and the Firefox OS-only [Data Store API](/zh-TW/docs/Web/API/Data_Store_API). See [Functions and classes available to workers](/zh-TW/docs/Web/API/Worker/Functions_and_classes_available_to_workers) for more details.

Data is sent between workers and the main thread via a system of messages — both sides send their messages using the `postMessage()` method, and respond to messages via the `onmessage` event handler (the message is contained within the {{domxref("Worker/message_event", "message")}} event's data attribute.) The data is copied rather than shared.

Workers may in turn spawn new workers, as long as those workers are hosted within the same origin as the parent page. In addition, workers may use [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) for network I/O, with the exception that the `responseXML` and `channel` attributes on `XMLHttpRequest` always return `null`.

In addition to dedicated workers, there are other types of worker:

- Shared workers are workers that can be utilized by multiple scripts running in different windows, IFrames, etc., as long as they are in the same domain as the worker. They are a little more complex than dedicated workers — scripts must communicate via an active port. See {{domxref("SharedWorker")}} for more details.
- [ServiceWorkers](/zh-TW/docs/Web/API/ServiceWorker_API) essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.
- Chrome Workers are a Firefox-only type of worker that you can use if you are developing add-ons and want to use workers in extensions and have access to [js-ctypes](/zh-TW/js-ctypes) in your worker. See {{domxref("ChromeWorker")}} for more details.
- [Audio Workers](/zh-TW/docs/Web/API/Web_Audio_API#Audio_Workers) provide the ability for direct scripted audio processing to be done inside a web worker context.

> **備註：** As per the [Web workers Spec](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2), worker error events should not bubble (see [Firefox bug 1188141](https://bugzil.la/1188141). This has been implemented in Firefox 42.

## Web Worker interfaces

- {{domxref("AbstractWorker")}}
  - : Abstracts properties and methods common to all kind of workers (i.e. {{domxref("Worker")}} or {{domxref("SharedWorker")}}).
- {{domxref("Worker")}}
  - : Represents a running worker thread, allowing you to pass messages to the running worker code.
- {{domxref("SharedWorker")}}
  - : Represents a specific kind of worker that can be _accessed_ from several browsing contexts, being several windows, iframes or even workers.
- {{domxref("WorkerGlobalScope")}}
  - : Represents the generic scope of any worker (doing the same job as {{domxref("Window")}} does for normal web content). Different types of worker have scope objects that inherit from this interface and add more specific features.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : Represents the scope of a dedicated worker, inheriting from {{domxref("WorkerGlobalScope")}} and adding some dedicated features.
- {{domxref("SharedWorkerGlobalScope")}}
  - : Represents the scope of a shared worker, inheriting from {{domxref("WorkerGlobalScope")}} and adding some dedicated features.
- {{domxref("WorkerNavigator")}}
  - : Represents the identity and state of the user agent (the client):

## Examples

We have created a couple of simple demos to show basic usage:

- [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).
- [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)).

You can find out more information on how these demos work in [Using web workers](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers).

## Specifications

{{Specifications}}

## See also

- [Using Web Workers](/zh-TW/docs/Web/API/Web_Workers_API/basic_usage)
- [Worker Interface](/zh-TW/docs/Web/API/Worker)
- [SharedWorker interface](/zh-TW/docs/Web/API/SharedWorker)
- [ServiceWorker API](/zh-TW/docs/Web/API/ServiceWorker_API)
- [Functions and classes available to workers](/zh-TW/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/zh-TW/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples)
- [ChromeWorker](/zh-TW/docs/Web/API/ChromeWorker): for using workers in privileged/chrome code
