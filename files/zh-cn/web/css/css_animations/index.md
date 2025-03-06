---
title: CSS 动画
slug: Web/CSS/CSS_animations
---

{{CSSRef}}

CSS 动画模块（CSS Animation）可以让你通过使用关键帧对 CSS 属性的值进行动画处理，例如背景位置和变换。每个关键帧都描述了动画元素在动画序列中的某个特定时间应该如何呈现。你可以使用动画模块中的属性来控制动画的持续时间、重复次数、延迟启动等方面。

### 正在运行的动画

要查看下面方框中的动画，请点击复选框“Play the animation”或将光标悬停在方框上。当动画激活时，顶部的云会改变形状，雪花会落下，底部的雪量会上升。要暂停动画，请取消复选框或将你的光标从盒子上移开。

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

这个动画示例使用 {{cssxref("animation-iteration-count")}} 来使雪片反复落下，{{cssxref("animation-direction")}} 使云层来回移动，{{cssxref("animation-fill-mode")}} 根据云层的移动来提高雪层，以及{{cssxref("animation-play-state")}}来暂停动画。

要查看这个动画示例的源码，[请查看 GitHub 仓库上的源码](https://github.com/mdn/css-examples/blob/main/modules/animation.html)。

## 参考

### 属性

- {{cssxref("animation")}} 简写属性
- {{cssxref("animation-composition")}} {{Experimental_Inline}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### At 规则

- {{cssxref("@keyframes")}}

### 函数

- [`scroll()`](/zh-CN/docs/Web/CSS/animation-timeline/scroll)

### 事件

所有动画，包括时间长度为 0 的动画，都会触发动画事件。

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### 接口

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## 指南

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : 关于如何使用 CSS 创建动画的分步教程，本文介绍每个相关的 CSS 属性和规则，并解释它们如何交互。
- [CSS 动画提示和技巧](/zh-CN/docs/Web/API/Web_Animations_API/Tips)
  - : 帮助你充分利用 CSS 动画的技巧和窍门。

## 相关概念

- {{cssxref("will-change")}} CSS 属性
- [`<easing-function>`](/zh-CN/docs/Web/CSS/easing-function) 数据类型
- [`prefers-reduced-motion`](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion) 媒体查询
- 术语{{glossary("Bézier curve", "贝塞尔曲线")}}

## 规范

{{Specifications}}

## 参见

- {{Experimental_Inline}} CSS 滚动时间线 {{cssxref('scroll-timeline-name')}} 和 {{cssxref('scroll-timeline-axis')}} 属性，以及 {{cssxref('scroll-timeline')}} 简写属性，创建与滚动容器的滚动偏移相关的动画。
- [CSS 变换](/zh-CN/docs/Web/CSS/CSS_transitions)模块中的属性根据用户的动作触发动画。
- HTML {{htmlelement("canvas")}} 元素与 [canvas API](/zh-CN/docs/Web/API/Canvas_API) 和 [WebGL API](/zh-CN/docs/Web/API/WebGL_API)一起用来绘制图形和动画。
- 所有动画相关元素的 {{domxref("SVGAnimationElement")}} 接口，包括 {{domxref("SVGAnimateElement")}}、{{domxref("SVGSetElement")}}、{{domxref("SVGAnimateColorElement")}}、{{domxref("SVGAnimateMotionElement")}} 以及 {{domxref("SVGAnimateTransformElement")}}。
