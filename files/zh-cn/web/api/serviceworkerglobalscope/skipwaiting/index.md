---
title: ServiceWorkerGlobalScope.skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} 的 **`ServiceWorkerGlobalScope.skipWaiting()`** 方嘎强制等待 service worker 成为活动的 service worker。

将此方法与 {{domxref("Clients.claim()")}} 方法一起使用，以确保对底层 service worker 的更新，并立即对当前客户端和其它活动的客户端生效。

## 语法

```js-nolint
skipWaiting()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，该 promise 会立即兑现为 `undefined`。

## 示例

虽然 `self.skipWaiting()` 可以在 service worker 执行期间的任何时间点调用，但是它只有在新安装的 service worker 可能保持在 `waiting` 状态的时候才会其作用。因此，通常从 {{domxref("InstallEvent")}} 处理程序内容调用 `self.skipWaiting()`。

以下示例会导致新安装的 service worker 进入 `activating` 状态，而不会管是否已经有一个活动的 service worker。

```js
self.addEventListener("install", (event) => {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基础代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [是否支持 ServiceWorker？](https://jakearchibald.github.io/isserviceworkerready/)
- {{domxref("Clients.claim()")}}
- {{jsxref("Promise", "Promise")}}
- [使用 web worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
