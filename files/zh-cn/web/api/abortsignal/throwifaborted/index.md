---
title: AbortSignal.throwIfAborted()
slug: Web/API/AbortSignal/throwIfAborted
---

{{APIRef("DOM")}}

如果 signal 已经被中止，则 **`throwIfAborted()`** 方法抛出中止的 {{domxref("AbortSignal.reason", "reason")}}；否则它什么也不做。

需要支持中止的 API 可以接收一个 {{domxref("AbortSignal")}} 对象并且使用 `throwIfAborted()` 来测试并且当 [`abort`](/zh-CN/docs/Web/API/AbortSignal/abort_event) 事件发出信号时抛出。

该方法也可以用来中止代码中特定的操作，而不是传递给接收信号的函数。

## 语法

```js-nolint
throwIfAborted()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下示例来自规范。

### 中止一个轮询操作

该示例展示了你如何使用 `throwIfAborted()` 去中止一个轮询的操作。

考虑一个异步函数 `waitForCondition()`，在调用时传入另一个异步函数 `func`、目标值 `targetValue` 和 `AbortSignal`。该函数在循环中将 `func` 的结果和 `targetValue` 进行比较，当它们匹配时返回。

```js
async function waitForCondition(func, targetValue, { signal } = {}) {
  while (true) {
    signal?.throwIfAborted();

    const result = await func();
    if (result === targetValue) {
      return;
    }
  }
}
```

在每个循环的迭代中，如果操作已经被中止（否则什么也不做）我们使用 `throwIfAborted()` 来抛出 signal 中止的 `reason`。如果信号被中止，它将导致 `waitForCondition()` promise 被拒绝。

### 实现可中止的 API

需要支持中止的 API 可以接收一个 `AbortSignal` 对象，并在其需要时使用其状态去触发中止 signal 的操作。

一个基于 {{jsxref("Promise")}} 的 API 应该通过使用 `AbortSignal` abort {{domxref("AbortSignal.reason", "reason")}} 拒绝任何未敲定的 promise 来响应中止信号。例如，考虑以下 `myCoolPromiseAPI`，它接收一个信号并且返回一个 promise。如果 signal 已经中止或者检测到中止事件，则 promise 将被立刻拒绝。否则它将正常返回并且兑现。

```js
function myCoolPromiseAPI(/* … ,*/ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
    }

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    signal.addEventListener("abort", () => {
      // Stop the main operation
      // Reject the promise wth the abort reason.
      reject(signal.reason);
    });
  });
}
```

然后使用 API，如下所示。请注意，调用 {{domxref("AbortController.abort()")}} 以中止操作。

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* … ,*/ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

不返回 promise 的 API 可能会以类似的方式做出反应。在某些情况下，保留信号可能是有意义的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
