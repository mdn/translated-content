---
title: while
slug: Web/JavaScript/Reference/Statements/while
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/while
original_slug: Web/JavaScript/Referencje/Polecenia/while
---
### Podsumowanie

Tworzy pętlę, która wylicza wyrażenie `i`, jeśli jest ono prawdą, wykonuje blok poleceń. Wykonywanie pętli powtarza się, póki warunek jest prawdziwy.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td colspan="2">Polecenie</td>
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

    while (warunek) {
      polecenia
    }

### Parametery

- `warunek`
  - : Wyliczany przed każdym wejściem w blok poleceń. Jeśli warunek jest prawdą, polecenia w bloku są wykonywane. Jeśli nie jest, sterowanie przepływa do pierwszego polecenia za pętlą.

- `polecenia`
  - : Blok poleceń wykonywanych póki warunek jest spełniony. Dobrą praktyką jest stosowanie w tym miejscu wcięć (indentacji), zwiększających czytelność kodu.

### Przykłady

Poniższa pętla `while` wykonuje się dopóki n jest mniejsze niż trzy.

    n = 0;
    x = 0;
    while(n < 3) {
      n ++;
      x += n;
    }

Po każdej iteracji pętla zwiększa n i dodaje je do x. Dlatego też x i n przyjmują następujące wartości:

- Po pierwszym przejściu: n = 1, x = 1
- Po drugim przejściu: n = 2, x = 3
- Po trzecim przejściu: n = 3, x = 6

Po ukończeniu trzeciego przejścia warunek n < 3 nie jest już spełniony, zatem wykonywanie pętli kończy się.

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/while", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/while", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/while", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/while" } ) }}
