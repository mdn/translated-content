---
title: 背景与边框
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

在本课程中，我们将看看可以用 CSS 背景和边框做的一些创造性事情。从添加渐变、背景图像到圆角，背景和边框可以解决 CSS 中的许多样式问题。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基础的计算机知识，<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了基本的软件</a
        >，了解基本的<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理知识</a
        >和 HTML 基础（已经学习了 <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 介绍</a
        >)，以及 CSS 如何工作的基本常识（已经学习了 <a href="/zh-CN/docs/Learn/CSS/First_steps">CSS 入门概述</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何为盒子的背景和边框添加样式。</td>
    </tr>
  </tbody>
</table>

## CSS 的背景样式

CSS {{cssxref("background")}} 属性是本课程中我们将遇到的一些普通背景属性的简写表示。如果你在样式表中发现了一个复杂的背景属性，可能会觉得有点难以理解，因为可以同时传入这么多的值。

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.2) 39%,
        rgba(51, 56, 57, 1) 96%
      ) center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

我们将在本教程的后半部分回到这个简写表示的工作原理，但首先让我们通过查看各个背景属性来了解在 CSS 中可以对背景做哪些不同的事情。

### 背景颜色

{{cssxref("background-color")}} 属性定义了 CSS 中任何元素的背景颜色。属性接受任何有效的 [`<color>`](/zh-CN/docs/Web/CSS/color_value) 值。`background-color` 可以延伸至元素的内容和内边距盒子的下面。

在下面的例子中，我们用各种颜色值为盒子、标题和 {{htmlelement("span")}} 元素添加背景色。

**尝试修改为任何可用的 [\<color>](/zh-CN/docs/Web/CSS/color_value) 值。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### 背景图像

{{cssxref("background-image")}} 属性可以在一个元素的背景中显示一个图像。在下面的例子中，我们有两个盒子，其中一个盒子具有比盒子大的背景图像（[balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)），另一个盒子具有较小的单个星星的图像（[star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)）。

这个示例演示了关于背景图像的两种情形。默认情况下，大图不会缩小以适应盒子，因此我们只能看到它的一个小角，而小图则是平铺以填充方框。在

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**如果除了背景图像外，还指定了背景颜色，则图像将显示在颜色的顶部。尝试向上面的示例添加 `background-color` 属性，看看效果如何。**

#### 控制背景平铺行为

{{cssxref("background-repeat")}} 属性用于控制图像的平铺行为。可用的值是：

- `no-repeat`——阻止背景重复平铺。
- `repeat-x`——仅水平方向上重复平铺。
- `repeat-y`——仅垂直方向上重复平铺。
- `repeat`——默认值，在水平和垂直两个方向重复平铺。

**在下面的示例中尝试这些值。我们已经将值设置为 `no-repeat`，因此你将只能看到一个星星。尝试不同的值（`repeat-x` 和 `repeat-y`），看看它们的效果如何。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### 调整背景图像的大小

在上面的例子中，我们有一个很大的图像（_ballons.jpg_），由于它比作为背景的元素大，所以最后被裁剪掉了。在这种情况下，我们可以使用 {{cssxref("background-size")}} 属性，它可以设置[长度](/zh-CN/docs/Web/CSS/length)或[百分比](/zh-CN/docs/Web/CSS/percentage)值，来调整图像的大小以适应背景。

你也可以使用关键字：

- `cover`：浏览器将使图像足够大，使它完全覆盖了盒子区域，同时仍然保持其宽高比。在这种情况下，图像的部分区域可能会跳出盒子外。
- `contain`：浏览器会将图像调整到适合框内的尺寸。在这种情况下，如果图像的长宽比与盒子的长宽比不同，你可能会在图像的两边或顶部和底部出现空隙。

在下面的示例中，我使用了上面示例中的 _balloons.jpg_ 图片，并使用长度单位来调整方框内的大小。你可以看到这扭曲了图像。

试试这些：

