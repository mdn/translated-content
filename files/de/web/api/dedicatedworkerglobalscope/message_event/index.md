---
title: 'DedicatedWorkerGlobalScope: message event'
slug: Web/API/DedicatedWorkerGlobalScope/message_event
translation_of: Web/API/DedicatedWorkerGlobalScope/message_event
---
{{APIRef}}

Das `message`Ereignis wird auf ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)Objekt ausgelöst, wenn der Worker eine Nachricht von seinem übergeordneten Objekt empfängt (dh wenn der übergeordnete Benutzer eine Nachricht sendet mit [`Worker.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage)).

| Bubbles                | No                                                                      |
| ---------------------- | ----------------------------------------------------------------------- |
| Cancelable             | No                                                                      |
| Interface              | {{domxref("MessageEvent")}}                                    |
| Event handler property | [`onmessage`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage) |

## Examples

Dieser Code erstellt einen neuen Worker und sendet ihm eine Nachricht mit [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage):

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener('message', (event) => {
    console.log(`Received message from worker: ${event.data}`)
});
```

Der Worker kann auf diese Nachricht warten, indem er [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) verwendet:

```js
// inside static/scripts/worker.js

self.addEventListener('message', (event) => {
    console.log(`Received message from parent: ${event.data}`);
});
```

Alternativ könnte er es mit der [`onmessage`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage) Event-Handler-Eigenschaft abhören:

```js
// static/scripts/worker.js

self.onmessage = (event) => {
    console.log(`Received message from parent: ${event.data}`);
};
```

## Specifications

| Specification                                                                | Status                           |
| ---------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-message')}} | {{Spec2('HTML WHATWG')}} |

## Browser compatibility

{{Compat("api.DedicatedWorkerGlobalScope.message_event")}}

## See also

- Verwandte Ereignisse: [`messageerror`](/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event).
- [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage).
