---
title: TransformStreamDefaultController.error()
slug: Web/API/TransformStreamDefaultController/error
---

{{DefaultAPISidebar("Streams API")}}

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

在这个示例中，当一个分块中包含 symbol 时，`error()` 方法被使用。

```js
case 'symbol':
  controller.error("Cannot send a symbol as a chunk part")
  break
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
