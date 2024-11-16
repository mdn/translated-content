---
title: CSS 构建
slug: Learn/CSS/Building_blocks
---

{{LearnSidebar}}

这个模块承接[学习 CSS 第一步](/zh-CN/docs/Learn/CSS/First_steps)——即你对 (CSS) 语言和其语法已经足够熟悉、并且有了一些基本的使用经验，该是稍微深入点学习的时候了。这个模块着眼于级联和继承，所有可供使用的选择器类型，单位，尺寸，背景、边框样式，调试，等等等等。

本文目标是，在你进一步了解[为文本添加样式](/zh-CN/docs/Learn/CSS/Styling_text)和 [CSS 布局](/zh-CN/docs/Learn/CSS/CSS_layout)之前，为你提供一个助你写出合格 CSS 和理解所有基本理论的工具箱。

## 先决条件

在开始本模块之前，你应该已经掌握：

1. 使用计算机的基本知识，能够被动使用网络（也就是查看网页的内容）。
2. 建立基本工作环境（详见[安装基础软件](/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)），知道如何建立和管理文档（详见[处理文件](/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)）。
3. HTML 基础知识（参见 [HTML 介绍](/zh-CN/docs/Learn/HTML/Introduction_to_HTML)模块）。
4. CSS 基础知识（参见[学习 CSS 第一步](/zh-CN/docs/Learn/CSS/First_steps)模块）。

> [!NOTE]
> 如果你此刻正使用一台电脑/笔记本/其他设备，而你无法创建自己的文件，那你可以在诸如 JSBin 或 Glitch 等网络编辑程序上尝试（多数）程序案例。

## 指南

本模块包含以下文章，这些文章覆盖了绝大部分 CSS 语言基础。在学习这些文章的过程中，会有很多练习题供你检验自己的理解程度。

- [层叠与继承](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
  - : 本节目标是帮你建立对——层叠、优先级和继承——这三个最基本的 CSS 概念的理解。这些概念控制着 CSS 如何应用于 HTML 以及应用时的优先顺序。
- [CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)

  - : 有各种类型的 CSS 选择器，以供我们精确选出要添加样式的元素。在本文及其子文章中，我们会详细过一遍不同类型的选择器，以此窥探 CSS 选择器的运行机理。子文章包括了：

    - [类型、类以及 ID 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [属性选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [伪类与伪元素](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [关系选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)
  - : 所有 CSS 都是包在盒子里的，那么理解这些盒子就是让我们能够创建 CSS 布局或排列元素的关键点了。为了接下来能完成编写复杂布局的任务，本节我们会认真看看*CSS 盒模型*，了解其原理及相关术语。
- [背景与边框](/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : 在这一节课中，我们将会看一下你可以用 CSS 对背景和边框进行哪些创新。通过添加渐变、背景图片和圆角，背景和边框可以解决许多 CSS 中的样式问题。
- [处理不同的文本方向](/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : 最近几年来，CSS 进行了演化，以更好地支持不同方向的内容，既包括自左至右，又包括自上至下（如日语）的内容——这些不同的排布方向被称作书写模式。随着你在这部分学习中不断前进并开始设计网页布局，理解书写模式将会非常有帮助，因此我们会在本文中进行介绍。
- [溢出的内容](/zh-CN/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : 这一节我们会关注 CSS 中的另一个重要的概念——溢出。溢出发生在一个盒子中包含了过多内容以致超出适当的范围时。在这篇指南中，你将学到什么是溢出以及如何处理它。
- [值和单位](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : CSS 中每一个属性都有一个取值或者一系列合理的取值。这一节，我们将了解一些最常用的取值和单位。
- [在 CSS 中调整大小](/zh-CN/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : 通过目前为止的一系列课程，你已经了解了许多使用 CSS 调整网页项目大小的方法。了解你所设计的不同特性将呈现的大小很重要，我们将在这节课中总结使用 CSS 调整大小的不同方法，并定义几个有关尺寸的术语，这将对你有所帮助。
- [图片、媒体和表单元素](/zh-CN/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : 在这一节，我们会了解 CSS 是如何处理一些特殊元素的。与常规的盒子相比，图片、其他媒体和表格元素对你使用 CSS 设置样式的能力提出了不同的要求。理解什么能够实现和什么不能够实现将会免去你一些沮丧，这节课会突出一些你需要了解的主要问题。
- [样式化表格](/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : 设计 HTML 表格的样式并不是多么美妙的工作，但有时却是我们都需要去做的。这篇文章通过突出一些特定的表格样式技巧，为设计好看的 HTML 表格提供了一份指南。
- [调试 CSS](/zh-CN/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : 有时在编写 CSS 的过程中，你会遇到这样一个问题：你的 CSS 并没有实现你想要的效果。这篇文章将为你提供指导，教你如何调试 CSS 问题，以及如何使用所有现代浏览器带有的开发者工具找到问题所在。
- [组织 CSS](/zh-CN/docs/Learn/CSS/Building_blocks/Organizing)
  - : 当你开始处理更大的样式表和项目时，你将会发现维护一个庞大的样式表非常具有挑战性。在这篇文章中，我们将会简要了解使得 CSS 易于维护的最佳做法，以及其他人所使用的一些有助于增进可维护性的解决方案。

## 评估

想要测试一下你的 CSS 技能吗？下面这些评估将测试你对以上那些指南中的 CSS 技能的掌握。

- [基本的 CSS 理解](/zh-CN/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
  - : 这项评估测试你对基本语法、选择器、特异性、盒子模型的掌握。
- [设计漂亮的信头信笺](/zh-CN/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
  - : 如果你想留下良好的印象，用一张漂亮的信头信笺写一封信一定是个好的开始。在这一评估中，你将挑战创建这样一个漂亮的网络样板。
- [一个炫酷的盒子](/zh-CN/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : 在这里，你将练习使用背景和边距来创建一个吸引眼球的盒子。

## 参见

- [高级区块效果](/zh-CN/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : 这篇文章展示了盒子的小技巧，提供了一些高级特性的介绍，这些特性不适合其他类别的样式，比如盒子阴影、混合模式和滤镜。
