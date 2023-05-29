---
title: minmax()
slug: Web/CSS/minmax
original_slug: Web/CSS/minmax()
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS)函数 **`minmax()`** 定义了一个长宽范围的闭区间，它与[CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)一起使用。

```css
/* <inflexible-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* <fixed-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* <inflexible-breadth>, <fixed-breadth> values */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

## 语法

此函数包含两个参数，_最小值_ 和 _最大值_.

每个参数分别是`<length>`、`<percentage>`、`<flex>`的一种，或者是`max-content`、`min-content`、或`auto`之一。

如果 _最大值_ < _最小值_，则*最大值*被忽略并且 `minmax(最小值, 最大值)` 被看成*最小值*。{{cssxref("flex_value","&lt;flex&gt;")}} 值作为最大值时设置网格轨道的弹性系数；作为最小值时无效。

### 取值

- {{cssxref("&lt;length&gt;")}}
  - : 非负长度。
- {{cssxref("&lt;percentage&gt;")}}
  - : 相对于列轨道中网格容器的内联大小的非负百分比，以及行轨道中网格容器的块长宽。如果网格容器的长宽取决于其轴的长宽，则`<percentage>` 必须取值为`auto`。{{glossary("user agent")}} 可将轨道的内部长宽贡献调整为网格容器的长宽，并按将导致百分比达到的最小值来增加轨道的最终长宽。
- {{cssxref("&lt;flex&gt;")}}
  - : 单位为`fr`的非负维度，指定轨道弹性布局的系数值。每个`<flex>`长度的轨道都以其系数值比例均分剩余空间。
- `max-content`
  - : 表示网格的轨道长度自适应内容最大的那个单元格。
- `min-content`
  - : 表示网格的轨道长度自适应内容最小的那个单元格。
- `auto`
  - : 作为最大值时，等价于 `max-content`。作为最小值时，它表示轨道中单元格最小长宽 (由{{cssxref("min-width")}}/{{cssxref("min-height")}}) 的最大值。

### 形式语法

{{csssyntax}}

## 示例

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(max-content, 300px) minmax(200px, 1fr) 150px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>
    Item as wide as the content,<br/>
    but at most 300 pixels.
  </div>
  <div>
    Item with flexible width but a minimum of 200 pixels.
  </div>
  <div>
    Inflexible item of 150 pixels width.
  </div>
</div>
```

### 结果

{{EmbedLiveSample("示例", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 网格布局指南：_[Basic concepts of grid layout - track sizing with minmax()](</zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Track_sizing_and_minmax()>)_
- 视频教程：_[Introducing minmax()](http://gridbyexample.com/video/series-minmax/)_

1.
2. [**CSS**](/zh-CN/docs/Web/CSS)
3. [**CSS 索引**](/zh-CN/docs/Web/CSS/Reference)
4. [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
5. **指南**

   1. [网格布局的基本概念](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   2. [与其他布局方法的关系](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
   3. [基于线的定位](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
   4. [网格模板区域](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [使用命名线布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
   6. [网格布局中的自动定位](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [网格布局中的盒模型对齐](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [网格、逻辑值和书写模式](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS 网格布局和可及性](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS 网格布局和渐进增强](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [使用网格实现常见布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

6. **属性**

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

7. **术语表**

   1. [网格（Grid）](/zh-CN/docs/Glossary/Grid)
   2. [网格线（Grid lines）](/zh-CN/docs/Glossary/Grid_lines)
   3. [网格轨道（Grid tracks）](/zh-CN/docs/Glossary/Grid_tracks)
   4. [网格单元格（Grid cell）](/zh-CN/docs/Glossary/Grid_cell)
   5. [网格区域（Grid areas）](/zh-CN/docs/Glossary/Grid_areas)
   6. [网格间隙（Gutters）](/zh-CN/docs/Glossary/Gutters)
   7. [网格轴（Grid Axis）](/zh-CN/docs/Glossary/Grid_Axis)
   8. [网格行（Grid row）](/zh-CN/docs/Glossary/Grid_rows)
   9. [网格列（Grid column）](/zh-CN/docs/Glossary/Grid_column)
