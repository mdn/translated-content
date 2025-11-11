---
title: Web Animations API
slug: Web/API/Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}{{ SeeCompatTable() }}

**Web Animations API** 允许同步和定时更改网页的呈现，即 DOM 元素的动画。它通过组合两个模型来实现：时序模型和动画模型。

## 概念和用法

Web Animations API 为浏览器和开发人员提供了一种用于描述 DOM 元素的动画的通用语言。要获得有关 API 背后的概念以及如何使用它的更多信息，请阅读[使用 Web Amimations API](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)。

## 网页动画接口

- {{domxref("Animation")}}
  - : 提供播放控制、动画节点或源的时间轴。可以接受使用{{domxref("KeyframeEffect.KeyframeEffect")}}构造函数创建的对象作为参数。
- {{domxref("KeyframeEffect")}}
  - : 描述动画属性的集合，调用**keyframes**及{{domxref("Animation Effect Timing Properties")}}。然后可以使用 {{domxref("Animation")}} 构造函数进行播放。
- {{domxref("AnimationTimeline")}}
  - : 表示动画的时间轴。此接口用以定义时间轴功能（继承自{{domxref("DocumentTimeline")}}和{{domxref("future timeline")}}），并且本身不被开发人员访问。
- {{domxref("DocumentTimeline")}}
  - : 表示动画时间轴，包括默认的{{domxref("DocumentTimeline")}}（通过{{domxref("Document.timeline")}}访问）。
- {{domxref("AnimationEffectTiming")}}
  - : 包含{{domxref("KeyframeEffect")}}的{{domxref("KeyframeEffect.timing", "timing")}}返回的定时属性对象。它从{{domxref("AnimationEffectTimingReadOnly")}}继承其属性，但是以非只读形式。
- {{domxref("SharedKeyframeList")}}
  - : 表示可在{{domxref("KeyframeEffect")}}对象之间共享的关键帧序列。通过使用该对象，多个{{domxref("KeyframeEffect")}}对象可以重用相同的关键帧，而无需支付多次解析它们的成本。
- {{domxref("AnimationEffectTimingProperties")}}
  - : {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly()")}}和 {{domxref("KeyframeEffect.KeyframeEffect()")}}的定时属性对象。

## 扩展的其他接口

The Web Animations API 向**{{domxref("document")}}**和**{{domxref("element")}}** 添加了一些新的功能。

### 扩展到 `Document` 的接口

- {{domxref("document.timeline")}}
  - : `DocumentTimeline` 表示默认文档时间轴
- {{domxref("document.getAnimations()")}}
  - : 返回当前对文档中的元素有效的{{domxref("Animation")}}对象的数组。

### 扩展到 `Element` 的接口

- {{domxref("Element.animate()")}}
  - : 用于在元素上创建和播放动画的快捷方式。它返回创建的{{domxref("Animation")}}对象实例。

## Web 动画只读接口

规格中包括以下接口，用于定义在多个其他位置使用的功能。你不会在 Web 开发工作中直接使用这些接口，但他们能帮助库或框架作者了解这些接口如何工作，使他们的库的实现可以更有效，或者浏览器工程师寻找一个比规范提供的内容更容易的参考。

- {{domxref("AnimationEffectTimingReadOnly")}}
  - : A dictionary object of timing properties, which are inherited by the mutable {{domxref("AnimationEffectTiming")}} interface associated with {{domxref("KeyframeEffect")}}.
- {{domxref("AnimationEffectReadOnly")}}
  - : Defines current and future "Animation Effects" like {{domxref("KeyframeEffect")}}, which can be passed to {{domxref("Animation.Animation")}} objects for playing, and {{domxref("KeyframeEffectReadOnly")}} which is used by {{domxref("KeyframeEffect")}} (inherited by [CSS Animations](/zh-CN/docs/Web/CSS/Guides/Animations) and [Transitions](/zh-CN/docs/Web/CSS/Guides/Transitions)).
- {{domxref("KeyframeEffectReadOnly")}}
  - : Describes sets of animatable properties and values that can be played using the {{domxref("Animation.Animation()")}} constructor, and which are inherited by {{domxref("KeyframeEffect")}}.

## 规范

{{Specifications}}

## 相关内容

- [Using the Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Web Animations demos](https://mozdevs.github.io/Animation-examples/)
- [Polyfill](https://github.com/web-animations/web-animations-js)
- Firefox's current implementation: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [Browser support test](https://codepen.io/danwilson/pen/xGBKVq)
