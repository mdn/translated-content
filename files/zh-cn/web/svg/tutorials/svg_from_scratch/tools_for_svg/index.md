---
title: SVG 工具
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

现在我们已经讲解了 SVG 内部的基础。我们将看一看哪些工具可以制作或呈现 SVG 文件。

## Inkscape

URL：[www.inkscape.org](https://inkscape.org/)

图形格式最重要的工具之一，是一个相当好的绘图程序。Inkscape 提供了最先进的矢量绘图功能，而且它是开源的。

此外它使用 SVG 作为它的原生文件格式。为了存储 Inkcape 特有的数据，它扩展了 SVG 文件，添加了自定义命名空间的元素和属性，但是你依然可以选择导出纯 SVG 文件。

## Adobe Illustrator

URL：[www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

在 Adobe 收购 Macromedia 之前，它已经是最著名的 SVG 的推动者。长期以来，Illustrator 对 SVG 支持得很好。然而，它输出的 SVG 经常显出一些怪癖，导致有必要为普适性而进行后续处理。

## Apache Batik

URL：[xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik 是 Apache 软件基金会支持下的一个开源工具集。这个工具包是用 Java 写的，提供了相当完整的 SVG 1.1 支持，而且还有很多源自于 SVG 1.2 计划的功能。

除了查看器（Squiggle）以及输出为 PNG 的光栅化输出，Batik 还提供了一个 SVG 完美打印机以格式化 SVG 文件，以及一个 TrueType 字体到 SVG 字体的转换器。

与 [Apache FOP](https://xmlgraphics.apache.org/fop/) 联用，Batki 还可以把 SVG 转换成 PDF。

### 其他呈现器

要想从一个 SVG 源创建一个光栅图像，存在很多个项目。[ImageMagick](https://imagemagick.org/) 是最著名的命名行图象处理工具之一。Wikipedia 所用到的 Gnome 库 [rsvg](https://wiki.gnome.org/Projects/LibRsvg) 能把它们的 SVG 图形光栅化。

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

这是一个来自与 Raphael JS 相同的作者的更新的 JavaScript 库，表现为浏览器编译器之间的一个抽像层。Snap.svg 专为现代浏览器设计，因此支持最新的 SVG 特性，如遮罩、裁剪、图案、全渐变、组。它不支持 Raphael 所支持的旧浏览器。

## Google Docs

URL：[www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

从 Google Docs 绘制，可以被输出为 SVG。

## Science

这两个名声很响的策划工具 xfig 和 gnuplot 都支持导出为 SVG。为了在 web 上呈现图像，[JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) 支持 VML、SVG 和 canvas，基于浏览器的功能，自动决定使用哪种技术。

在 GIS（地理图形信息系统）应用中，SVG 是常用的存储和呈现格式。请阅读 [carto.net](https://carto.net/) 以了解详情。

## 更多工具

W3C 提供了一个支持 SVG 的[程序列表](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
