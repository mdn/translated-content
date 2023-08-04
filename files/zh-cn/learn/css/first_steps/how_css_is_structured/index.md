---
title: CSS 的组成
slug: Learn/CSS/First_steps/How_CSS_is_structured
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

既然你已经了解了什么是 CSS，以及使用 CSS 的基础知识，是时候更深入的了解 CSS 本身的结构了。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基础的计算机知识，<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >已经安装了基本的软件</a
        >，了解基本的<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理知识</a
        >和 HTML 基础（已经学习了 <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 介绍</a
        >），了解 <a href="/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works"
          >CSS 如何工作</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>具体地学习 CSS 的基本语法结构。</td>
    </tr>
  </tbody>
</table>

## 在 HTML 中应用 CSS

首先，让我们研究一下将 CSS 应用于文档的三种方法：使用外部样式表、使用内部样式表和使用内联样式。

### 外部样式表

外部样式表在一个单独的扩展名为 `.css` 的文件中包含 CSS。这是将 CSS 应用到文档中最常见和最有用的方法。你可以将一个 CSS 文件链接到多个网页上，用同一个 CSS 样式表为所有网页确定样式。在 [CSS 入门](/zh-CN/docs/Learn/CSS/First_steps/Getting_started)中，我们将一个外部样式表链接到我们的网页上。

使用 HTML `<link>` 元素来链接外部样式表文件：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的 CSS 测试</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>这是我的第一个 CSS 示例</p>
  </body>
</html>
```

CSS 样式表文件可能如下所示：

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

{{htmlelement("link")}} 元素的 `href` 属性需要引用你文件系统中的一个文件。在上面的例子中，CSS 文件与 HTML 文档在同一个文件夹中，但你可以把它放在其他地方，并调整路径。这里有三个示例：

```html
<!-- 在当前目录中，引用子文件夹 styles 中的样式表文件 -->
<link rel="stylesheet" href="styles/style.css" />

<!-- 在当前目录中，引用子文件夹 styles 中的子文件夹 general 中的样式表文件 -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- 在当前目录的父级目录中，引用子文件夹 styles 中的样式表文件 -->
<link rel="stylesheet" href="../styles/style.css" />
```

### 内部样式表

一个内部样式表驻留在 HTML 文档内部。要创建一个内部样式表，你要把 CSS 放置在包含在 HTML {{htmlelement("head")}} 元素中的 {{htmlelement("style")}} 元素内。

一个内部样式表的 HTML 代码可能看起来像这样：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的 CSS 测试</title>
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
    <p>这是我的第一个 CSS 示例</p>
  </body>
</html>
```

在某些情况下，内部样式表可能是有用的。例如，也许你正在使用一个内容管理系统，其外部 CSS 文件是不可以直接修改的。

但对于有多个页面的网站来说，内部样式表就变成了一种不太有效的工作方式。要使用内部样式表在多个页面上应用统一的 CSS 样式，你必须在每个要使用该样式的网页上都有一个内部样式表。这种效率的下降也会影响到网站的维护。在内部样式表中使用 CSS，存在这样的风险：即使是一个简单的样式变化，也可能需要对多个网页进行编辑。

### 内联样式

内联样式是影响单个 HTML 元素的 CSS 声明，包含在元素的 `style` 属性中。在一个 HTML 文档中，内联样式的实现可能看起来像这样：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的 CSS 测试</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hello World!
    </h1>
    <p style="color:red;">这是我的第一个 CSS 示例</p>
  </body>
