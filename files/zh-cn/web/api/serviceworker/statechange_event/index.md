---
title: ServiceWorker.onstatechange
slug: Web/API/ServiceWorker/statechange_event
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

一个 {{domxref("EventListener")}} 联动的属性，其会被任何 stagechange 类型事件抛出时联动; 它也基本上能在任何时候{{domxref("ServiceWorker.state")}} 改变时被抛出。

## 语法

```plain
ServiceWorker.onstatechange = function(statechangeevent) { ... }
ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )
```

## 示例

这段代码出自 [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). 它会监听 {{domxref("ServiceWorker.state")}} 的改变并返回它的值。

```js
var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", function (e) {
    logState(e.target.state);
  });
}
```

注意当`statechange` 抛出时，service worker 的引用可能已经改变。例如：

```js
navigator.serviceWorker.register(..).then(function(swr) {
  swr.installing.state == "installing"
  swr.installing.onstatechange = function() {
    swr.installing == null;
    // At this point, swr.waiting OR swr.active might be true. This is because the statechange
    // event gets queued, meanwhile the underlying worker may have gone into the waiting
    // state and will be immediately activated if possible.
  }
})
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
