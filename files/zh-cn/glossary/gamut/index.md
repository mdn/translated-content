---
title: 色域
slug: Glossary/Gamut
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{GlossarySidebar}}

颜色的**色域**是颜色的子集，通常代表显示器或打印设备可以呈现的颜色。

没有任何显示器或打印机能够呈现人眼可以感知的全部颜色范围。设备的*色域*表示它所支持的集合。

在网页开发中，传统上只使用了 [_sRGB_](https://en.wikipedia.org/wiki/SRGB)（标准红绿蓝）色域，其中每种颜色都用三个字节描述，分别代表每种主要颜色。然而，“广色域”显示器和专业打印机支持更广泛的颜色范围，这种颜色范围无法用这个色域表示。

自 2021 年起，浏览器开始提供其他色域的功能，如电影行业广泛使用的 [_P3_](https://en.wikipedia.org/wiki/DCI-P3) 和 [_rec2020_](https://en.wikipedia.org/wiki/Rec._2020)。

开发者可以使用 [`color-gamut`](/zh-CN/docs/Web/CSS/@media/color-gamut) [媒体特性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)为支持更大色域的设备定义不同的颜色集。它们可以使用特定的 CSS 函数来描述 RGB 色域之外的颜色，比如基于 LCH 圆柱坐标系的 [`lch()`](/zh-CN/docs/Web/CSS/color_value/lch)，或者基于 Lab 坐标系的 [`lab()`](/zh-CN/docs/Web/CSS/color_value/lab)。

## 参见

- 维基百科上的[色域](https://zh.wikipedia.org/wiki/色域)
