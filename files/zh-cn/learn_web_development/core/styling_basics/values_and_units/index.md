---
title: CSS 值和单位
short-title: 值和单位
slug: Learn_web_development/Core/Styling_basics/Values_and_units
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS 规则包含[声明](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction#css_声明)，而声明又由属性和值组成。在 CSS 中使用的每个属性都有一个**值类型**，用于描述该属性允许拥有何种类型的值。在本课中，我们将了解一些最常用的值类型、它们是什么以及如何起作用。

> [!NOTE]
> 每个 [CSS 属性页面](/zh-CN/docs/Web/CSS/Reference#索引)都有一个语法章节，其中列出了该属性可用的值类型。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        HTML 基础（学习
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基础 HTML 语法</a
        >）、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS 基础语法</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS 选择器</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>理解属性值可以有多种不同类型，以及这些类型所代表的含义。</li>
          <li>熟悉使用基本类型：数字、长度、百分比、颜色、图像、位置、字符串和标识符以及函数。</li>
          <li>理解绝对单位和相对单位是什么，以及它们之间的区别。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 什么是 CSS 的值？

在 CSS 规范和 MDN 的属性页上，你将能够发现**值类型**（value type）的存在，它们被尖括号（`<`、`>`）包围，如 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value) 或 {{cssxref("length")}}。当你看到值类型 `<color>` 对特定属性有效时，这意味着你可以使用任何有效的颜色作为该属性的值，如 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value) 参考页面所列。

有时值类型和属性可能具有相同或相似的名称——例如 {{cssxref("color")}} 属性和 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value) 数据类型。你可以使用尖括号来区分每种情况下你所研究的具体对象。HTML 元素也使用尖括号，但从上下文应该能清楚你所查看的是哪一个。如果你不确定，可以尝试在 MDN 上搜索它。

> [!NOTE]
> 你还将看到被称为*数据类型*（data type）的 CSS 值。这些术语基本上是可以互换的——当你在 CSS 中看到被称为数据类型的东西时，它实际上只是另一种表达*值类型*的方式。术语*值*（value）指的是你所选择的值类型所支持的任何特定表达式。

在下面的例子中，我们使用关键字设置标题的颜色，使用 `rgb()` 函数设置背景：

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

在 CSS 中，值类型是一种定义可使用的值的集合的方式。这意味着，如果你看到的 `<color>` 是有效的，那么你就不需要纠结要使用哪种颜色值类型——关键字、十六进制值或者 `rgb()` 函数。只要你的浏览器支持，你可以使用*任意*可用的 `<color>` 值。MDN 上每个值类型的页面都将提供有关浏览器支持的信息。例如，如果你查看 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value) 页面，你会看到浏览器兼容性部分列出了不同类型的颜色值以及对它们的支持情况。

让我们来看看你可能经常遇到的一些值和单位类型，并提供一些示例，以便你尝试使用各种值的可能性。

## 数值、长度和百分比

你可能会发现自己在 CSS 中使用了各种数值数据类型。以下全部归类为数值：

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">数据类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/CSS/Reference/Values/integer">&#x3C;integer></a></code>
      </td>
      <td>
        <code>&#x3C;integer></code> 是一个整数，比如 <code>1024</code> 或 <code>-55</code>。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/zh-CN/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></code>
      </td>
      <td>
        <code>&#x3C;number></code> 表示一个十进制数——它可能有小数部分，也可能没有。例如 <code>0.255</code>、<code>128</code> 或 <code>-1.2</code>。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/CSS/Reference/Values/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        <code>&#x3C;dimension></code> 是一个 <code>&#x3C;number></code>。它有一个附加的单位，例如 <code>45deg</code>、<code>5s</code> 或 <code>10px</code>。<code>&#x3C;dimension></code> 是一个伞形类别，包括
        <code><a href="/zh-CN/docs/Web/CSS/Reference/Values/length">&#x3C;length></a></code
        >、<code><a href="/zh-CN/docs/Web/CSS/Reference/Values/angle">&#x3C;angle></a></code
        >、<code><a href="/zh-CN/docs/Web/CSS/Reference/Values/time">&#x3C;time></a></code
        > 和
        <code
          ><a href="/zh-CN/docs/Web/CSS/Reference/Values/resolution">&#x3C;resolution></a></code
        >
        类型。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/CSS/Reference/Values/percentage">&#x3C;percentage></a></code
        >
      </td>
      <td>
        <code>&#x3C;percentage></code> 表示一些其他值的一部分，例如 <code>50%</code>。百分比值总是相对于另一个量。例如，一个元素的长度相对于其父元素的长度。
      </td>
    </tr>
  </tbody>
