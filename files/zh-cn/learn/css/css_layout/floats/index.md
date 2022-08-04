---
title: 浮动
slug: Learn/CSS/CSS_layout/Floats
tags:
  - CSS
  - Guide
  - 列
  - 初学者
  - 布局
  - 教程
  - 浮动
  - 清除
translation_of: Learn/CSS/CSS_layout/Floats
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

{{cssxref("float")}} 属性最初只用于在成块的文本内浮动图像，但是现在它已成为在网页上创建多列布局的最常用工具之一。本文将阐述它的有关知识。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">要求：</th>
      <td>
        HTML 基础知识 (学习<a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >入门 HTML</a
        >)，和 CSS 的工作理念（学习
        <a href="/en-US/docs/Learn/CSS/Introduction_to_CSS">入门 CSS</a>)。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何创建浮动特性，比如首字下沉、浮动图像，和多个列在网页布局。
      </td>
    </tr>
  </tbody>
</table>

## 浮动的背景知识

最初，引入 {{cssxref("float")}} 属性是为了能让 web 开发人员实现简单的布局，包括在一列文本中浮动的图像，文字环绕在它的左边或右边。你可能在报纸版面上看到过。

但 Web 开发人员很快意识到，任何东西都可以浮动，而不仅仅是图像，所以浮动的使用范围扩大了。之前的 [fancy paragraph example](/en-US/Learn/CSS/Introduction_to_CSS/Selectors#Active_learning_A_fancy_paragraph) 的课程展示了如何使用浮动创建一个有趣的 drop-cap（首字下沉）效果。

浮动曾被用来实现整个网站页面的布局，它使信息列得以横向排列（默认的设定则是按照这些列在源代码中出现的顺序纵向排列）。目前出现了更新更好的页面布局技术，所以使用浮动来进行页面布局应被看作[传统的布局方法。](/zh-CN/docs/Learn/CSS/CSS_layout/传统的布局方法)

在这一章中，我们仅就浮动这一命令本身的性能展开讲解。

## 简单的例子

让我们来探讨如何使用浮动。我们将从一个非常简单的例子开始，包括在图像周围浮动一个文本块。你可以跟随在你的电脑上创建新的 `index.html` 文件，以填充它 [simple HTML template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html), 以下代码插入它在适当的地方。底部的部分你可以看到一个它应该是什么样子的例子。

首先，我们写一些简单的 HTML——添加以下到 HTML 的{{htmlelement("body")}}内，删除之前{{htmlelement("body")}}里面的东西：

```html
<h1>Simple float example</h1>

<img src="https://mdn.mozillademos.org/files/13340/butterfly.jpg" alt="A pretty butterfly with red, white, and brown coloring, sitting on a large leaf">

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

现在将以下 CSS 应用到您的 HTML (使用一个{{htmlelement("style")}} 元素或一个{{htmlelement("link")}} 到一个单独的 `.css `文件——你来选择)：

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
  line-height: 2;
  word-spacing: 0.1rem;
}
```

如果你现在保存并刷新，你会看到和你预期的效果差不多——图片坐落在文本的上方，目前看起来有点丑陋。我们本可以让图片在它的容器内居中，但取而代之，我们将使用 float 来让图片周围的文本浮起来。将以下规则添加到你之前的规则下面：

```css
img {
  float: left;
  margin-right: 30px;
}
```

现在，如果您保存和刷新，你会看到类似下面的东西：

<div class="hidden"><h6 id="Playable_code">Playable code</h6><pre class="brush: html notranslate">&#x3C;h1>Simple float example&#x3C;/h1>

&#x3C;img src="https://mdn.mozillademos.org/files/13340/butterfly.jpg" alt="A pretty butterfly with red, white, and brown coloring, sitting on a large leaf">

&#x3C;p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&#x3C;/p>

&#x3C;p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&#x3C;/p>

</pre><pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
line-height: 2;
word-spacing: 0.1rem;
}

img {
float: left;
margin-right: 30px;
}

</pre></div>

{{ EmbedLiveSample('Playable_code', '100%', 800) }}

