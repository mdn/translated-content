---
title: grid-row
slug: Web/CSS/grid-row
---

**`grid-row`** 属性是一种 {{cssxref("grid-row-start")}} 和 {{cssxref("grid-row-end")}} 的缩写（[shorthand](/zh-CN/docs/Web/CSS/Shorthand_properties)）形式，它定义了网格单元与网格行（row）相关的尺寸和位置，可以通过在网格布局中的基线（line），跨度（span），或者什么也不做（自动），从而指定 {{glossary("grid areas", "grid area")}} 的行起始与行结束。

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

如果指定了两个 \<grid-line> 值，那么斜杠号前的值就被指定为 `grid-row-start`，斜杠后面的值就被指定为 `grid-row-end` 的值。

## 语法

```css
/* 不同类型的属性值 */
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: somegridarea;
grid-row: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-row: somegridarea 4;
grid-row: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span somegridarea;
grid-row: 5 somegridarea span;
grid-row: span 3 / 6;
grid-row: span somegridarea / span someothergridarea;
grid-row: 5 somegridarea span / 2 span;

/* Global values */
grid-row: inherit;
grid-row: initial;
grid-row: unset;
```

### 值

- `auto`
  - : 表示对网格的布置行为不做干涉，即自动布置，自动的 span 或者默认 span 值为 1。
- `<custom-ident>`

  - : 如果存在自定义的基线名（'\<custom-ident>-start'/'\<custom-ident>-end'），它就将第一个这样的基线贡献给网格单元。

    **注意：** 被命名的网格区域（grid areas）会自动生成隐式的被命名的基线，因此指定 `grid-row: foo;` 将会选择这个命名区域的开始和结束的边界（除非在它之前存在显式指定的以 `foo-start`/`foo-end` 命名的其他基线）。

    否则，它就会被当作整数 `1` 与 `<custom-ident>` 一起指定。

- `<integer> && <custom-ident>?`
  - : 将第 n 条网格基线贡献给网格单元布置。如果指定的是负数，则指的是从下边界向上边界计算的反向顺序。如果提供的是 \<custom-ident>，那么只有以此命名的基线才会被计算。如果所命名的基线数超过了网格线数，为了找到该位置，所有隐式的网格线会被假定拥有这个命名。
    {{cssxref("integer")}} 值不能为 `0`。
- `span && [ <integer> || <custom-ident> ]`

  - : 为网格单元定义一个跨度，使得网格单元的网格区域中的一条边界远离另一条边界线 n 条基线。如果提供的是 \<custom-ident>，则只有以此命名的基线才会被计算。如果网格线不足，则假定与搜索方向对应的显式网格一侧的所有隐式网格线都具有该名称。

    如果忽略 \<integer> ，它就默认设为 `1`。它的值也不能为 0。

### 形式语法

{{csssyntax}}

## 示例

### HTML Content

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS Content

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-row: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-row: span 2 / 7;
}
```

{{EmbedLiveSample("Example", "200px", "200px")}}

## IE 中的问题

IE11 不支持网格单元的自动布置。除非显式地注释 `-ms-`{{cssxref("grid-column")}} 和 `-ms-`{{cssxref("grid-row")}}，否则所有单元都会在网格的第一行/列结束。这里有一个使用 JavaScript 提供自动注释的工具：[source repository](https://github.com/motine/css_grid_annotator).

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
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
