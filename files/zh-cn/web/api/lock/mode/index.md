---
title: Lock：mode 属性
slug: Web/API/Lock/mode
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Lock")}} 接口的 **`mode`** 只读属性返回请求锁时传递给 {{domxref('LockManager.request()')}} 的访问模式。该模式可以是 `"exclusive"`（默认值）或 `"shared"`。

## 值

`"exclusive"` 或 `"shared"` 之一。

## 示例

以下示例显示如何在对 {{domxref('LockManager.request()')}} 的调用中传递 mode 属性。其中 {{domxref('LockManager')}} 是 {{domxref('navigator.locks')}} 返回的对象。

```js
// 应显示 "exclusive"（默认值）
navigator.locks.request("my_resource", show_lock_properties);

// 应显示 "exclusive"
navigator.locks.request(
  "my_resource",
  { mode: "exclusive" },
  show_lock_properties,
);

// 应显示 "shared"
navigator.locks.request(
  "my_resource",
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
