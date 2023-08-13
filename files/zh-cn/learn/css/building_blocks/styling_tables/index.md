---
title: 样式化表格
slug: Learn/CSS/Building_blocks/Styling_tables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_boxes/Borders", "Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes")}}

设计一个 HTML 表格不是世界上最迷人的工作，但有时我们必须这样做。本文提供了一个使 HTML 表格看起来不错的指南，其中一些功能在前面的文章中已作详细介绍。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        HTML 基础 (学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), HTML 表格 (见 HTML 表格模块 (TBD))，了解 CSS 工作原理 (study
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何有效地对 HTML 表格进行样式化。</td>
    </tr>
  </tbody>
</table>

## 一个典型的 HTML 表格

让我们从一个典型的 HTML 表格开始。恩，我说典型——大多数 HTML 表格都是关于鞋子，天气，或者员工的。我们决定通过制作英国著名的朋克乐队来让事情变得更有趣。标记看起来是这样的

```html
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>

    ... some rows removed for brevity

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

由于[`scope`](/zh-CN/docs/Web/HTML/Element/th#scope)、{{htmlelement("caption")}}、{{htmlelement("thead")}}、{{htmlelement("tbody")}}等特性，表格被很好地标记了，易于使用，并且易于访问，不幸的是，它在屏幕上呈现时看起来不太好（见它的预览版 [punk-bands-unstyled.html](http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)）：

![](table-unstyled.png)

它看起来很拥挤，很难阅读，也很无聊。我们需要使用一些 CSS 来解决这个问题。

## 自主学习：样式化我们的表格

在这个自主学习部分中，我们将一起来样式化我们的表格。

1. 首先，复制[实例标记](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html)到本地，下载这两个图像 ([noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png)和 [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg))，然后将三个结果文件放在本地计算机的某个工作目录中。
2. 接下来，创建一个名为`style.css`的新文件并将其保存在与其他文件相同的目录中。
3. 将 CSS 链接到 HTML 中，将下面的 HTML 代码放到 HTML 的{{htmlelement("head")}}中：

```html
<link href="style.css" rel="stylesheet" type="text/css" />
```

### 间距和布局

我们需要做的第一件事是整理出空间/布局——默认的表格样式是如此的拥挤！要做到这一点，请将以下 CSS 添加到您的 `style.css` 文件：

```css
/* spacing */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}
```

需要注意的最重要的部分如下：

- 在你的表上，给{{cssxref("table-layout")}}属性设置一个为`fixed`的值通常是一个好主意，因为它使表的行为在默认情况下更可预测。通常情况下，表列的尺寸会根据所包含的内容大小而变化，这会产生一些奇怪的结果。通过 `table-layout: fixed`，您可以根据列标题的宽度来规定列的宽度，然后适当地处理它们的内容。这就是为什么我们使用了`thead th:nth-child(n)` 选择了四个不同的标题 ({{cssxref(":nth-child")}}) 选择器（“选择第 n 个子元素，它是一个顺序排列的{{htmlelement("th")}}元素，且其父元素是{{htmlelement("thead")}}元素”）并给定了它们的百分比宽度。整个列宽度与列标题的宽度是一样的，这是一种很好的设定表列尺寸的方式。Chris Coyier 在[Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/)中更详细地讨论了这一技术。

  我们将它与一个 100% 的{{cssxref("width")}}组合在一起，这意味着该表将填充它放入的任何容器，并且能很好的响应（虽然它仍然需要更多的工作来让它在窄屏宽度上看起来很好）。

- 一个{{cssxref("border-collapse")}}属性的`collapse`值对于任何表样式的工作来说都是一个标准的最佳实践。默认情况下，当您在表元素上设置边框时，它们之间将会有间隔，如下图所示：![](no-border-collapse.png)这看起来不太好 (虽然可能是你想要的样子，谁知道呢？)。使用 `border-collapse: collapse;` ，让边框合为一条，现在看起来好多了：![](border-collapse.png)
- 我们在整个表设置了一个{{cssxref("border")}}，这是必要的，因为我们将在表页眉和页脚后面设置一些边框——当你在表格外面没有一个边界而且以空隙结尾的时候，它看起来很奇怪，而且是不连贯的。
- 我们在{{htmlelement("th")}}和{{htmlelement("td")}}元素上设置了一些{{cssxref("padding")}}——这些元素使数据项有了一些空间，使表看起来更加清晰。

此刻，我们的表看起来好多了：

![](table-with-spacing.png)

### 一些简单的排版：

现在我们把类型整理一下。

首先，我们在[Google Fonts](https://www.google.com/fonts)上找到了一种适合于朋克乐队的字体的字体。如果你愿意，你可以去那里找一个不同的。现在，您只需替换我们提供的{{htmlelement("link")}}元素和定制的{{cssxref("font-family")}}声明，并使用 Google 字体提供给您的内容。

首先，将下面的{{htmlelement("link")}}元素添加到您的 HTML 头部，就在您现有的 `<link>` 元素之上：

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

现在将下面的 CSS 添加到您的`style.css`文件，在之前内容后面添加：

```css
/* typography */

