---
title: ':first-letter'
slug: Web/CSS/::first-letter
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/::first-letter
original_slug: Web/CSS/:first-letter
---
{{ CSSRef() }}

### Podsumowanie

Pseudoelement odnoszący się do pierwszej litery w bloku.

### Składnia

    element::first-letter { własności }

### Przykłady

    p::first-letter { text-transform: uppercase; }

Przykład zamieni w każdym paragrafie pierwszą literę na wielką.

    p::first-letter { color: red; }

Przykład zmieni kolor pierwszej litery na czerwony w każdym elemencie `p`

### Notatki

Pseudoelementy nie mogą być negowane poprzez {{ Cssxref(":not") }}.

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/1998/REC-CSS2-19980512/selector.html#first-letter)
- [CSS 3](http://www.w3.org/TR/css3-selectors/#first-letter)

### Zobacz także

{{ Cssxref("text-transform") }}
