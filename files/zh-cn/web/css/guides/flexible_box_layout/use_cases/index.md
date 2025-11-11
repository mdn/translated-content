---
title: 弹性盒子的典型用例
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: 1c77ac467c2afcc0f2a407435023c2a3e9434548
---

在这个指南中，我们将介绍弹性盒子（flexbox）的一些常见用例——在这些地方它是比其他布局更合理的方法。

## 为什么选择弹性盒子？

在浏览器支持完美的环境中，选择使用弹性盒子的原因是你希望把一系列项目沿着同一方向布局。因为在放置元素过程中，你想控制元素在那个方向的维度，或者控制它们彼此之间的间距。弹性盒子就是为此设计的。你可以阅读[弹性盒子与其他布局方法的联系](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)来了解更多关于弹性盒子和 CSS 网格布局的区别，在这篇文章中我们会讨论弹性盒子如何运用于 CSS 的整体布局。

实际上，我们也经常使用弹性盒子来完成使用网格布局可能更好的工作，作为网格布局的后备方案，同时也是为了获得对齐功能。一旦在区块布局中实现了盒子对齐，这种情况就会得到改善。在这个教程中，我们会介绍一些目前使用弹性盒子的典型用例。

## 导航

导航的一个常见特征，就是使用水平栏的样式去呈现一系列元素。这一模式看起来很简单，但是在弹性盒子出现之前却是很难实现的。它是最简单的弹性盒子示例，可以看作是弹性盒子理想的使用场景。

当我们有一组元素需要水平排列展示，很可能在末尾会多出一些空间。我们需要决定如何去处理这些空间，且有多种选择。我们要么在元素外部展示这些空间（在它们之间或周围留出空白），要么将空间吸收至元素内部（需要一个方法来允许元素拉伸以占据该空间）。

### 在元素外部分布空间

为了让多余的空间分布在多个元素之间或周围，我们使用弹性盒子中相应的对齐属性以及 {{cssxref("justify-content")}} 属性。你可以在[对齐弹性容器中的弹性项目](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)中了解关于该属性（专门用来处理主轴对齐）的更多信息。

在下面的示例中，我们通过使用 `justify-content: space-between` 使元素之间拥有相同的空间，让各元素都以其自身的尺寸展示。你可以通过 `space-around`（或 `space-evenly`，如果支持）值来改变分布空间的方式。你也可以使用 `flex-start` 让空间排布在所有元素末尾。使用 `flex-end` 让空间排布在所有元素之前，`center` 可以居中导航元素。

```html live-sample___navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 is longer</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: #000;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("navigation")}}

### 让元素自己处理空间分布

导航的另一个不同模式是让元素自己去决定如何分布额外的空间，而不是将空间分布在它们之间。在这种情况下，我们使用 {{cssxref("flex")}} 属性来允许各元素彼此成比例的拉伸和收缩，正如[控制弹性元素在主轴上的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)所描述的。

如果你想要遵循导航元素的 size 属性，但又要在它们之间平均分配额外的空间，那么你可以使用 `flex: auto`，这是 `flex: 1 1 auto` 的简写——所有元素都在它们的 flex-basis 的基础上自动伸缩。这意味着较长的元素将具有更多的空间，因为它从一个较大的尺寸开始，即使它们都分配了相同的可用空间。

尝试将以下实时示例中的 `flex: auto` 修改为 `flex: 1`。这是 `flex: 1 1 0` 的简写，会导致所有的元素变得等宽，因为它们都基于 flex-basis 为 0 的情况（允许所有的空间被均匀分配）。

```html live-sample___navigation-flex
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 is longer</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation-flex
nav {
  border: 2px solid #eeeeee;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav a {
  text-decoration: none;
  color: #000;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav li {
  flex: auto;
}
```

{{EmbedLiveSample("navigation-flex")}}

## 拆分导航

另一种在主轴上对齐元素的方式就是使用自动外边距。这使得导航栏中一组元素左对齐而另一组元素右对齐的设计模式成为可能。这里我们使用在[使用自动的外边距在主轴上对齐](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#使用自动的外边距在主轴上对齐)这篇文章中介绍的自动外边距技术。

元素在主轴上按照弹性盒子的初始行为 `flex-start` 进行对齐。使用 [`gap`](/zh-CN/docs/Web/CSS/Reference/Properties/gap) 属性以在元素之间创建间隔。同时我们为最后需要右对齐的元素添加自动左边距以对齐它们。你可以将那个类转移到其他元素上以改变分割作用的位置。

```html live-sample___split-navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 is longer</a></li>
    <li class="push-right"><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: #000;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.push-right {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation")}}

