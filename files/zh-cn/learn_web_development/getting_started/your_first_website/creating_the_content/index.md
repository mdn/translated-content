---
title: HTML 基础
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
original_slug: Learn/Getting_started_with_the_web/HTML_basics
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

超文本标记语言（英语：**H**yper**T**ext **M**arkup **L**anguage，简称：HTML）是一种用来结构化 Web 网页及其内容的标记语言。网页内容可以是：一组段落、一个重点信息列表、也可以含有图片和数据表格。正如标题所示，本文将对 HTML 及其功能做一个基本介绍。

## HTML 到底是什么？

HTML 是一种用于定义内容结构的*标记语言*。HTML 由一系列的[**元素**](/zh-CN/docs/Glossary/Element)组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对{{Glossary("tag", "标签")}}可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。例如，键入下面一行内容：

```plain
My cat is very grumpy
```

可以将这行文字封装成一个段落元素来使其独立成行：

```html
<p>My cat is very grumpy</p>
```

### HTML 元素详解

让我们深入探索一下这个段落元素。

![段落元素，包含：开始标签，‘my cat is very grumpy’的内容，结束标签](grumpy-cat-small.png)

这个元素的主要部分有：

1. **开始标签**（Opening tag）：包含元素的名称（本例为 p），及一对包围名称的**尖括号**。这表示元素从这里开始或者开始起作用——在本例中即段落由此开始。
2. **结束标签**（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个*正斜杠*。这表示元素到这里结束——在本例中即段落在此结束。初学者常常会犯忘记添加结束标签的错误，这可能会产生一些奇怪的结果。
3. **内容**（Content）：元素的内容，本例中就是所输入的文本本身。
4. **元素**（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

元素也可以有下图中那样的属性（Attribute）：

![段落开始标签，以及高亮的 class 属性：class=editor-note](grumpy-cat-attribute-small.png)

属性包含的是不想在真正的内容中出现的和元素有关的额外信息。本例中，`class` 是属性*名*，`editor-note` 是属性*值*。`class` 属性是可以用于定位元素（以及任何其他有相同 `class` 值的元素）的标识名称，以便进一步为元素指定样式或进行其他操作时使用。一些属性没有值，如 [`required`](/zh-CN/docs/Web/HTML/Attributes/required)。

有值的属性应该包含：

1. 属性与元素名称（或上一个属性，如果元素有超过一个属性的话）之间的一个空格。
2. 属性名，后接一个等号。
3. 一对引号包围的属性值。

> [!NOTE]
> 不包含 {{Glossary("ASCII")}} 空格（以及 `"` `'` `` ` `` `=` `<` `>`）的简单属性值可以不使用引号，但是建议将所有属性值用引号括起来，这样的代码一致性更佳，更易于阅读。

### 嵌套元素

也可以将一个元素置于其他元素之中——称作**嵌套**。要表明猫咪**非常**暴躁，可以将“very”用 {{htmlelement("strong")}} 元素包围，“very”将突出显示：

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

必须保证元素的嵌套次序正确：在上面的例子中，首先使用 {{htmlelement("p")}} 标签，然后是 {{htmlelement("strong")}} 标签，因此要先结束 {{htmlelement("strong")}} 标签，最后再结束 {{htmlelement("p")}} 标签。这样是不对的：

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

元素必须正确地开始和结束，才能清楚地显示出正确的嵌套层次。要是像上面那样交叠使用，浏览器就得自己猜测，虽然它会竭尽全力，但很大程度不会给你期望的结果。所以一定要避免！

### 空元素

不包含任何内容的元素称为[**空元素**](/zh-CN/docs/Glossary/Void_element)。我们以 HTML 页面中已有的 {{htmlelement("img")}} 元素为例：

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

本元素包含两个属性，但是并没有 `</img>` 结束标签，元素里也没有内容。这是因为图像元素不需要通过内容来产生效果，它的作用是向其所在的位置嵌入一张图片。

### HTML 文档详解

以上把 HTML 元素作为个体进行介绍，但孤木不成林。现在来看看单个元素如何彼此协同构成一个完整的 HTML 页面。回顾[处理文件](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)文章中创建的 `index.html` 示例：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```

这里有：

