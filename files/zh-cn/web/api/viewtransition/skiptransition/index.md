---
title: ViewTransition：skipTransition() 方法
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

{{domxref("ViewTransition")}} 接口的 **`skipTransition()`** 方法跳过视图过渡的动画部分，但不跳过更新 DOM 的 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 回调函数。

## 语法

```js-nolint
skipTransition()
```

### 参数

无

### 返回值

`undefined`。

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

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
