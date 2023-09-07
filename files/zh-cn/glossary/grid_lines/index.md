---
title: Grid Lines
slug: Glossary/Grid_Lines
---

{{GlossarySidebar}}

使用[Grid 布局](/zh-CN/docs/Web/CSS/CSS_grid_layout)在显式网格中定义{{glossary("Grid tracks", "轨道")}}的同时会创建**网格线**。在下面的例子中，有一个三列两行的网格。它给了我们 4 条列线和 3 条行线。

## 示例

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

{{ EmbedLiveSample('示例', '500', '250') }}

网格线可以用它们的编号来寻址。在从左到右的语言比如英语中，列线 1 将位于网格的左侧，行线 1 将位于其顶部。线编号遵循文档的[写入模式](/zh-CN/docs/Web/CSS/CSS_writing_modes)，因此在从右到左的语言中，列线 1 行将位于网格的右侧。下面的图片展示了该网格的线编号，假设语言是从左到右的。

![Diagram showing the grid with lines numbered.](1_diagram_numbered_grid_lines.png)

当创建隐式轨道去支持显式网格外的内容时，网格线也会在隐式网格中被创建，但是这些网格线不能通过编号来寻址。

## 按网格线编号将项目放置到网格上

创建一个网格后，可以通过网格线编号将项目放置到该网格上。在下面的例子中，项目定位从列线 1 到列线 3，从行线 1 到行线 3。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

{{ EmbedLiveSample('按网格线编号将项目放置到网格上', '500', '250') }}

## 命名网格线

在显式网格中创建的网格线可以被命名，在轨道大小信息之前或之后的方括号中命名。当放置一个项目时，你可以使用这些名称代替编号，如下所示。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

{{ EmbedLiveSample('命名网格线', '500', '250') }}

## 了解更多

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### 扩展阅读

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
- CSS Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- CSS Grid Layout Guide: _[Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)_
- CSS Grid Layout Guide: _[CSS Grids, Logical Values and Writing Modes](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)_
- [Definition of Grid Lines in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-line-concept)