</table>

### 长度

最常见的数字类型是 {{cssxref("length")}}，例如 `10px`（像素）或 `30em`。CSS 中有两种类型的长度——相对长度和绝对长度。重要的是要知道它们之间的区别，以便理解它们控制的元素将变得有多大。

#### 绝对长度单位

以下都是**绝对**长度单位——它们与其他任何东西都没有关系，通常被认为总是相同的大小。

| 单位 | 名称         | 等价换算                |
| ---- | ------------ | ----------------------- |
| `cm` | 厘米         | 1cm = 37.8px            |
| `mm` | 毫米         | 1mm = 3.78px            |
| `Q`  | 四分之一毫米 | 1Q = 0.945px = 0.25mm   |
| `in` | 英寸         | 1in = 96px = 2.54cm     |
| `pc` | 派卡         | 1pc = 16px ≈ 0.4233cm   |
| `pt` | 磅           | 1pt = 4/3 px ≈ 0.3527mm |
| `px` | 像素         | 1px ≈ 0.2646mm          |

这些单位大多在用于印刷而非屏幕输出时更有用。例如，我们通常不在屏幕上使用 `cm`（厘米）。你唯一应该常用的值是 `px`（像素） 。

#### 相对长度单位

相对长度单位是相对于其他某些东西的。例如：

- `em` 相对于本元素的字体大小，或者在用于 {{cssxref("font-size")}} 时相对于父元素的字体大小。`rem` 相对于根元素的字体大小。
- `vh` 和 `vw` 分别相对于视口的高度和宽度。

使用相对单位的好处是，通过一些精心的规划，你可以使文本或其他元素的大小相对于页面上的任何指定的东西进行缩放。要获取可用的相对单位的完整列表，请参阅 {{cssxref("length")}} 类型的参考页面。

在本节中，我们将探讨一些最常见的相对单位。

#### 探索一个例子

在下面的示例中，你可以看到一些相对长度单位和绝对长度单位的行为。第一个盒子以像素为单位设置 {{cssxref("width")}}。作为一个绝对单位，无论其他地方如何变化，这个宽度将保持不变。

第二个盒子的宽度设置为 `vw`（视口宽度）单位。这个值相对于视口宽度，所以 `10vw` 是视口宽度的 10%。如果你更改浏览器窗口的宽度，那么框的大小应该会更改。但是，这个示例使用 [`<iframe>`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe) 嵌入到页面中，所以这不会起作用。要查看实际情况，你必须[在打开示例的浏览器选项卡后尝试该示例](https://mdn.github.io/css-examples/learn/values-units/length.html)。

第三个盒子使用 `em` 单位。这些是相对于字体大小的。我在包含 {{htmlelement("div")}} 的元素上设置了一个 `1em` 的字体大小，它有一个 `.wrapper` 类。将这个值更改为 `1.5em`，你将看到所有元素的字体大小都增加了，但是只有最后一项会变宽，因为宽度相对于字体大小。

按照上面的说明操作之后，尝试以其他方式处理这些值，看看你将收获什么。

```html live-sample___length
<div class="wrapper">
  <div class="box px">我的宽度为 200px</div>
  <div class="box vw">我的宽度为 10vw</div>
  <div class="box em">我的宽度为 10em</div>
</div>
```

```css live-sample___length
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

{{EmbedLiveSample("length", "", "250px")}}

#### em 和 rem

`em` 和 `rem` 是调整任何大小（譬如盒子或文本）时最常用的两个相对长度单位。理解它们的工作原理及区别非常重要，尤其是在学习更复杂的主题时，比如[样式化文本](/zh-CN/docs/Learn_web_development/Core/Text_styling)或 [CSS 布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout)。下面的示例将为你演示这些概念。

下面展示的 HTML 代码是一组嵌套列表。我们总共有两个列表，它们的 HTML 代码相同。唯一的区别在于，第一个列表有一个 _ems_ 类，而第二个列表有一个 _rems_ 类。

首先，我们将 `<html>` 元素的字体大小设置为 16px。

**概括地说，`em` 单位在用于 `font-size` 时表示“父元素的字体大小”**（而在用于其他属性时则表示“自身的字体大小”）。类为 `ems` 的 {{htmlelement("ul")}} 元素内部的 {{htmlelement("li")}} 元素的尺寸是从它们的父元素继承的。因此，每一层嵌套都会逐渐变大，因为每个元素的字体大小都被设置为 `1.3em` —— 即其父元素字体大小的 1.3 倍。

**概括地说，rem 单位的意思是“根元素的字体大小”**（rem 代表“root em”）。类为 `rems` 的 {{htmlelement("ul")}} 内部的 {{htmlelement("li")}}，其字体大小取决于根元素（`<html>`）。这意味着每层嵌套不会让字体越变越大。

但是，如果你在 CSS 中更改 `<html>` 字体大小，你将看到所有其他相关内容都发生了更改——用 `rem` 和 `em` 设置大小的文本都会变化。

```html live-sample___em-rem
<ul class="ems">
  <li>一</li>
  <li>二</li>
  <li>
    三
    <ul>
      <li>三 A</li>
      <li>
        三 B
        <ul>
          <li>三 B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>一</li>
  <li>二</li>
  <li>
    三
    <ul>
      <li>三 A</li>
      <li>
        三 B
        <ul>
          <li>三 B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___em-rem
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em;
}

