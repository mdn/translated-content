---
title: ':first-child'
slug: Web/CSS/:first-child
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/:first-child
---
{{ CSSRef() }}

### Podsumowanie

Pseudoklasa `:first-child` sprawia iż własności stosowane są do elementu tylko wtedy gdy jest on pierwszym węzłem potomnym swojego rodzica. `:first-child` ignoruje węzły tekstowe. Pseudoklasą, która działa identycznie, jednak uwzględnia węzły tekstowe jest {{ Cssxref(":first-node") }}.

### Składnia

    selektor:first-child { własności }

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

<!---->

    span:first-child { font-weight: bold; }

Powyższy zapis pogrubi czcionkę wewnątrz wszystkich elementów `span`, które są pierwszymi dziećmi swoich rodziców. Zostaną tutaj pogrubione słowa "**pierwszy**":

1.  W pierwszym przypadku span o id `first` jest pierwszym dzieckiem elementu `body`
2.  W drugim przypadku span o id `dfirst` jest pierwszym dzieckiem elementu `div`

    div:first-child:last-child { background-color: red; }

Ten przykład ustawi czerwony kolor tła wszystkim elementom `div`, które są jedynymi dziećmi swojego rodzica.

    <table>
      <tr>
        <td>Nagłówek k1</td>
        <td>Nagłówek k2</td>
      </tr>
      <tr>
        <td>Wiersz k1</td>
        <td>Wiersz k2</td>
      </tr>
      <tr>
        <td>Wiersz k1</td>
        <td>Wiersz k2</td>
      </tr>
      <tr>
        <td>Wiersz k1</td>
        <td>Wiersz k2</td>
      </tr>
    </table>

<!---->

    table tr:first-child { background-color: red; }

Ten przykład ustawi czerwone tło pierwszemu wierszowi tabeli (nagłówkowi).
UWAGA: Ten przykład ma za zadanie pokazać jak działa pseudoklasa `:first-child`.

### Notatki

### Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref(":after") }}, {{ Cssxref(":last-child") }}

{{ languages( { "en": "en/CSS/:first-child", "fr": "fr/CSS/:first-child" } ) }}
