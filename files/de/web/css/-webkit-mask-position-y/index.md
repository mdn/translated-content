---
title: '-webkit-mask-position-y'
slug: Web/CSS/-webkit-mask-position-y
translation_of: Web/CSS/-webkit-mask-position-y
---
{{CSSRef}}{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-y` legt die anfängliche vertikale Position eines Maskenbilds (Bild mit einer Maske) fest.

```css
/* Keyword values */
-webkit-mask-position-y: top;
-webkit-mask-position-y: center;
-webkit-mask-position-y: bottom;

/* <percentage> values */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* <length> values */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* Multiple values values */
-webkit-mask-position-y: 50px, 25%, -3em;

/* Global values */
-webkit-mask-position-y: inherit;
-webkit-mask-position-y: initial;
-webkit-mask-position-y: unset;
```

{{cssinfo}}

## Syntax

### Werte

- `<length-percentage>`
  - : Eine Länge, die die Position der oberen Seite des Bildes relativ zur oberen Kante der Box angibt. Die Prozentsätze werden anhand der vertikalen Abmessung des Box-Padding-Bereichs berechnet. Ein Wert von `0%` bedeutet, dass der obere Rand des Bilds mit der oberen Füllkante der Box ausgerichtet ist und ein Wert von `100%` bedeutet, dass die untere Kante des Bildes mit der unteren Füllkante der Box ausgerichtet ist.
- **`top`**
  - : Gleichwertig zu `0%`.
- **`bottom`**
  - : Gleichwertig zu `100%`.
- **`center`**
  - : Gleichwertig zu `50%`.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: bottom;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## Spezifikation

Kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Sehenswert

{{cssxref("-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-x")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}
