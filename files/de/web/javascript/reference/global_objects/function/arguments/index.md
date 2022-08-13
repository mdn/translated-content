---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
tags:
  - Deprecated
  - Function
  - JavaScript
  - Property
  - arguments
translation_of: Web/JavaScript/Reference/Global_Objects/Function/arguments
---
{{JSRef}} {{deprecated_header}}

Die `function.arguments` Eigenschaft referenziert ein Array ähnliches Objekt, welches die übergebenen Parameter einer Funktion enthält. Stattdessen kann die Variable {{jsxref("Functions/arguments", "arguments")}} benutzt werden. Diese Eigenschaft ist im Strict Mode aufgrund von [taill Aufrufoptimierung](http://www.ecma-international.org/ecma-262/6.0/#sec-addrestrictedfunctionproperties) verboten.

## Beschreibung

Die Syntax `function.arguments` ist veraltet. Der empfolene Weg, um das {{jsxref("Functions/arguments", "arguments")}} Objekt zu erreichen, ist in einer Funktion die Variable {{jsxref("Functions/arguments", "arguments")}} zu benutzen.

Im Fall von Rekursion, z. B. wenn die Funktion `f` mehrere Male auf dem Aufruf-Stack ist, repräsentiert `f.arguments` die Argumente des letzten Aufrufes der Funktion.

Der Wert der `arguments` Eigenschaft ist normalerweise `null`, wenn keine Durchführung der Funktion vorhanden ist (Durchführung bedeutet, dass die Funktion aufgerufen wurde, aber noch nichts zurückgegeben hat).

## Beispiele

```js
function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);

// Output

// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                                                                                                                           |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. Deprecated zugunsten von {{jsxref("Functions/arguments", "arguments")}} in ES3. |
| {{SpecName('ES5.1', '#sec-10.6', 'arguments object')}}                     | {{Spec2('ES5.1')}}     | {{jsxref("Functions/arguments", "arguments")}} Objekt                                                                                 |
| {{SpecName('ES6', '#sec-arguments-object', 'arguments object')}}         | {{Spec2('ES6')}}         | {{jsxref("Functions/arguments", "arguments")}} Objekt                                                                                 |
| {{SpecName('ESDraft', '#sec-arguments-object', 'arguments object')}} | {{Spec2('ESDraft')}} | {{jsxref("Functions/arguments", "arguments")}} Objekt                                                                                 |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.arguments")}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Functions", "Funktionen und Funktionsscopes", "", 1)}}
