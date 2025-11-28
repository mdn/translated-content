---
title: grid
slug: Web/CSS/Reference/Properties/grid
---

**`grid`** 是一个 CSS 简写属性，可以用来设置以下属性：
显式网格属性 {{cssxref("grid-template-rows")}}、{{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-areas")}}，
隐式网格属性 {{cssxref("grid-auto-rows")}}、{{cssxref("grid-auto-columns")}} 和 {{cssxref("grid-auto-flow")}}，
间距属性 {{cssxref("grid-column-gap")}} 和 {{cssxref("grid-row-gap")}}。

{{InteractiveExample("CSS Demo: grid")}}

```css interactive-example-choice
grid: auto-flow / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid: auto-flow dense / 40px 40px 1fr;
```

```css interactive-example-choice
grid: repeat(3, 80px) / auto-flow;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-column: auto / span 3;
  grid-row: auto / span 2;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-column: auto / span 2;
}
```

> [!NOTE]
> 你仅可在一个 `grid` 属性中声明显式或隐式网格。与其他简写属性同样，若有次级属性未被声明，其将使用初始值。另外，尽管此简写声明无法设置网格的槽（gutter），槽会被该声明重置。

## 语法

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: unset;
```

### 值

- `<'grid-template'>`
  - : 定义了 {{cssxref("grid-template")}}，其包含 {{cssxref("grid-template-columns")}}，{{cssxref("grid-template-rows")}} 和 {{cssxref("grid-template-areas")}}。
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  通过 {{cssxref("grid-template-rows")}} 属性显式设置行轨道来设置自动流（{{cssxref("grid-template-columns")}} 属性设为 `none`），并通过 {{cssxref("grid-auto-columns")}} 明确该如何自动重复列轨道（同时{{cssxref("grid-auto-rows")}}属性设为 auto）。{{cssxref("grid-auto-flow")}} 属性也被相应的设置为 `column`，并可附有 dense。
  - : 所有其余 `grid` 次级属性被重置为初始值。
- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : 通过 {{cssxref("grid-template-columns")}} 属性显式设置列轨道来设置自动流（{{cssxref("grid-template-rows")}} 属性设为 `none`），并通过 {{cssxref("grid-auto-rows")}} 明确该如何自动重复行轨道（同时{{cssxref("grid-auto-columns")}}属性设为 `auto`）。{{cssxref("grid-auto-flow")}} 属性也被相应的设置为 `row`，并可附有 dense。
    所有其余 `grid` 次级属性被重置为初始值。

### 标准语法

{{csssyntax}}

## 实例

### HTML

```html
<div id="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### CSS

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

### 结果

{{EmbedLiveSample("实例", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- _网格布局指南：[Line-based placement with CSS Grid](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)_
- _网格布局指南：[Grid template areas - Grid definition shorthands](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)_
