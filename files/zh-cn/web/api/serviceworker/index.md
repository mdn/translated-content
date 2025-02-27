---
title: ServiceWorker
slug: Web/API/ServiceWorker
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

[Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 的 **`ServiceWorker`** 接口提供了对 service worker 的引用。各个{{glossary("browsing context", "浏览上下文")}}（例如页面、worker 等）可以与相同的 service worker 相关联，每个浏览上下文都可以通过唯一的 `ServiceWorker` 对象访问。

在 {{domxref("ServiceWorkerRegistration.active")}} 属性和 {{domxref("ServiceWorkerContainer.controller")}} 属性中有一个 `ServiceWorker` 对象——这是一个已激活并在控制页面的 service worker（service worker 成功注册，被控页面已经重新加载）。

`ServiceWorker` 接口被分配了一系列生命周期事件——`install` 和 `activate`——以及功能型的事件，包括 `fetch`。一个 ServiceWorker 对象有一个与之关联的 {{domxref("ServiceWorker.state")}}，指示着它的生命周期。

{{InheritanceDiagram}}

## 实例属性

_ServiceWorker 接口继承其父类 {{domxref("EventTarget")}} 的属性。_

- {{domxref("ServiceWorker.scriptURL")}} {{ReadOnlyInline}}
  - : 返回作为 {{domxref("ServiceWorkerRegistration")}} 一部分所定义的 ServiceWorker 序列化脚本 URL。这个 URL 必须和注册该 `ServiceWorker` 的文档处于同一域。
- {{domxref("ServiceWorker.state")}} {{ReadOnlyInline}}
  - : 返回 service worker 的状态。其值可能是如下之一：`installing`、`installed`、`activating`、`activated` 或 `redundant`。

## 实例方法

_ServiceWorker 接口继承其父类 {{domxref("EventTarget")}} 的方法。_

### 事件

- {{domxref("ServiceWorker.onstatechange")}} {{ReadOnlyInline}}
  - : 每当 {{domxref("ServiceWorker.state")}} 发生改变时，都会触发。

## 示例

代码段来自 [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html)（[在线演示](https://googlechrome.github.io/samples/service-worker/registration-events/)）。这段代码监听了 {{domxref("ServiceWorker.state")}} 的变化并且返回它的值。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then((registration) => {
      let serviceWorker;
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
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // Something went wrong during registration. The service-worker.js file
      // might be unavailable or contain a syntax error.
    });
} else {
  // The current browser doesn't support service workers.
  // Perhaps it is too old or we are not in a Secure Context.
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基本代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [是否支持 ServiceWorker](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
