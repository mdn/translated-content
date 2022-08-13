---
title: ':last-child'
slug: Web/CSS/:last-child
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/:last-child
---
{{ CSSRef() }}

### Podsumowanie

Pseudoklasa `:last-child` sprawia iż własności stosowane są do elementu tylko wtedy gdy jest on ostatnim węzłem potomnym swojego rodzica. `:last-child` ignoruje węzły tekstowe. Pseudoklasą, która działa identycznie, jednak uwzględnia węzły tekstowe jest {{ Cssxref(":last-node") }}.

### Składnia

    selektor:last-child { własności }

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

    span:last-child { font-weight: bold; }

Powyższy zapis pogrubi czcionkę wewnątrz wszystkich elementów `span`, które są ostatnimi dziećmi swoich rodziców. Zostaną tutaj pogrubione słowa "**drugi**":

1.  W pierwszym przypadku span o id `dsecond` jest ostatnim dzieckiem elementu `div`
2.  W drugim przypadku span o id `second` jest ostatnim dzieckiem elementu `body`

    div:first-child:last-child { background-color: red; }

Ten przykład ustawi czerwony kolor tła wszystkim elementom `div`, które są jedynymi dziećmi swojego rodzica.

### Notatki

### Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref(":first-child") }}

{{ languages( { "en": "en/CSS/:last-child", "fr": "fr/CSS/:first-child" } ) }}
