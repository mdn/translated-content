---
title: direction
slug: Web/CSS/direction
---

{{CSSRef}}

The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).

{{EmbedInteractiveExample("pages/css/direction.html")}}

Заметьте, что направление текста обычно задано в документе (т.е. с помощью [HTML's `dir` attribute](/ru/docs/Web/HTML/Global_attributes/dir)), а не посредством прямого использования свойства `direction`.

The property sets the base text direction of block-level elements and the direction of embeddings created by the {{Cssxref("unicode-bidi")}} property. It also sets the default alignment of text, block-level elements, and the direction that cells flow within a table row.

Unlike the `dir` attribute in HTML, the `direction` property is not inherited from table columns into table cells, since CSS inheritance follows the document tree, and table cells are inside of rows but not inside of columns.

The `direction` and {{cssxref("unicode-bidi")}} properties are the two only properties which are not affected by the {{cssxref("all")}} shorthand property.

## Syntax

```css
/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: unset;
```

### Values

- `ltr`
  - : Text and other elements go from left to right. This is the default value.
- `rtl`
  - : Text and other elements go from right to left.

For the `direction` property to have any effect on inline-level elements, the {{Cssxref("unicode-bidi")}} property's value must be `embed` or `override`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting right-to-left direction

```css
blockquote {
  direction: rtl;
}
```

## Specifications

| Specification                                                 | Status                          | Comment             |
| ------------------------------------------------------------- | ------------------------------- | ------------------- |
| {{SpecName('CSS3 Writing Modes', '#direction', 'direction')}} | {{Spec2('CSS3 Writing Modes')}} | No change.          |
| {{SpecName('CSS2.1', 'visuren.html#direction', 'direction')}} | {{Spec2('CSS2.1')}}             | Initial definition. |

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("unicode-bidi")}}
- {{Cssxref("writing-mode")}}
