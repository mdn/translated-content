---
title: ServiceWorkerGlobalScope.skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} 的 **`ServiceWorkerGlobalScope.skipWaiting()`** 方法强制等待 service worker 成为激活的 service worker。

这个方法与 {{domxref("Clients.claim()")}} 一起使用，以确保原 service worker 的更新，能立即对当前对客户端和其他所有激活的客户端生效。

## 语法

```js-nolint
skipWaiting()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，该 promise 会立即兑现为 `undefined`。

## 示例

虽然 `self.skipWaiting()` 可以在 service worker 执行期间的任何时间点调用，但是它只有在新安装的 service worker 可能保持在 `waiting` 状态的时候才会起作用。因此，通常从 {{domxref("InstallEvent")}} 处理程序内部调用 `self.skipWaiting()`。

以下示例会导致新安装的 service worker 进入 `activating` 状态，而不会管是否已经有一个激活的 service worker。

```js
self.addEventListener("install", (event) => {
  // skipWaiting() 返回一个 promise，但完全可以忽略它
  self.skipWaiting();

  // 执行 service worker 安装所需
  // 的任何其他操作，
  // 可能需要在 event.waitUntil() 的内部进行
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基础代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [是否支持 ServiceWorker？](https://jakearchibald.github.io/isserviceworkerready/)
- {{domxref("Clients.claim()")}}
- {{jsxref("Promise", "Promise")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
