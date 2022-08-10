---
title: FetchEvent
slug: Web/API/FetchEvent
translation_of: Web/API/FetchEvent
---
{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

使用`ServiceWorker`技术时，页面的提取动作会在 ServiceWorker 作用域 (`ServiceWorkerGlobalScope`) 中触发 fetch 事件。

使用 {{domxref("ServiceWorkerGlobalScope.onfetch")}}或 addEventListener 监听。
该事件回调会注入`FetchEvent`参数。它携带了有关请求和结果响应的信息以及方法{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} ,允许我们向受控页面提供任意响应。

## 构造函数

- {{domxref("FetchEvent.FetchEvent()")}}
  - : Creates a new `FetchEvent` object.

## 属性

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("FetchEvent.isReload")}} {{readonlyInline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the event was dispatched with the user's intention for the page to reload, and `false` otherwise. Typically, pressing the refresh button in a browser is a reload, while clicking a link and pressing the back button is not.
- {{domxref("FetchEvent.request")}} {{readonlyInline}}
  - : Returns the {{domxref("Request")}} that triggered the event handler.
- {{domxref("FetchEvent.clientId")}} {{readonlyInline}}
  - : Returns the id of the client that the current service worker is controlling.

### Deprecated properties

- {{domxref("FetchEvent.client")}} {{readonlyInline}}
  - : Returns the {{domxref("Client")}} that the current service worker is controlling.

## 方法

_Inherits methods from its parent,_ _{{domxref("ExtendableEvent")}}_.

- {{domxref("FetchEvent.respondWith()")}}
  - : Resolves by returning a {{domxref("Response")}} or a [network error](http://fetch.spec.whatwg.org/#concept-network-error) to [`Fetch`](http://fetch.spec.whatwg.org/#concept-fetch).
- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : Extends the lifetime of the event. It is intended to be called in the {{event("install")}} {{event("Event_handlers", "event handler")}} for the {{domxref("ServiceWorkerRegistration.installing", "installing")}} worker and on the {{event("active")}} {{event("Event_handlers", "event handler")}} for the {{domxref("ServiceWorkerRegistration.active", "active")}} worker.

## 示例

This code snippet is from the [service worker fetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([run the fetch sample live](https://googlechrome.github.io/samples/service-worker/prefetch/)). In an earlier part of the code, an {{domxref("InstallEvent")}} controls caching of a number of resources. The {{domxref("ServiceWorkerGlobalScope.onfetch")}} event handler then listens for the {{event("fetch")}} event. When fired, {{domxref("FetchEvent.respondWith()")}} returns a promise back to the controlled page. This promise resolves to the first matching URL request in the {{domxref("Cache")}} object. If no match is found (i.e. that resource wasn't cached in the install phase), the code fetches a response from the network.

The code also handles exceptions thrown from the {{domxref("ServiceWorkerGlobalScope.fetch()")}} operation. Note that a HTTP error response (e.g., 404) doesn't trigger an exception. It returns a normal response object that has the appropriate error code set.

```js
self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }
      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.FetchEvent")}}

## 请参见

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
