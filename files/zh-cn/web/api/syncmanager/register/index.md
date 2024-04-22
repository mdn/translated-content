---
title: SyncManager：register() 方法
slug: Web/API/SyncManager/register
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

{{domxref("SyncManager")}} 接口的 **`register()`** 方法用于注册同步事件，一旦网络连接可用，就会在关联的 Service Worker 内触发 {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}} 事件。

## 语法

```js-nolint
register(tag)
```

### 参数

- `tag`
  - : 同步事件的标识符。{{domxref("SyncEvent")}} 的 tag 属性的值，它被传递到 Service Worker 的 {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}} 事件处理器中。

### 返回值

一个兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果当前的 Service Worker 不是活动状态，则抛出该错误。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果用户禁用了后台同步功能，则抛出该错误。

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
