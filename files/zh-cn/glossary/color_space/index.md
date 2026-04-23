---
title: 色彩空间
slug: Glossary/Color_space
l10n:
  sourceCommit: c7416fd067774fc2583944d10801b56672b56631
---

**色彩空间**是对色彩的命名组织方式，用于基于坐标的色彩排列的基本色彩模型。色彩模型定义了色彩的组成部分（例如 [`hwb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb) 色彩的 `h`、`w` 和 `b` 通道）与色彩空间之间的关系。多数色彩空间是表示色彩的三维或四维网格，其中各维度（轴）对应色彩空间中的一个通道。一个色彩可以在保持看起来仍然一样的情况下在多个色彩空间中表达，或者从一个色彩空间转换到另一个色彩空间。

色彩空间对特定范围的色彩进行分类和定义。每个色彩空间由数学模型和相关的规则集定义。每个色彩空间都有一个定义好的{{glossary("gamut", "色域")}}（它指的是它能表示的特定范围的色彩）。这些规则使得跨不同设备和软件的色彩表现一致且可重现。

_sRGB_ 色彩空间（标准红绿蓝）是为 Web 创建的，但我们不再局限于这个色彩空间。[CSS 色彩模块第 4 版](https://drafts.csswg.org/css-color-4)指定了几种预定义的色彩空间，而 [CSS 色彩模块第 5 版](https://drafts.csswg.org/css-color-5/)则进一步规定了用于定义自定义色彩空间的特性。

## 具名色彩空间

预定义的 [RGB 色彩空间](#rgb_色彩空间)包括 `srgb`、`srgb-linear`、`display-p3`、`a98-rgb`、`prophoto-rgb` 和 `rec2020`。预定义的 [CIELAB 色彩空间](#cielab_色彩空间)包括 `lab-d50` 和 `lab-d65`。预定义的 [XYZ 色彩空间](#xyz_色彩空间)包括 `xyz-d50` 和 `xyz-d65`（以及作为其别名的 `xyz`）。

色彩空间可以是[矩形或极坐标的](https://ericportis.com/posts/2024/okay-color-spaces/)。矩形色彩空间包括 `srgb`、`srgb-linear`、`display-p3`、`a98-rgb`、`prophoto-rgb`、`rec2020`、`lab`、`oklab`、`xyz-d50` 和 `xyz-d65`（或 `xyz`）。极坐标色彩空间包括 `hsl`、`hwb`、`lch` 和 `oklch`。

### RGB 色彩空间

RGB 是一种色彩模型，将色彩表示为三个基本成分（红色、绿色和蓝色色彩通道）的混合，产生各种色调。sRGB（标准 RGB）是 {{Glossary("RGB")}} 色彩的底层色彩空间。sRGB 旨在编纂个人电脑及{{glossary("world wide web", "万维网")}}成像系统的显示规范。目前，sRGB 通常是那些没有标记或没有嵌入色彩配置文件的默认色彩空间。

RGB 色彩空间有几种，如可以表示比 _sRGB_ 色彩空间更广泛的{{glossary("gamut", "色域")}}的 _Adobe RGB_ 色彩空间。_sRGB_ 和 _Adobe RGB_（`a98-rgb`）中的坐标是不同的。有很多种方式来描述色彩的 RGB 成分：在 {{Glossary("CSS")}} 中，色彩可以表示为十六进制表示法的单个 24 位整数（如淡蓝色 `#add8e6`），或者在 [`rgb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb) 函数表示法中表示为 0 到 255 之间的三个独立数字（如，`rgb(46 139.5 87)`）。

在 sRGB 色彩空间中，CSS `<color>` 值包括{{cssxref("hex-color", "十六进制色彩")}}、{{cssxref("named-color", "具名色彩")}}、{{cssxref("color_value/rgb", "rgb()")}}、{{cssxref("color_value/hsl", "hsl()")}}（色调、饱和度、亮度）和{{cssxref("color_value/hwb", "hwb()")}}（色调、白度、黑度）。[`color`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color) 函数还支持 `srgb`、`srgb-linear`、`a98-rgb` 和 `prophoto-rgb` 色彩空间。

HSV（色调、饱和度和值）色彩空间及其同义词 HSB（色调、饱和度和亮度）在 CSS 中都用 [`hwb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb) 表示。命名色彩只是与特定十六进制值相对应的关键字。将这些不同的色彩表示法转换为 `sRGB` 的数学方法是直观的。请注意，{{cssxref("&lt;color&gt;", "currentcolor", "#currentcolor_关键字")}} 可以是任何色彩，而不仅限于 `sRGB` 色彩空间。

`rgb` 色彩函数不是可以用于表示 _sRGB_ 色彩空间的唯一色彩函数。圆柱坐标系，如 [`HSL`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl)（_色调—饱和度—亮度_）或 [`HWB`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb)（_色调—白度—黑度_）色彩模型也用于在 Web 上表示 sRGB 色彩。

- `sRGB` 色彩空间
  - : sRGB 色彩空间（“标准 RGB”），是标准的 RGB（红、绿、蓝）色彩空间，用于显示器、打印机和 Web 中。它是使用最广泛的色彩空间，受到大多数操作系统、软件程序、显示器和打印机的支持。sRGB 以 `r`、`g` 和 `b` 为基础，色域范围为 `0` 至 `1`。它的白点为 D65。
- `srgb-linear` 色彩空间
  - : 预定义的线性光 sRGB 色彩空间 `srgb-linear` 与 `srgb`相同，只是传输函数是没有伽玛编码的线性光。`srgb-linear` 色彩空间接受三个 `r`、`g` 和 `b` 值作为数值参数，色域范围为 `0` 至 `1`。它的白点为 D65。
- `display-p3` 色彩空间
  - : [**Display P3**](https://www.color.org/chardata/rgb/DisplayP3.xalter) 色彩空间由苹果公司定义，结合了 DCI-P3 色域、D65 白点和 sRGB 伽马曲线。它是一种典型的宽色域空间，适用于当前的宽色域显示器，能呈现出比 sRGB 色域更鲜艳的绿色和红色。`display-p3` 基于 `r`、`g` 和 `b`，伽玛值范围为 `0` 至 `1`。它的白点为 D65。
- `a98-rgb` 色彩空间
  - : `a98-rgb` 是 Adobe® 1998 RGB 色彩空间，旨在将所有 CMYK 颜色表示为 RGB。它可实现 [CIELab 色彩空间](#cielab_色彩空间)指定的约 50% 的可见色彩，比其他 RGB 色彩空间包含更多的青绿色调。伽玛内的 `r`、`g` 和 `b` 值范围从 `0` 到 `1`。它的传输曲线是一个伽马函数，不完全地接近于 1/2.2。它的白点为 D65。
- `prophoto-rgb`
  - : `prophotoo-rgb` 色彩空间由柯达公司开发，可以表示自然界中可能出现的所有颜色和大约 90% 的 [CIElab 颜色](#cielab_色彩空间)。色域范围的 `r`、`g` 和 `b` 值范围从 `0` 至 `1`。转移曲线是一个伽马函数，值为 1/1.8，其中在黑色附近有一小段线性。它的白点为 D50，与 CIELab 使用的白点相同。
- `rec2020`
  - : `rec2020` 是超高清 4k 和 8k 电视的广播行业标准。超宽色域空间能够呈现现实世界中几乎所有可见的颜色，超出了目前大多数显示器的能力。随着显示器的不断改进，预计覆盖范围会逐渐扩大。色域内的 `r`、`g` 和 `b` 值从 `0` 至 `1`。它的白点为 D65。

> [!NOTE]
> CSS 规范中没有的其他圆柱形 RGB 空间，如 `HSI`（色调、饱和度和强度）、`Okhsv`、`Okhsl`、`HSLuv`、`HPLuv` 和 `Cubehelix`。

### CIELAB 色彩空间

CIELAB（或 CIELab）色彩空间，也称为 L\*a\*b*（简称 Lab*），表示人类可以看到的所有色彩范围。这个色彩空间是由国际照明委员会（CIE）定义的。它将色彩表示为三个值：L\* 表示感知亮度，a\* 和 b\* 表示人类视觉的四种独特色彩：红、绿、蓝和黄。

Lab 是一个矩形坐标系统，有一个中央的亮度 `L` 轴。`a` 轴上的正值是紫红色，而负值是其补色绿色。`b` 轴上的正值是黄色，负值是蓝色/紫罗兰色。不饱和的色彩具有小的 `a` 和 `b` 值，而绝对值更大的更饱和。

CIELAB 色彩函数包括 {{CSSXref("color_value/lab", "lab()")}}（亮度、a 轴、b 轴）和 {{CSSXref("color_value/lch", "lch()")}}（亮度、色度、色调），以及 {{CSSXref("color_value/oklab", "oklab()")}} 和 {{CSSXref("color_value/oklch", "oklch()")}}。它们的亮度值是相同的，但是 `lch()` 和 `oklch` 是一个 `C`（色度）和 `H`（色调）使用极坐标而不是轴的极坐标柱面坐标系统。

> [!NOTE]
> 函数 `lch()` 和 `oklch` 中的色调和亮度与 {{cssxref("color_value/hsl", "hsl()")}} 或其他 sRGB 色彩空间中同名值不同。

CIELab 色彩空间包括 Lab、Lch、Oklab 和 Oklch，是设备无关的色彩空间。

- `lab-d50` 色彩空间
  - : 将色彩表示为 `L` 在 `0` 到 `100` 范围内，并且 `a` 和 `b` 范围在 `-125` 到 `125` 之间的色彩空间。`a` 和 `b` 轴不受这些范围值的限制，这些值是在与 `Display P3` 色彩空间相关的百分比输入和输出中使用的参考点。它的白点是 D50。

- `lab-d65` 色彩空间
  - : 除使用 D65 作为白点外，与 `lab-d50` 相同。

- `oklab` 色彩空间
  - : 类似于 `lab-d65`，但 `L` 的范围是 `0` 到 `1`，`a` 和 `b` 的范围是 `-0.4` 到 `0.4`。

### XYZ 色彩空间

尽管红、绿和蓝的组合在屏幕上表示色彩效果很好，但 sRGB 并不直接对应于人类感知的色彩。CIEXYZ（或 XYZ）色彩空间是由国际照明委员会（CIE）在 1931 年定义的。它是电磁可见光谱中波长分布与人类视觉中感知色彩之间的第一个定义的定量联系。

视力正常的人有三种对不同波长的光谱具有峰值敏感度的感光锥细胞。CIE X、Y 和 Z 参数对应于三种视锥细胞的刺激水平，原则上可以描述每一种可见光颜色。`Y` 通道代表一种颜色的亮度。`Z` 通道反映颜色中蓝色的含量（但与 RGB 中的 B 不同）。`X` 轴与 XYZ 色彩三维坐标系的 Y 轴和 Z 轴正交。

- `xyz` 和 `xyz-d65` 色彩空间
  - : `xyz` 标识符是 `xyz-d65` 色彩空间的同义词。由于色彩空间不限于此范围，因而轴不限于 `0` 到 `1` 的范围；这些值只在定义输入输出的百分比时使用作为参考点。它的白点是 D65。

- `xyz-d50` 色彩空间
  - : 除使用 `d50` 作为白点外，与 `xyz-d65` 相同。

## 参见

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` 特性
- [CSS 数据类型：`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value)
- [sRGB 色彩空间](https://webstore.iec.ch/en/publication/6168)
- 维基百科上的 [CIELAB 色彩空间](https://zh.wikipedia.org/wiki/CIELAB色彩空间)
- 维基百科上的 [CIE 1931 色彩空间](https://zh.wikipedia.org/wiki/CIE_1931色彩空间)
- [Oklab](https://bottosson.github.io/posts/oklab/) 色彩空间
