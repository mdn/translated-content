---
title: column-rule-style
slug: Web/CSS/column-rule-style
---

{{CSSRef("CSS Multi-columns")}}

CSS 特性 `column-rule-color` 让你可以设置在多列布局中被画在两列之间的规则（线条）的样式。

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("column-rule-style")}}
```

```
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

column-rule-style: inherit;
```

### Values

- \<br-style>
  - : Is a keyword defined by {{ cssxref("border-style") }} describing the style of the rule. The styling must be interpreted as in the collapsing border model.

## Example

```css
#header {
  -moz-column-rule-style: inset;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
