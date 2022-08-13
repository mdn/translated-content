---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---
{{JSRef}}

Die **`toLocaleTimeString()`** Methode gibt einen sprachsensitiven String mit dem Zeitsteil des Zeitpunktes zurück. Die neuen Argumente `locales` und `options` können eingesetzt werden, um die Sprache (und damit die Formatierung) einzustellen oder benutzerdefinierte Formatierungen vorzunehmen. In älteren Implementierungen, die `locales` und `options` ignorieren, ist die Formatierung des String implementierungsabhängig.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Syntax

    dateObj.toLocaleTimeString([locales[, options]])

### Parameter

Überprüfe das Kapitel [Browserkompatibilität](#browser_compatibility), um zu erfahren, welcher Browser die Argumente `locales` and `options` unterstützt. Zudem sollte das Beispiel [Unterstützung der Argumente `locales` und `options`](#checking_for_support_for_locales_and_options_arguments) beachtet werden.

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameter')}}Der Standardwert für jede Eigenschaft einer Datums-Zeitkomponente ist {{jsxref("undefined")}}, wenn aber die Eigenschaften `hour`, `minute`, `second` {{jsxref("undefined")}} sind, sind die Eigenschaften `hour`, `minute` und `second` `"numeric"`.

### Rückgabewert

Einen String, der den Zeitteil des gegebenen {{jsxref("Date")}} Objektes mit sprachspezifischen Konventionen repräsentiert.

## Beispiele

### Einsatz von `toLocaleTimeString()`

Standardeinsatz ohne Angaben zur Sprache und Formatierung. Ein formatierter String in der Standardsprache mit Standardoption wird zurückgegeben.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() ohne Argumente abhängig von der Implementierung,
// der Standardsprache und der Standardzeitzone.
console.log(date.toLocaleTimeString());
// → "7:00:00 PM"  wenn in der Sprache en-US mit America/Los_Angeles Zeitzone ausgeführt
```

### Unterstützung der Argumente `locales` und `options`

Die Argumente `locales` and `options` sind noch nicht in allen Browsern unterstützt. Um herauszufinden, ob eine Implementierung die Argumente unterstützt, kann die Anforderung benutzt werden, dass bei nicht existierenden Sprachen ein {{jsxref("RangeError")}} erzeugt wird:

```js
function toLocaleTimeStringSupportsLocales() {
  try {
    new Date().toLocaleTimeString('i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
```

### Einsatz von `locales`

Das Beispiel zeigt einige Variation von internationalisierten Zeitformaten. Um das Format der Sprache der Benutzerschnittstelle (z. B. Webseite) zu bekommen, muss die Sprache (und manchmal eine fallback Sprache) mit dem Argument `locales` gesetzt werden:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// die folgenden Formate setzen voraus, dass man die Zeitzone
// America/Los_Angeles für US eingestellt hat.

// US Englische Sprache; 12-Stunden Zeit mit AM/PM
console.log(date.toLocaleTimeString('en-US'));
// → "7:00:00 PM"

// British Englishe Sprache; 24-Stunden Zeit ohne AM/PM
console.log(date.toLocaleTimeString('en-GB'));
// → "03:00:00"

// Koreanische Sprache; 12-Stunden Zeit mit AM/PM
console.log(date.toLocaleTimeString('ko-KR'));
// → "오후 12:00:00"

// In den meisten arabischen Ländern werden arabische Ziffern genutzt.
console.log(date.toLocaleTimeString('ar-EG'));
// → "٧:٠٠:٠٠ م"

// Wenn eine Sprache angegeben wird, die vielleicht nicht unterstützt wird,
// wie Balinesisch, wird eine fallback Sprache (Indonesisch) definiert.
console.log(date.toLocaleTimeString(['ban', 'id']));
// → "11.00.00"
```

### Einsatz von `options`

Das Ergebnis der ` toLocaleTimeString``() ` Methode kann benutzerdefiniert mit dem Argument `options` beeinflusst werden.

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Macht UTC sichtbar
var options = { timeZone: 'UTC', timeZoneName: 'short' };
console.log(date.toLocaleTimeString('en-US', options));
// → "3:00:00 AM GMT"

// Manchal brauchen US-Sprachen auch 24-Stunden Zeiten
console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// → "19:00:00"
```

## Performance

Wenn viele Zeiten formatiert werden sollen, ist es besser ein {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekt zu erstellen und die Funktion {{jsxref("DateTimeFormat.prototype.format", "format")}} zu benutzen.

## Spezifikationen

| Spezifikation                                                                                                                                    | Status                           | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                         | {{Spec2('ES3')}}             | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.7', 'Date.prototype.toLocaleTimeString')}}                                             | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}}                     | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}}             | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.3.3', 'Date.prototype.toLocaleTimeString')}}                                         | {{Spec2('ES Int 1.0')}} | Definition der `locales` und `options` Argumente.     |
| {{SpecName('ES Int 2.0', '#sec-13.3.3', 'Date.prototype.toLocaleTimeString')}}                                         | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleTimeString', 'Date.prototype.toLocaleTimeString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toLocaleTimeString")}}

## Siehe auch

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
