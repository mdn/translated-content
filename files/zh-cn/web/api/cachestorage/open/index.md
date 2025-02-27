---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("CacheStorage")}} 接口的 **`open()`** 方法返回一个兑现为匹配 `cacheName` 的 {{domxref("Cache")}} 对象的 {{jsxref("Promise")}}。

你可以通过窗口的 {{domxref("Window.caches")}} 属性或 worker 的 {{domxref("WorkerGlobalScope.caches")}} 属性访问 `CacheStorage`。

> [!NOTE]
> 如果指定的 {{domxref("Cache")}} 不存在，则使用该 `cacheName` 创建一个新的缓存，并返回一个兑现为这个新的 {{domxref("Cache")}} 对象的 {{jsxref("Promise")}}。

## 语法

```js-nolint
open(cacheName)
```

### 参数

- cacheName
  - : 要打开的缓存对象的名称。

### 返回值

一个会兑现为请求的 {{domxref("Cache")}} 对象的 {{jsxref("Promise")}}。

## 示例

此示例来自于 MDN [service worker 简单示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（请参阅[在线的 service worker 简单示例](https://bncb2v.csb.app/)）。这里，等待 {{domxref("FetchEvent")}} 事件触发，然后运行 {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} 来处理应用的安装。这包括调用 `CacheStorage.open()` 来创新新的缓存，然后使用 {{domxref("Cache.addAll()")}} 向其中添加一系列资源。

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} 和 {{domxref("WorkerGlobalScope.caches")}}
