---
title: 图片库
slug: Learn/JavaScript/Building_blocks/Image_gallery
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

我们已经学习了 JavaScript 基础的块结构，下面我们通过编写一个常见的基于 JavaScript 的图片库来测验一下你对于循环、函数、条件和事件的掌握情况。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>请读完本章其他所有小节的内容后再开始这个测验。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>测试你对 JavaScript 的循环、函数、条件语句和事件处理的掌握程度。</td>
    </tr>
  </tbody>
</table>

## 起点

[下载压缩包](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip)并在本地解压。

另外，你还可以使用类似 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/)）这些在线编辑器来完成测验。你可以将 HTML、CSS 和 JavaScript 粘贴到这几个在线编辑器中。如果你使用的在线编辑器没有单独的 JavaScript/CSS 面板，请将它们放入 HTML 页面内联的 `<script>`/`<style>` 元素中。

> **备注：** 如果你遇到了困难，请联系我们以寻求帮助——见本页面底部的[评估或进一步帮助](#评估或进一步帮助)。

## 项目简介

我们提供了一些 HTML、CSS、照片和几行 JavaScript 代码。需要你来编写必要的 JavaScript 代码让这个项目运行起来。HTML 的 body 部分如下：

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img class="displayed-img" src="images/pic1.jpg" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

该示例如下所示：

![](gallery.png)

以下是本例中 CSS 文件最值得关注的部分：

- `full-img <div>` 中有三个绝对定位的元素：一个显示全尺寸图片的 `<img>`，一个空 `<div>`（覆盖于 `<img>` 之上，且与之大小相同，用来设置半透明背景色来使图片变暗），和一个用来控制变暗效果的 `<button>`。
- 将 `thumb-bar <div>` 中图片（即“缩略图”）的宽度设置为 20%，并且将它们沿左侧浮动，使得它们在同一行上依次排列。

JavaScript 部分则需要实现：

- 声明一个 `const` 数组，用于列出每张图像的文件名，例如 `'pic1.jpg'`。
- 迭代数组中的文件名，为每一个文件名创建一个 `<img>` 元素，并将其插入到 `thumb-bar <div>` 中，这样图片就会嵌入页面。
- 为 `thumb-bar <div>` 里的每个 `<img>` 元素添加一个 click 事件监听器，在图片被点击时相应的图片将被显示到 `displayed-img <img>` 元素上。
- 给 `<button>` 元素添加一个 click 事件监听器，当按钮被点击时，将全尺寸图片变暗，再次点击时取消。

可以看一下[完成的示例](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/)，体会一下。（别偷看代码哦）

## 详细步骤

以下是你的工作。

## 声明图像文件名数组

你需要创建一个用于列出所有需要包含在图片库中的图像的文件名。这个数组应该以常量的形式声明。

### 迭代照片

我们提供的代码中用一个名为 `thumbBar` 的变量用来存储 `thumb-bar <div>` 的引用，创建了一个新的 `<img>` 元素，将它的 `src` 属性值设置成 `xxx` 占位符，并且将这个新的 `<img>` 元素添加到 `thumbBar` 中。

你需要：

1. 将“Looping through images”注释下方的代码放到一个循环之中，这个循环会迭代数组中所有的文件名。
2. 对于每一次循环迭代，将占位符 `xxx` 替换为代表图像路径的字符串。我们需要设置每一个图像的 `src` 属性。请注意，每一张图像都在 `images` 文件夹内，文件名为 `pic1.jpg`、`pic2.jpg`，等等。

### 为每一个缩略图添加 click 事件监听器

每次迭代中，你需要给当前的 `newImage` 加上一个 click 事件监听器——它应该查询当前图像的 `scr` 属性值，然后将获取的 `src` 属性值设置为 `displayed-img <img>` 元素 `src` 属性的值。

或者，你可以只为缩略图栏（`thumb-bar <div>`）添加事件监听器。

### 为变亮/变暗按钮编写处理器

最后还剩变亮/变暗的 `<button>`。我们已经提供了一个名为 `btn` 的变量来存储 `<button>` 的引用。需要添加一个 click 事件监听器：

1. 检查当前 `<button>` 按钮的类名称，你可以使用 `getAttribute()` 方法获得。
2. 如果类名是 `"dark"`，则将 `<button>` 的类名变为 `"light"`（使用 [`setAttribute()`](/zh-CN/docs/Web/API/Element/setAttribute)），文本内容变为“Lighten”，然后将蒙板 `<div>` 的 {{cssxref("background-color")}} 设为 `"rgba(0,0,0,0.5)"`。
3. 如果类名不是 `"dark"`，则将 `<button>` 的类名变为 `"dark"`，文本内容变为 "Darken"，然后将蒙板 `<div>` 的 {{cssxref("background-color")}} 设为 `"rgba(0,0,0,0)"`。

以下是实现上述 2、3 点所提功能的基本代码：

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## 提示

- 完全不需要修改 HTML 和 CSS 文件。

## 评估或进一步帮助

如果你希望对自己的工作成果进行打分评估，或者遇到了困难并希望寻求帮助：

1. 将你完成的内容放到在线、可分享的编辑器，如：[CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)。
2. 在 [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250) 中发贴寻求打分评估或帮助。你的贴子需要包含：

   - 一个描述的标题，如：“Assessment wanted for Image gallery”。
   - 你尝试的详细过程，以及你希望我们能够做什么，例如：你遇到了困难，想要寻求帮助；或希望得到打分评估。
   - 一个指向用于打分评估或寻求帮助的示例代码的链接（使用上文中提到的任意一种在线的、可分享的编辑器）。这是一种很好的形式——如果别人没法看到你的代码，他们很难对你提供代码上的帮助。
   - 一个指向实际任务或评估页面的链接，以便我们找到你需要得到帮助的问题。

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