.rems li {
  font-size: 1.3rem;
}
```

{{EmbedLiveSample("em-rem", "", "400px")}}

#### 行高单位

`lh` 和 `rlh` 是类似于 `em` 和 `rem` 的相对长度单位。`lh` 和 `rlh` 的区别在于，前者是相对于元素自身的行高，而后者是相对于根元素（通常是 `<html>`）的行高。

使用这些单位，我们可以将盒子的装饰与文本精确对齐。在此示例中，我们通过用 [`repeating-linear-gradient()`](/zh-CN/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) 的方法，使用 `lh` 单位创建类似记事本的线条。无论文本的行高是多少，线条始终会从正确的位置开始。

```css hidden
body {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  gap: 24px;
  background-color: floralwhite;
  font-family: sans-serif;
}

@supports not (height: 1lh) {
  body::before {
    grid-column: 1 / -1;
    padding: 8px;
    border-radius: 4px;
    background-color: tomato;
    color: white;
    content: "你的浏览器还不支持 lh 单位";
  }
}
```

```css
p {
  margin: 0;
  background-image: repeating-linear-gradient(
    to top,
    lightskyblue 0 2px,
    transparent 2px 1lh
  );
}
```

```html
<p style="line-height: 2em">
  蝉鸣拉开盛夏序章，记忆里总藏着几帧特别的画面。若要将今夏浓缩成两个片段，该是山间溯溪的清凉，与老城茶肆的烟火。竹影婆娑的碎石小径上，还留着前夜骤雨打落的合欢花。
</p>

<p style="line-height: 4em">
  踩着溪石逆流而上，水花在膝间绽成碎玉。偶遇深潭便纵身跃入，惊起白鹭掠过崖壁青苔。暮色里寻到半山茶铺，粗陶碗中沉浮的野茶，混着柴火灶的焦香，竟比龙井更沁脾腑。藤编矮凳上的裂纹在月光下蜿蜒，竟与白日里溯溪的河道有几分相似。
</p>
```

{{EmbedLiveSample("行高单位", "100%", "370")}}

### 百分比

在许多情况下，百分比与长度的处理方法是一样的。百分比的问题在于，它们总是相对于其他值设置的。例如，如果将元素的字体大小设置为百分比，那么它将是元素父元素字体大小的百分比。如果使用百分比作为宽度值，那么它将是父值宽度的百分比。

在下面的示例中，两个用百分比设置尺寸的盒和两个用像素设置尺寸的盒具有相同的类名。它们的宽度分别为 200px 和 40%。

区别在于，第二组的两个盒子位于一个宽度为 400 像素的容器内。第二个宽度为 200px 的盒子与第一个盒子的宽度相同，但第二个宽度为 40% 的盒子现在是 400px 的 40%——比第一个盒子窄了很多！

尝试更改包装器的宽度或百分比值，看看这是如何工作的：

```html live-sample___percentage
<div class="box px">我的宽度为 200px</div>
<div class="box percent">我的宽度为 40%</div>
<div class="wrapper">
  <div class="box px">我的宽度为 200px</div>
  <div class="box percent">我的宽度为 40%</div>
