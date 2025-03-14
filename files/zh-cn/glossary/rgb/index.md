---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: ceb303e16d56ac69c25ed2e72c258212714ab15a
---

{{GlossarySidebar}}

_红绿蓝_（**RGB**）是一个用于表示颜色的模型，它将颜色表示为三个基本分量（或通道）的混合，即：_红色_、*绿色*和*蓝色*。该模型使用三个数字（通常在 0.0 到 1.0 之间，或在 0 到 255 之间）来描述颜色，各数字代表了决定最终颜色的三种基本颜色的不同强度（或贡献）。

RGB 值本身没有意义。是颜色模型定义了三个分量如何在{{glossary("color space", "色彩空间")}}中相互作用以定义颜色。在图形上，三维网格或立方体中的一个点代表一种颜色。每个维度（或轴）对应于不同的通道。RGB 颜色模型是底层颜色空间的*立方体*或*笛卡尔*坐标系。

![作为立方体时的 RGB 色彩模型](rgb_color_cube.png)

在 Web 上，RGB 值的底层色彩空间是 _sRGB_（标准 RGB），每个 RGB 分量的值在 0 到 1 之间。

需要注意，`sRGB` 是[几种 RGB 色彩空间](/zh-CN/docs/Glossary/Color_space#rgb_色彩空间)之一。其他 RGB 色彩空间，如 _Adobe RGB_ 色彩空间，可以表示比 _sRGB_ 色彩空间更广泛的颜色{{glossary("gamut", "色域")}}。_sRGB_ 和 _Adobe RGB_ 中的坐标是不同的。

有许多方法可以描述颜色的 RGB 分量。在 {{Glossary("CSS")}} 中，它们可以用多种方式表示：使用[十六进制](/zh-CN/docs/Web/CSS/hex-color)表示法作为一个 24 位整数（例如，`#add8e6` 是浅蓝色）或使用 [`rgb()`](/zh-CN/docs/Web/CSS/color_value/rgb) 函数，其中包含三个百分比值或从 `0` 到 `255` 的数字（例如，`rgb(46 139 87)` 是绿色）。CSS 还支持 `srgb`、`srgb-linear`、`a98-rgb` 和 `prophoto-rgb` 色彩空间，用于 [`color()`](/zh-CN/docs/Web/CSS/color_value/color) 函数。

RGB 不是唯一能表示 `sRGB` {{glossary("color space", "色彩空间")}}的颜色模型。像 [`HSL`](/zh-CN/docs/Web/CSS/color_value/hsl)（_色调—饱和度—亮度_）或 [`HWB`](/zh-CN/docs/Web/CSS/color_value/hwb)（_色调—白度—黑度_）颜色模型这样的柱坐标系也用于在 Web 上表示 `sRGB` 颜色。

## 参见

- [CSS 数据类型：`<color>`](/zh-CN/docs/Web/CSS/color_value)
- [ColorAide：sRGB 色彩空间](https://facelessuser.github.io/coloraide/colors/srgb/)
- 维基百科上的 [RGB 色彩模型](https://zh.wikipedia.org/wiki/三原色光模式)
- 维基百科上的 [sRGB 色彩模型](https://zh.wikipedia.org/wiki/SRGB色彩空间)
- 维基百科上的 [Adobe RGB 色彩模型](https://zh.wikipedia.org/wiki/Adobe_RGB色彩空间)
