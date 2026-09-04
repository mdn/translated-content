---
title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

**`column-rule-width`** [CSS](/zh-CN/docs/Web/CSS) 属性设置多列布局中列之间绘制的线条的宽度。

{{InteractiveExample("CSS Demo: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: medium;
```

```css interactive-example-choice
column-rule-width: thick;
```

```css interactive-example-choice
column-rule-width: 12px;
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
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## 语法

```css
/* 关键字值 */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <length> 值 */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* 全局值 */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

`column-rule-width` 属性被指定为单个 `<'border-width'>` 值。

### 值

- `<'border-width'>`
  - : 是由 {{ cssxref("border-width") }} 定义的关键字，定义列规则的宽度。它可以是 {{cssxref("&lt;length&gt;")}} 或 `thin`、 `medium`、或 `thick` 关键字之一。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置属性宽度为 4px 的列规则

#### HTML

```html
<p>
  这是分成三列的文本。在 `column-rule-width`
  属性中用于更改列与列之间的线条宽度。修改列之间线条的宽度。你不觉得这很棒吗？
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: 4px;
}
```

#### 结果

{{EmbedLiveSample("设置属性宽度为 4px 的列规则")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
