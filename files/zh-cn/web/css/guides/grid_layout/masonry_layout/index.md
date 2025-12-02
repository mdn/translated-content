---
title: 瀑布流布局
slug: Web/CSS/Guides/Grid_layout/Masonry_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

[CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)的第 3 版规范包含了 `masonry` 值，用于 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}}。本指南详细介绍了瀑布流布局是什么，以及如何使用它。

瀑布流布局是一种布局方式，其中一个轴使用标准的的严格网格布局（通常是列），另一个轴则采用瀑布流布局。在瀑布流轴上，后续行的元素会向上对齐，完全填补较短元素留下的空隙，而非严格按网格排列导致空隙残留。

## 创建瀑布流布局

要创建最常用的瀑布流布局，需要将列设置为网格轴，将行设置为瀑布流轴，通过 `grid-template-columns` 和 `grid-template-rows` 属性进行定义。此时容器的子元素会像常规网格布局的自动排列那样，逐行依次布局。

当元素换行时，会遵循瀑布流算法进行排列。元素将被加载到剩余空间最多的列中，最终形成一个紧密排列的布局，而不会存在固定的行轨道。

```css hidden live-sample___block-axis live-sample___inline-axis live-sample___spanners live-sample___positioned
* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___block-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

```html live-sample___block-axis live-sample___inline-axis
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```js live-sample___block-axis live-sample___spanners live-sample___positioned
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "3.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.blockSize = itemSizes[i];
}
```

{{EmbedLiveSample("block-axis", "", "250px")}}

也可以创建按行加载元素的瀑布流布局。

```js live-sample___inline-axis
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "2.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.inlineSize = itemSizes[i];
}
```

```css live-sample___inline-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## 控制网格轴

在网格轴上，它的工作方式和你预期的网格布局完全一致。你可以使用 `span` 关键字让元素在自动排列的状态下跨越多条轨道，也可以基于行线的位置来定位元素。

### 跨轨道的瀑布流布局

本示例中，有两个元素跨两条轨道，其余瀑布流元素会围绕这两个元素进行排列。

```html live-sample___spanners
<div class="grid">
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___spanners
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

本示例包含一个通过列定位的元素。具有明确位置的元素会在瀑布流布局生效之前完成放置。

```html live-sample___positioned
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item positioned">已定位。</div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___positioned
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## 瀑布流布局的回退

在[不支持瀑布流的浏览器](#browser_compatibility)中，将使用常规的网格自动布局进行替代。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("grid-auto-flow")}} 用于控制网格自动排列的属性
- [原生 CSS 瀑布流布局（基于 CSS 网格布局）](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)来自 Smashing Magazine（2020）
