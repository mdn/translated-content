---
title: Event.cancelable
slug: Web/API/Event/cancelable
tags:
  - Property
  - Read-only
  - Reference
translation_of: Web/API/Event/cancelable
---
{{ ApiRef("DOM") }}

{{domxref("Event")}} 实例的只读属性 **`cancelable`** 表明该事件是否可以被取消，即事件是否可以像从未发生一样被阻止。

如果事件**不能**被取消，则其 `cancelable` 属性的值为 `false`，且事件发生时无法在事件监听回调中停止事件。

大部分由用户与页面交互产生的原生浏览器事件都可以被取消。取消 {{domxref("Element/click_event", "click")}}、{{domxref("Document/wheel_event", "wheel")}} 或 {{domxref("Window/beforeunload_event", "beforeunload")}} 事件将分别阻止用户点击某些元素、滚动页面或跳离页面。

使用 JavaScript 代码创建的[自定义事件](/zh-CN/docs/Web/API/Event/Event)，可以在初始化事件的时候声明该事件是否可以被取消。

要取消一个事件的默认行为，可以调用该事件的 {{domxref("event.preventDefault", "preventDefault()")}} 方法。

对于同时处理多种事件的监听回调，可能需要先检查 `cancelable` 属性的值，再调用这些事件的 {{domxref("event.preventDefault", "preventDefault()")}} 方法。

## 值

为一个{{domxref("Boolean", "布尔值")}}。若事件可以被取消，其值为 `true`。

## 示例

例如，浏览器厂商提议 {{domxref("Document/wheel_event",
  "wheel")}} 事件只能在[事件监听回调第一次执行](https://github.com/WICG/interventions/issues/33)时被取消，接下来的 `wheel` 事件都不能被取消。

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    // The event can be canceled, so we do so.
    event.preventDefault();
  } else {
    // The event cannot be canceled, so it is not safe
    // to call preventDefault() on it.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener('wheel', preventScrollWheel);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
