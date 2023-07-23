---
title: 测试你的技能：选择器
slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
---

{{LearnSidebar}}

这个任务的目的是帮助你理解 CSS 里的选择器。

> **备注：** 你可以在下面的交互式编辑器中尝试解决问题，然而把代码下载然后使用一个在线工具比如 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/) 去解决这些问题可能对你更有作用。
>
> 如果你卡住了，可以向我们寻求帮助——请参阅本页底部的[打分评估或进一步帮助](#打分评估或进一步帮助)部分。

## 选择器一

在没有改变 HTML 的情况下，使用 CSS 去完成下面的要求：:

- 使一级标题的字体颜色为蓝色
- 使二级标题有一个蓝色背景且白色文本。
- 使跨距中换行的文本的字体大小为 200%。

![Text with the CSS applied for the solution to task 1.](selectors1.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/type.html", '100%', 700)}}

> **标注：**
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/type-download.html)，然后在本地或在线编辑器中练习。

## 选择器二

在没有改变 HTML 的情况下，对本例中内容的外观进行以下更改：

- 让 id 为 `special` 的元素有一个黄色背景。
- 让使用类 `alert` 的元素有一个 1px 的灰色边框。
- 如果一个元素使用了 `alert` 类还有 `stop`类，让它的背景变为红色。
- 如果一个元素使用 `alert` 类还有 `go`类，让它的背景变为绿色。

![Text with the CSS applied for the solution to task 2.](selectors2.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/class-id.html", '100%', 800)}}

> **标注：**
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/class-id-download.html)，然后在本地或在线编辑器中练习。

## 选择器三

在本例中，尝试在不添加 HTML 的情况下进行以下更改。

- 链接文本的样式：使链接为橘色，被访问后变为绿色，当被 hover 时，移除链接文本的下划线。
- 让容器里的第一个元素的字体大小为:150%，并且让这个元素的第一行是红色的。
- 让表格中每隔一行条带化，分别给它们一个颜色为#333 的背景和一个白色前景。

![Text with the CSS applied for the solution to task 3.](selectors3.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/pseudo.html", '100%', 800)}}

> **标注：**
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/pseudo-download.html)，然后在本地或在线编辑器中练习。

## 选择器四

在这个任务中尝试下面这个任务：

- 让任何直接跟随二级标题的段落颜色为红色。
- 移除使用了 list 类的无序列表的子元素前面的圆点，并给他们添加一个 1px 的灰色下边框。

![Text with the CSS applied for the solution to task 4.](selectors4.jpg)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/combinators.html", '100%', 800)}}

> **标注：**
>
> 如需提交测评或进一步练习，[下载本任务的初始文件](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/combinators-download.html)，然后在本地或在线编辑器中练习。

## 选择器五

在最后一个任务中，使用属性选择器添加 CSS 以执行以下操作：

- 选择带有 `title` 属性的 `<a>` 元素，将其边框颜色设置为粉色（`border-color: pink`）。
- 选择带有 `href` 属性且属性值中包含 `contact` 的 `<a>` 元素，将其边框颜色设置为橙色（`border-color: orange`）。
- 选择 `href` 属性值以 `https` 开头的 `<a>` 元素，将其边框颜色设置为绿色（`border-color: green`）。

![Four links with different color borders.](selectors-attribute.png)

尝试更新下面的实时代码，以重现完整的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/attribute-links.html", '100%', 800)}}

> **标注：**
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
