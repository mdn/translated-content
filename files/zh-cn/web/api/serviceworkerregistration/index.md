---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

The `ServiceWorkerRegistration` interface of the [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API) represents the service worker registration. You register a service worker to control one or more pages that share the same origin.

The lifetime of a service worker registration is beyond that of the `ServiceWorkerRegistration` objects that represent them within the lifetime of their corresponding service worker clients. The browser maintains a persistent list of active `ServiceWorkerRegistration` objects.

> **备注：** This feature is available in [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## Properties

_Also implements properties from its parent interface,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.scope")}} {{readonlyinline}}
  - : Returns a unique identifier for a service worker registration. This must be on the same origin as the document that registers the {{domxref("ServiceWorker")}}.
- {{domxref("ServiceWorkerRegistration.installing")}} **{{readonlyinline}}**
  - : Returns a service worker whose state is `installing`. This is initially set to `null`.
- {{domxref("ServiceWorkerRegistration.waiting")}} **{{readonlyinline}}**
  - : Returns a service worker whose state is `installed`. This is initially set to `null`.
- {{domxref("ServiceWorkerRegistration.active")}} **{{readonlyinline}}**
  - : Returns a service worker whose state is either `activating` or `activated`. This is initially set to `null`. An active worker will control a {{domxref("ServiceWorkerClient")}} if the client's URL falls within the scope of the registration (the `scope` option set when {{domxref("ServiceWorkerContainer.register")}} is first called.)
- {{domxref("serviceWorkerRegistration.periodicSync")}} {{non-standard_inline}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PeriodicSyncManager")}} interface, which manages periodic background synchronization processes.
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status.
- {{domxref("ServiceWorkerRegistration.sync")}} **{{non-standard_inline}}** {{readonlyinline}}
  - : Returns a reference to the {{domxref("SyncManager")}} interface, which manages background synchronization processes.

### Event handlers

- {{domxref("ServiceWorkerRegistration.onupdatefound")}} {{readonlyinline}}
  - : An [`EventListener`](/zh-CN/docs/Web/API/EventListener) property called whenever an event of type `updatefound` is fired; it is fired any time the {{domxref("ServiceWorkerRegistration.installing")}} property acquires a new service worker.

## Methods

_Also implements methods from its parent interface,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of {{domxref("Notification")}} objects.
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : Displays the notification with the requested title.
- {{domxref("ServiceWorkerRegistration.update()")}}
  - : Checks the server for an updated version of the service worker without consulting caches.
- {{domxref("ServiceWorkerRegistration.unregister()")}}
  - : Unregisters the service worker registration and returns a promise (see {{jsxref("Promise")}}). The service worker will finish any ongoing operations before it is unregistered.

## Examples

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code checks to see if the browser supports service workers and if there's currently a service worker handling requests on this page for the current navigation.

Any new service workers are registered; if there's an existing service worker, the code overrides its default scope so that the registration applies to the current directory and everything underneath it. The example also reports any registration failures.

```js
if ('serviceWorker' in navigator) {
  document.querySelector('#availability').innerText = 'are';
  document.querySelector('#controlled').innerText = navigator.serviceWorker.controller ? 'is' : 'is not';
  navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(function(registration) {
    document.querySelector('#register').textContent = 'succeeded';
  }).catch(function(error) {
    document.querySelector('#register').textContent = 'failed: ' + error;
  });
} else {
  document.querySelector('#availability').innerText = 'are not';
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
