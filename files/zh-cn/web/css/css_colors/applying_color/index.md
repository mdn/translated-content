---
title: 使用 CSS 为 HTML 元素应用颜色
slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 2b214f76937f16327c4338ae4a541f54bcf4bf63
---

{{CSSRef}}

本文主要介绍 HTML 中使用 CSS 颜色的各种方法。

色彩的运用是人类表达的一种基本形式。小孩子在学会绘画前就开始尝试色彩的运用。也许这就是为什么颜色是人们在学习开发网站时最想尝试的东西之一。借助 [CSS](/zh-CN/docs/Web/CSS)，有很多方法可以为 [HTML](/zh-CN/docs/Web/HTML) [元素](/zh-CN/docs/Web/HTML/Element)添加颜色，以创建所需的外观。

我们将会谈及添加颜色所需要的大部分内容，包括[一系列可以着色的元素与相关的 CSS 属性](#可设置颜色的内容)，[如何描述颜色](#如何描述颜色)，以及[在样式表与脚本中使用颜色的方法](#使用颜色)。同时我们还会了解如何[让用户选择颜色](#让用户选择颜色)。

然后我们会通过简短的讨论总结如何[机智地运用颜色](#机智地运用颜色)：如何选择合适的颜色，同时考虑不同视力水平的人的需求。

## 可设置颜色的内容

从 HTML 元素层面来看，所有的元素都可设置颜色。但除了元素本身之外，元素中所绘制的事物也可设置颜色，如文本、边框等等。我们将会看到一系列用于设置颜色的 CSS 属性。

在这些设置颜色的 CSS 属性中，最基础的就是 {{cssxref("color")}} 属性和 {{cssxref("background-color")}} 属性了。分别用于设置 HTML 元素内容的前景色和背景色。这两个属性几乎可用于所有的 HTML 元素。

### 文本

无论何时渲染元素，这些属性都将用于确定文本的颜色、背景以及文本上的任何装饰。

- {{cssxref("color")}}
  - : 绘制文本和任何[文本装饰](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals#字体样式、字体粗细、文本转换和文本装饰)（如添加下划线或上划线、删除线等）时使用的颜色。
- {{cssxref("background-color")}}
  - : 文本的背景色。
- {{cssxref("text-shadow")}}
  - : 配置应用于文字的阴影效果。阴影选项包括阴影的基色（然后根据其他参数将基色模糊并与背景混合）。请参阅[文字阴影](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals#文字阴影)以了解更多信息。
- {{cssxref("text-decoration-color")}}
  - : 默认情况下，文本装饰（如下划线、删除线等）使用 `color` 属性作为其颜色。不过，你可以使用 `text-decoration-color` 属性覆盖该行为，并为它们使用不同的颜色。
- {{cssxref("text-emphasis-color")}}
  - : 绘制文本中每个字符旁边的强调符号时使用的颜色。主要用于绘制东亚语言的文本。
- {{cssxref("caret-color")}}
  - : 在元素中绘制{{Glossary("caret", "光标")}}时使用的颜色（有时也称为文本输入光标）。这仅对可编辑的元素有用，如 {{HTMLElement("input")}} 和 {{HTMLElement("textarea")}} 或设置了 HTML [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable) 属性的元素。

### 盒

每个元素都是一个包含某种内容的盒子，除了盒子中的内容外，还有背景和边框。

- [边框](#边框_2)
  - : 请参阅[边框](#边框)一节，了解可用于设置方框边框颜色的 CSS 属性列表。
- {{cssxref("background-color")}}
  - : 在元素中没有前景内容的区域使用的背景色。
- {{cssxref("column-rule-color")}}
  - : 绘制文本分隔线时使用的颜色。
- {{cssxref("outline-color")}}
  - : 在元素外部绘制轮廓时使用的颜色。该轮廓与边框不同，它不会在文档中预留空间（因此可能会与其他内容重叠）。它通常用作焦点指示器，显示哪个元素将接收输入事件。

### 边框

任何元素都可以在其周围绘制[边框](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)。基本的元素边框是围绕元素内容边缘绘制的一条线。请参阅[盒模型](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model)了解元素与其边框之间的关系，并参阅文章[使用 CSS 为边框添加样式](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)了解为边框应用样式的更多信息。

你可以使用 {{cssxref("border")}} 简写属性，这样就可以一次性配置边框的所有内容（包括边框的非颜色特性，如[宽度](/zh-CN/docs/Web/CSS/border-width)、[样式](/zh-CN/docs/Web/CSS/border-style)（实线、虚线等）等等）。

- {{cssxref("border-color")}}
  - : 为元素边框的每一侧指定一种颜色。
- {{cssxref("border-left-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-top-color")}} 和 {{cssxref("border-bottom-color")}}
  - : 设置元素边框相应边的颜色。
- {{cssxref("border-block-start-color")}} 和 {{cssxref("border-block-end-color")}}
  - : 通过这些属性，你可以设置用于绘制边框的颜色，这些颜色最靠近边框所包围的区块的起始和结束位置。在从左到右的书写模式下（如英文的书写方式），块向的起始边框是上边缘，结束边框是下边缘。这与行向开始和结束不同，行向开始和结束是左右边缘（对应于方框中每行文本的开始和结束位置）。
- {{cssxref("border-inline-start-color")}} 和 {{cssxref("border-inline-end-color")}}
  - : 通过这些选项，你可以为最靠近方框内文本行开头和结尾的边框边缘着色。至于是哪一边，取决于 {{cssxref("writing-mode")}}、{{cssxref("direction")}} 和 {{cssxref("text-orientation")}} 属性，它们通常（但不总是）用于根据显示语言调整文本方向。例如，如果盒子的文本是从右到左显示的，那么 `border-inline-start-color` 就会应用到边框的右侧。

### 其他使用颜色的方式

CSS 并不是唯一支持颜色的 web 技术。同时还有其他支持颜色的图形技术。

- HTML [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
  - : 可让你在 {{HTMLElement("canvas")}} 元素中绘制二维位图图形。请参阅我们的 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)了解更多信息。
- [SVG](/zh-CN/docs/Web/SVG)（可缩放矢量图形）
  - : SVG 可让你使用绘制特定形状、图案和线条的命令来绘制图像。SVG 命令的格式为 XML，可以直接嵌入网页，也可以像其他类型的图像一样，使用 {{HTMLElement("img")}} 元素放置在网页中。
- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
  - : 网络图形库是一种基于 OpenGL ES 的 API，用于在 Web 上绘制高性能的 2D 和 3D 图形。请参阅我们的 [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)了解更多信息。

## 如何描述颜色

要在 CSS 中表示一种颜色，就必须找到一种方法，将“颜色”这一模拟概念转化为计算机可以使用的数字形式。通常的做法是将颜色分解成不同的分量，例如混合一组三原色中每种颜色的多少，或者使颜色的亮度达到多少。因此，在 CSS 中可以有多种方法来描述颜色。

有关每种颜色值类型的详细讨论，请参阅 CSS {{cssxref("&lt;color&gt;")}} 一节的参考资料。

### 关键字

我们定义了一套标准颜色名称，如果你选择这种方式来描述颜色，可以使用关键字来代替数字表示，但必须有一个关键字来代表你想使用的确切颜色。颜色关键字包括标准的主色和次色（如 `red`、`blue` 或 `orange`）、灰度（从 `black` 到 `white`，包括 `darkgray` 和 `lightgray`）以及各种其他混合色，包括 `lightseagreen`、`cornflowerblue` 和 `rebeccapurple`。

有关颜色关键字的更多信息，请参见[具名颜色](/zh-CN/docs/Web/CSS/named-color)一节。

### RGB 值

CSS 中有三种表示 RGB 颜色的方式。

#### 十六进制字符串表示法

十六进制字符串表示法用十六进制数字来表示颜色的各个分量（红、绿、蓝）。它还可能包括第四个分量：alpha 通道（或不透明度）。每个颜色分量可以用 0 到 255（0x00 到 0xFF）之间的数字表示，也可以选择用 0 到 15（0x0 到 0xF）之间的数字表示。必须使用相同位数指定所有组件。如果使用个位数符号，最终颜色的计算将使用每个分量的个位数两次；也就是说，`"#D"` 在绘制时会变成 `"#DD"`。

十六进制字符串符号中的颜色总是以字符 `"#"` 开头。之后是颜色代码的十六进制数字。字符串不区分大小写。

- `"#rrggbb"`
  - : 指定完全不透明的颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。
- `"#rrggbbaa"`
  - : 指定一种颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。Alpha 通道由 `0xaa` 指定；该值越小，颜色就越半透明。
- `"#rgb"`
  - : 指定一种颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。
- `"#rgba"`
  - : 指定一种颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。Alpha 通道由 `0xaa` 指定；该值越小，颜色就越半透明。

例如，可以用 `"#0000ff"` 或 `"#00f"` 表示不透明的亮蓝色。要使不透明色达到 25%，可以使用 `"#0000ff44"` 或 `"#f00f4"`。

#### RGB 函数表示法

RGB（红/绿/蓝）函数表示法与十六进制字符串表示法一样，都是用红、绿、蓝三种分量（以及可选的表示不透明度的 alpha 通道分量）来表示颜色。不过，定义颜色时使用的不是字符串，而是 CSS 函数 {{cssxref("color_value", "rgb()", "#rgb()")}} 。该函数的输入参数包括红色、绿色和蓝色分量的值，以及可选的第四个参数，即 alpha 通道的值。

这些参数的合法值分别是：

- `red`、`green`、`blue`
  - : 每个值都必须是 0 到 255（含）之间的 {{cssxref("&lt;integer&gt;")}} 值，或 0% 到 100% 之间的 {{cssxref("&lt;percentage&gt;")}} 值。
- `alpha`
  - : alpha 通道是一个介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。你也可以指定一个百分比，0% 等于 0.0，100% 等于 1.0。

例如，50% 不透明的鲜红色可以用 `rgb(255, 0, 0, 0.5)` 或 `rgb(100%, 0, 0, 50%)` 表示。

### 含有色相分量的颜色函数

除了 `rgb()` 以外，你还可以使用 `hsl()` 和 `hwb()`，它们都需要包含 `<hue>` 分量。[`<hue>`](/zh-CN/docs/Web/CSS/hue) 是一种属性，可以让我们分辨出红、橙、黄、绿、蓝等颜色之间的差异或相似性。关键的是，可以在 [`<angle>`](/zh-CN/docs/Web/CSS/angle) 中指定色相，因为大多数颜色模型都是使用{{glossary("color wheel", "色轮")}}来描述色相的。有关这些函数分类的更多信息，请参阅[色彩空间和色彩模型](#色彩空间和色彩模型)部分。

#### HSL 函数表示法

设计师和艺术家通常喜欢使用 [HSL](https://zh.wikipedia.org/wiki/HSL和HSV色彩空间)（色相/饱和度/亮度）色彩方法。另外，CSS 的 `hsl()` 函数与 `rgb()` 函数的用法类似。

下图显示了一个 HSL 颜色柱。色相将颜色定义为圆形{{glossary("color wheel", "色轮")}}上的 [`<angle>`](/zh-CN/docs/Web/CSS/angle)。饱和度是一个百分比，表示在灰色阴影和给定色调的最大可能量之间的百分比。随着亮度（或明度）值的增加，颜色会从最暗过渡到最亮（从黑到白）。

![HSL 颜色柱](640px-hsl_color_solid_cylinder.png)

图片由用户 [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) 在 [Wikipedia](https://en.wikipedia.org/) 上提供，采用 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 许可发布。

HSL 颜色的色相（H）分量值是从红色开始，依次经过黄色、绿色、青色、蓝色和洋红色（360° 时又回到红色）的一个角度，用于确定基色。该值可以用 CSS 支持的任何 {{cssxref("&lt;angle&gt;")}} 单位指定，包括度（`deg`）、弧度（`rad`）、梯度（`grad`）或转数（`turn`）。但这并不能控制颜色的鲜艳或暗淡、明亮或昏暗程度。

颜色的饱和度（S）分量指定最终颜色中指定色相所占的百分比。其余部分则由亮度（L）分量提供的灰度来定义。

把它想象成创造完美的油漆颜色的过程：

1. 首先，你要使用特定颜色的最大强度的基础颜料，例如用户屏幕所能显示的最强烈的蓝色。这就是**色相**（H）分量：该值代表了我们希望用作基色的鲜艳色相在{{glossary("color wheel","色轮")}}周围的角度。
2. 然后选择与你想要的颜色亮度相对应的灰度颜料；这就是亮度。你希望它非常明亮接近白色，还是非常暗接近黑色，或者介于两者之间？这可以用百分比来表示，0% 表示完全黑，100% 表示完全白（无论饱和度或色调如何）。介于两者之间的数值就是灰色区域。
3. 现在，你有了灰色颜料和鲜艳的颜色，需要将它们混合在一起。颜色的饱和度（S）表示最终颜色中鲜艳颜色所占的比例。最终颜色的其余部分由代表饱和度的灰色颜料组成。

你还可以选择加入一个 alpha 通道，使颜色的不透明度低于 100%。

下面是一些用 HSL 符号表示的颜色示例：

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0, 0%, 75%);
}
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">HSL 表示法下的颜色</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg, 100%, 50%)</code></td>
      <td style="background-color: hsl(90deg, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td style="background-color: hsl(90, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 50%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 50%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 50%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg, 90%, 50%)</code></td>
      <td style="background-color: hsl(270deg, 90%, 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HSL 函数表示法", 300, 260)}}

> [!NOTE]
> 如果省略了色相的单位，则假定其单位为度（`deg`）。

#### HWB 函数表示法

与上面的 HSL 函数表示法类似，[hwb()](/zh-CN/docs/Web/CSS/color_value/hwb) 函数使用相同的色相值。不过，指定的白度和黑度值不是亮度和饱和度，而是百分比。数值之间**不用**逗号分隔，还可以包含一个可选的 alpha 值（必须在前面加上斜线 `/`）。

下面是一些用 HWB 符号表示的颜色示例：

```css
/* 这些示例都指定了深浅不一的青绿色。 */
hwb(90 10% 10%)
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* 同样的青绿色，这次包含了透明度值 */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

### 色彩空间和颜色模型

十六进制、具名颜色和 `rgb()` 函数都使用 [RGB](/zh-CN/docs/Glossary/RGB) 模型，并与 sRGB（`srgb`）色彩空间相关联。你可能会看到“色彩模型”和“色彩空间”交替使用，但这两者之间还是有区别的，值得注意：

- 色彩模型是用数值表示色彩的数学模型。色彩模型描述了如何在色彩空间内创建可用的色彩。
- 色彩空间是对色彩进行分组的系统，因此对任何给定色彩的描述都是一致的。如果在不同的色彩空间之间转换一种颜色，它看起来会完全相同。

我们上面使用的 `hsl()` 和 `hwb()` 函数使用的是 sRGB 色彩空间，并且都使用*柱形*模型；这就是为什么 `<hue>` 角度可以让你像在[色轮](/zh-CN/docs/Glossary/Color_wheel)上一样控制颜色的属性。让我们来看看其他可用的色彩空间以及使用它们的原因。

#### CIELAB 和 Oklab 色彩空间

CIELAB 和 Oklab 色彩空间基于人类视觉实验，代表了人类所能看到的全部色彩范围。这些模型的主要目的在于它们是统一的，因此色彩空间中任意两点之间的给定距离在观察者看来应该是同样不同的。

对于 CIELAB 色彩空间，可以使用 `lab()` 和 `lch()` 函数。`lch()` 函数使用亮度（L）、色度（C）和色调（H），而 Lab 模型则沿色彩空间中的“a”轴和“b”轴（矩形坐标）使用亮度（L）、红/绿度和黄/蓝度。

下面的示例显示了在 `lab()` 和 `lch()` 函数中更改分量值的效果，其中每一行都修改了一个分量。第一行显示的是对 `lch()` 亮度值的更改，第二行更改的是 `lch()` 色调分量。第三行更改了 `lab()` 的“b”轴，因此我们获得了与 `lch()` 不同的效果，因为我们是在逐渐增加颜色中的黄色，而不是在整个色轮中循环：

```css hidden live-sample___lch-colors
/* 不同深浅度的紫色 */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.container div {
  border-radius: 8px;
  padding: 0.75rem;
}

#lch-20 {
  background-color: lch(20 40 0);
}
#lch-30 {
  background-color: lch(30 40 0);
}
#lch-40 {
  background-color: lch(40 40 0);
}

#lch-50 {
  background-color: lch(50 40 0);
}
#lch-60 {
  background-color: lch(60 40 0);
}
#lch-70 {
  background-color: lch(70 40 0);
}

