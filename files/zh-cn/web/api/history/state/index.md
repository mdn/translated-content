---
title: History：state 属性
short-title: state
slug: Web/API/History/state
l10n:
  sourceCommit: b8eb6acf2fa8e54254b1165e58adbe2378591da1
---

{{APIRef("History API")}}

{{DOMxRef("History")}} 接口的 **`state`** 只读属性表示历史记录堆栈顶部的状态值。通过该属性，可以在无需等待 {{domxref("Window/popstate_event", "popstate")}} 事件的情况下查看当前状态。

## 值

历史记录堆栈顶部的状态。在调用 {{domxref("History.pushState","pushState()")}} 或 {{domxref("History.replaceState","replaceState()")}} 方法之前，该值为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 示例

下面的代码在调用 {{domxref("History.pushState","pushState()")}} 方法向历史记录中推入一个值之前，先输出 `history.state` 的值。下一行再次将其输出到控制台，可以看到此时 `history.state` 已具有一个值。

```js
// 应该为 null，因为我们尚未修改历史记录堆栈
console.log("调用 pushState 前的 History.state：", history.state);

// 现在向堆栈中推入一个新状态
history.pushState({ name: "Example" }, "pushState 示例", "page3.html");

// 此时 state 已有值
console.log("调用 pushState 后的 History.state：", history.state);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用历史记录 API](/zh-CN/docs/Web/API/History_API/Working_with_the_History_API)
- [`History.pushState()`](/zh-CN/docs/Web/API/History/pushState)
- [`History.replaceState()`](/zh-CN/docs/Web/API/History/replaceState)
- [`PopStateEvent.state`](/zh-CN/docs/Web/API/PopStateEvent/state)
