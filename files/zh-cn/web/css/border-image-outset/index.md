---
title: border-image-outset
slug: Web/CSS/border-image-outset
---

{{CSSRef("CSS Borders")}}

## 概述

`border-image-outset` 属性定义边框图像可超出边框盒的大小。

{{cssinfo}}

## 语法

```
Formal syntax: {{csssyntax("border-image-outset")}}
```

```
/* border-image-outset: sides */
border-image-outset: 30%;

/* border-image-outset:垂直 水平 */
border-image-outset: 10% 30%;

/* border-image-outset: 顶 水平 底 */
border-image-outset: 30px 30% 45px;

/* border-image-outset:顶 右 底 左  */
border-image-outset: 7px 12px 14px 5px;

border-image-repeat: inherit;
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
