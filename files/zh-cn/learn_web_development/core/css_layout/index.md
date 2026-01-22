---
title: CSS 布局
slug: Learn_web_development/Core/CSS_layout
---

此刻，我们已经看过 CSS 的基础知识，如何设置文本的样式，以及如何设置和操作内容所在的框。现在是时候看看如何把你的盒子放在与视口相关的正确位置上。我们已经涵盖了必要的先决条件，所以我们现在可以深入到 CSS 布局，查看不同的显示设置，涉及浮动和定位的传统布局方法，以及像 flexbox 这样的现代布局工具。

## 前提条件：

在开始前，你应该已经具备：

1. 对 HTML 的基础了解，在[Introduction to HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content)部分讨论过的。
2. 一定的 CSS 基础，在[Introduction to CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics)部分讨论过的。
3. 了解如何[样式化盒子模型](/zh-CN/docs/Learn_web_development/Core/Styling_basics).

> [!NOTE]
> 如果你在一台电脑/平板电脑/其他设备上工作，而你没有能力创建自己的文件，你可以尝试（大部分）在线编码程序中的代码示例，如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 。

## 指南

这些文章将提供在 CSS 中可用的基本布局工具和技术的指导。

- [介绍 CSS 布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : 本文将重述一些我们在之前的模块中已经涉及的 CSS 布局功能——例如不同的 {{cssxref("display")}} 值——并介绍我们将在本单元中涵盖的一些概念。
- [弹性盒](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [弹性盒](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases) 是一种新技术，但在如今各个浏览器都广泛支持的情况下，它已经开始准备广泛应用了。弹性盒子提供了工具，允许快速创建曾经被证明用 CSS 很难实现的一些复杂，灵活的布局和功能。本文将解释所有的基本原理。
- [网格](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : 网格是一个成熟的设计工具，许多现代网站布局是基于规则网格。在本文中，我们将看看基于网格的设计，以及如何使用 CSS 来创建网格——两者都通过现在的工具，和刚刚开始在浏览器中可用的新技术。
- [浮动](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : 最初对于文本块中的浮动图像，{{cssxref("float")}}属性已经成为在网页上创建多个列布局的最常用工具之一。本文解释所有。
- [定位](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : 定位允许你从常规文档布局流程中取出元素，并使它们具有不同的行为，例如坐在另一个之上，或始终保持在浏览器视口内的同一位置。本文解释不同的{{cssxref("position")}} 值，以及如何使用它们。
- [多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : 多列布局声明提供了一种多列组织内容的方式，正如你在一些报纸中看到的那样。这篇文章介绍怎么使用这一特性。
- [响应式设计](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : 随着越来越多的屏幕尺寸出现在支持 Web 的设备上，响应式 Web 设计（RWD）的概念出现了：一组允许网页改变其布局和外观以适应不同的屏幕宽度、分辨率等的实践。这一想法改变了我们为多设备 Web 设计的方式，在本文中，我们将帮助你了解掌握它所需的主要技术。
- [媒体查询入门指南](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : **媒体查询** 提供了一种仅当浏览器和设备环境与你指定的规则匹配时才应用 css 的方法，例如“viewport（视区）宽度大于 480 像素”。媒体查询是响应式 Web 设计的一个关键部分，因为它们允许你根据视区的大小创建不同的布局，但也可以用于检测有关网站运行环境的其他内容，例如用户是否使用触摸屏而不是鼠标。在本节中，你将首先了解媒体查询中使用的语法，然后在一个演示如何使简单设计具有响应性的示例中继续使用它们。
- [传统布局方法](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : 网格系统是 css 布局中使用的一个非常常见的特性，在 css 网格布局之前，它们往往使用浮动或其他布局特性来实现。你可以将布局想象为一组列（例如 4、6 或 12），然后将网页内容放入这些列中。在本文中，我们将探讨这些旧方法是如何工作的，以便你了解在处理旧项目时如何使用它们。
- [支持旧浏览器](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : 在本模块中，我们建议使用弹性盒和网格作为主要布局方法。但是，你的网站会遇到使用旧浏览器的访问者，或者不支持你使用的新布局方法的浏览器。在网络开发上一直有这种状况——那就是随着新特性的开发，不同的浏览器将优先支持不同的特性。本文解释了如何使用现代 web 技术而不将使用旧版本浏览器的用户拒之门外。
- [测试：基本布局掌握](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension)
  - : 通过布置网页来测试你对不同布局方法的知识的掌握。

## 参见

- [练习定位案例](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : 在最后一篇文章中介绍了定位的基础知识，现在将讨论构建几个真实世界的例子，以说明你可以通过定位做什么样的事情。
