---
title: Lock：name 属性
slug: Web/API/Lock/name
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Lock")}} 接口的 **`name`** 只读属性返回请求锁时传递给 {{domxref('LockManager.request')}} 选择的*名称*。

当请求锁时，锁的名称通过脚本传递。该名称由开发人员选择来表示一个抽象资源，该资源的使用在同源的多个标签页、worker 或其他代码之间进行协调。例如，如果 Web 应用程序同时只能有一个标签页进行网络资源与脱机数据库的同步，则它可以使用诸如 `"net_db_sync"` 之类的锁名称。

## 值

一个字符串。

## 示例

以下示例显示了如何在对 {{domxref('LockManager.request()')}} 的调用中传递 name 属性。其中 {{domxref('LockManager')}} 是 {{domxref('navigator.locks')}} 返回的对象。

```js
navigator.locks.request("net_db_sync", show_lock_properties);

function show_lock_properties(lock) {
  console.log(`锁的名称是：${lock.name}`);
  console.log(`锁的模式是：${lock.mode}`);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
