---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

Интерфейс `ServiceWorkerRegistration` ссылается на регистрацию Service Worker. Вы можете зарегистрировать Service Worker, чтобы контролировать одну или несколько страниц на одном домене.

The lifetime of a service worker registration is beyond that of the `ServiceWorkerRegistration` objects that represent them within the lifetime of their corresponding service worker clients. The browser maintains a persistent list of active `ServiceWorkerRegistration` objects.

> **Примечание:** Эта функция доступна в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Свойства

_Also implements properties from its parent interface,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.scope")}} {{readonlyinline}}
  - : Returns a unique identifier for a service worker registration. This must be on the same origin as the document that registers the {{domxref("ServiceWorker")}}.
- {{domxref("ServiceWorkerRegistration.installing")}} **{{readonlyinline}}**
  - : Returns a service worker whose state is `installing`. This is initially set to `null`.
- {{domxref("ServiceWorkerRegistration.waiting")}} **{{readonlyinline}}**
  - : Returns a service worker whose state is `waiting`. This is initially set to `null`.
- {{domxref("ServiceWorkerRegistration.active")}} **{{readonlyinline}}**
  - : Returns a service worker whose state is either `activating` or `activated`. This is initially set to `null`. An active worker will control a {{domxref("ServiceWorkerClient")}} if the client's URL falls within the scope of the registration (the `scope` option set when {{domxref("ServiceWorkerContainer.register")}} is first called.)
- {{domxref("ServiceWorkerRegistration.navigationPreload")}} {{readonlyinline}}
  - : Returns the instance of {{domxref("NavigationPreloadManager")}} associated with the current service worker registration.
- {{domxref("serviceWorkerRegistration.periodicSync")}} {{non-standard_inline}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PeriodicSyncManager")}} interface, which manages periodic background synchronization processes.
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status.
- {{domxref("ServiceWorkerRegistration.sync")}} **{{non-standard_inline}}** {{readonlyinline}}
  - : Returns a reference to the {{domxref("SyncManager")}} interface, which manages background synchronization processes.

### Event handlers

- {{domxref("ServiceWorkerRegistration.onupdatefound")}} {{readonlyinline}}
  - : An [`EventListener`](/ru/docs/Web/API/EventListener) property called whenever an event of type `updatefound` is fired; it is fired any time the {{domxref("ServiceWorkerRegistration.installing")}} property acquires a new service worker.

## Методы

_Also implements methods from its parent interface,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of {{domxref("Notification")}} objects.
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : Displays the notification with the requested title.
- {{domxref("ServiceWorkerRegistration.update()")}}
  - : Checks the server for an updated version of the service worker without consulting caches.
- {{domxref("ServiceWorkerRegistration.unregister()")}}
  - : Unregisters the service worker registration and returns a {{jsxref("Promise")}}. The service worker will finish any ongoing operations before it is unregistered.

## Примеры

In this example, the code first checks whether the browser supports service workers and if so registers one. Next, it adds and `updatefound` event in which it uses the service worker registration to listen for further changes to the service worker's state. If the service worker hasn't changed since the last time it was registered, than the `updatefound` event will not be fired.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      registration.addEventListener("updatefound", function () {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        var installingWorker = registration.installing;
        console.log(
          "A new service worker is being installed:",
          installingWorker,
        );

        // You can listen for changes to the installing service worker's
        // state via installingWorker.onstatechange
      });
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
} else {
  console.log("Service workers are not supported.");
}
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- [Использование Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/ru/docs/Web/Guide/Performance/Using_web_workers)
