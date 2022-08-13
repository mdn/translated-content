---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/var
original_slug: Web/JavaScript/Referencje/Polecenia/var
---
### Podsumowanie

Deklaruje zmienną oraz opcjonalnie przypisuje jej wartość początkową.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Instrukcja</td>
    </tr>
    <tr>
      <td>Zaimplementowana w:</td>
      <td>JavaScript 1.0, NES 2.0</td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Składnia

`var varname1 {{ mediawiki.external('= <i>value1</i>') }}, varname2 {{ mediawiki.external('= <i>value2</i>') }}, ..., varnameN {{ mediawiki.external('= <i>valueN</i>') }};`

### Parametry

- `varnameN`
  - : Nazwa zmiennej. Może być dowolnym, dozwolonym identyfikatorem.

<!---->

- `valueN`
  - : Zainicjalizowanie wartości zmiennej. Może być dowolnym, dozwolonym wyrażeniem.

### Opis

Zasięgiem zmiennej jest aktualna funkcja lub, jeśli zmienna została zadeklarowana poza funkcją, aktualna aplikacja.

Użycie `var` poza funkcją jest opcjonalne; przypisanie wartości do niezadeklarowanej zmiennej domyślnie deklaruje ją jako zmienna globalną. Zalecane jest jednak, aby zawsze używać `var`, ponadto jest to konieczne wewnątrz funkcji w następujących przypadkach:

- Jeśli zmienna w zasięgu obejmującym funkcję (łącznie z zasięgiem globalnym) posiada tę samą nazwę.
- Jeśli funkcje rekurencyjne lub złożone używają zmiennych o tych samych nazwach, które mają być lokalne.

Niepowodzenie zadeklarowania zmiennej w tych przypadkach będzie najprawdopodobniej prowadzić do niespodziewanych wyników.

### Przykłady

#### Przykład: Zastosowanie `var`

Poniższy przykład deklaruje dwie zmienne, `num_hits` i `cust_no` i przypisuje im obu początkową wartość 0.

    var num_hits = 0, cust_no = 0;

### Zobacz także

[const](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/const)

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/var", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/var", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/var", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/var" } ) }}
