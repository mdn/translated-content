---
title: ':not'
slug: Web/CSS/:not
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/:not
---
{{ CSSRef() }}

### Podsumowanie

Pseudoklasa `:not` sprawia, iż własności są stosowane do elementów, które nie spełniają podanego kryterium.

### Składnia

    selektor:not(selektor) { własności }

### Przykłady

    *:not(DIV) { color: red; }

Przykład nada czerwony kolor czcionki wszystkim elementom za wyjątkiem elementów `DIV`.

    input:not([DISABLED]) { border-color: green; }

Przykład nada wszystkim elementom `INPUT`, które są aktywne (nie są `DISABLED`), zmieni kolor obramowania na zielone.

    input:not([TYPE=PASSWORD]) {własności }

Przykład przydzieli własności wszystkim elementom `INPUT`, które mają atrybut `TYPE` inny niż `PASSWORD`.

    *:not(P) {własności }

Przykład przydzieli własności wszystkim elementom innym, niż `P`.

    a:not(:hover) {własności }

Przykład nada własności wszystkim elementom `A`, na których nie stoi kursor. Jest to równoważne z:

    a:link:visited {własności }

<!---->

    body > input:not([disabled]):not([type=text]) {własności }

Przykład przypisze własności wszystkim elementom `INPUT`, które są dziećmi `BODY` oraz, które nie mają atrybutu `DISABLED` i jednocześnie nie są typu `TEXT`.

### Notatki

Pseudoklasa `:not` nie może być negowana przez inne `:not`.

### Specyfikacje

- [CSS 3](http://www.w3.org/TR/css3-selectors/#negation)

### Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref("content") }}, {{ Cssxref(":empty") }}
