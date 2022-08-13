---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---
{{JSRef}}

Die **`toLocaleString()`** Methode gibt einen sprachsensitiven String mit dem Zeitpunkt zurück. Die neuen Argumente `locales` und `options` können eingesetzt werden, um die Sprache (und damit die Formatierung) einzustellen oder benutzerdefinierte Formatierungen vorzunehmen. In älteren Implementierungen, die `locales` und `options` ignorieren, ist die Formatierung des String implementierungsabhängig.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Syntax

    dateObj.toLocaleString([locales[, options]])

### Parameter

Überprüfe das Kapitel [Browserkompatibilität](#browser_compatibility), um zu erfahren, welcher Browser die Argumente `locales` and `options` unterstützt. Zudem sollte das Beispiel [Unterstützung der Argumente `locales` und `options`](#checking_for_upport_for_locales_and_options_arguments) beachtet werden.

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameter')}}Der Standardwert für jede Eigenschaft einer Datums-Zeitkomponente ist {{jsxref("undefined")}}, wenn aber die Eigenschaften `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second` {{jsxref("undefined")}} sind, sind die Eigenschaften `year`, `month`, `day`, `hour`, `minute` und `second` `"numeric"`.

### Rückgabewert

Einen String, der das gegebenen {{jsxref("Date")}} Objektes mit sprachspezifischen Konventionen repräsentiert.

## Beispiele

### Einsatz von `toLocaleString()`

Standardeinsatz ohne Angaben zur Sprache und Formatierung. Ein formatierter String in der Standardsprache mit Standardoption wird zurückgegeben.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() ohne Argumente abhängig von der Implementierung,
// der Standardsprache und der Standardzeitzone.
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" wenn in der Sprache en-US mit America/Los_Angeles Zeitzone ausgeführt
```

### Unterstützung der Argumente `locales` und `options`

Die Argumente `locales` and `options` sind noch nicht in allen Browsern unterstützt. Um herauszufinden, ob eine Implementierung die Argumente unterstützt, kann die Anforderung benutzt werden, dass bei nicht existierenden Sprachen ein {{jsxref("RangeError")}} erzeugt wird:

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString('i');
  } catch (e) {
    return e instanceof RangeError;
  }
  return false;
}
```

### Einsatz von `locales`

Das Beispiel zeigt einige Variation von internationalisierten Datums- und Zeitformaten. Um das Format der Sprache der Benutzerschnittstelle (z. B. Webseite) zu bekommen, muss die Sprache (und manchmal eine fallback Sprache) mit dem Argument `locales` gesetzt werden:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// US englischer einsatz mit Monat-Tag-Jahr und 12-Stunden Zeit mit AM/PM
console.log(date.toLocaleString('en-US'));
// → "12/19/2012, 7:00:00 PM"

// Britisch englischer Einsatz mit Tag-Monat-Jahr und 24-Stunden Zeit ohne AM/PM
console.log(date.toLocaleString('en-GB'));
// → "20/12/2012 03:00:00"

// Koreanischer Einsatz mit Jahr-Monat-Tag und 12-Stunden Zeit mit AM/PM
console.log(date.toLocaleString('ko-KR'));
// → "2012. 12. 20. 오후 12:00:00"

// In den meisten arabischen Ländern werden arabische Ziffern genutzt.
console.log(date.toLocaleString('ar-EG'));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// Für mansche japanische Anwendungen wird er japanische Kalender benutzt,
// bei dem das Jahr 2012 das Jahr 24 der Heisei-Zeit ist.
console.log(date.toLocaleString('ja-JP-u-ca-japanese'));
// → "24/12/20 12:00:00"

// Wenn eine Sprache angegeben wird, die vielleicht nicht unterstützt wird,
// wie Balinesisch, wird eine fallback Sprache (Indonesisch) definiert.
console.log(date.toLocaleString(['ban', 'id']));
// → "20/12/2012 11.00.00"
```

### Einsatz von `options`

Das Ergebnis der ` toLocaleString``() ` Methode kann benutzerdefiniert mit dem Argument `options` beeinflusst werden.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Gibt einen Wochentag und ein langes Datum zurück
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

//  Macht UTC sichtbar
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(date.toLocaleString('en-US', options));
// → "Thursday, December 20, 2012, GMT"

// Manchal brauchen US-Sprachen auch 24-Stunden Zeiten
console.log(date.toLocaleString('en-US', { hour12: false }));
// → "12/19/2012, 19:00:00"
```

## Performance

Wenn viele Daten formatiert werden sollen, ist es besser ein {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekt zu erstellen und die Funktion {{jsxref("DateTimeFormat.prototype.format", "format")}} zu benutzen.

## Spezifikationen

| Spezifikation                                                                                                                        | Status                           | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                             | {{Spec2('ES1')}}             | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.5', 'Date.prototype.toLocaleString')}}                                     | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}             | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}         | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}                                 | {{Spec2('ES Int 1.0')}} | Definition der `locales` und `options` Argumente.     |
| {{SpecName('ES Int 2.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}                                 | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleString', 'Date.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toLocaleString")}}

## Siehe auch

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
