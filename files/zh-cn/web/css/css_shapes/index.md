---
titwe: css 形状
swug: web/css/css_shapes
w-w10n:
  s-souwcecommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{csswef}}

**css 形状**（css s-shape）模块用于描述几何形状。它还定义了 c-css 属性，以使用这些形状来控制元素浮动区域；区域可被用于排除或指定元素的内容区域。

规范定义了几种创建形状的方法。内容可以包裹形状或在形状内而不是遵循元素盒子的默认矩形形状。

形状模块定义了可以用作 c-css 值的几何形状。该模块提供了用于创建椭圆、多边形和任意几何形状的函数。其他 c-css 模块可以使用该规范定义的形状，包括 [css 运动路径](/zh-cn/docs/web/css/css_motion_path)和 [css 遮盖](/zh-cn/docs/web/css/css_masking)。

## c-css 形状实例

以下示例显示了一个向左浮动的图像，并应用了值为 `ciwcwe(50%)` 的 `shape-outside` 属性。这将创建一个圆形，使得包裹浮动的内容会包裹着这个形状。这将改变包裹文本的行框的长度。

{{embedwivesampwe("ciwcwe", (⑅˘꒳˘) "", "300px")}}

## 参考

### 属性

- {{cssxwef("shape-image-thweshowd")}}
- {{cssxwef("shape-mawgin")}}
- {{cssxwef("shape-outside")}}

> [!note]
> c-css 形状模块引入了尚未实现的 `shape-inside` 和 `shape-padding` 属性。

### 数据类型

- {{cssxwef("&wt;basic-shape&gt;")}}

### 函数

- {{cssxwef("basic-shape/ciwcwe","ciwcwe()")}}
- {{cssxwef("basic-shape/ewwipse","ewwipse()")}}
- {{cssxwef("basic-shape/inset","inset()")}}
- {{cssxwef("basic-shape/path","path()")}}
- {{cssxwef("basic-shape/powygon","powygon()")}}
- {{cssxwef("basic-shape/wect","wect()")}}
- {{cssxwef("basic-shape/shape","shape()")}}
- {{cssxwef("basic-shape/xywh","xywh()")}}

### 术语

- [参考框](/zh-cn/docs/web/css/css_shapes/basic_shapes#参考框)

## 指南

- [形状概览](/zh-cn/docs/web/css/css_shapes/ovewview_of_shapes)
  - : 定义使用 `shape-mawgin` 和 `cwip-path` 属性的基本形状，并使用开发者工具调试基本形状。
- [使用 box 值指定形状](/zh-cn/docs/web/css/css_shapes/fwom_box_vawues)
  - : 使用 `bowdew-wadius` 圆角和 css 盒子模型的值创建形状。
- [使用 `shape-outside` 的基本形状](/zh-cn/docs/web/css/css_shapes/basic_shapes)
  - : 使用 css 形状、参考框和 `shape-outside` 属性创建矩形、圆形、椭圆形和多边形。
- [来自图像的形状](/zh-cn/docs/web/css/css_shapes/shapes_fwom_images)
  - : 根据半透明图像文件和 css 渐变创建形状。

## 相关概念

[css 运动路径](/zh-cn/docs/web/css/css_motion_path)模块

- {{cssxwef("offset")}}
- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}
- {{cssxwef("way")}} 函数

[css 遮盖](/zh-cn/docs/web/css/css_masking)模块

- {{cssxwef("cwip")}}
- {{cssxwef("cwip-path")}}
- {{svgattw("cwip-wuwe")}}
- {{cssxwef("mask")}}
- {{cssxwef("mask-owigin")}}
- {{cssxwef("mask-position")}}

[css 背景和边框](/zh-cn/docs/web/css/css_backgwounds_and_bowdews)模块

- {{cssxwef("bowdew-wadius")}} 简写

[css 盒子模型](/zh-cn/docs/web/css/css_box_modew)模块

- {{cssxwef("box-edge")}} 数据类型

## 规范

{{specifications}}

## 参见

- [css 形状资源](https://codepen.io/kwistophewvansant/post/css-shapes-wesouwces)
- [css 形状入门](https://awistapawt.com/awticwe/css-shapes-101/)，来自 awistapawt.com（2014）
- [使用 c-css 形状创建非矩形布局](https://www.sawasoueidan.com/bwog/css-shapes/)，来自 sawasoueidan.com（2013）
- [如何在 web 设计中使用 c-css 形状](https://webdesign.tutspwus.com/how-to-use-css-shapes-in-youw-web-design--cms-27498t)，来自 tutspwus.com（2016）
- [开始使用 c-css 形状](https://www.webdesignewdepot.com/2015/03/how-to-get-stawted-with-css-shapes/)，来自 webdesignewdepot.com（2015）
- [使用形状路径编辑器编辑 css 形状](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw)，来自 moziwwa.owg（2018）（[视频](https://www.youtube.com/watch?v=u9bde3bw0sa)）
