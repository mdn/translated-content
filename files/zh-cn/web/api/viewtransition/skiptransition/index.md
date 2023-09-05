---
title: "ViewTransition: skipTransition() method"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ViewTransition.skipTransition
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`skipTransition()`** 是 {{domxref("ViewTransition")}} 接口上的一个方法，它跳过视图过渡的动画部分，但不跳过更新 DOM 的 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 回调函数。

## 语法

```js-nolint
skipTransition()
```

### 参数

无

### 返回值

`undefined`

## 示例

```js
// 开始新的视图过渡
const transition = document.startViewTransition(() => displayNewImage());

// 跳过视图过渡动画，仅更新 DOM
transition.skipTransition();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
