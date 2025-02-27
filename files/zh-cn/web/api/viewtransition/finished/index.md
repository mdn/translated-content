---
title: ViewTransition：finished 属性
short-title: finished
slug: Web/API/ViewTransition/finished
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

{{domxref("ViewTransition")}} 接口的 **`finished`** 只读属性是一个 {{jsxref("Promise")}}。会在过渡动画完成（新的页面视图对用户可见且可交互）时兑现。

仅当传递给 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 的回调函数抛出异常或返回的 Promise 被拒绝时，`finished` 才会被拒绝，这表示页面的新状态未被创建。

如果过渡动画无法开始，或在动画期间使用 {{domxref("ViewTransition.skipTransition()")}} 跳过了过渡动画，那么视图过渡依旧可以到达最终状态，因此 `finished` 依旧会被兑现。

## 值

一个 promise。

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

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