html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}
```

这里没有什么特别的东西。我们通常会对字体样式进行调整，使其更易于阅读：

- 我们已经设置了一个全局无衬线字体;这纯粹是一种风格上的选择。我们还在{{htmlelement("thead")}}和{{htmlelement("tfoot")}}元素的标题上设置了自定义字体，这是一种很不错的、很有朋克风格的外观。
- 我们在标题和单元格上设置了一些{{cssxref("letter-spacing")}}，因为我们觉得它有助于提高可读性。再次强调，这主要是一种风格上的选择。
- 我们在{{htmlelement("tbody")}}中的表格单元中对文本进行了居中对齐，使它们与标题对齐。默认情况下，单元格被赋予了一个{{cssxref("text-align")}}的`left`值，并且标题被赋予了一个`center`值，但是通常情况下，让两者对齐看起来更好。标题字体的默认粗体值足以区分它们的外观。
- 我们在{{htmlelement("tfoot")}}中对标题进行了右对齐，以便与它的数据点更好地关联。

结果看起来更整洁一些：

![](table-with-typography.png)

### 图形和颜色

现在轮到图形和颜色了！因为表格上充满“朋克“和“个性”，我们需要给它再搭配一些鲜艳的造型。别担心，你不必让你的表格”燥起来“，你可以选择一些更巧妙、更有品位的东西。

首先将下面的 CSS 添加到`style.css`文件中，在底部添加：

```plain
thead, tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th, tfoot th, tfoot td {
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  border: 3px solid purple;
}
```

同样，对于表格这里没有什么特别的，但有几件事值得注意。

我们已经将一个{{cssxref("background-image")}}添加到{{htmlelement("thead")}}和{{htmlelement("tfoot")}}，并将页眉和页脚的所有文本颜色{{cssxref("color")}}更改为白色 (并给它一个{{cssxref("text-shadow")}})，这样它的可读性就更好了。你应该确保你的文字与你的背景形成鲜明的对比，使得它是可读的。

我们还为{{htmlelement("th")}}和 {{htmlelement("td")}}添加了一个线性渐变，在页眉和页脚中添加了一个漂亮的纹理，同时也为这些元素提供了一个明亮的紫色边框。有多个嵌套的元素是很有用的，这样您就可以将样式层叠在一起。是的，我们可以通过设置多组背景图像属性值来在{{htmlelement("thead")}}和 {{htmlelement("tfoot")}}元素上同时使用背景图像和线性渐变，但是我们决定分开使用，因为考虑到不支持多个背景图像或线性渐变的老浏览器。

#### 斑马条纹图案

我们想用一个单独的部分来展示如何实现斑马条纹（**zebra stripes**）——通过改变不同数据行的颜色，使表中交替行不同的数据行可以更容易地进行解析和读取。将下面的 CSS 添加到您的 `style.css` 文件底部：

```css
tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- 您在前面看到了{{cssxref(":nth-child")}}选择器用于选择特定的子元素。它也可以用一个公式作为参数，来选择一个元素序列。公式`2n-1`会选择所有奇数的子元素 (1、3、5 等)，而公式`2n`会选择所有偶数的子元素 (2、4、6 等等)。我们在代码中使用了`odd`和`even`的关键字，这与前面提到的公式作用完全相同。在这里，我们给奇数行和偶数行不同的 (醒目的) 颜色。
- 我们还为所有的行添加了一个重复的噪点背景色块（一个半透明的`.png`，有一点视觉上的扭曲）来提供一些纹理。
- 最后，我们给整个表格提供了一个纯的背景颜色，这样浏览器不支持`:nth-child`选择器仍然有它们的正文行的背景。

这种颜色爆炸的结果如下：

![](table-with-color.png)

现在，这可能有点过头不符合你的品味，但我们在这里想要指出的一点是，表格并非只能是枯燥无味的，学术性的。

### 样式化标题

对我们的表格还有最后一点处理——样式化标题。要做到这一点，请将以下内容添加到您的`style.css` 文件底部：

```css
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

这里没有什么值得注意的地方，除了{{cssxref("caption-side")}}属性，它被赋予了一个`bottom`的值。这就导致标题被放置在表格的底部，与其他声明一起提供了最后的外观（见预览版[punk-bands-complete.html](http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)）：

![](table-with-caption.png)

## 自主学习：样式化你自己的表格

现在，我们希望您可以使用我们的示例表格 HTML(或者使用您自己的一些！)，并将其样式设计成比我们的表更好的设计和不那么花哨的东西。

## 表格样式小贴士

在继续之前，我们认为我们将为您提供一个快速列表，列出了上面提到的最有用的点：

- 使您的表格标记尽可能简单，并且保持灵活性，例如使用百分比，这样设计就更有响应性。
- 使用 {{cssxref("table-layout")}}`: fixed` 创建更可控的表布局，可以通过在标题{{cssxref("width")}}中设置{{cssxref("width")}}来轻松设置列的宽度。
- 使用 {{cssxref("border-collapse")}}`: collapse` 使表元素边框合并，生成一个更整洁、更易于控制的外观。
- 使用{{htmlelement("thead")}}, {{htmlelement("tbody")}}和{{htmlelement("tfoot")}} 将表格分割成逻辑块，并提供额外的应用 CSS 的地方，因此如果需要的话，可以更容易地将样式层叠在一起。
- 使用斑马线来让其他行更容易阅读。
- 使用 {{cssxref("text-align")}}直线对齐您的{{htmlelement("th")}}和{{htmlelement("td")}}文本，使内容更整洁、更易于跟随。

## 小试牛刀！

我们在这篇文章里面讲了很多，但是你能记住最重要的信息吗？你能找到些更进一步的测试，在你继续之前，想要验证你已经吸收了这些信息的话，请见[Test your skills: tables](/zh-CN/docs/Learn/CSS/Building_blocks/Tables_tasks)。

## 总结

现在，我们身后的表格样式令人炫目，令人兴奋，我们需要一些其他的东西来占据我们的时间。不要担心——下一章会介绍如何调试 CSS，如何解决诸如布局不能像所应该的那样进行呈现的问题，或者元素无法像你预料的那样生效的问题。那里包含了使用浏览器开发者工具寻找你的问题的解决方案的信息。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
