---
title: ViewTransition：updateCallbackDone 属性
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

{{domxref("ViewTransition")}} 接口的 **`updateCallbackDone`** 只读属性是一个 {{jsxref("Promise")}}。当传递给 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 的回调函数返回的 Promise 兑现时，该 Promise 也会兑现，当回调函数返回的 Promise 被拒绝时，该 Promise 也会被拒绝。

当你不关心过渡动画的成功或失败，而只关心 DOM 是否更新以及何时更新时，`updateCallbackDone` 非常有用。

## 值

一个 promise。

## 示例

```js
// 开始新的视图过渡
const transition = document.startViewTransition(() => displayNewImage());

transition.updateCallbackDone.then(() => {
  // 响应 DOM 更新成功
});
```

参见[过渡作为增强功能](https://developer.chrome.google.cn/docs/web-platform/view-transitions#transitions-as-an-enhancement)以获取一个有用的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
