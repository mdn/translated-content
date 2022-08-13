---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/if...else
original_slug: Web/JavaScript/Referencje/Polecenia/if...else
---
### Podsumowanie

Wykonuje blok poleceń, jeśli dany warunek jest spełniony. Jeśli warunek nie jest spełniony, może zostać wykonany inny blok poleceń.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Polecenie</td>
    </tr>
    <tr>
      <td>Zaimplementowane w:</td>
      <td>JavaScript 1.0, NES 2.0</td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Składnia

    if (warunek) {
       polecenia1
    }
    [else {
       polecenia2
    }]

### Parametry

- `warunek`
  - : może być dowolnym wyrażeniem JavaScriptu przyjmującym wartości logiczne (true, false) lub mogącym być na wartości logiczne przekonwertowane. Warunek musi być ujęty w nawiasach. Jeśli warunek jest spełniony (ma wartość true), wykonywane są polecenia w bloku `polecenia1`.

<!---->

- `polecenia1`, `polecenia2`
  - : mogą być dowolnymi poleceniami JavaScriptu, w tym zagnieżdżonymi poleceniami `if...else`. Bloki wielu poleceń muszą być ujęte w nawiasy klamrowe.

### Opis

Nie powinno się używać prostych operatorów przypisania w wyrażeniu warunkowym. Przykładowo, nie należy używać kodu podobnego do poniższego:

    if(x = y)
    {
       /* zrób coś */
    }

Jeśli potrzebujesz użyć przypisania w wyrażeniu warunkowym, użyj dodatkowej pary nawiasów. Na przykład: `if( (x = y) )`.

### Przykłady

#### Przykład: Zastosowanie `if...else`

    if (cipher_char == from_char) {
       result = result + to_char
       x++}
    else
       result = result + clear_char

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/if...else", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/if...else", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/if...else", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/if...else" } ) }}
