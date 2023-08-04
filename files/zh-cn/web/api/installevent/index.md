---
title: InstallEvent
slug: Web/API/InstallEvent
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

该参数传递到 {{domxref("ServiceWorkerGlobalScope.oninstall", "oninstall")}} 事件处理程序，`InstallEvent` 接口表示一个 {{domxref("ServiceWorker")}} 的 {{domxref("ServiceWorkerGlobalScope")}} 上分派的安装操作。作为 {{domxref("ExtendableEvent")}} 的一个子类，它确保在安装期间不调度诸如 {{domxref("FetchEvent")}} 之类的功能事件。

该接口继承自 {{domxref("ExtendableEvent")}} 接口。

{{InheritanceDiagram(700, 60, 20)}}

## 构造函数

- {{domxref("InstallEvent.InstallEvent()")}}
  - : 创建一个新的 `InstallEvent` 对象。

## 属性

_从它的祖先{{domxref("Event")}}继承属性。_

- {{domxref("InstallEvent.activeWorker")}} {{readonlyInline}}
  - : 返回当前处于激活状态，控制页面的{{domxref("ServiceWorker")}}。

## 方法

_从它的父类{{domxref("ExtendableEvent")}}继承方法。_

## 示例

该代码片段来自 [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (请参阅 [prefetch running live](https://googlechrome.github.io/samples/service-worker/prefetch/))。代码在{{domxref("ServiceWorkerGlobalScope.oninstall")}}中调用{{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil(any value)")}}，并延迟将{{domxref("ServiceWorkerRegistration.installing")}} worker 视为已安装的，直到传递的 promise 被成功地 resolve。当所有资源已经获取并缓存，或者有任何异常发生时，promise 才会 resolve。

该代码片段也展示了服务工作线程使用的缓存版本控制的最佳实践。虽然此示例只有一个缓存，但您可以将此方法用于多个缓存。代码将缓存的速记标识映射到特定的版本化缓存名称。

> **备注：** service worker 的注册日志记录在 Chrome 浏览器中可以通过访问 chrome://serviceworker-internals 查看。

```js
var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: "prefetch-cache-v" + CACHE_VERSION,
};

self.addEventListener("install", function (event) {
  var urlsToPrefetch = [
    "./static/pre_fetched.txt",
    "./static/pre_fetched.html",
    "https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif",
  ];

  console.log(
    "Handling install event. Resources to pre-fetch:",
    urlsToPrefetch,
  );

  event.waitUntil(
    caches
      .open(CURRENT_CACHES["prefetch"])
      .then(function (cache) {
        cache
          .addAll(
            urlsToPrefetch.map(function (urlToPrefetch) {
              return new Request(urlToPrefetch, { mode: "no-cors" });
            }),
          )
          .then(function () {
            console.log("All resources have been fetched and cached.");
          });
      })
      .catch(function (error) {
        console.error("Pre-fetching failed:", error);
      }),
  );
});
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("NotificationEvent")}}
- {{jsxref("Promise")}}
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
