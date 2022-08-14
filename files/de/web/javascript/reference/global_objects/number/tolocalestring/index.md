---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - Internationalization
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---
{{JSRef}}

Die **`toLocaleString()`** Methode gibt eine Zahl als String in sprachabhängiger Formatierung zurück.

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

Die neuen `locales` und `options` Argumente ermöglichen es Anwendungen, sprachübliche Formatierungskonventionen zu benutzen und diese anzupassen. In älteren Implementierungen werden die `locales` und `options` Argumente ignoriert, und die Formatierung des Strings ist implementierungsabhängig.

## Syntax

    numObj.toLocaleString([locales [, options]])

### Parameter

Prüfe die [Browserkompatibilität](#Browserkompatibilität), um zu sehen, welcher Browser den `locales` und `options` Parameter unterstützt, und das Beispiel [Unterstützung für `locales` und `options` Argumente prüfen](#Example:_Checking_for_support_for_locales_and_options_arguments) für eine Funktionalitätsprüfung.

> **Note:** **Anmerkung:** Die ECMAScript Internationalization API, implementiert in Firefox 29, fügte das Argument `locales` zur Methode `Number.toLocaleString()` zu. Wenn das Argument {{jsxref("undefined")}} ist, arbeitet die Methode nach der Lokalisierung des OS, während Vorgängerversionen von Firefox [Western Arabic](https://en.wikipedia.org/wiki/Arabic_numerals) zurück geben. Diese Änderung wurde als eine Rückwärtskompatibilität gemeldet. Das Problem wurde bereits behoben ({{bug(999003)}}).

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', 'Parameter')}}

### Rückgabewert

Einen String, der die gegebene Zahl in einer sprachspezifischen Formatierung repräsentiert.

## Beispiele

### Einsatz von `toLocaleString()`

Bei der Nutzung ohne Parameter wird der string in der Standardsprache ohne Optionen zurückgegeben:

```js
var number = 3500;

console.log(number.toLocaleString()); // Ausgabe: "3.500" wenn in Deutscher locale
```

### Unterstützung für `locales` und `options` Argumente prüfen

Die `locales` und `options` Argumente sind noch nicht in allen Browsern unterstützt. Zur Prüfung der Unterstützung von ES5.1 und neueren Implementierungen wird vorausgesetzt, dass unbekannte Sprachen zu einem {{jsxref("RangeError")}} führen, was folgendermaßen eingesetzt werden kann:

```js
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

Vor ES5.1 mussten die Implementierungen keinen {{jsxref("RangeError")}} erzeugen, wenn `toLocaleString` mit Argumenten aufgerufen wurde.

Eine Prüfung, die in allen Browser funktioniert, auch in denen, die ECMA-262 vor ES5.1 unterstützen, ist die Prüfung auf Funktionen aus ECMA-402, welche Optionen in `Number.prototype.toLocaleString` direkt unterstützen:

```js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

Diese Tests auf dem globalen {{jsxref("Intl")}} Objekt prüfen, ob das Objekt existiert und die Eigenschaft vom Typ Funktion {{jsxref("Intl.NumberFormat")}} hat.

### Einsatz von `locales`

Diese Beispiel zeigt einige der Variationen in internationalen Zahlenformaten. Um das Format der Sprache zu bekommen, welches in der Anwendung benutzt wird, spezifiziere die Sprache (und mögliche Rückfallsprachen (fallback)) mit dem `locales` Argument.

```js
var number = 123456.789;

// Englische Benutzer sehen ein Punkt anstatt eines Kommas als Dezimaltrenner
console.log(number.toLocaleString('en-GB'));
// → 123.456,789

// Arabisch ist in den meisten arabisch Sprechenden Ländern eingesetzt (Eastern Arabic) Ziffern
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// Indien benutzt Tausendertrennzeichen bei Tausend und allen weiteren zwei Stellen
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// Chinesisches Zahlensystem
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// Wenn eine Sprache übergeben werden soll, die vielleicht nicht
// unterstützt wird (Balinesisch), nutze eine fallback Sprache (Indonesisch)
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
```

### Einsatz von `options`

Das Ergebnis von `toLocaleString` kann durch das `options` Argument angepasst werden.

```js
var number = 123456.789;

// Währungsformat
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// Der Japanische Yen hat keine Unterwährung (z. B. Cent)
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// Limitiert auf drei signifikante Stellen
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Einsatz der Host-Standard-Sprache mit Optionen für die Nummernformatierung
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → 30,000.65 wenn Englisch die Standard-Sprache ist, oder
// → 30.000,65 wenn Deutsch die Standard-Sprache ist, oder
// → 30 000,65 wenn Französisch die Standard-Sprache ist
```

## Performance

Wenn eine lange Zahl formatiert werden soll, ist es besser ein {{jsxref("NumberFormat")}} Objekt zu erstellen und die Funktion {{jsxref("NumberFormat.format")}} zu benutzen.

## Spezifikationen

| Spezifikation                                                                                                                            | Status                           | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                 | {{Spec2('ES3')}}             | Initiale Definition. Implementiert in JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.3', 'Number.prototype.toLocaleString')}}                                         | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}             | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}     | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                                     | {{Spec2('ES Int 1.0')}} |                                                       |
| {{SpecName('ES Int 2.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                                     | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Number.prototype.toLocaleString', 'Number.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.toLocaleString")}}

## Siehe auch

- {{jsxref("Number.prototype.toString()")}}
