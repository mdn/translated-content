---
title: TransformStreamDefaultController：error() 方法
short-title: error()
slug: Web/API/TransformStreamDefaultController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

{{domxref("TransformStreamDefaultController")}} 接口的 **`error()`** 方法会使流的两端出错。与它的进一步交互都会失败并携带给定的错误信息，并且队列中的任何分块都将被丢弃。

## 语法

```js-nolint
error(reason)
```

### 参数

- `reason`
  - : 一个字符串，包含在与流进一步交互时返回的错误信息。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在此示例中，当某个分块无法进行转换时，会调用 `error()` 方法。

```js
const transformContent = {
  start() {
    /* … */
  },
  async transform(chunk, controller) {
    try {
      chunk = await applyMyTransformation(chunk);
    } catch (err) {
      controller.error(`无法转换分块：${err}`);
    }
    // …
  },
  // …
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