#lch-hue-10 {
  background-color: lch(70 40 10);
}
#lch-hue-20 {
  background-color: lch(70 40 20);
}
#lch-hue-30 {
  background-color: lch(70 40 30);
}
#lch-hue-40 {
  background-color: lch(70 40 40);
}
#lch-hue-50 {
  background-color: lch(70 40 50);
}
#lch-hue-60 {
  background-color: lch(70 40 60);
}
#lab-10 {
  background-color: lab(70 40 10);
}
#lab-20 {
  background-color: lab(70 40 20);
}
#lab-30 {
  background-color: lab(70 40 30);
}
#lab-40 {
  background-color: lab(70 40 40);
}
#lab-50 {
  background-color: lab(70 40 50);
}
#lab-60 {
  background-color: lab(70 40 60);
}
```

```html hidden live-sample___lch-colors
<div class="container">
  <div id="lch-20">lch(20 40 0)</div>
  <div id="lch-30">lch(30 40 0)</div>
  <div id="lch-40">lch(40 40 0)</div>
  <div id="lch-50">lch(50 40 0)</div>
  <div id="lch-60">lch(60 40 0)</div>
  <div id="lch-70">lch(70 40 0)</div>
  <div id="lch-hue-10">lch(70 40 10)</div>
  <div id="lch-hue-20">lch(70 40 20)</div>
  <div id="lch-hue-30">lch(70 40 30)</div>
  <div id="lch-hue-40">lch(70 40 40)</div>
  <div id="lch-hue-50">lch(70 40 50)</div>
  <div id="lch-hue-50">lch(70 40 60)</div>
  <div id="lab-10">lab(70 40 10)</div>
  <div id="lab-20">lab(70 40 20)</div>
  <div id="lab-30">lab(70 40 30)</div>
  <div id="lab-40">lab(70 40 40)</div>
  <div id="lab-50">lab(70 40 50)</div>
  <div id="lab-60">lab(70 40 60)</div>
