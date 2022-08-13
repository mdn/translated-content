---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---
{{JSRef}}

Die **`toDateString()`** Methode gibt den Zeitteil eines {{jsxref("Date")}} Objektes für Menschen lesbar, im amerikanisch-englischen Format, zurück.

{{EmbedInteractiveExample("pages/js/date-totimestring.html")}}

## Syntax

    dateObj.toTimeString()

### Rückgabewert

Ein String, der den Zeitteil des gegebenen {{jsxref("Date")}} Objektes für menschen lesbar im amerikanisch-englischen Format enthält

## Beschreibung

{{jsxref("Date")}} Instanzen referenzieren einen spezifischen Zeitpunkt. Mit dem Aufruf von {{jsxref("Date.prototype.toString()", "toString()")}} wird dieser Zeitpunkt für Menschen lesbar, im amerikanisch-englischen Format, zurückgegeben. In [SpiderMonkey](/de/docs/SpiderMonkey) enthält diese Format den Datumsteil (Tag, Monat und Jahr) gefolgt von dem Zeitteil (Stunden, Minuten, Sekunden und Zeitzone). Manchmal ist es erwünscht, nur den Datumsteil zu bekommen. In diesen Fällen wird die `toDateString()` Methode eingesetzt.

Die `toTimeString()` Methode ist besonders nützlich, weil JavaScript-Umgebungen die [ECMA-262](/de/docs/ECMAScript) implementieren, manchmal unterschiedliche Ergebnisse bei der Ausführung der {{jsxref("Date.prototype.toString()", "toString()")}} Methode eines {{jsxref("Date")}} Objektes liefern. Dieses liegt daran, weil das zurückgegebene Format der {{jsxref("Date.prototype.toString()", "toString()")}} Methode implementierungsabhängig ist und über mehrere Plattformen hinweg zu inkonsistenten Ergebnissen führen kann.

## Beispiele

### Einsatz von `toTimeString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // logs Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // logs 14:39:07 GMT-0600 (PDT)
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                 | {{Spec2('ES3')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.9.5.4', 'Date.prototype.toTimeString')}}                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-date.prototype.totimestring', 'Date.prototype.toTimeString')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-date.prototype.totimestring', 'Date.prototype.toTimeString')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toTimeString")}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
