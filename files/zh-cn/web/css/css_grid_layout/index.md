---
title: 网格布局
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - CSS Grid Layout
  - Grid Layout
  - Grid 布局
  - Grids
  - Layout
  - css layout
  - 参考
  - 布局
  - 总览
translation_of: Web/CSS/CSS_Grid_Layout
---
**CSS 网格布局**擅长于将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是 HTML 生成了这些区域）。

像表格一样，网格布局让我们能够按行或列来对齐元素。然而在布局上，网格比表格更可能做到或更简单。例如，网格容器的子元素可以自己定位，以便它们像 CSS 定位的元素一样，真正的有重叠和层次。

## 基本示例

以下示例显示了一个三列轨道的网格，其中创建的行最小为 100 像素，最大为自动。条目使用线性定位放置在网格上。

```css hidden
* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-row: 2 / 5;
  grid-column: 1;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{ EmbedLiveSample('example', '500', '440') }}

## 参考

### CSS 属性

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

### CSS 函数

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### CSS 数据类型

- {{cssxref("&lt;flex&gt;")}}

### 术语表

- [网格（Grid）](/zh-CN/docs/Glossary/Grid)
- [网格线（Grid lines）](/zh-CN/docs/Glossary/Grid_lines)
- [网格轨道（Grid tracks）](/zh-CN/docs/Glossary/Grid_tracks)
- [网格单元格（Grid cell）](/zh-CN/docs/Glossary/Grid_cell)
- [网格区域（Grid areas）](/zh-CN/docs/Glossary/Grid_areas)
- [网格间隙（Gutters）](/zh-CN/docs/Glossary/Gutters)
- [网格轴（Grid Axis）](/zh-CN/docs/Glossary/Grid_Axis)
- [网格行（Grid row）](/zh-CN/docs/Glossary/Grid_rows)
- [网格列（Grid column）](/zh-CN/docs/Glossary/Grid_column)

## 指南

- [Basic concepts of Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship of Grid Layout to other layout methods](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Grid template areas](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Logical Values and Writing Modes](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realising common layouts using CSS Grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)

## 外部资源

- [Examples from Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - a collection of usage examples and video tutorials](http://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/zh-CN/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)
- [Grid Garden](http://cssgridgarden.com/) - 一个学习 CSS 网格的游戏
- <https://css-tricks.com/snippets/css/complete-guide-grid/>
- <https://css-tricks.com/snippets/css/css-grid-starter-layouts/>
- <https://css-tricks.com/getting-started-css-grid/>

## 规范

{{Specifications}}

1.  [**CSS**](/zh-CN/docs/Web/CSS)
2.  [**CSS 索引**](/zh-CN/docs/Web/CSS/Reference)
3.  [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
4.  **指南**

    1.  [网格布局的基本概念](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [与其他布局方法的关系](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [基于线的定位](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [网格模板区域](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [使用命名线布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [网格布局中的自动定位](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [网格布局中的盒模型对齐](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [网格、逻辑值和书写模式](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS 网格布局和可及性](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS 网格布局和渐进增强](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [使用网格实现常见布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **属性**

    1.  [grid](/zh-CN/docs/Web/CSS/grid)
    2.  [grid-area](/zh-CN/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/zh-CN/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/zh-CN/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/zh-CN/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/zh-CN/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/zh-CN/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/zh-CN/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/zh-CN/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/zh-CN/docs/Web/CSS/grid-gap)
    11. [grid-row](/zh-CN/docs/Web/CSS/grid-row)
    12. [grid-row-end](/zh-CN/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/zh-CN/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/zh-CN/docs/Web/CSS/grid-row-start)
    15. [grid-template](/zh-CN/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/zh-CN/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/zh-CN/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/zh-CN/docs/Web/CSS/grid-template-rows)

6.  **术语表**

    1.  [网格（Grid）](/zh-CN/docs/Glossary/Grid)
    2.  [网格线（Grid lines）](/zh-CN/docs/Glossary/Grid_lines)
    3.  [网格轨道（Grid tracks）](/zh-CN/docs/Glossary/Grid_tracks)
    4.  [网格单元格（Grid cell）](/zh-CN/docs/Glossary/Grid_cell)
    5.  [网格区域（Grid areas）](/zh-CN/docs/Glossary/Grid_areas)
    6.  [网格间隙（Gutters）](/zh-CN/docs/Glossary/Gutters)
    7.  [网格轴（Grid Axis）](/zh-CN/docs/Glossary/Grid_Axis)
    8.  [网格行（Grid row）](/zh-CN/docs/Glossary/Grid_rows)
    9.  [网格列（Grid column）](/zh-CN/docs/Glossary/Grid_column)
