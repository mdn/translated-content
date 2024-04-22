---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
---

{{APIRef("HTML DOM")}}

**`PromiseRejectionEvent`** 接口表示出现在 JavaScript {{jsxref("Promise")}}s 被 rejecte (拒绝) 时触发的事件。这些事件对遥测 (远程测试) 和调试特别的有用。

## 构造函数

- {{domxref("PromiseRejectionEvent.PromiseRejectionEvent", "PromiseRejectionEvent()")}}
  - : 用给定的参数生成一个 `PromiseRejectionEvent` 事件。

## 属性

_也从它的父级{{domxref("Event")}}继承属性。_

- {{domxref("PromiseRejectionEvent.promise")}} {{readOnlyInline}}
  - : 被 rejected 的 JavaScript {{jsxref("Promise")}} 。
- {{domxref("PromiseRejectionEvent.reason")}} {{readOnlyInline}}
  - : 一个值或 {{jsxref("Object")}} 表明为什么 promise 被 rejected，并传递给{{jsxref("Promise.reject()")}}。

## 方法

_没有特定的方法; 从它的父级 {{domxref("Event")}}继承方法。_

## 事件

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : 在一个 JavaScript {{jsxref("Promise")}} 被 reject 时触发，在 reject 后由 promise 的 reject 处理函数处理。
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : 在一个 JavaScript {{jsxref("Promise")}} 被 reject（拒绝）但是没有 reject 处理函数来处理时触发。

## 示例

```js
window.onunhandledrejection = function (e) {
  console.log(e.reason);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{domxref("Window/rejectionhandled_event", "onrejectionhandled")}}
- {{domxref("Window/unhandledrejection_event", "onunhandledrejection")}}
