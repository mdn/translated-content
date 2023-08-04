---
title: 一个漂亮的盒子
slug: Learn/CSS/Building_blocks/A_cool_looking_box
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}

在这个评估里，通过尝试创造一个引人瞩目的盒子，你将得到更多关于如何创造酷炫盒子的练习。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>在开始这个评估之前你应该已经学习过这个模块里的所有其他文章。</td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>测试对 CSS 盒模型和其他盒相关特性的掌握程度，比如背景和边框。</td>
    </tr>
  </tbody>
</table>

## 起点

在开始评估之前，你需要：

- 复制一份[HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/index.html)和[CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/style.css)代码，并在一个新的目录下把它们保存为`index.html` 和 `style.css`。

> **备注：** 或者你也可以用[JSBin](http://jsbin.com/)或[Glitch](https://glitch.com/)这样的网站来做这个评估，把链接里的 HTML 和 CSS 代码贴到这些在线编辑器里就行。如果你在用的在线编辑器没有独立的 CSS 面板的话，把 CSS 代码放到 HTML 文档头部的`<style>`元素里就好。

## 项目简介

你的任务是创建一个酷炫的盒子，并探索 CSS 的乐趣。

### 一般任务

- 把 CSS 链接到 HTML 里。

### 样式化盒子

给 {{htmlelement("p")}} 添加样式：

- 一个对于大按钮来说合理的宽度，200 像素左右。
- 一个对于大按钮来说合理的高度，并使文本纵向居中。
- 居中文本。
- 用 `rem` 使字体稍大一点，大约 17-18 像素，在注释里说说你的值是怎么算出来的。
- 给你的设计定一个基础颜色，把它作为盒子的背景颜色。
- 把字体颜色设为同一个颜色，使用黑色的文字阴影增加可读性。
- 一个精巧的圆角边框。
- 一个跟基础颜色相近、1 像素宽的实线边框，颜色要稍深一点。
- 一个指向右下角的黑色半透明线性渐变，让它在开始的时候完全透明，在 30% 的处渐变到 0.2 的不透明度，然后保持相同颜色到最后。
- 多个盒阴影：一个标准的盒阴影，使它看起来稍微从页面上浮起来；另外两个是内嵌（inset）的盒阴影，一个是左上角附近的白色半透明阴影和另一个是右下角附近的黑色半透明阴影，让盒子有一个漂亮的 3D 外观。

## 范例

完成之后的盒子可能会像下面的截图这样：

![](fancy-box2.png)

## 评估

如果这个评估是一系列课程的一部分，你应该可以让你的老师或导师为你批改。如果你是自学，可以很容易地在[Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294)或[Mozilla IRC](https://wiki.mozilla.org/IRC)的[#mdn](irc://irc.mozilla.org/mdn) IRC 频道回复得到批改指南。请先自己试着做——作弊学不到任何东西！

{{PreviousMenu("Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}
