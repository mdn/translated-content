---
title: 'Warning: Date.prototype.toLocaleFormat is deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
original_slug: Web/JavaScript/Reference/Fehler/Deprecated_toLocaleFormat
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead

## Fehlertyp

Warnung. JavaScript stoppt die ausführung nicht an.

## Was ist falsch gelaufen?

Die nicht standardisierte Methode {{jsxref("Date.prototype.toLocaleFormat")}} ist veraltet und sollte nicht mehr benutzt werden. Sie benutzt einen Formatstring mit dem selben Format, wie dei der C Funktion `strftime()`. **Diese Funktion ist seit Firefox 58+ nicht mehr vorhanden**.

## Beispiele

### Veraltete Syntax

Die {{jsxref("Date.prototype.toLocaleFormat")}} Methode ist veraltet und wird entfernt werden (keine browserübergreifende Unterstützung, nur in Firefox verfügbar).

```js example-bad
var today = new Date();
var date = today.toLocaleFormat('%A, %e. %B %Y');

console.log(date);
// In German locale
// "Freitag, 10. März 2017"
```

### Alternative Standardsyntax mit der ECMAScript Intl API

Der ECMA-402 Standard spezifiziert Standardobjekte und Methoden (ECMAScript Intl API), die sprachabhängige Datums- und Zeitformatierung erlauben (verfügbar in Chrome 24+, Firefox 29+, IE11+, Safari10+).

Man kan jetzt die {{jsxref("Date.prototype.toLocaleDateString")}} Methode einsetzen, um einen Zeitpunkt zu formatieren.

```js example-good
var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('de-DE', options);

console.log(date);
// "Freitag, 10. März 2017"
```

Oder man kann das {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekt einsetzen, welches die meisten Berechnungen zwischenspeichert, so dass das Formatieren schneller ist. Dieses ist nützlich, wenn Zeitpunkte in einer Schleife formatiert werden.

```js example-good
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date => console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
```

### Alternative Standardsyntax mit Date Methoden

Das {{jsxref("Date")}} Objekt enthält einige Methoden, um einen Benutzerdefinierten Datumsstring zu erhalten.

```js example-bad
(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
```

Dieses kan konvertiert werde:

```js example-good
let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"
```

## Siehe auch

- {{jsxref("Date.prototype.toLocaleFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString")}}
- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
