---
title: Document：startViewTransition() 方法
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
---

{{APIRef("Document")}}{{SeeCompatTable}}

{{domxref("View Transitions API", "View Transitions API", "", "nocode")}} 的 **`startViewTransition()`** 方法开始一个新的视图过渡，并返回一个 {{domxref("ViewTransition")}} 对象来表示它。

当调用 `startViewTransition()` 时，将按照[视图过渡过程](/zh-CN/docs/Web/API/View_Transitions_API#视图过渡过程)中所述的步骤序列进行。

## 语法

```js-nolint
startViewTransition(callback)
```

### 参数

- `callback`
  - : 一个在视图过渡过程中通常用于更新 DOM 的回调函数，它返回一个 {{jsxref("Promise")}}。这个回调函数在 API 截取了当前页面的屏幕截图后被调用。当回调函数返回的 Promise 兑现时，视图过渡将在下一帧开始。如果回调函数返回的 Promise 拒绝，过渡将被放弃。

### 返回值

一个 {{domxref("ViewTransition")}} 对象实例。

## 示例

### 基本用法

在[基础视图过渡演示](https://mdn.github.io/dom-examples/view-transitions/)中，`updateView()` 函数处理支持和不支持 View Transitions API 的浏览器。在支持的浏览器中，我们调用 `startViewTransition()` 来启动视图过渡，而不关心返回值。

```js
function updateView(event) {
  // 处理在 <a> 或 <img> 上触发事件的差异
  let targetIdentifier;
  if (event.target.firstChild === null) {
    targetIdentifier = event.target;
  } else {
    targetIdentifier = event.target.firstChild;
  }

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // 浏览器不支持 View Transitions 时的回退方案：
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // 开始一次视图过渡：
  const transition = document.startViewTransition(() => displayNewImage());
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