</html>
```

**尽可能避免以这种方式使用 CSS**。这不符合最佳实践。首先，这是对 CSS 的维护效率最低的实现。一个样式的改变可能需要在一个网页中进行多次编辑。其次，内联 CSS 还将（CSS）表现性代码与 HTML 内容混合在一起，使一切都更难阅读和理解。将代码和内容分开，可以使所有从事网站工作的人更容易维护。

有几种情况下，内联样式是比较常见的。如果你的工作环境有很大的限制，你可能不得不使用内联样式。例如，也许你的内容管理系统（CMS）只允许你编辑 HTML 主体。你也可能在 HTML 电子邮件中看到大量的内联样式，以实现与尽可能多的电子邮件客户端的兼容。

## 跟随本文玩转 CSS 样式

为了下面的练习，在你的电脑上创建一个文件夹。你可以给这个文件夹取任何你想要的名字。在该文件夹中，复制下面的文字，创建两个文件：

**index.html**：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>我的 CSS 实验</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>在这里创建测试 HTML</p>
  </body>
</html>
```

**styles.css**：

```css
/* 在这里创建测试 CSS */

p {
  color: red;
}
```

当你找到你想实验的 CSS 样式时，用一些 HTML 代码来替换 HTML `<body>` 的内容，然后将你的测试 CSS 代码添加到 CSS 文件中。

或者，可以使用下面交互式编辑器进行实验。

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

继续读下去，希望你能享受其中！

## 选择器

选择器以 HTML 为目标，对内容应用样式。我们已经在 [CSS 入门](/zh-CN/docs/Learn/CSS/First_steps/Getting_started)的教程中探索了各种选择器。如果 CSS 没有像预期的那样应用于内容，你的选择器可能与你认为它应该匹配的方式不一致。

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

尝试创建一些使用上述选择器的 CSS 规则，并创建一些 HTML 样式。如果你不熟悉上面的一些语法，请尝试在 MDN 上搜索它！

> **备注：** 在下一个模块 [CSS 选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)中，你将学习到更多关于选择器的知识。

### 优先级

你可能会遇到两个选择器选择同一个 HTML 元素的情况。考虑下面的样式表，有一个 `p` 选择器，将段落文本设置为蓝色。然而，也有一个类将所选元素的文本设置为红色。

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

假如在我们的 HTML 文档中，我们有一个带有 `special` 类的段落。这两条规则都适用，那么到底哪种选择器会占优势？我们的段落会变成蓝色还是红色？

```html
<p class="special">我是什么颜色的？</p>
```

CSS 语言有一些规则来控制在发生冲突的情况下哪个选择器更强大。这些规则被称为**层叠**（cascade）和**优先级**（specificity）。在下面的代码块中，我们为 `p` 选择器定义了两条规则，但段落文本将是蓝色的。这是因为将段落文本设置为蓝色的声明在样式表的后面出现。后面的样式会替换样式表中较早出现的冲突样式。这就是**层叠**规则。

```css
p {
  color: red;
}

p {
  color: blue;
}
```

然而，在我们前面的例子中，类选择器和元素选择器之间存在冲突，类选择器占了上风，使段落文本变成了红色。即使冲突的样式在样式表的后面出现，这怎么可能发生呢？一个类被认为是更具体的，因此它比元素选择器**优先级**更高，所以它取消了其他冲突的样式声明。

自己试试这个实验吧！添加 HTML 代码，然后添加两个 `p { }` 规则到你的样式表。接下来，把第一个 `p` 选择器改为 `.special`，看看它是如何改变样式的。

优先级和层叠的规则起初看起来很复杂。随着你对 CSS 越来越熟悉，这些规则就容易理解了。下一个模块中的[层叠和继承](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)一节对此进行了详细解释，包括如何计算优先级。

现在，请记住优先级的存在。有时，CSS 可能不会像你预期的那样应用，因为样式表中的其他东西可能有更高的优先级。认识到不止一个规则可以适用于一个元素，是解决这类问题的第一步。

## 属性和值

在最基本的层面上，CSS 由两个组成部分组成：

- **属性**：人类可读的标识符，指示想要更改的样式特征。如 {{cssxref("font-size")}}、{{cssxref("width")}}、{{cssxref("background-color")}}。
- **值**：每个指定的属性都有一个值，这个值表示如何对属性施加样式。

下面的图像突出显示单个属性和值。属性名为 `color`，值为 `blue`。

