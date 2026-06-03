---
title: 弹性盒子
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[弹性盒子](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)是一种用于按行或按列布局元素的一维布局方法。元素可以伸展以填充额外的空间，或收缩以适应较小的空间。本文将解释所有的基础知识。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        了解<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >使用 HTML 组织内容</a
        >、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS 样式基础</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals">基础文本和字体样式</a>，熟悉 <a href="/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS 布局基础概念</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>弹性盒子的目的——在一维方向上灵活布局一组块级或行内元素。</li>
          <li>弹性布局术语——弹性容器、弹性项目、主轴和交叉轴。</li>
          <li>了解 <code>display: flex</code> 默认提供的效果。</li>
          <li>如何将内容换行换列。</li>
          <li>弹性项目尺寸调整与排序。</li>
          <li>内容对齐与排列。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 为什么使用弹性盒子

CSS 弹性盒子布局可让你：

- 将内容块在父容器内垂直居中。
- 让容器的所有子元素均分可用宽度/高度，无论可用宽度/高度有多少。
- 使多栏布局中的所有列采用相同的高度，即使它们包含的内容量不同。

弹性盒子特性可能是满足一维布局需求的完美解决方案。让我们深入探讨，一探究竟！

> [!NOTE]
> Scrimba 的 [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) 入门指南 <sup>[_MDN 学习合作伙伴_](/zh-CN/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> 提供了一份交互式指南，介绍了弹性盒子在 Web 中的广泛应用及其学习的重要性，并通过一个典型用例展示弹性盒子的强大功能。

## 一个简单的例子

在本文中，你将通过一系列练习来了解弹性盒子的工作原理。开始之前，请先将 HTML 和 CSS 文件保存到本地。在现代浏览器（如 Firefox 或 Chrome）中加载这些文件，并在代码编辑器中查看代码。或者，点击“运行”按钮在代码演练场中打开它们。

```html live-sample___flexbox_0
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css live-sample___flexbox_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* 在这里添加弹性盒子 CSS */
```

{{EmbedLiveSample("flexbox_0", "100", "415")}}

你可以看到这个页面有一个含有顶级标题的 {{htmlelement("header")}} 元素，和一个包含三个 {{htmlelement("article")}} 的 {{htmlelement("section")}}。我们将使用这些来创建相当标准的三列布局。

## 指定哪些元素应作为弹性盒子进行布局

首先，我们需要选择将哪些元素将设置为弹性盒子。为此，我们需要在目标元素的父元素上设置一个特殊的 {{cssxref("display")}} 值。在本例中，我们需要对 {{htmlelement("article")}} 元素进行布局，因此将该属性设置在 {{htmlelement("section")}} 上：

```html hidden live-sample___flexbox_1
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* 在这里添加弹性盒子 CSS */
```

```css live-sample___flexbox_1
section {
  display: flex;
}
```

这会使 `<section>` 元素成为一个**弹性容器**，其子元素则成为**弹性项目**。效果如下：

{{EmbedLiveSample("flexbox_1", "100", "210")}}

这一行声明就满足了我们所有需求。太神奇了，对吧？我们得到了一个多列布局，所有列的宽度相等，高度也完全一致。这是因为弹性项目（弹性容器的子元素）的默认值正是为了解决此类常见问题而设计的。

让我们回顾一下这里发生了什么。为元素添加 `display: flex` 值，会将其转换为弹性容器。就其与页面其余部分的交互方式而言，该容器被视为[块级内容](/zh-CN/docs/Glossary/Block-level_content)。当元素转换为弹性容器时，其子元素也会被转换为（并按弹性项目进行布局）弹性项目。

你可以使用[外部 `display` 值](/zh-CN/docs/Web/CSS/Reference/Properties/display#外部表现)（例如 `display: inline flex`）将容器设置为行内布局，这会影响容器本身在页面中的布局方式。旧版 `inline-flex` 显示值同样会将容器显示为行内元素。本教程将重点探讨容器内内容的行为，但若想了解行内布局与块级布局的效果差异，可查阅 `display` 属性页面上的[值比较](/zh-CN/docs/Web/CSS/Reference/Properties/display#比较_display_的值)。

接下来的章节将更详细地解释什么是弹性项目，以及当你将一个元素设为弹性容器时，该元素内部会发生什么。

## 弹性布局模型

当元素作为弹性布局项进行布局时，它们会沿着两个轴来布局：

![在从左到右的语言环境中，三个弹性项目在弹性容器中并排布局。主轴——即弹性项目布局方向上的弹性容器轴——为水平方向。主轴的两端分别为 main-start 和 main-end，分别位于左侧和右侧。交叉轴为垂直方向，与主轴垂直。交叉轴的两端分别为 cross-start 和 cross-end，分别位于顶部和底部。弹性项目沿主轴的长度（在此情况下即宽度）称为主尺寸，沿交叉轴的长度（在此情况下即高度）称为交叉尺寸。](flex_terms.png)

- **主轴**（main axis）是指沿弹性项目布局方向延伸的轴（例如，横跨页面的一行，或纵向排列的一列）。该轴的起始点和终点分别称为**主起始点**和**主终点**。从主起始点边缘到主终点边缘的长度即为**主尺寸**。
- **交叉轴**（cross axis）是指与弹性项目布局方向垂直的轴。该轴的起始点和终点分别称为**交叉起始点**和**交叉终点**。从交叉起始点到交叉终点的长度即为**交叉尺寸**。
- 设置了 `display: flex` 的父元素（在本例中是 {{htmlelement("section")}}）被称之为**弹性容器**（flex container）。
- 在弹性容器内作为弹性盒布局的项目称为**弹性项目**（flex item）（本例中是 {{htmlelement("article")}} 元素）。

了解这些术语以便你阅读后续章节。如果你对使用的任何术语感到困惑，你可以随时返回这里。

## 列还是行？

弹性盒子提供了 {{cssxref("flex-direction")}} 这样一个属性，它可以指定主轴的方向（弹性盒子子类放置的地方）——它默认值是 `row`，这使得它们在按你浏览器的默认语言方向（在英语/中文浏览器中，是从左到右）排成一行。

尝试将以下声明添加到 {{htmlelement("section")}} 元素的 css 规则里：

```css
flex-direction: column;
```

你会看到，这会将那些元素设置为列布局，就像我们添加这些 CSS 之前。在继续之前，请从示例中删除此规则。

> [!NOTE]
> 你还可以使用 `row-reverse` 和 `column-reverse` 值反向排列弹性项目。用这些值试试看吧！

## 换行

在布局中使用固定宽度或高度时，会出现一个问题：最终，Flexbox 的子元素会溢出其容器，从而破坏布局。在下面的示例中，我们有 5 个 {{htmlelement("article")}}，由于它们的 `min-width` 属性设置为 `400px`，因此无法完全容纳，从而产生了水平滚动条。

```html hidden live-sample___flex-wrap_0
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第四篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第五篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

{{EmbedLiveSample("flex-wrap_0", "100", "230")}}

这里我们可以看到，子元素确实超出了容器的边界。默认情况下，如果 `flex-direction` 设置为 `row`，浏览器会尝试将所有弹性项目排列在一行中；如果 `flex-direction` 设置为 `column`，则会尝试排列在一列中。

```html hidden live-sample___flex-wrap_1
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第四篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第五篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

解决此问题的一种方法是在 {{htmlelement("section")}} 规则中添加以下声明：

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

你会发现，加入这一部分后，布局效果会好得多：

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

现在我们有了多行布局。每行都会合理地容纳尽可能多的弹性盒子子元素。任何溢出的内容都会移至下一行。

我们还可以进一步调整。首先，改变 {{cssxref("flex-direction")}} 属性值为 `row-reverse`。现在你会发现，多行布局依然存在，但布局起点已切换至浏览器窗口的对角线另一端，且内容流向也发生了逆转。

## flex-flow 简写

到这里，应当注意到存在 {{cssxref("flex-direction")}} 和 {{cssxref("flex-wrap")}} 的的简写形式：{{cssxref("flex-flow")}}。比如，你可以将

```css
flex-direction: row;
flex-wrap: wrap;
```

替换为

```css
flex-flow: row wrap;
```

## 弹性项目的动态尺寸

现在让我们回到第一个示例，看看如何控制弹性项目相对于其他弹性项目所占的空间比例。

```html hidden live-sample___flexbox_2
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_2
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

在本地副本中，将以下规则添加到 CSS 文件末尾：

```css live-sample___flexbox_2
article {
  flex: 1;
}
```

{{EmbedLiveSample("flexbox_2", "100", "210")}}

这是一个无单位的比例值，表示每个 flex 项沿主轴的可用空间大小。本例中，我们设置 {{htmlelement("article")}} 元素的 flex 值为 `1`，这表示每个元素占用空间都是相等的，占用的空间是在设置内外边距之后剩余的空间。该值将按比例分配给各个弹性项目：如果将每个弹性项目的值设为 `400000`，效果将完全相同。

```html hidden live-sample___flexbox_3
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_3
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
article {
  flex: 1;
}
```

现在在上一个规则后面添加：

```css
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

现在当你刷新，你会看到第三个 {{htmlelement("article")}} 占用的可用宽度是另外两个的两倍。目前总共有四个比例单位可用（因为 1 + 1 + 2 = 4）。前两个弹性项目各占一个单位，因此它们各自占据可用空间的 1/4。第三个项目占两个单位，因此它占据了可用空间的 2/4（即一半）。

你还可以指定 flex 的最小值。尝试修改现有的 article 规则如下：

```html hidden live-sample___flexbox_4
<header>
  <h1>弹性盒子示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第三篇文章</h2>
    <p>内容</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_4
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

```css live-sample___flexbox_4
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 2 100px;
}
```

这表示“每个 flex 项将首先给出 `100px` 的可用空间，然后，剩余的可用空间将根据分配的比例共享”。尝试刷新，你会看到分配空间的差别。

{{EmbedLiveSample("flexbox_4", "100", "210")}}

所有弹性项目都有 100 像素的最小宽度——这是通过“flex”属性设置的。前两个弹性项目的 flex 值为 1，第三个弹性项目的 flex 值为 2。这将弹性容器中的剩余空间划分为 4 个比例单位。前两个弹性项目各分配 1 个单位，第三个弹性项目分配 2 个单位，因此第三个弹性项目的宽度大于另外两个（它们的宽度相同）。

弹性盒子的真正价值体现在其灵活性与响应性上。无论调整浏览器窗口大小，还是添加另一个 {{htmlelement("article")}} 元素，布局都能保持正常运行。

## flex：简写与全称

{{cssxref("flex")}} 是一个可以指定最多三个不同值的简写属性：

- 第一个就是上面所讨论过的无单位比例。可以单独指定 {{cssxref("flex-grow")}} 全称属性的值。
- 第二个无单位比例值——{{cssxref("flex-shrink")}}——一般用于溢出容器的弹性项目。这指定了从每个弹性项目中取出多少溢出量，以阻止它们溢出它们的容器。这是一个相当高级的弹性盒子特性，我们不会在本文中进一步说明。
- 第三个是上面讨论的最小值。可以单独指定 {{cssxref("flex-basis")}} 全称属性的值。

我们建议不要使用 flex 全称属性，除非你真的需要（比如要去覆盖之前写的）。使用全称属性会多写很多的代码，它们也可能有点让人困惑。

## 水平和垂直对齐

还可以使用弹性盒子的功能让弹性项目沿主轴或交叉轴对齐。让我们一起看一下新例子：

```html live-sample___flex-align_0
<div>
  <button>微笑</button>
  <button>大笑</button>
  <button>眨眼</button>
  <button>耸肩</button>
  <button>脸红</button>
</div>
```

```css live-sample___flex-align_0
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* 在这里添加弹性盒子 CSS */
```

我们将把它改造成一个整洁且灵活的按钮/工具栏。目前，你会看到一条水平菜单栏，上面的一些按钮被挤在左上角。

{{EmbedLiveSample("flex-align_0", "100", "125")}}

首先，将此示例下载到本地。

现在，请在示例 CSS 的末尾添加以下内容：

```html hidden live-sample___flex-align_1
<div>
  <button>微笑</button>
  <button>大笑</button>
  <button>眨眼</button>
  <button>耸肩</button>
  <button>脸红</button>
</div>
```

```css hidden live-sample___flex-align_1
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* 在这里添加弹性盒子 CSS */
```

```css live-sample___flex-align_1
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

刷新一下页面，你就会看到这些按钮很好的垂直水平居中了。我们是通过两个新的属性做到的。通过将 `align-items` 属性设置为 `center`，弹性项目被定位在交叉轴的中心。通过将 `justify-content` 属性设置为 `space-around`，弹性项目在主轴上均匀分布。

{{cssxref("align-items")}} 控制弹性项目在交叉轴上的位置。

- 默认情况下，`normal` 值在弹性盒子中表现为 `stretch`。这会将所有弹性项目沿交叉轴方向拉伸以填满父容器。如果父容器在交叉轴方向上没有固定尺寸，那么所有弹性项目的高度（或宽度）都会与最高的（或最宽的）弹性项目一致。这就是为什么我们在第一个示例中默认得到了高度相等的列。
- 我们在上述代码中使用的 `center` 值会让项目保持其固有尺寸，但沿横向轴居中。这就是为什么当前示例中的按钮在垂直方向上居中的原因。
- 你还可以使用 `flex-start`、`self-start` 或 `start` 以及 `flex-end`、`self-end` 或 `end` 这样的值，它们将分别将所有项目对齐到横向轴的起始端和结束端。`baseline` 值将根据弹性项目的基线进行对齐；基本上，每个弹性项目第一行文本的底部将与那个基线到横向起始点距离最大的元素的第一行底部对齐。详见 {{cssxref("align-items")}}。

你可以通过为单个弹性布局项应用 {{cssxref("align-self")}} 属性，来覆盖 {{cssxref("align-items")}} 的行为。例如，请尝试在 CSS 中添加以下内容：

```html hidden live-sample___flex-align_2
<div>
  <button>微笑</button>
  <button>大笑</button>
  <button>眨眼</button>
  <button>耸肩</button>
  <button>脸红</button>
</div>
```

```css hidden live-sample___flex-align_2
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* 在这里添加弹性盒子 CSS */
```

```css live-sample___flex-align_2
button:first-child {
  align-self: flex-end;
}
```

看看这会产生什么效果，完成后再将其删除。

{{cssxref("justify-content")}} 控制弹性项目在主轴上的位置。

- 默认值为 `normal`，其行为与 `start` 相同，即让所有项目位于主轴的起始端。
- 可以使用 `end` 或 `flex-end` 让它们位于主轴的末端。
- `left` 和 `right` 的行为取决于书写模式的方向，分别对应 `start` 或 `end`。
- `center` 也是 `justify-content` 的一个取值。它会使弹性项目位于主轴的中心。
- 上文中使用的 `space-around` 非常实用——它会将所有项目均匀地分布在主轴上，并在两端各留出一小段间距。
- 还有另一个值 `space-between`，它与 `space-around` 非常相似，区别在于它不会在两端留出任何间距。

在弹性盒布局中，{{cssxref("justify-items")}} 属性将被忽略。

在继续下面之前，多多使用提到过的属性吧，看看它们的效果。

## 弹性项目排序

弹性盒子还提供了一种特性，可以在不影响源代码顺序的情况下更改弹性项的布局顺序。这也是传统布局方法无法实现的。

请尝试在按钮栏示例代码中添加以下 CSS：

```css
button:first-child {
  order: 1;
}
```

刷新下，然后你会看到“微笑”按钮移动到了主轴的末尾。下面我们谈下它实现的一些细节：

- 所有弹性项目默认的 {{cssxref("order")}} 值是 0。
- order 值大的 flex 项比 order 值小的在显示顺序中更靠后。
- 相同 order 值的 flex 项按源代码顺序显示。所以假如你有四个元素，其 order 值分别是 `2`，`1`，`1` 和 `0`，那么它们的显示顺序就分别是第四，第二，第三，和第一。
- 第三个元素显示在第二个后面是因为它们的 order 值一样，且第三个元素在源代码顺序中排在第二个后面。

你也可以给 order 设置负值使它们比值为 0 的元素排得更前面。比如，你可以设置“脸红”按钮排在主轴的最前面：

```css
button:last-child {
  order: -1;
}
```

虽然可以使用 `order` 属性更改顺序，但 Tab 键的焦点顺序仍与代码中的顺序一致。更改可聚焦元素的顺序可能会对键盘用户的可用性产生负面影响！

## 嵌套弹性盒子

使用弹性盒子可以创建相当复杂的布局。将一个弹性项目同时设置为弹性容器是完全可以的，这样它的子元素也会像弹性盒子一样进行布局。

```html hidden live-sample___flex-nesting
<header>
  <h1>复杂的弹性盒示例</h1>
</header>
<section>
  <article>
    <h2>第一篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <h2>第二篇文章</h2>
    <p>内容</p>
  </article>
  <article>
    <div>
      <button>微笑</button>
      <button>大笑</button>
      <button>眨眼</button>
      <button>耸肩</button>
      <button>脸红</button>
    </div>
    <div>
      <p>第一段</p>
    </div>
    <div>
      <p>第二段</p>
    </div>
  </article>
</section>
```

```css hidden live-sample___flex-nesting
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  zoom: 0.8;
}
article {
  flex: 1 170px;
}
article:nth-of-type(3) {
  flex: 3 170px;
  display: flex;
  flex-flow: column;
}
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

{{EmbedLiveSample("flex-nesting", "100", "290")}}

这个复杂的布局包含几个既是弹性项目又是弹性容器的元素。其 HTML 代码相当简单。我们有一个 {{htmlelement("section")}} 元素，其中包含三个 {{htmlelement("article")}} 元素。第三个 {{htmlelement("article")}} 中包含三个 {{htmlelement("div")}} 元素，而第一个 {{htmlelement("div")}} 包含五个 {{htmlelement("button")}} 元素：

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

现在让我们看一下布局用到的代码。

首先，我们设置 {{htmlelement("section")}} 的子节点布局为弹性盒子。

```css
section {
  display: flex;
}
```

下面我们给 {{htmlelement("article")}} 元素设置 flex 值。特别注意这里的第二条 CSS 规则——我们设置第三个 {{htmlelement("article")}} 也要将其子元素像弹性项目一样进行布局，但这次我们将它们以列的形式进行布局。

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

接下来，我们选择了第一个 {{htmlelement("div")}}。首先使用 `flex: 1 100px;` 简单的给它一个最小的高度 100px，然后设置它的子节点（{{htmlelement("button")}} 元素）为弹性项目。在这里我们将它们放在一个包装行中，使它们居中对齐，就像我们在前面看到的单个按钮示例中做的那样。

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

最后，我们为按钮设置了一些尺寸。这次我们为其赋予了 `1 auto` 的 flex 值。这会产生一个非常有趣的效果，如果你尝试调整浏览器窗口的宽度，就会看到。按钮会尽可能地占据空间。同一行中会排列尽可能多的按钮，直到布局看起来舒适为止；超过这个数量时，它们就会换行。

```css
button {
  flex: 1;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## 总结

至此，我们对弹性盒子基础知识的介绍就到此结束。希望你在学习过程中感到有趣，并在后续学习中多加实践。在下一篇文章中，我们将提供一些测试题，供你检验自己对这些知识的掌握和记忆情况。

## 参见

- [弹性盒子的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [在弹性容器中对齐项目](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [弹性项目排序](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [控制主轴上弹性项目的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)模块
- [CSS 弹性盒子技巧](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)——一篇以视觉吸引人的方式解释弹性盒子所有内容的文章
- [弹性盒子青蛙游戏](https://flexboxfroggy.com/)——学习和更好地了解弹性盒子基础知识的教育游戏

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
