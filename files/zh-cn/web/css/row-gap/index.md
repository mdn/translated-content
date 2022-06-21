---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-property
  - row-gap
translation_of: Web/CSS/row-gap
---
{{CSSRef}}

**`row-gap`** 该 [CSS](/zh-CN/docs/Web/CSS) 属性用来设置行元素之间的间隙（{{glossary("gutters","gutter")}}）大小。

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

## 语法

```css
/* <length> values */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> value */
row-gap: 10%;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### 值

- `<length-percentage>`
  - : 表示行之间的间隔宽度。{{cssxref("&lt;percentage&gt;")}} 表示相对栅格容器的百分比。

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
  row-gap: 20px;
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
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 结果

{{EmbedLiveSample('Grid 布局', 'auto', 120)}}

## 规范

{{Specifications("css.properties.row-gap.grid_context")}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("column-gap")}}、{{cssxref("gap")}}
- 网格布局指南：_[网格布局基本概念 - 网格间距](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#网格间距)_
