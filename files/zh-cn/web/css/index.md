---
title: CSS：层叠样式表
slug: Web/CSS
---

**层叠样式表**（Cascading Style Sheets，缩写为 **CSS**）是一种[样式表](/zh-CN/docs/Web/API/StyleSheet)语言，用来描述 [HTML](/zh-CN/docs/Web/HTML) 或 [XML](/zh-CN/docs/Web/XML/Guides/XML_introduction)（包括如 [SVG](/zh-CN/docs/Web/SVG)、[MathML](/zh-CN/docs/Web/MathML) 或 {{Glossary("XHTML")}} 之类的 XML 分支语言）文档的呈现方式。CSS 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。

CSS 是**开放 Web** 的核心语言之一，并根据 [W3C 规范](https://www.w3.org/Style/CSS/#specs)在 Web 浏览器中进行了标准化。以前，CSS 规范的各个部分的开发是同步进行的，这种方式允许对最新推荐的 CSS 版本进行控制。你可能已经听说过 CSS1、CSS2.1 甚至 CSS3。但是以后将不会再有 CSS3 或者 CSS4；相反，现在的一切都是没有版本号的 CSS。

在 CSS2.1 之后，规范的制定范围不断地增加，并且不同的 CSS 模块进展差异如此之大，以至于[按照模块来单独进行开发并发布建议](https://www.w3.org/Style/CSS/current-work)变得更加有效。W3C 现在不再对 CSS 规范进行版本控制，而是定期对 [CSS 规范的最新稳定状态](https://www.w3.org/TR/css/)和各个模块的进展用快照来记录。CSS 模块现在有版本号或者级别，例如 [CSS 颜色模块第五版](https://drafts.csswg.org/css-color-5/)。

## 主要资源

- CSS 介绍
  - : 如果你是 Web 开发的新手，请务必阅读我们的 [CSS 基础](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)文章以学习 CSS 的含义和用法。
- CSS 教程
  - : 我们的 [CSS 学习区](/zh-CN/docs/Learn_web_development/Core/Styling_basics)包含了丰富的教程，它们覆盖了全部基础知识，能使你在 CSS 之路上从初出茅庐到游刃有余。
- CSS 参考
  - : 我们针对资深 Web 开发者编写的[详细参考手册](/zh-CN/docs/Web/CSS/Reference)，描述了 CSS 的各个属性与概念。

## 教程

我们的 [CSS 学习区](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 以多模块、零基础为特色进行 CSS 的教学——这也就意味着你不需要任何知识基础。

- [学习 CSS 第一步](/zh-CN/docs/Learn_web_development/Core/Styling_basics)
  - : CSS（层叠样式表）用于设置网页的样式及布局——比如，可以更改内容的字体、颜色、大小以及间距，或是将其分列，或是添加动画及赋予内容其他装饰性的特征。本模块将通过阐述基本原理，展示语法示例，以及如何与 HTML 相联系三方面，为你日后精通 CSS 提供一个友好的开端。
- [CSS 构建](/zh-CN/docs/Learn_web_development/Core/Styling_basics)
  - : 本模块是[学习 CSS 第一步](/zh-CN/docs/Learn_web_development/Core/Styling_basics)的延续，相信你已经熟悉了这门语言及它的语法，并拥有一些使用它的基本经验，是时候更进一步了。本模块着眼于层叠和继承、所有可用的选择器类型、单位、大小、背景、边框、调试等等。

    其目的在于先为你提供编写功能强大的 CSS 工具包，了解所有基础理论，之后再进行进一步的学习，诸如[样式化文本](/zh-CN/docs/Learn_web_development/Core/Text_styling)和 [CSS 布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout)。

- [CSS 为文本添加样式](/zh-CN/docs/Learn_web_development/Core/Text_styling)
  - : 在学习了 CSS 语言基础知识的基础上，你需要关注的下一个重点是样式化文本——这是使用 CSS 时最常用的场景之一。在这一模块将学习文本样式设置的基础知识，包括设置字体、粗体、斜体、行、字符间距、阴影以及其他文本属性。我们通过在页面上应用自定义的字体以及样式化的列表、链接来完善本模块。
- [CSS 布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout)
  - : 至此，我们已经了解了 CSS 的基本原理、如何设置文本样式，以及如何设置和操作内容所在的盒子。现在我们来看看如何将这些盒子放置在相对视口或另一些盒子之间的正确位置。我们到此已经覆盖了所有预备知识，因此现在能够深入学习 CSS 布局，研究不同的显示设置，学习像弹性盒（flexbox）、CSS 网格和定位这样的现代布局工具，以及一些你可能仍想了解的传统技术。
- [解决常见的 CSS 相关问题](/zh-CN/docs/Learn_web_development/Howto/Solve_CSS_problems)
  - : 本模块提供了一些内容链接，这些内容很好的回答了在创建网页时使用 CSS 所遇到的常见问题。

## 参考

- [CSS 参考](/zh-CN/docs/Web/CSS/Reference)：针对资深 Web 开发者的详细参考手册，其中描述了 CSS 的各个属性和概念。
- CSS 关键概念：
  - [语言语法和形式](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)
  - [优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)、[继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)和[级联](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)
  - [盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)和[外边距合并](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - [包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)
  - [堆叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)和[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)
  - [初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)、[计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)、[应用值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#应用值)和[实际值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#实际值)
  - [CSS 简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)
  - [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)
  - [媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)
  - [动画](/zh-CN/docs/Web/CSS/Reference/Properties/animation)

## 技术手册

[CSS 布局技术手册](/zh-CN/docs/Web/CSS/How_to/Layout_cookbook)的目的是将一些也许你将要在自己的网站中实现的、常用的布局模式的方法汇集在一起，并且还提供了代码使你可以在项目中作为基础来使用。这些方法突出表现了同一布局规范的不同使用方式，作为开发者你可以自由选择自己想要的方式来实现。

## CSS 开发工具

- [万维网联盟 CSS 验证服务](http://jigsaw.w3.org/css-validator/)用于检查 CSS 是否有效。这是非常有价值的调试工具。
- [Firefox 开发工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)允许通过[页面查看器](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)和[样式编辑器](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)工具查看和实时编辑页面的 CSS 样式。
- Firefox 的 [Web Developer 扩展](https://addons.mozilla.org/zh-CN/firefox/addon/web-developer/)也允许实时查看和编辑网站的 CSS。

## 自身的错误

- Firefox：[Firefox bug 1323667](https://bugzil.la/1323667)

## 参见

- CSS 常常应用的 Web 语言：[HTML](/zh-CN/docs/Web/HTML)、[SVG](/zh-CN/docs/Web/SVG)、[MathML](/zh-CN/docs/Web/MathML)、{{Glossary("XHTML")}} 以及 [XML](/zh-CN/docs/Web/XML/Guides/XML_introduction)。
- [StackOverflow 上 CSS 相关的问题](https://stackoverflow.com/questions/tagged/css)
