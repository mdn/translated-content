---
title: 样式化表格
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

为 HTML 表格设计样式并不是世界上最光彩的工作，但有时我们不得不这么做。本文将介绍如何让 HTML 表格看起来更美观，并重点介绍一些具体的表格样式设计技巧。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        HTML 基础（学习
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 简介</a
        >），具有 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics">HTML 表格</a>基础，理解 CSS 工作原理（学习 CSS 第一步）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何有效地设计 HTML 表格样式。</td>
    </tr>
  </tbody>
</table>

## 一个典型的 HTML 表格

让我们从一个典型的 HTML 表格开始——“典型”的意思是说，大多数 HTML 表格都是关于鞋子、天气或员工的。我们决定通过制作英国著名的朋克乐队来让事情变得更有趣。标记如下：

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

    <!-- several other great bands -->

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

由于使用了 [`scope`](/zh-CN/docs/Web/HTML/Reference/Elements/th#scope)、{{htmlelement("caption")}}、{{htmlelement("thead")}}、{{htmlelement("tbody")}} 等特性，该表格标记得很好，易于风格化和访问。遗憾的是，在屏幕上呈现出来的效果并不好（请在 [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html) 上查看实时效果）：

![一个显示英国著名朋克乐队的表格，没有添加样式](table-unstyled.png)

仅使用默认的浏览器样式，它看起来很拥挤，难以阅读，而且很无聊。我们需要使用 CSS 来解决这个问题。

## 为表格添加样式

让我们一起来为我们的表格示例添加样式。

1. 首先，复制[实例标记](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html)到本地，下载这两个图像（[noise](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) 和 [leopardskin](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg)），然后将三个文件放在本地计算机的某个工作目录中。
2. 接下来，创建一个名为 `style.css` 的新文件，并将其保存在与其他文件相同的目录中。
3. 将 CSS 链接到 HTML 中，将下面的 HTML 代码放到 HTML 的 {{htmlelement("head")}} 中：

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

### 间距和布局

我们需要做的第一件事是整理出空间/布局——默认的表格样式是如此的拥挤！要做到这一点，请将以下 CSS 添加到你的 `style.css` 文件：

```css
/* 间距 */

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

最重要的部分如下：

- 在你的表格上，给 {{cssxref("table-layout")}} 属性设置 `fixed` 值通常是一个好主意，因为它使表格的行为在默认情况下更可预测。通常情况下，表格列的尺寸会根据所包含的内容大小而变化，这会产生一些奇怪的结果。通过 `table-layout: fixed`，你可以根据列标题的宽度来规定列的宽度，然后适当地处理它们的内容。因此，我们使用 `thead th:nth-child(n)`（{{cssxref(":nth-child")}}）选择器，选择了 {{htmlelement("thead")}} 元素中 {{htmlelement("th")}} 的第 n 个子元素）选择了四个不同的标题，并为它们设置了百分比宽度。整个列宽度与列标题的宽度是一样的，这是一种很好的设定表格列尺寸的方式。Chris Coyier 在[固定表格布局](https://css-tricks.com/fixing-tables-long-strings/)中更详细地讨论了这一技术。

  我们将这些样式与 100% 的 {{cssxref("width")}} 结合在一起，这意味着表格将填满它所放置的任何容器，并能很好地响应（尽管还需要再做一些工作，才能在窄屏幕宽度上看起来不错）。

- 为 {{cssxref("border-collapse")}} 属性设置 `collapse` 值对于任何表格样式的工作来说都是一个标准的最佳实践。默认情况下，当你在表格元素上设置边框时，它们之间将会有间隔，如下图所示：![默认边框间距为 2x2 的表格，显示无边框折叠](no-border-collapse.png)这看起来不太好（虽然可能是你想要的样子，谁知道呢？）。使用 `border-collapse: collapse;`，让边框合为一条，现在看起来好多了：![一个 2x2 的表格，其 border-collapse 属性设置为 collapse，边框合为一条线](border-collapse.png)
- 我们在整个表格周围设置了 {{cssxref("border")}}，这是必要的，因为我们将在表格页眉和页脚后面设置一些边框——当你在表格外面没有一个边界而且以空隙结尾的时候，它看起来很奇怪，而且是不连贯的。
- 我们在 {{htmlelement("th")}} 和 {{htmlelement("td")}} 元素上设置了一些 {{cssxref("padding")}}——这些元素使数据项有了一些空间，使表格看起来更加清晰。

此刻，我们的表格看起来好多了：

![一个半样式的表格，其中的间距使数据更加清晰，并显示了英国著名朋克乐队的概况](table-with-spacing.png)

### 一些简单的排版

现在我们把文字整理一下。

首先，我们在 [Google 字体](https://fonts.google.com)上找到了一种适合于朋克乐队的字体。如果你愿意，你可以去那里找一个不同的；你只需将我们提供的 {{htmlelement("link")}} 元素和自定义 {{cssxref("font-family")}} 声明替换为 Google 字体提供的声明即可。

首先，将下面的 {{htmlelement("link")}} 元素添加到你的 HTML 头部，就在你现有的 `<link>` 元素之上：

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

现在将下面的 CSS 添加到你的 `style.css` 文件，在之前内容后面添加：

```css
/* 排版 */

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

- 我们已经设置了一个全局无衬线字体；这纯粹是一种风格上的选择。我们还在 {{htmlelement("thead")}} 和 {{htmlelement("tfoot")}} 元素的标题上设置了自定义字体，这是一种很不错的、很有朋克风格的外观。
- 我们在标题和单元格上设置了一些 {{cssxref("letter-spacing")}}，因为我们觉得它有助于提高可读性。再次强调，这主要是一种风格上的选择。
- 我们在 {{htmlelement("tbody")}} 中的表格单元中对文本进行了居中对齐，使它们与标题对齐。默认情况下，单元格的 {{cssxref("text-align")}} 设置为 `left` 值，并且标题设置为 `center` 值，但是通常情况下，让两者对齐看起来更好。标题字体的默认粗体值足以区分它们的外观。
- 我们在 {{htmlelement("tfoot")}} 中对标题进行了右对齐，以便与它的数据点更好地关联。

结果看起来更整洁一些：

![使用全局无衬线字体和良好间距的样式表格，使数据更加清晰易读，并显示了英国著名朋克乐队的摘要](table-with-typography.png)

### 图形和颜色

现在轮到图形和颜色了！因为表格上充满“朋克“和“个性”，我们需要给它再搭配一些鲜艳的造型。别担心，你不必让你的表格“燥起来”，你可以选择一些更巧妙、更有品位的东西。

首先将下面的 CSS 添加到 `style.css` 文件中，在底部添加：

```css
/* 图形和颜色 */

thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 10%), rgb(0 0 0 / 50%));
  border: 3px solid purple;
}
```

同样，对于表格这里没有什么特别的，但有几件事值得注意。

我们已经将 {{cssxref("background-image")}} 声明添加到 {{htmlelement("thead")}} 和 {{htmlelement("tfoot")}}，并将页眉和页脚的所有文本颜色 {{cssxref("color")}} 更改为白色（并给它一个{{cssxref("text-shadow")}}），这样它的可读性就更好了。你应该确保你的文字与你的背景形成鲜明的对比，使得它是可读的。

我们还为 {{htmlelement("th")}} 和 {{htmlelement("td")}} 添加了一个线性渐变，在页眉和页脚中添加了一个漂亮的纹理，同时也为这些元素提供了一个明亮的紫色边框。有多个嵌套的元素是很有用的，这样你就可以将样式层叠在一起。是的，我们可以通过设置多组背景图像属性值来在 {{htmlelement("thead")}} 和 {{htmlelement("tfoot")}} 元素上同时使用背景图像和线性渐变，但是我们决定分开使用，因为考虑到不支持多个背景图像或线性渐变的老浏览器。

#### 斑马条纹

我们想用一个单独的部分来展示如何实现**斑马条纹**——通过改变不同数据行的颜色，使表格中交替行不同的数据行可以更容易地进行解析和读取。将下面的 CSS 添加到你的 `style.css` 文件底部：

```css
/* 斑马条纹 */

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

- 你在前面看到了 {{cssxref(":nth-child")}} 选择器用于选择特定的子元素。它也可以用一个公式作为参数，来选择一个元素序列。公式 `2n-1` 会选择所有奇数的子元素（第一个、第三个、第五个等），而公式 `2n` 会选择所有偶数的子元素（第二个、第四个、第六个等）。我们在代码中使用了 `odd` 和 `even` 关键字，这与前面提到的公式作用完全相同。在这里，我们给奇数行和偶数行不同的（醒目的）颜色。
- 我们还为所有的行添加了一个重复的噪点背景色块（一个半透明的 `.png`，有一点视觉上的扭曲）来提供一些纹理。
- 最后，我们给整个表格提供了一个纯的背景颜色，这样不支持 `:nth-child` 选择器的浏览器仍然有它们的正文行的背景。

这种颜色爆炸的结果如下：

![表格样式精良，正文行的背景为重复背景，整个表格为纯色背景，使显示英国著名朋克乐队摘要的数据更吸引人](table-with-color.png)

现在，这可能有点过头不符合你的品味，但我们在这里想要指出的一点是，表格并非只能是枯燥无味的，学术性的。

### 样式化标题

对我们的表格还有最后一点处理——样式化标题。要做到这一点，请将以下内容添加到你的 `style.css` 文件底部：

```css
/* 标题 */

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

这里没有什么值得注意的地方，除了 {{cssxref("caption-side")}} 属性，它被设置为 `bottom` 值。这就导致标题被放置在表格的底部，与其他声明一起提供了最后的外观（见预览版 [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)）：

![样式表格下方的白色背景，包含表格内容的标题。例如“英国著名朋克乐队汇总”](table-with-caption.png)

## 表格样式化小贴士

在继续讨论之前，我们想先为你快速列出上述最有用的要点：

- 使你的表格标记尽可能简单，并且保持灵活性（例如使用百分比），这样设计就更有响应性。
- 使用 {{cssxref("table-layout", "table-layout: fixed")}} 创建更可控的表格布局，可以通过在表头（{{htmlelement("th")}}）中设置 {{cssxref("width")}} 来轻松设置列的宽度。
- 使用 {{cssxref("border-collapse", "border-collapse: collapse")}} 使表格元素边框合并，生成一个更整洁、更易于控制的外观。
- 使用 {{htmlelement("thead")}}、{{htmlelement("tbody")}} 和 {{htmlelement("tfoot")}} 将表格分割成逻辑块，并提供额外的应用 CSS 的地方，因此如果需要的话，可以更容易地将样式层叠在一起。
- 使用斑马条纹来让其他行更容易阅读。
- 使用 {{cssxref("text-align")}} 将 {{htmlelement("th")}} 和 {{htmlelement("td")}} 文本对齐，这样会更整齐、更容易看懂。

## 技能测试！

我们在这篇文章里面讲了很多，但是你能记住最重要的信息吗？在继续学习之前，你可以通过一些进一步的测试来验证自己是否掌握了这些信息——参见[技能测试：表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)。

## 总结

现在，我们身后的表格样式令人炫目，令人兴奋，我们需要一些其他的东西来占据我们的时间。下一篇文章将介绍 [CSS 调试](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)，探索如何解决一些问题，例如布局看起来不像应该有的样子，或者属性在你认为应该应用的时候没有应用。那里包含了使用浏览器开发者工具寻找你的问题的解决方案的信息。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
