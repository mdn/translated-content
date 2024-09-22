---
title: Background Synchronization API
slug: Web/API/Background_Synchronization_API
l10n:
  sourceCommit: dd84b3b089d199be3771d6afe01e068b19889e71
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

**Background Synchronization API** 使 Web 应用程序能够推迟任务，以便一旦用户拥有稳定的网络连接，它们就可以在 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 中运行。

## 概念和用法

如果设备离线，Background Synchronization API 允许 Web 应用程序将服务器同步工作交给 Service Worker 延迟处理。其用途可能包括在应用程序使用期间无法发送请求的情况下在后台发送请求。

例如，电子邮件客户端应用程序可以允许其用户在任意时间撰写和发送消息，即使设备没有网络连接也是如此。应用程序前端仅需注册一个同步请求，并且当网络条件再次允许时，Service Worker 会收到警报并处理同步。

{{domxref('SyncManager')}} 接口允许通过 {{domxref('ServiceWorkerRegistration.sync')}} 使用。使用唯一的标识符来设置同步事件的“名称”, 然后可以在 {{domxref('ServiceWorker')}} 脚本中监听。一旦收到事件，你可以运行任何可用的功能，比如向服务器发送请求。

由于此 API 依赖于 Service Worker，因此此 API 提供的功能仅在安全上下文（HTTPS）中可用。

## 接口

- {{domxref('SyncManager')}} {{Experimental_Inline}}
  - : 注册网络恢复后需要在 Service Worker 中运行的任务。这些任务称为*后台同步请求（background sync requests）*。
- {{domxref('SyncEvent')}} {{Experimental_Inline}}
  - : 代表同步事件，发送到 {{domxref('ServiceWorker')}} 的[全局作用域](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope)。提供了一种在设备具有网络连接后在 Service Worker 中运行任务的方式。

### 对其他接口的扩展

[Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 的以下新增内容提供了用于设置后台同步的入口点。

- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("SyncManager")}} 的引用，用于注册在设备具有网络连接后运行的任务。
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}} 事件
  - : 一旦网络可用，会立刻触发 {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}} 的处理器执行工作。

## 示例

以下示例展示了如何使用该接口。

### 请求后台同步

以下异步函数在浏览器的上下文注册后台同步任务：

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync 无法被注册！");
  }
}
```

### 通过标签校验后台同步是否已请求

此代码检查是否注册了给定标签的后台同步任务。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages")) {
      console.log("已请求同步消息");
    }
  });
});
```

### 在 Service Worker 中监听后台同步

以下示例显示了如何在 Service Worker 中响应后台同步事件。

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [介绍 Background Sync](https://developer.chrome.google.cn/blog/background-sync)
