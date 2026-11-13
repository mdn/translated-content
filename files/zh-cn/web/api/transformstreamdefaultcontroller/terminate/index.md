---
title: TransformStreamDefaultController：terminate() 方法
short-title: terminate()
slug: Web/API/TransformStreamDefaultController/terminate
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

{{domxref("TransformStreamDefaultController")}} 接口的 **`terminate()`** 方法用于关闭流的可读端并且会使流的可写端出错。

## 语法

```js-nolint
terminate()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在以下示例中，调用了 {{domxref("TransformStreamDefaultController")}} 的 `terminate()` 方法。

```js
controller.terminate();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
