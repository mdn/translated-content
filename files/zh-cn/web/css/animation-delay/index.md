---
title: animation-delay
slug: Web/CSS/animation-delay
---

{{CSSRef}}{{SeeCompatTable}}

## 概述

`animation-delay` [CSS](/zh-CN/docs/CSS)属性定义动画于何时开始，即从动画应用在元素上到动画开始的这段时间的长度。

`0s`是该属性的默认值，代表动画在应用到元素上后立即开始执行。否则，该属性的值代表动画样式应用到元素上后到开始执行前的时间长度；

定义一个负值会让动画立即开始。但是动画会从它的动画序列中某位置开始。例如，如果设定值为 -1s，动画会从它的动画序列的第 1 秒位置处立即开始。

如果为动画延迟指定了一个负值，但起始值是隐藏的，则从动画应用于元素的那一刻起就获取起始值。

通常用{{cssxref("animation")}}简写属性一次性设置动画效果较为方便。

{{cssinfo}}

## 语法

```css
animation-delay: 3s;
animation-delay: 2s, 4ms;
```

### 值

- `<time>`
  - : 从动画样式应用到元素上到元素开始执行动画的时间差。该值可用单位为秒 (s) 和毫秒 (ms)。如果未设置单位，定义无效。

### 正式语法

{{csssyntax("animation-delay")}}

## 示例

参见[CSS animations](/zh-CN/docs/CSS/CSS_animations)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS animations](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
