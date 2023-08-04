---
title: column-rule-width
slug: Web/CSS/column-rule-width
---

{{CSSRef("CSS Multi-columns")}}

CSS 特性 `column-rule-width` 让你可以设置在多列布局中被画在两列之间的规则（线条）的宽度。

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("column-rule-width")}}
```

```
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* Length values */
column-rule-width: 1px;
column-rule-width: 2.5em;

column-rule-width: inherit;
```

### Values

- \<br-width>
  - : Is a {{cssxref("&lt;length&gt;")}} or one of the `thin`, `medium` or `thick` keyword describing the width of the rule separating two columns.

## Example

```css
#header {
  column-rule-width: thick;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
