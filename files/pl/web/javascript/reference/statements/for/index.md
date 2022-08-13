---
title: for
slug: Web/JavaScript/Reference/Statements/for
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/for
original_slug: Web/JavaScript/Referencje/Polecenia/for
---
### Podsumowanie

Tworzy pętlę, która składa się z trzech opcjonalnych wyrażeń, załączonych w nawiasach i oddzielonych średnikami, po których występuje instrukcja wykonywana w pętli.

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

    for ([wyrażenie-wstępne]; [warunek]; [wyrażenie-inkrementacji])
       instrukcja

### Parametry

- `wyrażenie-wstępne`
  - : Wyrażenie (włącznie z wyrażeniami przypisania) lub deklaracja zmiennej. Zazwyczaj używane do zainicjalizowania zmiennej licznika. Wyrażenie to może opcjonalnie deklarować nowe zmienne za pomocą słowa kluczowego `var`. Zmienne te nie są lokalne dla pętli, inaczej mówiąc, mają one taki sam zasięg jak pętla `for`.

- `warunek`
  - : Wyrażenie sprawdzane podczas każdego przejścia przez pętlę. Jeśli warunek jest prawdziwy, wykonywana jest `instrukcja`. Sprawdzenie warunku jest opcjonalne. Jeśli zostanie pominięte, warunek jest zawsze uznawany jako prawdziwy.

- `wyrażenie-inkrementacji`
  - : Ogólnie używane do aktualizacji lub inkrementacji wartości zmiennej licznika.

- `instrukcja`
  - : Instrukcja, wykonywana dopóki warunek oceniany jest jako prawdziwy. Aby wykonać większą ilość instrukcji wewnątrz pętli, użyj instrukcji [block](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/block) (`{ ... }`), aby pogrupować te instrukcje.

### Przykład

#### Przykład: Zastosowanie `for`

Następująca instrukcja `for` rozpoczyna się deklaracją zmiennej `i` oraz zainicjalizowaniem jej wartości początkowej `0`. Instrukcja sprawdza kolejno czy wartość zmiennej `i` jest mniejsza od dziewięciu, wykonuje dwie następujące po sobie instrukcje oraz zwiększa o 1 wartość zmiennej `i` podczas każdego kolejnego przejścia przez pętlę.

    for (var i = 0; i < 9; i++) {
       n += i;
       myfunc(n);
    }

### Zobacz także

`while,do...while`

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/for", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/for", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/for", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/for" } ) }}
