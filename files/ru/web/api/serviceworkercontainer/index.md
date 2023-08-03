---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

[ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API) предоставляет интерфейс `ServiceWorkerContainer`, являющийся объектом (объект представляет собой сервис воркер, как единое целое в сетевой экосистеме) включающим следующие средства:
Регистрация;
Отмена регистрации;
Обновление сервис воркеров;
Доступ к состоянию сервис воркеров;
Доступ к регистрации сервис воркеров.

Most importantly, it exposes the {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register(scriptURL, scope[, base])")}} method used to register service workers, and the {{domxref("ServiceWorkerContainer.controller")}} property used to determine whether or not the current page is actively controlled.

## Properties

- {{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}
  - : Returns a {{domxref("ServiceWorker")}} object if its state is `activated` (the same object returned by {{domxref("ServiceWorkerRegistration.active")}}). This property returns `null` if the request is a force refresh (_Shift_ + refresh) or if there is no active worker.

<!---->

- {{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}
  - : Defines whether a service worker is ready to control a page or not. It returns a {{jsxref("Promise")}} that will never reject, which resolves to a {{domxref("ServiceWorkerRegistration")}} with an {{domxref("ServiceWorkerRegistration.active")}} worker.

### Event handlers

- {{domxref("ServiceWorkerContainer.oncontrollerchange")}}
  - : An event handler fired whenever a {{Event("controllerchange")}} event occurs — when the document's associated {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active")}} worker.
- {{domxref("ServiceWorkerContainer.onerror")}}
  - : An event handler fired whenever an {{Event("error")}} event occurs in the associated service workers.
- {{domxref("ServiceWorkerContainer.onmessage")}}
  - : An event handler fired whenever a {{Event("message")}} event occurs — when incoming messages are received to the {{domxref("ServiceWorkerContainer")}} object (e.g. via a {{domxref("MessagePort.postMessage()")}} call.)

## Methods

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : Creates or updates a {{domxref("ServiceWorkerRegistration")}} for the given `scriptURL`.
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Gets a {{domxref("ServiceWorkerRegistration")}} object whose scope URL matches the provided document URL. If the method can't return a {{domxref("ServiceWorkerRegistration")}}, it returns a [`Promise`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Returns all {{domxref("ServiceWorkerRegistration")}}s associated with a `ServiceWorkerContainer` in an array. If the method can't return {{domxref("ServiceWorkerRegistration")}}s, it returns a [`Promise`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Examples

This code snippet is from the [service worker fallback-response sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/fallback-response/index.html#L126) (see [fallback-response live](http://googlechrome.github.io/samples/service-worker/fallback-response/)). The code checks to see if the browser supports service workers. Then the code registers the service worker and determines if the page is actively controlled by the service worker. If it isn't, it prompts the user to reload the page so the service worker can take control. The code also reports any registration failures.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", { scope: "./" })
    .then(function () {
      if (navigator.serviceWorker.controller) {
        document.querySelector("#status").textContent =
          "The service worker is currently handling network operations.";
        showRequestButtons();
      } else {
        document.querySelector("#status").textContent =
          "Please reload this page to allow the service worker to handle network operations.";
      }
    })
    .catch(function (error) {
      document.querySelector("#status").textContent = error;
    });
} else {
  var aElement = document.createElement("a");
  aElement.href =
    "http://www.chromium.org/blink/serviceworker/service-worker-faq";
  aElement.textContent = "unavailable";
  document.querySelector("#status").appendChild(aElement);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ru/docs/Web/Guide/Performance/Using_web_workers)
