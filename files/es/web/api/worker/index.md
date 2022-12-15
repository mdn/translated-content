---
title: Worker
slug: Web/API/Worker
---

{{APIRef("Web Workers API")}}

The **`Worker`** interface of the [Web Workers API](/es/docs/Web/API/Web_Workers_API) represents a background task that can be easily created and can send messages back to its creator. Creating a worker is as simple as calling the `Worker()` constructor and specifying a script to be run in the worker thread.

Workers may in turn spawn new workers as long as those workers are hosted within the same origin as the parent page (Note: nested workers are [currently not implemented in Blink](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5R3B4RN4GHU)). In addition workers may use [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) for network I/O, with the stipulation that the `responseXML` and `channel` attributes on `XMLHttpRequest` always return `null`.

Not [all interfaces and functions are available](/En/DOM/Worker/Functions_available_to_workers) to the script associated with a `Worker`.

In Firefox, if you want to use workers in extensions and would like to have access to [js-ctypes](/en/js-ctypes), you should use the {{ domxref("ChromeWorker") }} object instead.

## Properties

_Inherits properties from its parent, {{domxref("EventTarget")}}, and implements properties from {{domxref("AbstractWorker")}}._

### Event handlers

- {{domxref("AbstractWorker.onerror")}}
  - : An {{ domxref("EventListener") }} called whenever an {{domxref("ErrorEvent")}} of type `error` bubbles through to the worker. This is inherited from {{domxref("AbstractWorker")}}.
- {{domxref("Worker.onmessage")}}
  - : An {{ domxref("EventListener") }} called whenever a {{domxref("MessageEvent")}} of type `message` bubbles through the worker — i.e. when a message is sent to the parent document from the worker via {{domxref("DedicatedWorkerGlobalScope.postMessage")}}. The message is stored in the event's {{domxref("MessageEvent.data", "data")}} property.

## Constructors

- {{domxref("Worker.Worker", "Worker()")}}
  - : Creates a dedicated web worker that executes the script at the specified URL. Workers can also be constructed using [Blobs](/es/docs/Web/API/Blob).

## Methods

_Inherits methods from its parent, {{domxref("EventTarget")}}, and implements properties from {{domxref("AbstractWorker")}}._

- {{domxref("Worker.postMessage()")}}
  - : Sends a message — which can consist of `any` JavaScript object — to the worker's inner scope.
- {{domxref("Worker.terminate()")}}
  - : Immediately terminates the worker. This does not offer the worker an opportunity to finish its operations; it is simply stopped at once. ServiceWorker instances do not support this method.

## Example

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor and usage of the object:

```js
var myWorker = new Worker("worker.js");

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## Especificaciones

{{Specifications}}

## Browser compatibility

Support varies for different types of workers. See each worker type's page for specifics.

{{Compat("api.Worker")}}

## See also

- [Using web workers](/En/Using_web_workers)
- [Functions available to workers](/En/DOM/Worker/Functions_available_to_workers)
- Other kind of workers: {{ domxref("SharedWorker") }} and [ServiceWorker](/es/docs/Web/API/ServiceWorker_API).
- Non-standard, Gecko-specific workers: {{ domxref("ChromeWorker") }}, used by extensions.
