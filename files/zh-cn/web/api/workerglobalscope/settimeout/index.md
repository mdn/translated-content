---
title: WorkerGlobalScope：setTimeout() 方法
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`setTimeout()`** 方法设置一个定时器，一旦定时器到期，就会执行一个函数或指定的代码片段。

## 语法

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

### 参数

- `functionRef`
  - : 当定时器到期后要执行的{{jsxref("function", "函数", "", 1)}}。
- `code`
  - : 这是一个代替语法，允许你包含在定时器到期后编译和执行的字符串而非函数。这个语法因为与 {{jsxref("Global_Objects/eval", "eval()")}} 存在相同的安全风险所以**不推荐**使用。
- `delay` {{optional_inline}}
  - : 定时器在执行指定的函数或代码之前应该等待的时间，单位是毫秒。如果省略该参数，则使用值 0，意味着“立即”执行，或者更准确地说，在下一个事件循环执行。

    注意，无论是哪种情况，实际延迟可能会比预期长一些，参见[延时比指定值更长的原因](/zh-CN/docs/Web/API/Window/setTimeout#延时比指定值更长的原因)。

    还要注意的是，如果值不是数字，隐式的[类型强制转换](/zh-CN/docs/Glossary/Type_coercion)会静默地将其转换为数字——这可能导致意想不到的、令人惊讶的结果；参见[非数字延迟值被静默地强制转化为数字](/zh-CN/docs/Web/API/Window/setTimeout#非数字延迟值被静默地强制转化为数字)以获取示例。

- `param1`、……、`paramN` {{optional_inline}}
  - : 会被传递给由 `functionRef` 指定的函数的附加参数。

### 返回值

返回值 `timeoutID` 是一个正整数，表示由 `setTimeout()` 调用创建的定时器的标识符。可以将这个值传递给 {{domxref("Window.clearTimeout","clearTimeout()")}} 来取消该定时器。

在定时器仍然激活的情况下，保证 `timeoutID` 值不会被同一 worker 中的后续 `setTimeout()` 或 `setInterval()` 调用重复使用。然而，不同的对象使用不同的 ID 池。

## 描述

参见 {{domxref("Window.setTimeout()")}} 以获取详细的描述。

## 示例

参见 {{domxref("Window.setTimeout()")}} 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中允许向回调函数传递参数的 `setTimeout` 版本的 polyfill](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("WorkerGlobalScope.queueMicrotask()")}}
