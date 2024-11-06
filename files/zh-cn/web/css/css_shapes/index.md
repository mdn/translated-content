---
title: CSS 形状
slug: Web/CSS/CSS_shapes
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**CSS 形状**（CSS shape）模块用于描述几何形状。它还定义了 CSS 属性，以使用这些形状来控制元素浮动区域；区域可被用于排除或指定元素的内容区域。

规范定义了几种创建形状的方法。内容可以包裹形状或在形状内而不是遵循元素盒子的默认矩形形状。

形状模块定义了可以用作 CSS 值的几何形状。该模块提供了用于创建椭圆、多边形和任意几何形状的函数。其他 CSS 模块可以使用该规范定义的形状，包括 [CSS 运动路径](/zh-CN/docs/Web/CSS/CSS_motion_path)和 [CSS 遮盖](/zh-CN/docs/Web/CSS/CSS_masking)。

## CSS 形状实例

以下示例显示了一个向左浮动的图像，并应用了值为 `circle(50%)` 的 `shape-outside` 属性。这将创建一个圆形，使得包裹浮动的内容会包裹着这个形状。这将改变包裹文本的行框的长度。

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## 参考

### 属性

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

> [!NOTE]
> CSS 形状模块引入了尚未实现的 `shape-inside` 和 `shape-padding` 属性。

### 数据类型

- {{cssxref("&lt;basic-shape&gt;")}}

### 函数

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

### 术语

- [参考框](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes#参考框)

## 指南

- [形状概览](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
  - : 定义使用 `shape-margin` 和 `clip-path` 属性的基本形状，并使用开发者工具调试基本形状。
- [使用 box 值指定形状](/zh-CN/docs/Web/CSS/CSS_shapes/From_box_values)
  - : 使用 `border-radius` 圆角和 CSS 盒子模型的值创建形状。
- [使用 `shape-outside` 的基本形状](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes)
  - : 使用 CSS 形状、参考框和 `shape-outside` 属性创建矩形、圆形、椭圆形和多边形。
- [来自图像的形状](/zh-CN/docs/Web/CSS/CSS_shapes/Shapes_from_images)
  - : 根据半透明图像文件和 CSS 渐变创建形状。

## 相关概念

[CSS 运动路径](/zh-CN/docs/Web/CSS/CSS_motion_path)模块

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} 函数

[CSS 遮盖](/zh-CN/docs/Web/CSS/CSS_masking)模块

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS 背景和边框](/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders)模块

- {{cssxref("border-radius")}} 简写

[CSS 盒子模型](/zh-CN/docs/Web/CSS/CSS_box_model)模块

- {{cssxref("box-edge")}} 数据类型

## 规范

{{Specifications}}

## 参见

- [CSS 形状资源](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS 形状入门](https://alistapart.com/article/css-shapes-101/)，来自 alistapart.com（2014）
- [使用 CSS 形状创建非矩形布局](https://www.sarasoueidan.com/blog/css-shapes/)，来自 sarasoueidan.com（2013）
- [如何在 Web 设计中使用 CSS 形状](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t)，来自 tutsplus.com（2016）
- [开始使用 CSS 形状](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/)，来自 webdesignerdepot.com（2015）
- [使用形状路径编辑器编辑 CSS 形状](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)，来自 mozilla.org（2018）（[视频](https://www.youtube.com/watch?v=u9bDe3Bw0sA)）
