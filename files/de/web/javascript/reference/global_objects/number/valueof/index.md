---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---
{{JSRef}}

Die **`valueOf()`** Methode gibt den im {{jsxref("Number")}} Objekt eingeschlossenen primitiven Wert zurück.

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## Syntax

    numObj.valueOf()

### Rückgabewert

Ein primitiver Wert (Zahl), der die Zahl des {{jsxref("Number")}} Objektes repräsentiert.

## Beschreibung

Die Methode wird intern von JavaScript aufgerufen, jedoch nicht explizit in einem programmierten Quelltext für eine Webseite eingesetzt.

## Beispiele

### Einsatz von `valueOf`

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.4.4', 'Number.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.valueOf")}}

## Siehe auch

- {{jsxref("Number.prototype.toSource()")}}
