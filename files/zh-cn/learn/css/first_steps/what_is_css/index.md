---
title: 什么是 CSS?
slug: Learn/CSS/First_steps/What_is_CSS
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS")}}** (层叠样式表) 让你可以创建好看的网页，但是它具体是怎么工作的呢？这篇文章通过一些很简单的例子，告诉我们什么是 CSS，同时还会涉及一些和 CSS 相关的专业术语。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机知识，<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装基础软件</a
        >,
        <a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理</a
        >
        的基础知识，还有 HTML 基础 (学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 概述</a>。)
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解什么是 CSS。</td>
    </tr>
  </tbody>
</table>

在 [HTML 概述](/zh-CN/docs/Learn/HTML/Introduction_to_HTML) 模块我们学习了 HTML 是什么，以及如何使用它来组成页面。浏览器能够解析这些页面。标题部分看起来会比正常文本更大，段落则会另起一行，并且相互之间会有一定间隔。链接通过下划线和不同的颜色与其他文本区分开来。这些都是浏览器的默认样式——当开发者没有指定样式时，浏览器通过这些最简单的样式使页面具有基本可读性。

![这是浏览器默认样式](html-example.png)

如果所有网站都像上图那样，互联网就会非常枯燥。但是使用 CSS 就可以完全控制浏览器如何显示 HTML 元素，从而充分展示你喜欢的设计样式。

## CSS 用来干什么？

前文提到过，CSS 是用来指定文档如何展示给用户的一门语言——如网页的样式、布局、等等。

一份**文档**是由标记语言组织起来的文本文件 —— {{Glossary("HTML")}} 是最常见的标记语言，但你可能也听说过其他可标记语言，如 {{Glossary("SVG")}} 或 {{Glossary("XML")}}。

**展示**一份文档给用户实际上是将文档变成用户可用的文件。{{Glossary("browser","Browsers")}}：如 {{Glossary("Mozilla Firefox","Firefox")}}，{{Glossary("Google Chrome","Chrome")}}, 或 {{Glossary("Microsoft Edge","Edge")}}，都可以将文档在电脑屏幕、投影仪或打印机等设备上进行可视化。

> **备注：** 浏览器有时候也被称为 {{Glossary("User agent","user agent")}}，大致可以当这个程序是一个存在于计算机系统中的人。当我们讨论 CSS 时，浏览器是 User agent 的主要形式，然而它并不是唯一的一个。还有其他可用的 user agents — 像是那些可以把 HTML 和 CSS 文档转换为可以打印的 PDF 文档的软件。

CSS 可以用于给文档添加样式 —— 比如改变标题和链接的[颜色](/zh-CN/docs/Web/CSS/color_value)及[大小](/zh-CN/docs/Web/CSS/font-size)。它也可用于创建布局 —— 比如将一个单列文本变成包含主要内容区域和存放相关信息的侧边栏区域的[布局](/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)。它甚至还可以用来做一些特效，比如[动画](/zh-CN/docs/Web/CSS/CSS_animations)。查看本段内容中所给出的特定案例。

## CSS 语法

CSS 是一门基于规则的语言 —— 你能定义用于你的网页中特定元素样式的一组规则。比如“我希望页面中的主标题是红色的大字”

下面这段代码使用非常简单的 CSS 规则实现了之前提到的效果：

```css
h1 {
  color: red;
  font-size: 5em;
}
```

语法由一个 {{Glossary("CSS Selector", "选择器（selector）")}}起头。它*选择*了我们将要用来添加样式的 HTML 元素。在这个例子中我们为一级标题（主标题{{htmlelement("h1")}}）添加样式。

接着输入一对大括号 `{ }`。在大括号内部定义一个或多个形式为**属性**（property）—**值**（value）对的**声明**。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

