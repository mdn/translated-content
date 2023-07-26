---
title: 组织 CSS
slug: Learn/CSS/Building_blocks/Organizing
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

在开始在更大的样式表和大项目上作业的时候，你会发现维护一个大型的 CSS 文件很有挑战性。在本文中，我们将会简要看一下在编写你的 CSS 时，让它更加易于维护的一些最佳实践，以及你会在其他人那里看到的，用来增强可维护性的解决方案。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        电脑的基本操作，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了必要的软件</a
        >，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基本知识，HTML 基础（学习<a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 介绍</a
        >），了解 CSS 的工作方式（学习<a
          href="/zh-CN/docs/Learn/CSS/First_steps"
          >CSS 入门</a
        >。）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习组织样式表的一些技巧和最佳实践，了解一些命名常规和在组织 CSS
        以及团队协作时广泛使用的工具。
      </td>
    </tr>
  </tbody>
</table>

## 保持你的 CSS 整洁的技巧

这里有一些关于保持你的样式表整整齐齐的方式的普适性建议。

### 你的项目有代码风格规范吗？

如果你在和一个小组共同协作完成一个已有的项目，需要检查的第一件事是这一项目是否已经有了 CSS 的代码风格规范。小组的代码风格规范应当总是优先于的个人喜好。做事情很多时候没有对错之分，但是统一是很重要的。

例如你可以看下[MDN 的 CSS 代码规范的示例。](/zh-CN/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS).

### 保持统一

如果你开始为项目指定规则或者独自工作，那么最重要的事情是让各方面都保持统一。统一在所有的地方都会起到实际作用，例如对类使用相同的命名常规，选择一种描述颜色的方式，或者维护一个统一的格式化方式（例如你是使用 Tab 还是空格来缩进代码？如果是空格，用多少个？）

一直遵守一系列规则，你会在编写 CSS 的时候省去不少精神上的预负担，因为一些决定已经定型了。

### 将 CSS 格式化成可读的形式

你可以看到很多 CSS 格式化的方式，一些开发者将所有的规则放在一行里面，像是这样：

```css
.box {
  background-color: #567895;
}
h2 {
  background-color: black;
  color: white;
}
```

还有的开发者更喜欢将所有的东西放在新的一行：

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS 不会管你使用哪种方式来进行格式化，我们自己的看法是，将每个属性值对放在新的一行会更好读。

### 为你的 CSS 加注释

在你的 CSS 里加入注释，不仅可以帮任何未来的开发者处理你的 CSS 文件，也可以在你离开项目一段时间后，帮你在回来时重新上手。

```css
/* 这是一条 CSS 注释，
它可以分成好几行。*/
```

在你的样式表里面的逻辑段落之间，加入一块注释，是个好技巧。在你快速掠过的时候，这些注释可以帮你快速定位不同的段落，甚至给了你搜索或者跳转到那段 CSS 的关键词。如果你使用了一个不存在于代码里面的字符串，你可以从段落到段落间跳转，只需要搜索一下，下面我们用的是`||`。

```css
/* || General styles */

...

/* || Typography */

...

/* || Header and Main Navigation */

...
```

你不必在你的 CSS 中给每个东西都加上注释，因为它们很多都是自解释的。你应该加上注释的是那些你因为某些原因做的特殊决定。

为了对旧浏览器保持兼容，你用某种特殊方法使用了一种 CSS 属性，示例：

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

或许你是照着一个教程来做事的，CSS 有些不够直观。此时，你应该在注释里面加入教程的 URL。你应该在你一年或者更长时间以后重新审视你的项目，但只是模模糊糊地想起来之前有个优秀的教程，不知道它在哪里的时候，感谢之前加入注释的自己。

### 在你的样式表里面加入逻辑段落

在样式表里面先给一般的东西加上样式是个好想法。这也就是除了你想特定对某个元素做点什么以外，所有将会广泛生效的样式。典型地，你可以为以下的元素设定规则：

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul`和`ol`
- `table`属性
- 链接

在这段样式表里面，我们提供了用于站点类型的默认样式，为数据表格、列表等设立了一份默认的样式。

```css
/* || GENERAL STYLES */

body { ... }

h1, h2, h3, h4 { ... }

ul { ... }

blockquote { ... }
```

在这段之后，我们可以定义一些实用类，例如一个用来移除默认列表样式的类，我们打算将其展示为灵活样式或者其他样式。如果你知道你想要在许多不同的元素上应用的东西，那么你可以把它们加到这里。

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

...
```

然后我们可以加上在整个站点都会用到的所有东西，这可能是像基础页面布局、抬头或者导航栏样式之类的东西。

```css
/* || SITEWIDE */

.main-nav { ... }

.logo { ... }
```

最后我们可以在 CSS 里面加上特指的东西，将它们分成上下文、页面甚至它们使用的组件。

```css
/* || STORE PAGES */

.product-listing { ... }

.product-box { ... }
```

通过使用这种方式排布代码，我们至少能大致了解，我们能在样式表的哪个部分寻找想要更改的东西。

