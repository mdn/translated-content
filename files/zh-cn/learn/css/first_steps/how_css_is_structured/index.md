---
title: 如何构建 CSS
slug: Learn/CSS/First_steps/How_CSS_is_structured
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

既然你已经了解了什么是 CSS，以及使用 CSS 的基础知识，是时候更深入的了解该语言本身的结构了。我们已经见过了本页讨论的很多概念；如果在之后对某些概念感到困惑的话，可以返回至此进行回顾。

#### 前置知识

在开始本单元之前，您应该：

- 基本熟悉计算机操作。
- 基本工作环境的设置（详见[安装基本软件](/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)），基本的文件操作，详见[处理文件](/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)。
- 熟悉 [HTML 概述](/zh-CN/docs/Learn/HTML/Introduction_to_HTML) 章节中提到的基本 HTML 知识。

#### 目标

- 理解 HTML 文档链接 CSS 文档的几个基本套路，
- 并能运用所学的 CSS，做些文字上的格式化操作。

## 在你的 HTML 里面应用 CSS

我们需要了解的第一件事情就是在文档中应用 CSS 的三种方法

### 外部样式表

在 [Getting started with CSS](/zh-CN/docs/Learn/CSS/First_steps/Getting_started) 中我们将外部样式表链接到页面。这是将 CSS 附加到文档中的最常见和最有用的方法，因为您可以将 CSS 链接到多个页面，从而允许您使用相同的样式表设置所有页面的样式。在大多数情况下，一个站点的不同页面看起来几乎都是一样的，因此您可以使用相同的规则集来获得基本的外观。

外部样式表是指将 CSS 编写在扩展名为`.css` 的单独文件中，并从 HTML `<link>` 元素引用它的情况：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

CSS 文件可能如下所示：

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

{{htmlelement("link")}} 元素的 `href` 属性需要引用你的文件系统中的一个文件。

在上面的例子中，CSS 文件和 HTML 文档在同一个文件夹中，但是你可以把 CSS 文件放在其他地方，并调整指定的路径以匹配，例如：

```html
<!-- Inside a subdirectory called styles inside the current directory -->
<link rel="stylesheet" href="styles/style.css">

<!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory -->
<link rel="stylesheet" href="styles/general/style.css">

<!-- Go up one directory level, then inside a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css">
```

### 内部样式表

内部样式表是指不使用外部 CSS 文件，而是将 CSS 放在 HTML 文件{{htmlelement("head")}}标签里的{{htmlelement("style")}}标签之中。

于是 HTML 看起来就像下面这个样子：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

有的时候，这种方法会比较有用（比如你使用的内容管理系统不能直接编辑 CSS 文件)，但该方法和外部样式表比起来更加低效。在一个站点里，你不得不在每个页面里重复添加相同的 CSS，并且在需要更改 CSS 时修改每个页面文件。

### 内联样式

内联样式表存在于 HTML 元素的 style 属性之中。其特点是每个 CSS 表只影响一个元素：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**除非你有充足的理由，否则不要这样做！** 它难以维护（在需要更新时，你必须在修改同一个文档的多处地方），并且这种写法将文档结构和文档表现混合起来了，这使得代码变得难以阅读和理解。将不同类型的代码分开存放在不同的文档中，会让我们的工作更加清晰。

在某些地方，内联样式更常见，甚至更可取。如果您的工作环境确实很严格（也许网站管理系统 (CMS) 仅允许您编辑 HTML 正文），则可能不得不使用它们。您也会发现它们很长时间被应用在 HTML 电子邮件中，以便与尽可能多的电子邮件客户端兼容。

## 在文本中使用 CSS

有的时候我们会在文本中使用大量的 CSS。为了做到这些，我们推荐你在你的计算机上创建一个新的文件夹，然后在文件夹中创建下面两个文件的副本。

index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My CSS experiments</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <p>Create your test HTML here</p>

  </body>
</html>
```

styles.css:

```css
/* Create your test CSS here */

p {
  color: red;
}
```

然后，当您遇到一些您想要试验的 CSS 时，替换 HTML`<body>`内容与一些 HTML 样式，并开始添加 CSS 样式在您的 CSS 文件。

如果你没有可以轻松创建文件的系统，则可以使用下面交互式编译器进行实验。

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

继续读下去，希望你能享受其中！

## 选择器

讲到 CSS 就不得不说到选择器，并且在之前的辅导教程中我们已经列举了一些不同的选择器。为了样式化某些元素，我们会通过选择器来选中 HTML 文档中的这些元素。如果你的样式没有生效，那很可能是你的选择器没有像你想象的那样选中你想要的元素。

每个 CSS 规则都以一个选择器或一组选择器为开始，去告诉浏览器这些规则应该应用到哪些元素上。以下都是有效的选择器或组合选择器的示例。

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

尝试创建一些使用上述选择器的 CSS 规则，并创建一些 HTML 样式。如果您不知道上面的一些语法意味着什么，请尝试在 MDN 上搜索它！

> **备注：** 在下一个模块中，您将在我们的 _CSS 选择器_ 教程中了解更多关于选择器的内容。

### 专一性

通常情况下，两个选择器可以选择相同的 HTML 元素。考虑下面的样式表，其中我有一个规则，其中有一个将段落设置为蓝色的 p 选择器，还有一个将选定元素设置为红色的类。

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

比方说，在我们的 HTML 文档中，我们有一个带有特殊类的段落。这两条规则都适用，那么谁赢了？你认为我们的段落会变成什么颜色？

```html
<p class="special">What color am I?</p>
```

CSS 语言有规则来控制在发生碰撞时哪条规则将获胜——这些规则称为级联规则和专用规则。在下面的代码块中，我们为 p 选择器定义了两个规则，但是段落最后是蓝色的。这是因为将其设置为蓝色的声明将出现在样式表的后面，而稍后的样式将覆盖以前的样式。这就是起作用的级联。

```css
p {
  color: red;
}

