---
title: grid-column
slug: Web/CSS/grid-column
---

`grid-column` CSS 属性是 {{cssxref("grid-column-start")}} 和 {{cssxref("grid-column-end")}} 的简写属性，用于指定网格项目的大小和位置{ 通过为它的网格位置贡献线条，跨度或不添加任何内容（自动），从而指定其 {{glossary("grid area","grid area","网格区域")}}。

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## 语法

如果给出两个`<grid-line>`值，它们之间用“ /”分隔。将`grid-column-start`的正手设置为斜线之前的值，并将`grid-column-end`的正手设置为斜线之后的值。

每个`<grid-line>`值可以指定为：

- 要么是`auto`关键字
- 或`<custom-ident>`值
- 或`<integer>`值
- 或者`<custom-ident>`和`<integer>`，两者之间用空格分隔
- 或关键字 span 与`<custom-ident>`或`<integer>`或两者一起使用。

### 值

`auto`

是一个关键字，指示该属性对网格项目的放置没有任何作用，表示自动放置，自动跨度或默认跨度为 1。

`<custom-ident>`

如果有一个名为"\<custom-ident>-start"/"\<custom-ident>-start"的命名行，则它将第一行添加到网格项目的位置。

> **警告：** 命名网格区域会自动生成这种形式的隐式命名行，因此请指定`grid-column: foo;`将选择该命名网格区域的开始/结束边缘（除非在其之前明确指定了另一条名为`foo-start / foo-end`的行）。

否则，将其视为与`<custom-ident>`一起指定了整数 1。

`<integer> && <custom-ident>?`

将第 n 条网格线贡献到网格项目的位置。如果给定一个负整数，则从显式网格的末端开始，反向计数。

如果将名称指定为\<custom-ident>，则仅计算具有该名称的行。如果没有足够多的具有该名称的线，则假定所有隐式网格线都具有该名称，以查找该位置。

{{cssxref("integer")}}的值为`0`无效。

`span && [ <integer> || <custom-ident> ]`
将网格范围扩展到该网格项目的位置，以使该网格项目的网格区域的相应边缘距离相对边缘 n 行。
如果将名称指定为\<custom-ident>，则仅计算具有该名称的行。如果没有足够多的具有该名称的线，则为计算此跨度，假定与搜索方向相对应的显式网格侧的所有隐式网格线均具有该名称。

如果省略\<integer>，则默认为`1`。负整数或 0 无效。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px;
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-column: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-column: span 2 / 7;
}
```

{{EmbedLiveSample("示例", "100%", "100px")}}

## IE 问题

IE11 不支持自动放置网格项目。除非用-ms-{{cssxref("grid-column")}}和-ms-{{cssxref("grid-row")}}显式注释，否则所有项目都以网格的第一行/列结尾。可以使用一些 JavaScript 来启用自动注释：源存储库。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Video tutorial: _[Line-based placement](http://gridbyexample.com/video/series-line-based-placement/)_

1. [**CSS**](/zh-CN/docs/Web/CSS)
2. [**CSS Reference**](/zh-CN/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
4. **Guides**

    1. [Basics concepts of grid layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2. [Relationship to other layout methods](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3. [Line-based placement](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4. [Grid template areas](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5. [Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6. [Auto-placement in grid layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7. [Box alignment in grid layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8. [Grids, logical values and writing modes](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9. [CSS Grid Layout and Accessibility](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Properties**

    1. [grid](/zh-CN/docs/Web/CSS/grid)
    2. [grid-area](/zh-CN/docs/Web/CSS/grid-area)
    3. [grid-auto-columns](/zh-CN/docs/Web/CSS/grid-auto-columns)
    4. [grid-auto-flow](/zh-CN/docs/Web/CSS/grid-auto-flow)
    5. [grid-auto-rows](/zh-CN/docs/Web/CSS/grid-auto-rows)
    6. [grid-column](/zh-CN/docs/Web/CSS/grid-column)
    7. [grid-column-end](/zh-CN/docs/Web/CSS/grid-column-end)
    8. [grid-column-gap](/zh-CN/docs/Web/CSS/grid-column-gap)
    9. [grid-column-start](/zh-CN/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/zh-CN/docs/Web/CSS/grid-gap)
    11. [grid-row](/zh-CN/docs/Web/CSS/grid-row)
    12. [grid-row-end](/zh-CN/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/zh-CN/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/zh-CN/docs/Web/CSS/grid-row-start)
    15. [grid-template](/zh-CN/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/zh-CN/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/zh-CN/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/zh-CN/docs/Web/CSS/grid-template-rows)

6. **Glossary**

    1. [Grid lines](/zh-CN/docs/Glossary/Grid_lines)
    2. [Grid tracks](/zh-CN/docs/Glossary/Grid_tracks)
    3. [Grid cell](/zh-CN/docs/Glossary/Grid_cell)
    4. [Grid areas](/zh-CN/docs/Glossary/Grid_areas)
    5. [Gutters](/zh-CN/docs/Glossary/Gutters)
    6. [Grid row](/zh-CN/docs/Glossary/Grid_rows)
    7. [Grid column](/zh-CN/docs/Glossary/Grid_column)
