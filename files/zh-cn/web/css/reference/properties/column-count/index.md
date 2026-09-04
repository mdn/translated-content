---
title: column-count
slug: Web/CSS/Reference/Properties/column-count
l10n:
  sourceCommit: f30eb42442f75f493ebb5ff1f119abf263592d54
---

**column-count** [CSS](/zh-CN/docs/Web/CSS) 属性将一个元素的内容分成指定数量的列。

{{InteractiveExample("CSS Demo: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  text-align: left;
}
```

## 语法

```css
/* 关键字值 */
column-count: auto;

/* <integer> 值 */
column-count: 3;

/* 全局值 */
column-count: inherit;
column-count: initial;
column-count: revert;
column-count: revert-layer;
column-count: unset;
```

### 取值

- `auto`
  - : 用来表示列的数量由其他 CSS 属性指定，例如 {{cssxref("column-width")}}。
- {{cssxref("&lt;integer&gt;")}}
  - : 是个严格的正整型 {{cssxref("&lt;integer&gt;")}}，用来描述元素内容被划分的理想列数。假如 {{cssxref("column-width")}} 也被设置为非零值，此参数仅表示所允许的最大列数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 例子

### 将段落拆分为三列

#### HTML

```html
<p class="content-box">
  这是一段使用了 CSS <code>column-count</code>
  属性分割成三列的文字。文字平均分布在各列中，这是最后一段内容。
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
}
```

#### 结果

{{EmbedLiveSample('将段落拆分为三列', 'auto', 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("column-width")}}、{{CSSXref("columns")}} 简写属性
- {{CSSXref("column-rule-color")}}、{{CSSXref("column-rule-style")}}、{{CSSXref("column-rule-width")}}、{{CSSXref("column-rule")}} 简写属性
- [多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)（学习多列布局属性）
- [多列式布局的基础概念](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
