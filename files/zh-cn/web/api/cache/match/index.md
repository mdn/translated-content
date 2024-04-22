---
title: Cache.match()
slug: Web/API/Cache/match
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("Cache")}} 接口的 **`match()`** 方法，返回一个 {{jsxref("Promise")}} 解析为 (resolve to) 与 {{domxref("Cache")}} 对象中的第一个匹配请求相关联的{{domxref("Response")}} 。如果没有找到匹配，{{jsxref("Promise")}} 解析为 {{jsxref("undefined")}}。

## 语法

```js
cache.match(request, { options }).then(function (response) {
  //操作 response
});
```

### 返回值

一个 {{jsxref("Promise")}} 对象，该对象解析为第一个匹配请求的 {{domxref("Response")}} 对象，如果没有匹配到，则解析到 {{jsxref("undefined")}} 。

> **备注：** `Cache.match()` 基本上和 {{domxref("Cache.matchAll()")}} 一样，只不过 `Cache.match()` 只解析为 `response[0]` （第一个匹配的响应 (response) 对象）而不是 `response[]` （所有响应对象组成的数组）。

### 参数

- request
  - : 在{{domxref("Cache")}}对象中查找的{{domxref("Request")}}对象对应的 response。这个{{domxref("Request")}}可以是 object 或者是一个 URL.
- options {{optional_inline}}

  - : 一个为 `match` 操作设置选项的对象。有效的选项如下：

    - `ignoreSearch`: 一个 {{domxref("Boolean")}} 值用来设置是否忽略 url 中的 query 部分。例如，如果该参数设置为 `true` ，那么 `http://foo.com/?value=bar` 中的 `?value=bar` 部分就会在匹配中被忽略。该选项默认为 `false`。
    - `ignoreMethod`: 一个 {{domxref("Boolean")}} 值，如果设置为 `true`在匹配时就不会验证 {{domxref("Request")}} 对象的`http` 方法 (通常只允许是 `GET` 或 `HEAD`。) 该参数默认值为 `false`。
    - `ignoreVary`: 一个 {{domxref("Boolean")}} 值，该值如果为 `true` 则匹配时不进行 `VARY` 部分的匹配。例如，如果一个 URL 匹配，此时无论{{domxref("Response")}}对象是否包含`VARY`头部，都会认为是成功匹配。该参数默认为 `false`。
    - `cacheName`: 一个 {{domxref("DOMString")}} ，代表一个具体的要被搜索的缓存。注意该选项被 `Cache.match()` 方法忽略。

## 例子

这个是个来自 [custom offline page](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) 的例子 ([live demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html))。

下面的例子在请求失败时提供特定的数据。 `catch()` 在 `fetch()` 的调用抛出异常时触发。在 `catch()` 语句中， `match()`用来返回正确的响应。

在这个例子中，我们决定只缓存通过 GET 取得的 HTML 文档。如果 `if()` 条件是 false，那么这个 fetch 处理器就不会处理这个请求。如果还有其他的 fetch 处理器被注册，它们将有机会调用 `event.respondWith()` 如果没有 fetch 处理器调用 `event.respondWith()` ，该请求就会像没有 service worker 介入一样由浏览器处理。如果 `fetch()` 返回了有效的 HTTP 响应，相应码是 4xx 或 5xx，那么`catch()` 就**不会**被调用。

```js
self.addEventListener("fetch", function (event) {
  // 我们只想在用 GET 方法请求 HTML 文档时调用 event.respondWith()。
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").indexOf("text/html") !== -1
  ) {
    console.log("Handling fetch event for", event.request.url);
    event.respondWith(
      fetch(event.request).catch(function (e) {
        console.error("Fetch failed; returning offline page instead.", e);
        return caches.open(OFFLINE_CACHE).then(function (cache) {
          return cache.match(OFFLINE_URL);
        });
      }),
    );
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
