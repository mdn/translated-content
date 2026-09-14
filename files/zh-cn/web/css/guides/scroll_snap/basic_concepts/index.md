---
title: 滚动吸附的基本概念
slug: Web/CSS/Guides/Scroll_snap/Basic_concepts
---

[CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)模块中的属性可以定义用户在滚动文档时滚动吸附到指定点的方式。

滚动吸附特性可以定义吸附位置。[滚动容器](/zh-CN/docs/Glossary/Scroll_container)的滚动口在完成滚动操作后可能会停在或“吸附到”这些位置。

## CSS 滚动吸附的关键属性

在定义滚动吸附前，需要在滚动容器上启用滚动。通过确保滚动容器指定了尺寸且启用 {{CSSXref("overflow")}} 可启用滚动。

然后可以在滚动容器上使用下列关键属性定义滚动吸附：

- {{CSSXref("scroll-snap-type")}}——使用这个属性可定义滚动式视口是否可被吸附、必须还是可选吸附以及吸附应当出现在哪些轴上。
- {{CSSXref("scroll-snap-align")}}——这个属性设置在滚动容器的每个子元素上，可用于定义每个子元素的吸附位置或没有吸附位置。
- {{CSSXref("scroll-snap-stop")}}——这个属性确保在滚动中吸附到而不是越过某个子元素。
- {{CSSXref("scroll-margin")}}——这个属性可以设置在在滚动中可以被吸附的子元素上，用于在指定盒子上创建吸附外边距。
- {{CSSXref("scroll-padding")}}——这个属性可以设置在滚动容器上，用于创建吸附偏移。

下列示例演示了由 `scroll-snap-type` 所定义的纵轴方向的滚动吸附。此外，`scroll-snap-align` 被应用于 `<section>` 元素的所有子元素，决定了每个子元素的滚动止点。

```html live-sample___mandatory-y
<article class="scroller">
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___mandatory-y
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___mandatory-y
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("mandatory-y", "", "350px")}}

## 使用 scroll-snap-type

{{CSSXref("scroll-snap-type")}} 属性需要知道在哪个方向上有滚动吸附。方向可以是 `x`、`y` 或者逻辑对应关系 `block`、`inline`。还可以用关键字 `both` 使两个轴都有滚动吸附。

你还可以传入关键字 `mandatory` 或 `proximity`。关键字 `mandatory` 告诉浏览器无论滚动到哪个位置，内容都*必须*吸附到特定的点，而关键字 `proximity` 意味着内容可以吸附而不是必须吸附到点上。

使用 `mandatory` 可以创造非常一致的滚动效果——你知道浏览器总会吸附到每个指定的点。这意味着有把握相信在滚动结束时，你希望出现在屏幕顶部的东西就会出现在那里。然而，如果内容比预想的大，那么会产生问题——用户可能会沮丧地发现他们永远无法滚动并查看内容中特定的某处。因此，使用 `mandatory` 应当仔细考虑，而且只用于你知道屏幕上或滚动式区域在任何时刻有多少内容的情形。

> [!NOTE]
> 如果某个子元素的内容会溢出父容器，那么请务必不要使用 `mandatory`，这是因为用户会无法把溢出内容滚入视野。

`proximity` 值只在子元素靠近某个位置时把它吸附到这个位置，具体的距离由浏览器决定。

在下列示例中，可以在 `mandatory` 和 `proximity` 之间改变取值，看看对滚动产生的效果。

```html live-sample___mandatory-proximity
<article class="scroller">
  <section>
    <h2>Section one</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section two</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section three</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
</article>
```

```css hidden live-sample___mandatory-proximity
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___mandatory-proximity
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("mandatory-proximity", "", "350px")}}

在上述示例中的滚动容器上同时设置了 {{CSSXref("height", "height: 300px;")}} 和 {{CSSXref("overflow-y", "overflow-y: scroll;")}}。

如果内容没有溢出容器，那么没有用于滚动的内容。

## 使用 scroll-snap-align

