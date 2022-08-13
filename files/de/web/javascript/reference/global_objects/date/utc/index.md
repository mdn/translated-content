---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
tags:
  - Date
  - JavaScript
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/UTC
---
{{JSRef}}

Die **`Date.UTC()`** Methode akzeptiert die gleichen Parameter, wie der längste Konstruktor von {{jsxref("Date")}} und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück.

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## Syntax

    Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])

### Parameter

- `year`
  - : Ein volles Jahr
- `month`
  - : Eine ganze Zahl zwischen 0 und 11, die den Monat repräsentiert.
- `day`
  - : Optional. Eine ganze Zahl zwischen 1 und 31 den Tag des Monats repräsentiert.
- `hour`
  - : Optional. Eine ganze Zahl zwischen 0 und 23, die die Stunde des Tages repräsentiert.
- `minute`
  - : Optional. Eine ganze Zahl zwischen 0 und 59, die die Minute der Stunde repräsentiert.
- `second`
  - : Optional. Eine ganze Zahl zwischen 0 und 59, die die Sekunden der Minute repräsentiert.
- `millisecond`
  - : Optional. Eine ganze Zahl zwischen 0 und 999, die die Millisekunden einer Sekunde repräsentiert.

### Rückgabewert

Eine Zahl, die die Anzahl der Millisekunden des gegebenen {{jsxref("Date")}} Objektes, die seit dem 1. Januar 1970 00:00:00 Weltzeit (UTC) vergangen sind, repräsentiert.

## Beschreibung

Die `UTC()` Methode bekommt mit Komma getrennte Parameter des Datums / der Zeit und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 in Weltzeit zurück.

Es muss ein volles Jahr für `year` spezifiziert werden (z. B. 1998). Wenn ein Jahr zwischen 0 und 99 ist, wird die Methode das Jahr zu einem Jahr im zwanzigsten Jahrhundert konvertieren (`1900 + year`). Zum Beispiel wird 95 zu 1995 konvertiert.

Die `UTC()` Methode unterscheidet sich in zwei Punkten von dem {{jsxref("Date")}} Konstruktor:

- `Date.UTC()` benutzt die Weltzeit anstatt der Ortszeit.
- `Date.UTC()` gibt die Zeit als Ganzzahl zurück anstatt ein {{jsxref("Date")}} Objekt zu erzeugen.

Wenn ein Parameter außerhalb seiner spezifizierten Grenzen ist, wird die `UTC()` Methode andere Parameter verändern, um den Wert zu realisieren. Wird zum Beispiel 15 als Monat angegeben, so wird das Jahr um 1 inkrementiert (`year + 1`) und der Monat wird auf 3 gesetzt.

Weil `UTC()` eine statische Methode von {{jsxref("Date")}} ist, wird sie immer als `Date.UTC()` genutzt und nicht als Methode einer {{jsxref("Date")}} Instanz.

## Beispiele

### Einsatz von `Date.UTC()`

Im folgenden Beispiel wird ein {{jsxref("Date")}} Objekt mithilfe der UTC (nicht der Ortszeit) erstellt:

```js
var utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.utc', 'Date.UTC')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-date.utc', 'Date.UTC')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-15.9.4.3', 'Date.UTC')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.UTC")}}

## Anmerkungen zur Kompatibilität

### `Date.UTC` mit weniger als zwei Argumenten

Wenn `Date.UTC` weniger als zwei Argumenten erhält, wird {{jsxref("NaN")}} zurückgegeben. Dieses Verhalten wurde in ECMAScript 2017 spezifiziert. Umgebungen, welche dieses Verhalten nicht unterstützen, werden aktualisiert (siehe {{bug(1050755)}}, [ecma-262 #642](https://github.com/tc39/ecma262/pull/642)).

```js
Date.UTC();
Date.UTC(1);

// Safari: NaN
// Chrome/Opera/V8: NaN

// Firefox <54: nicht NaN
// Firefox 54+: NaN

// IE: nicht NaN
// Edge: NaN
```

## Siehe auch

- {{jsxref("Date.parse()")}}
