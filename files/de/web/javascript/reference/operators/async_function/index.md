---
title: async function Ausdruck
slug: Web/JavaScript/Reference/Operators/async_function
tags:
  - Experimental
  - Function
  - JavaScript
  - Operator
  - Primary Expression
translation_of: Web/JavaScript/Reference/Operators/async_function
---
{{jsSidebar("Operators")}}

Das **`async function`** Schlüsselwort kann benutzt werden, um `async` Funktionen in Ausdrücken zu benutzen.

Man kann asynchrone Funktionen auch mit einem [async Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/async_function "The async function keyword can be used to define async functions inside expressions.") definieren.

## Syntax

    async function [name]([param1[, param2[, ..., paramN]]]) {
       statements
    }

Seit ES2015 kann man auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) benutzen.

### Parameter

- `name`
  - : Der Funktionsname. Kann weggelassen werden, wenn die Funktion anonym ist. Der Name ist nur lokal im Funktionsrumpf erreichbar.
- `paramN`
  - : Der Name eines Arguments, welches der Funktion übergeben wird.
- `statements`
  - : Die Statements, welche den Funktionsrumpf definieren.

## Beschreibung

Ein `async function` Ausdruck ist sehr ähnlich zu {{jsxref('Statements/async_function', 'async Funktionsstatements')}} und haben fast die selbe Syntax. Der Hauptunterschied zwischen einem `async` Funktionsausdruck und einem `async` Funktionsstatement ist der Funktionsname, welcher bei `async` Funktionsausdrücken weggelassen werden kann, um anonyme Funktionen zu erstellen. Ein `async` Funktionsausdruck kann als {{Glossary("IIFE")}} (Immediately Invoked Function Expression) genutzt werden, welche Ausgeführt werden, nachdem sie definiert wurde. Mehr Informationen dazu gibt es im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Einfaches Beispiel

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};


var add = async function(x) { // async function expression assigned to a variable
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});


(async function(x) { // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.operators.async_function_expression")}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} Objekt
- {{jsxref("Operators/await", "await")}}
