---
title: 使用 CSS 变形
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
---

{{CSSRef}}

通过改变坐标空间，**CSS transforms** 可以在不影响正常文档流的情况下改变作用内容的位置。这篇指南提供了有关使用 CSS 变形（CSS transforms）的介绍。

CSS transforms 通过一系列 CSS 属性实现，通过使用这些属性，可以对 HTML 元素进行线性仿射变形（affine linear transformations）。可以进行的变形包括旋转，倾斜，缩放以及位移，这些变形同时适用于平面与三维空间。

> **警告：** 只有使用[盒模型](/zh-CN/docs/Web/CSS/CSS_Box_Model)（Box Model）来定位的元素可以*被变换*（`transform`ed）。根据一般经验（原文：As a rule of thumb），拥有 `display: block` 的元素是由盒模型定位的。

## CSS transforms 属性

有两个主要的属性被用来定义 CSS transforms：{{cssxref("transform")}} 和 {{cssxref("transform-origin")}}

- {{cssxref("transform-origin")}}
  - : 指定原点的位置。默认值为元素的中心，可以被移动。很多变形需要用到这个属性，比如旋转，缩放和倾斜，他们都需要一个指定的点作为参数。
- {{cssxref("transform")}}
  - : 指定作用在元素上的变形。取值为空格分隔的一系列变形的列表，他们会像被组合操作请求一样被分别执行。

## 示例

这是一个未经任何变换的 MDN 标志：

![MDN Logo](https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png)

### 旋转

这是一个在 iframe 中的 MDN 的标志，从左下角开始，旋转了 90 度。

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png">
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### 倾斜与位移

还是 MDN 的标志，倾斜了 10 度，并从 X 轴位移了 150 个像素。

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png">
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 适用于三维的属性

在三维空间中使用 CSS 变形会稍微复杂一点。你必须先设置一个透视点（perspective）以便配置 3D 空间，再去定义 2D 元素在空间中的行为。

### 透视

首先需要设置的属性是透视值（{{cssxref("perspective")}}）。透视正是三维空间的立体感的源泉。元素与观察者之间的距离越远，他们就越小。

{{page("/en-US/docs/Web/CSS/perspective", "Setting perspective", 0, 0, 3)}}

第二个需要设置的是观察者的位置，可通过 {{cssxref("perspective-origin")}} 属性来设置。默认透视值中，为观察者被置于中心，但是这并不总是适当的。

{{page("/en-US/docs/Web/CSS/perspective-origin", "Changing the perspective origin", 0, 0, 3)}}

完成这些之后，你就可以折腾被置于三维空间之中的元素了。

## 参见

- [Using deviceorientation with 3D Transforms](/zh-CN/docs/DOM/Using_device_orientation_with_3D_transforms)
- [Intro to CSS 3D transforms](http://desandro.github.com/3dtransforms/)（由 David DeSandro 撰写的博客）
