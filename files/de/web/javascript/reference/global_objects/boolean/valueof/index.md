---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---
{{JSRef}}

Die **`valueOf()`** Methode gibt einen primitiven Wert des {{jsxref("Boolean")}} Objektes zurück.

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## Syntax

    bool.valueOf()

### Rückgabewert

Den primitiven Wert des gegebenen {{jsxref("Boolean")}} Objektes.

## Beschreibung

Die `valueOf` Methode des {{jsxref("Boolean")}} Objektes gibt einen primitiven Wert eines {{jsxref("Boolean")}} Objekts oder {{jsxref("Boolean")}} Literals als Boolean Datentyp zurück.

Diese Methode wird intern von JavaScript aufgerufen und wird nicht in normalen Anwendungen benutzt.

## Beispiele

### Einsatz von `valueOf`

```js
x = new Boolean();
myVar = x.valueOf(); // weist  myVar false zu
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.6.4.3', 'Boolean.prototype.valueOf')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Boolean.valueOf")}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
