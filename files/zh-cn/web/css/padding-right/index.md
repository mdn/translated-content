---
title: padding-right
slug: Web/CSS/padding-right
---

{{CSSRef}}

CSS 属性 **padding-right** 是指一个元素在内边距区域（padding area）中右边的宽度。内边距（padding）是指一个元素的内容和边框之间的区域。和外边距（margin）不同，内边距（padding）是不允许有负值的。内边距（padding）可以用四个值声明一个元素的四个方向的内边距（paddings），这是一种 CSS 缩写属性。

```css
/* <length> values */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> value */
padding-right: 10%;

/* Global values */
padding-right: inherit;
padding-right: initial;
padding-right: unset;
```

{{cssinfo}}

## Syntax

### Values

- {{cssxref("length")}}
  - : 当内边距（padding）大小是一个固定单位数值的时候，一定不能为负数。
- {{cssxref("percentage")}}
  - : 当内边距（padding）是一个百分比的时候，百分比是和本身包含的元素的宽度有关的，同样一定不能为负数。

### Formal syntax

{{csssyntax}}

## Examples

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Box Model](/zh-CN/CSS/box_model)
- The {{cssxref("padding")}} shorthand property can be used to set paddings on all four sides of an element with a single declaration: {{cssxref("padding-top")}}, `padding-right`, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}.
