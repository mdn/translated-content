---
title: Web 动画 API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

**Web 动画 API** 允许同步和定时更改网页的呈现，即 DOM 元素的动画。它通过组合两个模型来实现：时序模型（Timing Model）和动画模型（Animation Model）。

## 概念和用法

Web 动画 API 为浏览器和开发人员提供了一种用于描述 DOM 元素的动画的通用语言。要获得有关 API 背后的概念以及如何使用它的更多信息，请阅读[使用 Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)。

## Web 动画接口

- {{domxref("Animation")}}
  - : 提供播放控制、动画节点或源的时间轴。可以接受使用 {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} 构造函数创建的对象作为参数。
- {{domxref("KeyframeEffect")}}
  - : 描述动画属性的集合及其值，称为**关键帧**及其时间选项。然后可以使用 {{domxref("Animation.Animation", "Animation()")}} 构造函数进行播放。
- {{domxref("AnimationTimeline")}}
  - : 表示动画的时间轴。此接口用于定义时间轴特性（继承自 {{domxref("DocumentTimeline")}} 和未来的时间轴对象），并且本身不被开发人员访问。
- {{domxref("AnimationEvent")}}
  - : [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)模块的一部分，捕获动画名称和已用时间。
- {{domxref("DocumentTimeline")}}
  - : 表示动画时间轴，包括默认的文档时间轴（通过 {{domxref("Document.timeline")}} 属性访问）。

## 对其他接口的扩展

Web 动画 API 向 {{domxref("document")}} 和 {{domxref("element")}} 添加了一些特性。

### 对 `Document` 接口的扩展

- {{domxref("document.timeline")}}
  - : 表示默认文档时间轴的 `DocumentTimeline` 对象。
- {{domxref("document.getAnimations()")}}
  - : 返回一个数组，其中包含当前在 `document` 元素上生效的 {{domxref("Animation")}} 对象。

### 对 `Element` 接口的扩展

- {{domxref("Element.animate()")}}
  - : 用于在元素上创建和播放动画的快捷方式。它返回创建的 {{domxref("Animation")}} 对象实例。
- {{domxref("Element.getAnimations()")}}
  - : 返回一个包含当前影响元素或计划在未来影响元素的 {{domxref("Animation")}} 对象的数组。

## 规范

{{Specifications}}

## 参见

- CSS {{cssxref("animation")}} 简写属性
- CSS {{cssxref("animation-timeline")}} 属性
- [使用 Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)
- [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)模块
- [CSS 滚动驱动动画](/zh-CN/docs/Web/CSS/Guides/Scroll-driven_animations)模块
