---
title: 挑战：图片和表格元素
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
---

该任务的目的是帮助你检查对我们在本课程[Images, Media and Form elements](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)(图像，媒体及表格元素）中了解的一些值和单位的理解。

> [!NOTE]
> 你可以在下面的交互式编辑器中尝试解决方案，但是下载代码并使用诸如[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/) 之类的在线工具来完成任务可能会更加有所帮助。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 任务一

在此任务中，你有一张溢出盒子的图像。我们希望图像缩小到适合盒子的大小，而没有多余的空白，并不介意某些图像是否被裁剪。

![An image in a box](mdn-images-object-fit.png)

在下面的例子中看看你能否能符合上面的图片

```html live-sample___object-fit
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit
.box {
  border: 5px solid #000;
  width: 400px;
  height: 200px;
}

img {
  /* Add styles here */
}
```

{{EmbedLiveSample("object-fit", "", "400px")}}

<details>
<summary>Click here to show the solution</summary>

It is ok if some parts of the image are cropped.
Using `object-fit: cover` is the best choice, you also need to set the width and height to `100%`:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## 任务二

在此任务中，你会获得一个简单的表格。你的任务是对该表单的外观进行以下更改：

- 使用属性选择器定位.myform 中的**搜索 (search)**字段和按钮。
- 使表单字段和按钮使用与表单其余部分相同的文本大小。
- 给表单字段和按钮设置 10 像素的内边距。
- 为按钮提供紫色背景，白色前景，无边框和 5px 的圆角。

![A single line form](mdn-images-form.png)

尝试更改下面的实时代码以重新创建图像中显示的示例：

```html live-sample___form
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___form
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid #000;
  padding: 5px;
}
```

{{EmbedLiveSample("form")}}

<details>
<summary>Click here to show the solution</summary>

Here's an example solution for the task:

```css
.my-form {
  border: 2px solid #000;
  padding: 5px;
}

.my-form input[type="search"] {
  padding: 10px;
  font-size: inherit;
}

.my-form input[type="submit"] {
  padding: 10px;
  font-size: inherit;
  background-color: rebeccapurple;
  color: white;
  border: 0;
  border-radius: 5px;
}
```

</details>
