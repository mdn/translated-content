---
title: place-items
slug: Web/CSS/place-items
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 中的 **`place-items`** 是一个[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) ，它允许你在相关的布局（如 [Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout) 或 [Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)）中可以同时沿着块级和内联方向对齐元素 (例如：{{CSSxRef("align-items")}} 和 {{CSSxRef("justify-items")}} 属性) 。如果未提供第二个值，则第一个值作为第二个值的默认值。

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## 构成属性

该属性是以下两个 CSS 属性的简写：

- [`align-items`](/zh-CN/docs/Web/CSS/align-items)
- [`justify-items`](/zh-CN/docs/Web/CSS/justify-items)

## 语法

```css
/* Keyword values */
place-items: auto center;
place-items: normal start;

/* Positional alignment */
place-items: center normal;
place-items: start auto;
place-items: end normal;
place-items: self-start auto;
place-items: self-end normal;
place-items: flex-start auto;
place-items: flex-end normal;
place-items: left auto;
place-items: right normal;

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline auto;
place-items: last baseline normal;
place-items: stretch auto;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: unset;
```

### 值

- `auto`
  - : `auto` 实际的值继承父自元素的 `justify-items` 值，除非该元素没有父元素或是用了绝对定位。在这些示例中，`auto` 表示 `normal` 。
- `normal`

  - : `normal` 的效果取决于我们使用哪种布局方式：

    - 在块级布局中，`normal` 和 `start` 一样。
    - 在绝对定位布局中，关键字在*被替换的*绝对定位元素上的行为类似于 `start`，在*所有其他*绝对定位的元素上表现类似 `stretch`。
    - 在表格单元格布局中，此关键字没有意义，因为该属性*被忽略*。
    - 在 flexbox 布局中，此关键字没有意义，因为该属性*被忽略*。
    - 在 grid 布局中，此关键字和 `stretch` 的行为相似，但是具有宽高比和固有尺寸的元素行为和 `start` 相似。

- `start`
  - : 在适当的轴线上，元素块沿着对齐容器的起始边缘对齐。
- `end`
  - : 在适当的轴线上，元素块沿着对齐容器的结束边缘对齐。
- `flex-start`
  - : 对齐方式取决于 flex 容器的的开始方向。（水平和垂直两个方向）
    这只对 flex 布局元素生效，对于不是 flex 容器的子元素，它被视为 `start` 。
- `flex-end`
  - : 对齐方式取决于 flex 容器的的结束方向。（水平和垂直两个方向）
    这只对 flex 布局元素生效，对于不是 flex 容器的子元素，它被视为 end。
- `self-start`
  - : 沿着轴线的头部对齐。
- `self-end`
  - : 沿着轴线的尾部对齐。
- `center`
  - : 沿着对齐容器的中心对齐。
- `left`
  - : 沿着对齐容器的左侧对齐，如果属性的轴不与内联轴平行，则该值的行为和 `start` 类似。
- `right`
  - : 沿着对齐容器的右侧对齐，如果属性的轴不与内联轴平行，则该值的行为和 `start` 类似。
- `baseline first baseline`
  `last baseline`
  - : 指定参与第一个或最后一个基线对齐：元素的第一个或最后一个基线集的对齐基线与基线共享组中所有框共享的第一个或最后一个基线集中相应的基线对齐。
    `first baseline` 的回退对齐方式为 `start` ，`last baseline` 则为 `end`。
- `stretch`
  - : 如果子项加起来的尺寸小于对齐容器的尺寸，则任何未尺寸为 `auto` 的项将增加同等的大小（不是按比例），但也会受到 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} （或等同的功能）的限制，因此所有项刚好能填满对齐容器。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 在弹性容器中排列元素

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.placeItems = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

#### CSS

```css
#container {
  height: 200px;
  width: 240px;
  place-items: center; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}
```

#### 结果

{{EmbedLiveSample("在弹性容器中排列元素", 260, 290)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/zh-CN/docs/Web/CSS/CSS_box_alignment)
- The {{CSSxRef("align-items")}} property
- The {{CSSxRef("align-self")}} property
- The {{CSSxRef("justify-items")}} property
- The {{CSSxRef("justify-self")}} property
