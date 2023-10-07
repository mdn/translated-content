---
title: grid-area
slug: Web/CSS/grid-area
---

{{CSSRef}}

CSS 属性 **`grid-area`** 是一种对于 {{cssxref("grid-row-start")}}、{{cssxref("grid-column-start")}}、{{cssxref("grid-row-end")}} 和 {{cssxref("grid-column-end")}} 的简写，通过基线（line），跨度（span）或没有（自动）的网格放置在 {{glossary("grid rows", "grid row")}} 中指定一个网格项的大小和位置，继而确定 {{glossary("grid areas", "grid area")}} 的边界。

```css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area: some-grid-area 4;
grid-area: some-grid-area 4 / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: unset;
```

如果指定了 4 个 `<grid-line>` 的值，`grid-row-start` 会被设为第一个值，`grid-column-start` 为第二个值， `grid-row-end` 为第三个值，`grid-column-end` 为第四个值。

当 `grid-column-end` 被忽略时，若 `grid-column-start` 为一 {{cssxref("&lt;custom-ident&gt;")}}（自定义关键字数据类型）， `grid-column-end` 则为该 `<custom-ident>`；否则为 `auto`。

当 `grid-row-end` 被忽略时，若 `grid-row-start` 为一 `<custom-ident>`，`grid-row-end` 则为该 `<custom-ident>`；否则为 `auto`。

当 `grid-column-start` 被忽略时，若 `grid-row-start` 为一 `<custom-ident>`，则所有四项普通写法的属性值均为该值。否则为 `auto`。

网格面的属性亦可设为一 {{cssxref("&lt;custom-ident&gt;")}} 作为其名称，然后可通过 {{cssxref("grid-template-areas")}} 放置。

## 语法

```css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area: 4 some-grid-area;
grid-area: 4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: unset;
```

### 值

- `auto`
  - : 该关键字表明该属性未指定该如何纺织网格项目。网格项目会被以默认跨度（span）`1`自动放置。
- `<custom-ident>` 自定义关键字数据类型

  - : 如果存在以 '`<custom-ident>-start`'/'`<custom-ident>-end`' 命名的自定义基线，它会将第一个这样的基线贡献给网格单元以布置。

    **注意：** 被命名的网格区域（grid areas）会自动生成隐式的被命名的基线，因此指定 `grid-row: foo;` 将会选择这个命名区域的开始和结束的边界（除非在它之前存在显式指定的以 `foo-start`/`foo-end` 命名的其他基线）。

    否则，它就会被当作整数 `1` 与 `<custom-ident>` 一起指定。

- `<integer> && <custom-ident>?`
  - : 将第 n 条网格基线贡献给网格单元布置。如果指定的是负数，则指的是从下边界向上边界计算的反向顺序。如果提供的是 {{cssxref("&lt;custom-ident&gt;")}}，那么只有以此命名的基线才会被计算。如果所命名的基线数超过了网格线数，为了找到该位置，所有隐式的网格线会被假定拥有这个命名。
    {{cssxref("integer")}} 值不能为 `0`。
- `span && [ <integer> || <custom-ident> ]`

  - : 为网格单元定义一个跨度，使得网格单元的网格区域中的一条边界远离另一条边界线 n 条基线。如果提供的是

    {{cssxref("&lt;custom-ident&gt;")}}，则只有以此命名的基线才会被计算。如果网格线不足，则假定与搜索方向对应的显式网格一侧的所有隐式网格线都具有该名称。

    如果忽略 \<integer> ，它就默认设为 `1`。它的值也不能为 0。

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
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

{{EmbedLiveSample("示例", "100%", "150px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-template-areas")}}
- Grid Layout Guide: _[Grid template areas](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_
- Video tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_
