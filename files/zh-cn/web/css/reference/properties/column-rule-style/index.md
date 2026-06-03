---
title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

**`column-rule-style`** [CSS](/zh-CN/docs/Web/CSS) 属性设置多列布局中列之间绘制的线条的样式。

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: none;
```

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: solid;
```

```css interactive-example-choice
column-rule-style: double;
```

```css interactive-example-choice
column-rule-style: ridge;
column-rule-color: #88f;
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
/* <'border-style'> 值 */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* 全局值 */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

`column-rule-style` 属性可以指定为单个 `<'border-style'>` 值。

### 值

- `<'border-style'>`
  - : 是由 {{ cssxref("border-style") }} 定义的关键字，用于描述规则的样式，样式必须按照合并边框模型进行解释。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置虚线条列规则

#### HTML

```html
<p>
  这段文本由三列组成，使用 <code>column-rule-style</code>
  属性来更改列之间线条的样式。这难道不奇妙吗？
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### 结果

{{ EmbedLiveSample('设置虚线条列规则') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
