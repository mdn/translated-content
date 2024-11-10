---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
---

{{CSSRef}}

**`grid-template-columns`** 该属性是基于{{glossary("grid column", "网格列")}}的维度，去定义网格线的名称和网格轨道的尺寸大小。

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## 语法

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-columns:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: unset;
```

### 值

- `none`
  - : 这个关键字表示不明确的网格。所有的列和其大小都将由{{cssxref("grid-auto-columns")}} 属性隐式的指定。
- {{cssxref("&lt;length&gt;")}}
  - : 非负值的长度大小。
- {{cssxref("&lt;percentage&gt;")}}
  - : 非负值且相对于网格容器的 {{cssxref("percentage", "&lt;percentage&gt;")}}。如果网格容器的尺寸大小依赖网格轨道的大小（比如 inline-grid），则百分比值将被视为 `auto`。
    为了遵守网格的百分比，网格轨道本身定义的大小，将自动被调整为相对网格容器大小，并且是以最小量将网格轨道调整到最终的大小。
- {{cssxref("&lt;flex&gt;")}}
  - : 非负值，用单位 `fr` 来定义网格轨道大小的弹性系数。每个定义了 `<flex>` 的网格轨道会按比例分配剩余的可用空间。当外层用一个 `minmax()` 表示时，它将是一个自动最小值（即 `minmax(auto, <flex>)`）。
- `max-content`
  - : 是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。
- `min-content`
  - : 是一个用来表示以网格项的最大的最小内容来占据网格轨道的关键字。
- {{cssxref("minmax", "minmax(min, max)")}}
  - : 是一个来定义大小范围的属性，大于等于 min 值，并且小于等于 max 值。如果 max 值小于 min 值，则该值会被视为 min 值。最大值可以设置为网格轨道系数值`<flex>` ，但最小值则不行。
- `auto`

  - : 如果该网格轨道为最大时，该属性等同于 `<max-content>`，为最小时，则等同于 `<min-content>`。

    > [!NOTE]
    > 网格轨道大小为 `auto`（且只有为 `auto`）时，才可以被属性 {{cssxref("align-content")}} 和 {{cssxref("justify-content")}} 拉伸。

- {{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : 相当于公式 `min(max-content, max(auto, argument))`，类似于 `auto` 的计算（即 `minmax(auto, max-content)`），除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : 表示网格轨道的重复部分，以一种更简洁的方式去表示大量而且重复列的表达式。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
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

{{EmbedLiveSample("示例", "100%", "20px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("grid-template-rows")}}、{{cssxref("grid-template-areas")}}、{{cssxref("grid-template")}}
- 网格布局教程：_[Basic concepts of grid layout - Grid Tracks](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#Grid_Tracks)_
- 视频教程：_[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_
- [子网格](/zh-CN/docs/Web/CSS/CSS_grid_layout/Subgrid)