因此，让我们考虑一下浮动是如何工作的——浮动元素 (这个例子中的{{htmlelement("img")}} 元素) 会脱离正常的文档布局流，并吸附到其父容器的左边 (这个例子中的{{htmlelement("body")}}元素)。在正常布局中位于该浮动元素之下的内容，此时会围绕着浮动元素，填满其右侧的空间。

注意浮动内容仍然遵循盒子模型诸如外边距和边界。我们设置一下图片右侧的外边距就能阻止右侧的文字紧贴着图片。

向右浮动的内容是一样的效果，只是反过来了——浮动元素会吸附到右边，而其他内容将从左侧环绕它。尝试将上一个例子中的浮动值改为 `right` ，再把 `margin-right` 换成 `margin-left` ，看看结果是什么。

## 再看我们的首字下沉例子

如上所述，我们的 [fancy paragraph example](/en-US/Learn/CSS/Introduction_to_CSS/Selectors#Active_learning_A_fancy_paragraph) 从早先的课程精选了一个漂亮的首字下沉。在这个例子中，我们有一个简单的段落：

```html
<p>This is my very important paragraph.
 I am a distinguished gentleman of such renown that my paragraph
 needs to be styled in a manner befitting my majesty. Bow before
my splendour, dear students, and go forth and learn CSS!</p>
```

我们的 CSS 看起来像这样：

```css
p {
  width: 400px;
  margin: 0 auto;
}

p::first-line {
  text-transform: uppercase;
}

p::first-letter {
  font-size: 3em;
  border: 1px solid black;
  background: red;
  float: left;
  padding: 2px;
  margin-right: 4px;
}
```

结果如下：

{{ EmbedLiveSample('再看我们的首字下沉例子', '100%', 130) }}

这里的效果与我们在图像的第一个例子中所做的没有很大的不同，但是这一次，我们在信中的第一个字母后面的其余部分是浮动的，在使这封信看起来显得又大又大胆又有趣之后。

你可以漂浮任何的东西，只要有两个项目的空间，以配合在一起。这使我们很好地谈论多列布局。

## 多列浮动布局

浮动通常用于创建多个列布局，并且由于其广泛的浏览器支持已经有相当一段时间。尽管事实上，他们不是真的打算这个工作，并有一些奇怪的副作用必须处理，你会在后面的文章中看到。

### 两列布局

让我们先从最简单的例子——两列布局。您可以通过创建一个新的 `index.html` 文件在您的计算机上，用[simple HTML template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)填充它，并在适当的地方插入下面的代码。在本节的底部，您可以看到一个活的例子，最终代码应该看起来像。

首先，我们需要一些内容放入我们的列。使用以下内容替换 body 中的任何内容：

```html
<h1>2 column layout example</h1>
<div>
  <h2>First column</h2>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
</div>

<div>
  <h2>Second column</h2>
  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

每个列都需要一个外部元素来包含其内容，并让我们一次操作它的所有内容。在这个例子中，我们选择了{{htmlelement("div")}}，但你可以选择更多语义合适的东西{{htmlelement("article")}}、{{htmlelement("section")}}、和{{htmlelement("aside")}}，诸如此类。

现在为 CSS 将以下内容应用到 HTML 以提供一些基本设置：

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

在宽度达到 900px 之前，整个视图的宽度将达到 90%，在超过 900px 后，它将保持在这个宽度，并在视口中居中。默认情况下，子元素 (这个{{htmlelement("h1")}} 和两个 {{htmlelement("div")}}) 将跨越整个 body 宽度的 100%。如果我们希望将两个{{htmlelement("div")}}放在一起，那么我们需要将它们的宽度设置为父元素的宽度的 100%，或者更小，这样它们就可以彼此匹配。将下面的内容添加到 CSS 的底部：

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

在这里我们设置了他们的父亲的宽度的 48％ —— 这总计 96％，留下我们 4％自由作为两列之间的沟槽，给内容一些空间呼吸。现在我们只需要浮动列，像这样：

```css
div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

把这些结合在一起应该跟我们结果一样：

<div class="hidden"><h6 id="Playable_code_2">Playable code 2</h6><pre class="brush: html notranslate">&#x3C;h1>2 column layout example&#x3C;/h1>

&#x3C;div>
&#x3C;h2>First column&#x3C;/h2>
&#x3C;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&#x3C;/p>
&#x3C;/div>

&#x3C;div>
&#x3C;h2>Second column&#x3C;/h2>
&#x3C;p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&#x3C;/p>
&#x3C;/div>

</pre><pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
width: 48%;
float: left;
}

