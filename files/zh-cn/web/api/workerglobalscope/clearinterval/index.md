---
title: WorkerGlobalScope：clearInterval() 方法
slug: Web/API/WorkerGlobalScope/clearInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`clearInterval()`** 方法可取消先前通过调用 {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} 设置的重复定时任务。如果提供的参数未指定先前建立的操作，则此方法不执行任何动作。

## 语法

```js-nolint
clearInterval(intervalID)
```

### 参数

- `intervalID`
  - : 你要取消的重复操作的标识符。这个 ID 是由对应的 `setInterval()` 调用返回的。

值得一提的是，{{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} 和 {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} 共享同一个 ID 池，并且 `clearInterval()` 和 {{domxref("WorkerGlobalScope.clearTimeout", "clearTimeout()")}} 在技术上是可互换使用的。然而，为了清晰起见，你应该尽量避免这种用法。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

参见 {{domxref("Window.setInterval", "setInterval()")}} 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
