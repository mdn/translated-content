---
title: transition-property
slug: Web/CSS/transition-property
---

{{CSSRef("CSS Transitions")}} {{SeeCompatTable}}

## 概述

**`transition-property`** 指定应用过渡属性的名称。

> **备注：** [可被用于动画的属性集合](/zh-CN/docs/Web/CSS/CSS_animated_properties)文章近期将会变更，应该避免使用列表中出现的但目前没有动画的属性。否则，将会出现一些不可预料的结果。

如果指定简写属性（比如 {{cssxref("background")}}），那么其完整版中所有可以动画的属性都会被应用过渡。

{{cssinfo}}

## 语法

```css
/* Keyword values */
transition-property: none;
transition-property: all;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

transition-property: test1;
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property: all, -moz-specific, sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
```

### 值

- `none`
  - : 没有过渡动画。
- `all`
  - : 所有可被动画的属性都表现出过渡动画。
- `IDENT`
  - : 属性名称。由小写字母 `a` 到 `z`，数字 `0` 到 `9`，下划线（`_`）和破折号（`-`）。第一个非破折号字符不能是数字。同时，不能以两个破折号开头。

### 正式语法

{{csssyntax}}

## 示例

在 [CSS transitions](/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) 中有几个示例可以参考。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参考

- [Using CSS transitions](/Web/Guide/CSS/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
