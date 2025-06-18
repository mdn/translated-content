---
title: 技能测试：选择器
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: 782d88782968782657abad748e20770229c6aab6
---

这个技能测试的目的是帮助你理解 [CSS 选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)。

> [!NOTE]
> 点击下方代码块中的“**Play**”即可在 MDN 代码演练场中编辑示例。你也可以将代码复制并粘贴到在线编辑器（比如 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)）中。如果你卡住了，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 任务一

在此任务中，请在不改变 HTML 的情况下，使用 CSS 去完成下面的要求：

- 使 `<h1>` 标题变为蓝色。
- 使 `<h2>` 标题具有蓝色背景和白色文本。
- 使 `<span>` 中的文本的字体大小为 200%。

你的最终结果应该与下面的图片类似：

![应用了任务 1 解决方案的 CSS 的文本。](selectors1.jpg)

尝试更新下面的代码，以重现完整的示例：

```html live-sample___type
<div class="container">
  <h1>This is a heading</h1>
  <p>
    Veggies es <span>bonus vobis</span>, proinde vos postulo essum magis
    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
    garlic.
  </p>
  <h2>A level 2 heading</h2>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___type
body {
  font: 1.2em / 1.5 sans-serif;
}
/* 在这里添加样式 */
```

{{EmbedLiveSample("type", "", "260px")}}

<details>
<summary>点击显示答案</summary>

你需要对 `h1`、`h2` 和 `span` 用选择器来更改它们的颜色或大小。

```css
h1 {
  color: blue;
}

h2 {
  background-color: blue;
  color: white;
}

span {
  font-size: 200%;
}
```

</details>

## 任务二

在此任务中，我们希望你在不改变 HTML 的情况下，对本例中内容的外观进行以下更改：

- 为 id 为 `special` 的元素设置黄色背景。
- 为 `alert` 类的元素添加 2px 灰色边框。
- 为同时是 `alert` 类和 `stop` 类的元素设置红色背景。
- 为同时是 `alert` 类和 `go` 类的元素设置绿色背景。

你的最终结果应该与下面的图片类似：

![应用了任务 2 解决方案的 CSS 的文本。](selectors2.jpg)

尝试更新下面的代码，以重现完整的示例：

```html live-sample___class-id
<div class="container">
  <h1>This is a heading</h1>
  <p>
    Veggies es <span class="alert">bonus vobis</span>, proinde vos postulo
    <span class="alert stop">essum magis</span> kohlrabi welsh onion daikon
    amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <h2 id="special">A level 2 heading</h2>
  <p>Gumbo beet greens corn soko endive gumbo gourd.</p>
  <h2>Another level 2 heading</h2>
  <p>
    <span class="alert go">Parsley shallot</span> courgette tatsoi pea sprouts
    fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
    earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___class-id
body {
  font: 1.2em / 1.5 sans-serif;
}
/* 在这里添加样式 */
```

{{EmbedLiveSample("class-id", "", "320px")}}

<details>
<summary>点击查看答案</summary>

这个测试检查你是否理解类选择器和 ID 选择器的区别，以及如何针对一个元素上的多个类进行选择。

```css
#special {
  background-color: yellow;
}

.alert {
  border: 2px solid grey;
}

.alert.stop {
  background-color: red;
}

.alert.go {
  background-color: green;
}
```

</details>

## 任务三

在此任务中，我们希望你在不改变 HTML 的情况下进行以下更改。

- 设置链接样式，将链接设为橙色，访问过的链接设为绿色，并在悬停时移除下划线。
- 为容器内的第一个元素设置 `font-size: 150%` ，并将其第一行文字设为红色。
- 为表格每隔一行添加条纹效果，设置背景颜色为 `#333`，前景色为白色。

你的最终结果应该与下面的图片类似：

![应用了任务 3 解决方案的 CSS 的文本。](selectors3.jpg)

尝试更新下面的代码，以重现完整的示例：

```html live-sample___pseudo
<div class="container">
  <p>
    Veggies es <a href="http://example.com">bonus vobis</a>, proinde vos postulo
    essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
    azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <table>
    <tbody>
      <tr>
        <th>Fruits</th>
        <th>Vegetables</th>
      </tr>
      <tr>
        <td>Apple</td>
        <td>Potato</td>
      </tr>
      <tr>
        <td>Orange</td>
        <td>Carrot</td>
      </tr>
      <tr>
        <td>Tomato</td>
        <td>Parsnip</td>
      </tr>
      <tr>
        <td>Kiwi</td>
        <td>Onion</td>
      </tr>
      <tr>
        <td>Banana</td>
        <td>Beet</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css hidden live-sample___pseudo
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

table {
  border-collapse: collapse;
  width: 300px;
}

td,
th {
  padding: 0.2em;
  text-align: left;
}
```

