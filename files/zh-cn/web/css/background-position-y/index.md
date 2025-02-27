---
title: background-position-y
slug: Web/CSS/background-position-y
---

{{CSSRef}}

## 摘要

**`background-position-y`** 属性用于设置初始状态时背景图片在垂直方向上的位置，这个位置相对于通过 {{cssxref("background-origin")}} 定义的背景层的原点进行定位。需要获得更多的信息可以查看{{cssxref("background-position")}} 属性，这个属性已经得到了长久且广泛的支持。

> **备注：** `background-position-y` 设定的值会被 {{cssxref("background")}} 或者是 {{cssxref("background-position")}} 的简写属性的`background-position-x`后面的值所覆盖。

```css
/* Keyword values */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* <percentage> values */
background-position-y: 25%;

/* <length> values */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* side-relative values */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Multiple values */
background-position-y: 0px, center;

/* Global values */
background-position-y: inherit;
background-position-y: initial;
background-position-y: unset;
```

{{cssinfo}}

## 语法

### 合法值

- `top`
  - : 将背景图片的上边界与背景位置层的上边界对齐。
- `center`
  - : 将背景图片垂直方向上的中线与背景位置层的垂直方向中线对齐。
- `bottom`
  - : 将背景图片的下边界与背景位置层的下边界对齐。
- `<length>`
  - : 通过{{cssxref("&lt;length&gt;")}} 直接设定具体的数值，该数值定义了背景图片垂直方向的上边界相对于当前背景层 (content-box/padding-box/border-box) 的垂直方向上边界的偏移量，默认情况下是 padding-box.
- `<percentage>`
  - : 通过{{cssxref("&lt;percentage&gt;")}} 百分比的设置，该百分比定义了背景图片垂直方向的上边界相对于当前背景层 (content-box/padding-box/border-box) 的垂直方向上边界的偏移百分比，从而得到偏移量，该偏移量的计算方法是:(当前背景层的高 - 背景图片的高) \* 百分比，高度差和百分比都保留符号，例如 (100px - 200px) \* (-10%) = 10px 那么偏移量就是正的 10px(向下为正方向),默认情况下是 padding-box.

### Formal syntax

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("background-position")}}
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Multiple backgrounds](/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
