---
title: Cache.addAll()
slug: Web/API/Cache/addAll
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

## 概要

{{domxref("Cache")}} 接口的 **`addAll()`** 方法接受一个 URL 数组，检索它们，并将生成的 response 对象添加到给定的缓存中。在检索期间创建的 request 对象成为存储的 response 操作的 key。

> **备注：** `addAll()` will overwrite any key/value pairs previously stored in the cache that match the request, but will fail if a resulting `put()` operation would overwrite a previous cache entry created by the same `addAll()` method.

> **备注：** Initial Cache implementations (in both Blink and Gecko) resolve {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, and {{domxref("Cache.put")}} promises when the response body is fully written to storage. More recent spec versions have newer language stating that the browser can resolve the promise as soon as the entry is recorded in the database even if the response body is still streaming in.

## 语法

```js
cache.addAll(requests[]).then(function() {
  //requests have been added to the cache
});
```

### 参数

- requests
  - : 要获取并添加到缓存的字符串 URL 数组。

### 返回值

A {{jsxref("Promise")}} that resolves with void.

### Exceptions

| **Exception** | **Happens when**                                                                                                                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError`   | The URL scheme is not `http` or `https`.The Response status is not in the 200 range (i.e., not a successful response.) This occurs if the request does not return successfully, but also if the request is a _cross-origin no-cors_ request (in which case the reported status is always 0.) |

## 示例

此代码块等待一个 {{domxref("InstallEvent")}} 事件触发，然后运行 {{domxref("ExtendableEvent.waitUntil","waitUntil")}} 来处理该应用程序的安装进程。包括调用 {{domxref("CacheStorage.open")}} 创建一个新的 cache，然后使用 `addAll()` 添加一系列资源。

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      ]);
    }),
  );
});
```

### 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
