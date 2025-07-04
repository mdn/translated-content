---
title: LockManager：request() 方法
slug: Web/API/LockManager/request
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("LockManager")}} 接口的 **`request()`** 方法请求一个 {{domxref('Lock')}} 对象，该方法发参数指定返回对象的名称和特征。请求的 `Lock` 对象被传递给回调，而函数本身返回一个 {{jsxref('Promise')}}，在锁被释放后解析（或拒绝）回调的结果，或者在请求被中止时拒绝。

`options` 参数的 `mode` 属性可以接收 `"exclusive"` 或 `"shared"`。

当锁一次只能由一个代码实例持有时，请求 `"exclusive"` 锁。这适用于标签页和 worker 中的代码。使用它来表示对资源的互斥访问。当持有给定名称的 `"exclusive"` 锁时，不能持有其他同名的锁。

当代码的多个实例可以共享对资源的访问时，请求 `"shared"` 锁。当持有给定名称的 `"shared"` 锁时，可以授予同名的其他 `"shared"` 锁，但不能持有或授予具有该名称的 `"exclusive"` 锁。

这种共享/独占锁模式在数据库事务架构中很常见，例如允许多个并发读取器（每个读取器请求一个 `"shared"` 锁），但仅允许一个写入器（单个 `"exclusive"` 锁）。这称为读者——作者模式。在 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 中，这被暴露为具有相同语义的 `"readonly"` 和 `"readwrite"` 事务。

## 语法

```js-nolint
request(name, callback)
request(name, options, callback)
```

### 参数

- `name`
  - : 你想要请求的锁的标识符。

- `options` {{optional_inline}}
  - : 一个描述你要创建的锁的特征的对象。有效的值为：
    - `mode` {{optional_inline}}
      - : `"exclusive"` 或 `"shared"` 之一。默认值是 `"exclusive"`。

    - `ifAvailable` {{optional_inline}}
      - : 如果为 `true`，则只有在尚未持有锁定请求时才会授予该锁定请求。如果无法授予，则将传入 `null` 而非 `Lock` 实例来调用回调。默认值为 `false`。

    - `steal` {{optional_inline}}
      - : 如果为 `true`，则任何持有的同名锁将被释放，并且请求将被授予，抢占任何排队中的锁请求。默认值为 `false`。

        > [!WARNING]
        > 小心使用！之前在锁内运行的代码会继续运行，并且可能与现在持有锁的代码发生冲突。

    - `signal` {{optional_inline}}
      - : 一个 {{domxref("AbortSignal")}}（{{domxref("AbortController")}} 的 {{domxref("AbortController.signal", "signal")}} 属性）；如果指定并且 {{domxref("AbortController")}} 被中止，则锁请求将被丢弃（如果尚未授予）。

- `callback`
  - : 授予锁时调用的方法。当回调返回（或抛出异常）时，锁会自动释放。通常回调是一个异步函数，这会导致只有当异步函数完全完成时才会释放锁。

### 返回值

一个 {{jsxref('Promise')}}，在锁释放后兑现（或拒绝）回调结果，或者在请求中止时拒绝。

### 异常

此方法可能会返回一个被以下类型之一的 {{domxref("DOMException")}} 拒绝的 promise：

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果当前环境的文档未完全激活，则抛出该异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果无法获取当前环境的锁管理器，则抛出该异常。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果 `name` 以连字符（`-`）开头且 `steal` 和 `ifAvailable` 选项均为 `true`，或选项 `signal` 存在且 `steal` 或 `ifAvailable` 选项为 `true` 时，则抛出该异常。
- `AbortError` {{domxref("DOMException")}}
  - : 如果 `signal` 选项存在并且被中止，则抛出该异常。

## 示例

### 一般示例

以下示例显示了 `request()` 方法的基本用法，并以异步函数作为回调函数。一旦调用回调函数，该源上的其他正在运行的代码就无法持有 `my_resource` 锁，直到回调返回。

```js
await navigator.locks.request("my_resource", async (lock) => {
  // 锁被授予。
});
```

### `mode` 示例

以下示例展示了如何为读取器和写入器使用 `mode` 选项。

请注意，这两个函数都使用名为 `my_resource` 的锁。`do_read()` 请求 `'shared'` 模式下的锁定，这意味着多个调用可能会在不同的事件处理器、标签页或 worker 中同时发生。

```js
async function do_read() {
  await navigator.locks.request(
    "my_resource",
    { mode: "shared" },
    async (lock) => {
      // 在这里放置执行读取器具体操作的代码。
    },
  );
}
```

`do_write()` 函数使用相同的锁，但处于 `'exclusive'` 模式，这将延迟 `do_read()` 中 `request()` 的调用，直到写操作完成。这适用于事件处理器、标签页或 worker。

```js
async function do_write() {
  await navigator.locks.request(
    "my_resource",
    { mode: "exclusive" },
    async (lock) => {
      // 在这里放置执行写入器具体操作的代码。
    },
  );
}
```

### `ifAvailable` 示例

要仅在尚未持有锁时才获取锁，使用 `ifAvailable` 选项。在此函数中，`await` 表示该方法在回调完成之前不会返回。由于仅在可用时才授予锁，因此此调用避免了需要等待锁在其他地方释放。

```js
await navigator.locks.request(
  "my_resource",
  { ifAvailable: true },
  async (lock) => {
    if (!lock) {
      // 锁没有被授予——尽快结束。
      return;
    }

    // 该锁已被授予，并且该源中没有其他正在运行的代码持有 'my_res_lock' 锁，直到该锁返回为止。
  },
);
```

### `signal` 示例

如果只等待锁一小段时间，请使用 `signal` 选项。

```js
const controller = new AbortController();
// 最多等待 200 毫秒。
setTimeout(() => controller.abort(), 200);

try {
  await navigator.locks.request(
    "my_resource",
    { signal: controller.signal },
    async (lock) => {
      // 锁被获取了！
    },
  );
} catch (ex) {
  if (ex.name === "AbortError") {
    // 该请求在获得锁之前就中止了。
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
