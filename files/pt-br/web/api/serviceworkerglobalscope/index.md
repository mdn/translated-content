---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

The `ServiceWorkerGlobalScope` interface of the [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API) represents the global execution context of a service worker.

Developers should keep in mind that the ServiceWorker state is not persisted across the termination/restart cycle, so each event handler should assume it's being invoked with a bare, default global state.

Once successfully registered, a service worker can and will be terminated when idle to conserve memory and processor power. An active service worker is automatically restarted to respond to events, such as {{domxref("ServiceWorkerGlobalScope.onfetch")}} or {{domxref("ServiceWorkerGlobalScope.onmessage")}}.

Additionally, synchronous requests are not allowed from within a service worker — only asynchronous requests, like those initiated via the {{domxref("GlobalFetch.fetch", "fetch()")}} method, can be used.

This interface inherits from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}, and therefore implements properties from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}.

{{InheritanceDiagram(700, 85, 20)}}

## Properties

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{readonlyinline}}
  - : Contains the {{domxref("Clients")}} object associated with the service worker.
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{readonlyinline}}
  - : Contains the {{domxref("ServiceWorkerRegistration")}} object that represents the service worker's registration.
- {{domxref("ServiceWorkerGlobalScope.caches")}} {{readonlyinline}}
  - : Contains the {{domxref("CacheStorage")}} object associated with the service worker.

## Events

- [`activate`](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active")}} worker.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onactivate")}} property.
- `fetch`
  - : Occurs when a {{domxref("GlobalFetch.fetch", "fetch()")}} is called.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onfetch")}} property.
- [`install`](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.installing")}} worker.
    Also available via the {{domxref("ServiceWorkerGlobalScope.oninstall")}} property.
- [`message`](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - : Occurs when incoming messages are received. Controlled pages can use the {{domxref("MessagePort.postMessage()")}} method to send messages to service workers. The service worker can optionally send a response back via the {{domxref("MessagePort")}} exposed in [`event.data.port`](https://html.spec.whatwg.org/multipage/comms.html#messageport), corresponding to the controlled page.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onmessage")}} property.
- [`notificationclick`](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - : Occurs when a user clicks on a displayed notification.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} property.
- `notificationclose`
  - : Occurs — when a user closes a displayed notification.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onnotificationclose")}} property.
- [`push`](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Occurs when a server push notification is received.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onpush")}} property.
- [`pushsubscriptionchange`](/pt-BR/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Occurs when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time).
    Also available via the {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}} property.
- `sync`
  - : Triggered when a call to {{domxref("SyncManager.register")}} is made from a service worker client page. The attempt to sync is made either immediately if the network is available or as soon as the network becomes available.
    Also available via the {{domxref("ServiceWorkerGlobalScope.onsync")}} property.

## Methods

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : Allows the current service worker registration to progress from waiting to active state while service worker clients are using it.

`ServiceWorkerGlobalScope` implements {{domxref("WorkerGlobalScope")}} — which implements {{domxref("WindowOrWorkerGlobalScope")}}. Therefore it also has the following property available to it:

- {{domxref("GlobalFetch.fetch()")}}
  - : Starts the process of fetching a resource. This returns a promise that resolves to the {{domxref("Response")}} object representing the response to your request. This algorithm is the entry point for the fetch handling handed to the service worker context.

## Examples

This code snippet is from the [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (see [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/).) The {{domxref("ServiceWorkerGlobalScope.onfetch")}} event handler listens for the `fetch` event. When fired, the code returns a promise that resolves to the first matching request in the {{domxref("Cache")}} object. If no match is found, the code fetches a response from the network.

The code also handles exceptions thrown from the {{domxref("GlobalFetch.fetch", "fetch()")}} operation. Note that an HTTP error response (e.g., 404) will not trigger an exception. It will return a normal response object that has the appropriate error code set.

```js
self.addEventListener("fetch", function (event) {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network...");

      return fetch(event.request).then(
        function (response) {
          console.log("Response from network is:", response);

          return response;
        },
        function (error) {
          console.error("Fetching failed:", error);

          throw error;
        },
      );
    }),
  );
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Using Service Workers](/pt-BR/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/pt-BR/docs/Web/Guide/Performance/Using_web_workers)