- 改变用于修改背景大小的长度单位。
- 去掉长度单位，看看使用 `background-size: cover` 或 `background-size: contain` 时会发生什么。
- 如果你的图像小于盒子，可以更改 `background-repeat` 的值来重复平铺图像。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### 背景图像定位

{{cssxref("background-position")}} 属性允许你选择背景图片出现在它所应用的盒子上的位置。这使用了一个坐标系统，其中方框的左上角是 `(0,0)`，方框沿水平（`x`）和垂直（`y`）轴定位。

> **备注：** 默认的 `background-position` 值是 `(0,0)`。

最常见的 `background-position` 值有两个单独的值——一个水平值后面跟着一个垂直值。

你可以使用像 `top` 和 `right` 这样的关键字（在 {{cssxref("background-image")}} 页面上查找其他的关键字）：

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

或者使用[长度](/zh-CN/docs/Web/CSS/length)和[百分比](/zh-CN/docs/Web/CSS/percentage)值：

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

你也可以将关键字与长度或百分比混合在一起，在这种情况下，第一个值必须指水平位置或偏移，第二个值指垂直位置。例如：

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

最后，你还可以使用四值语法来指示到盒子的某些边的距离——在本例中，长度单位是与其前面的值的偏移量。所以在下面的 CSS 中，我们将背景定位在距顶部 20px 和右侧 10px 处：

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**使用下面的示例来处理这些值并在框内移动星星。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **备注：** `background-position` 是 {{cssxref("background-position-x")}} 和 {{cssxref("background-position-y")}} 的简写，它们允许用户分别设置不同的坐标轴的值。

### 渐变背景

当渐变用于背景时，也可以使用像图像一样的 {{cssxref("background-image")}} 属性设置。

你可以在 MDN 的 [`<gradient>`](/zh-CN/docs/Web/CSS/gradient) 数据类型页面上，了解更多关于渐变的不同类型，以及使用它们可以做的事情。使用渐变的一个有趣的方法是使用网络上许多 CSS 渐变生成器中的一个，比如[这个](https://cssgradient.io/)。你可以创建一个渐变，然后复制和粘贴生成它的源代码。

在下面的示例中尝试一些不同的渐变。在这两个盒子里，我们分别有一个线性渐变，它延伸到整个盒子上，还有一个径向渐变，它有一个固定的大小，因此会重复。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 700)}}

### 多个背景图像

也可以有多个背景图像——在单个属性值中指定多个 `background-image` 值，用逗号分隔每个值。

当你这样做时，你可能会出现背景图片相互重叠的情况。背景将分层，最后列出的背景图片位于最下层，而之前的每张图片都堆在代码中紧随其后的那张图片之上。

> **备注：** 渐变可以与常规的背景图像很好地混合在一起。

其他 `background-*` 属性也可以像 `background-image` 一样使用逗号分隔的方式设置：

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

不同属性的每个值，将与其他属性中相同位置的值匹配。例如，上面的 `image1` 的 `background-repeat` 值将是 `no-repeat`。但是，当不同的属性具有不同数量的值时，会发生什么情况呢？答案是较小数量的值会循环——在上面的例子中有四个背景图像，但是只有两个背景位置值。前两个位置值将应用于前两个图像，然后它们将再次循环——`image3` 将被赋予第一个位置值，`image4` 将被赋予第二个位置值。

**我们来试一试。在下面的示例中包含了两个图像。为了演示叠加顺序，请尝试切换哪个背景图像在列表中最先出现。或使用其他属性更改位置、大小或重复值。**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### 背景附加

我们为背景提供的另一个选项是指定内容滚动时的滚动方式。这是用 {{cssxref("background-attachment")}} 属性控制的，它可以取以下值：

- `scroll`：使元素的背景在页面滚动时滚动。如果滚动了元素内容，则背景不会移动。实际上，背景被固定在页面的相同位置，所以它会随着页面的滚动而滚动。
- `fixed`：使元素的背景固定在视口上，这样当页面或元素内容滚动时，它就不会滚动。它将始终保持在屏幕上相同的位置。
- `local`：将背景固定在它所设置的元素上，所以当你滚动该元素时，背景也随之滚动。

