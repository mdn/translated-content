---
title: 测试你的技能：网格布局
slug: Learn/CSS/CSS_layout/Grid_skills
---

{{LearnSidebar}}

此任务的目的是让你使用 CSS 网格布局，并测试你是否了解网格和网格项的行为方式。你将会完成三个包括不同的元素小任务。

> **备注：** 您可以在下面的交互式编辑器中试用解决方案，不过，下载代码并使用在线工具 (如 CodePen、jsFiddle 或 Glitch) 处理这些任务可能会更有帮助。
>
> 如果您遇到困难，请向我们寻求帮助 — 参阅本页底部的 [评估或进一步帮助](#assessment_or_further_help) 部分。

## 网格布局 一

在此任务中，你需要创建一个网格，要求其中的四个子元素能自动排布。网格内要有三列并且将可用空间等分，列和行的间距均为 20px。

在三列网格布局中有四个物体放入其中。

尝试更新下面的实时代码以复现上面的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}

> **备注：** 评估或进一步的工作目的，可以[下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid1-download.html)在你自己的编辑器或使用线编辑器。

## 网格布局 二

在此例中，我们已经定义好了一个 grid, 请通过修改下面两个子元素的 CSS 规则，导致它们跨过彼此的网格轨道; 第二个 item 应该在第一个 item 之上 (如下图所示).

![盒子中的两个元素，其中一个元素覆盖在另一个元素上。](grid-task2.png)

尝试更新下面的实时代码以复现上面的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid2.html", '100%', 800)}}

附加问题：

- 你可以把第一个元素覆盖到第二个元素，而不通过改变 html 元素的顺序吗？

> **备注：** 评估或进一步的工作目的，可以 [下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid2-download.html) 在你自己的编辑器或使用线编辑器。

## 网格布局 三

此 grid 中 4 个子元素，初始状态是显示的是 auto-placement. 请通过使用 grid-area 和 grid-template-areas 属性对照下图放置元素的布局。

![网格中显示的四个项目。](grid-task3.png)

尝试更新下面的实时代码以复现上面的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid3.html", '100%', 800)}}

> **备注：** 评估或进一步的工作目的，可以 [下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid3-download.html) 在你自己的编辑器或使用线编辑器。

## 网格布局 四

此例中，你需要同时使用 Grid Layout 和 Flexbox 来完成下图所示的任务。这个过程中你不需要通过改变 HTML 来完成。

![两行卡片，每个卡片有一个图像和一组标签。](grid-task4.png)

尝试更新下面的实时代码以复现上面的示例：

{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid4.html", '100%', 1200)}}

> **备注：** 评估或进一步的工作目的，可以 [下载此任务的源文件](https://github.com/mdn/css-examples/blob/master/learn/tasks/grid/grid4-download.html) 在你自己的编辑器或使用线编辑器。

## 评估 或者 帮助

你可以在上述的交互编辑器上练习。

如果你的作业需要评估，或者有困难想要帮助：

1. 把你的作业放在一个在线可分享的编辑器上，比如 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 或者 [Glitch](https://glitch.com/). 你可以自己重头开始写，或者使用上面章节提供的源文件。
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:
   发布一个评估的帖子 或者 帮助在[MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn)你的发布应该涵盖以下几点：

   - A descriptive title such as "Assessment wanted for Grid layout 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
