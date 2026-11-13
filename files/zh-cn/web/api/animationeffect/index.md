---
title: AnimationEffect
slug: Web/API/AnimationEffect
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 的 `AnimationEffect` 接口表示动画的效果。

`AnimationEffect` 是一个抽象接口，因此不能直接实例化。但像 {{domxref("KeyframeEffect")}} 这样的具体接口继承自它，你可以将这些接口的实例传递给 {{domxref("Animation")}} 对象进行播放，或在 [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)和[过渡](/zh-CN/docs/Web/CSS/Guides/Transitions)中使用它们。

## 实例方法

- {{domxref("AnimationEffect.getTiming()")}}
  - : 返回与动画相关联的包含所有动画的计时的对象。
- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : 返回此 `AnimationEffect` 的计算计时属性。
- {{domxref("AnimationEffect.updateTiming()")}}
  - : 更新此 `AnimationEffect` 的指定计时属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.effect")}}
