---
title: outline
slug: Web/CSS/outline
tags:
  - CSS
  - CSS:Dokumentacje
  - CSS:Rozszerzenia_Mozilli
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/outline
---
{{CSSRef}}

## Podsumowanie

W aplikacjach opartych na Gecko `-moz-outline` jest używany do ustawiania konturu elementu. Kontur jest linią rysowaną na zewnątrz krawędzi obramowania w celu wyróżnienia elementu.

{{cssinfo}}

## Składnia

    -moz-outline: [-moz-outline-color || -moz-outline-style || -moz-outline-width | inherit];

### Wartości

- \-moz-outline-color
  - : Ustawia kolor konturu. Zobacz {{ Cssxref("-moz-outline-color") }}.
- \-moz-outline-style
  - : Ustawia styl konturu. Zobacz {{ Cssxref("-moz-outline-style") }}.
- \-moz-outline-width
  - : Ustawia szerokość konturu. Zobacz {{ Cssxref("-moz-outline-width") }}.

## Powiązane własności

- {{ Cssxref("-moz-outline-color") }} ustawia kolor konturu.
- {{ Cssxref("-moz-outline-offset") }} odsuwa kontur od elementu.
- {{ Cssxref("-moz-outline-radius") }} ustawia zaokrąglenie rogów konturu.
- {{ Cssxref("-moz-outline-radius-bottomleft") }} ustawia zaokrąglenie dolnego lewego rogu.
- {{ Cssxref("-moz-outline-radius-bottomright") }} ustawia zaokrąglenie dolnego prawego rogu.
- {{ Cssxref("-moz-outline-radius-topleft") }} ustawia zaokrąglenie górnego lewego rogu.
- {{ Cssxref("-moz-outline-radius-topright") }} ustawia zaokrąglenie górnego prawego rogu.
- {{ Cssxref("-moz-outline-style") }} ustawia styl konturu.
- {{ Cssxref("-moz-outline-width") }} ustawia szerokość konturu.

## Przykłady

```css
hbox.example {
  /* ciągły czerwony kontur o szerokości 10px */
  -moz-outline: red solid 10px;
}
```
