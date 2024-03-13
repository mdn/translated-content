---
title: Cache.put()
slug: Web/API/Cache/put
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("Cache")}} 接口的 **`put()`** 方法 允许将键/值对添加到当前的 {{domxref("Cache")}} 对象中。

通常，你只想 {{domxref("GloblFetch.fetch","fetch()")}} 一个或多个请求，然后直接添加结果到 cache 中。这种情况下，最好使用 {{domxref("Cache.add","Cache.add()")}}/{{domxref("Cache.addAll","Cache.addAll()")}}，因为它们是一个或者多个这些操作的便捷方法。

```js
fetch(url).then(function (response) {
  if (!response.ok) {
    throw new TypeError("Bad response status");
  }
  return cache.put(url, response);
});
```

> **备注：** `put()` 将覆盖先前存储在匹配请求的 cache 中的任何键/值对。

> **备注：** {{domxref("Cache.add")}}/{{domxref("Cache.addAll")}} 不会缓存 `Response.status` 值不在 200 范围内的响应，而 {{domxref("Cache.put")}} 允许你存储任何请求/响应对。因此，{{domxref("Cache.add")}}/{{domxref("Cache.addAll")}} 不能用于不透明的响应，而 {{domxref("Cache.put")}} 可以。

> **备注：** 当响应主体完全写入磁盘时，初始 Cache 执行 (在 Blink 和 Gecko 中) resolve {{domxref("Cache.add")}}、{{domxref("Cache.addAll")}} 和 {{domxref("Cache.put")}} promise. 更新的规范版本中声明：即使响应主体仍在流式传输，一旦条目被记录到数据库中，浏览器就可以 resolve promise.

## 语法

```
cache.put(request, response).then(function() {
  // request/response pair has been added to the cache
});
```

### 参数

- request
  - : The {{domxref("Request")}} you want to add to the cache.
- response
  - : The {{domxref("Response")}} you want to match up to the request.

### 返回值

A {{jsxref("Promise")}} that resolves with void.

> **备注：** The promise will reject with a `TypeError` if the URL scheme is not `http` or `https`.

## 示例

This example is from the MDN [sw-test example](https://github.com/mdn/sw-test/) (see [sw-test running live](https://mdn.github.io/sw-test/)). Here we wait for a {{domxref("FetchEvent")}} to fire. We construct a custom response like so:

1. Check whether a match for the request is found in the {{domxref("CacheStorage")}} using {{domxref("CacheStorage.match","CacheStorage.match()")}}. If so, serve that.
2. If not, open the `v1` cache using `open()`, put the default network request in the cache using {{domxref("Cache.put","Cache.put()")}} and return a clone of the default network request using `return response.clone()`. Clone is needed because `put()` consumes the response body.
3. If this fails (e.g., because the network is down), return a fallback response.

```js
var response;
var cachedResponse = caches
  .match(event.request)
  .catch(function () {
    return fetch(event.request);
  })
  .then(function (r) {
    response = r;
    caches.open("v1").then(function (cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  })
  .catch(function () {
    return caches.match("/sw-test/gallery/myLittleVader.jpg");
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
