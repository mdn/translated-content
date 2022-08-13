---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---
{{JSRef}}

Die **`toISOString()`** Methode gibt einen String im einfach erweitertem ISO format ([ISO 8601](http://en.wikipedia.org/wiki/ISO_8601)) zurück, welcher immer 24 oder 27 Zeichen lang ist (**`YYYY-MM-DDTHH:mm:ss.sssZ`** oder **`±YYYYYY-MM-DDTHH:mm:ss.sssZ`**). Die Zeitzone ist immer 0 UTC, wie es durch den Suffix "`Z`" angedeutet wird.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Syntax

    dateObj.toISOString()

### Rückgabewert

Ein String, der das gegebene {{jsxref("Date")}} Objekt im [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) Format bezüglich der Weltzeit (UTC) repräsentiert.

## Beispiele

### Using `toISOString()`

```js
var today = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString()); // Returns 2011-10-05T14:48:00.000Z
```

Das obere Beispiel nutzt das Einlesen eines nicht standartisierten String Wert, welcher in nicht-Mozilla Browsern manchmal nicht richtig eingelesen wird.

## Polyfill

Die Methode wurde in ECMA-262 5th edition standartisiert. In Umgebungen, die diese Methode nicht unterstützen (z. B. weil sie nicht aktualisiert werden), kann folgende Methode genutzt werden:

```js
if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.43', 'Date.prototype.toISOString')}}                         | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.8. |
| {{SpecName('ES6', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.toisostring', 'Date.prototype.toISOString')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toISOString")}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