div:nth-of-type(2) {
width: 48%;
float: right;
}

</pre></div>

{{ EmbedLiveSample('Playable_code_2', '100%', 520) }}

你会注意到，我们所有列使用宽度百分比——这是一个很好的策略，因为它创建一个流式布局（**liquid layout**），一种调整为不同的屏幕尺寸，并在较小的屏幕尺寸下保持相同的列宽度比例。请尝试调整浏览器窗口的宽度，以便自己查看。这是响应式网页设计的一个有价值的工具，我们将在以后的模块中讨论。

<div class="note"><p><strong>注意：</strong>你可以看到这个例子运行在 <a href="https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html">0_two-column-layout.html</a> (参见 <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/0_two-column-layout.html">the source code</a>).</p></div>

需要注意的一件事是，当它们变得非常窄时，列就会变得很糟糕。切换回窄屏幕的单列布局通常是有意义的（如手机)，使用媒体查询可以实现这一功能。再一次，你们将在未来的响应式网页设计模块中学习这些知识。

另一种选择是将宽度设置为一个固定的单位如 rem 或像素——你可以看到一个例子[`two-column-layout-fixed.html`](https://mdn.github.io/learning-area/css/css-layout/floats/two-column-layout-fixed.html) ([see source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/two-column-layout-fixed.html))，或者通过删除`max-width` 声明来转换您自己的示例，并改变各个宽度为 `900px`, `430px`和 `430px`。这就是**固定宽度布局**（**fixed-width layout**）——如果您现在调整浏览器大小，您将看到布局不再调整以适应视图宽度，在尺寸更小时您将需要滚动来查看它的全部。

现在我们将转去使用流体布局。

### 三列布局

你已经有了一个两列布局工作，添加一个第三列 (或更多) 并不是太难。你只需要添加另一个列在同一个父元素。开始通过添加以下 {{htmlelement("div")}}就在另外两个后面 (或使用 [`0_two-column-layout.html`](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) 作为开始）：

```html
<div>
  <h2>Third column</h2>
  <p>Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet imperdiet risus neque vitae lectus. In tempus lectus a quam posuere vestibulum. Duis quis finibus mi. Nullam commodo mi in enim maximus fermentum. Mauris finibus at lorem vel sollicitudin.</p>
</div>
```

现在更新你的 CSS 如下：

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
  width: 36%;
  float: left;
}

div:nth-of-type(2) {
  width: 30%;
  float: left;
  margin-left: 4%;
}

div:nth-of-type(3) {
  width: 26%;
  float: right;
}
```

这将给我们以下结果：

<div class="hidden"><h6 id="Playable_code_3">Playable code 3</h6><pre class="brush: html notranslate">&#x3C;h1>3 column layout example&#x3C;/h1>

&#x3C;div>
&#x3C;h2>First column&#x3C;/h2>
&#x3C;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&#x3C;/p>
&#x3C;/div>

&#x3C;div>
&#x3C;h2>Second column&#x3C;/h2>
&#x3C;p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&#x3C;/p>
&#x3C;/div>

&#x3C;div>
&#x3C;h2>Third column&#x3C;/h2>
&#x3C;p>Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet imperdiet risus neque vitae lectus. In tempus lectus a quam posuere vestibulum. Duis quis finibus mi. Nullam commodo mi in enim maximus fermentum. Mauris finibus at lorem vel sollicitudin.&#x3C;/p>
&#x3C;/div>

</pre><pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
width: 36%;
float: left;
}

div:nth-of-type(2) {
width: 30%;
float: left;
margin-left: 4%;
}

div:nth-of-type(3) {
width: 26%;
float: right;
}

</pre></div>

{{ EmbedLiveSample('Playable_code_3', '100%', 800) }}

这个例子我们已经很熟悉了；唯一真正的区别是我们有了这个额外的列——为了让它放到合适的位置我们已经把它放在左边了；我们还给了它一个 4% 的 {{cssxref("margin-left")}}，来在第一和第二列之间拉开一段距离。我们设置了列的宽度以便它们都能匹配——36% + 30% + 4% + 26% = 96%，在第二和第三列之间有 4% 的空间。（这个空间总是出现在向左浮动的第二列和向右浮动的第三列之间。）

这里需要注意的一点是，您必须仔细考虑将列放在什么位置，以及如何浮动它们，以获得所需的结果。你的内容应该是有意义的，当你阅读它的源代码和它的视觉布局的时候；但是，使用浮动可以使可视化布局与源顺序不同。来说明我们的意思，尝试改变第二列的 {{cssxref("float")}}值为 `right` （或者看一看[three-column-layout-wrong-order.html](https://mdn.github.io/learning-area/css/css-layout/floats/three-column-layout-wrong-order.html) ([源码](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/three-column-layout-wrong-order.html))）你会看到现在的视觉顺序是这样的：

    div1  div3  div2

这是因为第二个\<div>源代码顺序上比第三个\<div>等级要高 (DOM 上第二个\<div>先出现并声明了`float: right;`) ，所以在浮动顺序上也会比第三个\<div>等级要高。又因为两者同时像右浮动，第二个\<div>就会更加地靠右。

然而视觉受损的人使用屏幕阅读器来听你的内容，仍然会听到这个顺序的内容：

    div1 div2 div3

内容布局和样式对它们没有影响。无论用户如何消费，内容都应该是合理的。

<div class="note"><p><strong>注意：</strong>完成了这一点您可以找到的例子<a href="https://mdn.github.io/learning-area/css/css-layout/floats/1_three-column-layout.html">1_three-column-layout.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/1_three-column-layout.html">see source code</a>).</p></div>

## 清除浮动

现在你已经知道了关于 float 属性的一些有趣事实，不过你很快就能够碰到一个问题——所有在浮动下面的自身不浮动的内容都将围绕浮动元素进行包装，如果没有处理这些元素，就会变得很糟糕。为了说明我们的意思，尝试在第三个{{htmlelement("div")}} 元素下面添加以下 HTML（并检出[`2_float-disaster.html`](https://mdn.github.io/learning-area/css/css-layout/floats/2_float-disaster.html) ([source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/2_float-disaster.html))）：

```html
<footer>
  <p>&copy;2016 your imagination. This isn't really copyright, this is a mockery of the very concept. Use as you wish.</p>
</footer>
```

你会看到页脚在最长的列旁边环绕着，这看起来很糟糕——我们希望页脚保持在底部，在所有的列下面。幸运的是，有一种简单的方法可以解决这个问题—— {{cssxref("clear")}} 属性。当你把这个应用到一个元素上时，它主要意味着"此处停止浮动"——这个元素和源码中后面的元素将不浮动，除非您稍后将一个新的{{cssxref("float")}}声明应用到此后的另一个元素。

所以，要解决我们的问题，添加以下规则到您的 CSS：

```css
footer {
  clear: both;
}
```

这将会给你一个页脚，它会在你的列下面，就像它应该做的那样：

<div class="hidden"><h6 id="Playable_code_4">Playable code 4</h6><pre class="brush: html notranslate">&#x3C;h1>3 column layout example&#x3C;/h1>

&#x3C;div>
&#x3C;h2>First column&#x3C;/h2>
&#x3C;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&#x3C;/p>
&#x3C;/div>

&#x3C;div>
&#x3C;h2>Second column&#x3C;/h2>
&#x3C;p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&#x3C;/p>
&#x3C;/div>

&#x3C;div>
&#x3C;h2>Third column&#x3C;/h2>
&#x3C;p>Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet imperdiet risus neque vitae lectus. In tempus lectus a quam posuere vestibulum. Duis quis finibus mi. Nullam commodo mi in enim maximus fermentum. Mauris finibus at lorem vel sollicitudin.&#x3C;/p>
&#x3C;/div>

&#x3C;footer>
&#x3C;p>&#x26;copy;2016 your imagination. This isn't really copyright, this is a mockery of the very concept. Use as you wish.&#x3C;/p>
&#x3C;/footer>

</pre><pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

div:nth-of-type(1) {
width: 36%;
float: left;
}

div:nth-of-type(2) {
width: 30%;
float: left;
margin-left: 4%;
}

div:nth-of-type(3) {
width: 26%;
float: right;
}

footer {
clear: both;
}

</pre></div>

{{ EmbedLiveSample('Playable_code_4', '100%', 865) }}

{{cssxref("clear")}} 可以取三个值：

- `left`：停止任何活动的左浮动
- `right`：停止任何活动的右浮动
- `both`：停止任何活动的左右浮动

你通常只想设定一个 `clear: both` 在你想让浮动停止的元素上。在某些情况下，你会想要只取消`left` 或 `right` 引用。

<div class="note"><p><strong>注：</strong>你可以在这个阶段找到例子 <code><a href="https://mdn.github.io/learning-area/css/css-layout/floats/2a_fixed-by-clear.html">2a_fixed-by-clear.html</a></code> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/2a_fixed-by-clear.html">see source code</a>).</p></div>

## 浮动问题

以上部分提供了使用浮动创建简单布局的基础，但是还有一些问题需要解决。让我们谈谈这些问题。

### 整个宽度可能难以计算

到目前为止，我们的例子是没有应用样式的浮动框——这很容易。当你开始给这些框加上样式时，比如添加背景、外边距、内边距等等，问题就来了。为了演示这个问题，可以将下面的 CSS 加入到你的代码里 (你也可以看这个例子 [`3_broken-layout.html`](https://mdn.github.io/learning-area/css/css-layout/floats/3_broken-layout.html) ([source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/3_broken-layout.html)))：

```css
div, footer {
  padding: 1%;
  border: 2px solid black;
  background-color: red;
}
```

此时，您将看到您的布局已损坏 —— 由于内边距和边界引入的额外宽度，一行容纳不下三列了，因此第三列下降到另外两列之下。

有两个方法可以解决问题，最好的方法是给你的 html 加上下面的 css。

```css
* {
  box-sizing: border-box;
}
```

{{cssxref("box-sizing")}} 通过更改盒模型来拯救我们，盒子的宽度取值为 content + padding + border，而不仅是之前的 content——所以当增加内边距或边界的宽度时，不会使盒子更宽——而是会使内容调整得更窄。

我们有另一个问题——页脚正压在最长列上，在这一点并不理想——我们来试着清除页脚浮动的同时给出一些顶部外边距（ [`margin-top`](/en-US/docs/Web/CSS/margin-top) ）来解决这个问题：

```css
footer {
  clear: both;
  margin-top: 4%;
}
```

然而，这不起作用 ——浮动的元素存在于正常的文档布局流之外，在某些方面的行为相当奇怪：

- 首先，他们在父元素中所占的面积的有效高度为 0 ——尝试在浏览器中加载 [1_three-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/1_three-column-layout.html) 并用开发工具查看 {{htmlelement("body")}} 的高度，你将会看到我们的意思是什么——所报告的正文高度只有 {{htmlelement("h1")}} 的高度。这个可以通过很多方式解决，但是我们所依赖的是在父容器的底部清除浮动，如我们在我们的当前示例所做的那样。如果检查当前示例中正文的高度，您应该看它的高度是行为本身。
- 其次，非浮动元素的外边距不能用于它们和浮动元素之间来创建空间——这是我们在这里眼前的问题，我们将在下面实施修复。
- 还有一些关于浮动的奇怪的事情——Chris Coyier 优秀的[关于 Floats](https://css-tricks.com/all-about-floats/)文章概述了其他一些以及修复这些。

所以，让我们解决这个！首先，在 HTML 的代码里添加新的{{htmlelement("div")}} 元素，位于在\<footer>标签的上方：

```html
<div class="clearfix"></div>
```

如果您没有一个可用的元素来清除您的浮动 (比如我们的页脚)，在您想要清除的浮动之后添加一个看不见的“clearfix div”是非常有用的，但是在这里页脚也要用到。接下来我们要做的是，移除页脚样式规则中的 `clear: both;` 声明，取而代之将其放在 clearfix div 中：

```css
.clearfix {
  clear: both;
}
```

我们的页脚现在有一个很好的顶部外边距，但也有另一个问题——clearfix div 背景、内边距和边界与我们的列和页脚相同！为了解决这个问题，让我们先给每个列块一个类（ `class` ）`column`：

```html
<div class="column">
  ...
</div>
```

现在让我们改变应用盒子样式的规则到这些块和页脚，这样只有列块被样式化：

```css
.column, footer {
  padding: 1%;
  border: 2px solid black;
  background-color: red;
}
```

至此，修复问题大概就那样。

<div class="note"><p><strong>注：</strong> 查看在这个阶段最后一个解决的例子<a href="https://mdn.github.io/learning-area/css/css-layout/floats/4_fixed-layout-border-box.html">4_fixed-layout-border-box.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/4_fixed-layout-border-box.html">source code</a>)。</p></div>

这里要注意的另一小点是，[`box-sizing`](/en-US/docs/Web/CSS/box-sizing) 出现可以追溯到 Internet Explorer 8——如果您明确需要支持较老的浏览器，您可能需要手动调整列的宽度，以允许内边距和边界宽度。这不是一种非常精确的技术，特别是考虑到你不能用百分比来确定边界——你只需要在尽可能充满父宽度的同时留出足够的空间。你可以看到这样的实战修复[`fixed-layout-adjusted-percentages.html`](https://mdn.github.io/learning-area/css/css-layout/floats/fixed-layout-adjusted-percentages.html) ([见源代码](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/fixed-layout-adjusted-percentages.html))。

### 浮动项目的背景高度

到目前为止，我们建好的示例是有效的，但另一个问题是列高度是不同的—— 如果列都是相同的高度，它看起来会更好。

我们可以通过给所有的列固定{{cssxref("height")}} 来解决这个问题 (see [`5_fixed-height-columns.html`](https://mdn.github.io/learning-area/css/css-layout/floats/5_fixed-height-columns.html) ([源代码](https://github.com/mdn/learning-area/blob/master/css/css-layout/floats/5_fixed-height-columns.html))：

```css
.column {
  height: 550px;
}
```

然而在许多情况下这并不理想——它使设计呆板。如果你能保证列中总是有相同数量的内容，这是可以的，但这并不总是如此——在很多类型的网站上，内容也会定期更改。

这正是像 flexbox 这样的新布局技术所解决的问题。Flexbox 可以自动地延长列，这样他们就会像最长的一列一样。

你也可以考虑：

1.  将这些列的背景颜色设置为父元素的背景颜色，这样您就不会看到高度是不同的。这是目前最好的选择。
2.  将它们设置为固定的高度，并使内容滚动{{cssxref("overflow")}} (参见我们溢流部分的示例。)
3.  使用一种叫做伪列（faux columns）的技术——这包括将背景 (和边界) 从实际的列中提取出来，并在列的父元素上画一个伪造的背景，看起来像列的背景一样。不幸的是，这将无法处理列边界。 详见对于[伪列](http://alistapart.com/article/fauxcolumns)和[伪列流体布局](https://www.addedbytes.com/blog/code/faux-columns-for-liquid-layouts/)的教程。

### 清除浮动会变复杂

我们在文章中建立的简单例子很容易理解，但是当布局变得更加复杂清理（clearing）也会变得更加复杂。你需要确保所有的浮动都能尽快清除，以避免它们给下方的内容制造麻烦。如果您没有一个方便的容器来进行清理，那么在必要的时候使用 clearfix 块。

## 纸上得来终觉浅！

你已经读完了这一篇文章，但是你还记得几成呢？在继续阅读之前你可以在这里找到一些测试来检验一下：[Test your skills: Floats](/en-US/docs/Learn/CSS/CSS_layout/Floats_skills).

## 总结

现在，您应该已经拥有了一些强大的工具来创建相当复杂的 web 布局。太好了！在下一篇文章中，我们将进一步研究定位。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