### 避免太特定的选择器

如果你创建了很特定的选择器，你经常会发现，你需要在你的 CSS 中复用一块代码，以将同样的规则应用到其他元素上。例如，你也许会有像是下面的选择器那样的代码，它在带有`main`类的`<article>`里面的带有`box`类的`<p>`上应用了规则。

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

如果你之后想要在`main`外的什么地方上应用相同的规则，或者在`<p>`外的其他地方，你可能必须在这些规则中加入另一个选择器，或者直接新建个规则。或者，你也可以建立一个名为`box`的类，在任何地方应用。

```css
.box {
  border: 1px solid #ccc;
}
```

将东西设置的更为特定，有时也有意义，但是这一般与其说是通常实践，倒不如说是例外。

### 将大样式表分成几个小的样式表

尤其在你对站点的不同部分设置了很不同的样式的时候，你会想要有个包含了所有普适规则的样式表，还有包含了某些段落所需要的特定规则的更小的样式表。你可以将一个页面连接到多个样式表，层叠的一般规则会在这里生效，即连接的靠后的样式表里面的规则会比前面的有更高优先级。

例如我们会将我们站点的一部分作为一个在线商店，许多 CSS 只会用于样式化商店需要的产品列表和表单。将这些东西放在另外一张样式表里面，只在商店页面进行连接，这会是合理的做法。

这可以让你更容易保持 CSS 的组织性，也意味着如果有多人在写 CSS，你会更少遇到有两个人需要同时编写相同的样式表的情况，防止在源代码的控制上产生冲突。

## 其他能帮上忙的工具

CSS 本身没有什么内置的组织方式，所以你需要自己完成建立编写 CSS 时维持统一性和规则的工作。Web 社区也已经开发了多种工具和方法，帮助你管理大些的 CSS 项目。由于它们对你的研究会有帮助，而且在你和其他人协作的时候，你也很可能会遇到这些东西，我们加入了一个对其中一些工具和方式的简短的指导。

### CSS 方法论

不必需要自己制定编写 CSS 的规则，你可以选择接纳一个已经已经由社群设计、经由诸多项目检验的方法，并从中获益。这些方法论都是有着结构化的编写和组织 CSS 途径的 CSS 代码指南。典型地，与你为你的项目编写和优化每个选择器为自己定义的规则组相比，它们会倾向于产生更多的多余代码。

但是，在接纳了一个方法以后，你的代码会更有条理，而且因为这些体系许多都是被很广泛使用的，其他的开发者更有可能理解你在使用的方式，会以相同的方式编写他们自己的代码，而不需要从头接纳你自己的个人方法论。

#### OOCSS

