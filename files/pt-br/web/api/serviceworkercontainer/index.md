---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

O `ServiceWorkerContainer` é a interface de [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API) provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.

Most importantly, it exposes the {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} method used to register service workers, and the {{domxref("ServiceWorkerContainer.controller")}} property used to determine whether or not the current page is actively controlled.

## Properties

- {{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}
  - : Returns a {{domxref("ServiceWorker")}} object if its state is `activated` (the same object returned by {{domxref("ServiceWorkerRegistration.active")}}). This property returns `null` during a force-refresh request (_Shift_ + refresh) or if there is no active worker.
- {{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}
  - : Provides a way of delaying code execution until a service worker is active. It returns a {{jsxref("Promise")}} that will never reject, and which waits indefinitely until the {{domxref("ServiceWorkerRegistration")}} associated with the current page has an {{domxref("ServiceWorkerRegistration.active")}} worker. Once that condition is met, it resolves with the {{domxref("ServiceWorkerRegistration")}}.

### Event handlers

- {{domxref("ServiceWorkerContainer.oncontrollerchange")}}
  - : Fired whenever a {{Event("controllerchange")}} event occurs — when the document's associated {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active","active")}} worker.
- {{domxref("ServiceWorkerContainer.onerror")}}
  - : Fired whenever an {{Event("error")}} event occurs in the associated service workers.
- {{domxref("ServiceWorkerContainer.onmessage")}}
  - : Fired whenever a {{Event("message")}} event occurs — when incoming messages are received to the {{domxref("ServiceWorkerContainer")}} object (e.g. via a {{domxref("MessagePort.postMessage()")}} call.)

## Methods

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : Creates or updates a {{domxref("ServiceWorkerRegistration")}} for the given `scriptURL`.
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Gets a {{domxref("ServiceWorkerRegistration")}} object whose scope matches the provided document URL. If the method can't return a {{domxref("ServiceWorkerRegistration")}}, it returns a [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Returns all {{domxref("ServiceWorkerRegistration")}} objects associated with a `ServiceWorkerContainer` in an array. If the method can't return {{domxref("ServiceWorkerRegistration")}} objects, it returns a [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Examples

The example below first checks to see if the browser supports service workers. If supported, the code registers the service worker and determines if the page is actively controlled by the service worker. If it isn't, it prompts the user to reload the page so the service worker can take control. The code also reports any registration failures.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log("Service worker registration succeeded:", registration);

      // At this point, you can optionally do something
      // with registration. See https://developer.mozilla.org/pt-BR/docs/Web/API/ServiceWorkerRegistration
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });

  // Independent of the registration, let's also display
  // information about whether the current page is controlled
  // by an existing service worker, and when that
  // controller changes.

  // First, do a one-off check if there's currently a
  // service worker in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "This page is currently controlled by:",
      navigator.serviceWorker.controller,
    );
  }

  // Then, register a handler to detect when a new or
  // updated service worker takes control.
  navigation.serviceWorker.oncontrollerchange = function () {
    console.log(
      "This page is now controlled by:",
      navigator.serviceWorker.controller,
    );
  };
} else {
  console.log("Service workers are not supported.");
}
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
