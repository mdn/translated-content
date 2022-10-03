---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
---

{{CSSRef}}

的[CSS](/zh-CN/docs/Web/CSS)属性除以{{cssxref("掩模边界源")}}成区域的图像集合。这些区域用于形成元素的[遮罩边框](/zh-CN/docs/Web/CSS/mask-border)的组成部分。**`mask-border-slice`**

## 句法

```css
/* All sides */
mask-border-slice: 30%;

/* vertical | horizontal */
mask-border-slice: 10% 30%;

/* top | horizontal | bottom */
mask-border-slice: 30 30% 45;

/* top | right | bottom | left */
mask-border-slice: 7 12 14 5;

/* Using the `fill` keyword */
mask-border-slice: 10% fill 7 12;

/* Global values */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: unset;
```

该`mask-border-slice`属性可使用一至四个指定`<number-percentage>`值来表示每个图像切片的位置。负值无效；大于其相应尺寸的值被钳制为`100%`。

- 当**一个**被指定的位置，它在从它们各自的两侧是相同的距离创建所有四片。
- 当**2 点**被指定的位置，所述第一值创建一个从测量的层**的顶部和底部**，所述第二创建从所测量的片**左右**。
- 当指定了**三个**位置时，第一个值创建从**顶部开始**测量的切片，第二个值创建从**左侧和右侧开始**测量的切片，第三个值创建从**底部开始**测量的切片。
- 当指定了**四个**位置时，它们创建从**上**，**右**，**下**和**左**按该顺序（顺时针）测量的切片。

`fill`如果使用了可选值，则可以将其放置在声明中的任何位置。

### 价值观

- {{cssxref("&lt;number&gt;")}}
  - : 表示光栅图像的边缘偏移量（*像素）*和矢量图像的*坐标*。对于矢量图像，数字是相对于元素的大小，而不是源图像的大小，因此在这些情况下，通常最好使用百分比。
- {{cssxref("&lt;percentage&gt;")}}
  - : 将边缘偏移量表示为源图像尺寸的百分比：水平偏移量的图像宽度，垂直偏移量的高度。
- `fill`
  - : 保留中间图像区域。其宽度和高度的大小分别匹配顶部和左侧图像区域。

## 描述

切片过程总共创建了九个区域：四个角，四个边缘和一个中间区域。四个切片线，从其各自的侧面设置了给定的距离，以控制区域的大小。

[![由 border-image 或 border-image-slice 属性定义的九个区域](/files/3814/border-image-slice.png)](/files/3814/border-image-slice.png)

上图说明了每个区域的位置。

- 1-4 区是

  拐角区域

  。每个图像都使用一次以形成最终边框图像的角。

- 5-8 区是

  边缘区域

  。在最终的边框图像中对这些元素进行[重复，缩放或其他方式的修改](/zh-CN/docs/Web/CSS/mask-border-repeat)，以匹配元素的尺寸。

- 9 区是

  中间区域

  。默认情况下将其丢弃，但如果`fill`设置了关键字，则它会用作背景图像。

{{cssxref("mask-border-repeat")}}，{{cssxref("mask-border-width")}}和{{cssxref("mask-border-outset")}}属性决定了这些区域用于形成最终的蒙版边框。

## 正式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 例子

### 基本用法

该属性似乎在任何地方都不受支持。最终开始受支持时，它将用于定义从源图像获取的切片的大小，并用于创建边框蒙版。

```css
mask-border-slice: 30 fill;
```

基于 Chromium 的浏览器支持此属性的过时版本`mask-box-image-slice`-带前缀：

```css
-webkit-mask-box-image-slice: 30 fill;
```

> **备注：** 该[`mask-border`](/zh-CN/docs/Web/CSS/mask-border)页面提供了一个有效的示例（使用 Chromium 支持的过期前缀边框蒙版属性），因此您可以大致了解效果。

> **备注：** 如果希望元素的内容可见，则必须包含 fill 关键字。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 也可以看看

- [1 到 4 值语法的图解说明](/zh-CN/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases)
