---
title: 滚动链
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

**滚动链**是指用户滚动超过滚动元素的{{Glossary("Scroll_boundary", "滚动边界")}}时，导致祖先元素上的滚动行为。

当用户在可滚动元素（如 `<div>` 或 `<textarea>`）内滚动，并且滚动元素的[滚动口](/zh-CN/docs/Glossary/Scroll_container#滚动口)边界（顶部、底部、左侧或右侧）被触发时，可能会出现“链式效果”，即滚动操作会无缝传播到父元素。这种行为会在垂直和水平方向上创建连续的滚动体验。

**滚动链**是滚动元素的顺序，其中滚动操作从一个元素传递到另一个元素。当内部元素滚动到其极限时，滚动会继续到其父元素，从而创建一系列滚动操作。滚动通常会递归到包含块。

## 参见

- {{CSSxRef("overscroll-behavior")}} CSS 属性
- [CSS 溢出](/zh-CN/docs/Web/CSS/Guides/Overflow)模块
- [CSS 溢出表现](/zh-CN/docs/Web/CSS/Guides/Overscroll_behavior)模块
- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)模块
