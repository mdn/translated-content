---
title: Operator function
slug: Web/JavaScript/Reference/Operators/function
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Operators/function
original_slug: Web/JavaScript/Referencje/Operatory/Operator_function
---
### Podsumowanie

Operator `function` jest używany do definiowania funkcji wewnątrz wyrażenia.

## Składnia

    function [nazwa]([argument1[, argument2[, ..., argumentN]]]) { instrukcje }

### Parametry

- `nazwa`
  - : Nazwa funkcji. Może zostać pominięta, w takim wypadku funkcja staje się anonimowa. Nazwa jest tylko lokalna i istnieje wewnętrz funkcji.

<!---->

- `argumentN`
  - : Nazwa argumentu, który ma zostać przekazany do funkcji. Funkcja może posiadać do 255 argumentów.

<!---->

- `instrukcje`
  - : Instrukcje, które stanowią ciało funkcji.

## Opis

Wyrażenie funkcji jest bardzo podobne do deklaracji funkcji i posiada niemal identyczną składnię (zobacz [function](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/function), aby uzyskać bardziej szczegółowe informacje). Główną różnicą pomiędzy wyrażeniem a definicją jest _nazwa funkcji,_ która może zostać pominięta i utworzyć funkcję _anonimową_. Zobacz [Funkcje](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje), aby uzyskać informacje o różnicach między instrukcjami funkcji a wyrażeniami funkcji.

## Przykłady

Poniższy przykład definiuje nienazwaną funkcję i przypisują ją do `x`. Funkcja zwraca kwadrat jej argumentów:

    var x = function(y) {
       return y * y;
    };

### Nazwane wyrażenie

    var math = {
      'factorial': function factorial(n) {
        if (n <= 1)
          return 1;
        return n * factorial(n - 1);
      }
    };

## Specyfikacja

| Specyfikacja                                                                                         | Status                       | Komentarze                         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------- |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ESDraft')}} |                                    |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}     | {{Spec2('ES6')}}         |                                    |
| {{SpecName('ES5.1', '#sec-13', 'Function definition')}}                             | {{Spec2('ES5.1')}}     |                                    |
| {{SpecName('ES3', '#sec-13', 'Function definition')}}                             | {{Spec2('ES3')}}         | Zaimplementowano w JavaScript 1.5. |

## Wsparcie przeglądarek

{{CompatibilityTable}}

| Feature       | Chrome                           | Firefox (Gecko)                  | Internet Explorer                | Opera                            | Safari                           |
| ------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| Basic support | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} |

| Feature       | Android                          | Chrome for Android               | Firefox Mobile (Gecko)           | IE Mobile                        | Opera Mobile                     | Safari Mobile                    |
| ------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| Basic support | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} |

## Zobacz także

[`Funkcje`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje), [`Function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Function), [`Polecenie function`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/function)