- `<!doctype html>`——[文档类型](/zh-CN/docs/Glossary/Doctype)。这是必不可少的开头。混沌初分，HTML 尚在襁褓（大约是 1991/92 年）之时，这个元素用来关联 HTML 编写规范，以供自动查错等功能所用。而在当今，它作用有限，可以说仅用于保证文档正常读取。现在知道这些就足够了。
- `<html></html>`——{{htmlelement("html")}} 元素。该元素包含整个页面的所有内容，有时候也称作根元素。它还包含 `lang` 属性，设置页面的主要语种。
- `<head></head>`——{{htmlelement("head")}} 元素。该元素作为想在 HTML 页面中包含但不想向用户显示的内容的容器。包括想在搜索结果中显示的{{Glossary("keyword", "关键字")}}和页面描述、用于设置页面样式的 CSS、字符集声明等等。
- `<meta charset="utf-8">`——该元素指明你的文档使用 UTF-8 字符编码，UTF-8 包括世界绝大多数书写语言的字符。它基本上可以处理任何文本内容。以它为编码还可以避免以后出现某些问题，没有理由再选用其他编码。
- `<meta name="viewport" content="width=device-width">`——[视口元素](/zh-CN/docs/Web/CSS/Viewport_concepts#移动设备的视口)可以确保页面以视口宽度进行渲染，避免移动端浏览器以比视口更宽的宽度渲染内容，导致内容缩小。
- `<title></title>`——{{htmlelement("title")}} 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
- `<body></body>`——{{htmlelement("body")}} 元素。该元素包含期望让用户在访问页面时看到的*全部*内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。

## 图像

重温一下 {{htmlelement("img")}} 元素：

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

正如之前讲的那样，该元素通过在属性 `src` 中包含图像文件路径的地址，可在所在位置嵌入图像。

该元素还包括一个替换文字属性 `alt`。在 [`alt` 属性](/zh-CN/docs/Web/HTML/Element/img#使用有实际意义的备用描述)中，是图像的描述内容，用于当图像不能被用户看见时显示，不可见的原因可能是：

1. 用户有视觉障碍。有严重视觉障碍的用户可以使用屏幕阅读器来朗读 alt 属性的内容。
2. 有些错误使图像无法显示。可以试着故意将 `src` 属性里的路径改错。保存并刷新页面就可以在图像位置看到：

![图片内容为文字“测试图片”](alt-text-example.png)

alt 文本的关键字即“描述文本”。alt 文本应向用户完整地传递图像要表达的意思。用“测试图片”来描述 Firefox 标志并不合适，修改成“Firefox 标志：一只盘旋在地球上的火狐”就好多了。

可以试着为图像编写一些更好的 alt 文本。

> [!NOTE]
> 更多信息请参阅[无障碍学习模块](/zh-CN/docs/Learn_web_development/Core/Accessibility)。

## 标记文本

本小节包含了一些最常用的文本标记 HTML 元素。

### 标题（Heading）

标题元素可用于指定内容的标题和子标题。就像一本书的书名、每章的大标题、小标题，等。HTML 文档也是一样。HTML 包括六个级别的标题，{{htmlelement("Heading_Elements", "&lt;h1&gt; - &lt;h6&gt;")}}，一般最多用到 3-4 级标题。

```html
<!-- 4 个级别的标题 -->
<h1>主标题</h1>
<h2>顶层标题</h2>
<h3>子标题</h3>
<h4>次子标题</h4>
```

> [!NOTE]
> 在 HTML 中，`<!--` 和 `-->` 之间的任何内容都是 **HTML 注释**。浏览器在渲染代码时，会忽略掉注释。换句话说，注释在页面上不可见——仅停留在代码中。HTML 注释是一种让你写下关于你的代码或逻辑的有用注解的方式。

可以尝试在 {{htmlelement("img")}} 元素上面添加一个合适的标题。

> [!NOTE]
> 你可以看到第一级标题是有隐式的主题样式。不要使用标题元素来加大、加粗文本，因为标题对于[无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#文本内容)和[搜索引擎优化](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#为什么我们需要结构化？)非常有意义。要保持页面结构清晰，标题整洁，不要发生标题级别跳跃。

### 段落（Paragraph）

如上文所讲，{{htmlelement("p")}} 元素是用来指定段落的。通常用于指定常规的文本内容：

```html
<p>这是一个段落</p>
```

试着向一个或几个段落中添加一些文本（[_你的网站会是什么样子？_](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)文章中有这些文本），并把它们放在你的 {{htmlelement("img")}} 元素下方。

### 列表（List）

Web 上的许多内容都是列表，HTML 有一些特别的列表元素。标记列表通常包括至少两个元素。最常用的列表类型为：

1. **无序列表**（Unordered List）中项目的顺序并不重要，就像购物列表。用一个 {{htmlelement("ul")}} 元素包围。
2. **有序列表**（Ordered List）中项目的顺序很重要，就像烹调指南。用一个 {{htmlelement("ol")}} 元素包围。

列表的每个项目用一个列表项目（List Item）元素 {{htmlelement("li")}} 包围。

比如，要将下面的段落片段改成一个列表：

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

可以这样更改标记：

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

试着在示例页面中添加一个有序列表和无序列表。

## 链接

链接非常重要 — 它们赋予 Web 网络属性。要植入一个链接，我们需要使用一个简单的元素 — {{htmlelement("a")}} — “a”是“anchor”（锚）的缩写。要将一些文本添加到链接中，只需如下几步：

1. 选择一些文本。比如“Mozilla Manifesto”。
2. 将文本包含在 {{htmlelement("a")}} 元素内，就像这样：

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. 为此 {{htmlelement("a")}} 元素添加一个 `href` 属性，就像这样：

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. 把属性的值设置为所需网址：

   ```html
   <a href="https://www.mozilla.org/zh-CN/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

如果网址开始部分省略了 `https://` 或者 `http://`（称作*协议*），可能会得到错误的结果。在完成一个链接后，可以试着点击它来确保指向正确。

> **备注：** `href` 这个名字可能一开始看起来有点令人费解。如果它很难记忆的话，记住它代表的是超文本引用（_**h**ypertext **ref**erence_）。

现在就为页面添加一个链接吧。

## 总结

如果你一直跟着这篇文章里的指导做的话，你应该完成了一个像下面这样的页面（也可以[查看这里](https://mdn.github.io/beginner-html-site/)）：

![一张网页截图，包含：Firefox 标志，写着 Mozilla 很酷的标题以及两个文本段落](finished-test-page-small.png)

如果你遇到困难，你可以将 Github 上的[完整示例代码](https://github.com/mdn/beginner-html-site/blob/main/index.html)与你的文件进行比较。

在这里，我们只是介绍了一点点 HTML。想学习更多，访问我们的[学习 HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content) 主题。

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
