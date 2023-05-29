---
title: column-fill
slug: Web/CSS/column-fill
---

{{CSSRef("CSS Multi-columns")}}

The `column-fill` CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using `auto`, just take up the room the content needs.

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("column-fill")}}
```

```css
column-fill: auto;
column-fill: balance;

/* Global values */
column-fill: inherit;
column-fill: initial;
column-fill: unset;
```

### Values

- `auto`
  - : Is a keyword indicating that columns are filled sequentially.
- `balance`
  - : Is a keyword indicating that content is equally divided between columns.

## Examples

```css
.content-box {
  column-count: 4;
  column-rule: 1px solid black;
  column-fill: balance;
  height: 200px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
