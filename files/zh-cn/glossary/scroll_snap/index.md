---
title: 滚动吸附
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

**滚动吸附**（Scroll snapping）指的是当滚动操作结束时，内容会“吸附”到特定位置，而不是停在任意点。普通的滚动操作缺乏精确性，无法对齐到段落、句子或图片边界。例如，在轮播图中，滚动操作可能会停在图片中间，导致图片部分可见。过去 Web 开发者通常依赖基于 JavaScript 的解决方案，而现在浏览器已开始支持 [CSS 滚动吸附特性](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)，允许开发者定义滚动吸附容器和吸附行为。

滚动吸附是一种可控的滚动体验，开发者可以将某个元素定义为[滚动容器](/zh-CN/docs/Glossary/Scroll_container)，并为滚动操作设置边界。滚动操作结束时会停在这些吸附位置边界，内容会自动对齐。例如，在上面的轮播图例子中，当用户完成滚动操作时，当前可见的图片会自动对齐到位。

- 滚动吸附容器
  - : **滚动吸附容器**是应用了滚动吸附的滚动容器。例如，如果一个盒子有溢出内容并设置了 {{CSSXref("scroll-snap-type")}} 属性（值不为 `none`），那么该盒子就会吸附吸附位置。一个盒子的滚动吸附容器是其最近的吸附位置捕获滚动容器祖先。如果没有滚动吸附容器，其吸附位置（如果有）不会触发吸附。
- 吸附视口（Snapport）
  - : **吸附视口**是[滚动视口](/zh-CN/docs/Glossary/Scroll_container#scrollport)中用于对齐吸附区域的区域。默认情况下，它与滚动容器的可视视口相同，但可以通过 {{CSSXref("scroll-padding")}} 属性定义。[吸附区域](#吸附区域（snap_area）)会与吸附视口对齐。
- 吸附区域（Snap area）
  - : 滚动容器中元素的**吸附区域**是通过元素的 {{CSSXref("scroll-margin")}} 外边距定义的区域。吸附区域用于将元素吸附到吸附视口。
- 吸附目标（Snap target）
  - : 滚动吸附容器内的后代元素，在容器滚动时会被吸附。{{CSSXref("scroll-snap-align")}} 属性定义了每个吸附目标的吸附位置。

## 参见

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)模块
