---
title: <box-edge>
slug: Web/CSS/Reference/Values/box-edge
l10n:
  sourceCommit: 255a29f9e5bae99fd3bd98f6af1204a98be634bb
---

**`<box-edge>`** 值类型表示一个[盒子边界](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)关键字，例如 [`content-box`](#content-box) 和 [`border-box`](#border-box)。盒子边界关键字用于定义元素盒模型的不同方向，以及元素在屏幕上的定位和呈现方式。

盒子边界关键字是构成数据类型（但不限于） `<visual-box>`、`<layout-box>`、`<paint-box>`、`<coord-box>` 和 `<geometry-box>` 的组成部分。这些类型被应用于诸如 {{cssxref("transform-box")}} 和 {{cssxref("background-clip")}} 属性。

## 语法

```plain
<visual-box> = content-box | padding-box | border-box /* 三个 <box> 值 */
<layout-box> = <box> | margin-box /* <shape-box> 值 */
<paint-box> = <box> | fill-box | stroke-box
<coord-box> = <box> | fill-box | stroke-box | view-box
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```

### 值

一个 `<box-edge>` 可以是 `<visual-box>`、`<layout-box>`、`<paint-box>`、`<coord-box>` 或 `<geometry-box>` 类型中的一种。

- `<visual-box>`
  - : 指的是用户在网页上看到的为元素生成的矩形盒。它包含元素的内容、内边距和边框。也被称为 `<box>`，此值不包括外边距区域。此值类型用于 {{cssxref("background-clip")}} 和 {{cssxref("overflow-clip-margin")}} 属性。

- `<layout-box>`
  - : 指的是元素所占的空间，包括其内容、内边距、边框和外边距。此值类型用于布局和定位目的。也被称为 `<shape-box>`，此值类型用于 {{cssxref("shape-outside")}} 属性。

- `<paint-box>`
  - : 指的是布局盒内用于视觉呈现内容的区域。这包括绘制元素背景和边框的区域。由于元素的可绘制区域不包括其外边距，因此此值不包括 `margin-box`。

- `<coord-box>`
  - : 指的是用于在父容器内定位和调整元素大小的坐标盒。它用于控制内容如何围绕盒的边界流动。此值不包括外边距区域。此值类型用于 {{cssxref("offset-path")}} 属性。

- `<geometry-box>`
  - : 定义[基本形状](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape)的参考框，或者如果单独指定，则会使指定盒的边界，包括任何角落形状（如 {{cssxref("border-radius")}}）成为裁剪路径。此值类型用于 {{cssxref("clip-path")}}、{{cssxref("mask-clip")}} 和 {{cssxref("mask-origin")}} 属性以及 SVG 的 {{SVGAttr("clip-path")}} 属性。

### 关键字

`<box-edge>` 关键字定义如下：

- `content-box`
  - : 指的是盒子内容区域的外边界。内容盒是最内层的盒。内容区域包含实际的内容，如文本、图像或其他 HTML 元素。在 SVG 中，此值被视为 `fill-box`。

- `padding-box`
  - : 指的是盒子的内边距的外边界。如果某侧没有内边距，则该值与 `content-box` 相同。在 SVG 中，`padding-box` 被视为 `fill-box`。内边距区域围绕着内容区域，从内容盒的外边界开始。

- `border-box`
  - : 指的是盒子的边框的外边界。如果某侧没有边框，则该值与 `padding-box` 相同。在 SVG 中，`border-box` 被视为 `stroke-box`。边框区域围绕着内边距区域，从内边距盒的外边界开始。

- `margin-box`
  - : 指的是盒子的外边距的外边界。如果某侧没有外边距，则该值与 `border-box` 相同。在 SVG 中，`margin-box` 视作 `stroke-box`。

- `fill-box`
  - : 在 SVG 中，指的是对象的边界盒（bounding box）。在 CSS 中，`fill-box` 被视为 `content-box`。它用于将内容包裹在由 `coord-box` 值定义的边界周围。

- `stroke-box`
  - : 在 SVG 中，指的是描边边界盒（stroke bounding box）。在 CSS 中，`stroke-box` 被视为 `border-box`。它用于定义应用描边时元素的形状。

- `view-box`
  - : 指的是最近的 SVG 视口元素的原点盒子（origin box）。原点盒子是一个矩形，其宽度和高度由该元素的 {{svgattr("viewBox")}} 属性建立的初始 SVG 用户坐标系决定。原点盒子的位置设定为其左上角锚定在[坐标系](/zh-CN/docs/Web/API/CSSOM_view_API/Coordinate_systems)的原点。在 CSS 中，`view-box` 被视为 `border-box`。
    > [!NOTE]
    > 当 SVG 视口未锚定在原点时，原点盒子与 SVG 视口不对应。

## 规范

{{Specifications}}

## 参见

- [CSS 盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model)模块
