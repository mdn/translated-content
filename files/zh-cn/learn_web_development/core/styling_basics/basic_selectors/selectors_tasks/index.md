---
title: 技能测试：选择器
slug: Learn_web_development/Core/Styling_basics/Basic_selectors/Selectors_Tasks
original_slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
---

{{LearnSidebar}}

这个任务的目的是帮助你理解 CSS 里的选择器。

> [!NOTE]
> 你可以在下面的交互式编辑器中尝试解决问题，然而把代码下载然后使用一个在线工具比如 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/) 去解决这些问题可能对你更有作用。
>
> 如果你卡住了，可以向我们寻求帮助——请参阅本页底部的[打分评估或进一步帮助](#打分评估或进一步帮助)部分。

## 任务一

在此任务中，请在不改变 HTML 的情况下，使用 CSS 去完成下面的要求：:

- 使 `<h1>` 的字体颜色变为蓝色
- 使 `<h2>` 为蓝色背景且白色文本。
- 使 `<span>` 中的文本的字体大小为 200%。

你的最终结果应该看起来像这样：

![Text with the CSS applied for the solution to task 1.](selectors1.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/type.html", '100%', 700)}}

<details>
<summary>点击显示答案</summary>

你需要对 `h1`、`h2` 和 `span` 用选择器来更改它们的颜色或大小。

```css
h1 {
  color: blue;
}

h2 {
  background-color: blue;
  color: white;
}

span {
  font-size: 200%;
}
```

</details>

> [!CALLOUT]
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/type-download.html)，然后在本地或在线编辑器中练习。

## 任务二

在此任务中，我们希望你在不改变 HTML 的情况下，对本例中内容的外观进行以下更改：

- 为 id 为 `special` 的元素设置黄色背景。  
- 为 class 为 `alert` 的元素添加 2px 灰色边框。  
- 为同时具有 `alert` 类和 `stop` 类的元素设置红色背景。  
- 为同时具有 `alert` 类和 `go` 类的元素设置绿色背景。

你的最终结果应该看起来像这样：

![Text with the CSS applied for the solution to task 2.](selectors2.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/class-id.html", '100%', 800)}}

<details>
<summary>点击查看答案</summary>

这个测试是为了检查你是否理解类选择器和 ID 选择器的区别，以及如何针对一个元素上的多个类进行选择。

```css
#special {
  background-color: yellow;
}

.alert {
  border: 2px solid grey;
}

.alert.stop {
  background-color: red;
}

.alert.go {
  background-color: green;
}
```

</details>

> [!CALLOUT]
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/class-id-download.html)，然后在本地或在线编辑器中练习。

## 任务三

在此任务中，我们希望你在不改变 HTML 的情况下进行以下更改。

- 链接文本的样式：使链接为橘色，被访问后变为绿色，当被 hover 时，移除链接文本的下划线。
- 让容器里的第一个元素的字体大小为:150%，并且让这个元素的第一行是红色的。
- 让表格中每隔一行条带化，分别给它们一个颜色为#333 的背景和一个白色前景。
- 设置链接样式，将链接设为橙色，访问过的链接设为绿色，并在悬停时移除下划线。
- 为容器内的第一个元素设置 `font-size: 150%` ，并将其第一行文字设为红色。
- 为表格每隔一行添加条纹效果，设置背景颜色为 `#333`，前景色为白色。

你的最终结果应该看起来像这样：

![Text with the CSS applied for the solution to task 3.](selectors3.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/pseudo.html", '100%', 800)}}

<details>
<summary>点击查看答案</summary>

对内容应用伪类（`:first-child`）和伪元素（`::first-line`）。  
设置 `a` 元素的 `:link`、`:visited` 和 `:hover` 状态，并使用 `:nth-child` 伪类为表格行创建条纹效果。

```css
.container p:first-child {
  font-size: 150%;
}

.container p:first-child::first-line {
  color: red;
}

a:link {
  color: orange;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

tr:nth-child(even) {
  background-color: #333;
  color: #fff;
}
```

</details>

> [!CALLOUT]
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/pseudo-download.html)，然后在本地或在线编辑器中练习。

## 任务四

在此任务中，我们希望你做到：

- 将 `<h2>` 元素后的首个段落文字设为红色。
- 为 list 类的无序列表移除其子元素的项目符号，并为其添加 1px 的灰色下边框。

你的最终结果应该看起来像这样：

![Text with the CSS applied for the solution to task 4.](selectors4.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/combinators.html", '100%', 800)}}

<details>
<summary>点击查看答案</summary>

这个任务旨在检查你是否理解如何使用不同的组合器。
以下是一个合适的解决方案：

```css
h2 + p {
  color: red;
}

.list > li {
  list-style: none;
  border-bottom: 1px solid #ccc;
}
```

</details>

> [!CALLOUT]
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/combinators-download.html)，然后在本地或在线编辑器中练习。

## 任务五

在此任务中，添加 CSS 并使用属性选择器以执行以下操作：

- 选择带有 `title` 属性的 `<a>` 元素，将其边框颜色设置为粉色（`border-color: pink`）。
- 选择带有 `href` 属性且属性值中包含 `contact` 的 `<a>` 元素，将其边框颜色设置为橙色（`border-color: orange`）。
- 选择 `href` 属性值以 `https` 开头的 `<a>` 元素，将其边框颜色设置为绿色（`border-color: green`）。

你的最终结果应该看起来像这样：

![Four links with different color borders.](selectors-attribute.png)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/attribute-links.html", '100%', 800)}}

<details>
<summary>点击查看答案</summary>

- 要选择带有 title 属性的元素，我们可以在方括号中添加 title（如 a[title]），这样会选中第二个链接，因为它是唯一带有 title 属性的链接。

- 选择 href 属性中包含 "contact" 的 <a> 元素，并将其边框设为橙色（border-color: orange）。
  这里需要匹配两种情况：/contact 和 ../contact。因此，我们可以使用 *= 来匹配 href 值中任意位置包含 "contact" 的链接。这样会选中第三个和第四个链接。

- 选择 href 值以 https 开头的 <a> 元素，并将其边框设为绿色（border-color: green）。
  查找 href 值以 "https" 开头的链接，因此使用 ^= 来仅选中第一个链接。

```css
a[title] {
  border-color: pink;
}
a[href*="contact"] {
  border-color: orange;
}
a[href^="https"] {
  border-color: green;
}
```

</details>

> [!CALLOUT]
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/attribute-links-download.html)，然后在本地或在线编辑器中练习。

## 打分评估或进一步帮助

你可以在上面的交互式编辑器中练习示例这些示例。

如果你想得到任务评价，或者遇到了问题需要帮助，请按如下操作进行：

1. 将你的作业上传到可共享的在线编辑器上，比如 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)。你可以自己编写代码，也可以使用上面给出的初始文件。
2. 在 [MDN 论坛的学习板块](https://discourse.mozilla.org/c/mdn/learn)上发帖以寻求打分或帮助。你的帖子中应包含：

   - 一个简述问题的标题。如“Assessment wanted for Selectors skill test 1”（请使用英文发帖）。
   - 详细描述你的尝试和你预期的网页效果。比如你在哪个位置需要帮助，或者你需要打分评估。
   - 你需要打分或帮助的作业链接（通过上述的在线编辑器上传）。只有让别人看到你的代码，你才能得到更好的帮助。
   - 本题的链接。让别人知道你所问的具体题目。
