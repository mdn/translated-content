---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("CacheStorage")}} 接口的 **`open()`** 方法返回一个 resolve 为匹配 `cacheName` 的 {{domxref("Cache")}} 对象的 {{jsxref("Promise")}} .

> **备注：** 如果指定的 {{domxref("Cache")}} 不存在，则使用该 `cacheName` 创建一个新的 cache，并返回一个 resolve 为该新 {{domxref("Cache")}} 对象的{{jsxref("Promise")}}.

## 语法

```js
// "caches" is a global read-only variable, which is an instance of CacheStorage,
// For more info, refer to: https://developer.mozilla.org/zh-CN/docs/Web/API/caches

caches.open(cacheName).then(function (cache) {
  // Do something with your cache
});
```

### 参数

- cacheName
  - : 要打开的 cache 对象 name.

### 返回值

一个 resolve 为请求的 {{domxref("Cache")}} 对象的 {{jsxref("Promise")}} .

## 示例

此示例来自于 MDN [sw-test example](https://github.com/mdn/sw-test/) （请参阅 [sw-test running live](https://mdn.github.io/sw-test/)）。这里，等待 {{domxref("FetchEvent")}} 事件触发。我们构建自定义响应，像这样：

1. 使用 {{domxref("CacheStorage.match","CacheStorage.match()")}} 检查 {{domxref("CacheStorage")}} 中是否存在匹配请求，如果存在，则使用它。
2. 如果没有，使用 {{domxref("CacheStorage.open","CacheStorage.open()")}} 打开 `v1` cache，使用 {{domxref("Cache.put","Cache.put()")}} 将默认网络请求放入 cache 中，并使用 `return response.clone()` 返回默认网络请求的克隆副本。最后一个是必须的，因为 `put()` 使用响应主体。
3. 如果此操作失败（例如，因为网络已关闭），则返回备用响应。

```js
var cachedResponse = caches
  .match(event.request)
  .catch(function () {
    return fetch(event.request);
  })
  .then(function (response) {
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
