---
title: 滚动边界
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

**滚动边界**是指滚动元素在特定方向上无法再滚动的点，无论是在顶部还是底部（或左侧/右侧，用于水平滚动）。通常这是[滚动口](/zh-CN/docs/Glossary/Scroll_container#滚动口)的边缘。

当{{Glossary("Scroll_container", "滚动容器")}}的内容在滚动方向上不超过容器大小时，容器被认为始终处于其滚动边界。这是因为没有额外的内容可以滚动。如果内容被禁止滚动，例如当设置了 {{cssxref("overflow", "overflow: hidden")}} 时，该元素不是滚动容器，因此没有滚动边界。

当用户滚动内容到达滚动视口的滚动边界时，可能会出现视觉效果，例如在移动设备上拉动页面时会出现弹跳效果或触发类似移动设备上的下拉刷新的功能性操作。这种默认浏览器行为称为**边界默认操作**。

例如，在移动设备上，当页面已经在顶部时向下拖动页面会导致弹跳效果，有时会触发页面刷新。这种弹跳或刷新是边界默认操作。

边界默认操作可以是本地的或非本地的。

- **本地边界默认操作**是发生在特定滚动区域边界的操作，限制在该元素内。这种操作被认为是*本地*的，因为它不会影响任何祖先容器或页面的其余部分。
- **非本地边界默认操作**是指到达滚动容器的滚动边界会对特定元素之外的内容产生影响。一个例子是{{Glossary("Scroll_chaining", "滚动链")}}，当到达一个元素的滚动边界时，会触发父元素（或祖先元素）的滚动，甚至可能触发页面范围的操作，例如导航。

## 参见

- {{CSSxRef("overscroll-behavior")}} CSS 属性
- [CSS 溢出](/zh-CN/docs/Web/CSS/Guides/Overflow)模块
- [CSS 过度滚动行为](/zh-CN/docs/Web/CSS/Guides/Overscroll_behavior)模块
- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)模块
