---
title: "ViewTransition: updateCallbackDone property"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ViewTransition.updateCallbackDone
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`updateCallbackDone`** 是 {{domxref("ViewTransition")}} 接口上的一个只读属性，它是一个 {{jsxref("Promise")}}。当 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 的回调函数返回的 Promise 兑现时，该 Promise 也兑现，当回调函数返回的 Promise 拒绝时，该 Promise 也拒绝。

当你不关心过渡动画的成功或失败，而只关心 DOM 是否更新以及何时更新时，`updateCallbackDone` 非常有用。

## 值

一个 {{jsxref("Promise")}}。

## 示例

```js
// 开始新的视图过渡
const transition = document.startViewTransition(() => displayNewImage());

transition.updateCallbackDone.then(() => {
  // 响应 DOM 更新成功
});
```

参见 [Transitions as an enhancement](https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement) 以获取一个有用的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
