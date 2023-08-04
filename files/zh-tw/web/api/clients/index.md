---
title: Clients
slug: Web/API/Clients
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

The `Clients` interface of the [Service Workers API](/zh-TW/docs/Web/API/Service_Worker_API) represents a container for a list of {{domxref("Client")}} objects.

## Methods

- {{domxref("Clients.get()")}}
  - : Gets a service worker client matching a given `id` and returns it in a {{jsxref("Promise")}}.
- {{domxref("Clients.matchAll()")}}
  - : Gets a list of service worker clients and returns them in a {{jsxref("Promise")}}. Include the `options` parameter to return all service worker clients whose origin is the same as the associated service worker's origin. If `options` are not included, the method returns only the service worker clients controlled by the service worker.
- {{domxref("Clients.openWindow()")}}
  - : Opens a service worker {{domxref("Client")}} in a new browser window.
- {{domxref("Clients.claim()")}}
  - : Allows an active Service Worker to set itself as the active worker for a client page when the worker and the page are in the same scope.

## Examples

```js
clients.matchAll(options).then(function (clients) {
  for (i = 0; i < clients.length; i++) {
    if (clients[i] === "index.html") {
      clients.openWindow(clients[i]);
      // or do something else involving the matching client
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/zh-TW/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-TW/docs/Web/Guide/Performance/Using_web_workers)
