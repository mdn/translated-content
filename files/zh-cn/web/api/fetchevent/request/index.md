---
title: FetchEvent.request
slug: Web/API/FetchEvent/request
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} 接口的只读属性 **`request`** 返回触发事件处理程序的 {{domxref("Request")}}。

这个属性是非空的（自从 Firefox 46 版本开始）。如果一个请求不是由其他方式提供的，构造函数的 `options` 对象必须包含一个请求（request）（参见 {{domxref("FetchEvent.FetchEvent", "FetchEvent()")}}）。

## 值

一个 {{domxref("Request")}} 对象。

## 示例

来自 [service worker fetch 示例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)的代码片段（[fetch 示例的在线演示](https://googlechrome.github.io/samples/service-worker/prefetch/)）。{{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} 事件处理程序监听 `fetch` 事件。当被触发时，将最终会传递给受控页面的 promise 传递给 {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}。该 promise 会用 {{domxref("Cache")}} 中第一个匹配的 URL 请求来兑现。如果没有匹配，代码将从网络获取响应。

该代码还会处理 {{domxref("fetch()")}} 操作抛出的异常。注意，HTTP 错误响应（例如 404）不会抛出异常。它将返回一个拥有适当错误代码集的正常的响应对象。

```js
self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request)
        .then((response) => {
          console.log("Response from network is:", response);

          return response;
        })
        .catch((error) => {
          console.error("Fetching failed:", error);

          throw error;
        });
    }),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基础代码示例](https://github.com/mdn/dom-examples/tree/master/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