冒号之前是属性，冒号之后是值。不同的 CSS {{Glossary("property/CSS","属性")}}对应不同的合法值。在这个例子中，我们指定了 `color` 属性，它可以接受许多[颜色值](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#颜色)；还有 `font-size` 属性，它可以接收许多 [size unit](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#数字，长度和百分比) 值。

一个 CSS 样式表可以包含很多个规则。

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

你会发现你已经很快掌握了一些属性的值，但是属性可以接受的值远不止这些。在 MDN 上每个属性都有单独的页面，不论你是忘记了某个属性，还是想要知道一个属性还能接受什么其他的值，这些页面都可以帮助你。

> **备注：** 在 MDN 上的 [CSS 参考](/zh-CN/docs/Web/CSS/Reference)页面列举了所有的 CSS 属性页面（同时也包括其他的 CSS 特性）。另外，当你想要寻找一个 CSS 特性的更多内容时，多使用你的搜索引擎来搜索“mdn _css-feature-name_”。例如，搜索“mdn color”和“mdn font-size”！

## CSS 模块

你可以通过 CSS 为许多东西添加样式，CSS 由许多*模块*（module）构成。你可以在 MDN 上浏览这些模块的参考内容，许多模块都被组织在自己单独的文档页面。例如，我想查找一下 MDN 的 [Backgrounds and Borders](/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders) 模块的参考页面，来了解它是用来做什么的、它还包括什么属性、它还有什么其他特性等。在该模块中，你也可以找到指向定义了该技术*规范*的链接（见下文）。

在这个阶段你不必过于担心 CSS 是如何组织的 (how CSS is structured)，但是它能帮助你更好的掌握 CSS。例如，你注意到某个属性和另外一些属性的相似点，并且它们可能确实是相同的格式。

举个具体点的例子：如上文中的 Backgrounds and Borders 模块 — 你会发现 [`background-color`](/zh-CN/docs/Web/CSS/background-color) 和 [`border-color`](/zh-CN/docs/Web/CSS/border-color) 这两个属性在逻辑上相通。并且它也确实如此。

### CSS 规范

所有的标准 Web 技术 (HTML, CSS, JavaScript 等) 都被定义在一个巨大的文档中，称作 规范 specifications (或者简称为 "specs")，它是由 (像是 {{glossary("W3C")}}, {{glossary("WHATWG")}}, {{glossary("ECMA")}} 或 {{glossary("Khronos")}}) 这些规范化组织所发布的，其中还定义了各种技术是如何工作的。

CSS 也不例外——它是由 W3C(万维网联盟) 中的一个名叫 [CSS Working Group](https://www.w3.org/Style/CSS/) 团体发展起来的。这个团体是由浏览器厂商和其他公司中对 CSS 感兴趣的人作为代表组成的。也有其他的人员，比如*受邀专家 (invited experts)*，他们作为不从属于任何组织的独立声音加入团体。

新的 CSS 特性被开发出来，或是因为某个浏览器热衷于开发新功能，或是因为 Web 设计人员与开发者要求增加一个新特性，又或是 CSS Working Group 内部的讨论决定。CSS 始终在发展，并伴随着新的特性。然而，有一件事情从始至终都未改变，那就是不让新的改变破坏旧的网站，即使是 2000 年建立的网站，如今也能正常访问！

作为一个 CSS 新手，你会发现阅读 CSS 规范 中的内容非常吃力——它旨在为工程师在用户代理 (user agents) 中实现对 CSS 各种特性的支持，而不是作为一本为 Web 开发者理解 CSS 内容的教程。即使是有经验的开发者，也更倾向于使用 MDN 文档或者其他教程。但是，知晓它的存在，理解 CSS、规范 和 浏览器支持（见下文）之间的关系是很有价值的。

## 浏览器支持

当一个浏览器支持 CSS 后，我们就可以用它来进行 Web 开发了。这意味着我们写在 CSS 文件中的代码可以被指令执行，展示到荧幕中。在 [CSS 如何工作](/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works)一节中我们会学习到更多的相关知识。但是让所有的浏览器都同时支持一个 CSS 新特性是不现实的，通常都会一个空档期——一些浏览器已经支持而另一些仍未支持。因此，查看特性的实现状态是非常有用的。在 MDN 上的每个属性的页面中都标有它们对应的状态，你可以通过这种方法来查看你是否可以去使用它。

## 下一步

现在你对 CSS 已经有了一定的理解，接下来，通过 [CSS 入门](/zh-CN/docs/Learn/CSS/First_steps/Getting_started)的学习，你将可以自己写一些 CSS 代码了。

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
