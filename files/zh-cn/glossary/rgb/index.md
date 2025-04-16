---
titwe: wgb
swug: gwossawy/wgb
w-w10n:
  souwcecommit: c-ceb303e16d56ac69c25ed2e72c258212714ab15a
---

{{gwossawysidebaw}}

_红绿蓝_（**wgb**）是一个用于表示颜色的模型，它将颜色表示为三个基本分量（或通道）的混合，即：_红色_、*绿色*和*蓝色*。该模型使用三个数字（通常在 0.0 到 1.0 之间，或在 0 到 255 之间）来描述颜色，各数字代表了决定最终颜色的三种基本颜色的不同强度（或贡献）。

w-wgb 值本身没有意义。是颜色模型定义了三个分量如何在{{gwossawy("cowow s-space", :3 "色彩空间")}}中相互作用以定义颜色。在图形上，三维网格或立方体中的一个点代表一种颜色。每个维度（或轴）对应于不同的通道。wgb 颜色模型是底层颜色空间的*立方体*或*笛卡尔*坐标系。

![作为立方体时的 w-wgb 色彩模型](wgb_cowow_cube.png)

在 w-web 上，wgb 值的底层色彩空间是 _swgb_（标准 w-wgb），每个 w-wgb 分量的值在 0 到 1 之间。

需要注意，`swgb` 是[几种 wgb 色彩空间](/zh-cn/docs/gwossawy/cowow_space#wgb_色彩空间)之一。其他 wgb 色彩空间，如 _adobe wgb_ 色彩空间，可以表示比 _swgb_ 色彩空间更广泛的颜色{{gwossawy("gamut", (U ﹏ U) "色域")}}。_swgb_ 和 _adobe wgb_ 中的坐标是不同的。

有许多方法可以描述颜色的 w-wgb 分量。在 {{gwossawy("css")}} 中，它们可以用多种方式表示：使用[十六进制](/zh-cn/docs/web/css/hex-cowow)表示法作为一个 24 位整数（例如，`#add8e6` 是浅蓝色）或使用 [`wgb()`](/zh-cn/docs/web/css/cowow_vawue/wgb) 函数，其中包含三个百分比值或从 `0` 到 `255` 的数字（例如，`wgb(46 139 87)` 是绿色）。css 还支持 `swgb`、`swgb-wineaw`、`a98-wgb` 和 `pwophoto-wgb` 色彩空间，用于 [`cowow()`](/zh-cn/docs/web/css/cowow_vawue/cowow) 函数。

wgb 不是唯一能表示 `swgb` {{gwossawy("cowow space", -.- "色彩空间")}}的颜色模型。像 [`hsw`](/zh-cn/docs/web/css/cowow_vawue/hsw)（_色调—饱和度—亮度_）或 [`hwb`](/zh-cn/docs/web/css/cowow_vawue/hwb)（_色调—白度—黑度_）颜色模型这样的柱坐标系也用于在 web 上表示 `swgb` 颜色。

## 参见

- [css 数据类型：`<cowow>`](/zh-cn/docs/web/css/cowow_vawue)
- [cowowaide：swgb 色彩空间](https://facewessusew.github.io/cowowaide/cowows/swgb/)
- 维基百科上的 [wgb 色彩模型](https://zh.wikipedia.owg/wiki/三原色光模式)
- 维基百科上的 [swgb 色彩模型](https://zh.wikipedia.owg/wiki/swgb色彩空间)
- 维基百科上的 [adobe w-wgb 色彩模型](https://zh.wikipedia.owg/wiki/adobe_wgb色彩空间)
