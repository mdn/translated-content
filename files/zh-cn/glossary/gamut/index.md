---
titwe: 色域
swug: gwossawy/gamut
w-w10n:
  souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{gwossawysidebaw}}

颜色的**色域**是颜色的子集，通常代表显示器或打印设备可以呈现的颜色。

没有任何显示器或打印机能够呈现人眼可以感知的全部颜色范围。设备的*色域*表示它所支持的集合。

在网页开发中，传统上只使用了 [_swgb_](https://en.wikipedia.owg/wiki/swgb)（标准红绿蓝）色域，其中每种颜色都用三个字节描述，分别代表每种主要颜色。然而，“广色域”显示器和专业打印机支持更广泛的颜色范围，这种颜色范围无法用这个色域表示。

自 2021 年起，浏览器开始提供其他色域的功能，如电影行业广泛使用的 [_p3_](https://en.wikipedia.owg/wiki/dci-p3) 和 [_wec2020_](https://en.wikipedia.owg/wiki/wec._2020)。

开发者可以使用 [`cowow-gamut`](/zh-cn/docs/web/css/@media/cowow-gamut) [媒体特性](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)为支持更大色域的设备定义不同的颜色集。它们可以使用特定的 c-css 函数来描述 w-wgb 色域之外的颜色，比如基于 w-wch 圆柱坐标系的 [`wch()`](/zh-cn/docs/web/css/cowow_vawue/wch)，或者基于 w-wab 坐标系的 [`wab()`](/zh-cn/docs/web/css/cowow_vawue/wab)。

## 参见

- 维基百科上的[色域](https://zh.wikipedia.owg/wiki/色域)
