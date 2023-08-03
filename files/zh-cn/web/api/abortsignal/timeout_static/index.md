---
title: AbortSignal.timeout()
slug: Web/API/AbortSignal/timeout_static
---

{{APIRef("DOM")}}

静态方法 **`AbortSignal.timeout()`** 返回一个指定时间后将自动中止的 {{domxref("AbortSignal")}}。

信号在超时时使用 `TimeoutError` {{domxref("DOMException")}} 中止，或者由于按下一个浏览器停止按钮（或者一些内置的“停止”操作）而使用 `AbortError` {{domxref("DOMException")}} 中止。这允许 UI 区分超时错误（通常需要通知用户）和用户触发的错误（不需要通知用户）。

超时将基于活动的时间，而不是经过的时间，如果代码在指定的的 worker 中运行或者文档在往返缓存时（[bfcache](https://web.dev/bfcache/)），将有效地暂停。

> **备注：** 在编写代码时，无法组合多个信号。意思是你不能使用超时的 signal 或者通过调用 {{domxref("AbortController.abort()")}} 直接中止下载。

## 语法

```js-nolint
AbortSignal.timeout(time)
```

### 参数

- `time`
  - : 返回的 {{domxref("AbortSignal")}} 将中止之前的“活动”时间（以毫秒为单位）。

### 返回值

一个 {{domxref("AbortSignal")}}。

signal 中止，并且 {{domxref("AbortSignal.reason")}} 属性将在超时时设置一个 `TimeoutError` {{domxref("DOMException")}}，如果操作是用户触发的，则为 `AbortError` {{domxref("DOMException")}}。

## 示例

以下简单示例展示了一个 fetch 操作，如果其在 5 秒后不成功，则超时。注意，如果不支持该方法、按下浏览器的“停止”按钮或其他原因，也可能失败。

```js
const url = "https://path_to_large_file.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() method is not supported");
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
