---
title: 作业：排版社区大学首页
slug: Learn/CSS/Styling_text/Typesetting_a_homepage
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

在本测评中，通过对社区学校主页的文本样式化，我们会测试你对所有本模块涉及到的文本样式化技术的理解。你或许也会从中获得乐趣。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>在本次测评前，你应该完成了本模块所有章节。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>测试对 CSS 文本样式化技术的理解。</td>
    </tr>
  </tbody>
</table>

## 开始

在本测评开始前，你应该：

- 获取本次练习的 [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) 和 [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) 文件以及提供的 [external link icon](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png)。
- 在本地计算机中拷贝一份上述文件。

> **备注：** 或者，你可以使用像 [JSBin](http://jsbin.com/) 或 [Glitch](https://glitch.com/) 的网站完成你的测评。你可以把 HTML 和 CSS 粘贴到在线编辑器中，并使用[this URL](http://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png)指定背景图像。如果你使用的在线编辑器没有单独的 CSS 面板，你可以将其放在 HTML 文件的\<style>元素中。

## 项目简介

你有一个虚构的社区大学主页的未处理 HTML 文件和一些 CSS 文件。这些 CSS 文件把网页分成两栏布局，提供了一些简单的样式化。你将在 CSS 文件底部的 comment 下写你的 CSS，这样可以方便地标出你的工作。不要担心选择器一直重复；我们会帮你跳过这个问题。

字体：

- 首先，下载一些免费的字体。因为这是一所大学，字体应该严肃，正式，给人信任的感觉 —— 主体使用 serif 字体，对标题结合使用 sans-serif 或者 slab serif 会是不错的选择。
- 使用合适的服务对着两种字体生成无死角的`@font-face`代码。
- 将你的 body 字体应用到 body，heading 字体应用到 heading。

文本样式化基础：

- 设置全站网页 `font-size` 为 `10px`。
- 使用相对单位（relative unit）为标题和其他元素的 font-sizes 设置合适的值。
- 为 body 文本设置合适的`line-height`。
- 居中页面顶级标题。
- 为标题设置 `letter-spacing` 避免字间太过拥挤。
- 为 body 文本设置合适的 `letter-spacing` 和 `word-spacing`。
- 在`<section>`元素中，每个标题后的第一段文字设置 20px 的文本缩进。

链接：

- 设置 link, visited, focus, 和 hover 状态设置颜色，与页面顶部和底部的水平线颜色相匹配。
- 设置链接默认带下划线，但 hover 和 focus 时下划线消失。
- 取消页面中所有链接 focus 时默认的外边线。
- 设置 active 时有显著不同的样式，使其又突出又与整体页面设计和谐。
- 在外部链接右侧插入外部链接图标。

列表：

- 确保列表和列表项与页面整体样式和谐。每个列表项应该有同样的与段落行相同的`line-height` 。每个列表上下间距应该与段落间距相同。
- 使用与页面设计匹配的 bullet 列表项符号。你可以选择自定义的 bullet 图像或者其他的喜欢的 bullet 符号。

导航栏菜单：

- 样式化你的导航栏菜单，使它拥有与页面整体相匹配的外观。

## 提示与技巧

- 本练习中你不需要编辑 HTML 文件。
- 你不需要使导航栏菜单看起来像按钮，但它需要有一定的高度才不至于在页面侧边看起来很别扭；同时记得，你需要的是一个垂直导航栏菜单。

## 实例

下图展示了其中一种设计完成后的例子。

![](example2.png)

## 测评

如果你将本测评作为课程的一部分，你应该能够将你的作品交给你的老师/指导员打分。如果你是自学的，你可以很轻松地在[discussion thread for this exercise](https://discourse.mozilla.org/t/typesetting-a-community-school-home-page-assessment/24683)，或者[Mozilla IRC](https://wiki.mozilla.org/IRC)的[#mdn](irc://irc.mozilla.org/mdn) IRC 频道上获得打分。先尝试完成本次练习——作弊是学不到任何东西的！

{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