![一个突出的 CSS 样式](declaration.png)

当一个属性与一个值配对时，这种配对被称为 _CSS 声明_。CSS 声明可以在 *CSS 声明块*中找到。在下面的例子中，高亮显示的是 CSS 声明块。

![一个突出的声明块](declaration-block.png)

最后，CSS 声明块与*选择器*配对，以生成 _CSS 规则集_（或称 _CSS 规则_）。这个示例包含两个规则，一个用于 `h1` 选择器，另一个用于 `p` 选择器。`h1` 的规则被突出显示。

![h1 规则被突出显示](rules.png)

将 CSS 属性设置为特定值是定义文档布局和样式的主要方式。CSS 引擎会计算哪些声明适用于页面的每一个元素。

CSS 属性和值是不区分大小写的。一个属性——值对中的属性和值用冒号（`:`）分隔。

**尝试查找以下属性的不同值，并编写将它们应用于不同 HTML 元素的 CSS 规则：**

- **{{cssxref("font-size")}}**
- **{{cssxref("width")}}**
- **{{cssxref("background-color")}}**
- **{{cssxref("color")}}**
- **{{cssxref("border")}}**

> **警告：** 如果属性未知或某个值对给定属性无效，则声明被视为*无效*，并被浏览器的 CSS 引擎完全忽略。

> **警告：** 在 CSS（和其他 web 标准）中，当语言表达存在不确定性时，美式拼写被视作公认的标准。例如，“颜色”应该始终拼写为 `color`，`colour` 是不起作用的。

### 函数

虽然大多数值是相对简单的关键字或数值，但也有一些值是以函数的形式出现的。

#### calc() 函数

一个例子是 `calc()` 函数。这个函数允许在 CSS 中进行简单的计算：

```html
<div class="outer"><div class="box">内部盒子的宽度为 90% - 30px。</div></div>
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

函数由函数名和括号组成，括号内是函数的值。在上面 `calc()` 的例子中，这些值定义了这个盒子的宽度为包含块宽度的 90%，减去 30 像素。计算的结果并不是可以事先计算并作为静态值输入的东西。

#### Transform 函数

另一个例子是 {{cssxref("transform")}} 的不同取值，如 `rotate()`。

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

以上代码的输出如下所示：

{{EmbedLiveSample('transform 函数', '100%', 200)}}

**尝试查找下列属性的不同值，并编写将他们应用于不同 HTML 元素的 CSS 规则：**

- **{{cssxref("transform")}}**
- **{{cssxref("background-image")}}，使用特定的渐变值**
- **{{cssxref("color")}}，使用特定的 rgb 和 hsl 值**

## @规则

CSS 的 [`@rules`](/zh-CN/docs/Web/CSS/At-rule)（读作“at-rules”）是一些特殊的规则，提供了关于 CSS 应该执行什么或如何表现的指令。有些@规则很简单，只有一个关键词和一个值。例如，`@import` 将一个样式表导入另一个 CSS 样式表：

```css
@import "styles2.css";
```

你可能遇到的一个常见的@规则是 `@media`，它被用来创建[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)。媒体查询使用条件逻辑来应用 CSS 样式。

在下面的例子中，样式表为 `<body>` 元素定义了一个默认的粉红色背景。然而，如果浏览器的视口宽于 30em，接下来的媒体查询则定义了蓝色背景。

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

在这些教程中，你将遇到一些其他的 `@rules` 规则。

**看看你是否可以添加一个媒体查询，根据视口宽度来改变样式。改变你的浏览器窗口的宽度，看看结果如何。**

## 简写属性

一些属性，如 {{cssxref("font")}}、{{cssxref("background")}}、{{cssxref("padding")}}、{{cssxref("border")}} 和 {{cssxref("margin")}} 等属性称为**简写属性**。它们允许在一行中设置多个属性值，从而节省时间并使代码更整洁。

例如，这一行代码：

```css
/* 在像 padding 和 margin 这样的 4 值简写语法中，
   数值的应用顺序是上、右、下、左（从顶部顺时针方向）。
   也有其他的简写类型，例如 2 值简写，
   它为顶部/底部设置 padding/margin，然后是左侧/右侧 */
