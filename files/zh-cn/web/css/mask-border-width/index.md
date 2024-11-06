---
title: mask-border-width
slug: Web/CSS/mask-border-width
---

{{CSSRef}}

**`mask-border-width`** [CSS](/zh-CN/docs/Web/CSS) 属性设置元素的 [mask border](/zh-CN/docs/Web/CSS/mask-border)的宽度

## 语法

```css
/* Keyword value */
mask-border-width: auto;

/* <length> value */
mask-border-width: 1rem;

/* <percentage> value */
mask-border-width: 25%;

/* <number> value */
mask-border-width: 3;

/* vertical | horizontal */
mask-border-width: 2em 3em;

/* top | horizontal | bottom */
mask-border-width: 5% 15% 10%;

/* top | right | bottom | left */
mask-border-width: 5% 2em 10% auto;

/* Global values */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: unset;
```

可以使用从下面的值列表中选择的一个，两个，三个或四个值来指定`mask-border-width`属性。

- 指定一个值时，即对应四条边的宽度；
- 指定两个值时，第一个值对应上下边框的宽度，第二个值对应左右边框的宽度；
- 指定三个值时，第一个值对应上边框的宽度，第二个值对应左右边框的宽度，第三个值对应底部边框的宽度；
- 指定四个值时，按顺时针方向，分别对应上，右，下，左边框的宽度。

### 值

- `<length-percentage>`
  - : `mask`边框宽度指定一个值或者百分比，设定百分比时，是相对于`mask`的长度和宽度。不能为负数。
- \<number>
  - : mask 边框宽度为元素`border-width`的倍数。不能为负数。
- `auto`
  - : 使`mask-border`的宽度等于相应[`mask-border-slice`](/zh-CN/docs/Web/CSS/mask-border-slice)的固有宽度或高度（以适用者为准），如果图像没有所需的固有尺寸，则使用相应的边框宽度。

### Formal syntax

{{csssyntax}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}
