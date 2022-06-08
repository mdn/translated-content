---
title: 常见 web 布局都包含什么？
slug: Learn/Common_questions/Common_web_layouts
tags:
  - CSS
  - HTML
  - “自主学习”待完善
  - 初学者
  - 设计
translation_of: Learn/Common_questions/Common_web_layouts
---
当你设计自己站点时，最好已经对常见的 web 页面布局所包含的内容有过构思。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">知识储备：</th>
      <td>请先保证你已经考虑过<a href="/zh-CN/docs/Learn/Common_questions/Thinking_before_coding">《我该怎样开始设计我的网站？》</a>所说的内容。</td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>了解站点内容的布局规范，以及为什么这么放置。</td>
    </tr>
  </tbody>
</table>

## 概要

从头开始制作页面的时候，页面空白一片以至于会让人觉得没有方向感。而同时如果你没有太多经验，这也许会让你感到不知所措。这也是为什么我们要讨论 web 设计的原因：我们有 25 年以上的经验并且会告诉你很多关于设计站点的常用规范。

几乎所有的主流站点——包含如今的新焦点：移动端 web——都由以下几点构成：

- “头部”
  - : 可以在每个页面的顶部看到。包含所有页面的相关信息（包括站点名字或 logo）以及一个便于使用的导航系统。
- “主要内容”
  - : 最大的区域，展示了当前页面的内容。
- “边缘内容”（Stuff）
  - : 包括：1、主要内容的补充部分；2、信息分享列表；3、单选导航栏。实际上，任何可以在当前页面展示又没有写入主要内容的部分都是可以划分在这的。
- “页脚”
  - : 可以在每个页面的底部看到。和头部一样，包含一些对于整个页面而言不是很重要的信息，例如法律声明和联系信息。

这些要素在所有组成元素中是相当普遍的，但是他们可以以多种形式被展示。下面是一些例子（**1** 表示“头部”、**2** “页脚”；**A** “主要内容”；**B1、B2** “边缘内容”）：

**“单列”布局**。这种布局在手机浏览时显得极为重要，因为这样肯定不会导致混乱。

![Example of a 1 column layout: Main on top and asides stacked beneath it.](1-col-layout.png)

**“双列”布局**。一般针对于平板，因为屏幕尺寸适中。

![Example of a basic 2 column layout: One aside on the left column, and main on the right column.](2-col-layout-right.png) ![Example of a basic 2 column layout: One aside on the right column, and main on the left column.](2-col-layout-left.png)

**“三列”布局**。只适合大屏幕的桌面程序（即使很多时候用户更倾向于用小窗口浏览）。

![Example of a basic 3 column layout: Aside on the left and right column, Main on the middle column.](3-col-layout.png) ![Another example of a 3 column layout: Aside side by side on the left, Main on the right column.](3-col-layout-alt.png) ![Another example of a 3 column layout: Aside side by side on the right, Main on the left column.](3-col-layout-alt2.png)

当你把上述布局灵活运用到一块的时候会非常赏心悦目：

![Example of mixed layout: Main on top and asides beneath it side by side.](1-col-layout-alt.png) ![Example of a mixed layout: Main on the left column and asides stack on top of each other on the right column](2-col-layout-left-alt.png) ![Example of a mixed layout: one aside on the left column and main in the right column with a aside beneath main.](2-col-layout-mix.png) ![Example of a mixed layout: Main on the left of the first row and one aside on the right of that same row, a second aside covering the whole second row.](2-col-layout-mix-alt.png)……

看完上述的例子，想必你在自己布局时会更加得心应手。你可能注意到了，“头部”和“页脚”永远是固定在顶部和底部；“主要内容”占有最大的空间以突出作用。

面对复杂的设计和非常规情况，你可以利用很多设计规范。在别的文章中，我们会介绍根据屏幕尺寸、或者根据不同页面来动态变化的布局方式。但是现在，还是都保持统一为好。

## 深入学习

*目前还没有可以深入学习的文章。[何不考虑发一篇？](/zh-CN/docs/MDN/Contribute/Getting_started)。*

## 深入了解

让我们开始学习一些知名站点的具体例子。

### “单列”布局

**[Invision application](https://www.invisionapp.com/)**。一个典型的“单列”布局，把所有信息线性排列在一个页面。

![Example of a 1 column layout in the wild](screenshot-product.jpg) ![1 column layout with header, main content, a stack of aside contents and a footer](screenshot-product-overlay.jpg)

相当直接。但是请记住，如果很多人从桌面软件浏览你的站点，那么一定得让“主要内容”具有较高的可用/读性。

### “双列”布局

**[Abduzeedo](https://abduzeedo.com/typography-mania-261)**，一个简单的博客布局。博客一般都是“两列”：一列偏宽用来承载主要内容，一列偏窄用来承载“边缘内容”（如小部件、二级导航栏、广告等）。

![Example of a 2 column layout for a blog](screenshot-blog.jpg) ![A 2 column layout with the main content on the left column](screenshot-blog-overlay.jpg)

在这个例子中，B1 在“头部”正下方，和“主要内容”有关联，但是“主要内容”去掉 B1 也能够表达清楚内容。这时候，你把它归类到“主要内容”或者“边缘内容”都可以。但是要注意，如果有一块区域，位于头部正下方，那么这块区域必须是“主要内容”或者和“主要内容”有关联。

### 这有个陷阱

**[MICA](https://www.mica.edu/about-mica/)**。这里有点奇怪，以基本布局概念来看，好像是“三列”布局……

![Example of a false 3 columns layout](screenshot-education.jpg) ![It looks like a 3 columns layout but actually, the aside content is floating around.](screenshot-education-overlay.jpg)

……但它并不是。B1 和 B2 浮动（float）在“主要内容”上面。记住“浮动”这个概念——当你学习 {{Glossary("CSS")}} 的时候你会不再陌生。

为什么你会认为它是一个“三列”布局？因为右上角的图片是 L 形的，又因为 B1 区域看起来像是用列来支持“主要内容”的切换功能，还因为 logo 里的“M”和“I”恰好看起来和 B1 组成了一部分。

这是经典布局支持设计创新的一个很好的例子。简单的布局易于实现，但又不会缩减你自己的创造空间。

### 更具挑战的布局

**[Opera de Paris](https://www.operadeparis.fr/en/saison-2014-2015/opera/la-boheme-puccini)**。

![An example of a tricky layout.](screenshot-opera.jpg) ![This is a 2 column layout but the header is overlapping the main content.](screenshot-opera-overlay.jpg)

这是基于“两列”布局的，但是你会发现这里有很多转角以至于布局看起来零零碎碎的。尤其是“头部”盖在了“主要内容”的图片上面。“头部”的曲线和“主要内容”的图片的曲线是有关联的，这样子会让人觉得“头部”和“主要内容”浑然一体，虽然我们都知道在技术上它们是完全不同的两个事物。这个示例看起来要比 MICA 示例更加复杂，但是实际上更好实现。

如你所见，你可以用最基本的布局搭建出工艺卓绝的站点。你可以重新打开你最喜欢的站点，然后看看里面的“头部”、“页脚”、“主要内容”和“边缘内容”。这会更好的激发你的设计灵感并且对选择更符合设计目标的站点会有冥冥中的指导作用。
