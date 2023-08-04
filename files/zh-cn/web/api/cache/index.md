---
title: Cache
slug: Web/API/Cache
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

**`Cache`** 接口为缓存的 [`Request`](http://fetch.spec.whatwg.org/#request) / `Response` 对象对提供存储机制，例如，作为{{domxref("ServiceWorker")}} 生命周期的一部分。请注意，Cache 接口像 workers 一样，是暴露在 window 作用域下的。尽管它被定义在 service worker 的标准中，但是它不必一定要配合 service worker 使用。

一个域可以有多个命名 Cache 对象。你需要在你的脚本 (例如，在 {{domxref("ServiceWorker")}} 中) 中处理缓存更新的方式。除非明确地更新缓存，否则缓存将不会被更新；除非删除，否则缓存数据不会过期。使用 {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} 打开一个 Cache 对象，再使用 Cache 对象的方法去处理缓存。

你需要定期地清理缓存条目，因为每个浏览器都硬性限制了一个域下缓存数据的大小。缓存配额使用估算值，可以使用 {{domxref("StorageEstimate")}} API 获得。浏览器尽其所能去管理磁盘空间，但它有可能删除一个域下的缓存数据。浏览器要么自动删除特定域的全部缓存，要么全部保留。确保按名称安装版本缓存，并仅从可以安全操作的脚本版本中使用缓存。查看 [Deleting old caches](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches) 获取更多信息。

> **备注：** {{domxref("Cache.put")}}, {{domxref("Cache.add")}}和{{domxref("Cache.addAll")}}只能在`GET`请求下使用。

> **备注：** Initial Cache implementations (in both Blink and Gecko) resolve {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, and {{domxref("Cache.put")}} promises when the response body is fully written to storage. More recent spec versions have newer language stating that the browser can resolve the promise as soon as the entry is recorded in the database even if the response body is still streaming in.

> **备注：** 自 Chrome 46 版本起，Cache API 只保存安全来源的请求，即那些通过 HTTPS 服务的请求。

> **备注：** The key matching algorithm depends on the [VARY header](https://www.fastly.com/blog/best-practices-for-using-the-vary-header) in the value. So matching a new key requires looking at both key and value for entries in the Cache.

> **备注：** Cache API 不支持 HTTP 缓存头。

## 方法

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : 返回一个 {{jsxref("Promise")}}对象，resolve 的结果是跟 {{domxref("Cache")}} 对象匹配的第一个已经缓存的请求。
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : 返回一个{{jsxref("Promise")}} 对象，resolve 的结果是跟{{domxref("Cache")}}对象匹配的所有请求组成的数组。
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : 抓取这个 URL，检索并把返回的 response 对象添加到给定的 Cache 对象。这在功能上等同于调用 fetch(), 然后使用 Cache.put() 将 response 添加到 cache 中。
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : 抓取一个 URL 数组，检索并把返回的 response 对象添加到给定的 Cache 对象。
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : 同时抓取一个请求及其响应，并将其添加到给定的 cache。
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : 搜索 key 值为 request 的{{domxref("Cache")}} 条目。如果找到，则删除该{{domxref("Cache")}} 条目，并且返回一个 resolve 为 true 的{{jsxref("Promise")}}对象；如果未找到，则返回一个 resolve 为 false 的{{jsxref("Promise")}}对象。
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : 返回一个{{jsxref("Promise")}}对象，resolve 的结果是{{domxref("Cache")}}对象 key 值组成的数组。

## 示例

此代码段来自 [service worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (请参阅 [selective caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) 。该代码使用{{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} 打开任何具有以`font/开始的`Content-Type 头的{{domxref("Cache")}}对象。

代码然后使用{{domxref("Cache.match", "Cache.match(request, options)")}}查看缓存中是否已经有一个匹配的 font，如果是，则返回它。如果没有匹配的字体，代码将通过网络获取字体，并使用 {{domxref("Cache.put","Cache.put(request, response)")}}来缓存获取的资源。

代码处理从{{domxref("Globalfetch.fetch","fetch()")}} 操作抛出的异常。请注意，HTTP 错误响应（例如 404）不会触发异常。它将返回一个具有相应错误代码集的正常响应对象。

该代码片段还展示了服务工作线程使用的缓存版本控制的最佳实践。虽然在这个例子中只有一个缓存，但同样的方法可用于多个缓存。它将缓存的速记标识符映射到特定的版本化缓存名称。代码还会删除命名不在 CURRENT_CACHES 中的所有缓存。

> **备注：** 在 Chrome 中，请访问 chrome://inspect/#service-workers，然后单击注册的服务工作线程下面的“inspect”链接，查看 [service-worker.js](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) 脚本正在执行的各种操作的日志记录。

```js
var CACHE_VERSION = 1;

// 简写标识符映射到特定版本的缓存。
var CURRENT_CACHES = {
  font: "font-cache-v" + CACHE_VERSION,
};

self.addEventListener("activate", function (event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
    return CURRENT_CACHES[key];
  });

  // 在 promise 成功完成之前，活跃的 worker 不会被视作已激活。
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log("Deleting out of date cache:", cacheName);

            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", function (event) {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    // 打开以'font'开头的 Cache 对象。
    caches.open(CURRENT_CACHES["font"]).then(function (cache) {
      return cache
        .match(event.request)
        .then(function (response) {
          if (response) {
            console.log(" Found response in cache:", response);

            return response;
          }
        })
        .catch(function (error) {
          // 处理 match() 或 fetch() 引起的异常。
          console.error("  Error in fetch handler:", error);

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

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
