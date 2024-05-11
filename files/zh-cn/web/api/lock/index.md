---
title: Lock
slug: Web/API/Lock
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

[Web Locks API](/zh-CN/docs/Web/API/Web_Locks_API) 的 **`Lock`** 接口提供锁的名称和模式。这可能是在 {{domxref('LockManager.request','LockManager.request()')}} 方法的回调中接收到的新请求的锁，也可能是 {{domxref('LockManager.query()')}} 方法返回的活动状态的锁或队列中的锁请求。

## 实例属性

- {{domxref('Lock.mode')}} {{ReadOnlyInline}}
  - : 返回请求锁时传递给 {{domxref('LockManager.request()')}} 的访问模式。模式可以是 `"exclusive"`（默认值）或 `"shared"`。
- {{domxref('Lock.name')}} {{ReadOnlyInline}}
  - : 返回请求锁时传递给 {{domxref('LockManager.request()')}} 方法的名称。

## 示例

以下示例展示如何在对 {{domxref('LockManager.request()')}} 的调用中传递模式和名称参数。{{domxref('LockManager')}} 是 {{domxref('navigator.locks')}} 属性返回的对象。

```js
navigator.locks.request("net_db_sync", show_lock_properties);
navigator.locks.request(
  "another_lock",
  { mode: "shared" },
  show_lock_properties,
);

function show_lock_properties(lock) {
  console.log(`锁的名称是：${lock.name}`);
  console.log(`锁的模式是：${lock.mode}`);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
