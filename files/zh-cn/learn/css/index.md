---
title: 学习使用 CSS 为 HTML 添加样式
slug: Learn/CSS
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

层叠样式表 — 也就是 {{glossary("CSS")}} — 是你在 {{glossary("HTML")}} 之后应该学习的第二门技术。HTML 用于定义内容的结构和语义，CSS 用于设计风格和布局。比如，你可以使用 CSS 来更改内容的字体、颜色、大小、间距，将内容分为多列，或者添加动画及其他的装饰效果。

## 学习路径

在尝试学习 CSS 之前，你应该了解 HTML 的基础知识。建议你先学习 [HTML 简介](/zh-CN/docs/Learn/HTML/Introduction_to_HTML)模块。

一旦你掌握了 HTML 的基础知识，我们建议你同时学习更深入的 HTML 和 CSS，在这两个主题之间来回切换学习。这是因为当你应用 CSS 时，HTML 会变得更加有趣和富有乐趣，而你在不了解 HTML 的情况下无法学习 CSS。

在开始这个主题之前，你还应该熟悉使用计算机和被动地使用网络（即，仅仅浏览和消费内容）。你应该按照[安装基础软件](/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)中详细说明的内容设置好一个基本的工作环境，并且理解如何创建和管理文件，这在[处理文件](/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)中有详细介绍——这些都是我们从零[开始学网页](/zh-CN/docs/Learn/Getting_started_with_the_web)初学者完整模块的一部分。

如果你对网页开发完全陌生，建议你在继续学习这个主题之前，先完成从零[开始学网页](/zh-CN/docs/Learn/Getting_started_with_the_web)的学习。不过，[CSS 基础](/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)文章中涵盖的大部分内容也在我们的 [CSS 初步](/zh-CN/docs/Learn/CSS/First_steps)模块中有更详细的讲解。

## 模块

本主题包含以下模块，建议按顺序阅读这些模块。你应该从第一个模块开始。

- [CSS 初步](/zh-CN/docs/Learn/CSS/First_steps)
  - : CSS（层叠样式表）用于样式化和布局网页。例如，可以更改内容的字体、颜色、大小和间距，将内容分成多列，或添加动画和其他装饰功能。本模块为你提供了通往 CSS 掌握之路的温和起点，介绍了它的基本工作原理、语法结构以及如何开始使用它来为 HTML 添加样式。
- [构建 CSS 块](/zh-CN/docs/Learn/CSS/Building_Blocks)
  - : 本模块承接[CSS 初步](/zh-CN/docs/Learn/CSS/First_steps)，进行进一步的学习——既然你已经熟悉了 CSS 的语言和语法，有了一些使用 CSS 的基本经验，是时候再深入一些了。本模块涉及了层叠与继承、可用的所有种类的选择器、单位、尺寸、样式化背景和边框、调试，还有更多。这样做的目的是，在继续深入到更加具体的规则，例如[样式化文本](/zh-CN/docs/Learn/CSS/Styling_text)和[CSS 布局](/zh-CN/docs/Learn/CSS/CSS_layout)前，为你提供一个用于编写堪用的 CSS 的工具箱，帮你理解所有必要的理论。
- [样式化文本](/zh-CN/docs/Learn/CSS/Styling_text)
  - : 在覆盖了 CSS 语言的基础知识之后，下一个需要集中学习的 CSS 主题是文本样式化——这是你使用 CSS 最常做的事情之一。这里我们研究文本样式化的基本原理，包括设置字体、粗细、斜体、行距和字母间距、阴影等文本特征。我们最后还会讨论如何将自定义字体应用到页面上，以及如何样式化列表和链接。
- [CSS 布局](/zh-CN/docs/Learn/CSS/CSS_layout)
  - : 到目前为止，我们已经学习了 CSS 基础知识、如何设置文本样式、如何设计并操作内容所在的框。现在应该考虑如何把你的框以合适的位置放置在视口内和其他框旁边了。我们已经学习了在深入 CSS 布局之前需要学会的必要知识，下一步我们通过学习设置 display 属性、使用新的布局工具如弹性盒（flexbox），CSS 网格和定位、以及你仍想知道的一些传统技术，来深入学习 CSS 布局。

## 解决常见的 CSS 问题

[使用 CSS 解决常见问题](/zh-CN/docs/Learn/CSS/Howto)解释了怎样使用 CSS 解决创建一个网页时常遇到的问题。

从这里开始，你大致就能在 HTML 元素和它们的背景上应用颜色、改变形状尺寸和元素的位置、向元素上添加并定义边框。不过一旦你牢固掌握了即便是 CSS 最基础的部分，也没有很多做不到的事情。学习 CSS 最棒的一件事情就是，一旦你知道了基本的原理，即使你实际上不知道怎么做，你通常还是会很清楚什么能做到而什么不能做到！

## “CSS is Weird”

CSS 确实有些独特，它的工作方式与大多数编程语言和设计工具有些不同。为什么 CSS 会以这种方式工作呢？在下面的视频中，Miriam Suzanne 提供了一个有用的解释，说明了 CSS 为什么会这样工作，以及为什么它会这样演变：

{{EmbedYouTube("aHUtMbJw8iA")}}

## 参阅

- [CSS on MDN](/zh-CN/docs/Web/CSS)
  - : MDN 上 css 文档的主要入口，包括详细的参考到高级的教程一系列内容。想要了解某个属性可以取的所有值吗？这是一个很好的去处。
