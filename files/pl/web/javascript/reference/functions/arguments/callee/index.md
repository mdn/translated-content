---
title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
original_slug: Web/JavaScript/Referencje/Funkcje/arguments/callee
---
### Podsumowanie

Określa aktualnie wykonywaną funkcję.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">
        Własność obiektów
        <a href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments"
          >arguments</a
        >
        i
        <a
          href="pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function/arguments"
          >Function.arguments</a
        >
        (Wycofywany)
      </td>
    </tr>
    <tr>
      <td>Zaimplementowano w:</td>
      <td>
        JavaScript 1.2
        <p>
          JavaScript 1.4: <code>callee</code> wycofywany jako własność
          <code>Function.arguments</code>, zachowany jako własność zmiennej
          lokalnej <code>arguments</code> funkcji.
        </p>
      </td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Opis

`callee` jest własnością zmiennej lokalnej `arguments` dostępnej wewnątrz wszystkich obiektów funkcji; `callee` jako własność [`Function.arguments`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function/arguments) nie jest już używana (również sam obiekt `Function.arguments` jest wycofywany).

`arguments.callee` pozwala anonimowym funkcjom odwoływać się do siebie samych, co jest potrzebne w przypadku rekursywnych anonimowych funkcji.

Słowo kluczowe `this` nie odwołuje się do aktualnie wykonywanej funkcji. Użyj własności `callee`, aby odwołać się do funkcji z poziomu jej ciała.

### Przykłady

#### Przykład: Zastosowanie `arguments.callee` w anonimowych funkcjach rekursywnych

Funkcja rekursywna musi mieć możliwość odwołania się do siebie samej. Zazwyczaj funkcja odwołuje się do samej siebie wykorzystując swoją nazwę. Jednakże anonimowa funkcja nie posiada nazwy i jeśli w łańcuchu zasięgu nie istnieje zmienna odwołująca się do tej funkcji, tj. funkcja nie jest przypisana do żadnej zmiennej, to funkcja ta nie ma możliwości odwołania się do siebie samej (anonimowe funkcje można tworzyć przy użyciu [wyrażenia function](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Operatory/Operatory_specjalne/Operator_function) lub [konstruktora `Function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function)). W tym miejscu wkracza `arguments.callee`.

Poniższy przykład definiuje funkcję, która z kolei definiuje i zwraca funkcję obliczającą silnię.

    function makeFactorialFunc() {
       alert('tworzenie funkcji obliczającej silnię!');
       return function(x) {
          if (x <= 1)
             return 1;
          return x * arguments.callee(x - 1);
       };
    }

    var result = makeFactorialFunc()(5); // zwraca 120 (5 * 4 * 3 * 2 * 1)

this example isn't very practical, but then again, there are few practical cases where arguments.callee is necessary, and most of the those cases involve closures

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Functions/arguments/callee", "es": "es/Referencia_de_JavaScript\_1.5/Funciones/arguments/callee", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Fonctions/arguments/callee", "ja": "ja/Core_JavaScript\_1.5\_Reference/Functions/arguments/callee" } ) }}
