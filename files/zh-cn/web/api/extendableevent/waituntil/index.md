---
title: ExtendableEvent.waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
---

{{APIRef("Service Workers API")}}

**`ExtendableEvent.waitUntil()`** 方法告诉事件分发器该事件仍在进行。这个方法也可以用于检测进行的任务是否成功。在服务工作线程中，这个方法告诉浏览器事件一直进行，直至 promise 解决，浏览器不应该在事件中的异步操作完成之前终止服务工作线程。

[service worker](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope) 中的 {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} 事件使用 `waitUntil()` 来将服务工作线程保持在 {{domxref("ServiceWorkerRegistration.installing", "installing")}} 阶段。如果传入 `waitUntil()` 的 promise 被拒绝，则将此次安装视为失败，丢弃这个服务工作线程。这主要用于确保在服务工作线程安装以前，所有依赖的核心缓存都已经成功载入。

[service worker](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope) 中的 {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} 事件使用 `waitUntil()` 来延迟函数事件，如 `fetch` 和 `push`，直至传入 `waitUntil()` 的 promise 被解决。这让服务工作线程有时间更新数据库架构（database schema）和删除过时{{domxref("Cache", "缓存", "", 1)}}，让其他事件能在一个完成更新的状态下进行。

`waitUntil()` 方法最初必须在事件回调里调用，在此之后，方法可以被调用多次，直至所有传入的 promise 被解决。

> [!NOTE]
> 上述段落描述的行为已经在 Firefox 43 中被修复（参见 [Firefox bug 1180274](https://bugzil.la/1180274)）。

## 语法

```js-nolint
waitUntil(promise)
```

### 参数

一个 {{jsxref("Promise")}}.

## 示例

在服务工作线程的 `install` 事件中使用 `waitUntil()`。

```js
addEventListener("install", (event) => {
  const preCache = async () => {
    const cache = await caches.open("static-v1");
    return cache.addAll(["/", "/about/", "/static/styles.css"]);
  };
  event.waitUntil(preCache());
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [是否支持 ServiceWorker](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
