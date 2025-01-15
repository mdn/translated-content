---
title: background-position-x
slug: Web/CSS/background-position-x
---

{{CSSRef}}

## 概要

**`background-position-x`** CSS 属性设置水平方向的位置，与每个背景图片等位置层设置属性 {{cssxref("background-origin")}}相关。更多信息请查看{{cssxref("background-position")}}属性，这个用的比较普遍。

> [!NOTE]
> 这个属性的值会被后面声明的属性覆盖掉，如{{cssxref("background")}}和{{cssxref("background-position")}}等简写的属性。

{{cssinfo}}

## 语法

```css
/* Keyword values */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <percentage> values */
background-position-x: 25%;

/* <length> values */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* side-relative values */
background-position-x: right 3px;
background-position-x: left 25%;

/* Multiple values */
background-position-x: 0px, center;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: unset;
```

### 值

- `left`
  - : 在位置层上相对于左边的位置。
- `center`
  - : 在位置层上相对于中间点的位置。
- `right`
  - : 在位置层上相对于右边的位置。
- `<length>`
  - : {{cssxref("&lt;length&gt;")}}值是定义相对于位置层边缘的距离，边缘默认为左边。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}}值是定义相对于位置层边缘的距离百分比，边缘默认为左边。

### 正规语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- {{cssxref("background-position")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Multiple backgrounds](/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
