---
title: CSS 视图过渡
slug: Web/CSS/Guides/View_transitions
l10n:
  sourceCommit: ee7620b98800392073f3c8f94a9b2d048191356d
---

**CSS 视图过渡**（CSS view transition）模块定义了[视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API) 的行为，它允许开发人员在文档之内或在文档之间的不同状态之间创建动画过渡。此模块还定义了用于设置这些过渡样式的 CSS 属性和伪元素。

## 参考

### 属性

- {{cssxref("view-transition-class")}}
- {{cssxref("view-transition-name")}}

### At 规则和描述符

- {{cssxref("@view-transition")}}
  - [`navigation`](/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition#navigation) 描述符

### 选择器和伪元素

- {{cssxref(":active-view-transition")}}
- {{cssxref(":active-view-transition-type()")}}
- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

### 接口

- {{domxref("CSSViewTransitionRule")}}
- {{domxref("ViewTransition")}}
  - {{domxref("ViewTransition.skipTransition()")}} 方法
  - {{domxref("ViewTransition.updateCallbackDone")}}
  - {{domxref("ViewTransition.ready")}}
  - {{domxref("ViewTransition.finished")}}
- {{domxref("Document.startViewTransition()")}} 方法

## 指南

- [使用视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API/Using)
  - : 解释如何创建视图过渡和自定义过渡动画，包括操纵活动的视图过渡。

## 相关概念

- {{domxref("PageRevealEvent", "pagereveal")}} 事件
- {{domxref("PageSwapEvent", "pageswap")}} 事件
- {{domxref("Document.visibilityState")}}

- [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)模块
  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - {{domxref("CSSKeyframesRule")}}
  - {{domxref("CSSStyleRule")}}
  - [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)

- [CSS 变换](/zh-CN/docs/Web/CSS/Guides/Transforms)模块
  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## 规范

{{Specifications}}

## 参见

- [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [函数式伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes#函数式伪类)
- [学习：伪类和伪元素](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
