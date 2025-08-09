---
title: 技能测试：背景与边框
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
---

本技能测试的目的是评估你是否完全理解了 [CSS 中的背景和边框](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)教程的内容。

> [!NOTE]
> 你可以在下面的互动编辑器中尝试解决方案。然而，下载代码并使用在线工具，如 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/) 来完成任务可能会有所帮助。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 任务 1

在这个任务中，我们希望你能为一个页面的标题添加背景、边框和一些简单的样式：

1. 令这个盒子的边框宽度为 5px，且为黑色实心（solid）的，圆角半径为 10px。
2. 添加背景图片（使用 `balloons.jpg` URL），调整它的大小，令其覆盖整个盒子。
3. 给予 `<h2>` 一个半透明的黑色背景颜色，并使文本为白色。

你的最终结果看起来应该如下图所示：

![图片显示了一个有照片背景的盒子，圆形的边框和半透明的黑色背景上的白色文字](backgrounds-task1.png)

尝试更新下面的实时代码，重现完成的示例：

```html live-sample___backgrounds1
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css hidden live-sample___backgrounds1
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
```

```css live-sample___backgrounds1
.box {
  /* Add styles here */
}

h2 {
  /* Add styles here */
}
```

{{EmbedLiveSample("backgrounds1", "", "200px")}}

## 任务 2

在这个任务中，我们希望你为一个装饰性的盒子添加背景图片、边框和其他一些样式：

- 给这个盒子加一个 5px 的淡蓝色（lightblue）边框，设定左上角圆角半径为 20px，右下角圆角半径为 40px。
- 标题使用 `star.png` 图像作为背景图像，左边是一颗居中的星星，右边是重复的星星图案。
- 确保标题文本不覆盖图像，并且居中——你将需要使用在以前的课程中学到的技术来实现这一点。

你的最终结果看起来应该如下图所示：

![图片显示了一个在左上角和右下角有圆角蓝色边框的盒子。文字的左边有一颗星星，右边有 3 颗星星](backgrounds-task2.png)

尝试更新下面的实时代码，重现完成的示例：

```html live-sample___backgrounds2
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css hidden live-sample___backgrounds2
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  width: 300px;
  padding: 0.5em;
}
```

```css live-sample___backgrounds2
.box {
  /* Add styles here */
}

h2 {
  /* Add styles here */
}
```

{{EmbedLiveSample("backgrounds2", "", "220px")}}
