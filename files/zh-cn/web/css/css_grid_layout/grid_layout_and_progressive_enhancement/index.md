---
title: CSS 网格布局和渐进增强
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
---

{{CSSRef}}

2017 年春天，我们第一次看到像网格（Grid）布局这样的核心规范几乎同时引入到各个浏览器中。现在 FireFox、Chrome、Opera、Safari 和 Edge 的公共版本都支持 CSS 网格布局，可虽然常用浏览器的支持意味着我们中的大部分人将很快看到大多数用户拥有网格布局支持，但也有一些旧的或不支持的浏览器需要应对。在本指南中，我们将介绍各种支持策略。

## 浏览器支持

CSS 网格布局在所有现代浏览器中都没有前缀。对这些指南中详述的所有属性和值的支持可跨浏览器进行互操作。这意味着如果你在 Firefox 中编写一些网格布局代码，它应该在 Chrome 中以相同的方式工作。这不再是实验规范，你可以安全地在生产环境中使用它。

## 我的布局使用 CSS 网格布局安全吗？

是的。无论使用任何前端技术，是否使用 CSS 网格布局都取决于网站访问者通常使用的浏览器。

## 开始在生产环境中使用网格布局

值得注意的是，你不必以要么*全部应用要么完全不应用*的方式使用网格。在你的设计中，你可以开始通过网格来简单地增强你的元素，从而取代它们的旧显示方式。由于网格与其他方法的交互方式，使用网格布局覆盖遗留方法的效果出奇地好。

### 浮动

[浮动](/zh-CN/docs/Learn/CSS/CSS_layout/Floats)曾经用于创建多列布局。如果你在旧代码库使用了浮动布局，则不会发生冲突。网格项目会忽略浮动属性；事实上，_网格项目优先级更高_。在下面的示例中，我们有一个简单的 media 对象。如果 {{cssxref("float")}} 没有从遗留的 CSS 中删除，且容器是网格容器，也不会有问题。我们可以使用 CSS 网格中实现的对齐属性。

{{cssxref("float")}} 不会被应用，我们可以使用 CSS 盒子对齐属性 {{cssxref("align-self")}} 来使内容对齐到容器末尾：

```css
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}
.media::after {
  content: "";
  display: block;
  clear: both;
}
.media .text {
  padding: 10px;
  align-self: end;
}

/* 我们不能删除的旧代码 */
.media .image {
  float: left;
  width: 150px;
  margin-right: 20px;
}
```

```html
<div class="media">
  <div class="image">
    <img src="https://via.placeholder.com/150x150" alt="placeholder" />
  </div>
  <div class="text">
    This is a media object example. I am using floats for older browsers and
    grid for new ones.
  </div>
</div>
```

{{ EmbedLiveSample('浮动', '500', '180') }}

下图左侧显示了不支持的浏览器中的媒体对象，右侧显示了支持的浏览器中的媒体对象：

![使用网格覆盖浮动布局的简单示例。](10-float-simple-override.png)

### 使用特性查询

上面的例子非常简单，我们不需要编写对于不支持网格的浏览器来说会出现问题的代码，并且遗留代码对于支持网格的浏览器来说不是问题。然而，事情并不总是那么简单。

### 一个更复杂的例子

