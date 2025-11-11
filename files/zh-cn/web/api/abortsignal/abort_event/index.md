---
title: AbortSignal.onabort
slug: Web/API/AbortSignal/abort_event
---

{{APIRef("DOM")}}

当事件关联的请求被中止时，触发 {{domxref("AbortSignal")}} 接口的 **`abort`** 事件，例如，调用 {{domxref("AbortController.abort()")}}。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置一个事件处理器属性。

```js
addEventListener("abort", (event) => {});
onabort = (event) => {};
```

## 事件类型

{{DOMxRef("Event")}} 泛型，无任何额外的属性。

## 示例

在下面例子中，我们将创建一个新的 `AbortController` 对象，并获取它的 {{domxref("AbortSignal")}}（在 `signal` 属性中可用）。稍后，我们使用事件处理器属性检查信号是否被中止。

你可以使用 [`addEventListener`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法来检测 `abort` 事件：

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

或者使用 `onabort` 事件处理器属性：

```js
const controller = new AbortController();
const signal = controller.signal;
signal.onabort = () => {
  console.log("Request aborted");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
