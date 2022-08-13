---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/concat
---
{{JSRef}}

Die **`concat()`** Methode vereint den Text von einem oder mehreren Strings und gibt einen neuen String zurück.

## Syntax

    str.concat(string2[, string3, ..., stringN])

### Parameters

- `string2...stringN`
  - : Strings die zu einem neuen String vereint werden sollen.

### Rückgabewert

Ein neuer String, der die Texte der Strings hintereinander enthält.

## Beschreibung

Die `concat()` Funktion kombiniert die Texte von einem oder mehreren Strings und gibt einen neuen String zurück. Das ändern des Textes eines Strings hat keine Auswirkungen auf die anderen Strings.

## Beispiele

### Einsatz von `concat()`

Das folgende Beispiel kombiniert Strings in einen neuen String.

```js
var hello = 'Hello, ';
console.log(hello.concat('Kevin', ' have a nice day.'));

/* Hello, Kevin have a nice day. */
```

## Performance

Es wird ausdrücklich empfohlen {{jsxref("Operators/Assignment_Operators", "Zuweisungsoperatoren", "", 1)}} (`+`, `+=`) statt der `concat()` Methode zu benutzen. Sie hierfür diesen [Performancetest](http://jsperf.com/concat-vs-plus-vs-join).

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.6', 'String.prototype.concat')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.concat', 'String.prototype.concat')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.concat', 'String.prototype.concat')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
