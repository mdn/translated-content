---
title: column-count
slug: Web/CSS/column-count
---

{{CSSRef}}

**column-count** [CSS](/zh-CN/docs/Web/CSS) 属性将一个元素的内容分成指定数量的列。

{{EmbedInteractiveExample("pages/css/column-count.html")}}

## 语法

```css
/* Keyword value */
column-count: auto;

/* <integer> value */
column-count: 3;

/* Global values */
column-count: inherit;
column-count: initial;
column-count: revert;
column-count: revert-layer;
column-count: unset;
```

### 取值

- `auto`
  - : 用来表示列的数量由其他 CSS 属性指定，例如 {{cssxref("column-width")}} 。
- {{cssxref("&lt;integer&gt;")}}
  - : 是个严格的正整型 {{cssxref("&lt;integer&gt;")}} ，用来描述元素内容被划分的理想列数。假如 {{cssxref("column-width")}} 也被设置为非零值，此参数仅表示所允许的最大列数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 例子

### 将段落拆分为三列

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS `column-count`
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
}
```

#### 结果

{{EmbedLiveSample('Splitting_a_paragraph_across_three_columns', 'auto', 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("column-width")}} ， {{CSSXref("columns")}} 速记
- {{CSSXref("column-rule-color")}} ， {{CSSXref("column-rule-style")}} ， {{CSSXref("column-rule-width")}} ， {{CSSXref("column-rule")}} 速记
- [多列布局](/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) （学习多列布局）
- [多栏式布局的基础概念](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
