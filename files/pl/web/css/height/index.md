---
title: height
slug: Web/CSS/height
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/height
---
{{ CSSRef() }}

### Podsumowanie

Własność `height` definiuje w elemencie wysokość obszaru zawartości. Obszar zawartości znajduje się*wewnątrz* dopełnienia, obramowania i marginesów elementu.

- {{ Xref_cssinitial() }}: {{ Cssxref("auto") }}
- Stosowana do: elementy blokowe i elementy podmieniane
- {{ Xref_cssinherited() }}: nie
- Procenty: odnoszą się do wysokości zawierającego bloku
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Składnia

    height: <length> | <percentage> | auto | inherit

### Wartości

- **length** : może być w jednostkach px, cm, in
- **percentage** : % określone jako procenty wysokości zawierającego bloku
- **auto** : przeglądarka obliczy i wybierze wysokość dla określonego elementu

### Przykłady

[Zobacz przykład](/samples/cssref/height.html)

    table { height: 100%; }

    img { height: 200px; }

    form { height: auto; }

### Uwagi

Własności {{ Cssxref("min-height") }} i {{ Cssxref("max-height") }} nadpisują {{ Cssxref("height") }}.

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#height)
- [CSS 2.1](http://www.w3.org/TR/CSS21/visudet.html#the-height-property)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Netscape          | 4                |
| Opera             | 3.5              |

### Zobacz także

[box model](pl/CSS/box_model), {{ Cssxref("width") }}, {{ Cssxref("-moz-box-sizing") }}, {{ Cssxref("min-height") }}, {{ Cssxref("max-height") }}





{{ languages( { "en": "en/CSS/height", "es": "es/CSS/height", "fr": "fr/CSS/height" } ) }}
