---
title: CacheStorage
slug: Web/API/CacheStorage
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

**`CacheStorage`** 接口表示 {{domxref("Cache")}} 对象的存储。它提供了一个 {{domxref("ServiceWorker")}} 、其他类型 worker 或者 {{domxref("window")}} 范围内可以访问到的所有命名 cache 的主目录（它并不是一定要和 service workers 一起使用，即使它是在 service workers 规范中定义的），并维护一份字符串名称到相应 {{domxref("Cache")}} 对象的映射。

`CacheStorage` 同样暴露了 {{domxref("CacheStorage.open()")}} 和 {{domxref("CacheStorage.match()")}}方法。使用 {{domxref("CacheStorage.open()")}} 获取 {{domxref("Cache")}} 实例。使用 {{domxref("CacheStorage.match()")}} 检查给定的 {{domxref("Request")}} 是否是 `CacheStorage` 对象跟踪的任何 {{domxref("Cache")}} 对象中的键。

你可以通过 {{domxref("WorkerGlobalScope.caches", "caches")}} 属性访问 `CacheStorage` .

> **备注：** CacheStorage 总是对不受信任的源（即那些不使用 HTTPS，尽管此定义将来很可能变得更加复杂。）使用 `SecurityError` reject. 测试时，你可以在 Firefox Devtools 选项/齿轮菜单中通过选中"通过 HTTP 启用 Service Workers (当工具箱打开时)" 选项来绕开这个限制。

> **备注：** {{domxref("CacheStorage.match()")}} 是一个便捷方法。匹配 cache 条目的同等功能可以通过执行 {{domxref("CacheStorage.open()")}} 打开 cache，使用 {{domxref("CacheStorage.keys()")}} 返回它包含的条目，并将你所需的条目与 {{domxref("CacheStorage.match()")}} 匹配。

## 方法

- {{domxref("CacheStorage.match()")}}
  - : 检查给定的 {{domxref("Request")}} 是否是 {{domxref("CacheStorage")}} 对象跟踪的任何 {{domxref("Cache")}} 对象的键，并返回一个 resolve 为该匹配的 {{jsxref("Promise")}} .
- {{domxref("CacheStorage.has()")}}
  - : 如果存在与 `cacheName` 匹配的 {{domxref("Cache")}} 对象，则返回一个 resolve 为 true 的 {{jsxref("Promise")}} .
- {{domxref("CacheStorage.open()")}}
  - : 返回一个 {{jsxref("Promise")}} ，resolve 为匹配 `cacheName` （如果不存在则创建一个新的 cache）的 {{domxref("Cache")}} 对象
- {{domxref("CacheStorage.delete()")}}
  - : 查找匹配 `cacheName` 的 {{domxref("Cache")}} 对象，如果找到，则删除 {{domxref("Cache")}} 对象并返回一个 resolve 为 true 的 {{jsxref("Promise")}} 。如果没有找到 {{domxref("Cache")}} 对象，则返回 `false`.
- {{domxref("CacheStorage.keys()")}}
  - : 返回一个 {{jsxref("Promise")}} ，它将使用一个包含与 {{domxref("CacheStorage")}} 追踪的所有命名 {{domxref("Cache")}} 对象对应字符串的数组来 resolve. 使用该方法迭代所有 {{domxref("Cache")}} 对象的列表。

## 示例

此代码片段来自于 MDN [sw-test example](https://github.com/mdn/sw-test/) （请参阅[sw-test running live](https://mdn.github.io/sw-test/).）此 service worker 脚本等待 {{domxref("InstallEvent")}} 触发，然后运行 {{domxref("ExtendableEvent.waitUntil","waitUntil")}} 来处理应用程序的安装过程。这包括调用 {{domxref("CacheStorage.open")}} 创建一个新的 cache，然后使用 {{domxref("Cache.addAll")}} 向其添加一系列资源。

在第二个代码块，我们等待 {{domxref("FetchEvent")}} 触发。我们构建自定义相应，像这样：

1. 检查 CacheStorage 中是否找到了匹配请求的内容。如果是，使用匹配内容。
2. 如果没有，从网络获取请求，然后同样打开第一个代码块中创建的 cache，并使用 {{domxref("Cache.put")}} (`cache.put(event.request, response.clone())`.) 将请求的 clone 副本添加到它。
3. 如果此操作失败（例如，因为网络关闭），返回备用相应。

最后，使用 {{domxref("FetchEvent.respondWith")}} 返回自定义响应最终等于的内容。

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
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      ]);
    }),
  );
});

this.addEventListener("fetch", function (event) {
  var response;
  event.respondWith(
    caches
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
      }),
  );
});
```

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
