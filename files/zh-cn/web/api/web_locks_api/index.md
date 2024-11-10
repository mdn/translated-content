---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

**Web Locks API** 允许在一个标签页或 worker 中运行的脚本异步获取锁，在执行工作时保持锁，最后释放锁。持有锁时，在同一源中执行的其他脚本都无法获取相同的锁，这允许在多个标签页或 worker 中运行的 Web 应用程序协调工作和资源的使用。

## 概念和用法

锁是一个抽象概念，代表一些潜在的共享资源，由 Web 应用程序选择的名称进行标识。例如，如果在多个标签页中运行的 Web 应用程序想要确保只有一个标签页在网络和索引数据库之间同步数据，则每个标签页都可以尝试获取“my_net_db_sync”锁，但只有一个标签页会成功（[领导者选举模式](https://en.wikipedia.org/wiki/Leader_election)。）

API 用法如下：

1. 请求锁。
2. 在异步任务中持有锁的同时完成工作。
3. 任务完成后锁自动释放。

```js
navigator.locks.request("my_resource", async (lock) => {
  // 锁已被获取。
  await do_something();
  await do_something_else();
  // 现在锁将被释放。
});
```

当持有锁时，来自此执行上下文或其他标签页以及 Worker 进程的相同锁的请求将排队。仅当锁被释放时，第一个排队的请求才会被授予锁。

API 提供了可根据需要使用的可选功能，包括：

- 从异步任务返回值
- 共享锁和独占锁模式
- 条件获取
- 诊断以查询源中锁的状态
- 防止死锁的应急通道

锁的范围仅限于同一个源内；一个标签页从 `https://example.com` 获取的锁对另一个标签页从 `https://example.org:8080` 获取的锁没有影响，因为它们是不同的源。

主要入口点是请求锁的 {{domxref("LockManager.request", "navigator.locks.request()")}} 方法。它需要一个锁的名称、一组可选选项和一个回调方法。授予锁时将调用回调方法。当回调方法返回时，锁会自动释放，因此通常回调是一个*异步函数*，这会导致只有当异步函数完全完成时才会释放锁。

`request()` 方法本身返回一个 Promise，一旦锁被释放，该 Promise 就会兑现；在 `async` 函数中，脚本可以使用 `await` 关键字等待调用以使异步代码线性调用。例如：

```js
await do_something_without_lock();

// 请求锁。
await navigator.locks.request("my_resource", async (lock) => {
  // 锁已被获取。
  await do_something_with_lock();
  await do_something_else_with_lock();
  // 现在锁将被释放。
});
// 锁已被释放。

await do_something_else_without_lock();
```

### 选项

请求锁时可以传递一些选项：

- `mode`：默认模式为“独占”（`"exclusive"`），但可以指定为“共享”（`"shared"`）模式。锁只能有一个“独占”持有者，但可以同时授予多个“共享”请求。这可用于实现[读者——写者模式](https://zh.wikipedia.org/wiki/读写锁)。
- `ifAvailable`：如果指定，如果不等待就无法立即授予锁定，则锁定请求将失败。使用 `null` 调用回调方法。
- `steal`：如果指定，则将释放任何持有的同名锁，并且请求将被授予，抢占任何排队的请求。
- `signal`：可以传入一个 {{domxref("AbortSignal")}}，允许中止锁定请求。这可用于实现请求超时。

### 监控

脚本可以使用 {{domxref("LockManager.query", "navigator.locks.query()")}} 方法来内省源锁管理器的状态。这在调试时非常有用，例如，确定无法获取锁的原因。结果是一个锁管理器状态的快照，它标识了拍摄快照时持有的锁和请求中的锁以及有关每个锁的一些附加数据（例如模式）。

### 进阶用法

对于更复杂的情况，例如在任意时间内保持锁，回调可以返回一个脚本显式解决的 Promise：

```js
// 捕获 Promise 控制函数：
let resolve, reject;
const p = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// 请求锁：
navigator.locks.request(
  "my_resource",
  // 锁已被获取。
  (lock) => p, // 现在锁将被保持直到调用 resolve() 方法或 reject() 方法为止。
);
```

### 死锁

当进程的每个部分都在等待无法满足的请求而无法再取得进展时，就会发生死锁。此 API 可能会在复杂的用例中发生这种情况，例如，如果无序请求多个锁。如果标签页 1 持有锁 A 并且标签页 2 持有锁 B，接着标签页 1 也尝试获取锁 B，而标签页 2 也尝试获取锁 A，则两个请求都不会被授予锁。Web 应用程序可以通过多种策略来避免这种情况，例如确保锁定请求不嵌套、始终有序或设定超时。请注意，此类死锁仅影响锁本身和依赖于它们的代码；浏览器、其他标签页和页面中的其他脚本不受影响。

## 接口

- {{domxref("Lock")}}
  - : 提供先前请求的锁的名称和模式，该锁会被传入 {{domxref("LockManager.request()")}} 的回调方法接收。
- {{domxref("LockManager")}}
  - : 提供请求新的 {{domxref("Lock")}} 对象和查询现有 {{domxref('Lock')}} 对象的方法。要获取 {{domxref("LockManager")}} 的实例，请访问 {{domxref("navigator.locks")}}。

### 其他接口的扩展

- {{domxref("Navigator.locks")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("LockManager")}} 对象，该对象提供请求新的 {{domxref('Lock')}} 对象和查询现有 {{domxref('Lock')}} 对象的方法。
- {{domxref("WorkerNavigator.locks")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("LockManager")}} 对象，该对象提供请求新的 {{domxref('Lock')}} 对象和查询现有 {{domxref('Lock')}} 对象的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
