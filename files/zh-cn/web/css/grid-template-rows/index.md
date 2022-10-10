---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
original_slug: Web/CSS/网格-模板-列
---

`grid-template-rows` 该属性是基于 {{glossary("grid rows", "网格行")}} 的维度，去定义网格线的名称和网格轨道的尺寸大小。

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## 语法

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-rows: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-rows: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: unset;
```

该属性可能包含如下值：

- 关键字 `none`
- 或者 `<track-list>` 值
- 或者 `<auto-track-list>` 值。

### 值

- `none`
  - : 这个关键字表示不明确的网格。所有的行和其大小都将由{{cssxref("grid-auto-rows")}} 属性隐式的指定。
- {{cssxref("&lt;length&gt;")}}
  - : 非负值的长度大小。
- {{cssxref("&lt;percentage&gt;")}}
  - : 非负值且相对于网格容器的 {{cssxref("percentage", "&lt;百分比&gt;")}}。如果网格容器的尺寸大小依赖网格轨道的大小（比如 inline-grid），则百分比值将被视为`auto`。
    为了遵守网格的百分比，网格轨道本身定义的大小，将自动被调整为相对网格容器大小，并且是以最小量将网格轨道调整到最终的大小。
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : 非负值，用单位 `fr` 来定义网格轨道大小的弹性系数。每个定义了 `<flex>` 的网格轨道会按比例分配剩余的可用空间。当外层用一个 `minmax()` 表示时，它将是一个自动最小值 (即 `minmax(auto, <flex>)` ) 。
- `max-content`
  - : 是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。
- `min-content`
  - : 是一个用来表示以网格项的最大的最小内容来占据网格轨道的关键字。
- {{cssxref("minmax", "minmax(min, max)")}}

  - : 是一个来定义大小范围的属性，大于等于 min 值，并且小于等于 max 值。如果 max 值小于 min 值，则该值会被视为 min 值。最大值可以设置为网格轨道系数值`<flex>` ，但最小值则不行。

    Note: 该规范在将来可能会允许设置最小值为 `flex` ，也会调整网格轨道算法 ([track sizing algorithm](https://www.w3.org/TR/css-grid-1/#track-sizing-algorithm)) 计算出正确的大小。

- `auto`

  - : 如果该网格轨道为最大时，该属性等同于 `<max-content>` ，为最小时，则等同于 `<min-content>` 。

    Note: 网格轨道大小为 `auto` (且只有为 `auto` ) 时，才可以被属性{{cssxref("align-content")}} 和 {{cssxref("justify-content")}} 拉伸。

- {{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : 相当于公式 `min(max-content, max(auto, argument))`，类似于`auto` 的计算 (即 `minmax(auto, max-content)`)，除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : 表示网格轨道的重复部分，以一种更简洁的方式去表示大量而且重复行的表达式。

### 正式语法

{{csssyntax}}

## 示例

### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

### 结果

{{EmbedLiveSample("示例", "40px", "100px")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- 网格布局指南：_[Basic concepts of grid layout - Grid Tracks](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Grid_Tracks)_
- 视频教程：_[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_

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