</div>
```

{{embedlivesample("lch-colors", '100', '150') }}

Oklab 是一种色彩空间，它使用与 CIELAB 相同的模型类型，但在构建时使用了额外的数值优化步骤，因此其数值被认为比 CIELAB 更精确。由于进行了优化，色调在感知上更加统一，因此 Oklab 是渐变的绝佳选择。如果你已经了解 `lab()` 和 `lch()`，就可以以类似的方式使用这些函数：

```css
.oklch-red {
  color: oklch(0.93 0.39 28);
}
.oklab-green {
  color: oklab(0.87 -0.2 0.18);
}
```

#### `color()` 函数

如果想在定义颜色时明确控制色彩空间，可以使用 [`color()`](/zh-CN/docs/Web/CSS/color_value/color) 函数。这对使用更宽[色域](/zh-CN/docs/Glossary/Gamut)的高清设备描述颜色非常有用。例如，如果我们想显示超出 sRGB 色域的 `display-p3 0 0 1` 颜色，可以使用 [`@media`](/zh-CN/docs/Web/CSS/@media/color-gamut) at 规则来检测客户端硬件是否支持此范围内的颜色：

```css
.vibrant {
  background-color: color(display-p3 0 0 1);
  /* 等同于色域之外的 rgb(-27, 55, 153) */
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
  }
}
```

## 使用颜色

现在，你已经知道有哪些 CSS 属性可以让你为元素着色，也知道了可以用来描述颜色的格式，你可以将它们组合在一起，开始使用颜色了。正如你在[可设置颜色的内容](#可设置颜色的内容)下的列表中所看到的，有很多事物都可以用 CSS 着色。让我们从两个方面来看看：在{{Glossary("stylesheet","样式表")}}中使用颜色，以及使用 {{Glossary("JavaScript")}} 代码添加和更改颜色，以改变元素的样式。

### 在样式表中指定颜色

为元素应用颜色的最简单方法，也是你通常会采用的方法，就是在呈现元素时使用的 CSS 中指定颜色。虽然我们不会使用前面提到的每一个属性，但我们会看几个示例。这个概念在任何使用颜色的地方都是一样的。

让我们来看一个示例，首先看看我们要达到的效果：

{{EmbedLiveSample("在样式表中指定颜色", 650, 150)}}

#### HTML

创建上述示例的 HTML 代码如下所示：

```html
<div class="wrapper">
  <div class="box boxLeft">
    <p>这是第一个盒子。</p>
  </div>
  <div class="box boxRight">
    <p>这是第二个盒子。</p>
  </div>
