---
title: border-left-color
slug: Web/CSS/border-left-color
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/border-left-color
---
{{ CSSRef() }}

### Podsumowanie

`border-left-color` ustala kolor lewego obramowania elementu, poprzez konkretną wartość lub przez słowo kluczowe `transparent`.

- {{ Xref_cssinitial() }}: własność {{ Cssxref("color") }}
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: nie
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: gdy brane z własności 'color', wartość wyliczona 'color'; w innym przypadki, wartość podana

### Składnia

    border-left-color: color | transparent | inherit

### Wartości

- color
  - : Kolor może zostać podany przy pomocy szesnastkowej reprezentacji RGB, zwykłej wartości RGB lub przez predefiniowane słowo klucz.
- transparent
  - : Element nie ma własnego koloru, pokazuje kolor elementu spod niego.

### Powiązane własności

- {{ Cssxref("border-color") }}
- {{ Cssxref("border-bottom-color") }}
- {{ Cssxref("border-right-color") }}
- {{ Cssxref("border-top-color") }}

### Przykłady

[Zobacz przykład](/samples/cssref/border.html)

    element {
    	width: 300px;
            padding: 15px;
            border-bottom-size: 1px;
            border-bottom-style: solid;
            border-bottom-color: #000;
    }

### Notatki

- [Color Chart by VisiBone](http://html-color-codes.com/)

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/box.html#propdef-border-left-color)
- [CSS 3](http://www.w3.org/TR/css3-background/#border-left)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 6                |
| Opera             | 3.5              |



### Zobacz także

{{ Cssxref("border") }}, {{ Cssxref("border-left") }}, {{ Cssxref("border-left-style") }}, {{ Cssxref("border-left-width") }},

{{ languages( { "de": "de/CSS/border-left-color", "en": "en/CSS/border-left-color", "fr": "fr/CSS/border-left-color", "ja": "ja/CSS/border-left-color" } ) }}
