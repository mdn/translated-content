---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/do...while
original_slug: Web/JavaScript/Referencje/Polecenia/do...while
---
### Podsumowanie

Wykonuje zadane polecenia dopóki warunek jest spełniony. Polecenia wykonywane są przynajmniej raz.

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

    do
       polecenia
    while (warunek);

### Parametry

- `polecenia`
  - : Blok poleceń, który jest wykonywany przynajmniej raz. i jest wykonywany ponownie tak długo, jak `warunek` jest spełniony.

<!---->

- `warunek`
  - : Obliczany przy każdym przejściu pętli. Jeśli `warunek` ma wartość _prawda_, polecenia w bloku go poprzedzającym są wykonywane ponownie. Kiedy `warunek` osiągnie wartość _fałsz_, sterowanie przepływa do następnego polecenia po pętli `do...while`

### Przykłady

#### Przykład: Zastosowanie `do...while`

W poniższym przykładzie pętla `do...while` wykonywana jest przynajmniej raz, a następnie jej wykonywanie jest powtarzane tak długo, aż `i` będzie większe lub równe 5.

    do {
       i+=1;
       document.write(i);
    } while (i<5);

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/do...while", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/do...while", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/do...while", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/do...while" } ) }}
