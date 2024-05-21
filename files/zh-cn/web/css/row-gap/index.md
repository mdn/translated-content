---
title: row-gap
slug: Web/CSS/row-gap
l10n:
  sourceCommit: 353711e2f11b92232b532c82b10de2afca75f648
---

{{CSSRef}}

**`row-gap`** 该 [CSS](/zh-CN/docs/Web/CSS) 属性用来设置行元素之间的间隙（{{glossary("gutters","gutter")}}）大小。

规范的早期版本将此属性命名为 `grid-row-gap`，为了保持与旧网站的兼容性，浏览器仍然会将 `grid-row-gap` 视为 `row-gap` 的别名。

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

## 语法

```css
/* <length> 值 */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> 值 */
row-gap: 10%;

/* 全局值 */
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

### 弹性布局

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

{{EmbedLiveSample('弹性布局', "auto", "120px")}}

### 网格布局

#### HTML

```html
<div id="grid">
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
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 结果

{{EmbedLiveSample('网格布局', 'auto', 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("column-gap")}}、{{cssxref("gap")}}
- 网格布局指南：_[网格布局基本概念——网格间距](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#网格间距)_
