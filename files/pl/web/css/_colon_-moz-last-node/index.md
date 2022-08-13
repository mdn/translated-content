---
title: ':last-node'
slug: Web/CSS/:-moz-last-node
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/:-moz-last-node
---
{{Non-standard_header}}{{ CSSRef() }}

## Podsumowanie

Pseudoklasa `:last-node` sprawia iż własności stosowane są do elementu tylko wtedy gdy jest on ostatnim węzłem potomnym swojego rodzica. `:last-node` uwzględnia również węzły tekstowe składające się niebiałych znaków. Pseudoklasą, która działa identycznie, jednak nie uwzględnia węzłów tekstowych jest {{ Cssxref(":last-child") }}.

## Składnia

    selektor:-moz-last-node { własności }

### Przykłady

    <html>
      <body>
      Trochę tekstu.
        <span id="first">pierwszy</span>
        <div>
          <span id="dfirst">pierwszy</span>
          <span id="dsecond">drugi</span>
        </div>
        <span id="second">drugi</span>
      </body>
    </html>

    span:-moz-last-node { font-weight: bold; }

Powyższy zapis pogrubi czcionkę wewnątrz wszystkich elementów `span`, które są ostatnimi dziećmi swoich rodziców. Zostaną tutaj pogrubione obydwa słowa "**drugi**".

1.  span o id `dsecond` jest ostatnim dzieckiem elementu div
2.  span o id `second` jest ostatnim dzieckiem elementu body



    div:-moz-first-node:last-child { background-color: red; }

Ten przykład ustawi czerwony kolor tła wszystkim elementom `div`, które są jedynymi dziećmi swojego rodzica. Jednak za elementem może znajdować się węzeł tekstowy.

    div:-moz-first-child:last-node { background-color: red; }

Ten przykład natomiast ustawi czerwony kolor tła wszystkim elementom `div`, które są jedynymi dziećmi swojego rodzica. Przed elementem może znajdować się węzeł tekstowy.

## Notatki

Pseudoklasa `:-moz-last-node` nie jest obecnie obsługiwana. Skorzystaj z {{ Cssxref(":-moz-last-node") }}

## Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref(":first-node") }}
