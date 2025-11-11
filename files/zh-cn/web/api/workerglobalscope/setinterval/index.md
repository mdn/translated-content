---
title: WorkerGlobalScope：setInterval() 方法
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`setInterval()`** 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔。

此方法返回一个间隔 ID，其唯一地标识时间间隔，因此你可以稍后通过调用 {{domxref("WorkerGlobalScope.clearInterval", "clearInterval()")}} 来移除它。

此方法也在窗口上下文中可用：有关 `setInterval()` 的详细描述，请参阅 {{domxref("Window.setInterval()")}} 页面。

## 语法

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### 参数

- `func`
  - : 要每隔 `delay` 毫秒执行一次的{{jsxref("function", "函数", "", 1)}}。第一次执行发生在 `delay` 毫秒之后。
- `code`
  - : 这个可选的语法让你可以传递一个字符串来代替函数，你传递的字符串会被编译然后每经过 `delay` 毫秒执行一次。这个语法因为与 {{jsxref("Global_Objects/eval", "eval()")}} 存在相同的安全风险所以*不推荐*使用。
- `delay` {{optional_inline}}
  - : 计时器每次执行指定的函数和代码的延迟时间（以毫秒——千分之一秒——为单位）。如果未指定，则其默认值为 0。参见[延迟限制](/zh-CN/docs/Web/API/Window/setInterval#延迟限制)以了解详细的 `delay` 的取值范围。
- `arg1`、……、`argN` {{optional_inline}}
  - : 当计时器结束的时候，将被传递给 _func_ 函数的附加参数。

### 返回值

返回值 `intervalID` 是一个非零数值，用来标识调用 `setInterval()` 创建的定时器；这个值可以用来传递给 {{domxref("Window.clearInterval", "clearInterval()")}} 来清除定时器。

值得注意的是，`setInterval()` 和 {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} 共享同一个 ID 池，并且 `clearInterval()` 和 {{domxref("WorkerGlobalScope.clearTimeout", "clearTimeout()")}} 在技术上是可互换使用的。然而，为了清晰可见，你应该尝试始终匹配，以避免维护代码时产生混淆。

> [!NOTE]
> 参数 `delay` 会被转换成一个有符号 32 位整数。这将 `delay` 限制到了 2147483647 毫秒（大约 24.8 天）以内，因为它在 IDL 中被指定为一个有符号整数。

## 示例

参见 {{domxref("Window.setInterval", "setInterval()")}} 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `setInterval` 的 polyfill，支持向回调函数传递参数](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.setInterval()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
