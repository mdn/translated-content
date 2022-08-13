---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
---
{{JSRef}} {{SeeCompatTable}}

Die **`Intl.DateTimeFormat.prototype.formatToParts()`** Methode erlaubt gebietssichere Formatierung von Strings, die von `DateTimeFormat` Formatierungen erzeugt werden.

## Syntax

    Intl.DateTimeFormat.prototype.formatToParts(date)

### Parameter

- `date` {{optional_inline}}
  - : Der Zeitstempel, der formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die das Formatierte Datum in Teilen wiederspielgeln.

## Beschreibung

Die `formatToParts()` Methode ist nützlich für benutzerdefinierte Formatierung von Zeitpunktsstrings. Sie gibt ein {{jsxref ("Array")}} von Objekten zurück, die die länderspezifischen Token enthalten, aus denen benutzerdefinierte Zeichenfolgen erstellt werden können, während die länderspezifischen Teile beibehalten werden. Die Struktur, die die `formatToParts()` Methode zurückgibt, sieht so aus:

```js
[
  { type: 'day', value: '17' },
  { type: 'weekday', value: 'Monday' }
]
```

Mögliche Typen sind die folgenden:

- day
  - : Der String, der für den Tag benutzt wird. Zum Beispiel `"17"`.
- dayPeriod
  - : Der String, der für die Tagesperiode benutzt wird. Zum Beispiel `"AM"` oder `"PM"`.
- era
  - : Der String, der für die Ära benutzt wird. Zum Beispiel `"BC"` oder `"AD"`.
- hour
  - : Der String, der für die Stunde benutzt wird. Zum Beispiel `"3"` oder `"03"`.
- literal
  - : Der String, der als Trennung für das Datum und die Zeitbenutzt benutzt wird. Zum Beispiel `"/"`, `","`, `"o'clock"`, `"de"`, etc.
- minute
  - : Der String, der für die Minute benutzt wird. Zum Beispiel `"00"`.
- month
  - : Der String, der für den Monat benutzt wird. Zum Beispiel `"12"`.
- second
  - : Der String, der für die Sekunde benutzt wird. Zum Beispiel `"07"` oder `"42"`.
- timeZoneName
  - : Der String, der für den Zeitzonennamen benutzt wird. Zum Beispiel `"UTC"`.
- weekday
  - : Der String, der für den Wochentag benutzt wird. Zum Beispiel `"M"`, `"Monday"` oder `"Montag"`.
- year
  - : Der String, der für das Jahr benutzt wird. Zum Beispiel `"2012"` oder `"96"`.

## Beispiele

`DateTimeFormat` gibt lokalisierte Strings aus, die nicht direkt verändert werden können:

```js
var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
  timeZone: 'UTC'
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42 AM"
```

Oftmals ist es in vielen Benutzeroberflächen erwünscht die Formatierung dieser Strings zu verändern. Die `formatToParts` Methode erlaubt lokalsicheres Formatieren von Strings, die von `DateTimeFormat` in Teilstrings unterstützt werden:

```js
formatter.formatToParts(date);

// return value:
[
  { type: 'weekday',   value: 'Monday' },
  { type: 'literal',   value: ', '     },
  { type: 'month',     value: '12'     },
  { type: 'literal',   value: '/'      },
  { type: 'day',       value: '17'     },
  { type: 'literal',   value: '/'      },
  { type: 'year',      value: '2012'   },
  { type: 'literal',   value: ', '     },
  { type: 'hour',      value: '3'      },
  { type: 'literal',   value: ':'      },
  { type: 'minute',    value: '00'     },
  { type: 'literal',   value: ':'      },
  { type: 'second',    value: '42'     },
  { type: 'literal',   value: ' '      },
  { type: 'dayPeriod', value: 'AM'     }
]
```

Jetzt sind die Informationen separiert vorhanden und man kann Formatierungen und Konkatinationen benutzerdefiniert vornehmen. Zum Beispiel unter Einsatz von {{jsxref("Array.prototype.map()")}}, [Arrow Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einem [switch Statement](/de/docs/Web/JavaScript/Reference/Statements/switch), [Templateliteralen](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.reduce()")}}.

```js
var dateString = formatter.formatToParts(date).map(({type, value}) => {
  switch (type) {
    case 'dayPeriod': return `<b>${value}</b>`;
    default : return value;
  }
}).reduce((string, part) => string + part);
```

Diese Beispiel macht die Tagesperiode fett, wenn die `formatToParts()` Methode benutzt wird.

```js
console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42 <b>AM</b>"
```

## Polyfill

Ein Polyfill für die Funktionalität ist im [proposal repository](https://github.com/zbraniecki/proposal-intl-formatToParts) verfügbar.

## Spezifikationen

| Spezifikation                                                                                                                                                            | Status                           | Kommentar           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.formatToParts', 'Intl.DateTimeFormat.prototype.formatToParts')}} | {{Spec2('ES Int Draft')}} | Initiale Definition |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.DateTimeFormat.formatToParts")}}

## Siehe auch

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("DateTimeFormat.format", "Intl.DateTimeFormat.prototype.format")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
