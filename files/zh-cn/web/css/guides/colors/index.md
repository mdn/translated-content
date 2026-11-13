---
title: CSS 颜色
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: 30a5a8d5c29feab27ec268c272a945702282994e
---

**CSS 颜色**模块定义了颜色、颜色类型、颜色混合、不透明度，以及如何将这些颜色和效果应用到 HTML 内容中。

虽然此模块仅包含两个 CSS 属性，即 {{cssxref("color")}} 和 {{cssxref("opacity")}}，但有超过 20 个 CSS 和 SVG 属性、CSS 图像、At 规则以及 @media 规则依赖于这两个属性。

### 色彩运用

下面的颜色语法转换器显示了当前选定颜色在[红—绿—蓝](/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb)（RGB）、[十六进制](/zh-CN/docs/Web/CSS/Reference/Values/hex-color)（HEX）、[色相、饱和度和亮度](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl)（HSL）以及[色相、白度和黑度](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb)（HWB）CSS 颜色格式中的值。这里所有的 RGB、HEX、HSL 和 HWB 颜色值虽然书写方式不同，但表示的是相同的颜色值。

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

通过[颜色选择器](/zh-CN/docs/Web/HTML/Reference/Elements/input/color)选择颜色，并通过[滑块](/zh-CN/docs/Web/HTML/Reference/Elements/input/range)选择透明度以更新 RGB、HEX、HSL 和 HWB 值。当选择新的颜色或不透明度值时，背景颜色和滑块会分别通过 CSS 属性 {{cssxref("background-color")}} 和 {{cssxref("accent-color")}} 进行更新。

要查看此颜色语法转换器的代码，请[在 GitHub 上查看源代码](https://github.com/mdn/css-examples/blob/main/modules/colors.html)。

## 参考

### 属性

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At 规则和描述符

> [!NOTE]
> CSS 颜色模块引入了 {{cssxref("@color-profile")}} at 规则及其 `components`、`rendering-intent` 和 `src` 描述符。这些特性尚未被任何浏览器实现。

### 函数

- 颜色函数：
  - [`rgb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb)
  - [`hsl()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl)
  - [`hwb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb)
  - [`lab()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lab)
  - [`lch()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lch)
  - [`oklab()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/oklab)
  - [`oklch()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/oklch)
  - [`color()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color)
- [`color-mix()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color-mix)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

> [!NOTE]
> CSS 颜色模块引入了 {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} 和 `contrast-color()` 函数，它们尚未被任何浏览器实现。

### 数据类型

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#函数)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color#将_color_与预定义的色彩空间一起使用)

### 术语和关键字

- {{glossary("color space", "色彩空间")}}
- [`currentcolor`](/zh-CN/docs/Web/CSS/Reference/Values/color_value#currentcolor_关键字)
- {{glossary("interpolation", "插值")}}
- {{glossary("RGB")}}
- [`transparent`](/zh-CN/docs/Web/CSS/Reference/Values/named-color#transparent)

### 接口

> [!NOTE]
> CSS 颜色模块引入了 `CSSColorProfileRule`，其尚未被任何浏览器实现。

## 指南

- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)
  - : 使用 CSS 为各种类型的内容应用颜色的指南，包括所有接受 `<color>` 值的 CSS 属性。
- [CSS 颜色值](/zh-CN/docs/Web/CSS/Guides/Colors/Color_values)
  - : 色彩空间的概述以及 CSS 中可用的不同 `<color>` 函数表示法。
- [明智地使用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : 色彩理论及资源，包括找到合适的颜色以创建无障碍的调色板、对比度以及彩色打印。
- [使用相对颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : 本文解释了相对 CSS 颜色语法，展示了不同的选项，并给出了一些说明性的示例。
- [理解颜色和亮度](/zh-CN/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : 色彩感知以及考虑到色弱（色盲）用户、视力减退用户以及患有前庭障碍或其他神经障碍的用户如何使用色彩。
- [WCAG 1.4.1：颜色对比度](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : 解释背景与前景内容之间的对比度要求，以确保可读性。

## 相关概念

- 属于其他规范的 CSS 属性：
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- 属于其他规范的 SVG 颜色属性：
  - [`fill`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/zh-CN/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/zh-CN/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/zh-CN/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/zh-CN/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/zh-CN/docs/Web/SVG/Reference/Attribute/color) 属性
- {{glossary("Color wheel", "色环")}}术语
- {{glossary("Interpolation", "插值")}}术语
- [`@font-palette-values`](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-palette-values) At 规则 [`override-colors`](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) 描述符
- [`@color-profile`](/zh-CN/docs/Web/CSS/Reference/At-rules/@color-profile) At 规则
- [`color-gamut`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media 特性
- [`forced-colors`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media 特性

## 规范

{{Specifications}}

## 参见

- [CSS 颜色调整](/zh-CN/docs/Web/CSS/Guides/Color_adjustment)模块和 {{cssxref("print-color-adjust")}} 属性。
- [CSS 图像](/zh-CN/docs/Web/CSS/Guides/Images)模块，其中定义了 CSS [`<gradient>`](/zh-CN/docs/Web/CSS/Reference/Values/gradient) 图像。
- [`VideoColorSpace`](/zh-CN/docs/Web/API/VideoColorSpace) 接口
- [`<feColorMatrix>`](/zh-CN/docs/Web/SVG/Reference/Element/feColorMatrix) SVG 元素
- [Canvas API：应用样式及颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#色彩)
