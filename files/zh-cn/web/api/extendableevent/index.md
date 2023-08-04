---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}作为 service worker 生命周期的一部分，**`ExtendableEvent`** 接口延长了在全局范围上 [`install`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/install_event) 和 [`activate`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/activate_event) 事件的生命周期。这样可以确保在升级数据库架构并删除过时的 caches 之前，不会调度任何函数事件（如{{domxref("FetchEvent")}}）。如果在`ExtendableEvent`处理程序之外调用{{domxref("ExtendableEvent.waitUntil","waitUntil()")}}，浏览器应该抛出一个`InvalidStateError`；还要注意，多个调用将堆积起来，结果 promises 将添加到[extend lifetime promises](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises).

> **备注：** 上述段落中描述的行为在 firefox 43 中得到了修复（参见 [Firefox bug 1180274](https://bugzil.la/1180274)）。

此接口继承自{{domxref("Event")}}接口。

{{InheritanceDiagram(700, 60, 20)}}

> **备注：** 只有当全局范围是 {{domxref("ServiceWorkerGlobalScope")}} 时，此接口才可用。当它是一个 {{domxref("Window")}} 或其他类型 worker 的作用域时，它不可用。

## 构造函数

- {{domxref("ExtendableEvent.ExtendableEvent()", "ExtendableEvent()")}}
  - : 创建新的`ExtendableEvent`对象。

## 特性

不实现任何特定属性，但从其父级事件继承属，_{{domxref("Event")}}_。

## 方法

_从他的父辈继承，{{domxref("Event")}}。_

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : 延长事件的生存期。它将在 service worker 的 [`install`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/install) 和 [`activate`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/activate) 事件中被调用。

## 实例

代码片段来自[service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (查看 [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/).)。代码在{{domxref("ServiceWorkerGlobalScope.oninstall")}}中调用{{domxref("ExtendableEvent.waitUntil()")}}，延迟将{{domxref("ServiceWorkerRegistration.installing")}} Worker 视为已安装，直到传递的 promise resolve(在所有资源都已被提取和缓存的情况，或者发生任何异常时的问题.)

代码段还显示了对 service worker 使用的缓存进行版本控制的最佳实践。虽然在这个例子中只有一个缓存，但是相同的方法可以用于多个缓存。它将缓存的速记标识符映射到特定的、版本化的缓存名称。

> **备注：** 在 chrome 中，日志记录语句通过 chrome://service worker internals 访问的相关服务工作者的“inspect”接口可见。

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

> **备注：** 在获取资源时，如果有可能资源是由不支持 [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) 的服务器提供的，那么使用 `{mode: 'no-cors'}` 非常重要。在本例中， [www.chromium.org](http://www.chromium.org) 不支持 CORS。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
