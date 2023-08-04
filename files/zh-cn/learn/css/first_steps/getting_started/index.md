---
title: 让我们开始 CSS 的学习之旅
slug: Learn/CSS/First_steps/Getting_started
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

在这篇文章中，我们将会拿一个简单的 HTML 文档做例子，并且在里面使用 CSS 样式，期待你能在此过程中学会更多有关 CSS 的实战性知识。

#### 前置知识

在开始本单元之前，您应该：

- 基本熟悉计算机操作。
- 基本工作环境的设置（详见[安装基本软件](/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)），基本的文件操作，详见[处理文件](/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)。
- 熟悉 [HTML 概述](/zh-CN/docs/Learn/HTML/Introduction_to_HTML) 章节中提到的基本 HTML 知识。

#### 目标

- 理解 HTML 文档链接 CSS 文档的几个基本套路，
- 并能运用所学的 CSS，做些文字上的格式化操作。

## 先从 HTML 开始吧

我们先以 HTML 文档展开叙述。如果想在自己电脑试一试，可以复制下面的代码。在你的电脑上，将代码以文件名： `index.html` 的形式保存下来。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>开始学习 CSS</title>
  </head>

  <body>
    <h1>我是一级标题</h1>

    <p>
      这是一个段落文本。在文本中有一个 <span>span element</span> 并且还有一个
      <a href="http://example.com">链接</a>.
    </p>

    <p>这是第二段。包含了一个 <em>强调</em> 元素。</p>

    <ul>
      <li>项目 1</li>
      <li>项目 2</li>
      <li>项目 <em>三</em></li>
    </ul>
  </body>
</html>
```

> **备注：** 假设你电脑操作环境不方便创建文件运行代码，别担心，可以用我们下方给出的在线实时代码编辑器。</strong></p></div>

## 添加 CSS 试试看？

我们最想做的就是让 HTML 文档能够遵守我们给它的 CSS 规则。其实有三种方式可以实现，而目前我们更倾向于利用最普遍且有用的方式——在文档的开头链接 CSS。

在与之前所说的 HTML 文档的相同目录创建一个文件，保存并命名为 `styles.css` 。（看后缀知道此文件就是 CSS 文件）

为了把 `styles.css` 和 `index.html` 连接起来，可以在 HTML 文档中，{{htmlelement("head")}} 语句模块里面加上下面的代码：

```html
<link rel="stylesheet" href="styles.css" />
```

{{htmlelement("link")}} 语句块里面，我们用属性 `rel`，让浏览器知道有 CSS 文档存在（所以需要遵守 CSS 样式的规定），并利用属性 `href` 指定，寻找 CSS 文件的位置。你可以做测试来验证 CSS 是否有效：在 `styles.css` 里面加上 CSS 样式并观察显示的结果。下面，用你的编辑器打出下面的代码。

```css
h1 {
  color: red;
}
```

保存 HTML 和 CSS 文档，刷新浏览器网页，不出意外你将看到网页顶层的大标题变成红色了。如果看到这个现象，恭喜你：你已经成功将某些 CSS 样式运用到 HTML 上了。当然假设没有达到预想结果，可以仔细检查每句代码是否正确，加油：）

你可以一直在本地编辑器练习 `styles.css` ，或者采用我们教程下面的交互式智能编辑器。这个编辑器会默认把第一个面板里面的 CSS 代码连接到旁边的 HTML 文档，就好像我们上面得两个文档一样互相连接。

## 样式化 HTML 元素

通过上一节将大标题变成红色的例子，我们已经展示了我们可以选中并且样式化 HTML 元素。我们通过触发元素选择器实现这一点——元素选择器，即直接匹配 HTML 元素的选择器。例如，若要样式化一个文档中所有的段落，只需使用选择器 `p`。若要将所有段落变成绿色，你可以利用如下方式：

```css
p {
  color: green;
}
```

用逗号将不同选择器隔开，即可一次使用多个选择器。譬如，若要将所有段落与列表变成绿色，只需：

```css
p,
li {
  color: green;
}
```

您可以在下面的互动式文本编辑器上试试看，当然您也可以在本地的 CSS 文档上尝试。

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## 改变元素的默认行为

只要一个 HTML 文档标记正确，即使像我们的例子那么简单，浏览器都会尽全力将其渲染至可读状态。标题默认使用大号粗体；列表旁总有项目符号。这是因为浏览器自带一个包含默认样式的样式表，默认对任何页面有效。没有了它们，所有文本会夹杂在一起变得一团糟，我们只得从头开始规定，好糟糕。话说回来，所有现代浏览器的默认样式都没什么差距。

不过你可能对浏览器的默认样式不太满意。没关系，只需选定那个元素，加一条 CSS 规则即可。就拿我们的无序列表 `<ul>`举个例子吧，它自带项目符号，不过要是你跟它有仇，你就可以这样移除它们：

```css
li {
  list-style-type: none;
}
```

把上述代码加到你的 CSS 里面试一试！

欢迎参阅 MDN 上的 `list-style-type` 属性，看看到底有哪些值被支持。 [`list-style-type`](/zh-CN/docs/Web/CSS/list-style-type) 页首提供互动性示例，您可以输入不同的值来瞅一瞅它们到底有什么用。关于每个值的详细描述都规规整整地列在下面。

通过参阅上述页面，你会发现你不仅能移除项目符号——你甚至能改变它们。赶快试试 `square`，它能把默认的小黑球变成方框框。

## 使用类名

目前为止，我们通过 HTML 元素名规定样式。如果你愿意所有元素都一个样，也不是不可以，但大多数情况下，我估计你都不愿意。我知道你想干啥，你想用这种方式样式化这一片元素，又想用那种方式样式化那一片元素，真贪心。不过没关系，你可以给 HTML 元素加个类名（class），再选中那个类名，这样就可以了，大家基本上都这么用。

举个例子吧，咱们把 [class 属性](/zh-CN/docs/Web/HTML/Global_attributes/class)加到表里面第二个对象。你的列表看起来应该是这样的：

```html
<ul>
  <li>项目一</li>
  <li class="special">项目二</li>
  <li>项目 <em>三</em></li>
