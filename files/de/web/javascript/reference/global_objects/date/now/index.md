---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
tags:
  - Date
  - JavaScript
  - MakeBrowserAgnostic
  - Method
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Date/now
---
{{JSRef}}

Die**` Date.now()`** Methode gibt die Anzahl der Millisekunden, die seit dem 01.01.1970 00:00:00 UTC vergangen sind zurück.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Syntax

    var timeInMs = Date.now();

### Rückgabewert

Eine {{jsxref("Number", "Zahl")}}, die die vergangenen Millisekunden seit dem 1. Januar 1970 00:00:00 Weltzeit (UTC) angibt (UNIX-Zeit).

## Beschreibung

Da `now` eine statische Methode von `Date` ist, kann es immer so verwendet werden: `Date.now()`

## Reduzierte Zeitpräzision

Um den Schutz vor Timing-Angriffen und Fingerabdrücken zu gewährleisten, kann die Genauigkeit von `new Date().getTime()` abhängig von den Browsereinstellungen abgerundet werden.
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

## Polyfill

Diese Methode wurde in in ECMA-262 5th edition standardisiert. Engines die noch nicht hinsichtlich diesen Standards aktualisiert wurden können den folgenden shim verwenden, um die Methode verfügbar zu machen:

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## Spezifikationen

| Spezifikation                                                                                      | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.4.4', 'Date.now')}} Implemented in JavaScript 1.5 | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.5. |
| {{SpecName('ES6', '#sec-date.now', 'Date.now')}}                                   | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.now', 'Date.now')}}                               | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.now")}}

## Siehe auch

- {{domxref("window.performance.now")}} - bietet timestamps mit einer kleineren Auflösung (kleiner als Millisekunden), um die Seitenperformance messen zu können
- {{domxref("console.time")}} / {{domxref("console.timeEnd")}}
