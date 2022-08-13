---
title: Intl.DateTimeFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
tags:
  - DateTimeFormat
  - Internationalization
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
---
{{JSRef}}

Die **`Intl.DateTimeFormat.prototype.format`** Eigenschaft gibt einen Getter-Funktion zurück, die einen Zeitstempel nach den Gebiets- und Formatierungsoptionen des {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekts formatiert.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html")}}

## Syntax

    dateTimeFormat.format(date)

### Parameter

- `date`
  - : Der Zeitstempel, der formatiert werden soll.

## Beschreibung

Die Funktion, die vom `format` Getter zurückgegeben wird, formatiert einen Zeitpunkt (date) in einen String. Dabei werden die Gebiets- und Formatierungsoptionen des {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekts berücksichtigt.

## Beispiele

### Einsatz von `format`

Die vom `format` Getter zurückgegebene Funktion wird zum Formatieren von Zeitstempeln genutzt, hier für Serbien:

```js
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dateTimeFormat = new Intl.DateTimeFormat('sr-RS', options);
console.log(dateTimeFormat.format(new Date()));
// → "недеља, 7. април 2013."
```

### Einsatz von `format` mit `map`

Die vom `format` Getter zurückgegebene Funktion kann zum Formatieren von Zeitpunkten in einem Array genutzt werden. Zu berücksichtigen ist, dass die Funktion an das {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} Objekt gebunden ist, von welche die Funktion stammt, so dass sie direkt an {{jsxref("Array.prototype.map()")}} übergeben werden kann.

```js
var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
var options = { year: 'numeric', month: 'long' };
var dateTimeFormat = new Intl.DateTimeFormat('pt-BR', options);
var formatted = a.map(dateTimeFormat.format);
console.log(formatted.join('; '));
// → "setembro de 2012; dezembro de 2012; abril de 2012"
```

## Spezifikationen

| Spezifikation                                                                                                                            | Status                           | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}}                                         | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}}                                         | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.format', 'Intl.DateTimeFormat.format')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.DateTimeFormat.format")}}

## Siehe auch

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
