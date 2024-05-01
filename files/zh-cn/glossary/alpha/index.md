---
title: Alpha (alpha channel)
slug: Glossary/Alpha
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{GlossarySidebar}}

**Alpha 通道** 规定了一个 ({{CSSxRef("&lt;color&gt;")}}) 的透明度。颜色以数字形式表示，每个数字代表颜色的一个组成部分的强度或强度级别。这些组成部分中的每一个被称为**通道**。在典型的图像文件中，颜色通道描述了用多少红色、绿色和蓝色来构成最终颜色。为了表示一个颜色，通过它可以在一定程度上看到背景，颜色中添加了第四个通道：Alpha 通道。

例如，颜色 `#8921F2`（也可以描述为 `rgb(137 33 242)` 或 `hsl(270 89% 54)`）是一种漂亮的紫色。下面你会看到一个在左上角的 _这个颜色_ 的小盒子，以及一个具有 50%（或 0.5）Alpha 通道不同明度设置的相同颜色的盒子，`#8921F280`。这里的 `80` 是 `50%` 的十六进制等价数字。这种颜色也可以描述为 `rgb(137 33 242 / 50%)` 或 `hsl(270 89% 54 / 50%)`。这两个盒子都在一个段落文字的上方绘制。

![显示 Alpha 通道对颜色影响的图片](alpha-channel-example.png)

正如你所看到的，没有 Alpha 通道的颜色完全遮挡了背景文字，而具有 Alpha 通道的盒子则通过紫色背景颜色使其可见。

## 参见

- [CSS Color](/zh-CN/docs/Web/CSS/CSS_colors)
- [CSS 的值与单位](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
- [图像文件类型与格式指南](/zh-CN/docs/Web/Media/Formats/Image_types)
- 维基百科的 [Alpha 合成](https://zh.wikipedia.org/zh-cn/Alpha%E5%90%88%E6%88%90)
- 维基百科的 [RGBA](https://zh.wikipedia.org/wiki/RGBA)
- 维基百科的 [通道（数字图像）](<https://zh.wikipedia.org/wiki/%E9%80%9A%E9%81%93_(%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F)>)
