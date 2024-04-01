---
title: LockManager：query() 方法
slug: Web/API/LockManager/query
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("LockManager")}} 接口的 **`query()`** 方法返回一个 {{jsxref('Promise')}}，该对象兑现一个包含持有中的锁和请求中的锁的信息的对象。

## 语法

```js-nolint
query()
```

### 参数

无。

### 返回值

一个 {{jsxref('Promise')}}，兑现一个包含 {{domxref("LockManager")}} 状态快照的对象。该对象具有以下属性：

- `held`
  - : 一个持有中的锁的 `LockInfo` 对象数组。
- `pending`
  - : 一个请求中的锁的 `LockInfo` 对象数组。

`LockInfo` 对象可以具有以下属性：

- `name`
  - : 请求锁时传递给 {{domxref("LockManager.request()")}} 的名称。
- `mode`
  - : 请求锁时传递给 {{domxref("LockManager.request()")}} 的模式。该模式可以是 `"exclusive"` 或 `"shared"`。
- `clientId`
  - : 调用 {{domxref("LockManager.request()")}} 的上下文的唯一标识。该值与 {{domxref("Client.id")}} 相同。

### 异常

此方法可能会返回一个被以下类型的 {{domxref("DOMException")}} 之一拒绝的 promise：

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果当前环境的文档未完全激活，则抛出该异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果无法获取当前环境的锁管理器，则抛出该异常。

## 示例

```js
const state = await navigator.locks.query();
for (const lock of state.held) {
  console.log(`持有中的锁：名称 ${lock.name}，模式 ${lock.mode}`);
}
for (const request of state.pending) {
  console.log(`请求中的锁：名称 ${request.name}，模式 ${request.mode}`);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
