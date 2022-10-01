---
title: 样式列表
slug: Learn/CSS/Styling_text/Styling_lists
original_slug: Learn/CSS/为文本添加样式/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[List 列表](/zh-CN/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists) 大体上和其他文本一样，但是仍有一些你需要知道的特殊 CSS 属性，和一些可供参考的最佳实践，这篇文章将阐述这一切。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前置知识：</th>
      <td>
        Basic computer literacy, HTML basics (study
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), CSS basics (study
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >),
        <a href="/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals"
          >基本文本和字体样式</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>熟悉与列表相关的样式和最佳实践</td>
    </tr>
  </tbody>
</table>

## 一个简单的例子

首先，让我们看一个简单的例子。文章中我们将看到无序，有序和描述列表——它们都具有相似的样式特性，而某些特性却又各不相同。[Github](http://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html)上有未加载样式的例子（也可以查看[源码](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html)。）

例子中列表的 HTML 代码如下：

```html
<h2>Shopping (unordered) list</h2>

<p>Paragraph for reference, paragraph for reference, paragraph for reference,
paragraph for reference, paragraph for reference, paragraph for reference.</p>

<ul>
  <li>Humous</li>
  <li>Pitta</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>Paragraph for reference, paragraph for reference, paragraph for reference,
paragraph for reference, paragraph for reference, paragraph for reference.</p>

<ol>
  <li>Toast pitta, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pitta with salad, humous, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>Paragraph for reference, paragraph for reference, paragraph for reference,
paragraph for reference, paragraph for reference, paragraph for reference.</p>

<dl>
  <dt>Humous</dt>
  <dd>A thick dip/sauce generally made from chick peas blended with tahini, lemon juice, salt, garlic, and other ingredients.</dd>
  <dt>Pitta</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>A semi-hard, unripened, brined cheese with a higher-than-usual melting point, usually made from goat/sheep milk.</dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

现在，如果你去到例子的展示页面，并使用[浏览器开发者工具](/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)查看那些列表元素，你会注意到若干个默认的样式预设值：

- {{htmlelement("ul")}} 和 {{htmlelement("ol")}} 元素设置{{cssxref("margin")}}的顶部和底部：16px(1em) 0;和 padding-left: 40px(2.5em); （在这里注意的是浏览器默认字体大小为 16px）。
- {{htmlelement("li")}} 默认是没有设置间距的。
- {{htmlelement("dl")}} 元素设置 margin 的顶部和底部：16px(1em) ，无内边距设定。
- {{htmlelement("dd")}} 元素设置为： {{cssxref("margin-left")}} `40px` (`2.5em`)。
- 在参考中提到的 {{htmlelement("p")}} 元素设置 margin 的顶部和底部：16px(1em)，和其他的列表类型相同。

## 处理列表间距

当您创建样式列表时，您需要调整样式，使其保持与周围元素相同的垂直间距（例如段落和图片，有时称为垂直节奏））和相互间的水平间距（您可以在 Github 上参考[完成的样式示例](http://mdn.github.io/learning-area/css/styling-text/styling-lists/) ，也可以找到[源代码](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html)。）

用于文本样式和间距的 CSS 如下所示：

```css
/* General styles */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,ol,dl,p {
  font-size: 1.5rem;
}

li, p {
  line-height: 1.5;
}

/* Description list styles */


dd, dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: 1.5rem;
}
```

- 第一条规则集设置一个网站字体，基准字体大小为 10px。页面上的所有内容都将继承该规则集。
- 规则集 2 和 3 为标题、不同的列表类型和段落以及设置了相对字体大小（这些列表的子元素将会继承该规则集），这就意味着每个段落和列表都将拥有相同的字体大小和上下间距，有助于保持垂直间距一致。
- 规则集 4 在段落和列表项目上设置相同的 {{cssxref("line-height")}} ，因此段落和每个单独的列表项目将在行之间具有相同的间距。这也将有助于保持垂直间距一致。
- 规则集 5-7 适用于描述列表 - 我们在描述列表的术语和其描述上设置与段落和列表项相同的行高，以及 {{cssxref("margin-bottom")}} 为 1.5 rem（与段落（p）和列表项目（li））相同。再次强调一遍，这里很好地实现了一致性！我们还使描述术语具有粗体字体，因此它们在视觉上脱颖而出。

## 列表特定样式

现在我们来看一下列表的一般间距，我们来研究一些列表具有的特定属性。我们从三个属性开始了解，这三个属性可以在 {{htmlelement("ul")}} 或 {{htmlelement("ol")}} 元素上设置：

- {{cssxref("list-style-type")}} ：设置用于列表的项目符号的类型，例如无序列表的方形或圆形项目符号，或有序列表的数字，字母或罗马数字。
- {{cssxref("list-style-position")}} ：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
- {{cssxref("list-style-image")}} ：允许您为项目符号使用自定义图片，而不是简单的方形或圆形。

### 符号样式

像上面所提及的， {{cssxref("list-style-type")}} 属性允许你设置项目符号点的类型，在我们的例子中，我们在有序列表上设置了大写罗马数字：

```css
ol {
  list-style-type: upper-roman;
}
```

效果显示如下：

![an ordered list with the bullet points set to appear outside the list item text.](outer-bullets.png)

您可以通过 {{cssxref("list-style-type")}} 参考页面查找到更多选项。

### 项目符号位置

{{cssxref("list-style-position")}} 设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。如上所示，默认值为 outside，这使项目符号位于列表项之外。

如果值设置为 inside，项目条目则位于行内。

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![an ordered list with the bullet points set to appear inside the list item text.](inner-bullets.png)

### 使用自定义的项目符号图片

{{cssxref("list-style-image")}} 属性允许对于项目符号使用自定义图片。其语法相当简单：

```css
ul {
  list-style-image: url(star.svg);
}
```

然而，这个属性在控制项目符号的位置，大小等方面是有限的。您最好使用{{cssxref("background")}} 系列属性，您将在 [Styling boxes](/zh-CN/docs/Learn/CSS/Styling_boxes) 模块中了解更多信息。在这里我们仅做一点尝试！

结束我们的例子，我们样式化无序列表像这样（放到您之前所见的顶部）：

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

我们的所做如下：

- 将 {{htmlelement("ul")}} 的 {{cssxref("padding-left")}} 从默认的 `40px`设置为 `20px`，然后在列表项上设置相同的数值。这就是说，整个列表项仍然排列在列表中，但是列表项产生了一些用于背景图像的填充。如果我们没有设置填充，背景图像将与列表项文本重叠，这看起来会很乱。
- 将 {{cssxref("list-style-type")}} 设置为 none，以便默认情况下不会显示项目符号。我们将使用 {{cssxref("background")}} 属性来代替项目符号。
- 为每个无序列表项插入项目符号，其相应的属性如下：

  - {{cssxref("background-image")}}: 充当项目符号的图片文件的参考路径
  - {{cssxref("background-position")}}: 这定义了所选元素背景中的图像将出现在哪里 - 在我们的示例中设置 `0 0`，这意味着项目符号将出现在每个列表项的最左上侧。
  - {{cssxref("background-size")}}: 设置背景图片的大小。理想条件下，我们想要项目符号与列表项的大小相同（比列表项稍大或稍小亦可）。我们使用的尺寸为 1.6rem（16px），它非常吻合我们为项目符号设置的 20px 的填充，16px 加上 4px 的空格间距，可以使项目符号和列表项文本效果更好。
  - {{cssxref("background-repeat")}}：默认条件下，背景图片不断复制直到填满整个背景空间，在我们的例子中，背景图片只需复制一次，所以我们设置值为 `no-repeat`。

效果显示如下：

![an unordered list with the bullet points set as little star images](https://mdn.mozillademos.org/files/12956/image-bullets.png)

### list-style 速记

上述提到的三种属性可以用一个单独的速记属性 {{cssxref("list-style")}} 来设置。例如：

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

可以被如下方式代替：

```plain
ul {
  list-style: square url(example.png) inside;
}
```

属性值可以任意顺序排列，你可以设置一个，两个或者三个值（该属性的默认值为 disc, none, outside），如果指定了 type 和 image，如果由于某种原因导致图像无法加载，则 type 将用作回退。

## 管理列表计数

有时，您可能想在有序列表上进行不同的计数方式。例如：从 1 以外的数字开始，或向后倒数，或者按步或多于 1 计数。HTML 和 CSS 有一些工具可以帮助您

### start

{{htmlattrxref("start","ol")}} 属性允许你从 1 以外的数字开始计数。示例如下：

```html
<ol start="4">
  <li>Toast pitta, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pitta with salad, humous, and fried halloumi.</li>
