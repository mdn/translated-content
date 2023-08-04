---
title: place-content
slug: Web/CSS/place-content
---

{{CSSRef}}

**`place-content`** 属性是{{CSSxRef("align-content")}} 和 {{CSSxRef("justify-content")}}的简写。使用这两个属性的值可以用于任何的布局情况。

{{EmbedInteractiveExample("pages/css/place-content.html")}}

## 语法

```css
/* Positional alignment */
/* align-content does not take left and right values */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* Baseline alignment */
/* justify-content does not take baseline values */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* Distributed alignment */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* Global values */
place-content: inherit;
place-content: initial;
place-content: unset;
```

第一个值为 {{CSSxRef("align-content")}} 属性，第二个值为 {{CSSxRef("justify-content")}} .

> **警告：** 如果没有设置第二个值，那么第二个的值与第一个相等，此前提是第一个值对两个属性都是有效的。如果设置的这个值对两个属性都无效，那么整个设置的值就是无效的。

### 参考值

- `start`
  - : 所有的子元素堆叠在父元素上合适的轴线上的起点对齐。
- `end`
  - : 所有的子元素堆叠在父元素上合适的轴线上的终点对齐
- `flex-start`
  - : 所有的子元素堆叠在父元素的主轴或交叉轴上起点对齐，主要取决于 flex-direction 的设置。
    仅适用于 flex 布局的子元素.。如果父元素没有设置为 flex，`flex-start` 将被视为 `start`
- `flex-end`
  - : 所有的子元素堆叠在父元素的主轴或交叉轴上终点对齐，主要取决于 flex-direction 的设置。
    仅适用于 flex 布局的子元素。如果父元素没有设置为 flex，`flex-end` 将被视为 `end`
- `center`
  - : 所有的子元素堆叠在父元素的中间对齐
- `left`
  - : The items are packed flush to each other toward the left edge of the alignment container. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `right`
  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `space-between`
  - : The items are evenly distributed within the alignment container. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `space-around`
  - : The items are evenly distributed within the alignment container. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- `space-evenly`
  - : The items are evenly distributed within the alignment container. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
- `stretch`
  - : If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container

### 形式语法

{{CSSSyntax}}

## 示例

### 将内容放入弹性容器中

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br />ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br />ipsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code
><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option></select
><code>;</code><br />

<code>direction:</code
><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option></select
><code>;</code><br />

<code>place-content:</code
><select id="alignContentAlignment">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option>
</select>
<select id="justifyContentAlignment">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option></select
><code>;</code>
```

```js hidden
function update() {
  document.getElementById("container").style.placeContent =
    `${document.getElementById("alignContentAlignment").value} ` +
    `${document.getElementById("justifyContentAlignment").value}`;
}

const alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change", update);

const justifyContentAlignment = document.getElementById(
  "justifyContentAlignment",
);
justifyContentAlignment.addEventListener("change", update);

const writingM = document.getElementById("writingMode");
writingM.addEventListener("change", (evt) => {
  document.getElementById("container").style.writingMode = evt.target.value;
});

const direction = document.getElementById("direction");
direction.addEventListener("change", (evt) => {
  document.getElementById("container").style.direction = evt.target.value;
});
```

#### CSS

```css
#container {
  display: flex;
  height: 240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Can be changed in the live sample */
  direction: ltr; /* Can be changed in the live sample */
  place-content: flex-end center; /* Can be changed in the live sample */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

#### 结果

{{EmbedLiveSample("将内容放入弹性容器中", "370", "300")}}

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/zh-CN/docs/Web/CSS/CSS_box_alignment)
- The {{CSSxRef("align-content")}} property
- The {{CSSxRef("justify-content")}} property
