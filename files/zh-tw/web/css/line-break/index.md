---
title: line-break
slug: Web/CSS/line-break
---

{{CSSRef}}

**`line-break`** CSS 屬性能夠設定在中文、日文和韓文(CJK) 的文字中，遇到標點或符號時該如何斷行。

```css
/* Keyword values */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* Global values */
line-break: inherit;
line-break: initial;
line-break: unset;
```

{{cssinfo}}

## Syntax

### Values

- `auto`
  - : 以預設的斷行規則斷開文字。
- `loose`
  - : Break text using the least restrictive line break rule. Typically used for short lines, such as in newspapers.
- `normal`
  - : Break text using the most common line break rule.
- `strict`
  - : Break text using the most stringent line break rule.
- `anywhere`
  - : There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces, or in the middle of words, disregarding any prohibition against line breaks, even those introduced by characters with the GL, WJ, or ZWJ character class or mandated by the word-break property. The different wrapping opportunities must not be prioritized. Hyphenation is not applied.

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
