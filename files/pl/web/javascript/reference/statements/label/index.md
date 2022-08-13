---
title: etykieta
slug: Web/JavaScript/Reference/Statements/label
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/label
original_slug: Web/JavaScript/Referencje/Polecenia/etykieta
---
### Podsumowanie

Pozwala na oznaczenie punktu w kodzie, do którego będzie można przejść za pomocą poleceń `break` lub `continue`.

Przykładowo, można zastosować etykietę do oznaczenia pętli, a następnie użyć poleceń `break` lub `continue`, by zaznaczyć, czy program powinien przerwać pętlę czy kontynuować jej wykonywanie.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Polecenie</td>
    </tr>
    <tr>
      <td>Zaimplementowane w:</td>
      <td>JavaScript 1.2, NES 3.0</td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262, Edycja 3</td>
    </tr>
  </tbody>
</table>

### Składnia

    etykieta :
       polecenie

### Parametry

- `etykieta`
  - : Dowolny identyfikator języka JavaScript, który nie jest słowem zarezerwowanym.

<!---->

- `polecenie`
  - : Polecenia. Polecenie `break` może być użyte z dowolnym poleceniem oznaczonym etykietą, a `continue` można użyć z zapętlonymi poleceniami oznaczonymi etykietami.

### Przykłady

Przykład użycia etykiety z poleceniem `break`
znajduje się w rodziale [`break`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/break). Przykład użycia etykiety z poleceniem `continue` znajduje się w rozdziale [`continue`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/continue).

### Zobacz także

`break,continue`

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/label", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/label", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/label", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/label" } ) }}
