---
title: ':first-node'
slug: Web/CSS/:-moz-first-node
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/:-moz-first-node
original_slug: Web/CSS/:first-node
---
{{Non-standard_header}}{{ CSSRef() }}

## Podsumowanie

Pseudoklasa `:first-node` sprawia iż własności stosowane są do elementu tylko wtedy gdy jest on pierwszym węzłem potomnym swojego rodzica. `:first-node` uwzględnia również węzły tekstowe składające się niebiałych znaków. Pseudoklasą, która działa identycznie, jednak nie uwzględnia węzłów tekstowych jest {{ Cssxref(":first-child") }}.

## Składnia

    selektor:first-node { własności }

## Przykłady

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

    span:first-node { font-weight: bold; }

Powyższy zapis pogrubi czcionkę wewnątrz wszystkich elementów `span`, które są pierwszymi dziećmi swoich rodziców. Zostanie tutaj pogrubione tylko jedno słowo "**pierwszy**", ponieważ span o id `first` nie jest pierwszym dzieckiem elementu `body`. Pierwszym dzieckiem elementu `body` jest węzeł tekstowy.

    div:first-node:last-child { background-color: red; }

Ten przykład ustawi czerwony kolor tła wszystkim elementom `div`, które są jedynymi dziećmi swojego rodzica. Jednak za elementem może znajdować się węzeł tekstowy.

    div:first-child:last-node { background-color: red; }

Ten przykład natomiast ustawi czerwony kolor tła wszystkim elementom `div`, które są jedynymi dziećmi swojego rodzica. Przed elementem może znajdować się węzeł tekstowy.

## Notatki

Pseudoklasa `:first-node` nie jest obecnie obsługiwana. Skorzystaj z {{ Cssxref(":-moz-first-node") }}

## Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref(":last-node") }}
