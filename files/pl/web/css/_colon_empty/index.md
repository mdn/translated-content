---
title: ':empty'
slug: Web/CSS/:empty
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/:empty
---
{{ CSSRef() }}

### Podsumowanie

Pseudoklasa `:empty` odnosi się do elementów, które nie posiadają żadnych węzłów potomnych (wliczając w to węzły tekstowe).

### Składnia

    selektor:empty { własności }

### Przykłady

    span:empty::before { content: "pusty span"; font-style:italic; }

Powyższy przykład doda przed każdym pusty elementem span tekst "_pusty span_ "

    *:not(:empty) {własności }

Przykład nada własności wszystkim niepustym elementom.

### Notatki

Jeśli wewnątrz elementu znajduje się jakikolwiek znak, wliczając w to białe znaki, element nie będzie traktowany jako `empty`

### Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref("content") }}, {{ Cssxref(":not") }}



{{ languages( { "en": "en/CSS/:empty", "es": "es/CSS/vac\u00edo", "fr": "fr/CSS/:empty" } ) }}
