---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/break
original_slug: Web/JavaScript/Referencje/Polecenia/break
---
### Podsumowanie

Przerywa aktualnie wykonywaną pętlę, konstrukcję `switch` i przekazuje sterowanie programu do polecenia za pętlą lub za wskazaną etykietą.

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
      <td>
        ECMA-262 (wersja bez etykiety)
        <p>ECMA-262, Edycja 3 (wersja z etykietą)</p>
      </td>
    </tr>
  </tbody>
</table>

### Składnia

`break {{ mediawiki.external('<i>etykieta</i>') }}`

### Parametry

- `etykieta`
  - : Identyfikator przypisany etykiecie polecenia.

### Opis

Polecenie `break` może zawierać opcjonalną etykietę, która pozwala programowi na wyjście z bloku poleceń oznaczonego etykietą. Polecenia w bloku oznaczonym etykietą mogą być dowolnego rodzaju.

### Przykłady

#### Przykład: Zastosowanie `break`

Poniższa funkcja zawiera polecenie `break`, które przerywa pętlę
[`while`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/while), kiedy `e` jest równe 3, a następnie zwraca wartość 3 \* `x`.

    function testBreak(x) {
       var i = 0;
       while (i < 6) {
          if (i == 3)
             break;
          i++;
       }
       return i*x;
    }

### Zobacz także

`continue,etykieta,switch`

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/break", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/break", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/break", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/break" } ) }}