{{cssxref("background-attachment")}} 属性只有在有内容要滚动时才会有效果，所以我们做了一个示例来演示这三个值之间的区别——看看 [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)（或者看看这里的[源代码](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds)）。

### 使用 background 简写属性

正如我在本课开始时提到的，你将经常看到使用 {{cssxref("background")}} 属性指定的背景。这种简写形式允许你一次设置所有不同的属性。

如果使用多个背景，则需要为第一个背景指定所有普通属性，然后在逗号后面添加下一个背景。在下面的示例中，我们有一个渐变，它指定大小和位置，然后是指定为 `no-repeat` 的图像背景，它指定位置，然后是颜色。

这里有一些规则，需要在简写背景图像属性时遵循，例如：

- `background-color` 只能在最后一个逗号之后指定。
- `background-size` 值只能立即包含在 `background-position` 之后，用“/”字符分隔，例如：`center/80%`。

查看 {{cssxref("background")}} 的 MDN 页面，以查看所有的注意事项。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 900)}}

### 背景的无障碍考虑

当你把文字放在背景图片或颜色上面时，你应该注意你有足够的对比度让文字对你的访客来说是清晰易读的。如果指定了一个图像，并且文本将被放置在该图像的顶部，你还应该指定一个 `background-color`，以便在图像未加载时文本也足够清晰。

屏幕阅读器不能解析背景图像，因此背景图片应该只是纯粹的装饰；任何重要的内容都应该是 HTML 页面的一部分，而不是包含在背景中。

## 边框

在学习盒子模型时，我们发现了边框如何影响盒子的大小。在这节课中，我们将看看如何创造性地使用边框。通常，当我们使用 CSS 向元素添加边框时，我们使用一个简写属性在一行 CSS 中设置边框的颜色、宽度和样式。

我们可以使用 {{cssxref("border")}} 为一个框的所有四条边设置边框。

```css
.box {
  border: 1px solid black;
}
```

或者我们可以只设置盒子的一条边，例如：

```css
.box {
  border-top: 1px solid black;
}
```

这些简写等价于：

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

也可以使用更加细粒度的属性：

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> **备注：** 这些顶部、右侧、底部和左侧边框属性还具有与文档写入模式相关的映射逻辑属性（例如，从左到右或从右到左的文本，或从上到下）。在下一课中，我们将探讨这些问题，这包括[处理不同的文本方向](/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)。

有各种各样的样式可以用于边框。在下面的例子中，我们为框的四个边使用了不同的边框样式。调整边框样式、宽度和颜色，看看边框是如何工作的。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### 圆角

盒子上的圆角是通过使用 {{cssxref("border-radius")}} 属性和与盒子的每个角相关的普通属性来实现的。两个长度或百分比可以作为一个值，第一个值定义水平半径，第二个值定义垂直半径。在很多情况下，你只会传入一个值，这个值会被用于这两个。

例如，要使一个盒子的四个角都有 10px 的圆角半径：

```css
.box {
  border-radius: 10px;
}
```

或使右上角的水平半径为 1em，垂直半径为 10％：

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

我们在下面的示例中设置了所有四个角，然后更改右上角的值使之不同。你可以使用这些值来更改圆角样式。查看 {{cssxref("border-radius")}} 的属性页，查看可用的语法选项。

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## 测试你的技能！

你已经到了本文的结尾，还能记住最重要的信息吗？你可以在继续之前找到一些进一步的测试来验证你是否记住了这些重要知识——参见[测试你的技能：背景和边框](/zh-CN/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders)。

## 总结

我们在这里涵盖了相当多的内容，你可以看到为一个盒子添加背景或边框有相当多的内容。如果你想进一步了解我们所讨论的任何功能，请浏览不同的属性页面。MDN 上的每一个页面都有更多的使用实例，供你玩耍和增强你的知识。

在下一篇文章中，我们将了解文档的书写模式如何与 CSS 交互。当文本不是从左到右流动时会发生什么？

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