{{CSSXref("scroll-snap-align")}} 属性的有效值包括 `start`、`end`、`center` 和 `none`。这些值用于标示内容应当吸附到滚动容器中的哪个点。在下列示例中，可以改变 `scroll-snap-align` 的值，看看滚动行为如何变化。

```html hidden live-sample___align
<article class="scroller">
  <section>
    <h2>Section one</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section two</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>Section three</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
</article>
```

```css hidden live-sample___align
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___align
.scroller {
  height: 200px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("align", "", "250px")}}

如果 `scroll-snap-type` 是 `mandatory` 而且某个子元素上的 `scroll-snap-align` 被设置为 `none` 或者未被设置（此时默认为 `none`），那么用户会无法把这个元素滚入视野。

## 使用 scroll-padding

如果你在使用 `start` 或 `end` 时不想将内容恰好吸附到滚动容器的边上，或者在使用 `center` 时想让吸附位置略微偏离中心，请使用 {{CSSXref("scroll-padding")}} 属性或者等价的全称属性添加一点内边距。

在下列示例中，`scroll-padding` 被设置为 `40px`。当内容吸附到第二和第三节的开头时，滚动会停在离章节开头 40 像素远的位置。试试改变 `scroll-padding` 的值，看看距离如何变化。

```html live-sample___scroll-padding
<article class="scroller">
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-padding
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-padding
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 50px;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("scroll-padding", "", "350px")}}

如果有像导航栏这种可能遮盖滚动内容的[固定](/zh-CN/docs/Web/CSS/Reference/Properties/position#固定定位)元素，那么这个属性可以派上用场。使用 `scroll-padding` 可以为固定元素留出空间。例如在下列示例中，当内容在 `<h1>` 元素下方滚动时，`<h1>` 在屏幕上保持不动。如果没有内边距，那么在发生吸附时，标题会遮盖一些内容。

```html hidden live-sample___scroll-padding-sticky
<article class="scroller">
  <h1>Sticky Heading</h1>
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-padding-sticky
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-padding-sticky
.scroller h1 {
  position: sticky;
  top: 0;
  min-height: 40px;
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 0;
}

.scroller h2 {
  margin: 0;
  padding: 0;
}

.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 50px;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("scroll-padding-sticky", "", "350px")}}

## 使用 scroll-margin

在子元素上可以设置 {{CSSXref("scroll-margin")}} 属性或者全称滚动外边距值，用于定义指定盒子的外边距。这可以让不同的子元素有不同大小的空间，而且可以和父元素上的 `scroll-padding` 一起使用。在下列示例中尝试一下。

```html hidden live-sample___scroll-margin
<article class="scroller">
  <section>
    <h2>Section one</h2>
  </section>
  <section>
    <h2>Section two</h2>
  </section>
  <section>
    <h2>Section three</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-margin
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-margin
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
  scroll-margin: 40px;
}
```

{{EmbedLiveSample("scroll-margin", "", "350px")}}

## 使用 scroll-snap-stop

使用 {{CSSXref("scroll-snap-stop")}} 属性可以指定滚动是否必须吸附到指定的吸附点。在上述示例中，这意味着滚动究竟是会停在每个章节的开头还是可以跳过章节。

这个属性可以确保用户看见滚动区域的每个章节而不会不小心滚过章节。然而这个设置会阻止用户快速滚动到想要的内容，因而对用户体验产生负面影响。

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)模块
- [用 CSS 滚动吸附明确控制滚动](https://web.developers.google.cn/articles/css-scroll-snap)（载于 web.dev，2021 年）
- [实用 CSS 滚动吸附](https://css-tricks.com/practical-css-scroll-snapping/)（载于 CSS-Tricks，2020 年）
- [CSS 滚动吸附](https://12daysofweb.dev/2022/css-scroll-snap/)（载于 12 Days of Web，2019 年）
- [滚动吸附示例](https://codepen.io/collection/KpqBGW)（载于 Codepen）
