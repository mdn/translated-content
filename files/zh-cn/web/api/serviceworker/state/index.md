---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}ServiceWorker 接口的这个只读的**state**属性返回一个代表 service worker 当前状态的字符串。值可以是以下这些：installing, installed, activating, activated，或者是 redundant.

## 语法

```plain
someURL = ServiceWorker.state
```

### 值

一个 {{domxref("ServiceWorkerState")}} 的定义值 ([see the spec](http://slightlyoff.github.io/ServiceWorker/spec/service_worker/#service-worker-state-enum).)

## 示例

这块代码出自 [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). 代码监听了任何{{domxref("ServiceWorker.state")}}中的改变，并返回它的值。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
