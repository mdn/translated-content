---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{CSSRef}}

## 概述

[CSS](/zh-CN/docs/Web/CSS) **`flex-flow`** 属性是 flex-direction 和 flex-wrap 的简写。

{{cssinfo}}

更多信息参见 [使用 CSS 弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

## 语法

```css
/* flex-flow：<'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow：<'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow：<'flex-direction'> 和 <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* 全局值 */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### 取值

更多取值信息请查看 [`flex-direction`](/zh-CN/docs/Web/CSS/flex-direction) 和 [`flex-wrap`](/zh-CN/docs/Web/CSS/flex-wrap)

## 示例

```css
element {
  /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
  flex-flow: column-reverse wrap;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
