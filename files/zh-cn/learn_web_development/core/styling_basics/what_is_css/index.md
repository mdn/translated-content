---
title: 什么是 CSS？
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 25d1da7132494104d33f02bc3e99c98f9175d195
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS")}}**（层叠样式表）可以让你创建外观精美的网页，但它在底层是如何工作的呢？本文将解释 CSS 是什么、基本语法是什么样的，以及浏览器如何将 CSS 应用于 HTML 来实现样式。

<table>
  <tbody>
    <tr>
      <th scope="row">前置条件：</th>
      <td>
        <a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">安装基础软件</a>、<a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">文件操作基础</a>，以及 HTML 基础知识（建议学习
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML 内容结构模块</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>了解 CSS 的用途。</li>
          <li>理解 HTML 与样式无关。</li>
          <li>认识浏览器默认样式的概念。</li>
          <li>了解 CSS 代码的基本结构。</li>
          <li>掌握 CSS 如何应用到 HTML 上。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 浏览器默认样式

在 [HTML 内容结构模块](/zh-CN/docs/Learn_web_development/Core/Structuring_content)中，我们介绍了 HTML 是什么以及它是如何用于标记文档的。这些文档在浏览器中是可读的：标题比普通文本大，段落会换行并有间距，链接有颜色并带下划线以便区分。

你看到的这些样式就是浏览器的默认样式——非常基础的样式，用于确保即使页面作者没有指定样式，网页也能保持可读性。这些样式由浏览器内置的默认 CSS 样式表定义，与 HTML 本身无关。

![浏览器使用的默认样式](html-example.png)

如果所有网站都长得一样，web 将变得非常无趣。这就是你需要学习 CSS 的原因。

## CSS 的作用是什么？

通过 CSS，你可以精确控制 HTML 元素在浏览器中的外观，以你喜欢的设计和布局呈现文档。

- **文档**通常是使用标记语言编写的文本文件，最常见的是 {{Glossary("HTML")}}（称为 HTML 文档）。你也可能遇到其他标记语言编写的文档，如 {{Glossary("SVG")}} 或 {{Glossary("XML")}}。HTML 文档包含网页的内容，并定义其结构。
- **呈现**文档给你的用户是指将其转换为对你的受众易于阅读的形式。像是 {{Glossary("Mozilla Firefox","Firefox")}}、{{Glossary("Google Chrome","Chrome")}}、{{Glossary("Apple_Safari","Safari")}} 和 {{Glossary("Microsoft Edge","Edge")}} 这样的{{Glossary("browser","浏览器")}}旨在以视觉方式（例如在电脑屏幕、投影仪、移动设备或打印机上）呈现文档，在 Web 中我们通常称这个过程为“渲染”；我们在[浏览器如何加载网站](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)一文中给出了简化的渲染过程描述。

> [!NOTE]
> 浏览器有时也被称为{{Glossary("User agent","用户代理")}}，意思是代表用户在计算机系统中运行的程序。

CSS 可用于网页外观相关的多种用途，例如：

- 文本样式，包括更改标题和链接的[颜色](/zh-CN/docs/Web/CSS/Reference/Values/color_value)和[大小](/zh-CN/docs/Web/CSS/Reference/Properties/font-size)
- 创建布局，如[网格布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Grids)或[多列布局](/zh-CN/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts)
- 特效，如[动画](/zh-CN/docs/Web/CSS/Guides/Animations)

CSS 语言按*模块*组织，每个模块包含相关功能。例如，你可以查阅[背景与边框模块](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders)的 MDN 参考页面，了解其用途及包含的属性和功能。在我们的模块页面中，你还可以找到定义这些技术的*规范*链接。

## CSS 语法基础

CSS 是一种基于规则的语言——通过定义一组样式规则来指定网页上哪些元素应该应用哪些样式。

