---
title: wyrażenie function*
slug: Web/JavaScript/Reference/Operators/function*
tags:
  - ECMAScript2015
  - Iterator
  - JavaScript
  - Operator
  - funkcja
translation_of: Web/JavaScript/Reference/Operators/function*
original_slug: Web/JavaScript/Referencje/Operatory/function*
---
{{jsSidebar("Operators")}}

Słowo kluczowe **`function*`** może być użyte do zdefiniowania funkcji generatora wewnątrz wyrażenia.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html")}}

## Składnia

    function* [nazwa]([param1[, param2[, ..., paramN]]]) {
       wyrażenia
    }

### Parametry

- `nazwa`
  - : Nazw funkcji. Może być pominięta w przyadku funkcji _anonimowych_. Nazwa jest lokalna i ograniczona do ciała funkcji.
- `paramN`
  - : Nazwa argumentu przekazywanego do funkcji. Funkcja może mieć do 255 argumentów.
- `wyrażenia`
  - : Wyrażenia, które zawiera ciało funkcji.

## Opis

Wyrażenie `function*` jest bardzo podobne i ma niemal taką samą składnię jak {{jsxref('Statements/function*', 'polecenie function*')}}. Zasadnicza różnica między wyrażenem `function*` a poleceniem `function*` to _nazwa funkcji_, która może być pominięta w wyrażeniach `function*`, co pozwala na tworzenie anonimowych funkcji generatorów. Zobacz również rozdział o [funkcjach](/pl/docs/Web/JavaScript/Reference/Functions), aby dowiedzieć się więcej.

## Przykłady

Następujący przykład definiuje nienazwaną funkcję generatora i przypisuje ją do `x`. Funkcja zwraca przekazany argument podniesiony do kwadratu.

```js
var x = function*(y) {
   yield y * y;
};
```

## Specyfikacje

| Specyfikacja                                                                                         | Status                       | Komentarz             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ES2015')}}     | Definicja początkowa. |
| {{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ESDraft')}} |                       |

## Wsparcie przeglądarek

{{Compat("javascript.operators.function_star")}}

## Zobacz też

- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/pl/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