</ul>
```

在 CSS 中，要选中这个 `special` 类，只需在选择器的开头加个西文句点（.）。在你的 CSS 文档里加上如下代码：

```css
.special {
  color: orange;
  font-weight: bold;
}
```

保存再刷新，就可以看到变化。

这个 `special` 类型可不局限于列表，它可以应用到各种元素上。举个例子，你可能也想让段落里边的 `<span>` 一起又橙又粗起来。试试把`special` 类属性加上去，保存，刷新，哇，生活就是这么美好。

有时你会发现选择器中，HTML 元素选择器跟类一起出现：

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

这个意思是说，“选中每个 `special` 类的 `li` 元素”。你真要这样，好了，它对 `<span>` 还有其他元素不起作用了。你可以把这个元素再添上去就是了：

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

你们都是懒人，肯定不想每加一个 special 类的元素就改一遍 CSS 表，你肯定想把一个类的属性应用到多个元素上。所以说，有时还是别管元素，光看类就完事了，除非你意志坚定，坚持对这个类的某一种元素创造规则，还不让其他元素用。

## 根据元素在文档中的位置确定样式

有时候，您希望某些内容根据它在文档中的位置而有所不同。这里有很多选择器可以为您提供帮助，但现在我们只介绍几个选择器。在我们的文档中有两个 `<em>`元素 ——一个在段落内，另一个在列表项内。仅选择嵌套在`<li>` 元素内的`<em>`我们可以使用一个称为**包含选择符**的选择器，它只是单纯地在两个选择器之间加上一个空格。

将以下规则添加到样式表。

```css
li em {
  color: rebeccapurple;
}
```

该选择器将选择`<li>`内部的任何`<em>`元素（`<li>`的后代）。因此在示例文档中，您应该发现第三个列表项内的`<em>`现在是紫色，但是在段落内的那个没发生变化。

另一些可能想尝试的事情是在 HTML 文档中设置直接出现在标题后面并且与标题具有相同层级的段落样式，为此需在两个选择器之间添加一个 `+` 号 (成为 **相邻选择符**)

也将这个规则添加到样式表中：

```css
h1 + p {
  font-size: 200%;
}
```

下面的示例包含了上面的两个规则。尝试添加规则使位于段落中的 span 变为红色。如果没问题，您将看到在第一段中的 span 会变为红色，但是第一个列表项中的 span 不会改变颜色。

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **备注：** 如你所见，CSS 给我们提供了几种定位元素的方法。到目前为止，我们只触及了皮毛！我们将对这些选择器进行适当的研究，更多的内容将在我们后面的[选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)章节中介绍。

## 根据状态确定样式

在这篇教程中我们最后要看的一种修改样式的方法就是根据标签的状态确定样式。一个直观的例子就是当我们修改链接的样式时。当我们修改一个链接的样式时我们需要定位（针对） [`<a>`](/zh-CN/docs/Web/HTML/Element/a) （锚）标签。取决于是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，这个标签有着不同的状态。你可以使用 CSS 去定位或者说针对这些不同的状态进行修饰——下面的 CSS 代码使得没有被访问的链接颜色变为粉色、访问过的链接变为绿色。

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

你可以改变链接被鼠标悬停的时候的样式，例如移除下划线，下面的代码就实现了这个功能。

```css
a:hover {
  text-decoration: none;
}
```

在下面的例子中，你可以对超链接的不同状态尝试各种各样的值。我已经编写了一些规则，然而你肯定已经发现粉色看上去太浅以至于不好辨认。——换一个更好的颜色吧。你能将链接变为黑体吗？

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 900)}}

我们对鼠标悬停于链接上的情况删除了下划线。你当然可以让超链接在任何情况下都没有下划线。但需要注意的是，对一个实际的站点，需要让浏览者知道“链接是链接”。为了让浏览者注意到一段文字中的某些部分是可点击的，最好保留 link 状态下的下划线。— 这是下划线的本来作用。不管你用 CSS 来做什么，都应当使得变化后的文档看上去更加清晰明了。— 在后面，当我们遇到类似的情况时，我们将适时指出。

> **备注：** 在本教程以及整个 MDN 站点中，你会经常看到“无障碍”这个词。“无障碍”一词的意思是，我们的网页应当让每一个访客都能够理解、使用。
>
> 你的访客可能在一台使用鼠标和键盘操作的计算机前，也可能正在使用带有触摸屏的手机，或者正在使用屏幕阅读软件读出文档内容，或者他们需要使用更大的字体，或者仅仅使用键盘浏览站点。
>
> 一个朴素的 HTML 文档一般来说对任何人都是可以无障碍访问的，当你开始为它添加样式，记得不要破坏这种无障碍。

## 同时使用选择器和选择符

你可以同时使用选择器和选择符。来看一些例子：

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }
```

你可以将多种类型组合在一起。试试将下面的代码添加到你的代码里：

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

上面的代码为以下元素建立样式：在 `<body>` 之内，紧接在 `<h1>` 后面的 `<p>` 元素的内部，类名为 special。

在我们提供的原始 HTML 文档中，与之符合的元素只有`<span class="special">`.

如果你现在觉得这份代码太复杂了，别担心，一旦你开始编写更多的 CSS 代码，你很快就能找到窍门。

## 总结

在本教程中，我们学习了使用 CSS 为文档添加样式的几种方法。在教程的剩下部分，我们将继续这个话题。不过，你现在已经有了足够的知识为文本建立样式；根据目标元素的不同用不同的方式应用样式；在 MDN 文档中查找属性和值。

在下一节中，我们将看到样式表的结构是什么样的。

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