例如，你可能希望将页面主标题设置为红色的大号文字。以下代码展示了一个非常简单的 CSS 规则：

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- 在上面的示例中，CSS 规则以一个{{Glossary("CSS Selector", "选择器")}}开头，用于*选择*我们要设置样式的 HTML 元素。在这个例子中，我们为一级标题（`{{htmlelement("Heading_Elements", "&lt;h1>")}}`）添加样式。
- 接着我们使用一对大括号 `{ }`。
- 大括号中包含一个或多个**声明**，每个声明由**属性**和**值**组成。我们在冒号前指定属性（例如上述示例中的 `color`），并在冒号后指定该属性的值（我们为 `color` 属性设置取值 `red`）。
- 此示例包含两个声明，一个是 `color`，另一个是 `font-size`。

不同的 CSS {{Glossary("property/CSS","属性")}}允许不同的取值。在我们的示例中，`color` 属性可以接受多种[颜色值](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color)，而 `font-size` 属性则可以接受多种[尺寸单位](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units#数值、长度和百分比)作为值。

一个 CSS 样式表通常包含许多这样的规则，依次书写。

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

你会发现有些属性值很快就能掌握，而其他的则需要查阅。MDN 上的各个属性页面可以快速帮助你查找属性及其可用值。

> [!NOTE]
> 所有 CSS 属性页面（以及其他 CSS 特性）都可以在 MDN 的 [CSS 参考](/zh-CN/docs/Web/CSS/Reference)中找到。你也可以习惯使用搜索引擎查找“mdn css-特性名”，例如搜索“mdn color”或“mdn font-size”，以获取某个 CSS 特性的更多信息。

## CSS 如何应用到 HTML？

如[浏览器如何加载网站](/zh-CN/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)所述，当你访问一个网页时，浏览器首先接收包含网页内容的 HTML 文档，并将其转换为一个 **DOM 树**。

随后，网页中找到的 CSS 规则（无论是直接写在 HTML 中，还是引用的外部 `.css` 文件）会根据选择器指定的元素分类到不同的“桶”中。这些规则随后应用到 DOM 树上，生成一个**渲染树**，最终绘制到浏览器窗口中。

我们来看一个例子。首先定义一个 HTML 片段，CSS 将应用于其中的元素：

```html
<h1>CSS 很棒</h1>

<p>你可以为文本添加样式。</p>

<p>你还可以创建布局和特效。</p>
```

现在，我们重复上一节中的 CSS 代码：

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

这段 CSS：

- 选择页面上的所有 `<h1>` 元素，将其文字设为红色并放大。由于示例 HTML 中只有一个 `<h1>`，只有它会被应用样式。
- 选择页面上的所有 `<p>` 元素，设置文字颜色、背景颜色和内边距。示例中有两个 `<p>` 元素，它们都会应用这些样式。

当 CSS 应用于 HTML 后，页面的渲染效果如下：

{{EmbedLiveSample('CSS 如何应用到 HTML？', '100%', 200)}}

## 玩转 CSS

试着操作上面的示例。点击右上角的“Play”按钮，即可在 MDN Playground 编辑器中加载它。

请尝试以下操作：

1. 在已有的两个段落下方添加另一个段落，观察第二条 CSS 规则如何自动应用到新段落上。
2. 在 `<h1>` 下方某处添加一个 `<h2>` 子标题，比如放在其中一个段落之后。
3. 尝试为 `<h2>` 元素设置不同的颜色：复制 `h1` 的 CSS 规则，将选择器改为 `h2`，并将 `color` 的值从 `red` 改为 `purple`（紫色）等。
4. 如果你想挑战一下自己，可以在 MDN 的 [CSS 参考](/zh-CN/docs/Web/CSS/Reference)中查找一些新的 CSS 属性和值，添加到你的样式规则中！

如果你还想进一步练习 CSS 基础，可以参考 Scrimba 提供的课程[写下你的第一行 CSS！](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) <sup>[_MDN 学习合作伙伴_](/zh-CN/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>。这个课程简要介绍了 CSS 的基本语法，并提供了一个交互式挑战，让你练习编写 CSS 声明。

## 总结

现在你已经初步了解了 CSS 是什么以及它的工作原理，接下来我们将继续练习如何编写 CSS，并更详细地解释语法结构。

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
