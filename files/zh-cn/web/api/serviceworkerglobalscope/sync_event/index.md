---
title: ServiceWorkerGlobalScope：sync 事件
slug: Web/API/ServiceWorkerGlobalScope/sync_event
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

当页面（或 worker）使用 {{domxref('SyncManager')}} 注册的事件正在运行，并且一旦网络连接可用时，将触发 {{domxref("ServiceWorkerGlobalScope")}} 接口的 **`sync`** 事件。

此事件不能取消，也不会冒泡。

## 语法

像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 一样在方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("sync", (event) => {});

onsync = (event) => {};
```

## 事件类型

{{domxref("SyncEvent")}}。其继承自 {{domxref("ExtendableEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("SyncEvent")}}

## 事件属性

_自其父级 {{domxref("ExtendableEvent")}} 和 {{domxref("Event")}} 继承属性_。

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}}
  - : 返回此 `SyncEvent` 的开发人员定义的标识符。
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}}
  - : 如果用户代理在当前尝试之后不再进行进一步的同步尝试，则返回 `true`。

## 示例

以下示例显示了如何在 Service Worker 中响应同步事件。

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

你也可以通过 `onsync` 属性设置事件处理器：

```js
self.onsync = (event) => {
  // ...
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用定期后台同步 API 获得更丰富的离线体验](https://developer.chrome.google.cn/docs/capabilities/periodic-background-sync)
- [定期后台同步的示例应用](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
