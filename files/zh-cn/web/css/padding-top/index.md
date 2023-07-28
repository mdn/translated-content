---
title: padding-top
slug: Web/CSS/padding-top
---

{{CSSRef}}

CSS 属性 **padding-top** 是指一个元素在内边距区域（padding area）中上方的高度。内边距（padding）是指一个元素的内容和边框之间的区域。和外边距（margin）不同，内边距（padding）是不允许有负值的。内边距（padding）可以用四个值声明一个元素的四个方向的内边距（paddings），这是一种 CSS 缩写属性。

![The effect of the CSS padding-top property on the element box](/files/4105/padding-top.svg)

```css
/* <length> values */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> value */
padding-top: 10%;

/* Global values */
padding-top: inherit;
padding-top: initial;
padding-top: unset;
```

{{cssinfo}}

## 语法规则

### 取值

- {{cssxref("length")}}
  - : 当内边距（padding）大小是一个固定单位数值的时候，一定不能为负数。
- {{cssxref("percentage")}}
  - : 当内边距（padding）是一个百分比的时候，百分比是和**包含块（containing block）的宽度**有关的，同样一定不能为负数。

### 正式语法

{{csssyntax}}

## 实例

```css
.content {
  padding-top: 5%;
}
.sidebox {
  padding-top: 10px;
}
```

## 规范

{{Specifications}}

## 浏览器的兼容性

{{Compat}}

## 参见

- [CSS Box Model](/zh-CN/CSS/box_model)
- The {{cssxref("padding")}} shorthand property can be used to set paddings on all four sides of an element with a single declaration: `padding-top`, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}.
