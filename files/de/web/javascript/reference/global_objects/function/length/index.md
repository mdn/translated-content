---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
---
{{JSRef}}

Die **`length`** Eigenschaft gibt die Anzahl der von der Funktion erwarteten Parameter an.

{{EmbedInteractiveExample("pages/js/function-length.html")}}{{js_property_attributes(0,0,1)}}

## Beschreibung

`length` ist eine Eigenschaft eines Funktionsobjekts und zeigt an, wie viele Argumente die Funktion erwartet, d.h. die Anzahl der formalen Parameter. Diese Anzahl beinhaltet jedoch nicht den {{jsxref("rest_parameters", "rest Parameter", "", 1)}} und bezieht außerdem auch nur die Parameter ein, die in der Reihenfolge vor dem ersten Parameter mit einem Default-Wert sind. Im Gegensatz dazu ist {{jsxref("Functions/arguments/length", "arguments.length")}} eine in jeder Funktion verfügbare lokale Variable, die die tatsächliche Anzahl der übergebenen Argumente angibt.

### Dateneigenschaft des `Function` Konstruktors

Der {{jsxref("Global_Objects/Function", "Function")}} Konstruktor ist selbst ein {{jsxref("Global_Objects/Function", "Function")}} Objekt. Seine Eigenschaft `length` hat den Wert 1. Dessen Attribute lauten: Writable: `false`, Enumerable: `false`, Configurable: `true`.

### Eigenschaft des `Function` prototype Objekt

Die length-Eigenschaft des {{jsxref("Global_Objects/Function", "Function")}} prototype Objekts hat den Wert 0.

## Beispiele

```js
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */

console.log((function(...args) {}).length);
// 0, rest parameter wird nicht gezählt

console.log((function(a, b = 1, c) {}).length);
// 1, nur Parameter vor dem ersten Parameter mit
// einem Default-Wert werden gezählt
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1.          |
| {{SpecName('ES5.1', '#sec-15.3.5.1', 'Function.length')}}                         | {{Spec2('ES5.1')}}     |                                                                |
| {{SpecName('ES6', '#sec-function-instances-length', 'Function.length')}}     | {{Spec2('ES6')}}         | Das `configurable` Attribut dieser Eigenschaft ist nun `true`. |
| {{SpecName('ESDraft', '#sec-function-instances-length', 'Function.length')}} | {{Spec2('ESDraft')}} |                                                                |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.length")}}

## Siehe auch

- {{jsxref("Global_Objects/Function", "Function")}}