```css live-sample___pseudo
/* 在这里添加样式 */
```

{{EmbedLiveSample("pseudo", "", "320px")}}

<details>
<summary>点击查看答案</summary>

对内容应用伪类（`:first-child`）和伪元素（`::first-line`）。设置 `a` 元素的 `:link`、`:visited` 和 `:hover` 状态，并使用 `:nth-child` 伪类为表格行创建条纹效果。

```css
.container p:first-child {
  font-size: 150%;
}

.container p:first-child::first-line {
  color: red;
}

a:link {
  color: orange;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

tr:nth-child(even) {
  background-color: #333;
  color: #fff;
}
```

</details>

## 任务四

在此任务中，我们希望你做到：

- 将 `<h2>` 元素后的首个段落文字设为红色。
- 为 `list` 类的无序列表（ul）移除其子元素的项目符号，并为其添加 1px 的灰色下边框。

你的最终结果应该与下面的图片类似：

![应用了任务 4 解决方案的 CSS 的文本。](selectors4.jpg)

尝试更新下面的代码，以重现完整的示例：

```html live-sample___combinators
<div class="container">
  <h2>This is a heading</h2>
  <p>This paragraph comes after the heading.</p>
  <p>This is the second paragraph.</p>

  <h2>Another heading</h2>
  <p>This paragraph comes after the heading.</p>
  <ul class="list">
    <li>One</li>
    <li>
      Two
      <ul>
        <li>2.1</li>
        <li>2.2</li>
      </ul>
    </li>
    <li>Three</li>
  </ul>
</div>
```

```css live-sample___combinators
body {
  font: 1.2em / 1.5 sans-serif;
}
/* 在这里添加样式 */
```

{{EmbedLiveSample("combinators", "", "350px")}}

<details>
<summary>点击查看答案</summary>

这个任务旨在检查你是否理解如何使用不同的组合器。以下是一个合适的解决方案：

```css
h2 + p {
  color: red;
}

.list > li {
  list-style: none;
  border-bottom: 1px solid #ccc;
}
```

</details>

## 任务五

在此任务中，添加 CSS 并使用属性选择器以执行以下操作：

- 选择带有 `title` 属性的 `<a>` 元素，将其边框颜色设置为粉色（`border-color: pink`）。
- 选择带有 `href` 属性且属性值中包含 `contact` 的 `<a>` 元素，将其边框颜色设置为橙色（`border-color: orange`）。
- 选择 `href` 属性值以 `https` 开头的 `<a>` 元素，将其边框颜色设置为绿色（`border-color: green`）。

你的最终结果应该与下面的图片类似：

![4 个具有不同的颜色边框的链接。](selectors-attribute.png)

尝试更新下面的代码，以重现完整的示例：

```html live-sample___attribute-links
<ul>
  <li><a href="https://example.com">Link 1</a></li>
  <li><a href="http://example.com" title="Visit example.com">Link 2</a></li>
  <li><a href="/contact">Link 3</a></li>
  <li><a href="../contact/index.html">Link 4</a></li>
</ul>
```

```css hidden live-sample___attribute-links
body {
  font: 1.2em / 1.5 sans-serif;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 0 0.5em 0;
}

a {
  display: block;
  padding: 0.5em;
}
```

```css live-sample___attribute-links
a {
  border: 5px solid grey;
}
/* 在这里添加样式 */
```

{{EmbedLiveSample("attribute-links", "", "300px")}}

<details>
<summary>点击查看答案</summary>

- 要选择带有 title 属性的元素，我们可以在方括号中添加 title（如 `a[title]`），这样会选中第二个链接，因为它是唯一带有 title 属性的链接。
- 选择 `href` 属性中包含“contact”的 `<a>` 元素，并将其边框设为橙色（`border-color: orange`）。这里需要匹配两种情况：`/contact` 和 `../contact`。因此，我们可以使用 `*=` 来匹配 href 值中任意位置包含“contact”的链接。这样会选中第三个和第四个链接。
- 选择 href 值以 `https` 开头的 `<a>` 元素，并将其边框设为绿色（`border-color: green`）。查找 href 值以“https”开头的链接，因此使用 `^=` 来仅选中第一个链接。

```css
a[title] {
  border-color: pink;
}
a[href*="contact"] {
  border-color: orange;
}
a[href^="https"] {
  border-color: green;
}
```

</details>

## 参见

- [CSS 样式基础](/zh-CN/docs/Learn_web_development/Core/Styling_basics)