</div>
```

```css live-sample___percentage
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}
```

{{EmbedLiveSample("percentage", "", "350px")}}

下一个示例以百分比设置字体大小。每个 `<li>` 的 `font-size` 都设置为 80%，因此嵌套列表项在从父级继承其大小时将逐渐变小。

```html live-sample___percentage-fonts
<ul>
  <li>一</li>
  <li>二</li>
  <li>
    三
    <ul>
      <li>三 A</li>
      <li>
        三 B
        <ul>
          <li>三 B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___percentage-fonts
li {
  font-size: 80%;
}
```

{{EmbedLiveSample("percentage-fonts")}}

注意，虽然许多值接受长度或百分比，但也有一些值只接受长度。你可以在 MDN 属性参考页面上看到它能接受哪些值。如果允许的值包括 {{cssxref("length-percentage")}}，则可以使用长度或百分比。如果允许的值只包含 `<length>`，则不可能使用百分比。

### 数字

有些值接受数字，不添加任何单位。接受无单位数字的属性的一个例子是不透明度属性（`opacity`），它控制元素的不透明度（它有多透明）。此属性接受 `0`（完全透明）和 `1`（完全不透明）之间的数字。

在下面的示例中，尝试将 `opacity` 的值更改为 `0` 到 `1` 之间的各种小数值，并查看盒子及其内容是如何变得透明或者不透明的：

```html live-sample___opacity
<div class="wrapper">
  <div class="box">我是个具有 opacity 属性的盒子</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 230px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> 当你在 CSS 中使用数字作为值时，它不应该用引号括起来。

## 颜色

颜色值可以在 CSS 的许多地方使用，无论是用于指定文本颜色、背景颜色、边框颜色，还是其他更多属性。CSS 提供了多种设置颜色的方式，使你能够控制许多令人兴奋的属性。

现代计算机支持的标准颜色系统是 24 位色，它通过红、绿、蓝三个通道的不同组合来显示约 1670 万种不同的颜色，每个通道有 256 种不同的值（256 x 256 x 256 = 16,777,216）。

在本节中，我们将首先介绍最常见的颜色指定方式：使用关键字、十六进制值和 `rgb()` 值。我们还将快速了解其他颜色函数，以便你在遇到它们时能够识别，或者尝试不同的颜色应用方式。

你可能会先选择一个调色板，然后在整个项目中使用这些颜色以及你喜欢的颜色指定方式。你可以混合使用不同的颜色模型，但为了保持一致性，通常最好在整个项目中使用相同的颜色声明方法！

### 颜色关键字

你会在许多 MDN 代码示例中看到颜色关键字（或“命名颜色”）的使用。由于 [`<named-color>`](/zh-CN/docs/Web/CSS/Reference/Values/named-color) 数据类型包含的颜色值数量非常有限，这些颜色通常不会在生产环境的网站中使用。由于关键字以人类可读的文本值表示颜色，因此在代码示例中使用命名颜色可以清楚地告诉用户预期的颜色是什么，从而使学习者能够专注于所教授的内容。

尝试在下面的实时示例中使用不同的颜色值，以更好地理解它们的工作原理：

```html live-sample___color-keywords
<div class="wrapper">
  <div class="box one">古董白（antiquewhite）</div>
  <div class="box two">靛色（blueviolet）</div>
  <div class="box three">黄绿色（greenyellow）</div>
</div>
```

```css live-sample___color-keywords
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

{{EmbedLiveSample("color-keywords")}}

### 十六进制 RGB 值

你可能会遇到的下一类颜色值是十六进制代码。十六进制使用 `0-9` 和 `a-f` 共 16 个字符，因此整个范围是 `0123456789abcdef`。每个十六进制颜色值由一个井号（`#`）后跟三个或六个十六进制字符组成（例如 `#fcc` 或 `#ffc0cb`），还可以选择性地添加一个或两个十六进制字符来表示前三个或六个字符颜色值的透明度。

