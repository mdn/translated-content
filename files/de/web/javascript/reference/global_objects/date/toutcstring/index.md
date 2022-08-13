---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---
{{JSRef}}

Die **`toUTCString()`** Methode konvertiert ein {{jsxref("Date")}} in einen String. Dabei wird die UTC Zeitzone verwendet.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html")}}

## Syntax

    dateObj.toUTCString()

### Rückgabewert

Ein String, der das gegebene {{jsxref("Date")}} Objekt mit Zuhilfenahme der UTC Zeitzonen repräsentiert.

## Beschreibung

Der Rückgabewert der `toUTCString()` Methode ist ein für menschen lesbarer String, der die UTC Zeitzone nutzt. Das Format des zurückgegebenen String kann von Plattform zu Plattform variieren. Der am häufigsten eingesetzte Wert ist ein RFC-1123 formatierter Zeitstempel, welcher ein Update des Zeitstempels in der Version RFC-822 ist.

## Beispiele

### Einsatz von `toUTCString()`

```js
var today = new Date('Wed, 14 Jun 2017 00:00:00 PDT');
var UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.42', 'Date.prototype.toUTCString')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.toutcstring', 'Date.prototype.toUTCString')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toUTCString")}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
