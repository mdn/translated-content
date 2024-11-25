---
title: 层叠、优先级与继承
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

本文旨在让你理解 CSS 的一些最基本的概念——层叠、优先级和继承——这些概念决定着如何将 CSS 应用到 HTML 中，以及如何解决冲突。

尽管与课程的其他部分相比，完成这节课可能看起来没有那么直接的相关性，而且更学术性一些，但是理解这些东西将为你以后节省很多痛苦！我们希望你仔细阅读本节，并在继续下一步学习之前，确保你是否理解了这些概念。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识、<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装基本的软件</a
        >、<a href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理</a>基本知识、HTML
        基础知识（<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML
          简介</a>），以及 CSS 如何工作的基本常识（<a
          href="/zh-CN/docs/Learn/CSS/First_steps">学习 CSS 第一步</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习层叠、优先级，以及在 CSS 中继承是如何工作的。</td>
    </tr>
  </tbody>
</table>

## 冲突规则

CSS 代表**层叠样式表**（Cascading Style Sheets），理解第一个词*层叠*（cascade）很重要——层叠的表现方式是理解 CSS 的关键。

在某些时候，在做一个项目过程中你会发现一些应该产生效果的样式没有生效。通常的原因是你创建了两个应用于同一个元素的规则。与[**层叠**](/zh-CN/docs/Web/CSS/Cascade)密切相关的概念是[**优先级**（specificity）](/zh-CN/docs/Web/CSS/Specificity)，决定在发生冲突的时候应该使用哪条规则。设计元素样式的规则可能不是期望的规则，因此需要了解这些机制是如何工作的。

这里也有[**继承**](/zh-CN/docs/Web/CSS/Inheritance)的概念，也就是在默认情况下，一些 css 属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。

我们来快速地看下正在处理的关键问题，然后依次了解它们是如何相互影响的，以及如何和 CSS 交互的。虽然这些概念难以理解，但是随着不断的练习，你会慢慢熟悉它的工作原理。

### 层叠

样式表[**层叠**](/zh-CN/docs/Web/CSS/Cascade)——简单的说，就是 CSS 规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

下面的示例中，我们有两个关于 `<h1>` 的规则。`<h1>` 最后显示蓝色——这两个规则来自同一个源，且具有相同的元素选择器，有相同的优先级，所以顺序在最后的生效。

```html live-sample___cascade-simple
<h1>这是我的标题。</h1>
```

```css live-sample___cascade-simple
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

{{EmbedLiveSample("cascade-simple")}}

### 优先级

浏览器是根据[优先级](/zh-CN/docs/Web/CSS/Specificity)来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度：

- 一个元素选择器不是很具体，则会选择页面上该类型的所有元素，所以它的优先级就会低一些。
- 一个类选择器稍微具体点，则会选择该页面中有特定 `class` 属性值的元素，所以它的优先级就要高一点。

下面我们再来介绍两个适用于 `<h1>` 的规则。下面的 `<h1>` 最后会显示红色——类选择器 `main-heading` 有更高的优先级，因此就会被应用——即使元素选择器顺序在它后面。

```html live-sample___specificity-simple
<h1 class="main-heading">这是我的标题。</h1>
```

```css live-sample___specificity-simple
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

{{EmbedLiveSample("specificity-simple")}}

稍后我们会详细解释优先级算法。

### 继承

继承也需要在上下文中去理解——一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。

举一个例子，如果你设置一个元素的 `color` 和 `font-family`，每个在里面的元素也都会有相同的属性，除非你直接在元素上设置属性。

```html live-sample___inheritance-simple
<p>由于主题颜色被设置为蓝色，因此该颜色会被子元素继承。</p>
<p>我们可以通过选择器定位元素来改变颜色，比如这个<span>内容跨越</span>元素。</p>
```

```css live-sample___inheritance-simple
body {
  color: blue;
}

span {
  color: black;
}
```

{{EmbedLiveSample("inheritance-simple")}}

一些属性是不能继承的——举个例子如果你在一个元素上设置 {{cssxref("width")}} 为 50% ，所有的后代不会是父元素的宽度的 50% 。如果这个也可以继承的话，CSS 就会很难使用了！