当使用十六进制描述 RGB 值时，每**一对**十六进制字符代表一个通道（红、绿、蓝）的十进制数值，允许我们为每个通道指定 256 个可用值中的任意一个（16 x 16 = 256）。这些值在定义颜色时不如关键字直观，但它们更加通用，因为你可以用它们表示任何 RGB 颜色。

尝试更改以下值，看看颜色如何变化：

```html live-sample___color-hex
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>
```

```css live-sample___color-hex
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

{{EmbedLiveSample("color-hex")}}

### RGB 值

要直接创建 RGB 值，[`rgb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb) 函数接受三个参数，分别表示颜色的**红**、**绿**和**蓝**通道值，还可以选择性地添加一个由斜杠（'/'）分隔的第四个参数来表示不透明度，其方式与十六进制值非常相似。RGB 的不同之处在于，每个通道不是由两个十六进制数字表示，而是由一个介于 0 到 255 之间的十进制数字或一个介于 0% 到 100% 之间的百分比表示（但不能混合使用两者）。

让我们使用 RGB 颜色重写上一个示例：

```html live-sample___color-rgb
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>
```

```css live-sample___color-rgb
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}
```

{{EmbedLiveSample("color-rgb")}}

你可以向 `rgb()` 传递第四个参数，它代表颜色的 alpha 通道，控制不透明度。如果你把这个值设置为 `0`，它将使颜色完全透明，而 `1` 将使它完全不透明。介于两者之间的值会给你带来不同级别的透明度。

> [!NOTE]
> 在颜色上设置 alpha 通道与使用我们前面看到的 {{cssxref("opacity")}} 属性有一个关键区别。当你使用不透明度时，你让元素和它里面的所有东西都不透明，而使用 RGB 与 alpha 参数的颜色只让你指定的颜色不透明。

在下面的示例中，我们为彩色盒子的容器块添加了背景图像。然后，我们将这些盒子设置为不同的不透明度值 —— 请注意，当 alpha 通道值较小时，背景会更多地显示出来。在此示例中，尝试更改 alpha 通道值，看看它如何影响颜色输出。

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}
```

{{EmbedLiveSample("color-rgba", "", "250px")}}

### SRGB 值

`sRGB` 颜色空间定义了**红**（r）、**绿**（g）和**蓝**（b）颜色空间中的颜色。

### 使用色相来指定颜色

如果你不满足于仅使用关键字、十六进制和 `rgb()` 来定义颜色，可以尝试使用 [`<hue>`](/zh-CN/docs/Web/CSS/Reference/Values/hue)。色相是让我们能够区分或比较颜色（如红色、橙色、黄色、绿色、蓝色等）的属性。关键在于，你可以使用 [`<angle>`](/zh-CN/docs/Web/CSS/Reference/Values/angle) 来指定色相，因为大多数颜色模型都使用{{glossary("color wheel", "色环")}}来描述色相。

有几种颜色函数包含 [`<hue>`](/zh-CN/docs/Web/CSS/Reference/Values/hue) 组件，例如 `hsl()`、`hwb()` 和 [`lch()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lch)。其他颜色函数，如 [`lab()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lab)，则基于人类视觉定义颜色。

如果你想了解更多关于这些函数和颜色空间的信息，请参阅[使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)指南、列出了 CSS 中所有颜色使用方式的 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value) 参考文档，以及提供 CSS 中所有颜色类型和使用颜色值的属性概述的 [CSS 颜色模块](/zh-CN/docs/Web/CSS/Guides/Colors)。

### HWB

在 CSS 中使用色相的一个很好的起点是 [`hwb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb) 函数，它指定了一个 `srgb()` 颜色。颜色的三个成分分别是：

- **色相（Hue）**：颜色的基本色调。它接受一个介于 0 到 360 之间的 [`<hue>`](/zh-CN/docs/Web/CSS/Reference/Values/hue) 值，表示色轮上的角度。
- **白度（Whiteness）**：颜色中有多少白色？它接受一个从 `0%`（无白色）到 `100%`（完全白色）的值。
- **黑度（Blackness）**：颜色中有多少黑色？它接受一个从 `0%`（无黑色）到 `100%`（完全黑色）的值。

