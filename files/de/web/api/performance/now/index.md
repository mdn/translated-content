---
title: performance.now()
slug: Web/API/Performance/now
tags:
  - API
  - Méthode
  - Performanz
  - Referenz
  - Web Performance API
translation_of: Web/API/Performance/now
---
{{APIRef("High Resolution Timing")}}

Die **`performance.now()`** Methode gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der in Millisekunden gemessen wird und auf fünf Tausendstel einer Millisekunde (5 Mikrosekunden) genau ist.

Der zurückgegebene Wert stellt die Zeit dar, die seit **time origin** (der {{domxref("PerformanceTiming.navigationStart")}} Eigenschaft und damit der Startzeit) vergangen ist. In einem Web Worker ist die Startzeit die Zeit, in der ihr Ausführungskontext (Thread oder Prozess) erstellt wurde. In einem Browserfenster ist es die Zeit, zu der eine Nutzerin zu dem aktuellen Dokument navigierte (oder die Navigation bestätigte, sollte Bestätigung notwendig gewesen sein). Folgende Punkte sind dabei zu beachten:

- In dedizierten web workern, die im {{domxref("Window")}}-Kontext erstellt wurden, wird der Wert kleiner sein, als `performance.now()` in dem Browserfenster, aus dem der worker hervorging. Ehemals gleich `t0` dem Hauptkontext wurde dies in der Vergangenheit auf das heutige Verhalten geändert.
- In geteilten Worker oder Service Workern kann es passieren, dass der Wert im Worker größer ist als der des Hauptkontextes, da das Fenster nach den Workern erschaffen werden kann.

<!---->

    t = performance.now();

## Beispiel

```js
var zeit0 = performance.now();
machEtwas();
var zeit1 = performance.now();
console.log("Der Aufruf von machEtwas dauerte " + (zeit1 - zeit0) + " Millisekunden.");
```

Anders als andere Zeitmessungsdaten, die in JavaScript verfügbar sind (beispielsweise [`Date.now`](/de/docs/JavaScript/Reference/Global_Objects/Date/now)), sind die Zeitstempel, die von `Performance.now()` zurückgegeben werden nicht auf eine Auflösung von einer Millisekunde beschränkt. Stattdessen repräsentieren sie Zeit als Fließkommazahl mit einer Präzision von bis zu einer Mikrosekunde.

Ebenso anders als `Date.now()`, wachsen die Werte, die von `Performance.now() `zurückgegeben werden immer in einem konstanten Tempo, unabhängig von der Systemuhr (die manuell eingestellt oder durch Software wie NTP ungenau geworden sein kann). Ansonsten wird `performance.timing.navigationStart + performance.now()` annähernd ähnlich zu `Date.now() sein`.

## Spezifkationen

| Spezifikation                                                                                                | Status                                       | Kommentar                                         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------- |
| {{SpecName('Highres Time Level 2', '#dom-performance-now', 'performance.now()')}} | {{Spec2('Highres Time Level 2')}} | Strengere Definition von Schnittstellen und Typen |
| {{SpecName('Highres Time', '#dom-performance-now', 'performance.now()')}}             | {{Spec2('Highres Time')}}             | Ursprüngliche Definition                          |

## Browserkompatibilität

{{Compat}}

\[1] Windows Versionen von Chrome 20 bis 33 geben `performance.now()` nur mit einer Millisekundengenauigkeit zurück.

## Siehe auch

- [When milliseconds are not enough: performance.now() ](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now)bei HTML5 Rocks.
