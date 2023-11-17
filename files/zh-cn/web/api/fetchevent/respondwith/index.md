---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} 接口的 **`respondWith()`** 方法阻止浏览器默认的 fetch 操作，并且允许由你自己为 {{domxref("Response")}} 提供一个 promise。

在大多数情况下，你可以提供接收方理解的任何形式的响应。例如，如果是由 {{HTMLElement('img')}} 初始化的请求，起响应主体必须是图像数据。出于安全考虑，这里有一些全局的规则：

- 只有当 {{domxref("fetchEvent.request")}} 对象的 {{domxref("request.mode", "mode")}} 是“`no-cors`”，你才能返回 {{domxref("Response.type", "type")}} 为“`opaque`”的 {{domxref("Response")}} 对象。
- 只有当 {{domxref("fetchEvent.request")}} 对象的 {{domxref("request.mode", "mode")}} 是“`manual`”，你才能返回 {{domxref("Response.type","type")}} 为“`opaqueredirect`”的 {{domxref("Response")}} 对象。
- 如果 {{domxref("fetchEvent.request")}} 对象的 {{domxref("request.mode", "mode")}} 是“`same-origin`”，你无法返回 {{domxref("Response.type","type")}} 为“`cors`”的 {{domxref("Response")}} 对象。

### 指定资源的最终 URL

从 Firefox 59 开始，在 service worker 中向 {{domxref("FetchEvent.respondWith()")}} 提供 {{domxref("Response")}} 时，{{domxref("Response.url")}} 的值将作为最终解析的 URL 传输给被拦截的网络请求。如果 {{domxref("Response.url")}} 值是空的字符串，那么 {{domxref("Request.url","FetchEvent.request.url")}} 将被用作最终的 URL。

过去，在所有情况下，一直使用 {{domxref("Request.url","FetchEvent.request.url")}} 作为最终的 URL。提供的 {{domxref("Response.url")}} 实际上被忽略了。

例如，这意味着，如果 service worker 拦截了一个样式表或者 worker 脚本，那么提供的 {{domxref("Response.url")}} 将会用于解决任何与 {{cssxref("@import")}} 或 {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} 相关的子资源加载（[Firefox bug 1222008](https://bugzil.la/1222008)）。

对于大多数网络请求的类型，此变更是没有影响的，因为你不能察觉到最终的 URL。然而，在一些方面确实很重要：

- 如果 {{domxref("fetch()")}} 被拦截，那么你可以在结果的 {{domxref("Response.url")}} 观察最终的结果。
- 如果 [worker](/zh-CN/docs/Web/API/Web_Workers_API) 脚本被拦截，那么最终的 URL 将用于设置 [`self.location`](/zh-CN/docs/Web/API/WorkerGlobalScope/location) 并用作 worker 脚本相对 URL 的基本 URL。
- 如果样式表被拦截，那么最终 URL 被用作解决相对 {{cssxref("@import")}} 加载的基本 URL。

请注意 {{domxref("Window","Windows")}} 和 {{domxref("HTMLIFrameElement","iframes")}} 的导航请求不使用最终的 URL。HTML 规范处理导航重定向的方式是最终使用 {{domxref("Window.location")}} 生成的请求 URL。这意味着网站在离线时仍然可以提供一个“备用”的网页视图，而无需更改用户可见的 URL。

## 语法

```js-nolint
respondWith(response)
```

### 参数

- `response`
  - : 一个 {{domxref("Response")}} 或者 {{jsxref("Promise")}}（兑现为一个 `Response`）。否则，Fetch 返回一个网络错误。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `NetworkError` {{domxref("DOMException")}}
  - : 如果 {{domxref("Request.mode","FetchEvent.request.mode")}} 和 {{domxref("Response.type")}} 值的某些组合触发网络错误，正如上面提到的“全局规则”，则返回该错误。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果事件仍没有被派发或者 `respondWith()` 已经被调用，则返回该错误。

## 示例

这个 fetch 事件尝试从 cache API 返回一个响应，否则回落至网络请求。

```js
addEventListener("fetch", (event) => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cachedResponse = await caches.match(event.request);
      // Return it if we found one.
      if (cachedResponse) return cachedResponse;
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })(),
  );
});
```

> **备注：** {{domxref("CacheStorage.match()", "caches.match()")}} 是一个语法糖。等效于在每个缓存上调用 {{domxref("cache.match()")}}（按照 {{domxref("CacheStorage.keys()", "caches.keys()")}} 的顺序）直到返回 {{domxref("Response")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
