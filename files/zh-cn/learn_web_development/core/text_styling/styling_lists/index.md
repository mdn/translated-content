---
title: 为列表添加样式
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[列表](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#列表)大体上和其他文本一样，但是仍有一些列表特有的的特殊 CSS 属性需要了解，同时还有一些最佳实践需要考虑。本文将对此进行详细说明。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        掌握<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >使用 HTML 结构化内容</a
        >和<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS 样式基础</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>调整列表项之间的间距，例如通过设置边距或行高。</li>
          <li>使用 <code>list-style</code> 属性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 一个简单的列表示例

让我们来看一个基本的列表示例。在本文中，我们将探讨无序列表、有序列表和说明性列表——它们的样式特性既有相似之处，也有各自独特的特点。

该列表示例的 HTML 代码如下：

```html live-sample___unstyled live-sample___initial-style live-sample___finished-style
<h2>购物清单（无序）</h2>

<p>用于参考的段落。</p>

<ul>
  <li>鹰嘴豆泥</li>
  <li>皮塔饼</li>
  <li>绿色沙拉</li>
  <li>哈鲁米奶酪</li>
</ul>

<h2>食谱列表（有序）</h2>

<p>用于参考的段落。</p>

<ol>
  <li>将皮塔饼烤至金黄，放凉后沿边缘切开。</li>
  <li>将哈鲁米奶酪放入浅底不粘锅中煎至两面金黄。</li>
  <li>将沙拉洗净切块。</li>
  <li>将沙拉、鹰嘴豆泥和煎好的哈鲁米奶酪填入皮塔饼中。</li>
</ol>

<h2>配料描述列表</h2>

<p>用于参考的段落。</p>

<dl>
  <dt>鹰嘴豆泥</dt>
  <dd>
    一种浓稠的蘸酱，通常由鹰嘴豆与芝麻酱、柠檬汁、盐、大蒜及其他配料混合制成。
  </dd>
  <dt>皮塔饼</dt>
  <dd>一种柔软、略带发酵的扁平面包。</dd>
  <dt>哈鲁米奶酪</dt>
  <dd>
    一种半硬质、未经熟成、用盐水腌制的奶酪，熔点高于普通奶酪，通常由山羊奶或羊奶制成。
  </dd>
  <dt>绿色沙拉</dt>
  <dd>那种绿色的健康食物，我们中的许多人只是把它当作烤肉串的配菜。</dd>
</dl>
```

如果没有任何样式，它将渲染如下：

{{embedlivesample("unstyled", "100%", 400)}}

请使用[浏览器开发者工具](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)检查这些列表项，你会发现一些默认样式：

- {{htmlelement("ul")}} 和 {{htmlelement("ol")}} 元素含有 `16px`（`1em`）的顶部和底部 {{cssxref("margin")}} 和 `40px`（`2.5em`）的 {{cssxref("padding-left")}}。如果将 `ul` 和 `ol` 元素的方向属性 [`dir`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/dir) 设置为从右到左（`rtl`），则 {{cssxref("padding-right")}} 将生效，其默认值为 `40px`（`2.5em`）。
- 列表项（{{htmlelement("li")}} 元素）默认是没有设置间距的。
- {{htmlelement("dl")}} 元素设置含有 `16px`（`1em`）的顶部和底部 {{cssxref("margin")}}，但不含内边距。
- {{htmlelement("dd")}} 元素含有 `40px`（`2.5em`）的 {{cssxref("margin-left")}}。
- 在参考中提到的 {{htmlelement("p")}} 元素设置含有 `16px`（`1em`）的顶部和底部 {{cssxref("margin")}}——与其他的列表类型相同。

## 处理列表间距

在为列表设置样式时，需要调整其样式，使其与周围元素（如段落和图片；有时称为“垂直节奏”）保持相同的垂直间距，并彼此之间保持相同的水平间距。一些典型的 CSS 样式和间距设置可能如下所示：

用于文本样式和间距的 CSS 如下所示：

```css live-sample___initial-style live-sample___list-style-type live-sample___list-style-position live-sample___custom-bullets live-sample___finished-style
/* 通用样式 */

html {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* 描述列表样式 */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- 第一条规则集设置一个网站字体，基准字体大小为 10px。页面上的所有内容都将继承该规则集。
- 规则集 2 和 3 为标题、不同的列表类型和段落以及设置了相对字体大小（这些列表的子元素将会继承该规则集），这就意味着每个段落和列表都将拥有相同的字体大小和上下间距，有助于保持垂直间距一致。
- 规则集 4 在段落和列表项目上设置相同的 {{cssxref("line-height")}}，因此段落和每个单独的列表项目将在行之间具有相同的间距。这也将有助于保持垂直间距一致。
- 规则集 5 和 6 适用于描述列表。我们在描述列表的术语和其描述上设置与段落和列表项相同的 `line-height`。再次强调一遍，这里很好地实现了一致性！我们还使描述术语具有粗体字体，因此它们在视觉上脱颖而出。

将其应用到前面展示的 HTML 代码中，我们的代码渲染效果如下：

{{embedlivesample("initial-style", "100%", 400)}}

## 列表特定样式

现在我们来看一下列表的一般间距，我们来研究一些列表具有的特定属性。我们从三个属性开始了解，这三个属性可以在 {{htmlelement("ul")}} 或 {{htmlelement("ol")}} 元素上设置：

- {{cssxref("list-style-type")}}：设置用于列表的项目符号的类型，例如无序列表的方形或圆形项目符号，或有序列表的数字、字母或罗马数字。
- {{cssxref("list-style-position")}}：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
- {{cssxref("list-style-image")}}：允许为项目符号使用自定义图片，而不是简单的方形或圆形。

### 符号样式

像上面所提及的，{{cssxref("list-style-type")}} 属性允许你设置项目符号的类型，在我们的示例中，我们在有序列表上设置了大写罗马数字：

```html hidden live-sample___list-style-type live-sample___list-style-position
<ol>
  <li>将皮塔饼烤至金黄，放凉后沿边缘切开。</li>
  <li>将哈鲁米奶酪放入浅底不粘锅中煎至两面金黄。</li>
  <li>将沙拉洗净切块。</li>
  <li>将沙拉、鹰嘴豆泥和煎好的哈鲁米奶酪填入皮塔饼中。</li>
</ol>
```

```css live-sample___list-style-type
ol {
  list-style-type: upper-roman;
}
```

效果显示如下：

{{embedlivesample("list-style-type", "100%", 120)}}

你可以通过 {{cssxref("list-style-type")}} 参考页面查找到更多选项。

### 项目符号位置

{{cssxref("list-style-position")}} 设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。如上所示，默认值为 `outside`，这使项目符号位于列表项之外。

如果值设置为 `inside`，项目符号则位于行内。

```css live-sample___list-style-position live-sample___finished-style
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

{{embedlivesample("list-style-position", "100%", 120)}}

### 使用自定义的项目符号图片

{{cssxref("list-style-image")}} 属性允许对于项目符号使用自定义图片。其语法相当简单：

```css
ul {
  list-style-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

然而，这个属性在控制项目符号的位置，大小等方面是有限的。最好使用 {{cssxref("background")}} 系列属性，你将在[背景和边框](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)文章中了解更多信息。在这里我们仅做一点尝试！

在我们的示例中，我们的无序列表最终样式像这样：

```html hidden live-sample___custom-bullets
<ul>
  <li>鹰嘴豆泥</li>
  <li>皮塔饼</li>
  <li>绿色沙拉</li>
  <li>哈鲁米奶酪</li>
</ul>
```

```css live-sample___custom-bullets live-sample___finished-style
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

我们做了这些事情：

- 将 {{htmlelement("ul")}} 的 {{cssxref("padding-left")}} 从默认的 `40px` 下调为 `20px`，然后在列表项上设置相同的数值。这就是说，整个列表项仍然排列在列表中，但是列表项产生了一些用于背景图像的填充。如果我们没有设置填充，背景图像将与列表项文本重叠，这看起来会很乱。
- 将 {{cssxref("list-style-type")}} 设置为 `none`，以便默认情况下不会显示项目符号。我们将使用 {{cssxref("background")}} 属性来代替项目符号。
- 为每个无序列表项插入项目符号，相关的属性如下：
  - {{cssxref("background-image")}}：充当项目符号的图片文件的参照路径。
  - {{cssxref("background-position")}}：这定义了所选元素背景中的图像将出现在哪里——在我们的示例中设置为 `0 0`，这意味着项目符号将出现在每个列表项的最左上侧。
  - {{cssxref("background-size")}}：设置背景图片的大小。理想条件下，我们想要项目符号与列表项的大小相同（比列表项稍大或稍小亦可）。我们使用的尺寸为 `1.6rem`（`16px`），它非常吻合我们为项目符号设置的 `20px` 的填充，16px 加上 4px 的空格间距，可以使项目符号和列表项文本效果更好。
  - {{cssxref("background-repeat")}}：默认条件下，背景图片不断复制直到填满整个背景空间，在我们的示例中，背景图片只需插入一次，所以我们设置值为 `no-repeat`。

效果显示如下：

{{embedlivesample("custom-bullets", "100%", 120)}}

### list-style 简写

上述提到的三种属性可以用一个单独的简写属性 {{cssxref("list-style")}} 来设置。例如，以下 CSS：

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

可以被如下方式代替：

```css
ul {
  list-style: square url(example.png) inside;
}
```

属性值可以任意顺序排列，你可以设置一个，两个或者所有三个值（不包括的属性使用的默认值是 `disc`、`none` 和 `outside`），如果指定了 `type` 和 `image`，如果由于某种原因导致图像无法加载，则 type 将用作回退。

## 完整的示例

在前几节中，我们向你展示了某些独立列表特性的效果。当我们将它们全部应用到最初的 HTML 列表中时，结果如下：

{{embedlivesample("finished-style", "100%", 400)}}

## 管理列表计数

有时，你可能想在有序列表上进行不同的计数方式。例如：从 1 以外的数字开始，或从后面倒数，或者按大于 1 的步长计数。HTML 和 CSS 有一些工具可以帮助你：

### start

[`start`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#start) 属性允许你从 1 以外的数字开始计数。以下示例：

```html live-sample___counting-control
<ol start="4">
  <li>将皮塔饼烤至金黄，放凉后沿边缘切开。</li>
  <li>将哈鲁米奶酪放入浅底不粘锅中煎至两面金黄。</li>
  <li>将沙拉洗净切块。</li>
  <li>将沙拉、鹰嘴豆泥和煎好的哈鲁米奶酪填入皮塔饼中。</li>
</ol>
```

输出的结果如下：

{{ EmbedLiveSample('counting-control', '100%', 150) }}

### reversed

[`reversed`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#reversed) 属性将使列表反向计数。以下示例：

```html live-sample___counting-control-reversed
<ol start="4" reversed>
  <li>将皮塔饼烤至金黄，放凉后沿边缘切开。</li>
  <li>将哈鲁米奶酪放入浅底不粘锅中煎至两面金黄。</li>
  <li>将沙拉洗净切块。</li>
  <li>将沙拉、鹰嘴豆泥和煎好的哈鲁米奶酪填入皮塔饼中。</li>
</ol>
```

输出的结果如下：

{{ EmbedLiveSample('counting-control-reversed', '100%', 150) }}

> [!NOTE]
> 如果反向计数的列表项数比 `start` 属性的值还要多，计数将继续到零并向负数方向增加。

### value

[`value`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#value) 属性允许设置列表项指定数值，以下示例：

```html
<ol>
  <li value="2">将皮塔饼烤至金黄，放凉后沿边缘切开</li>
  <li value="4">将哈鲁米奶酪放入浅底不粘锅中煎至两面金黄。</li>
  <li value="6">将沙拉洗净切块。</li>
  <li value="8">将沙拉、鹰嘴豆泥和煎好的哈鲁米奶酪填入皮塔饼中。</li>
</ol>
```

输出的结果如下：

{{ EmbedLiveSample('counting-control-values', '100%', 150) }}

> [!NOTE]
> 即使使用非数字的 {{cssxref("list-style-type")}}，仍需要在 `value` 属性中使用等效的数值。

## 动手练习：为嵌套式列表添加样式

在该学习环节，我们希望你使用如上所学尝试为一个嵌套式列表添加样式。我们已经提供了 HTML 代码，在此之上请完成如下任务：

1. 点击下方代码块中的**“运行”**，在 MDN 代码演练场中编辑该示例。
2. 将无序列表设置为方形项目符号。
3. 将无序列表项和有序列表项的 `line-height` 设置为 `font-size` 的 `1.5` 倍。
4. 将有序列表设置为使用小写字母项目符号。
5. 请随意尝试这个列表示例，尽情尝试各种项目符号类型、间距，或者任何你感兴趣的设置。

如果犯了错误，可以随时点击*重置*按钮进行重新设置。如果你真的遇到困难无法继续下去，点击*显示解答*按钮查看一种可能的解法。

```html live-sample___styling_lists
<ul>
  <li>首先，点亮蜡烛。</li>
  <li>其次，打开盒子。</li>
  <li>最后，以这个特定顺序，将三个魔法物品依次放在盒子中，完成这个咒语：
    <ol>
      <li>魔法之书（The book of spells）</li>
      <li>闪光棒（The shiny rod）</li>
      <li>哥布林雕像（The goblin statue）</li>
    </ol>
  </li>
</ul>
```

```css live-sample___styling_lists

```

{{ EmbedLiveSample('styling_lists', "100%", 160) }}

<details>
<summary>点击这里查看解答</summary>

完成的 CSS 应该如下所示：

```css
ul {
  list-style-type: square;
}

li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}
```

</details>

## 总结

只要掌握了几个相关的基本原理和具体属性，列表的样式设置就相对容易上手。在下一篇文章中，我们将继续介绍链接的样式设置技巧。

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
