---
title: function
slug: Web/JavaScript/Reference/Statements/function
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/function
original_slug: Web/JavaScript/Referencje/Polecenia/function
---
### Podsumowanie

Deklaruje funkcję z określonymi parametrami.

Możesz również zdefiniować funkcję używając konstruktora [`Function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function) oraz [`operator function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Operatory/Operatory_specjalne/Operator_function) (wyrażenie funkcji).

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Instrukcja</td>
    </tr>
    <tr>
      <td>Zaimplementowana w:</td>
      <td>
        JavaScript 1.0, NES 2.0
        <p>
          JavaScript 1.5, NES 6.0: Dodano deklaracje funkcji warunkowych
          (rozszerzenie Netscape).
        </p>
      </td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Składnia

    function nazwa([argument] [, argument] [..., argument]) {
       instrukcje
    }

### Parametry

- `nazwa`
  - : Nazwa funkcji.

<!---->

- `argument`
  - : Nazwa argumentu, który ma zostać przekazany do funkcji. Funkcja może posiadać do 255 argumentów.

<!---->

- `instrukcje`
  - : Instrukcje, które stanowią ciało funkcji.

### Opis

Aby zwrócić wartość, funkcja musi zawierać instrukcję [`return`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/return) określającą wartość, która ma zostać zwrócona.

Funkcja utworzona za pomocą instrukcji `function` jest obiektem `Function` i posiada wszystkie własności, metody i zachowania obiektów `Function`. Zobacz [`Function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function), aby uzyskać szczegółowe informacje o funkcjach.

Funkcja może zostać zadeklarowana również wewnątrz wyrażenia. W takim przypadku funkcja jest zazwyczaj anonimowa. Zobacz [`operator function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Operatory/Operatory_specjalne/Operator_function), aby uzyskać więcej informacji o `function` (wyrażenie funkcji).

Funkcje mogą być deklarowane warunkowo. To znaczy, definicja funkcji może zostać zagnieżdżona wewnątrz instrukcji `if`. Technicznie rzecz biorąc, takie deklaracje nie są właściwie deklaracjami funkcji; są one wyrażeniami funkcji.

### Przykłady

#### Przykład: Zastosowanie `function`

Poniższy kod deklaruje funkcję, która zwraca całkowitą kwotę sprzedaży, gdy podano liczbę sprzedanych produktów `a`, `b` i `c`.

    function calc_sales(units_a, units_b, units_c) {
       return units_a*79 + units_b * 129 + units_c * 699;
    }

### Zobacz także

[`Funkcje`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje),
[`Function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function),
[`function operator`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Operatory/Operatory_specjalne/Operator_function)

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/function", "es": "es/Referencia_de_JavaScript\_1.5/Sentencias/function", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/function", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/function" } ) }}
