---
title: Clients.claim()
slug: Web/API/Clients/claim
---

{{SeeCompatTable}}{{APIRef("Service Worker Clients")}}

{{domxref("Clients")}} 接口的 **`claim()`** 方法允许一个激活的 service worker 将自己设置为其 {{domxref("ServiceWorkerRegistration.scope", "scope")}} 内所有 clients 的{{domxref("ServiceWorkerContainer.controller", "controller")}} . 这会在由此 service worker 控制的任何 clients 中触发 {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} 上的 "`controllerchange`" 事件。

当一个 service worker 被初始注册时，页面在下次加载之前不会使用它。 `claim()` 方法会立即控制这些页面。请注意，这会导致 service worker 控制通过网络定期加载的页面，或者可能通过不同的 service worker 加载。

## 语法

```plain
await clients.claim();
```

### 参数

None.

### 返回

A {{jsxref("Promise")}} for `void`.

## 示例

The following example uses `claim()` inside service worker's "`activate`" event listener so that clients loaded in the same scope do not need to be reloaded before their fetches will go through this service worker.

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [service worker 的生命周期](https://web.developers.google.cn/articles/service-worker-lifecycle)
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}}——跳过 service worker 的等待阶段