p {
  color: blue;
}
```

但是，在我们同时使用了类选择器和元素选择器的前一个例子中，类将获胜，使得段落变红——即使它出现在样式表的前面。一个类被描述为比元素选择器更具体，或者具有更多的特异性，所以它获胜了。

自己试试上面的实验——将 HTML 添加到您的实验中，然后将两个 `p{.}` 规则添加到样式表中。接下来，将第一个 `p` 选择器更改为 `.special`，以查看它如何更改样式。

一开始，具体性和层叠的规则看起来有点复杂，一旦你积累了更多的 CSS 知识，就更容易理解了。在我们的级联和继承文章 (将在下一个模块中讨论) 中，我将详细解释这一点，包括如何计算专用性。现在，请记住这是存在的，有时 CSS 可能不会像您预期的那样应用，因为样式表中的其他内容具有更高的特异性。确定一个元素可以适用不止一个规则是解决这些问题的第一步

## 属性和值

在最基本的层面上，CSS 由两个组成部分组成：

- **属性：** 人类可读的标识符，指示您想要更改的样式特征 (例如[`font-size`](/zh-CN/docs/Web/CSS/font-size)、[`width`](/zh-CN/docs/Web/CSS/width)、[`background-color`](/zh-CN/docs/Web/CSS/background-color))。
- **值：** 每个指定的属性都有一个值，该值指示您希望如何更改这些样式特性 (例如，要将字体、宽度或背景色更改为。)

下面的图像突出显示单个属性和值。属性名为 `color`, 值为 `blue`.

![A declaration highlighted in the CSS](declaration.png)

与值配对的属性称为 CSS 声明。CSS 声明放在 CSS 声明块中。下一张图片显示了我们的 CSS，并突出显示了声明块。

![A highlighted declaration block](declaration-block.png)

最后，CSS 声明块与选择器配对，以生成 CSS 规则集 (或 CSS 规则)。我们的图像包含两个规则，一个用于 `h1` 选择器，另一个用于 `p` 选择器。`h1` 的规则被突出显示。

![The rule for h1 highlighted](rules.png)

将 CSS 属性设置为特定值是 CSS 语言的核心功能。CSS 引擎计算哪些声明应用于页面的每个元素，以便适当地布局和样式它。重要的是要记住，在 CSS 中，属性和值都是区分大小写的。每对中的属性和值由冒号 (`:`) 分隔。

**尝试查找以下属性的不同值，并编写将它们应用于不同 HTML 元素的 CSS 规则：**

- **{{cssxref("font-size")}}**
- **{{cssxref("width")}}**
- **{{cssxref("background-color")}}**
- **{{cssxref("color")}}**
- **{{cssxref("border")}}**

> **警告：** 如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的 CSS 引擎完全忽略。

> **警告：** 在 CSS(和其他网络标准) 中，当语言表达存在不确定性时，美国的拼写被视作公认的标准。例如，颜色应该始终拼写为 `color`。`colour` 是不起作用的。

### 函数

#### calc() 函数

虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个例子是 calc() 函数。这个函数允许您在 CSS 中进行简单的计算，例如：

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
padding: 10px;
width: calc(90% - 30px);
background-color: rebeccapurple;
color: white;
}
```

如下所示：

{{EmbedLiveSample('calc() 函数', '100%', 200)}}

一个函数由函数名和一些括号组成，其中放置了该函数的允许值。在上面的 `calc()` 示例中，我要求此框的宽度为包含块宽度的 90%，减去 30 像素。这不是我可以提前计算的东西，只是在 CSS 中输入值，因为我不知道 90% 会是什么。与所有值一样，MDN 上的相关页面将有使用示例，这样您就可以看到函数是如何工作的。

#### transform 函数