### HSL

与 `hwb()` 函数类似的是 [`hsl()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl) 函数，它也指定了一个 `srgb()` 颜色。HSL 使用**色相**，以及**饱和度**和**亮度**：

- **色相（Hue）**
- **饱和度（Saturation）**：颜色的饱和度是多少？它接受一个 0–100% 的值，其中 0 表示无颜色（会显示为灰色），100% 表示完全饱和的颜色。
- **亮度（Lightness）**：颜色的亮度或明度是多少？它接受一个 0–100% 的值，其中 0 表示无亮度（会显示为完全黑色），100% 表示完全亮度（会显示为完全白色）。

`hsl()` 颜色值还可以选择性地添加一个第四个值，用斜杠（`/`）与颜色分隔，表示 alpha 透明度。

让我们将 RGB 示例更新为使用 HSL 颜色：

```html live-sample___color-hsl
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>
```

```css live-sample___color-hsl
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}
```

{{EmbedLiveSample("color-hsl")}}

就像 `rgb()` 一样，你可以向 `hsl()` 传递一个 alpha 参数来指定不透明度。

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}
```

{{EmbedLiveSample("color-hsla", "", "250px")}}

## 图像

[`<image>`](/zh-CN/docs/Web/CSS/Reference/Values/image) 值类型用于图像为有效值的任何地方。它可以是一个通过 `url()` 函数指向的实际图像文件，也可以是一个渐变。

在下面的例子中，我们演示了一个图像和一个渐变作为 CSS `background-image` 属性的值。

```html live-sample___image
<div class="box image"></div>
<div class="box gradient"></div>
```

```css live-sample___image
.box {
  height: 150px;
  width: 300px;
  margin: 20px auto;
  border-radius: 0.5em;
}
.image {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 100%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> 注意 `<image>` 还有一些其他可能的值，但是这些都是较新的，并且目前对浏览器的支持很差。如果你想进一步了解，请查看 [`<image>`](/zh-CN/docs/Web/CSS/Reference/Values/image) 数据类型的 MDN 页面。

## 位置

[`<position>`](/zh-CN/docs/Web/CSS/Reference/Values/position_value) 值类型表示一组二维坐标，用于定位背景图像等元素（通过 [`background-position`](/zh-CN/docs/Web/CSS/Reference/Properties/background-position)）。它可以接受诸如 `top`、`left`、`bottom`、`right` 和 `center` 等关键字，将元素与二维盒子的特定边界对齐，同时还可以使用长度值来表示从盒子顶部和左侧边缘的偏移量。

一个典型的位置值由两个值组成。第一个值水平地设置位置，第二个值垂直地设置位置。如果只指定一个轴的值，另一个轴将默认为 `center`。

在以下示例中，我们使用关键字将背景图像定位在容器顶部右侧 40px 处。尝试调整这些值，看看如何移动图像的位置。

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 100px;
  width: 400px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
  background-repeat: no-repeat;
  background-position: right 40px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position")}}

## 字符串和标识符

在上面的示例中，我们已经看到了一些使用关键字作为值的地方（例如 `<color>` 关键字，如 `red`、`black`、`rebeccapurple` 和 `goldenrod`）。这些关键字更准确地描述为*标识符*，即 CSS 能理解的特殊值。因此，它们不需要加引号——它们不会被当作字符串处理。

在某些情况下，你会在 CSS 中使用字符串。例如，[在指定生成的内容时](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#生成带有before_和after_的内容)。在这种情况下，值会被加上引号以表明它是一个字符串。在下面的示例中，我们使用了不加引号的颜色关键字以及加了引号的生成内容字符串。

```html live-sample___strings-idents
<div class="box"></div>
```

```css live-sample___strings-idents
.box {
  width: 400px;
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
}

