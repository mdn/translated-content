---
title: text-transform
slug: Web/CSS/text-transform
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/text-transform
---
{{ CSSRef() }}

## Podsumowanie

Własność CSS 'text-transform' definiuje, czy tekst w elemencie powinien być wyświetlony kapitalikami lub wielkimi literami.

{{cssinfo}}

## Składnia

    text-transform : capitalize | uppercase | lowercase| none

### Wartości

- capitalize
  - : Pierwsza litera każdego słowa jest zmieniana na wielką, inne zostają bez zmian.
- uppercase
  - : Wszystkie litery są przekształcane na wielkie.
- lowercase
  - : Wszystkie litery są przekształcane na małe.
- none
  - : Żadne zmiany wielkości liter nie są dokonywane.

## Examples

    p::first-line {
      text-transform: uppercase;
    }

## Specyfikacje

- [CSS level 2 revision 1](http://www.w3.org/TR/CSS21/text.html#caps-prop)
- [CSS level 1](http://www.w3.org/TR/CSS1#text-transform)
- [W3C Cascading Style Sheets, level 3](http://www.w3.org/TR/css3-text/) (jeszcze niegotowa)

## Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | ?                |
| Firefox           | ?                |
| Netscape          | ?                |
| Opera             | ?                |
| Safari            | ?                |