padding: 10px 15px 15px 5px;
```

与这四行代码是等价的：

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

这一行代码：

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

在本课程的后期，你会遇到许多其他简写属性的例子。MDN 的 [CSS 参考](/zh-CN/docs/Web/CSS/Reference)是一个很好的资源，可以获得关于任何简写属性的更多信息。

**尝试将上述声明添加到 CSS 中，看看它如何影响 HTML 的样式。试着尝试一些不同的属性值。**

> **警告：** 使用 CSS 简写属性的一个不太明显的方面是省略的值如何重置。一个没有在 CSS 简写属性中指定的值会恢复到它的初始值。这意味着 CSS 简写属性中的省略可以**覆盖之前设置的值**。

## 注释

与任何的代码工作一样，在编写 CSS 过程中，最好的实践就是添加注释。这可以帮助你记住代码是如何工作的，因为你以后会回来进行修复或改进。它还可以帮助其他人理解代码。

CSS 中的注释以 `/*` 开头，以 `*/` 结尾。在下面的代码块中，注释标记了不同代码节的开始。这有助于在代码库变大时进行导航。有了这种注释，在你的代码编辑器中搜索注释就成了一种有效找到代码部分的方法。

```css
/* 处理基本元素样式 */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* 在更大的屏幕或窗口中提高全局的字体大小以提高可读性 */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* 处理在 DOM 中嵌套的特殊元素 */
/* -------------------------------------------------------------------------------------------- */
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

“注释掉”代码这一操作常用于在测试中临时禁用一段代码。例如，如果你试图找出代码的哪一部分会导致错误。在下面的例子中，`.special` 规则通过“注释掉”代码而被禁用。

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

**在你的 CSS 中添加注释。**

## 空白

空白是指实际的空格、制表符和换行符。就像浏览器忽略了 HTML 中的空白一样，浏览器也忽略了 CSS 中的空白。空白的价值在于它可以提高可读性。

在下面的例子中，每个声明（和规则的开始/结束）都有自己的行。这可以说是一种编写 CSS 的好方法。它使人们更容易维护和理解 CSS。

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
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

下一个例子显示了压缩格式的等效 CSS。虽然这两个例子的效果是一样的，但下面这个例子更难阅读。

```css-nolint
body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) { body { font-size: 130%;}}

h1 {font-size: 1.5em;}

div p, #id:first-line {background-color: red; border-radius: 3px;}
div p {margin: 0; padding: 1em;}
div p + p {padding-top: 0;}
```

对于你自己的项目，你将根据个人的喜好来安排你的代码格式。对于团队项目，你可能会发现，一个团队或项目有自己的风格指南。

> **警告：** CSS 声明通过空白字符分离不同的值，**属性名称不应该含有空白字符**。

例如，这些声明是有效的 CSS：

```css
margin: 0 auto;
padding-left: 10px;
```

以下声明无效：

```css example-bad
margin: 0auto;
padding- left: 10px;
```

你看到间距错误了吗？首先，`0auto` 不是 `margin` 属性的一个有效值。条目 `0auto` 应该是两个独立的值：`0` 和 `auto`。第二，浏览器不承认 `padding-` 是一个有效的属性。正确的属性名称（`padding-left`）被一个错误的空格分开。

你应该始终确保用至少一个空格将不同的值分开。将属性名称和属性值放在一起，作为一个不间断的字符串。

**试着在 CSS 中使用空格，看看什么情况下破坏了东西，什么时候没有破坏。**

## 总结

到此为止，你应该对 CSS 的结构有了更多的了解。了解浏览器是如何使用 HTML 和 CSS 来显示网页的，也很有帮助。下一篇文章 [CSS 是如何工作的](/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works)解释了这一过程。

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
