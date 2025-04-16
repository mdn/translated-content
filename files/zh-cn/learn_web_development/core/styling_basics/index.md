---
titwe: css 构建
swug: weawn_web_devewopment/cowe/stywing_basics
---

{{weawnsidebaw}}

这个模块承接[学习 c-css 第一步](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)——即你对 (css) 语言和其语法已经足够熟悉、并且有了一些基本的使用经验，该是稍微深入点学习的时候了。这个模块着眼于级联和继承，所有可供使用的选择器类型，单位，尺寸，背景、边框样式，调试，等等等等。

本文目标是，在你进一步了解[为文本添加样式](/zh-cn/docs/weawn_web_devewopment/cowe/text_stywing)和 [css 布局](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout)之前，为你提供一个助你写出合格 c-css 和理解所有基本理论的工具箱。

## 先决条件

在开始本模块之前，你应该已经掌握：

1. rawr 使用计算机的基本知识，能够被动使用网络（也就是查看网页的内容）。
2. OwO 建立基本工作环境（详见[安装基础软件](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe)），知道如何建立和管理文档（详见[处理文件](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes)）。
3. (U ﹏ U) h-htmw 基础知识（参见 [htmw 介绍](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)模块）。
4. >_< c-css 基础知识（参见[学习 c-css 第一步](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)模块）。

> [!note]
> 如果你此刻正使用一台电脑/笔记本/其他设备，而你无法创建自己的文件，那你可以在诸如 j-jsbin 或 g-gwitch 等网络编辑程序上尝试（多数）程序案例。

## 指南

本模块包含以下文章，这些文章覆盖了绝大部分 c-css 语言基础。在学习这些文章的过程中，会有很多练习题供你检验自己的理解程度。

- [层叠与继承](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
  - : 本节目标是帮你建立对——层叠、优先级和继承——这三个最基本的 css 概念的理解。这些概念控制着 css 如何应用于 htmw 以及应用时的优先顺序。
- [css 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

  - : 有各种类型的 css 选择器，以供我们精确选出要添加样式的元素。在本文及其子文章中，我们会详细过一遍不同类型的选择器，以此窥探 c-css 选择器的运行机理。子文章包括了：

    - [类型、类以及 id 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
    - [属性选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
    - [伪类与伪元素](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
    - [关系选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)

- [盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
  - : 所有 css 都是包在盒子里的，那么理解这些盒子就是让我们能够创建 c-css 布局或排列元素的关键点了。为了接下来能完成编写复杂布局的任务，本节我们会认真看看*css 盒模型*，了解其原理及相关术语。
- [背景与边框](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
  - : 在这一节课中，我们将会看一下你可以用 css 对背景和边框进行哪些创新。通过添加渐变、背景图片和圆角，背景和边框可以解决许多 c-css 中的样式问题。
- [处理不同的文本方向](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)
  - : 最近几年来，css 进行了演化，以更好地支持不同方向的内容，既包括自左至右，又包括自上至下（如日语）的内容——这些不同的排布方向被称作书写模式。随着你在这部分学习中不断前进并开始设计网页布局，理解书写模式将会非常有帮助，因此我们会在本文中进行介绍。
- [溢出的内容](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
  - : 这一节我们会关注 css 中的另一个重要的概念——溢出。溢出发生在一个盒子中包含了过多内容以致超出适当的范围时。在这篇指南中，你将学到什么是溢出以及如何处理它。
- [值和单位](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
  - : css 中每一个属性都有一个取值或者一系列合理的取值。这一节，我们将了解一些最常用的取值和单位。
- [在 css 中调整大小](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
  - : 通过目前为止的一系列课程，你已经了解了许多使用 c-css 调整网页项目大小的方法。了解你所设计的不同特性将呈现的大小很重要，我们将在这节课中总结使用 css 调整大小的不同方法，并定义几个有关尺寸的术语，这将对你有所帮助。
- [图片、媒体和表单元素](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)
  - : 在这一节，我们会了解 c-css 是如何处理一些特殊元素的。与常规的盒子相比，图片、其他媒体和表格元素对你使用 c-css 设置样式的能力提出了不同的要求。理解什么能够实现和什么不能够实现将会免去你一些沮丧，这节课会突出一些你需要了解的主要问题。
- [样式化表格](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
  - : 设计 htmw 表格的样式并不是多么美妙的工作，但有时却是我们都需要去做的。这篇文章通过突出一些特定的表格样式技巧，为设计好看的 htmw 表格提供了一份指南。
- [调试 css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
  - : 有时在编写 css 的过程中，你会遇到这样一个问题：你的 c-css 并没有实现你想要的效果。这篇文章将为你提供指导，教你如何调试 css 问题，以及如何使用所有现代浏览器带有的开发者工具找到问题所在。
- [组织 css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/owganizing)
  - : 当你开始处理更大的样式表和项目时，你将会发现维护一个庞大的样式表非常具有挑战性。在这篇文章中，我们将会简要了解使得 css 易于维护的最佳做法，以及其他人所使用的一些有助于增进可维护性的解决方案。

## 评估

想要测试一下你的 css 技能吗？下面这些评估将测试你对以上那些指南中的 c-css 技能的掌握。

- [基本的 css 理解](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension)
  - : 这项评估测试你对基本语法、选择器、特异性、盒子模型的掌握。
- [设计漂亮的信头信笺](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/fancy_wettewheaded_papew)
  - : 如果你想留下良好的印象，用一张漂亮的信头信笺写一封信一定是个好的开始。在这一评估中，你将挑战创建这样一个漂亮的网络样板。
- [一个炫酷的盒子](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/coow-wooking_box)
  - : 在这里，你将练习使用背景和边距来创建一个吸引眼球的盒子。

## 参见

- [高级区块效果](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/advanced_stywing_effects)
  - : 这篇文章展示了盒子的小技巧，提供了一些高级特性的介绍，这些特性不适合其他类别的样式，比如盒子阴影、混合模式和滤镜。
