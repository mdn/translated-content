---
title: ViewTransition：finished 属性
short-title: finished
slug: Web/API/ViewTransition/finished
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`finished`** 是 {{domxref("ViewTransition")}} 接口上的一个只读属性，它是一个 {{jsxref("Promise")}}。当过渡动画完成时，该 Promise 就会被兑现，新的页面视图对用户可见且可交互。

仅当 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 的回调函数抛出异常或返回一个被拒绝的 Promise 时，`finished` 才会被拒绝，这表示页面的新状态未被创建。

如果过渡动画无法开始，或在动画期间使用 {{domxref("ViewTransition.skipTransition()")}} 跳过了过渡动画，那么视图过渡依旧可以到达最终状态，因此 `finished` 依旧会被兑现。

## 值

一个 {{jsxref("Promise")}}。

## 示例

### 不同的导航使用不同的过渡效果

有时，某些导航需要特定的过渡效果，例如后退导航可能与前进导航的过渡效果不同。处理这种情况的最佳实践是在 `<html>` 元素上设置一个类名以处理过渡（使用特定的选择器应用正确的动画），然后在过渡结束后删除该类名。

```js
async function handleTransition() {
  if (isBackNavigation) {
    document.documentElement.classList.add("back-transition");
  }

  const transition = document.startViewTransition(() =>
    updateTheDOMSomehow(data),
  );

  try {
    await transition.finished;
  } finally {
    document.documentElement.classList.remove("back-transition");
  }
}
```

> **备注：** `isBackNavigation` 不是内置特性；它是一个理论上存在的函数，可以使用 [Navigation API](/zh-CN/docs/Web/API/Navigation_API) 或类似的特性实现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.com/docs/web-platform/view-transitions/)
