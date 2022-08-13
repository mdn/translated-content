---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getTime
---
{{JSRef}}

Die **`getTime()`** Methode gibt einen nummerischen Wert zurück, der die Zeit gemäß der Weltzeit (UTC) angibt.

_getTime() nutzt immer die UTC für die Zeitrepräsentation. Zum Beispiel ist der Aufruf von getTime() in einer Zeitzone der gleiche Wert wie in einer anderen Zone._

Man kann diese Methode einsetzten, um ein anderes {{jsxref("Date")}} Objekt zu initialisieren. Diese Methode hat den gleichen Funktionsumfang wie die {{jsxref("Date.valueof", "valueOf()")}} Methode.

{{EmbedInteractiveExample("pages/js/date-gettime.html")}}

## Syntax

    dateObj.getTime()

### Rückgabewert

Die Anzahl der Millisekunden zwischen dem 1. Januar 1970 00:00:00 UTC und dem gegebenen Zeitpunkt.

## Beispiele

### Einsatz von `getTime()` für das Kopieren von Daten

Erstellen eines {{jsxref("Date")}} Objektes mit identischem Zeitwert.

```js
// Seit der Monat 0-basiert ist, ist birthday der 10. Januar 1995
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());
```

### Ausführzeit Messen

Das Subtrahieren zweier `getTime()` Aufrufe auf {{jsxref("Date")}} Objekten, ergibt die Zeitspanne zwischen den beiden Aufrufen. Das kann eingesetzt werden, um die Ausführungszeit von Operationen zu berechnen. Auch die {{jsxref("Date.now()")}} Methode kann eingesetzt werden, um unnötiges Instanziieren von {{jsxref("Date")}} Objekten zu vermeiden.

```js
var end, start;

start = new Date();
for (var i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
```

## Reduzierte Zeitpräzision

Um den Schutz vor Timing-Angriffen und Fingerabdrücken zu gewährleisten, kann die Genauigkeit von `new Date().GetTime()` abhängig von den Browsereinstellungen abgerundet werden.
In Firefox ist die `privacy.resistFingerprinting` Einstellung normalerweise eingeschaltet auf 20 us in Firefox 59; in 60 wird es 2 ms sein.

```js
// reduced time precision disabled
new Date().getTime();
// 1519129755973
// 1519129769481
// 1519129808126
// ...


// reduced time precision enabled
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

In Firefox kann man zudem die Eigenschaft `privacy.resistFingerprinting` einschalten, die Präzision wird 100 ms sein oder man benutzt den Wert `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, wenn der Wert größer sein soll.

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.9', 'Date.prototype.getTime')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.gettime', 'Date.prototype.getTime')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.gettime', 'Date.prototype.getTime')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getTime")}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
