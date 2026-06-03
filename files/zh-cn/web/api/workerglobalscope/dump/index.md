---
title: WorkerGlobalScope：dump() 方法
short-title: dump()
slug: Web/API/WorkerGlobalScope/dump
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{Non-standard_Header}}{{Deprecated_Header}}{{AvailableInWorkers("worker")}}

**`WorkerGlobalScope.dump()`** 方法将消息记录到浏览器的标准输出（`stdout`）。如果浏览器是从终端启动的，则通过 `dump()` 输出的内容将显示在终端中。这与 {{domxref("Window.dump()")}} 相同，但适用于 worker。

`dump()` 的输出*不会*发送到浏览器的开发者工具控制台。若要记录到开发者工具控制台，请使用 [`console.log()`](/zh-CN/docs/Web/API/console/log_static)。

## 语法

```js-nolint
dump(message)
```

### 参数

- `message`
  - : 包含要记录的消息的字符串。

## 返回值

无（{{jsxref("undefined")}}）。

## 规范

此特性不属于任何规范。

## 浏览器兼容性

{{Compat}}