你会遇到的大多数方式都有一部分归功于面向对象的 CSS（OOCSS）的概念，这是一种因[Nicole Sullivan 的努力](https://github.com/stubbornella/oocss/wiki)而流行的方式。OOCSS 的基本理念是将你的 CSS 分解成可复用的对象，于是你可以在你的站点上任何需要的地方使用。OOCSS 的标准示例是在[The Media Object](/zh-CN/docs/Web/CSS/Layout_cookbook/Media_objects)中所描述的排布。这一排布一方面让图片、视频或者其他元素保持固定尺寸，而另一方面也让其他内容可伸缩。这是我们在用于评论、列表等网站随处可见的排布。

如果你没有使用一种 OOCSS 的方法，你或许会创建一个用在这种排布所应用的不同地方的自定义 CSS，例如创建一个叫做`comment`的类，用于组件部分的一组规则，然后是叫做`list-item`的类，除了一些细小的区别外，它几乎和`comment`类完全相同。这两个组件之间的不同是列表项有一个底边，在评论里的图像有边框而列表项里面的图像没有。

```css
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.comment img {
  border: 1px solid grey;
}

.comment .content {
  font-size: 0.8rem;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid grey;
}

.list-item .content {
  font-size: 0.8rem;
}
```

在 OOCSS 中，你可以建立一个叫作`media`的排布，里面包含所有的两种排布所共有的 CSS——一个大致用于媒体对象的形状之类的基础类。然后我们再额外加入一个类，处理那些微小的区别，这样特定地扩展基础样式。

```css
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content {
  font-size: 0.8rem;
}

.comment img {
  border: 1px solid grey;
}

.list-item {
  border-bottom: 1px solid grey;
}
```

在你的 HTML 里面，评论需要同时应用`media`和`comment`类：

```html
<div class="media comment">
  <img />
  <div class="content"></div>
</div>
```

列表项应用了`media`和`list-item`：

```html
<ul>
  <li class="media list-item">
    <img />
    <div class="content"></div>
  </li>
</ul>
```

Nicole Sullivan 在描述这种方式和推广上所做的工作导致，即使是那些不严格遵守 OOCSS 方式的人，今天也可以大致以这种方式复用 CSS，它已经普遍地进入到我们的理解当中，成为了与事物交互的好办法。

#### BEM

BEM 即为块级元素修饰字符（Block Element Modifier）。在 BEM 中，一个块，例如一个按钮、菜单或者标志，就是独立的实体。一个元素就像一个列表项或者标题一样，被绑定到它所在的块。修饰字符是标记到一个块或者元素的标识，能够改变样式或者行为。你能认出使用 BEM 的代码，因为代码中在 CSS 的类里使用了多余的一个下划线和连字符。例如看看这个来自关于[BEM 命名常规](http://getbem.com/naming/)的页面里面的 HTML 所应用的类：

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

增加的类和应用到 OOCSS 例子里面的相似，但是它们遵守了 BEM 严格的命名常规。

BEM 在大些的 Web 项目中被广泛使用，许多人用这种方式写他们的 CSS。你可能会在没有提及为何 CSS 如此布局的时候，遇到 BEM 语法的例子，甚至是在教程中

阅读[BEM 101](https://css-tricks.com/bem-101/) 中关于 CSS Tricks 的段落以了解更多和这个系统相关的信息。

#### 其他常见体系

应用中，有很多这样的体系。其他流行的方式包括 Jonathan Snook 创造的[Scalable and Modular Architecture for CSS (SMACSS)](http://smacss.com/)、Harry Roberts 的[ITCSS](https://itcss.io/)以及原本由 Yahoo! 创造的[Atomic CSS (ACSS)](https://acss.io/)。如果你遇到了使用这几种方式之一的项目，那么好处就是你可以搜索到许多文章和指导，帮你理解如何以同种方式写代码。

使用这样的体系的缺点是，它们会看起来过于复杂，尤其是对于小项目。

### CSS 的构建体系

另一种组织 CSS 的方法是利用一些对于前端开发者可用的工具，它们让你可以稍微更程式化地编写 CSS。有很多工具，我们将它们分成**预处理工具**和**后处理工具**。预处理工具以你的原文件为基础运行，将它们转化为样式表；后处理工具使用你已完成的样式表，然后对它做点手脚——也许是优化它以使它加载得更快。

使用这些工具的任何一部分都需要你的开发环境能运行进行处理工作的脚本。许多代码编辑器能为你做这项工作，或者你也可以安装一个命令行工具来辅助工作。

最为流行的预处理工具是[Sass](https://sass-lang.com/)，这里不是 Sass 的教程，所以我只会简要地解释一些 Sass 能做的事情，在组织的时候真的会帮到你，即使你没有用到 Sass 的任何其他的独特功能。

#### 定义变量

CSS 现在有原生的[自定义属性](/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，所以这个功能越来越没那么重要了，但是你使用 Sass 的可能原因之一为，能够作为设置定义用于一个项目的所有颜色和字体，之后这些变量在项目中可用。这意味着如果你意识到你用了错误的蓝色阴影，你只需要在一个地方修改。

如果我们创建了在下面的第一行里面叫做`$base-color`的变量，我们之后可以在样式表的任何需要这一颜色的地方使用它。

```css
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

编译完 CSS 后，你会在最终的样式表里面得到下面的 CSS：

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### 编译组件样式表

我在上面提到了，一种组织 CSS 的方式是将样式表分成小的样式表。在使用 Sass 时，你可以在另一个层次上理解，然后得到许多小样式表——甚至到了每个组件都有一个独立样式表的地步。使用 Sass 中的 include 功能，这些都可以被编译为一个、或者少数几个真正链接到你的网站的样式表。

在[这篇博文](https://www.lauraleeflores.com/blog/how-to-organize-your-css-files)里面，你可以看下一个开发者是如何处理这个问题的。

> **备注：** 一个简单的尝试 Sass 的方式是使用 [CodePen](https://codepen.io)，你可以为一个 Pen 在设置中启用用于你的 CSS 的 Sass，CodePen 将会为你运行 Sass 语法分析功能，这样你就能看到应用了普通 CSS 的生成网页。有时你会发现 CSS 教程在它们的 CodePen 演示里面使用了 Sass 而不是普通 CSS，所以了解一点点关于 Sass 的事情是有用的。

#### 后处理以进行优化

如果你对加入例如许多额外的注释和空格，增大你的样式表大小有所关心的话，那么后处理会通过在生产版本中略去任何不必要的东西的方式，优化 CSS。后处理解决方案中，通过这种方式实现的一个例子是[cssnano](https://cssnano.co/)。

## 结语

这是我们学习 CSS 的指导的最后一部分，正如你所见，你可以通过许多方式从这里继续对 CSS 的探索。

欲了解更多关于 CSS 布局的事情，查看[学习 CSS 布局](/zh-CN/docs/Learn/CSS/CSS_layout)这节课。

你应该也有了探索[MDN CSS](/zh-CN/docs/Web/CSS)学习材料的剩余部分的技能。你可以查阅属性和值，探索我们的[CSS Cookbook](/zh-CN/docs/Web/CSS/Layout_cookbook)来了解可用的排布，在诸如[Guide to CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout)的一些更加专门的指导里阅读更多。.

{{PreviousMenu("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
