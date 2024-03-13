---
title: FetchEvent
slug: Web/API/FetchEvent
---

{{APIRef("Service Workers API")}}

这是会在 {{domxref("ServiceWorkerGlobalScope", "service worker 全局作用域", "", 1)}}中触发 `fetch` 事件的事件类型。它包含关于 fetch 的信息，包括 request 和接收方如何处理响应。它提供 {{domxref("FetchEvent.respondWith", "event.respondWith()")}} 方法，允许我们为此 fetch 提供一个响应。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}
  - : 创建一个新的 `FetchEvent` 对象。这个构造函数不是很常用。浏览器自己会创建这些对象，并为它们提供 `fetch` 事件的回调。

## 属性

_从它的祖先 {{domxref("Event")}} 继承属性_。

- {{domxref("FetchEvent.clientId")}} {{ReadOnlyInline}}
  - : 发起 fetch 的同源{{domxref("Client", "客户端")}}的 {{domxref("Client.id", "id")}}。
- {{domxref("FetchEvent.preloadResponse")}} {{ReadOnlyInline}}
  - : 一个兑现为 {{domxref("Response")}} 的 {{jsxref("Promise")}}，如果该 fetch 没有导航或者 [navigation preload](/zh-CN/docs/Web/API/NavigationPreloadManager) 未启用，则是 `undefined`。
- {{domxref("FetchEvent.replacesClientId")}} {{ReadOnlyInline}}
  - : 页面导航期间正被替换的{{domxref("Client", "客户端")}}的 {{domxref("Client.id", "id")}}。
- {{domxref("FetchEvent.resultingClientId")}} {{ReadOnlyInline}}
  - : 页面导航期间用于替换的{{domxref("Client", "客户端")}}的 {{domxref("Client.id", "id")}}。
- {{domxref("FetchEvent.request")}} {{ReadOnlyInline}}
  - : 浏览器想要发送的 {{domxref("Request")}}。

## 方法

_从它的父元素 {{domxref("ExtendableEvent")}} 继承方法_。

- {{domxref("FetchEvent.respondWith()")}}
  - : 阻止浏览器的默认 fetch 操作，并且由你自己提供一个响应（可以是一个 promise）。
- {{domxref("ExtendableEvent.waitUntil()")}}
  - : 延长事件的生命周期。用于通知浏览器延长超出响应回复时间的任务，例如流和缓存。

## 示例

fetch 事件对非 GET 请求使用浏览器默认值。对于 GET 请求它试图在缓存中匹配，如果缓存中没有匹配，则回落到网络请求。如果在缓存中匹配成功，它将异步更新缓存，以供下次使用。

```js
self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== "GET") return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })(),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
