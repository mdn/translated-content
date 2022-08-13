---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
---
{{JSRef}}

Die **`getTimezoneOffset()`** Methode gibt den Unterschied zwischen der aktuellen Ortszeit (Einstellungen des Hostsystems) und der Weltzeit (UTC) in Minuten zurück.

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## Syntax

    dateObj.getTimezoneOffset()

### Rückgabewert

Eine Zahl, welche den Unterschied zwischen der aktuellen Ortszeit (Einstellung des Hostsystems) und der UTC in Minuten repräsentiert.

## Beschreibung

Der Zeitzonen-Offset ist der Unterschied, in Minuten, zwischen der lokalen Zeit und der Weltzeit (UTC). Das bedeutet, dass die Anzahl der Minuten eine positive Zahl ist, wenn die lokale Zeit hinterher geht, und eine negative Zahl ist, wenn die lokale Zeit voraus geht. Zum Beispiel gibt die Methode für die Zeitzone UTC+10 (Ost Australische Standardzeit) -600 zurück.

| Aktuelle Zeitzone | UTC-8 | UTC | UTC+3 |
| ----------------- | ----- | --- | ----- |
| Rückgabewert      | 480   | 0   | -180  |

Das zurückgegebene Zeitzonen-Offset ist immer das zu dem Date-Objekt zugehörige Offset. Wenn das Hostsystem für die Sommerzeit konfiguriert ist, ändert sich das Offset je nach Datum und Uhrzeit des Datums und der Sommerzeit.

## Beispiele

### Einsatz von `getTimezoneOffset()`

```js
// Gibt das aktuelle Zeitzonen-Offset für das Hostsystem zurück.
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
// 1

// Gibt das Zeitzonen Offset des Internationalen Tag der Arbeit (1. Mai) in 2016 zurück.
// Vorsicht beim Einsatz des Date() Konstruktors, denn dieser Benutzt den 0-indizierten Monat
// so dass Mai durch 4 (und nicht durch 5) repräsentiert wird.
var labourDay = new Date(2016, 4, 1);
var labourDayOffset = labourDay.getTimezoneOffset() / 60;
```

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.26', 'Date.prototype.getTimezoneOffset')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.gettimezoneoffset', 'Date.prototype.getTimezoneOffset')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.gettimezoneoffset', 'Date.prototype.getTimezoneOffset')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getTimezoneOffset")}}
