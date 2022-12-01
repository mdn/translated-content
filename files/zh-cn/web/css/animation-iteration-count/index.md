---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
---

{{CSSRef}} {{ SeeCompatTable() }}

## 概要

**`animation-iteration-count`** [CSS](/zh-CN/CSS) 属性 定义动画在结束前运行的次数 可以是 1 次 无限循环。

如果指定了多个值，每次播放动画时，将使用列表中的下一个值，在使用最后一个值后循环回第一个值。

通常情况下，使用`animation`简写属性，来一次性设置所有动画属性会更方便。

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

## 语法

```css
/* 值为关键字 */
animation-iteration-count: infinite;

/* 值为数字 */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* 指定多个值 */
animation-iteration-count: 2, 0, infinite;
```

`animation-iteration-count` 属性可以指定一个或多个以逗号分隔的值。

### 值

- `infinite`
  - : 无限循环播放动画。
- `<number>`
  - : 动画播放的次数；默认值为`1`。可以用小数定义循环，来播放动画周期的一部分：例如，`0.5` 将播放到动画周期的一半。不可为负值。

### Formal syntax

{{csssyntax}}

## 示例

去看 [CSS animations](/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for examples. 点击链接去看栗（例）子

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using CSS animations](/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
