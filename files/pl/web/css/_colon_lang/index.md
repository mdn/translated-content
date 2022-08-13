---
title: ':lang'
slug: Web/CSS/:lang
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/:lang
---
{{ CSSRef() }}

### Podsumowanie

Pseudoklasa `:lang` pozwala na dopasowanie własności dla elementów w określonym języku. W `HTML4` odnosi się do atrybutu `lang`. W XML-u do `xml:lang`.

### Składnia

    selektor:lang(symbol) { własności }

Gdzie `symbol` to symbol języka zgodny z[](http://www.ietf.org/rfc/rfc3066.txt)

### [Przykłady](http://www.ietf.org/rfc/rfc3066.txt)

    p:lang(pl) {własności }

[Zostaną zastosowane własności dla wszystkich elementów `P`, których atrybut `lang` ustawiony jest na `pl`.](http://www.ietf.org/rfc/rfc3066.txt)

### [Notatki](http://www.ietf.org/rfc/rfc3066.txt)

[Jeśli dany element nie ma przepisanego atrybutu `lang` pod uwagę brany jest język ustawiony dla całego dokumentu.](http://www.ietf.org/rfc/rfc3066.txt)



### [Specyfikacje](http://www.ietf.org/rfc/rfc3066.txt)

- [CSS 2.1](http://www.w3.org/TR/1998/REC-CSS2-19980512/selector.html#lang)
- [CSS 3](http://www.w3.org/TR/css3-selectors/#lang-pseudo)

### Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref(":empty") }}