</div>
```

这非常简单，只需使用一个 {{HTMLElement("div")}} 作为内容的包装，内容由另外两个 `<div>` 组成，每个框中都有一个段落（{{HTMLElement("p")}}），每个段落的样式各不相同。

像往常一样，神奇的事情发生在 CSS 中，我们将在 CSS 中应用颜色并定义上述 HTML 的布局。

#### CSS

我们将逐一查看创建上述结果的 CSS，以便逐一回顾有趣的部分。

```css
.wrapper {
  width: 620px;
  height: 110px;
  margin: 0;
  padding: 10px;
  border: 6px solid mediumturquoise;
}
```

`.wrapper` 类用于为 {{HTMLElement("div")}} 指定样式，而 {{HTMLElement("div")}} 则封装了我们所有的其他内容。将使用 {{cssxref("width")}} 和 {{cssxref("height")}} 来确定容器的大小，以及其 {{cssxref("margin")}} 和 {{cssxref("padding")}}。

在这里，我们更感兴趣的是使用 {{cssxref("border")}} 属性在元素外边缘建立一个边框。该边框是一条宽 6 像素的实线，颜色为 `mediumturquoise`。

我们的两个彩色盒子有许多共同属性，因此接下来我们要建立一个定义这些共同属性的类 `.box`：

```css
.box {
  width: 290px;
  height: 100px;
  margin: 0;
  padding: 4px 6px;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

简而言之，`.box` 确定了每个盒子的大小以及内部使用的字体配置。我们还利用 [CSS 弹性盒布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)，轻松将每个盒子的内容居中。我们使用 {{cssxref("display", "display: flex")}} 启用 `flex` 模式，并将 {{cssxref("justify-content")}} 和 {{cssxref("align-items")}} 都设置为 `center`。然后，我们就可以为两个盒子分别创建一个类，定义两者不同的属性。

```css
.boxLeft {
  float: left;
  background-color: rgb(245, 130, 130);
  outline: 2px solid darkred;
}
```

`.boxLeft` 类巧妙地将方框浮动到左侧，然后设置颜色：

- 将 CSS {{cssxref("background-color")}} 属性的值改为 `rgb(245,130,130)`，即可设置方框的背景颜色。
- 为方框定义轮廓。与更常用的 `border` 不同，{{cssxref("outline")}} 完全不影响布局；它画在元素框外的任何东西的顶部，而不是像 `border` 那样腾出空间。这个轮廓是一条两像素粗的暗红色实线。注意在指定颜色时使用了 `darkred` 关键字。
- 请注意，我们没有明确设置文本颜色。这意味着，{{cssxref("color")}} 的值将从定义它的最近的包含元素继承。默认情况下，就是黑色。

```css
.boxRight {
  float: right;
  background-color: hsl(270deg, 50%, 75%);
  outline: 4px dashed rgb(110, 20, 120);
  color: hsl(0deg, 100%, 100%);
  text-decoration: underline wavy #88ff88;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> 当尝试在 Safari 中显示它时，它将无法正常显示。因为 Safari 不支持 `text-decoration: underline wavy #88ff88`。

最后，`.boxRight` 类描述了绘制在右侧的方框的独特属性。它的配置是将方框浮动到右侧，使其出现在前一个方框的旁边。然后确定以下颜色：

- `background-color` 是使用 `hsl(270deg, 50%, 75%)` 指定的 HSL 值设置的。这是一种中紫色。
- 方框的 `outline` 用于指定将方框括在一条四像素粗的虚线中，该虚线的颜色是略深一些的紫色（`rgb(110, 20, 120)`）。
- 前景（文本）颜色通过将 {{cssxref("color")}} 属性设置为 `hsl(0deg,100%,100%)` 来指定。这是指定白色的多种方法之一。
- 我们使用 {{cssxref("text-decoration")}} 在文字下方添加一条绿色波浪线。
- 最后，使用 {{cssxref("text-shadow")}} 为文字添加一点阴影。其 `color` 参数设置为 `black`。

## 让用户选择颜色

在许多情况下，网站可能需要让用户选择一种颜色。也许你有一个可定制的用户界面，或者你正在实现一个绘图应用程序。也许你有可编辑的文本，需要让用户选择文本颜色。或者，你的应用程序可以让用户为文件夹或项目指定颜色。虽然从历史上看，有必要实现自己的[颜色选择器](https://en.wikipedia.org/wiki/Color_picker)，但 HTML 现在支持浏览器通过 {{HTMLElement("input")}} 元素，使用 `"color"` 作为其 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性的值，提供一个开箱即用的颜色选择器。

`<input>` 元素仅使用上述[十六进制字符串表示法](#十六进制字符串表示法)表示一种颜色。

### 示例：选择一个颜色

我们来看一个简单的示例，用户可以选择一种颜色。当用户调整颜色时，示例周围的边框会发生变化，以反映新的颜色。完成并选择最终颜色后，颜色选择器的值就会显示出来。

{{EmbedLiveSample("示例：选择一个颜色", 525, 275)}}

> [!NOTE]
> 在 macOS 上，关闭颜色选择器窗口即表示已完成颜色选择。

#### HTML

这里的 HTML 创建了一个包含颜色选择器控件（标签使用 {{HTMLElement("label")}} 元素创建）和一个空段落元素（{{HTMLElement("p")}}）的盒子，我们将在其中输出 JavaScript 代码中的一些文本。

```html
<div id="box">
  <label for="colorPicker">边框颜色：</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <p id="output"></p>
</div>
```

#### CSS

CSS 为盒子设定了大小，并为外观设定了一些基本样式。此外，还为边框设定了 2 像素的宽度和边框颜色。

```css
#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245, 220, 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### JavaScript

此处的脚本负责更新边框的起始颜色，使其与颜色选择器的值相匹配。然后添加两个事件处理程序，以处理来自 [`<input type="color">`](/zh-CN/docs/Web/HTML/Element/input/color) 元素的输入。

```js
const colorPicker = document.getElementById("colorPicker");
const box = document.getElementById("box");
const output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener(
  "input",
  (event) => {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  (event) => {
    output.innerText = `颜色已设置为 ${colorPicker.value}。`;
  },
  false,
);
```

每次元素的值发生变化，即每次用户调整颜色选择器中的颜色时，{{domxref("Element/input_event", "input")}} 事件就会被发送。每次该事件发生时，我们都会设置方框的边框颜色，使其与颜色选择器的当前值相匹配。

当颜色选择器的值最终确定时，我们会收到 {{domxref("HTMLElement/change_event", "change")}} 事件。我们的回应是将 ID 为 `"output"` 的 `<p>` 元素的内容设置为描述最终选定颜色的字符串。

## 机智地运用颜色

在设计网站时，正确选择颜色是一个棘手的过程，尤其是如果你不具备美术、设计或至少是基本色彩理论的基础。错误的色彩选择可能会使你的网站失去吸引力，甚至更糟糕的是，由于对比度或色彩冲突问题而导致内容无法阅读。更糟糕的是，如果使用了错误的颜色，会导致有某些视力问题（尤其是色觉障碍）的人根本无法使用你的内容。

### 找到正确的颜色

想出恰到好处的颜色可能很棘手，尤其是没有受过美术或设计训练的人。幸运的是，有一些工具可以帮助你。虽然这些工具无法取代优秀的设计师帮你做这些决定，但它们绝对可以帮你入门。

#### 基本色

第一步是选择**基础色**。这是以某种方式定义网站或网站主题的颜色。正如我们将绿色与饮料[激浪](https://zh.wikipedia.org/wiki/激浪)联系在一起，将蓝色与天空或海洋联系在一起一样，选择一种合适的基色来代表你的网站是一个很好的开始。选择基色的方法很多，其中包括以下几种：

- 与内容主题自然相关的颜色，例如与产品或理念相关的现有颜色，或代表你希望传达的情感的颜色。
- 来自与内容相关的图像的颜色。如果要创建一个关于特定物品或产品的网站，请选择该物品上实际存在的颜色。
- 浏览网站，查看大量现有的调色板和图片，寻找灵感。

在尝试确定基本颜色时，你可能会发现能让你从网页内容中选择颜色的浏览器扩展程序会特别方便。其中有些甚至是专门为帮助完成此类工作而设计的。例如，[ColorZilla](https://www.colorzilla.com/) 网站提供了一个扩展工具（[Chrome](https://www.colorzilla.com/chrome/) 和 [Firefox](https://www.colorzilla.com/firefox/)），提供了一个从网页中挑选颜色的滴管工具。它还可以取不同大小区域甚至页面选定区域内像素颜色的平均值。

> [!NOTE]
> 平均分配颜色的好处在于，通常看起来像纯色的颜色实际上是由多种相关颜色组成的，它们相互配合，创造出理想的效果。如果只选择其中的一个像素，那么得到的颜色本身看起来就很不协调。

#### 丰富调色板

一旦确定了基色，有很多在线工具可以帮助你建立一个合适的颜色调色板，通过对基色应用色彩理论来确定合适的添加颜色，从而与基色一起使用。其中许多工具还支持查看过滤后的颜色，这样你就可以看到这些颜色在各种色盲症患者眼中的效果。请参阅[颜色与无障碍](#颜色与无障碍)，简要了解这一点的原因。

几个示例（截至本列表最后一次修订时，所有示例均可免费使用）：

- [MDN 的取色工具](/zh-CN/docs/Web/CSS/CSS_colors/Color_picker_tool)
- [Paletton](https://paletton.com/)
- [Adobe Color CC 在线调色盘](https://color.adobe.com/create/color-wheel)

在设计调色板时，请务必记住，除了这些工具通常生成的颜色外，可能还需要添加一些核心中性色，如白色（或近似白色）、黑色（或近似黑色）以及一定数量的灰色。

> [!NOTE]
> 通常情况下，使用尽可能少的颜色会好得多。通过使用色彩来突出重点，而不是为页面上的所有内容都添加色彩，这样就能使内容易于阅读，而且所使用的色彩也更有冲击力。

### 色彩理论的资源

对色彩理论的全面回顾超出了本文的范围，但有很多关于色彩理论的文章，你也可以在附近的学校和大学找到相关课程。以下是一些关于色彩理论的有用资源：

- [色彩科学](https://www.khanacademy.org/computing/pixar/color)（由[可汗学院](https://www.khanacademy.org/)与[皮克斯](https://www.pixar.com/)合作）
  - : 在线课程：介绍色彩是什么、如何感知色彩以及如何使用色彩表达想法等概念。由皮克斯的艺术家和设计师主讲。
- 维基百科上的[色彩理论](https://zh.wikipedia.org/wiki/颜色理论)
  - : 维基百科上的色彩理论：维基百科上的色彩理论条目，从技术角度提供了大量精彩信息。它并不能真正帮助你进行色彩选择，但仍有很多有用的信息。

### 颜色与无障碍

有几种方法可以使颜色成为{{glossary("accessibility", "无障碍")}}问题。色彩使用不当或粗心大意可能导致一部分目标受众无法充分使用网站或应用程序，从而造成流量损失、业务损失，甚至可能引发公共关系问题。因此，慎重考虑色彩的使用非常重要。

你至少应该对[色盲](https://zh.wikipedia.org/wiki/色盲)进行基本研究。色盲有好几种，最常见的是红绿色盲，它会导致人们无法区分红色和绿色。还有其他一些色盲，从无法区分某些颜色到完全看不到颜色。

> [!NOTE]
> 最重要的一条规则是：永远不要把颜色作为了解事物的唯一途径。例如，如果你通过将形状的颜色从白色变为绿色（成功）和红色（失败）来表示操作的成功或失败，那么患有红绿色盲的用户将无法正常使用你的网站。相反，也许可以同时使用文字和颜色，这样每个人都能明白发生了什么。

有关色盲的更多信息，请参阅以下文章：

- [Medline Plus：色盲](https://medlineplus.gov/colorblindness.html) （载于美国国家卫生研究院）
- [美国眼科学会：什么是色盲](https://www.aao.org/eye-health/diseases/what-is-color-blindness)
- [色盲与网页设计](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html)（载于 Usability.gov：美国卫生与公众服务部）

### 调色板设计示例

让我们举一个简单的例子来说明如何为网站选择合适的色调。想象一下，你正在为一款发生在火星上的新游戏建立一个网站。那么，让我们在 [Google 搜索火星照片](https://www.google.com/search?q=Mars&tbm=isch)。那里有很多火星色彩的好例子。我们小心地避开了模拟图和电影中的照片。我们决定使用人类在过去几十年中停放在火星表面的火星登陆器拍摄的照片，因为游戏是在火星表面进行的。我们使用颜色拾取工具来选择颜色样本。

使用滴管工具，我们找到了自己喜欢的颜色，并确定该颜色为 `#D79C7A`，这是一种非常适合火星表面的锈橙红色。

选定基色后，我们需要构建调色板。我们决定使用 [Paletton](https://www.paletton.com/) 来调出我们需要的其他颜色。打开 Paletton 后，我们可以看到

![Paletton 加载完毕](paletton1.png)

接下来，我们在工具左下角的“Base RGB”框中输入颜色的十六进制代码（`D79C7A`）：

![输入基本颜色后](paletton2.png)

现在我们看到的单色调色板是基于我们从火星照片中选取的颜色。如果你出于某种原因需要很多相关的颜色，那么这些颜色很可能是不错的选择。但我们真正需要的是一种强调色。一种能与基色相得益彰的颜色。要找到这种颜色，我们可以点击菜单下方的“add complementary”（添加补色）切换按钮，选择调色板类型（目前为“Monochromatic”）。Paletton 会计算出一个合适的强调色；点击右下角的强调色，就会告诉我们这个颜色是 `#508D7C`。

![现在包含了强调色](paletton3.png)

如果你对建议的颜色不满意，可以更改配色方案，看看是否能找到你更喜欢的颜色。例如，如果我们不喜欢建议的蓝绿色，我们可以点击“Triad”配色方案图标，就会出现下面的图标：

![选择了 Triad 配色方案](paletton4.png)

右上方的灰蓝色看起来不错。点击它，我们会发现它是 `#556E8D`。这将被用作强调色，在网站的标题、标签或其他指示器的高亮部分等处少量使用，以突出重点：

![选择了 Traid 配色方案](paletton-color-detail.png)

现在，我们有了基础色和强调色。此外，我们还为每种颜色准备了一些互补色调，以备渐变等用途。这些颜色可以以多种格式导出，以便使用。

有了这些颜色之后，你可能还需要选择适当的中性色。通常的设计做法是尽量找到一个最佳点，既要有足够的对比度，使文字清晰可读，又要有足够的对比度，以免刺眼。在某种程度上很容易走得太远，因此在选定颜色并有使用实例后，一定要征求对颜色的反馈意见。如果对比度太低，文字会被背景冲淡，导致无法阅读；但如果对比度太高，用户可能会觉得网站花哨、不好看。

### 颜色、背景、对比度和印刷

在屏幕上看起来不错的内容，在纸上可能会大相径庭。此外，墨水可能很贵，如果用户要打印你的页面，他们不一定需要所有的背景之类的东西来耗费他们宝贵的墨水，因为最重要的是文本本身。大多数浏览器默认情况下都会在打印文档时移除背景图片。

如果你的背景颜色和图像是经过精心挑选的，并且/或者对内容的实用性至关重要，可以使用 CSS {{cssxref("print-color-adjust")}} 属性来告诉浏览器不要对内容的外观进行调整。

`print-color-adjust` 的默认值为 `economy`，表示允许浏览器根据文档绘制到的输出设备类型，在其认为必要时更改外观，以尽量优化内容的可读性和/或打印经济性。

可以将 `print-color-adjust` 设置为 `exact`，以便告诉浏览器，你使用该功能的一个或多个元素是专门设计的，可以在颜色和图像保持原样的情况下达到最佳效果。有了这个设置，浏览器就不会篡改元素的外观，而是按照 CSS 的指示来绘制。

> [!NOTE]
> 不过，并不能保证 `print-color-adjust: exact` 就能完全按照给定的方式使用 CSS。如果浏览器提供了更改输出的用户首选项（如打印对话框中的“不打印背景”复选框），则该首选项会覆盖 `print-color-adjust` 的值。

## 参见

- [绘制图形](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
- [Web 上的图形](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_images#web_上的其他图形)
- [CSS 颜色模块](/zh-CN/docs/Web/CSS/CSS_colors)