</ol>
```

输出的结果如下：

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

{{htmlattrxref("reversed","ol")}} 属性将启动列表倒计数。示例如下：

```html
<ol start="4" reversed>
  <li>Toast pitta, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pitta with salad, humous, and fried halloumi.</li>
</ol>
```

输出的结果如下：

{{ EmbedLiveSample('reversed', '100%', 150) }}

### value

{{htmlattrxref("value","ol")}} 属性允许设置列表项指定数值，示例如下：

```html
<ol>
  <li value="2">Toast pitta, leave to cool, then slice down the edge.</li>
  <li value="4">Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pitta with salad, humous, and fried halloumi.</li>
</ol>
```

输出的结果如下：

{{ EmbedLiveSample('value', '100%', 150) }}

> **备注：** 纵然你使用非数字的 {{cssxref("list-style-type")}}, 你仍需要使用与数值同等意义的值作为 value 的属性。

## 主动学习：为嵌套式列表添加样式

在该学习环节，我们希望你使用如上所学尝试为一个嵌套式列表添加样式。我们已经提供了 HTML , 在此之上请完成如下：

1. 为该无序列表提供方形项目符号。
2. 为该无序列表项和有序列表项提供基于其字体大小 1.5 的行高。
3. 为有序列表提供小写字母的项目符号。
4. 对列表进行自由发挥，尝试不同的项目符号类型，间距，以及其他的各种属性。

如果犯了错误，可以随时点击 Reset（重置）按钮进行重新设置。如果你真的遇到困难无法继续下去，点击 Show solution（显示解决方案）按钮查看可行的解决方案。

```html hidden
<div class="body-wrapper" style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea id="code" class="html-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"><ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul></textarea>

  <h2>CSS Input</h2>
  <textarea id="code" class="css-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div class="output" style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input id="reset" type="button" value="Reset" style="margin: 10px 10px 0 0;">
    <input id="solution" type="button" value="Show solution" style="margin: 10px 0 0 10px;">
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = 'ul {\n  list-style-type: square;\n}\n\nul li, ol li {\n  line-height: 1.5;\n}\n\nol {\n  list-style-type: lower-alpha\n}';
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('主动学习：为嵌套式列表添加样式', 700, 800) }}

## 另请参阅

CSS 计数器提供用于自定义列表计数和样式的高级工具，但它们相当复杂。如果你想更深入了解，请查看如下资源：

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

## 总结

一旦你掌握一些相关的基础原则和特定属性，列表的样式还是相对容易理解的。在下篇文章中我们将转到另一话题——为链接提供样式的各种技巧。

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
