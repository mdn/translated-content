---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
---

{{APIRef("Service Workers API")}}

[ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API) 的`ServiceWorkerGlobalScope` 接口，代表一个 service worker 的全局执行上下文。

开发者应该知道，ServiceWorker 的状态在结束/重启的循环中不是一直保持不变的，所以每个事件处理器应该设定一个默认的全局状态。

一旦成功地注册了 service worker，为了节省内存和处理器，它将在他的状态达到了空闲的时候被终止。一个在激活状态的 service worker 为了响应事件是可以自动重启的，就像这两个方法， {{domxref("ServiceWorkerGlobalScope.onfetch")}} 或者{{domxref("ServiceWorkerGlobalScope.onmessage")}}.

此外，在 service worker 中，同步请求是被禁止的 - 只有异步请求，如方法{{domxref("GlobalFetch.fetch", "fetch()")}} 才被允许。

该接口继承自 {{domxref("WorkerGlobalScope")}} 接口，以及其父类 {{domxref("EventTarget")}}, 因此继承属性来自 {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}.

{{InheritanceDiagram(700, 85, 20)}}

## 属性

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{readonlyinline}}
  - : Contains the {{domxref("Clients")}} object associated with the service worker.
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{readonlyinline}}
  - : Contains the {{domxref("ServiceWorkerRegistration")}} object that represents the service worker's registration.
- {{domxref("ServiceWorkerGlobalScope.caches")}} {{readonlyinline}}
  - : Contains the {{domxref("CacheStorage")}} object associated with the service worker.

## 事件

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active")}} worker.
- {{domxref("ServiceWorkerGlobalScope/contentdelete_event", "contentdelete")}} {{Experimental_Inline}}
  - : Occurs when an item is removed from the {{domxref("ContentIndex", "Content Index")}}.
- {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}
  - : Occurs when a {{domxref("fetch()")}} is called.
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.installing")}} worker.
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : Occurs when incoming messages are received. Controlled pages can use the {{domxref("MessagePort.postMessage()")}} method to send messages to service workers. The service worker can optionally send a response back via the {{domxref("MessagePort")}} exposed in [`event.data.port`](https://html.spec.whatwg.org/multipage/comms.html#messageport), corresponding to the controlled page.
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : Occurs when a user clicks on a displayed notification.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}}
  - : Occurs when a user closes a displayed notification.
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}
  - : Triggered when a call to {{domxref("SyncManager.register")}} is made from a service worker client page. The attempt to sync is made either immediately if the network is available or as soon as the network becomes available.
- {{domxref("ServiceWorkerGlobalScope/periodicsync_event", "periodicsync")}} {{Experimental_Inline}}
  - : Occurs at periodic intervals, which were specified when registering a {{domxref("PeriodicSyncManager")}}.
- {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}
  - : Occurs when a server push notification is received.
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}
  - : Occurs when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time).

## 方法

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : Allows the current service worker registration to progress from waiting to active state while service worker clients are using it.

`ServiceWorkerGlobalScope` implements {{domxref("WorkerGlobalScope")}} — which implements {{domxref("GlobalFetch")}}. Therefore it also has the following property available to it:

- {{domxref("GlobalFetch.fetch()")}}
  - : Starts the process of fetching a resource. This returns a promise that resolves to the {{domxref("Response")}} object representing the response to your request. This algorithm is the entry point for the fetch handling handed to the service worker context.

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
