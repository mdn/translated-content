---
title: Web Locks API
slug: Web/API/Web_Locks_API
l10n:
  sourceCommit: 955d8d3b31be8c89efea86265b0e26a401186dbc
---

{{DefaultAPISidebar("Web Locks API")}}{{securecontext_header}}

The **Web Locks API** allows scripts running in one tab or worker to asynchronously acquire a lock, hold it while work is performed, then release it. While held, no other script executing in the same origin can acquire the same lock, which allows a web app running in multiple tabs or workers to coordinate work and the use of resources.

{{AvailableInWorkers}}

## 概念和用法

A lock is an abstract concept representing some potentially shared resource, identified by a name chosen by the web app. For example, if a web app running in multiple tabs wants to ensure that only one tab is syncing data between the network and Indexed DB, each tab could try to acquire a "my_net_db_sync" lock, but only one tab will succeed (the [leader election pattern](https://en.wikipedia.org/wiki/Leader_election).)

The API is used as follows:

1. The lock is requested.
2. Work is done while holding the lock in an asynchronous task.
3. The lock is automatically released when the task completes.

```js
navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something();
  await do_something_else();
  // Now the lock will be released.
});
```

While a lock is held, requests for the same lock from this execution context, or from other tabs/workers, will be queued. The first queued request will be granted only when the lock is released.

The API provides optional functionality that may be used as needed, including:

- returning values from the asynchronous task
- shared and exclusive lock modes
- conditional acquisition
- diagnostics to query the state of locks in an origin
- an escape hatch to protect against deadlocks

Locks are scoped to origins; the locks acquired by a tab from `https://example.com` have no effect on the locks acquired by a tab from `https://example.org:8080` as they are separate origins.

The main entry point is `navigator.locks.request()` which requests a lock. It takes a lock name, an optional set of options, and a callback. The callback is invoked when the lock is granted. The lock is automatically released when the callback returns, so usually the callback is an _async function_, which causes the lock to be released only when the async function has completely finished.

The `request()` method itself returns a promise which resolves once the lock has been released;
within an async function, a script can `await` the call to make the asynchronous code flow linearly.
For example:

```js
await do_something_without_lock();

// Request the lock.
await navigator.locks.request("my_resource", async (lock) => {
  // The lock has been acquired.
  await do_something_with_lock();
  await do_something_else_with_lock();
  // Now the lock will be released.
});
// The lock has been released.

await do_something_else_without_lock();
```

### Options

Several options can be passed when requesting a lock:

- `mode`: The default mode is "exclusive", but "shared" can be specified. There can be only one "exclusive" holder of a lock, but multiple "shared" requests can be granted at the same time. This can be used to implement the [readers-writer pattern](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock).
- `ifAvailable`: If specified, the lock request will fail if the lock cannot be granted immediately without waiting. The callback is invoked with `null`.
- `steal`: If specified, then any held locks with the same name will be released, and the request will be granted, preempting any queued requests for it.
- `signal`: An {{domxref("AbortSignal")}} can be passed in, allowing a lock request to be aborted. This can be used to implement a timeout on requests.

### Monitoring

The `navigator.locks.query()` method can be used by scripts to introspect the state of the lock manager for the origin. This can be useful when debugging, for example, identifying why a lock could not be acquired. The results are a snapshot of the lock manager state, which identifies held and requested locks and some additional data (e.g. mode) about each, at the time the snapshot was taken.

### Advanced use

For more complicated cases, such as holding the lock for an arbitrary amount of time, the callback can return a promise explicitly resolved by the script:

```js
// Capture promise control functions:
let resolve, reject;
const p = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Request the lock:
navigator.locks.request(
  "my_resource",
  // Lock is acquired.
  (lock) => p, // Now lock will be held until either resolve() or reject() is called.
);
```

### 死锁

当进程的每个部分都在等待无法满足的请求而无法再取得进展时，就会发生死锁。此 API 可能会在复杂的用例中发生这种情况，例如，如果无序请求多个锁。如果选项卡 1 持有锁 A 并且选项卡 2 持有锁 B，接着选项卡 1 也尝试获取锁 B，而选项卡 2 也尝试获取锁 A，则两个请求都不会被授予锁。Web 应用程序可以通过多种策略来避免这种情况，例如确保锁定请求不嵌套、始终有序或设定超时。请注意，此类死锁仅影响锁本身和依赖于它们的代码；浏览器、其他选项卡和页面中的其他脚本不受影响。

## 接口

- {{domxref("Lock")}}
  - : 提供先前请求的锁的名称和模式，该名称和模式在传入 {{domxref("LockManager.request()")}} 的回调方法中接收。
- {{domxref("LockManager")}}
  - : 提供请求新的 {{domxref("Lock")}} 对象和查询现有 Lock 对象的方法。要获取 LockManager 的实例，访问 {{domxref("navigator.locks")}}。

### 其他接口的扩展

- {{domxref("Navigator.locks")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("LockManager")}} 对象，该对象提供请求新的 {{domxref('Lock')}} 对象和查询现有 {{domxref('Lock')}} 对象的方法。
- {{domxref("WorkerNavigator.locks")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("LockManager")}} 对象，该对象提供请求新的 {{domxref('Lock')}} 对象和查询现有 {{domxref('Lock')}} 对象的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
