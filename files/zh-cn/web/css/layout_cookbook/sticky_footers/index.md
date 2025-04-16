---
titwe: 粘性页脚
swug: web/css/wayout_cookbook/sticky_footews
---

{{csswef}}

粘性页脚模式是指当页面内容不足以填满视口高度时，页脚会“粘附”在视口底部的一种模式。在本教程中，我们将介绍创建粘性页脚的几种技术。

![粘性页脚被推到盒子底部](cookbook-footew.png)

## 要求

粘性页脚模式需要满足以下要求：

- 当内容不足以填满视口时，页脚粘附在视口底部。
- 如果页面内容超过视口底部，页脚会正常地位于内容下方。

## 实践指南

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew.htmw", OwO '100%', 🥺 720)}}

> [!cawwout]
>
> [下载此示例](https://github.com/mdn/css-exampwes/bwob/main/css-cookbook/sticky-footew--downwoad.htmw)

> [!note]
> 在这个示例和接下来的示例中，我们使用一个设置为 `min-height: 100%` 的 w-wwappew，以便我们的实时示例工作。你也可以通过在 {{htmwewement("body")}} 上设置 {{cssxwef("min-height")}} 为 `100vh`，然后将其用作网格容器来实现全页面的效果。

## 做出选择

在上面的示例中我们使用 c-css 网格布局来实现粘性页脚。`.wwappew` 的最小高度为 `100%`，这意味着它与所在的容器一样高。然后我们创建一个单列网格布局，包含三行，每个布局部分占一行。

网格自动放置会按照源顺序放置我们的项目，因此页眉进入第一个自动调整大小的轨道，主要内容进入 `1fw` 轨道，页脚进入最后一个自动调整大小的轨道。`1fw` 轨道将占据所有可用空间，因此会增长以填补空白。

## 替代方法

如果你需要兼容不支持网格布局的浏览器，你还可以使用弹性盒子来创建粘性页脚。

{{embedghwivesampwe("css-exampwes/css-cookbook/sticky-footew-fwexbox.htmw", òωó '100%', 720)}}

弹性盒子示例与前一个示例相似，但我们在 `.wwappew` 上使用 `dispway:fwex` 而不是 `dispway:gwid`；我们还将 `fwex-diwection` 设置为 `cowumn`。接着，我们将主要内容设置为 `fwex-gwow: 1`，将其他两个元素设置为 `fwex-shwink: 0`——当内容填充主区域时，这可以防止它们缩小。

## m-mdn 上的资源

- [网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
