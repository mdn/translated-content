---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
---

{{CSSRef}}

CSS 属性 **`grid-auto-columns`** 指定了隐式创建的网格纵向轨道（{{glossary("grid tracks", "track")}}）的宽度。

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

如果一个表格项目被定位在没有使用 {{cssxref("grid-template-columns")}} 显式指定尺寸的列中，隐式的 {{glossary("grid", "grid")}} 轨道就会被创建出来支撑它。显式地定位到超出范围的列中，或者通过自动布局算法创建额外的列，就会发生上述情况。

## 语法

```css
/* 以下是不同类型的属性值示例 */
/* Keyword values */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* <length> values */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* <percentage> values */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* <flex> values */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* minmax() values */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* fit-content() values */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* multiple track-size values */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr)
  minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: unset;
```

### 属性值

- `<length>`
  - : 指定一个非负的数作为尺寸。
- `<percentage>`
  - : 一个非负的百分数（{{cssxref("percentage", "&lt;percentage&gt;")}}），相对于 grid 容器的尺寸。如果 grid 的尺寸不确定，该百分值就会被当作 `auto` 对待。
- `<flex>`
  - : 一个以 `fr` 为单位非负的尺寸，表示轨道的伸缩系数。每个以 `<flex>` 定义尺寸的轨道会以该伸缩系数为比例来占据剩余的可用空间。如果使用 `minmax()`，则表示自动缩小并指定最大尺寸（也就是 `minmax(auto, <flex>)`）。
- `max-content`
  - : 一个关键字，表示以网格项的最大的内容来占据网格轨道。
- `min-content`
  - : 一个关键字，表示以网格项的最大的最小内容来占据网格轨道。
- `minmax(min, max)`
  - : 定义一个尺寸范围，即大于或等于 min 值，并且小于或等于 max 值。如果 max 值小于 min 值，那么 max 值会被忽略并且最终表现为 min 值。最大值可以设置为网格轨道系数值`<flex>` ，但最小值则不行。
- `fit-content(argument)`
  - : 相当于公式 `min(max-content, max(auto, argument))`，类似于`auto` 的计算 (即 `minmax(auto, max-content)`)，除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- `auto`

  - : 如果该网格轨道为最大时，该属性等同于 `<max-content>` ，为最小时，则等同于 `<min-content>`。

    Note: `auto` 轨道尺寸 (且只为 `auto` 值时) 才可以被 {{cssxref("align-content")}} 和 {{cssxref("justify-content")}} 属性拉伸。

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
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("示例", "410px", "100px")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout - sizing rows in the implicit grid](/zh-CN/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)_
- Video tutorial: _[Introducing Grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)_
