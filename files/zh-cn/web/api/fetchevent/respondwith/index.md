---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("FetchEvent")}} 接口的 **`respondWith()`** 方法旨在包裹代码，这些代码为来自受控页面的 request 生成自定义的 response。这些代码通过返回一个 {{domxref("Response")}} 、 [network error](http://fetch.spec.whatwg.org/#concept-network-error) 或者 `Fetch的方式`resolve。

有关跨域内容污染的渲染端安全检测与 {{domxref("Response")}} 体的透明度（或者不透明度）相关联，而不是 URL。如果 request 是一个顶级的导航，而返回值是一个类型属性不透明的 {{domxref("Response")}}（即不透明响应体），一个 [network error](https://fetch.spec.whatwg.org/#concept-network-error) 将被返回给 [`Fetch`](https://fetch.spec.whatwg.org/#concept-fetch)。所有成功（非网络错误）响应的最终 URL 是请求的 URL。

## 语法

```js
FetchEvent.respondWith(
  //Promise that resolves to a Response or a network error.
​)
```

### 返回值

Void.

### 参数

任何自定义的响应生成代码。

## 示例

该代码片段来自 [service worker fetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([run the fetch sample live](https://googlechrome.github.io/samples/service-worker/prefetch/))。 {{domxref("ServiceWorkerGlobalScope.onfetch")}} 事件处理程序侦听 {{event("fetch")}} 事件。当触发时，{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith(any value)")}} 返回一个 promise 给受控页面。该 promise 在 {{domxref("Cache")}} 对象中查询第一个匹配 URL 请求。如果没有发现匹配项，该代码将转而从网络获取响应。

该代码也处理从 {{domxref("ServiceWorkerGlobalScope.fetch")}} 操作中抛出的异常。请注意，HTTP 错误响应（例如 404）不会触发异常。它将返回具有相应错误代码集的正常响应对象。

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

{{Compat("api.FetchEvent.respondWith")}}

## 请参见

- [Using Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/Guide/Performance/Using_web_workers)
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
