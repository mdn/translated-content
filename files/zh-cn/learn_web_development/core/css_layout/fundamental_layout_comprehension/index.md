---
title: 挑战：基本布局理解
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

如果你已经完成了本模块的学习，那么你就已经掌握了今天进行 CSS 布局所需要的基本知识，并且也可以使用旧的 CSS。这个任务将通过使用各种技术开发一个简单的网页布局来测试你的一些知识。

## 从这里开始

你可以在[这里](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension)下载基本的 HTML、CSS 和六张图片素材。

将 HTML 文档和样式表文件保存到你自己计算机的目录中，并将图像添加到名为 `images` 的文件夹中，在浏览器中打开 `index.html` 文件应该会提供一个具有基本样式但没有布局的页面，该页面应该类似下面所示的图像。

![布局任务的起点。这些元素没有被整齐地排列。有一个网站的标题，上面是一个黑色的导航条，有 5 个链接平齐在左边，后面是博客文章的标题和文章内容。在博客标题和博客内容之间，有一张照片是平齐在左边。](layout-task-start.png)

此页面开始于浏览器在正常流中显示的布局的所有内容。

另外，你可以使用像 [Glitch](https://glitch.com/) 这样的网站来做评估，把 HTML 和 CSS 代码粘贴进去。注意，如果你使用在线编辑器，你将需要上传图片并替换 `src` 属性中的值，以指向新的图片位置。如果你使用的在线编辑器没有单独的 CSS 面板，可以随意将其放在文档头部的 `<style>` 元素中。

> [!NOTE]
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 项目简介

我们已经为你提供了一些原始的 HTML、基本的 CSS 文件和图像——现在你需要设计布局页面。

### 目标

你需要实现你自己的布局。下面是你应该完成的目标：

1. 在一行中显示导航选项，并且选项之间拥有相同的空间。
2. 导航条应随着内容一起滚动并且在触碰到视口顶部之后于顶部固定。
3. 文章内的图片应该被文本包围。
4. {{htmlelement("article")}} 与 {{htmlelement("aside")}} 元素应该为双列布局。它们的列尺寸应该是弹性的，以便在浏览器窗口收缩得更小的时候能够变窄。
5. 照片应显示为两列网格，图像之间有 1 像素的间隙。

## 提示和小技巧

在实现布局的过程中你不需要修改 HTML，下面是你应该使用的技术：

- 弹性盒
- 栅格
- 浮动
- 定位

有几种方法可以实现其中的一些任务，而且往往没有单一的正确或错误的方法来做事情。试试几种不同的方法，看看哪种方法最有效。在实验过程中做下笔记。

## 示例

以下截图呈现了设计完成后的示例：

![完成了布局任务的网站。这些元素被整齐地排列着。有一个网站标题，上面是一个黑色的导航条，包含 5 个等距的链接。在导航栏下面，有两个部分。在左边有一篇博客文章。博文标题后面是博文内容。博客内容环绕着一张照片，照片在左边平齐。在右边有一个“photography”标题，图片以两张图片宽度的栅格大小排列。](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
