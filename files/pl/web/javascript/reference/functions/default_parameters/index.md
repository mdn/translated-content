---
title: Parametry domyślne
slug: Web/JavaScript/Reference/Functions/Default_parameters
tags:
  - ECMAScript2015
  - Funkcje
  - JavaScript
translation_of: Web/JavaScript/Reference/Functions/Default_parameters
original_slug: Web/JavaScript/Reference/Functions/Parametry_domyślne
---
{{jsSidebar("Functions")}}

**Domyślne parametry funkcji** pozwalają na inicjalizację nazwanych parametrów wartościami domyślnymi tam, gdzie nie została podana żadna wartość lub jako wartość podano `undefined`.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Składnia

    function [nazwa]([parametr1[ = domyślnaWartość1 ][, ..., parametrN[ = domyślnaWartośćN ]]]) {
       ciało funkcji
    }

## Opis

W języku JavaScript domyślną wartością parametrów funkcji jest `{{jsxref("undefined")}}`. Często jednak dobrze jest ustawić inną wartość domyślną – wówczas parametry domyślne okazują się pomocne.

W przeszłości, ogólną strategią na ustawianie domyślnych wartości było sprawdzanie parametrów w ciele funkcji – w sytuacji, w których były one równe `undefined`, przypisywano im konkretne wartości.

W następującym przykładzie, jeśli żadna wartość nie jest podana jako `b`, kiedy wywoływana jest funkcja `pomnóż`, wartość `b` powinna być równa `undefined` – wówczas funkcja powinna zwrócić `NaN` jako wynik operacji `a * b`.

```js
function pomnóż(a, b) {
  return a * b;
}

pomnóż(5, 2); // 10
pomnóż(5);    // NaN !
```

Aby się przed tym uchronić, należy użyć czegoś takiego, jak w drugiej linijce, gdzie wartość `b` jest ustawiana na `1`, jeśli funkcja `pomnóż` jest wywoływana tylko z jednym argumentem.

```js
function pomnóż(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

pomnóż(5, 2); // 10
pomnóż(5);    // 5
```

Dzięki parametrom domyślnym w ES2015, tego rodzaju sprawdzanie wartości parametrów w ciele funkcji nie jest już konieczne. Można teraz przypisać `1` jako domyślną wartość w nagłówku funkcji:

```js
function pomnóż(a, b = 1) {
  return a * b;
}

pomnóż(5, 2); // 10
pomnóż(5);    // 5
```

## Przykłady

### Przekazywanie `undefined` kontra inne _puste wartości_

W drugim wywołaniu funkcji w tym przykłądzie, nawet jeśli jako pierwszy argument wprost podany `undefined` (jednak nie `null` lub inne _[puste](/pl/docs/Glossary/Falsy) wartości_), wartością argumentu `num` dalej będzie wartość domyślna.

```js
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num jest ustawiany na 1)
test(undefined); // 'number' (num również jest ustawiany na 1)

// test z innymi "pustymi" wartościami:
test('');        // 'string' (num jest ustawiany na '')
test(null);      // 'object' (num jest ustawiany na null)
```

### Ewaluacja w czasie wykonania

Domyślne argumenty są przypisywane w czasie wykonania, a więc w odróżnieniu od np. Pythona, nowy obiekt jest tworzony przy każdym wywołaniu funkcji.

```js
function append(wartość, tablica = []) {
  array.push(wartość);
  return tablica;
}

append(1); //[1]
append(2); //[2], nie [1, 2]
```

Dotyczy to również funkcji i zmiennych:

```js
function callSomething(thing = something()) {
 return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### Domyślne parametry są dostępne dla późniejszych domyślnych parametrów

Parametry zdefiniowane wcześniej (bardziej na lewo na liście parametrów), są dostępne dla domyślnych parametrów definiowanych później:

```js
function pozdrów(imię, pozdrowienie, wiadomość = pozdrowienie + ' ' + imię) {
    return [imię, pozdrowienie, wiadomość];
}

pozdrów('Dawid', 'Cześć');  // ["Dawid", "Cześć", "Cześć Dawid"]
pozdrów('Dawid', 'Cześć', 'Wszystkiego najlepszego!');  // ["Dawid", "Cześć", "Wszystkiego najlepszego!"]
```

Ta funkcjonalność może być przybliżona w ten sposób, pokazujący, jak wiele przypadków brzegowych może być obsłużonych:

```js
function go() {
  return ':P';
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({value: '=^_^='});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Funkcje definiowane w ciele funkcji

Wprowadzone w Gecko 33 {{geckoRelease(33)}}. Funkcje deklarowane w ciele funkcji nie mogą być używane jako wartości domyślne w tej samej funkcji. Przy takiej próbie, wyrzucany jest jest {{jsxref("ReferenceError")}}. Parametr domyślny zawsze wykonywany jest jako pierwszy, a więc deklaracje w ciele funkcji są ewaluowane później.

```js
// Nie działa! Wyrzuca ReferenceError.
function f(a = go()) {
  function go() { return ':P'; }
}
```

### Parametry bez wartości domyślnych po parametrach domyślnych

Przed Gecko 26 {{geckoRelease(26)}}, poniższy kod zwracał {{jsxref("SyntaxError")}}. Zostało to naprawione w {{bug(777060)}}. Wartości parametrów dalej są ustawiane w kolejności od lewej do prawej, nadpisując domyślne parametry, nawet jeśli występują potem parametry bez wartości domyślnych.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Parametr destrukturyzowany z przypisaniem domyślnej wartości

Możesz też użyć przypisania domyślnej wartości z notacją [parametru destruktyryzowanego](/pl/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
function f([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}

f(); // 6
```

## Specyfikacje

| Specyfikacja                                                                                         | Status                       | Komentarz           |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ESDraft')}} |                     |

## Wsparcie przeglądarek

{{Compat("javascript.functions.default_parameters")}}

## Zobacz też

- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