## 元素居中

在弹性盒布局到来之前，开发者们曾开玩笑说网页设计中最难的部分是垂直居中。现在，使用弹性盒布局中的对齐属性，这会变得很简单，如以下实时示例所示。

你可以修改对齐方式，用 `flex-start` 使元素在开头对齐或者用 `flex-end` 使元素在末端对齐。

```html live-sample___center
<div class="box">
  <div></div>
</div>
```

```css live-sample___center
.box {
  height: 300px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("center", "", "320px")}}

在未来，我们可能不需要仅为了元素的居中而将容器转变为弹性盒容器，因为盒对齐属性最终会在块布局中实现。但是现在，假如你想在一个元素中居中另一个元素，弹性盒布局是一个很好的选择。在上面的例子中，将一个容器放入弹性盒容器之后，要么在父级元素上使用 `align-items`，要么对弹性元素本身使用 `align-self`。

## 使用卡片布局将页脚推到底部

不管你使用的是弹性盒还是 CSS 网格来对一系列卡片组件进行布局，这些布局方式都只对弹性或网格组件的直接子元素生效。这也意味着即使你内容（content）长度不定，组件在高度上仍会充满整个网格区域或弹性容器。但任何使用常规块布局的方法都会导致在内容较少时页脚（footer）会上升到内容下方而不是粘在卡片的底部。

![两个卡片组件，组件的内部不会随包裹容器而拉伸](flex-cards.png)

弹性盒就能解决这个问题。我们为卡片创建一个弹性容器，并启用 {{cssxref("flex-direction")}}`: column`。然后我们在为内容区域启用 `flex: 1`（`flex: 1 1 0` 的缩略形式），这个元素就可以在 `flex-basis` 为 0 的基础上伸缩。因为这是唯一一个可以伸展的元素，它会占据所有在弹性容器中可以占据的空间，同时将页脚推至底部。如果你移除示例中的 `flex` 属性你就会看见页脚回到了内容的底部。

```html live-sample___cards
<div class="cards">
  <div class="card">
    <div class="content">
      <p>This card doesn't have much content.</p>
    </div>
    <footer>Card footer</footer>
  </div>
  <div class="card">
    <div class="content">
      <p>
        This card has a lot more content which means that it defines the height
        of the container the cards are in. I've laid the cards out using grid
        layout, so the cards themselves will stretch to the same height.
      </p>
    </div>
    <footer>Card footer</footer>
  </div>
