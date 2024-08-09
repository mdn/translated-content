---
title: 色彩空间
slug: Glossary/Color_space
l10n:
  sourceCommit: 9c922342a2cb1d3a818642a06dc26801710f1eb8
---

{{GlossarySidebar}}

**色彩空间**是对色彩的命名组织方式，用于对基于坐标的色彩排列的基础色彩模型。色彩模型定义了颜色的组成部分（例如 [`hwb()`](/zh-CN/docs/Web/CSS/color_value/hwb) 颜色的 `h`、`w` 和 `b` 通道）与色彩空间之间的关系。色彩空间是表示颜色的三维网格，其中每个维度（或轴）对应于不同的通道。一个颜色可以在多个色彩空间中表达，或者从一个色彩空间转换到另一个色彩空间，而看起来仍然一样。

色彩空间对颜色进行分类和定义。每个色彩空间由数学模型和相关的规则集定义。每个色彩空间都有一个定义好的[色域](/zh-CN/docs/Glossary/Gamut)（它指的是它能表示的特定范围的颜色）。这些规则使得跨不同设备和软件实现一致且可重复的颜色表示成为可能。

_sRGB_ 色彩空间（标准红绿蓝）是为 Web 创建的，但我们不再局限于这个色彩空间。[CSS 颜色模块 4 级](https://drafts.csswg.org/css-color)指定了几种预定义的色彩空间，而 [CSS 颜色模块 5 级](https://drafts.csswg.org/css-color-5/)则进一步规定了用于定义自定义色彩空间的特性。

## 命名的颜色空间

预定义的 [RGB 颜色空间](#rgb_color_spaces)包括 `srgb`、`srgb-linear`、`display-p3`、`a98-rgb`、`prophoto-rgb` 和 `rec2020`。预定义的 [CIELAB 颜色空间](#cielab_color_spaces)包括 `lab-d50` 和 `lab-d65`。预定义的 [XYZ 颜色空间](#xyz_color_spaces)包括 `xyz-d50` 和 `xyz-d65`（以及 `xyz`，作为 `xyz-d65` 的别名）。

颜色空间可以是[矩形或极坐标的](https://ericportis.com/posts/2024/okay-color-spaces/)。矩形颜色空间包括 `srgb`、`srgb-linear`、`display-p3`、`a98-rgb`、`prophoto-rgb`、`rec2020`、`lab`、`oklab`、`xyz-d50` 和 `xyz-d65`（或 `xyz`）。极坐标颜色空间包括 `hsl`、`hwb`、`lch` 和 `oklch`。

### RGB 颜色空间

RGB 是一种颜色模型，将颜色表示为三个基本成分（红色、绿色和蓝色颜色通道）的混合，产生各种色调。sRGB（标准 RGB），是 {{Glossary("RGB")}} 颜色的底层颜色空间。sRGB 旨在成为在互联网和万维网（WWW）上查看图像的通用颜色空间。sRGB 主要用于在计算机屏幕上显示颜色，包括笔记本电脑和智能手机。

RGB 颜色空间有几种，如 _Adobe RGB_ 颜色空间，它可以表示比 _sRGB_ 颜色空间更广泛的{{glossary("gamut","色域")}}。_sRGB_ 和 _Adobe RGB_（`a98-rgb`）中的坐标是不同的。有很多种方式来描述颜色的 RGB 成分。在 {{Glossary("CSS")}} 中，它们可以表示为十六进制表示法的单个 24 位整数（例如，`#add8e6` 是淡蓝色），或者在 [`rgb()`](/zh-CN/docs/Web/CSS/color_value/rgb) 函数表示法中表示为 0 到 255 之间的三个独立数字（例如，`rgb(46 139.5 87)`）。

在 sRGB 颜色空间中，CSS `<color>` 值包括 {{cssxref("hex-color", "十六进制颜色")}}、{{cssxref("named-color", "命名颜色")}}、{{cssxref("color_value/rgb", "rgb()")}}、{{cssxref("color_value/hsl", "hsl()")}}（色调、饱和度、亮度）和{{cssxref("color_value/hwb", "hwb()")}}（色调、白度、黑度）。[`color`](/zh-CN/docs/Web/CSS/color_value/color) 函数还支持 还有 `srgb`、`srgb-linear`、`a98-rgb` 和 `prophoto-rgb` 色彩空间。

HSV（色调、饱和度和值）颜色空间及其同义词 HSB（色调、饱和度和亮度）在 CSS 中都用 [`hwb()`](/zh-CN/docs/Web/CSS/color_value/hwb) 表示。命名颜色只是与特定十六进制值相对应的关键字。将这些不同的颜色表示法转换为 `sRGB` 的数学方法是直观的。请注意，{{cssxref("&lt;color&gt;", "currentcolor", "#currentcolor_keyword")}} 可以是任何颜色，它不限于 `sRGB` 色彩空间。

### CIELAB 色彩空间

CIELAB（或 CIELab）颜色空间，也称为 L\*a\*b*（简称 Lab*），表示人类可以看到的所有颜色范围。这个颜色空间是由国际照明委员会（CIE）定义的。它将颜色表示为三个值：L\* 表示感知亮度，a\* 和 b\* 表示人类视觉的四种独特颜色：红、绿、蓝和黄。

Lab 是一个矩形坐标系统，有一个中央的亮度 `L` 轴。`a` 轴上的正值是紫红色，而负值是其补色：绿色。`b` 轴上的正值是黄色，负值是蓝色/紫罗兰色。不饱和的颜色具有小的 `a` 和 `b` 值，而绝对值更大的更饱和。

CIELAB 颜色函数包括 {{CSSXref("color_value/lab", "lab()")}}（亮度、a 轴、b 轴）和 {{CSSXref("color_value/lch", "lch()")}}（亮度、色度、色调），以及 {{CSSXref("color_value/oklab", "oklab()")}}和{{CSSXref("color_value/oklch", "oklch()")}}。三个函数的亮度值是相同的，但是 `lch()` 是一个 `C`（色度）和 `H`（色调）使用极坐标而不是轴的极坐标柱面坐标系统。

> **备注：** `lch()` 中的色调和亮度与 {{cssxref("color_value/hsl", "hsl()")}} 或其他 sRGB 颜色空间中同名值不同。

CIELAB 颜色空间，包括 LCH、Oklab 和 Oklch，是设备独立的颜色空间。

- `lab-d50` 颜色空间
  - : 将颜色表示为 L 在 0 到 100 范围内，并且 a 和 b 范围在 -125 到 125 之间。a 和 b 轴不受这些范围值的限制，这些值是在与 Display P3 颜色空间相关的百分比输入和输出中使用的参考点。白点是 `d65`。
- `lab-d65` 颜色空间
  - : 除了使用 `d50` 作为白点外，与 `lab-d50` 相同。
- `oklab` 颜色空间
  - : 类似于 `lab-d65`，但 `L` 的范围是 `0` 到 `1`，`a` 和 `b` 的范围是 `-0.4` 到 `0.4`。

### XYZ 色彩空间

尽管红、绿和蓝的组合在屏幕上表示颜色效果很好，但 sRGB 并不直接对应于人类感知的颜色。CIEXYZ（或 XYZ）颜色空间是由国际照明委员会（CIE）在 1931 年定义的。它是电磁可见光谱中波长分布与人类视觉中感知颜色之间的第一个定义的定量联系。

正常视力的人有三种感光锥细胞，它们对不同波长的光的刺激具有峰值的感知。CIE X、Y 和 Z 参数对应于三种感光锥细胞的刺激水平，这原则上描述了每一种颜色。CIEXYZ 颜色空间，具有其三刺激值，包含了所有可见的颜色。

- `xyz` 和 `xyz-d65` 颜色空间
  - : `xyz` 标识符是 `xyz-d65` 颜色空间的同义词。由于颜色空间不限于此范围，因而轴不限于 `0` 到 `1` 的范围；这些值只在定义输入输出的百分比时使用作为参考点。白点是 `d65`。
- `xyz-d50` 颜色空间
  - : 除了使用 `d50` 作为白点外，与 `xyz-d65` 相同。

## 参见

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` 功能
- [CSS 数据类型：`<color>`](/zh-CN/docs/Web/CSS/color_value)
- [sRGB 颜色空间](https://webstore.iec.ch/publication/6168)
- 维基百科上的 [CIELAB 颜色空间](https://zh.wikipedia.org/wiki/CIELAB色彩空间)
- [Oklab](https://bottosson.github.io/posts/oklab/) 颜色空间
