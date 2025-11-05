---
title: border-image-outset
slug: Web/CSS/Reference/Properties/border-image-outset
---

`border-image-outset` 属性定义边框图像可超出边框盒的大小。

## 语法

```css
/* <length> 值 */
border-image-outset: 1rem;

/* <number> 值 */
border-image-outset: 1.5;

/* 上、下 | 左、右 */
border-image-outset: 1 1.2;

/* 上 | 左、右 | 下 */
border-image-outset: 30px 2 45px;

/* 上 | 右 | 下 | 左 */
border-image-outset: 7px 12px 14px 5px;

/* 全局值值 */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: revert;
border-image-outset: revert-layer;
border-image-outset: unset;
```

### 值

- _sides_
  - : 边框图像在四个方向超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- _horizontal_
  - : 边框图像在水平方向（左和右）超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- _vertical_
  - : 边框图像在垂直方向（上和下）超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- _top_
  - : 边框图像在上方超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- _bottom_
  - : 边框图像在下方超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- _right_
  - : 边框图像在右方超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- _left_
  - : 边框图像在左方超出边框盒的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;number&gt;")}}数量。
- `inherit`
  - : 四个方向的值都继承于父元素的该属性计算后值。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
