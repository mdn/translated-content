---
title: WorkerGlobalScope：clearTimeout() 方法
slug: Web/API/WorkerGlobalScope/clearTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`clearTimeout()`** 方法取消先前通过调用 {{domxref("setTimeout()")}} 建立的超时任务。

如果参数未标识之前创建的操作，则此方法不执行任何动作。

## 语法

```js-nolint
clearTimeout(timeoutID)
```

### 参数

- `timeoutID`
  - : 你要取消定时器的标识符。该 ID 由相应的 `setTimeout()` 调用返回。

值得注意的是，{{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} 和 {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} 共享同一个 ID 池，意味着在技术上可以混用 `clearTimeout()` 和 {{domxref("WorkerGlobalScope.clearInterval", "clearInterval()")}}。但是，为了清楚起见，你应该避免这样做。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

参见 {{domxref("Window.clearTimeout()")}} 以获取示例。

## 备注

传入一个无效的 ID 给 `clearTimeout()` 不会有任何影响；也不会抛出异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
