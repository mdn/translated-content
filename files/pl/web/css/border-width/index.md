---
title: border-width
slug: Web/CSS/border-width
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/border-width
---
{{ CSSRef() }}

### Podsumowanie

`border-width` ustawia szerokość obramowania bloku.

- {{ Xref_cssinitial() }}: {{ Cssxref("medium") }}
- Stasowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: nie
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: długość całkowita; '0' jeśli stylem obramowania jest `none` lub `hidden`

### Składnia

    border-width: <border-width> {1,4} | inherit

### Wartości \<border-width>

- **\<border-width-value>**
  - : `thin | medium | thick | `{{cssxref("&lt;length&gt;")}} `|` {{cssxref("&lt;percentage&gt;")}}
- thin
  - : Cienkie obramowanie.
- medium
  - : Średnie obramowanie.
- thick
  - : Grube obramowanie.
- \<length>
  - : Grubość obramowania ma sprecyzowaną wartość. Sprecyzowana szerokość obramowania nie może być ujemna.
- \<percentage>
  - : Grubość obramowania ma wartość procentową, w procentach szerokości zawierającego bloku. Sprecyzowane szerokości nie mogą być ujemne.

Uwaga: Wartość `em` jest również dopuszczalna.

### Powiązane własności

- {{ Cssxref("border-bottom-width") }}
- {{ Cssxref("border-left-width") }}
- {{ Cssxref("border-right-width") }}
- {{ Cssxref("border-top-width") }}



### Przykłady

[Zobacz przykład](/samples/cssref/border.html)

    element {
        border-width: thin;
        border-style: solid;
        border-color: #000;
    }

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#border-width)
- [CSS 2.1](http://www.w3.org/TR/CSS21/box.html#border-width-properties)
- [CSS 3](http://www.w3.org/TR/css3-background/#border-width)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer |                  |
| Firefox           |                  |
| Netscape          |                  |
| Opera             |                  |



### Zobacz również

{{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }},

{{ languages( { "de": "de/CSS/border-width", "en": "en/CSS/border-width", "es": "es/CSS/border-width", "fr": "fr/CSS/border-width", "ja": "ja/CSS/border-width" } ) }}
