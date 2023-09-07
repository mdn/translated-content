---
title: align-items
slug: Web/CSS/align-items
---

{{CSSRef}}

CSS align-items 属性将所有直接子节点上的 align-self 值设置为一个组。align-self 属性设置项目在其包含块中在交叉轴方向上的对齐方式。

{{EmbedInteractiveExample("pages/css/align-items.html")}}

目前，Flexbox 和 CSS 网格布局支持此属性。在 Flexbox 中，它控制十字轴上项目的对齐方式，在网格布局中，它控制块轴上项目的对齐方式。

## 语法

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
align-items: center; /* Pack items around the center */
align-items: start; /* Pack items from the start */
align-items: end; /* Pack items from the end */
align-items: flex-start; /* Pack flex items from the start */
align-items: flex-end; /* Pack flex items from the end */
align-items: self-start;
align-items: self-end;

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### 取值

- `normal`

  - : 这个关键字的效果取决于我们处在什么布局模式中：

    - 在绝对定位的布局中，对于被替代的绝对定位盒子，这个效果和`start?`的效果的一样；对于其他所有绝对定位的盒子，这个效果和`stretch`的效果一样。
    - 在绝对定位布局的静态位置上，效果和`stretch`一样。
    - 对于那些弹性项目而言，效果和`stretch`一样。
    - 对于那些网格项目而言，效果和`stretch`一样，除了有部分比例或者一个固定大小的盒子的效果像`start`。
    - 这个属性不适用于块级盒子和表格。

- `flex-start`
  - : 元素向侧轴起点对齐。
- `flex-end`
  - : 元素向侧轴终点对齐。
- `start`
  - : The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.
- `end`
  - : The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.
- `center`
  - : 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
- `left`
  - : The items are packed flush to each other toward the left edge of the alignment container. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `right`
  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.
- `self-start`
  - : The items is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.
- `self-end`
  - : The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.
- `baseline`、`first baseline`、`last baseline`
  - : 所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。
- `stretch`
  - : 弹性项包含外边距的交叉轴尺寸被拉升至行高
- `safe`
  - : Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

### 语法格式

{{csssyntax}}

## 示例

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-items: center; /* Can be changed in the live sample */
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

### HTML

```html
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
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

### 结果

{{EmbedLiveSample("示例", "260px", "290px")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 弹性框](/zh-CN/docs/CSS/Using_CSS_flexible_boxes)
