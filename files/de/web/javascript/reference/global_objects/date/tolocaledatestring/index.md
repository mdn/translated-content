---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Date
  - IANA Timezone Forma
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---
{{JSRef}}

Die **`toLocaleDateString()`** Methode gibt einen sprachsensitiven String mit dem Datumsteil des Zeitpunktes zurück. Die neuen Argumente `locales` und `options` können eingesetzt werden, um die Sprache (und damit die Formatierung) einzustellen oder benutzerdefinierte Formatierungen vorzunehmen. In älteren Implementierungen, die `locales` und `options` ignorieren, ist die Formatierung des String implementierungsabhängig.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## Syntax

    dateObj.toLocaleDateString([locales [, options]])

### Parameter

Überprüfe das Kapitel [Browserkompatibilität](#browser_compatibility), um zu erfahren, welcher Browser die Argumente `locales` and `options` unterstützt. Zudem sollte das Beispiel [Unterstützung der Argumente `locales` und `options`](#checking_for_support_for_locales_and_options_arguments) beachtet werden.

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameter')}}Der Standardwert für jede Eigenschaft einer Datums-Zeitkomponente ist {{jsxref("undefined")}}, wenn aber die Eigenschaften `weekday`, `year`, `month`, `day` {{jsxref("undefined")}} sind, sind die Eigenschaften `year`, `month`, und `day` `"numeric"`.

### Rückgabewert

Einen String, der den Datumsteil des gegebenen {{jsxref("Date")}} Objektes mit sprachspezifischen Konventionen repräsentiert.

## Beispiele

### Einsatz von `toLocaleDateString()`

Standardeinsatz ohne Angaben zur Sprache und Formatierung. Ein formatierter String in der Standardsprache mit Standardoption wird zurückgegeben.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() ohne Argumente abhängig von der Implementierung,
// der Standardsprache und der Standardzeitzone.
console.log(date.toLocaleDateString());
// → "12/11/2012" wenn in der Sprache en-US mit America/Los_Angeles Zeitzone ausgeführt
```

### Unterstützung der Argumente `locales` und `options`

Die Argumente `locales` and `options` sind noch nicht in allen Browsern unterstützt. Um herauszufinden, ob eine Implementierung die Argumente unterstützt, kann die Anforderung benutzt werden, dass bei nicht existierenden Sprachen ein {{jsxref("RangeError")}} erzeugt wird:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

### Einsatz von `locales`

Das Beispiel zeigt einige Variation von internationalisierten Datumsformaten. Um das Format der Sprache der Benutzerschnittstelle (z. B. Webseite) zu bekommen, muss die Sprache (und manchmal eine Fallback-Sprache) mit dem Argument `locales` gesetzt werden:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Die unteren Formate setzen ein lokale Zeitzone voraus:
// America/Los_Angeles für die US

// US Englischer Einsatz von Monat-Tag-Jahr
console.log(date.toLocaleDateString('en-US'));
// → "12/19/2012"

// British Englischer Einsatz von Tag-Monat-Jahr
console.log(date.toLocaleDateString('en-GB'));
// → "20/12/2012"

// Koreanischer Einsatz von Jahr-Monat-Tag
console.log(date.toLocaleDateString('ko-KR'));
// → "2012. 12. 20."

// Event für Persien. Es ist schwer manuell in Solar Hijri zu konvertieren
console.log(date.toLocaleDateString('fa-IR'));
// → "۱۳۹۱/۹/۳۰"

// In den meisten arabischen Ländern werden arabische Ziffern genutzt.
console.log(date.toLocaleDateString('ar-EG'));
// → "٢٠‏/١٢‏/٢٠١٢"

// Für mansche japanische Anwendungen wird er japanische Kalender benutzt,
// bei dem das Jahr 2012 das Jahr 24 der Heisei-Zeit ist.
console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));
// → "24/12/20"

// Wenn eine Sprache angegeben wird, die vielleicht nicht unterstützt wird,
// wie Balinesisch, wird eine fallback Sprache (Indonesisch) definiert.
console.log(date.toLocaleDateString(['ban', 'id']));
// → "20/12/2012"
```

### Einsatz von `options`

Das Ergebnis der `toLocaleDateString()` Methode kann benutzerdefiniert mit dem Argument `options` beeinflusst werden.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Gibt einen Wochentag und ein langes Datum zurück.
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

// Macht UTC sichtbar
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(date.toLocaleDateString('en-US', options));
// → "Thursday, December 20, 2012, GMT"
```

## Performance

Wenn viele Daten formatiert werden sollen, ist es besser ein {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekt zu erstellen und die Funktion {{jsxref("DateTimeFormat.prototype.format", "format")}} zu benutzen.

## Spezifikationen

| Spezifikation                                                                                                                                    | Status                           | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                         | {{Spec2('ES3')}}             | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', 'sec-15.9.5.6', 'Date.prototype.toLocaleDateString')}}                                             | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tolocaledatestring', 'Date.prototype.toLocaleDateString')}}             | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocaledatestring', 'Date.prototype.toLocaleDateString')}}         | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.3.2', 'Date.prototype.toLocaleDateString')}}                                         | {{Spec2('ES Int 1.0')}} | Definition der `locales` und `options` Argumente.     |
| {{SpecName('ES Int 2.0', '#sec-13.3.2', 'Date.prototype.toLocaleDateString')}}                                         | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleDateString', 'Date.prototype.toLocaleDateString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toLocaleDateString")}}

## Siehe auch

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
