---
title: 不透明度（Alpha 通道）
slug: Glossary/Alpha
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

**Alpha 通道**指定 {{CSSxRef("&lt;color&gt;")}} 的透明度。颜色以数字形式表示，每个数字代表颜色的一个分量的强度或强度级别。这些分量被称为**通道**。在典型的图像文件中，颜色通道描述了用多少红色、绿色和蓝色来构成最终颜色。要表示一个可以在一定程度上看到背景的颜色，可以为颜色添加第四个通道：Alpha 通道。

例如，颜色 `#8921F2`（也可以描述为 `rgb(137 33 242)` 或 `hsl(270 89% 54)`）是一种漂亮的紫色。下面你会看到一个在左上角的*这个颜色*的小盒子，以及一个颜色相同但 Alpha 通道被设置为 50%（或 0.5）不透明度的盒子，`#8921F280`。这里的 `80` 是 `50%` 的十六进制等价数字。这种颜色也可以描述为 `rgb(137 33 242 / 50%)` 或 `hsl(270 89% 54 / 50%)`。这两个盒子都在一个段落文字的上方绘制。

![显示 Alpha 通道对颜色影响的图片](alpha-channel-example.png)

正如你所看到的，没有 Alpha 通道的颜色完全遮挡了背景文字，而具有 Alpha 通道的盒子则通过紫色背景颜色使其可见。

## 参见

- [CSS 颜色](/zh-CN/docs/Web/CSS/Guides/Colors)
- [CSS 的值与单位](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [图像文件类型与格式指南](/zh-CN/docs/Web/Media/Guides/Formats/Image_types)
- 维基百科上的 [Alpha 合成](https://zh.wikipedia.org/wiki/Alpha合成)
- 维基百科上的 [RGBA](https://zh.wikipedia.org/wiki/RGBA)
- 维基百科上的[通道（数字图像）](<https://zh.wikipedia.org/wiki/通道_(数字图像)>)