> [!NOTE]
> 在 MDN CSS 属性参考页面，你会发现一个名为“形式定义”的技术信息框，其中列举了属性的很多数据信息，包括能否被继承。以 [color 属性的形式定义部分](/zh-CN/docs/Web/CSS/color#形式定义)为例。

## 理解这些概念是如何协同工作的

这三个概念一起来控制 CSS 规则应用于哪个元素；在下面的内容中，我们将看到它们是如何协同工作的。有时候会感觉有些复杂，但是当你对 CSS 有更多经验的时候，你就可以记住它们，即便忘记了细节，可以在网上查到，有经验的开发人员也不会记得所有细节。

以下视频展示了如何使用 Firefox 的开发者工具来检查网页的级联和优先级等：

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## 理解继承

我们从继承开始。下面的例子中我们有一个 {{HTMLElement("ul")}} 元素，里面有两个无序列表。我们已经给 `<ul>` 设置了边框（border）、内边距（padding）和字体颜色。

`color` 属性是一个继承属性。因此，`color` 属性应用在直接子元素和其后代——直接子元素 `<li>` 和第一个嵌套列表中的子项。然后添加了一个 `special` 类到第二个嵌套列表，其中使用了不同的颜色。然后通过它的子元素继承。

```html live-sample___inheritance
<ul class="main">
  <li>项目 1</li>
  <li>
    项目 2
    <ul>
      <li>2.1</li>
      <li>2.2</li>
    </ul>
  </li>
  <li>
    项目 3
    <ul class="special">
      <li>
        3.1
        <ul>
          <li>3.1.1</li>
          <li>3.1.2</li>
        </ul>
      </li>
      <li>3.2</li>
    </ul>
  </li>
</ul>
```

```css live-sample___inheritance
.main {
  color: rebeccapurple;
  border: 2px solid #ccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}
```

{{EmbedLiveSample("inheritance", "", "280px")}}

像 `width`（上面提到的）、`margin`、`padding` 和 `border` 不会被继承。如果 border 可以被继承，每个列表和列表项都会获得一个边框——可能就不是我们想要的结果！

尽管每个 CSS 属性页都列出了属性是否被继承，但我们通常可以通过常识来判断哪些属性属于默认继承。

### 控制继承

CSS 为控制继承提供了五个特殊的通用属性值。每个 CSS 属性都接收这些值。

- {{cssxref("inherit")}}
  - : 设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。
- {{cssxref("initial")}}
  - : 将应用于选定元素的属性值设置为该属性的[初始值](/zh-CN/docs/Web/CSS/initial_value)。
- {{cssxref("revert")}}
  - : 将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值。在许多情况下，此值的作用类似于 {{cssxref("unset")}}。
- {{cssxref("revert-layer")}}
  - : 将应用于选定元素的属性值重置为在上一个[层叠层](/zh-CN/docs/Web/CSS/@layer)中建立的值。
- {{cssxref("unset")}}
  - : 将属性重置为自然值，也就是如果属性是自然继承那么就是 `inherit`，否则和 `initial` 一样

> [!NOTE]
> 见 [CSS 声明的源](/zh-CN/docs/Web/CSS/Cascade#css_声明的源)有更多信息和具体是怎么工作的。

我们可以查看一个链接列表来探索这些值是如何运作的。在下面的实例中，你可以通过修改 CSS 来查看它们的功能，写代码是掌握 HTML 和 CSS 最好的办法。

示例：

1. 第二个列表项应用了类 `my-class-1`。它设置了内部元素来继承属性。如果你删除这个类，它会如何改变链接的颜色？
2. 你知道为什么第三个和第四个链接会是这样的颜色？第三个链接设置了 `initial`，这意味着它使用了属性的初始值（在本例中为黑色），而不是链接的浏览器默认样式的蓝色。第四个设置了 `unset`，这意味着链接文本会使用其父元素的颜色——绿色。
3. 如果你为 `<a>` 元素定义新的颜色（例如：`a { color: red; }`），哪些链接会改变颜色？
4. 阅读下一节有关重置所有属性的内容后，回到这里，并将 `color` 属性改为 `all` 属性。注意第二个链接是怎么出现在新的一行中，还带有一个无序列表的符号的。你认为继承了哪些属性。

```html live-sample___keywords
<ul>
  <li>默认<a href="#">链接</a>颜色</li>
  <li class="my-class-1">继承<a href="#">链接</a>颜色</li>
  <li class="my-class-2">重置<a href="#">链接</a>颜色</li>
  <li class="my-class-3">取消<a href="#">链接</a>颜色的设置</li>
</ul>
```

```css live-sample___keywords
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```

{{EmbedLiveSample("keywords")}}

### 重设所有属性值

CSS 的简写属性 [`all`](/zh-CN/docs/Web/CSS/all) 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个（`inherit`、`initial`、`unset` 或 `revert`）。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

下面的示例中有两个块级引用元素。第一个用元素本身的样式，第二个设置 `all` 为 `unset`

```html live-sample___all
<blockquote>
  <p>当前块引用设置了样式</p>
</blockquote>

<blockquote class="fix-this">
  <p>当前块引用未设置样式</p>
</blockquote>
```

```css live-sample___all
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}
```

{{EmbedLiveSample("all")}}

试着将 `all` 改成其他可用的值然后观察有什么不一样。

## 理解层叠

我们现在明白了为什么嵌套在 HTML 结构中的段落和应用于正文中的 CSS 颜色相同，从入门课程中，我们了解了如何将文档中的任何修改应用于某个对象的 CSS，无论是把 CSS 指定某个元素还是创建一个类。现在，我们将要了解层叠如何定义在不止一个元素的时候怎么应用 CSS 规则。

有三个因素需要考虑，根据重要性排序如下，后面的更重要：

1. **资源顺序**
2. **优先级**
3. **重要程度**

我们从上往下看，看看浏览器是如何决定该应用哪个 CSS 规则的。

### 资源顺序

我们已经看到了顺序对于层叠的重要性。如果你有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。

资源顺序仅在规则的优先级相同时才体现出来，下面让我们看一下优先级：

### 优先级

你会发现在一些情况下，有些规则在最后出现，但是却应用了前面的具有冲突的规则。这是因为前面的有更高的**优先级**——它范围更小，因此浏览器就把它选择为元素的样式。

就像前面看到的，类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。

这里需要注意虽然我们考虑的是选择器，以及应用在选中对象上的规则，但不会覆盖所有规则，只覆盖相同的属性。

这样可以避免重复的 CSS。一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。举个例子，在下面的样式中我给 2 级标题定义了通用样式，然后创建了一些类只修改部分属性的值。最初定义的值应用于所有标题，然后更具体的值通过对应类来实现。

```html live-sample___mixing-rules
<h2>未设置类的标题</h2>
<h2 class="small">设置了 small 类的标题</h2>
<h2 class="bright">设置了 bright 类的标题</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: #000;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.small {
  font-size: 1em;
}

.bright {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("mixing-rules", "", "240px")}}

现在让我们来看看浏览器如何计算优先级。我们已经知道一个元素选择器比类选择器的优先级更低，会被其覆盖。本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。

一个选择器的优先级可以说是由三个不同的值（或分量）相加，可以认为是百（ID）十（类）个（元素）——三位数的三个位数：

- **ID**：选择器中包含 ID 选择器则百位得一分。
- **类**：选择器中包含类选择器、属性选择器或者伪类则十位得一分。
- **元素**：选择器中包含元素、伪元素选择器则个位得一分。

> [!NOTE]
> 通用选择器（[`*`](/zh-CN/docs/Web/CSS/Universal_selectors)）、组合符（`+`、`>`、`~`、' '）和调整优先级的选择器（[`:where()`](/zh-CN/docs/Web/CSS/:where)）不会影响优先级。

否定（[`:not()`](/zh-CN/docs/Web/CSS/:not)）和任意匹配（[`:is()`](/zh-CN/docs/Web/CSS/:is)）伪类本身对优先级没有影响，但它们的参数则会带来影响。参数中，对优先级算法有贡献的参数的优先级的最大值将作为该伪类选择器的优先级。

下面有几个单独的例子，有空可以看看。试着思考下，理解为什么优先级是这样定的。我们还没有深入介绍选择器，不过你可以在 MDN 的[选择器参考页面](/zh-CN/docs/Web/CSS/CSS_selectors)找到每个选择器的详细信息。

| 选择器                                    | ID  | 类  | 元素 | 优先级 |
| ----------------------------------------- | --- | --- | ---- | ------ |
| `h1`                                      | 0   | 0   | 1    | 0-0-1  |
| `h1 + p::first-letter`                    | 0   | 0   | 3    | 0-0-3  |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2   | 2    | 0-2-2  |
| `#identifier`                             | 1   | 0   | 0    | 1-0-0  |
| `button:not(#mainBtn, .cta)`              | 1   | 0   | 1    | 1-0-1  |

在我们继续之前，先看看这个示例。

```html live-sample___specificity-boxes
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">一</a></li>
      <li class="nav"><a href="#">二</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___specificity-boxes
/* 1. 优先级：1-0-1 */
#outer a {
  background-color: red;
}

/* 2. 优先级：2-0-1 */
#outer #inner a {
  background-color: blue;
}

/* 3. 优先级：1-0-4 */
#outer div ul li a {
  color: yellow;
}

/* 4. 优先级：1-1-3 */
#outer div ul .nav a {
  color: white;
}

/* 5. 优先级：0-2-4 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* 6. 优先级：0-2-3 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* 7. 优先级：0-3-3 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
```

{{EmbedLiveSample("specificity-boxes")}}

这里发生了什么？首先，我们先看看最上面的选择器规则，你会发现，我们已经把优先级计算出来放在最前面的注释里。

- 前面两个选择器都是链接背景颜色的样式——第二个赢了使得背景变成蓝色，因为它多了一个 ID 选择器：优先级 2-0-1 vs. 1-0-1。
- 第三四个选择器都是链接文本颜色样式——后者赢了使得文本变成白色，因为它虽然少一个元素选择器，但是多了一个类选择器。所以优先级是 1-1-3 vs. 1-0-4。
- 第 5 到 7 个选择器都是鼠标悬停时链接边框样式。第六个显然输给了第五个，优先级是 0-2-3 vs. 0-2-4——少了个元素选择器。第七个，比第五第六都高——子选择器数量相同，但是有一个元素选择器变成类选择器。所以最后优先级是 0-3-3 vs. 0-2-3 和 0-2-4。

> [!NOTE]
> 每一个选择器类编都有它自己的优先级等级，它们不会被具有较低优先级的选择器覆盖。例如，权重为*一百万*的**类**选择器不会覆盖权重为*一*的 **ID** 选择器。
>
> 评估优先级的最佳方法是对不同的优先级等级单独进行评分，并从最高的等级开始，必要时再计算低优先级等级的权重。即，仅当某一列的优先级权重相同时，你才需要评估下一列；否则，你可以直接忽略低等级的选择器，因为它们无法覆盖高优先级等级的选择器。

### 内联样式

内联样式，即 [`style`](/zh-CN/docs/Web/HTML/Global_attributes#style) 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。这样的声明没有选择器，但它们的优先级可以理解为 1-0-0-0；即无论选择器中有多少个 ID，它总是比其他任何优先级的权重都要高。

### !important

有一个特殊的 CSS 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用——`!important`。用于修改特定属性的值，能够覆盖普通规则的层叠。

> [!NOTE]
> 了解 `!important` 是为了在阅读别人代码的时候知道有什么作用。**但是，强烈建议除了非常情况不要使用它。**`!important` 改变了层叠的常规工作方式，它会使调试 CSS 问题非常困难，特别是在大型样式表中。

看看这个示例，有两个段落，其中一个有 ID。

```html live-sample___important
<p class="better">这是个段落。</p>
<p class="better" id="winning">一个选择器掌管一切！</p>
```

```css live-sample___important
#winning {
  background-color: red;
  border: 1px solid black;
}

.better {
  background-color: gray;
  border: none !important;
}

p {
  background-color: blue;
  color: white;
  padding: 5px;
}
```

{{EmbedLiveSample("important")}}

让我们看看会发生什么——如果有什么疑问，试着删除一些属性：

1. 你会发现第三个规则 {{cssxref("color")}} 和 {{cssxref("padding")}} 的值被应用了，但是 {{cssxref("background-color")}} 没有。为什么？应该三个都应用，因为顺序规则是后面覆盖前面。
2. 无论如何，上面的规则赢了，因为类选择器比元素选择器有更高的优先级。
3. 两个元素都有 `better` [`class`](/zh-CN/docs/Web/HTML/Global_attributes#class)，但是第二个有 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 。因为 ID 选择器比类选择器优先级更高（一个页面只能有一个独特的 ID，但是很多元素都有相同的类——ID 对于目标非常独特），红色背景和 1px 黑色边框应该都被应用到第二个元素，第一个元素应该是灰色背景和 no border，根据类选择器。
4. 第二个元素有红色背景但是没有边框。为什么？因为 `!important` 声明在第二条规则里——在 `border: none` 后面，说明即使计算优先级低，这个属性也使用这个值。

> [!NOTE]
> 覆盖 `!important` 唯一的办法就是另一个 `!important` 具有相同*优先级*而且顺序靠后，或者更高优先级。

在一种情况下，你可能不得不使用它：当你不能编辑核心的 CSS 模块，不能用任何其他方式覆盖，而你又真的想要覆盖一个样式时。但说真的，如果可以避免的话就不要用它。

## CSS 位置的影响

最后，也很有用，CSS 声明的优先级取决于定义它的样式表和级联层。

它让用户可以设置自定义样式表来覆盖开发人员定义的样式。例如用户可能视力受损，并想在所有网页上设置两倍的正常字体大小，以便更容易进行阅读。

也可以在级联层中声明开发人员定义的样式：你可以让非分层样式覆盖分层样式，或者你可以让后面的层中声明的样式覆盖先前的层中声明的样式。例如，作为开发人员，你可能无法编辑第三方的样式表，但你可以将外部的样式表导入级联层中，以便你自己的样式可以轻松地覆盖导入的样式，无需担心第三方选择器的优先级。

### 覆盖声明的顺序

相互冲突的声明将按以下顺序应用，后一种声明将覆盖前一种声明：

1. 用户代理样式表中的声明（例如，浏览器的默认样式，在没有设置其他样式时使用）。
2. 用户样式表中的常规声明（由用户设置的自定义样式）。
3. 作者样式表中的常规声明（这些是我们 web 开发人员设置的样式）。
4. 作者样式表中的 `!important` 声明
5. 用户样式表中的 `!important` 声明
6. 用户代理样式表中的 `!important` 声明

> [!NOTE]
> 标记为 `!important` 的样式的优先级顺序是颠倒的。web 开发人员的样式表覆盖用户的样式表是有意义的，因此设计可以按预期进行，但是有时用户有充足的理由覆盖 web 开发人员的样式，正如上面提到的——这可以通过在他们的规则中使用 `!important` 来实现。

## 级联层的顺序

尽管[级联层](/zh-CN/docs/Web/CSS/@layer)属于高级的主题，你可能不会立刻使用此特性，但了解层是如何级联的非常重要。

在级联层中声明 CSS 是，优先级的顺序由声明层的顺序来决定。在任何层之外声明的 CSS 样式会被按声明的顺序组合在一起，形成一个未命名的层，它会被当作最后声明的层。对于存在冲突的常规（没有 `!important` 声明）样式，后面的层比先前定义的层的优先级高。但对于带有 `!important` 标记的样式，其顺序相反——先前的层中的 important 样式比后面的层以及为在层中声明的 important 样式优先级要高。但内联样式比所有作者定义的样式的优先级都要高，不受级联层规则的影响。

当你在不同的层中有多个样式块，且其中提供了对于某一元素的单一属性的相互冲突的值时，声明该冲突样式的层的顺序将决定其优先级。而不是高优先级的层直接覆盖低优先级的层中的所有样式。需要注意的是单独的一个层中的样式的优先级仍旧会起作用。

```html live-sample___cascade-layers
<p id="addSpecificity">具有边框和背景的段落</p>
```

```css live-sample___cascade-layers
@layer firstLayer, secondLayer;

p {
  /* 0-0-1 */
  background-color: red;
  color: grey !important;
  border: 5px inset purple;
}
p#addSpecificity {
  /* 1-0-1 */
  border-style: solid !important;
}

@layer firstLayer {
  #addSpecificity {
    /* 1-0-0 */
    background-color: blue;
    color: white !important;
    border-width: 5px;
    border-style: dashed !important;
  }
}

@layer secondLayer {
  p#addSpecificity {
    /* 1-0-1 */
    background-color: green;
    color: orange !important;
    border-width: 10px;
    border-style: dotted !important;
  }
}
```

{{EmbedLiveSample("cascade-layers")}}

让我们讨论一下上例以了解发生了什么。示例中，声明了两个级联层，按 `firstLayer` 和 `secondLayer` 的顺序声明。即使 `secondLayer` 的优先级更高，但其中声明的样式没有被使用。为什么？因为不分层的常规样式具有更高的优先级，覆盖了层中的常规样式，不论层的优先级如何，而具有 important 的样式，则是先前声明的层会覆盖后声明的层，而不是层的优先级。

如果你修改示例中 CSS 的第一行为 `@layer secondLayer, firstLayer;`，就会修改层声明的顺序，所有 `firstLayer` 中的 important 样式会被 `secondLayer` 中的冲突值覆盖。

## 技能测试！

你已经阅读到了本文的末尾，但你记住最重要的内容了吗？在进一步学习之前，你可以寻找一些深入的测验来验证你是否掌握了这些信息，参见[技能测试：层叠](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_tasks)。

## 总结

如果你理解了本文的大部分内容，那么就做得很好了——你已经开始熟悉 CSS 的基本机制。接下来，我们将详细讨论[层叠层](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_layers)。

如果你没有完全理解层叠、优先级和继承，也请不要担心！这绝对是我们到目前为止在课程中所涉及到的最复杂的事情，即使是专业的 web 开发人员有时也会觉得棘手。我们建议你在继续学习这门课程的过程中，反复阅读这篇文章几次，并继续思考它。

如果你开始遇到样式没有按照预期应用的奇怪问题，请回到这里。这可能是一个特殊的问题。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
