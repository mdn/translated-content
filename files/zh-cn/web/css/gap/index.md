---
title: gap (grid-gap)
slug: Web/CSS/gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - gap
  - recipe:css-property
translation_of: Web/CSS/gap
---
{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`gap`** 属性是用来设置网格行与列之间的间隙（{{glossary("gutters")}}），该属性是 {{cssxref("row-gap")}} 和 {{cssxref("column-gap")}} 的简写形式。

{{EmbedInteractiveExample("pages/css/gap.html")}}

## 语法

```css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

该属性用来表示 `<'row-gap'>` 和 `<'column-gap'>` 的值（`<'column-gap'>` 是可选的）。假如 `<'column-gap'>` 缺失的话，则会被设置成跟 `<'row-gap'>` 一样的的值。

`<'row-gap'>` 和 `<'column-gap'>` 都可以用 `<length>` 或者 `<percentage>` 来表示。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 网格线之间的间隙宽度。
- {{cssxref("&lt;percentage&gt;")}}
  - : 网格线直接的间隙宽度，相对网格容器的百分比。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### Flex 布局

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;

}
```

#### 结果

{{EmbedLiveSample('Flex_布局', "auto", "120px")}}

### Grid 布局

#### HTML

```html
<div id="grid">
  <div></div>
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

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 结果

{{EmbedLiveSample('Grid_布局', 'auto', 120)}}

### 多列布局

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column
  gap created with the CSS <code>gap</code> property.
  Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Result

{{EmbedLiveSample("多列布局", "auto", "120px")}}

## 规范

{{Specifications("css.properties.gap.grid_context")}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("row-gap")}}、{{cssxref("column-gap")}}
- 网格布局指南：_[网格布局基本概念 - 网格间距](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#网格间距)_
