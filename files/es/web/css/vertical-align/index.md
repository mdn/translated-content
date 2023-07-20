---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{ CSSRef() }}

## Resumen

La propiedad `vertical-align` de [CSS](/es/docs/CSS) especifica el alineado vertical de un elemento en línea o una celda de una tabla.

{{cssinfo}}

## Sintaxis

```
vertical-align: baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>
```

### Valores (para elementos en línea)

La mayoría de los valores de alinean verticalmente el elemento de forma relativa al elemento padre:

- `baseline`
  - : Alinea la línea base del elemento con la línea base del padre. La línea base de algunos [elementos reemplazados](/es/docs/CSS/Replaced_element), como {{HTMLElement("textarea")}} no está especificado en la especificación HTML, que significa que su comportamiento puede cambiar en un navegador u otro.
- `sub`
  - : Alinea la línea base del elemento con la línea subscript del elemento padre.
- `super`
  - : Alinea la línea base del elemento con la línea superscript del elemento padre.
- `text-top`
  - : Aligns the top of the element with the top of the parent element's font.
- `text-bottom`
  - : Aligns the bottom of the element with the bottom of the parent element's font.
- `middle`
  - : Aligns the middle of the element with the middle of lowercase letters in the parent.
- [`<length>`](/es/docs/CSS/length)
  - : Aligns the baseline of the element at the given length above the baseline of its parent.
- `<percentage>`

  - : Like \<length> values, with the percentage being a percent of the {{ Cssxref("line-height") }} property.

    For elements that do not have a baseline, the bottom margin edge is used instead.

    However, two values vertically align the element relative to the entire line rather than relative to its parent:

- `top`
  - : Align the top of the element and its descendants with the top of the entire line.
- `bottom`
  - : Align the bottom of the element and its descendants with the bottom of the entire line.

Negative values are allowed.

### Valores (para celdas de tablas)

- `baseline` (and `sub`, `super`, `text-top`, `text-bottom`, `<length>`, and `<percentage>`)
  - : Align the baseline of the cell with the baseline of all other cells in the row that are baseline-aligned.
- `top`
  - : Align the top padding edge of the cell with the top of the row.
- `middle`
  - : Center the padding box of the cell within the row.
- `bottom`
  - : Align the bottom padding edge of the cell with the bottom of the row.

Negative values are allowed.

## Ejemplos

```css
img {
  vertical-align: bottom;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ Cssxref("line-height") }}, {{ Cssxref("text-align") }}, {{ Cssxref("margin") }}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