</div>
```

```css live-sample___cards
body {
  font-family: sans-serif;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.card {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.card .content {
  padding: 10px;
  flex: 1 1 auto;
}

.card footer {
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}
```

{{EmbedLiveSample("cards", "", "280px")}}

## 媒体对象

媒体对象是网页设计中的常见模式：这种模式下，一侧具有图片或其他元素，另一侧具有文本。理想情况下，媒体对象应该可以翻转：即把图片从左侧移动到右侧。

这种模式随处可见，用于评论以及其他需要显示图片和描述的地方。使用弹性盒子，我们可以让媒体对象中包含图片的部分从图片中获取尺寸信息，并对媒体对象的主体进行弹性布局，以占用剩余空间。

在下面的实时示例中，你可以看到我们的媒体对象。使用对齐属性来将交叉轴上的元素对齐到 `flex-start`，然后为 `.content` 弹性元素设置为 `flex: 1`。与上面的列布局卡片模式一样，启用 `flex: 1` 表示这部分卡片可以延伸。

```html live-sample___media
<div class="media">
  <div class="image">
    <img
      alt="A colorful balloon against a blue sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="content">
    This is the content of my media object. Items directly inside the flex
    container will be aligned to flex-start.
  </div>
</div>
```

```css live-sample___media
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.media .content {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media", "", "320px")}}

在这个实例中，你可能想要尝试的一些事情与你想在设计中约束媒体对象的不同方式有关。

为避免图片过大，你应该为图片添加 {{cssxref("max-width")}}。由于媒体对象那一侧使用的是弹性盒子的初始值，它可以缩小但不会延伸，且其 `flex-basis` 值是 auto。应用于图片的任何 {{cssxref("width")}} 或 max-width 将会成为 `flex-basis`。

```css
.image img {
  max-width: 100px;
}
```

你也可以允许两侧按比例延伸和缩小。如果将两侧都设置为 `flex: 1`，它们将从 {{cssxref("flex-basis")}} 为 0 开始延伸和缩小，因此最终会得到两个大小相等的列。你可以将内容作为指南，并将其都设置为 `flex: auto`，这种情况下，它们将从内容的大小或直接应用于弹性元素的任何大小（例如图片的宽度）延伸和缩小。

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

你还可以为每一侧指定不同的 {{cssxref("flex-grow")}} 因子，例如将图像侧设置为 `flex: 1`，将内容侧设置为 `flex: 3`。这意味着它们使用 `flex-basis` 为 `0`，但根据你分配的 `flex-grow` 因子以不同的速度分配空间。我们使用的弹性属性在[控制弹性元素在主轴上的比例](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)中有详细描述。

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### 翻转媒体对象

要切换媒体对象的显示方式——使图像位于右侧，内容位于左侧，我们可以将 `flex-direction` 属性设置为 `row-reverse`。媒体对象现在以另一种方式显示。我在实时示例中通过在现有的 `.media` 类旁边添加一个 `flipped` 类来实现这一点。这意味着你可以通过从 HTML 中删除该类来查看显示方式的变化。

```html live-sample___media-flipped
<div class="media flipped">
  <div class="image">
    <img
      alt="A colorful balloon against a blue sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="content">
    This is the content of my media object. Items directly inside the flex
    container will be aligned to flex-start.
  </div>
</div>
```

```css live-sample___media-flipped
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.flipped {
  flex-direction: row-reverse;
}

.media .content {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media-flipped", "", "320px")}}

## 表单控件

弹性盒在设计表单控件的样式时特别有用。表单有大量的标记和许多我们通常希望对齐的小元素。一种常见的模式是将 {{htmlelement("input")}} 元素与 {{htmlelement("button")}} 元素配对——也许是用于搜索表单或者你希望访问者输入电子邮件地址的地方。

弹性盒使得这种类型的布局很容易实现。我们已经将 `<button>` 和 `<input>` 字段包含在一个包装器中，并给它设置了边框以及 `display: flex`。然后我们使用弹性属性允许 `<input>` 字段增长，而按钮不增长。这意味着我们有一对字段，其中文本字段会随着可用空间的变化而增长和缩小。

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}

你可以像我们将按钮放在右侧一样轻松地在左侧添加标签或图标。我们添加了一个标签，除了一些背景颜色的样式外，我们不需要改变布局。现在，可伸缩的输入字段有了更少的空间，但它使用了两个项目占据空间后剩下的空间。

```html live-sample___label-input-button
<form class="example">
  <div class="wrapper">
    <label for="text">Label</label>
    <input id="text" type="text" />
    <input type="submit" value="Send" />
  </div>
</form>
```

```css live-sample___label-input-button
* {
  font: 1.1em sans-serif;
}

.wrapper {
  display: flex;
  border: 1px solid rgb(96 139 168);
}
.wrapper > * {
  padding: 10px;
  border: none;
  color: #fff;
}
.wrapper > input[type="text"] {
  background-color: rgb(96 139 168 / 0.5);
  border-right: 1px solid rgb(96 139 168);
  flex: 1 1 auto;
}
.wrapper input[type="submit"] {
  background-color: rgb(96 139 168);
  color: #fff;
}
.wrapper label {
  background-color: #666;
}
```

{{EmbedLiveSample("label-input-button")}}

像这样的模式可以让你更容易地为你的设计创建一系列表单元素，这些元素可以轻松地适应额外的元素的添加。你可以将不可增长的元素和可增长的元素混合在一起以充分利用弹性盒的灵活性。

## 结论

在探索上述模式时，你已经满怀希望地想象怎么找到使用弹性盒子实现你想要的结果的最佳方式。大部分情况下，你拥有不止一种选择。将可以变化的内容和不能变化的元素混合在一起，通过内容来决定它们的大小或者允许弹性布局设置按比例分配空间。要因地制宜，对症下药。

先考虑展示你的内容的最佳方法，然后再了解怎么用弹性盒或其他布局方法实现你的想法。
