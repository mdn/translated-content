---
title: AbortSignal：any() 静态方法
short-title: any()
slug: Web/API/AbortSignal/any_static
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortSignal.any()`** 静态方法接收一个中止信号的可迭代对象，并返回一个 {{domxref("AbortSignal")}}。当输入的可迭代对象中的任何一个中止信号被中止时，返回的中止信号也会被中止。{{domxref("AbortSignal.reason", "中止原因","","true")}}将被设置为第一个被中止的信号的中止原因。如果给定的中止信号中有任何一个已经被中止，那么返回的 {{domxref("AbortSignal")}} 也将是已中止状态。

## 语法

```js-nolint
AbortSignal.any(iterable)
```

### 参数

- `iterable`
  - : 中止信号的[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)（例如 {{jsxref("Array")}}）。

### 返回值

{{domxref("AbortSignal")}}，其状态为：

- **已中止**，如果给定的中止信号中有任何一个已经被中止。返回的 {{domxref("AbortSignal")}} 的 `reason` 将被设置为第一个已中止的中止信号的 {{domxref("AbortSignal.reason", "reason")}}。
- **异步中止**，当 `iterable` 中的任何中止信号被中止时。{{domxref("AbortSignal.reason", "reason")}} 将被设置为第一个被中止的中止信号的中止原因。

## 示例

### 使用 `AbortSignal.any()`

此示例演示了如何将来自 {{domxref("AbortController")}} 的信号与来自 {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout")}} 的超时信号组合在一起。

```js
const cancelDownloadButton = document.getElementById("cancelDownloadButton");

const userCancelController = new AbortController();

cancelDownloadButton.addEventListener("click", () => {
  userCancelController.abort();
});

// 5 分钟后超时
const timeoutSignal = AbortSignal.timeout(1_000 * 60 * 5);

// 当用户点击取消按钮或 5 分钟时间到时（以先发生者为准），此信号将中止
const combinedSignal = AbortSignal.any([
  userCancelController.signal,
  timeoutSignal,
]);

try {
  const res = await fetch(someUrlToDownload, {
    // 当任何信号中止时停止 fetch
    signal: combinedSignal,
  });
  const body = await res.blob();
  // 对下载的内容进行处理：
  // …
} catch (e) {
  if (e.name === "AbortError") {
    // 被用户取消
  } else if (e.name === "TimeoutError") {
    // 向用户显示下载超时
  } else {
    // 其他错误，例如网络错误
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
