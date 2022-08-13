---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
tags:
  - Functions
  - JavaScript
  - Property
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/length
---
{{jsSidebar("Functions")}}

Die **`arguments.length`**-Eigenschaft enthält die Anzahl der übergebenen Parameter einer Funktion.

## Syntax

    arguments.length

## Beschreibung

Die `arguments.length`-Eigenschaft enthält die Anzahl der Parameter, die der aktuellen Funktion übergeben wurden. Diese Anzahl kann größer oder kleiner der Anzahl der definierten Parameter sein (siehe {{jsxref("Function.length")}}).

## Beispiele

### Beispiel: `arguments.length` nutzen

In diesem Beispiel wird eine Funktion definiert, die zwei oder mehr Nummern addieren kann.

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

> **Note:** Zu beachten ist der Unterschied zwischen {{jsxref("Function.length")}} und arguments.length

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definietion. Implementiert in JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.functions.arguments.length")}}

## Siehe auch

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
