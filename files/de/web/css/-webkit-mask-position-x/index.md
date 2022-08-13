---
title: '-webkit-mask-position-x'
slug: Web/CSS/-webkit-mask-position-x
translation_of: Web/CSS/-webkit-mask-position-x
---
{{CSSRef}}{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-x` legt die anfängliche horizontale Position eines Maskenbilds (Bild mit einer Maske) fest.

```css
/* Keyword values */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* <percentage> values */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* <length> values */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* Multiple values values */
-webkit-mask-position-x: 50px, 25%, -3em;

/* Global values */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: unset;
```

{{cssinfo}}

## Syntax

### Werte

- `<length-percentage>`
  - : Eine Länge, die die Position der linken Kante des Bildes relativ zur linken Füllkante der Box angibt. Die Prozentsätze werden anhand der horizontalen Abmessung des Box-Padding-Bereichs berechnet. Das heißt, ein Wert von `0%` bedeutet, dass die linke Kante des Bildes mit der linken Füllkante der Box ausgerichtet ist und ein Wert von `100%` bedeutet, dass die rechte Kante des Bildes mit der rechten Füllkante der Box ausgerichtet ist.
- **`left`**
  - : Gleichwertig mit `0%`.
- **`center`**
  - : Gleichwertig mit `50%`.
- **`right`**
  - : Gleichwertig mit `100%`.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: 25%;
}
```

## Spezifikation

Kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Sehenswert

{{cssxref("-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}
