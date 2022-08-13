---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toString
---
{{JSRef}}

Die **`toString()`** Methode gibt einen String zurück, der ein spezifisches {{jsxref("Date")}} Objekt repräsentiert.

{{EmbedInteractiveExample("pages/js/date-tostring.html")}}

## Syntax

    dateObj.toString()

### Rückgabewert

Einen String, der das gegebene {{jsxref("Date")}} Objekt repräsentiert.

## Beschreibung

Das {{jsxref("Date")}} Objekt überschreibt die `toString()` Methode des {{jsxref("Object")}} Objekts. Es wird nicht von {{jsxref("Object.prototype.toString()")}} geerbt. Für {{jsxref("Date")}} Objekte gibt die `toString()` Methode einen String zurück, der das Objekt repräsentiert.

Die `toString()` Methode gibt immer einen String zurück, der den Zeitpunkt repräsentiert. Dieser String wird in einem amerikanisch-englischen Format zurückgegeben.

JavaScript ruft die `toString()` Methode automatisch auf, wenn ein {{jsxref("Date")}} Objekte als Text-Wert benötigt wird oder wenn das Objekt in einer String-Konkatination verwendet wird.

`toString()` ist eine generische Methode. Wenn `this` keine Instanz vom Typ {{jsxref("Date")}} ist, gibt die Methode "Invalid Date" zurück.

## Beispiele

### Einsatz von `toString()`

Im folgenden wird die Variable `myVar` mit dem Rückgabewert der `toString()` Methode eines {{jsxref("Date")}} Objektes beschrieben.

```js
var x = new Date();
myVar = x.toString(); // Weist der Variablen myVar folgenden Wert zu:
                      // Mon Sep 28 1998 14:36:22 GMT-0700 (PDT)
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.2', 'Date.prototype.toLocaleTimeString')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tostring', 'Date.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tostring', 'Date.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toString")}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