另一个例子是 {{cssxref("&lt;transform&gt;")}}，例如 `rotate()`。

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}
```

以上代码的输出如下所示：

{{EmbedLiveSample('transform 函数', '100%', 200)}}

**尝试查找一下属性的不同值，并编写将他们应用于不同 HTML 元素的 CSS 规则：**

- **{{cssxref("transform")}}**
- **{{cssxref("background-image")}}, in particular gradient values**
- **{{cssxref("color")}}, in particular rgb/rgba/hsl/hsla values**

## @规则

到目前为止，我们还没有遇到 [`@rules`](/zh-CN/docs/Web/CSS/At-rule) (发音为 "at-rules")。这是一些特殊的规则，为 CSS 提供了一些关于如何表现的指导。有些 `@rules` 规则很简单，有规则名和值。例如，要将额外的样式表导入主 CSS 样式表，可以使用 `@import`:

```css
@import 'styles2.css';
```

您将遇到的最常见的 @rule 之一是 `@media`，它允许您使用[媒体查询](/zh-CN/docs/Web/CSS/Media_Queries)来应用 CSS，仅当某些条件成立 (例如，当屏幕分辨率高于某一数量，或屏幕宽度大于某一宽度时)。

在下面的 CSS 中，我们将给 `<body>` 元素一个粉红色的背景色。但是，我们随后使用 @media 创建样式表的一个部分，该部分仅适用于视口大于 30em 的浏览器。如果浏览器的宽度大于 30em，则背景色将为蓝色。

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

在这些教程中，你将遇到一些其他的 `@rules` 规则

**查看是否可以将媒体查询添加到 CSS 中，该查询将根据视口宽度更改样式。更改浏览器窗口的宽度以查看结果。**

## 速记属性

一些属性，如 {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, and {{cssxref("margin")}} 等属性称为速记属性--这是因为它们允许您在一行中设置多个属性值，从而节省时间并使代码更整洁。

例如，这一行代码：

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

与这四行代码是等价的：

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

这一行：

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

与这五行代码是等价的：

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

我们现在不打算详尽地教授这些内容——在后面的课程中，您将看到许多例子，我们建议您查找 CSS 参考中的速记属性名称，以查找更多内容。

尝试将上述声明添加到 CSS 中，看看它如何影响 HTML 的样式。试着尝试一些不同的属性值。

> **警告：** 虽然速记经常允许您忽略值，但它们会将不包含的任何值重置为它们的初始值。这确保使用了一组合理的值。但是，如果您期望速记只更改传入的值，这可能会使您感到困惑。

## 注释

与任何的代码工作一样，在编写 CSS 过程中，最好的练习方式就是添加注释。这样做可以帮助您在过了几个月后回来修改或优化代码时了解它们是如何工作的，同时也便于其他人理解您的代码。

CSS 中的注释以 `/*` 开头，以 `*/` 结尾。在下面的代码块中，注释标记了不同代码节的开始。当代码库变得更大时，这对于帮助您导航代码库非常有用——在代码编辑器中搜索注释可以高效地定位代码节。

```css
/* Handle basic element styling */
/* -------------------------------------------------------------------------------------------- */
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Let's special case the global font size. On large screen or window,
     we increase the font size for better readability */
  body {
    font-size: 130%;
  }
}

h1 {font-size: 1.5em;}

/* Handle specific elements nested in the DOM  */
/* -------------------------------------------------------------------------------------------- */
div p, #id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p{
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

“注释掉”代码这一操作常用于在测试中临时禁用一段代码。例如，如果您试图找出代码的哪一部分会导致错误。在下例中，`.special` selector 规则被“注释”掉了，也就是被禁用了。

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

添加一些注释到您的 CSS，以适应使用他们。

## 空白

空白是指实际空格、制表符和新行。以与 HTML 相同的方式，浏览器往往忽略 CSS 中的大部分空白；许多空白只是为了提高可读性。

在下面的第一个示例中，我们将每个声明 (以及规则开始/结束) 都放在自己的行中--这可以说是编写 CSS 的好方法，因为它使维护和理解变得更加容易：

```css
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

您可以编写完全相同的 CSS，删除大部分空格--这在功能上与第一个示例相同，但我相信您肯定也觉得阅读起来有点困难：

```css
body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) { body {font-size: 130%;} }

h1 {font-size: 1.5em;}

div p, #id:first-line {background-color: red; border-radius: 3px;}
div p {margin: 0; padding: 1em;}
div p + p {padding-top: 0;}
```

您选择的代码布局通常是个人偏好，尽管当您开始在团队中工作时，您可能会发现现有团队有自己的样式指南，指定要遵循的约定。

在 CSS 中，属性和它们的值之间的空格需要小心。

例如，以下声明是有效的 CSS：

```css
margin: 0 auto;
padding-left: 10px;
```

以下内容无效：

```css
margin: 0auto;
padding- left: 10px;
```

“0auto”不被识别为边距属性的有效值 (“0”和“AUTO”是两个独立的值)，而浏览器会将“padding- ”识别为有效属性。因此，您应该始终确保通过至少一个空格将不同的值分隔开来，但将属性名称和属性值作为单个未中断的字符串放在一起。

试着在 CSS 中使用空格，看看什么情况下破坏了东西，什么时候没有破坏。

## 接下来是什么？

了解一下浏览器如何将 HTML 和 CSS 转换成网页是很有用的，所以在下一篇文章——[CSS 是如何工作的](/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works)——我们将看看这个过程。

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
