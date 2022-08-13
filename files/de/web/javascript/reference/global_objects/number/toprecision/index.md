---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---
{{JSRef}}

Die `toPrecision()` Methode gibt einen String zurück, der ein {{jsxref("Number")}} Objekt mit einer spezifizierten Präzision repräsentiert.

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## Syntax

    numObj.toPrecision([precision])

### Parameter

- `precision`
  - : Optional. Eine ganze Zahl, die die signifikanten Ziffern der Zahl angibt.

### Rückgabewert

Ein string, der ein {{jsxref("Number")}} Objekt in Fließkomma- oder Exponentialdarstellung auf die in `precision` angegeben Stellen gerundet zurück gibt. Weitere Informationen zum runden in dieser Methode sind in der Beschreibung von {{jsxref("Number.prototype.toFixed()")}} zu finden, die auch auf `toPrecision()` zutreffen.

Wenn kein `precision` Argument angegeben wird, ist die rückgabe wie in der {{jsxref("Number.prototype.toString()")}} Methode. Wenn die `precision` keine ganze Zahl ist, wird zu der am nächst liegenden ganzen Zahl gerundet.

### Auftretende Fehler

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Wenn `precison` keine Zahl zwischen 1 und 100 (inklusiv) ist, tritt ein {{jsxref("RangeError")}} auf. Es gibt implementierungen die mehr und weniger signifikante Stellen zulassen. ECMA-262 spezifiziert nur eine Präzision von 21 signifikanten Stellen.

## Beispiele

### Einsatz von `toPrecision`

```js
var numObj = 5.123456;

console.log(numObj.toPrecision());    // Ausgabe: 5.123456
console.log(numObj.toPrecision(5));   // Ausgabe: 5.1235
console.log(numObj.toPrecision(2));   // Ausgabe: 5.1
console.log(numObj.toPrecision(1));   // Ausgabe: 5

numObj = 0.000123

console.log(numObj.toPrecision());    // logs 0.000123
console.log(numObj.toPrecision(5));   // logs 0.00012300
console.log(numObj.toPrecision(2));   // logs 0.00012
console.log(numObj.toPrecision(1));   // logs 0.0001

// In manchen Fällen wird die Exponentialdarstellung ausgegeben.
console.log((1234.5).toPrecision(2)); // Ausgabe: 1.2e+3
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.7', 'Number.prototype.toPrecision')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.toprecision', 'Number.prototype.toPrecision')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.toprecision', 'Number.prototype.toPrecision')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.toPrecision")}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
