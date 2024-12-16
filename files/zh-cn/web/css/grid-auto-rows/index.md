---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
---

{{CSSRef}}

CSS 属性 **`grid-auto-rows`** 用于指定隐式创建的行轨道大小。

{{EmbedInteractiveExample("pages/css/grid-auto-rows.html")}}

如果定位到某行中的网格元素没有使用 {{cssxref("grid-template-rows")}}来指定大小，则会隐式创建{{glossary("grid", "grid")}} 轨道来保存它。这可能在显示定位到超出范围的行，或者由自动放置算法创建额外的行时发生。

## 语法

```css
/* Keyword values */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length> values */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage> values */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex> values */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax() values */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* multiple track-size values */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: unset;
```

### 取值

- `<length>`
  - : 一个非负的长度。
- `<percentage>`
  - : 相对于网格窗口块尺寸的非负 {{cssxref("percentage", "&lt;percentage&gt;")}} 值。如果网格容器的块尺寸是不确定的，则百分比值将被视为 `auto`。
- `<flex>`

  - : 非负的、以 `fr` 为单位的维度指定轨道的弹性因子。每个 `<flex>`-尺寸的轨道都按其弹性因子的比例挤占剩余空间的一部分。

    当使用在 `minmax()` 符号外时，意味着最小值为 `auto` (例： `minmax(auto, <flex>)`).

- `max-content`
  - : 关键词，指明由网格元素中占用空间最大的那一个来决定轨道的尺寸。
- `min-content`
  - : 关键词，指明由网格元素中占用空间最小的那一个来决定轨道的尺寸。
- `minmax(min, max)`
  - : 函数符号，定义一个不小于`min`且不大于`max`的尺寸范围。如果`max`比`min`小，则`max`会被忽略，函数会被录作`min`处理。作为最大值，`<flex>` 值设置了轨道的弹性因子。作为最小值，会被当作 0 处理（或者最小内容——当网格容器指定了尺寸为最小内容）。
- `auto`

  - : 关键字，当用来指定最大值时与最大内容一致，当用来指定最小值时，它表示轨道中所有网格元素最小尺寸中的最大值（由{{cssxref("min-width")}}/{{cssxref("min-height")}}指定）。

    注意：`auto` 轨道尺寸（且仅有 `auto` 轨道尺寸）可配合{{cssxref("align-content")}} 和{{cssxref("justify-content")}} 属性使用。

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
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-rows: 100px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("示例", "210px", "210px")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关的 CSS 属性： {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- 网格布局指南：_[网格布局中的自动定位 - 隐式网格中的行尺寸](/zh-CN/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)_
- 视频教程：_[引入网格自动放置和排序](https://gridbyexample.com/video/series-auto-placement-order/)_
