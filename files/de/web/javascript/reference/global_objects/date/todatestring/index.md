---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---
{{JSRef}}

Die **`toDateString()`** Methode gibt den Datumsteil eines {{jsxref("Date")}} Objektes für Menschen lesbar, im amerikanisch-englischen Format, zurück.

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntax

    dateObj.toDateString()

### Rückgabewert

Ein String, der den Datumsteil des gegebenen {{jsxref("Date")}} Objektes für menschen lesbar im amerikanisch-englischen Format enthält

## Beschreibung

{{jsxref("Date")}} Instanzen referenzieren einen spezifischen Zeitpunkt. Mit dem Aufruf von {{jsxref("Date.prototype.toString()", "toString()")}} wird dieser Zeitpunkt für Menschen lesbar, im amerikanisch-englischen Format, zurückgegeben. In [SpiderMonkey](/de/docs/SpiderMonkey) enthält diese Format den Datumsteil (Tag, Monat und Jahr) gefolgt von dem Zeitteil (Stunden, Minuten, Sekunden und Zeitzone). Manchmal ist es erwünscht, nur die Zeit zu bekommen. In diesen Fällten wird die `toTimeString()` Methode eingesetzt.

Die `toDateString()` Methode ist besonders nützlich, weil JavaScript-Umgebungen die [ECMA-262](/de/docs/ECMAScript) implementieren. manchmal unterschiedliche Ergebnisse bei der Ausführung der {{jsxref("Date.prototype.toString()", "toString()")}} Methode eines {{jsxref("Date")}} Objektes liefern. Dieses liegt daran, weil das zurückgegebene Format der {{jsxref("Date.prototype.toString()", "toString()")}} Methode implementierungsabhängig ist, über mehrere Plattformen hinweg zu inkonsistenten Ergebnissen führen kann.

## Beispiele

### Einsatz von `toDateString()`

```js
var d = new Date(1993, 5, 28, 14, 39, 7);

console.log(d.toString());     // logs Wed Jun 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Wed Jun 28 1993
```

> **Note:** **Anmerkung:** Der Monat ist 0-basiert wenn er als Argument in {{jsxref("Date")}} benutzt wird (0 entspricht Januar und 11 entspricht Dezember).

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                 | {{Spec2('ES3')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.9.5.3', 'Date.prototype.toDateString')}}                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toDateString")}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
