---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
---

{{CSSRef}}

**`grid-auto-flow`** 属性控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。

{{EmbedInteractiveExample("pages/css/grid-auto-flow.html")}}

## 语法

```css
/* Keyword values */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Global values */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: unset;
```

此属性有两种形式：

- 单个关键字：`row`、`column`，或 `dense` 中的一个。
- 两个关键字：`row dense` 或 `column dense`。

### 取值

- `row`
  - : 该关键字指定自动布局算法按照通过逐行填充来排列元素，在必要时增加新行。如果既没有指定 `row` 也没有 `column`，则默认为 `row`。
- `column`
  - : 该关键字指定自动布局算法通过逐列填充来排列元素，在必要时增加新列。
- `dense`

  - : 该关键字指定自动布局算法使用一种“稠密”堆积算法，如果后面出现了稍小的元素，则会试图去填充网格中前面留下的空白。这样做会填上稍大元素留下的空白，但同时也可能导致原来出现的次序被打乱。

    如果省略它，使用一种「稀疏」算法，在网格中布局元素时，布局算法只会「向前」移动，永远不会倒回去填补空白。这保证了所有自动布局元素「按照次序」出现，即使可能会留下被后面元素填充的空白。

### 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="direction" onchange="changeGridAutoFlow()">
  <option value="column">column</option>
  <option value="row">row</option>
</select>
<input id="dense" type="checkbox" onchange="changeGridAutoFlow()" />
<label for="dense">dense</label>
```

### CSS

```css
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column; /* or 'row', 'row dense', 'column dense' */
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}
```

```js hidden
function changeGridAutoFlow() {
  var grid = document.getElementById("grid");
  var direction = document.getElementById("direction");
  var dense = document.getElementById("dense");
  var gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}
```

{{EmbedLiveSample("示例", "200px", "230px")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)_
- Video tutorial: _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_