.box::after {
  content: "这是个字符串。我知道是这样是因为 CSS 中用引号包裹了它们。";
}
```

{{EmbedLiveSample("strings-idents")}}

## 函数

在编程中，函数是一段执行特定任务的代码。函数非常有用，因为你可以编写一次代码，然后多次重复使用它，而不必一遍又一遍地编写相同的逻辑。大多数编程语言不仅支持函数，还提供了方便的常用内置函数，因此你不必从头开始自己编写这些函数。

CSS 也有[函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)，其工作方式与其他语言中的函数类似。事实上，我们在上面的[颜色](#颜色)部分已经看到了 CSS 函数，例如 [`rgb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb) 和 [`hsl()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl) 函数。

除了应用颜色之外，你还可以使用 CSS 函数来完成许多其他任务。例如，[变换函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions#变换函数)是一种常见的在页面上移动、旋转和缩放元素的方式。你可能会看到 [`translate()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/translate) 用于水平或垂直移动某物，[`rotate()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/rotate) 用于旋转某物，或者 [`scale()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/scale) 用于放大或缩小某物。

### 数学函数

在为项目创建样式时，你可能会从诸如 `300px` 的长度或 `200ms` 的持续时间等数值开始。如果你希望这些值基于其他值发生变化，则需要进行一些数学计算。你可以计算某个值的百分比或将一个数字与另一个数字相加，然后使用结果更新你的 CSS。

CSS 支持[数学函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions#数学函数)，它允许我们执行计算，而不是依赖于静态值或在 JavaScript 中进行计算。最常见的数学函数之一是 [`calc()`](/zh-CN/docs/Web/CSS/Reference/Values/calc)，它允许你执行加法、减法、乘法和除法等操作。

例如，假设我们希望将某个元素的宽度设置为其父容器宽度的 20% 加上 100px。我们无法使用静态值指定此宽度 —— 如果父容器使用百分比宽度（或诸如 `em` 或 `rem` 之类的相对单位），则它会根据使用环境以及其他因素（例如用户的设备或浏览器窗口宽度）而变化。但是，我们可以使用 `calc()` 将该元素的宽度设置为其父容器宽度的 20% 加上 100px。20% 基于父容器（`.wrapper`）的宽度，如果该宽度发生变化，计算结果也会随之变化：

```html live-sample___calc
<div class="wrapper">
  <div class="box">我的宽度是计算出来的。</div>
</div>
```

```css live-sample___calc
.wrapper {
  width: 400px;
}
.box {
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
  width: calc(20% + 100px);
}
```

{{EmbedLiveSample("calc")}}

CSS 中还有许多其他数学函数可供使用，例如 [`min()`](/zh-CN/docs/Web/CSS/Reference/Values/min)、[`max()`](/zh-CN/docs/Web/CSS/Reference/Values/max) 和 [`clamp()`](/zh-CN/docs/Web/CSS/Reference/Values/clamp)；它们分别允许你从一组值中选择最小、最大或中间值。你还可以使用[三角函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions#三角函数)，例如 [`sin()`](/zh-CN/docs/Web/CSS/Reference/Values/sin)、[`cos()`](/zh-CN/docs/Web/CSS/Reference/Values/cos) 和 [`tan()`](/zh-CN/docs/Web/CSS/Reference/Values/tan)，来计算围绕某点旋转元素的角度，或选择以[色相角度](/zh-CN/docs/Web/CSS/Reference/Values/hue)作为参数的颜色。当你需要对某物的移动和外观进行非常精细的控制时，[指数函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions#指数函数)也可用于动画和过渡。

了解 CSS 函数非常有用，这样当你看到它们时就能识别出来。你应该开始在项目中尝试使用它们——它们将帮助你避免编写自定义或重复的代码来实现你可以通过常规 CSS 获得的结果。

## 技能测试！

你已经到了本文的结尾，但你能记住其中重要的信息吗？你可以在继续前进之前进行一些测试来验证你是否记住了这些内容——[技能测试：值和单位](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values)。

## 总结

本文简要介绍了你可能会遇到的最常见的值和单位类型。你可以在 [CSS 值和单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units)模块页面上查看所有不同的类型——在学习这些课程的过程中，你会遇到许多这样的类型。

需要记住的关键点是，每个属性都有一个定义好的允许值类型列表，而每个值类型都有一个定义来解释这些值是什么。然后，你可以在 MDN 上查找详细信息。例如，了解 [`<image>`](/zh-CN/docs/Web/CSS/Reference/Values/image) 还允许你创建颜色渐变，这是很有用的，但这可能并不容易学习！

在下一篇文章中，我们将探讨 CSS 中项目的大小是如何确定的。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
