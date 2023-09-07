---
title: 运用你的新知识
slug: Learn/CSS/First_steps/Styling_a_biography_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

通过在前几节课程中学到的知识，你应该学会了用 CSS 组织一个简单的文本文件，并且在其中添加自己的 CSS 样式。本节中你将实现这一功能。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        <p>
          基本熟悉使用计算机，<a
            href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
            >基本工作环境的设置</a
          >，基本的<a
            href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
            >文件处理知识</a
          >，基本的 HTML 知识（在<a
            href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
            > HTML 概述</a
          >中学习）和 CSS 基础（查看本模块其他内容）
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td><p>尝试使用一些 CSS 的新玩法并检验新的知识</p></td>
    </tr>
  </tbody>
</table>

## 先决条件

你可以使用下面的实时编辑器，或者下载这个[download the starting point](https://github.com/mdn/css-examples/blob/master/learn/getting-started/biog-download.html/)在自己的编辑器中进行编辑。这是一个独立的 HTML 文件，在 head 中包含了初始 CSS 样式。你可以将这些 CSS 样式从 HTML 文件中移出，保存为另一个独立文件。你可以选择 CodePen、jsFiddle 或 Glitch 中的任意一个完成这些工作。

> **备注：** 如果遇到困难，你可以向我求助——参见本页下面的[测评或请求帮助](#测评或请求帮助)部分。

**让我们来学一些 CSS 样式**

接下来的实例是一个个人主页，我们用 CSS 设定它的样式。以下是我用到的一些 CSS 属性，通过这些链接，你可以打开相应的 MDN 页面了解更多。

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

我使用了许多不同的选择器（样式元素），如 h1 和 h2，也为工作职务建立了一个类别。

尝试使用 CSS 更改这一页面的显示，试着修改已有属性的取值，删除一些规则，或添加新的样式。然后通过[CSS 参考](/zh-CN/docs/Web/CSS/Reference)找到本文未提及的一些属性，尽管大胆尝试！

举例来说，你可以：

- 使用 CSS 的颜色关键词 hotpink，将一级标题设定为粉红色。
- 使用 CSS 颜色关键词 purple，为标题添加 10 像素宽的点线边距。
- 将二级标题设为斜体。
- 用#eeeeee 为联系人列表中的超链接添加背景颜色和一个 5 像素宽的紫色加粗边框。使用一些内边距属性，拉开正文与外边距的距离。
- 当鼠标在某些 HTML 元素上悬停时增加动画 (推荐改变颜色和字体)。
- 设置链接在鼠标悬停时变为绿色。

最终，你得到的页面将如下图所示：

![Screenshot of how the example should look after completing the assessment.](learn-css-basics-assessment.png)

记住这里没有错误的答案——在这个阶段你可以在学习中娱乐一下。

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

## 测评或请求帮助

如果你希望测试你的页面，或者你遇到困难想要求助，你可以：

1. 将你的文件提交到可网络共享的编辑器，如 CodePen、jsFiddle 或 Glitch。
2. 在 MDN 论坛（[MDN Discourse forum](https://discourse.mozilla.org/c/mdn)）发帖请求测评或帮助。发帖时添加“学习”的标签，这样我们能够更容易找到它。你的帖子应包括以下内容：

- 一个描述性标题，例如“CSS 的初步尝试需要测试”。
- 详细描述你希望我们做些什么——比如，你已经尝试过了，但是卡住了，需要帮助。
- 你希望测试的例子的在网络编辑器上的链接。这是很好的做法，因为如果不让帮助你的看到你的程序，他们就很难帮助你解决程序的问题。
- 你的网页的测评页面链接，这样我们就可以找到你所求助的问题。

**接下来是什么？**

恭喜你完成了第一个模块的学习。现在你应该对 CSS 有了一个大致的了解 并且能够了解在样式表中发生的大多数事情。在下一个模块[CSS 构建](/zh-CN/docs/Learn/CSS/Building_blocks)中，我们将对一些关键区域进行深入的学习。

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
