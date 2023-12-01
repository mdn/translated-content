---
title: 网格布局
slug: Web/CSS/CSS_grid_layout
---

{{CSSRef}}

**CSS 网格布局**擅长于将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是 HTML 生成了这些区域）。

像表格一样，网格布局让我们能够按行或列来对齐元素。然而在布局上，网格比表格更可能做到或更简单。例如，网格容器的子元素可以自己定位，以便它们像 CSS 定位的元素一样，真正的有重叠和层次。

## 基本示例

以下示例显示了一个三列轨道的网格，其中创建的行最小为 100 像素，最大为自动。条目使用线性定位放置在网格上。

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233, 171, 88);
  border-radius: 5px;
  background-color: rgba(233, 171, 88, 0.5);
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

{{EmbedLiveSample("基本示例", "100%", "460")}}

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

- [Basic concepts of Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Relationship of Grid Layout to other layout methods](/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Grid template areas](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Layout using named grid lines](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-placement in CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box alignment in CSS Grid Layout](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Grid, Logical Values and Writing Modes](/zh-CN/docs/Web/CSS/CSS_grid_layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [CSS Grid and progressive enhancement](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [Realising common layouts using CSS Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout/Realising_common_layouts_using_CSS_Grid_)

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
