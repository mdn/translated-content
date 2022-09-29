---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
---

{{CSSRef}}

## 概述

[CSS](/zh-CN/docs/CSS) `animation-timing-function` 属性定义 CSS 动画在每一动画周期中执行的节奏。可能值为一或多个 {{cssxref("&lt;timing-function&gt;")}}。

对于关键帧动画来说，timing function 作用于一个关键帧周期而非整个动画周期，即从关键帧开始开始，到关键帧结束结束。

定义于一个关键帧区块的缓动函数 (animation timing function) 应用到改关键帧；另外，若该关键帧没有定义缓动函数，则使用定义于整个动画的缓动函数。

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: steps(4, end);
animation-timing-function: frames(10);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Global values */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: unset;
```

通常用{{cssxref("animation")}}简写定义整个动画属性更为方便。

{{cssinfo}}

## 语法

### 值

- `<timingfunction>`
  - : 每个 {{cssxref("&lt;timing-function&gt;")}}代表了应用于动画的 timing function，定义于{{cssxref("animation-property")}}.

### 正式语法

{{csssyntax("animation-timing-function")}}

## 示例

参见 [CSS animations](/zh-CN/docs/CSS/CSS_animations)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS animations](/zh-CN/docs/Web/Guide/CSS/Using_CSS_transitions)
- {{domxref("AnimationEvent", "AnimationEvent")}}
