---
title: grid-row
slug: Web/CSS/grid-row
---

{{CSSRef}}

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

{{EmbedLiveSample("示例", "200px", "200px")}}

## IE 中的问题

IE11 不支持网格单元的自动布置。除非显式地注释 `-ms-`{{cssxref("grid-column")}} 和 `-ms-`{{cssxref("grid-row")}}，否则所有单元都会在网格的第一行/列结束。这里有一个使用 JavaScript 提供自动注释的工具：[source repository](https://github.com/motine/css_grid_annotator).

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- Video tutorial: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
