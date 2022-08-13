---
title: box-sizing
slug: Web/CSS/box-sizing
tags:
  - CSS
translation_of: Web/CSS/box-sizing
---
{{ CSSRef() }}

## Podsumowanie

`box-sizing` jest używane przez przeglądarki oparte na Mozilli do zmiany domyślnego modelu pudełkowego CSS, używanego do obliczania szerokości i wysokości elementów. Możliwe jest użycie tej własności do zezwolenia Mozilli na naśladowanie zachowania przeglądarek, które nieprawidłowo wspierają specyfikację modelu pudełkowego CSS, chociaż nie jest to zalecane, jako że większość przeglądarek zgodnych ze standardami nie wspiera tej własności.

- Wartość początkowa: content-box
- Dotyczy: wszystkie elementy
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: jako określone

## Składnia

    box-sizing: content-box | border-box | padding-box

### Wartości

- content-box
  - : Jest to domyślny styl, jak określa go standard CSS. Własności `width` i `height` są wymierzane zawierając tylko zawartość, ale nie `border`, `margin` lub `padding`.
- padding-box
  - : Własności `width` i `height` zawierają rozmiar dopełnienia (`padding`), ale nie zawierają obramowania (`border`) ani marginesu (`margin`).
- border-box
  - : Własności `width` i `height` zawierają dopełnienie i obramowanie, ale nie margines. Jest to model pudełkowy używany przez Internet Explorer, kiedy dokument nie jest w trybie zgodności ze standardami [.](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dhtmltechcol/dndhtml/cssenhancements.asp)

## Przykłady

    .exampleone {
    	box-sizing: padding-box;
    }
