---
title: 创建精美的信纸
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes/A_cool_looking_box", "Learn/CSS/Styling_boxes")}}

如果你想给人留下好印象，把信写在一张精美的信纸上会是个不错的开始，在这个评估里我们希望你能创建一个在线模版来达到这样的效果。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>在开始这个评估之前你应该已经学习过这个模块里的所有其他文章。</td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>测试对 CSS 盒模型和其他盒相关特性的掌握程度，比如实现背景等。</td>
    </tr>
  </tbody>
</table>

## 起点

在开始评估之前，你需要：

- 复制一份[HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html)和[CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css)代码，并在一个新的目录下把它们保存为`index.html` 和 `style.css`。
- 在同一个目录下下载这几张图片：[顶部](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png)、[底部](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png)和[标志](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png)。

> **备注：** 或者你也可以用[JSBin](http://jsbin.com/)或[Glitch](https://glitch.com/)这样的网站来做这个评估，把链接里的 HTML 和 CSS 代码贴到这些在线编辑器里就行。如果你在用的在线编辑器没有独立的 CSS 面板的话，把 CSS 代码放到 HTML 文档头部的`<style>`元素里就好。

## 项目简介

你已经有了创建一个信纸模版所需的所有文件，只需把它们放到一起就好。为了达到目标，你需要：

### 信纸主体

- 把 CSS 链接到 HTML 文档里。
- 给信纸添加这样一个背景：

  - 把之前下载的顶部图片固定到信纸顶部。
  - 把之前下载的底部图片固定到信纸底部。
  - 为了给信纸一点纹理，在前面背景的基础上添加一个半透明的渐变，使其在顶部和底部附近稍微变暗，但中间的大部分完全透明。

- 多添加一个`background`声明，仅添加顶部图片到信纸顶部，以此作为不支持之前那种声明方式的浏览器的后备方案。
- 给信纸添加一个白色的背景颜色。
- 给信纸添加一个 1mm 的上下实线边框，选一个符合信纸的颜色主题的边框颜色。

### 标志

- 把之前下载的标志图片添加为{{htmlelement("h1")}}的背景图片。
- 给标志添加一个过滤器，使它有一个隐隐约约的阴影。
- 现在把添加的过滤器注释掉，尝试用其他（更跨浏览器兼容）的方式实现一个相同的阴影，阴影需要同样符合圆形图片的形状。

## 提示和技巧

- 记住，你可以这样为较旧的浏览器创建一个后备方案：先写一个较旧的浏览器支持的后备声明，然后再接着写只有较新的浏览器才支持的声明。这样比较旧的浏览器会应用第一个声明而忽略掉第二个不支持的声明，与此同时比较新的浏览器会先应用第一个声明，然后用第二个声明把它覆盖掉。
- 如果想的话你可以随意地用自己的图片来做这个评估。

## 范例

完成之后的信纸可能会像下面的截图这样：

![](letterhead.png)

## 评估

如果这个评估是一系列课程的一部分，你应该可以让你的老师或导师为你批改。如果你是自学，可以很容易地在 [discussion thread for this exercise](https://discourse.mozilla.org/t/creating-fancy-letterheaded-paper-assessment/24684/1) 或[Mozilla IRC](https://wiki.mozilla.org/IRC)的[#mdn](irc://irc.mozilla.org/mdn) IRC 频道回复得到批改指南。请先自己试着做——作弊学不到任何东西！

{{PreviousMenuNext("Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes/A_cool_looking_box", "Learn/CSS/Styling_boxes")}}
