---
title: HTML 介绍
slug: Learn/HTML/Introduction_to_HTML
tags:
  - HTML 介绍
  - 文本
  - 结构
  - 链接
translation_of: Learn/HTML/Introduction_to_HTML
---
{{LearnSidebar}}

就其核心而言，{{glossary("HTML")}} 是一种相当简单的、由不同{{glossary("Element", "元素")}}组成的标记语言，它可以被应用于文本片段，使文本在文档中具有不同的含义（它是段落吗？它是项目列表吗？它是表格吗？），将文档结构化为逻辑块（文档是否有头部？有三列内容？有一个导航菜单？），并且可以将图片，影像等内容嵌入到页面中。本模块将介绍前两个用途，并且介绍一些 HTML 的基本概念和语法。

## 前言

尽管你无需事先拥有任何 HTML 相关知识以学习该模块，你仍至少需要熟悉一些使用电脑的基础知识，并会被动地使用网络（也就是看着它，浏览内容）。你需要配置基础的开发环境（详细说明请参见[安装基本软件](zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)页面），并且懂得如何创建和管理文件（在[处理文件](zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)页面中有详细说明） —— 它们都是我们纯新手 [Web 开发入门](zh-CN/docs/Learn/Getting_started_with_the_web)模块的一部分。

> **备注：**
>
> 如果你正在一台你不能创建文件的电脑/平板/其他设备上作业，那么你需要在在线编程工具上运行（大多数）代码示例，如 [JSBin](http://jsbin.com/) 或 [Glitch](https://glitch.com/) 等。

## 指南

本模块包含以下文章，它们将带你了解 HTML 的所有基本理论，并为你提供充分的机会来测试一些技能。

- [HTML 入门](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  - : 涵盖了 HTML 绝对基础知识以帮助你入门 —— 定义元素、属性和其他重要术语，并展示了它们在语言中的位置。我们还展示了一个典型的 HTML 页面的结构和一个 HTML 元素的结构，并解释了一些重要的基本语言特征。一路下来，我们会与 HTML 一起玩耍，以激发你的兴趣！
- [Head 中有什么？HTML 中的元数据](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
  - : 当页面被加载后，HTML 中的 head 部分**是不会**被显示在 Web 浏览器中的。它包含了许多信息，例如网页的标题 {{htmlelement("title")}}，指向 {{glossary("CSS")}} 的链接（如果你使用 CSS 来设计 HTML 内容的样式的话），指向自定义网站图标的链接和一些元数据（关于 HTML 本身的数据，例如它的作者和描述这个文档的关键字）。
- [HTML 文字处理基础](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
  - : HTML 的主要工作之一就是给予文本意义（也被叫做{{glossary("Semantics", "语义")}}），以让浏览器知道如何正确的显示文本。这篇文章关注于如何用 HTML 将文本块分解为结构化的标题和段落、强调和加粗单词、创建列表和其他。
- [创建超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
  - : 超链接真的很重要--它们是“网络”这个名字的起源。本文展示了创建超链接所需的语法，并讨论了创建超链接的最佳做法。
- [高级文本排版](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
  - : HTML 中还有许多没有在 [HTML 文字处理基础](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)页面中提到的其他元素可以用于格式化文本。这里的元素不太为人所知，但了解这些元素仍然很有用。在这篇文章里，你将学习如何标记引文、描述列表、计算机代码和其他类似的文本、下标和上标、联系信息等。
- [文档和网站结构](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - : 除了定义页面的个别部分（例如“段落”或“图像”）外，HTML 也被用于定义网站的区域（例如“标题”，“导航菜单”，“主内容列“）。本文将探讨如何规划一个基本的网站结构，以及如何编写 HTML 来表示这个结构。
- [调试 HTML](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
  - : 光是编写 HTML 还好，但如果出了什么问题，而你找不到问题的来源怎么办？本文将介绍一些可以帮上忙的工具。

## 考核

以下考核将测试你对上述指南中 HTML 基础知识的理解。

- [制造一份信件](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
  - : 我们迟早都要学会如何写信，而这也是不错的用与测试我们的文本格式化技能的例子！在这个考核中，你需要标记一封信。
- [结构化页面内容](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
  - : 此考核测试你能否使用 HTML 构建简单的内容页面，其中包含页眉、页脚、导航菜单、主要内容和侧边栏。
