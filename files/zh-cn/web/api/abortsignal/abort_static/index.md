---
title: AbortSignal.abort()
slug: Web/API/AbortSignal/abort_static
---

{{APIRef("DOM")}}

静态方法 **`AbortSignal.abort()`** 返回一个已经设置为中止的 {{domxref("AbortSignal")}}（并且不会触发 {{domxref("AbortSignal/abort_event","abort")}} 事件）。

它是以下片段的简写：

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

例如，将它传递给一个 fetch 方法，以运行它的中止逻辑（也就是说，可能其代码的执行顺序是即使预期的 fetch 操作还没有启动，也应该运行中止逻辑）。

> **备注：** 该方法在目的上类似于 {{JSxRef("Promise.reject")}}。

## 语法

```js-nolint
AbortSignal.abort()
AbortSignal.abort(reason)
```

### 参数

- `reason`
  - : 操作被中止的原因，可以是任意的 JavaScript 值。如果没有指定原因，则默认设置为"AbortError"{{domxref("DOMException")}}。

### 返回值

一个 {{domxref("AbortSignal.aborted")}} 属性设置为 `true` 的 `AbortSignal` 实例，并且 {{domxref("AbortSignal.reason")}} 设置为指定的或者默认的原因值。

## 参数

{{Specifications}}

## 浏览器兼容性

{{Compat}}
