---
title: column-gap
slug: Web/CSS/column-gap
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`column-gap`** 属性用来设置元素列之间的间隔（{{glossary("gutters","gutter")}}）大小。

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

`column-gap` 一开始是 [Multi-column 布局](/zh-CN/docs/Web/CSS/CSS_multicol_layout)下的特有属性，后来在其他布局中也使用这个属性。如 [CSS 盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)中的表述，该属性已经可以在 Multi-column（多列布局）、Flexible Box（弹性盒子）以及 Grid layout（网格布局）中使用。

## 语法

```css
/* Keyword value */
column-gap: normal;

/* <length> values */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

`column-gap` 属性可以用以下值来表示。

### 取值

- `normal`
  - : 表示列之间的间隔宽度。在 `多列布局` 时默认间隔为 `1em`，其他类型布局默认间隔为 0。
- {{cssxref("&lt;length&gt;")}}
  - : 用 {{cssxref("&lt;length&gt;")}} 来定义列之间的间隔大小。而且 {{cssxref("&lt;length&gt;")}} 值必须是非负数的。
- {{cssxref("&lt;percentage&gt;")}}
  - : 用 {{cssxref("&lt;percentage&gt;")}}（百分比）来定义列之间的间隔大小。同样的，{{cssxref("&lt;percentage&gt;")}} 值也必须是非负数的。

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
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
```

#### 结果

{{EmbedLiveSample('Flex 布局', "auto", "120px")}}

### Grid 布局

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 结果

{{EmbedLiveSample("Grid 布局", "auto", "120px")}}

### Multi-column 布局

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  `column-gap` property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

#### 结果

{{EmbedLiveSample("Multi-column 布局", "auto", "120px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("row-gap")}}、{{cssxref("gap")}}
- 网格布局指南：_[网格布局基本概念 - 网格间距](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#网格间距)_
- Multi-column 布局指南：_[Styling Columns](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Styling_columns)_
