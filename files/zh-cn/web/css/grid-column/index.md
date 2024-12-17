---
title: grid-column
slug: Web/CSS/grid-column
---

{{CSSRef}}

`grid-column` CSS 属性是 {{cssxref("grid-column-start")}} 和 {{cssxref("grid-column-end")}} 的简写属性，用于指定网格项目的大小和位置{ 通过为它的网格位置贡献线条，跨度或不添加任何内容（自动），从而指定其 {{glossary("grid area","grid area","网格区域")}}。

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## 语法

如果给出两个`<grid-line>`值，它们之间用“ /”分隔。将`grid-column-start`的正手设置为斜线之前的值，并将`grid-column-end`的正手设置为斜线之后的值。

每个`<grid-line>`值可以指定为：

- 要么是`auto`关键字
- 或`<custom-ident>`值
- 或`<integer>`值
- 或者`<custom-ident>`和`<integer>`，两者之间用空格分隔
- 或关键字 span 与`<custom-ident>`或`<integer>`或两者一起使用。

### 值

`auto`

是一个关键字，指示该属性对网格项目的放置没有任何作用，表示自动放置，自动跨度或默认跨度为 1。

`<custom-ident>`

如果有一个名为"\<custom-ident>-start"/"\<custom-ident>-start"的命名行，则它将第一行添加到网格项目的位置。

> [!WARNING]
> 命名网格区域会自动生成这种形式的隐式命名行，因此请指定`grid-column: foo;`将选择该命名网格区域的开始/结束边缘（除非在其之前明确指定了另一条名为`foo-start / foo-end`的行）。

否则，将其视为与`<custom-ident>`一起指定了整数 1。

`<integer> && <custom-ident>?`

将第 n 条网格线贡献到网格项目的位置。如果给定一个负整数，则从显式网格的末端开始，反向计数。

如果将名称指定为\<custom-ident>，则仅计算具有该名称的行。如果没有足够多的具有该名称的线，则假定所有隐式网格线都具有该名称，以查找该位置。

{{cssxref("integer")}}的值为`0`无效。

`span && [ <integer> || <custom-ident> ]`
将网格范围扩展到该网格项目的位置，以使该网格项目的网格区域的相应边缘距离相对边缘 n 行。
如果将名称指定为\<custom-ident>，则仅计算具有该名称的行。如果没有足够多的具有该名称的线，则为计算此跨度，假定与搜索方向相对应的显式网格侧的所有隐式网格线均具有该名称。

如果省略\<integer>，则默认为`1`。负整数或 0 无效。

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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px;
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-column: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-column: span 2 / 7;
}
```

{{EmbedLiveSample("示例", "100%", "100px")}}

## IE 问题

IE11 不支持自动放置网格项目。除非用-ms-{{cssxref("grid-column")}}和-ms-{{cssxref("grid-row")}}显式注释，否则所有项目都以网格的第一行/列结尾。可以使用一些 JavaScript 来启用自动注释：源存储库。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- Video tutorial: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