在下一个示例中，我们有一组浮动的卡片。为了使它们浮动（{{cssxref("float")}}），我们给卡片设置了宽度（{{cssxref("width")}}）。然后我们为元素设置了外边距（{{cssxref("margin")}}），并给容器设置了负边距，以在卡片之间创建间隙：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}
.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  overflow: hidden;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}
.wrapper li {
  float: left;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>One</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Two</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Three</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Four</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Five</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
  </ul>
</div>
```

{{ EmbedLiveSample('一个更复杂的例子', '550', '400') }}

该示例演示了浮动布局的典型问题：如果将额外的内容添加到任何一张卡片，布局就会出现问题。

![浮动卡片布局展示了内容高度不均匀引起的问题。](10-floated-cards.png)

为了兼容旧浏览器，我们给元素设置了最小高度（{{cssxref("min-height")}}），并希望内容编辑器不会添加太多内容而导致弄乱布局！

接着，我们使用网格增强布局。我们可以将 {{HTMLElement("ul")}} 变成具有三列轨道的网格容器，但是，已经分配给列表元素本身的宽度仍然有效，并将使这些元素占据轨道宽度的三分之一：

![将网格应用到我们的容器后，元素的宽度变得不正确，因为它们显示为元素宽度的三分之一。](10-float-width-problem.png)

如果将宽度设置为 `auto`，则将阻止旧浏览器发生浮动行为。我们需要能够定义旧浏览器的宽度，并删除支持网格的浏览器的宽度。多亏了 [CSS 特性查询](/zh-CN/docs/Web/CSS/@supports) ，我们才能做到这一点。

### 使用特性查询的解决方案

如果你曾使用[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)创建响应式布局，那么*特性查询*看起来会非常熟悉。我们使用 {{cssxref("@supports")}} 规则检查 CSS 属性和值的支持，而无需检查{{glossary("viewport", "视口")}}宽度或浏览器或设备的某些特性。

```css
@supports (display: grid) {
  .wrapper {
    /* 在这里为支持网格布局的浏览器做任何事情。 */
  }
}
```

特性查询具有出色的浏览器支持，并且所有支持更新的网格规范的浏览器也都支持特性查询。你可以使用它们来处理在增强型浮动布局中遇到的问题。

使用 `@supports` 规则来检查浏览器对 `display: grid` 的支持。然后，在这段使用 {{HTMLElement("ul")}} 的网格布局代码中，将 {{HTMLElement("li")}} 的宽度和最小宽度（{{cssxref("min-height")}}）都设置为 `auto`。我们还删除了外边距和负边距，并用 {{cssxref("gap")}} 属性来设置间隔，这意味着最后一排盒子上无需最终的边距。现在，即使其中一张卡片的内容比其他卡片多，布局也可以正常工作：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}
.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  overflow: hidden;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}
.wrapper li {
  float: left;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
@supports (display: grid) {
  .wrapper ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0;
  }
  .wrapper li {
    width: auto;
    min-height: auto;
    margin: 0;
  }
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>One</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Two</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Three</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Four</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Five</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
  </ul>
</div>
```

{{ EmbedLiveSample('使用特性查询的解决方案', '550', '480') }}

## 覆盖 `display` 其他的值

由于使用浮动创建元素网格的问题，许多人会使用与上面所示的浮动方法不同的方法来布局一组卡片，`display: inline-block` 是其中之一。

我们可以再次使用特性查询来覆盖使用 `display: inline-block` 的布局，并且也不用覆盖所有内容。设置为 `inline-block` 的元素将成为网格元素，所以 `inline-block` 的行为不再生效。当处于 `display: inline-block` 显示模式时，我们在元素上使用了 {{cssxref("vertical-align")}} 属性，但该属性不适用于网格元素，因此一旦它成为网格元素，该属性就会被忽略：

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}

.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.wrapper li {
  display: inline-block;
  vertical-align: top;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
@supports (display: grid) {
  .wrapper ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0;
  }
  .wrapper li {
    width: auto;
    margin: 0;
  }
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>One</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Two</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Three</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Four</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Five</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>We can use CSS Grid to overwrite older methods.</p>
    </li>
  </ul>
</div>
```

{{ EmbedLiveSample('覆盖 display 其他的值', '500', '480') }}

我们需要再次解决的是元素的宽度，然后是想要增强的任何其他属性。在这个例子中，我们再次使用了 `grid-gap`，而不是外边距和负边距来创建间隙。

## 规范如何定义这些覆盖关系？

CSS 网格布局规范详细说明了为什么当某物成为网格元素时我们可以覆盖某些属性的行为。该规范的关键部分是：

- [Establishing Grid Containers](https://drafts.csswg.org/css-grid/#grid-containers)
- [Grid Items](https://drafts.csswg.org/css-grid/#grid-items)
- [Grid Item Display](https://drafts.csswg.org/css-grid/#grid-item-display)

由于规范中对此行为进行了详细说明，因此你可以放心地在对旧版浏览器的支持中使用这些覆盖方法。这里描述的任何内容都不应被视为“hack”。相反，我们正在利用网格规范来详细说明不同布局方法之间的交互方式。

### `display` 的其他值

如 [CSS display 规范](https://drafts.csswg.org/css-display-3/#blockify)中所定义，当一个元素的父元素设置为 `display: grid` 时，它会被块化。这就是为什么当我们的元素被设置为 `inline-block` 时，`display: inline-block` 不再生效的原因。

如果你使用 `display: table` 作为旧版布局，则设置为 `display: table-cell` 的元素会生成匿名盒子。因此，如果你在没有任何父元素设置为 `display-table` 的情况下使用 `display: table-cell`，则会在任何相邻单元格周围创建匿名表格包装器，就像将它们包裹在 div 或其他设置为 `display: table` 的元素中一样。如果你将一个元素设置为 `display: table-cell` ，然后在特性查询中将父级更改为 `display: grid` ，则不会创建匿名盒子。这意味着你可以覆盖基于 `display: table` 的布局，且无需额外的匿名盒子。

### 浮动元素

正如我们已经看到的，{{cssxref("float")}} 和 {{cssxref("clear")}} 对网格元素没有影响。因此，无需显式地将元素设置为 `float: none`。

### 垂直对齐

对齐属性 {{cssxref("vertical-align")}} 对网格元素没有影响。在使用 `display: inline-block` 或 `display: table` 的布局中，你可以使用 vertical-align 属性来执行基本对齐。在网格布局中，则拥有更强大的对齐属性。

### 多列布局

你还可以使用多列布局来支持旧版浏览器，因为在应用于网格容器时，`column-*` 属性不会被应用。

## 参见

- 有关特性查询以及如何恰当地使用它们，请参阅[在 CSS 中使用特性查询（2016）](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)。
- [CSS Grid and the New Autoprefixer](https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer)
