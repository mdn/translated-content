---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
tags:
  - Date
  - JavaScript
  - Methode(2)
  - Prototype
  - Referenz
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---
{{JSRef}}

Die **`toJSON()`** Methode gibt einen String zurück, der das {{jsxref("Date")}} Objekt darstellt.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntax

    dateObj.toJSON()

### Rückgabewert

Ein String, der das gegebene date Objekt repräsentiert.

## Beschreibung

{{jsxref("Date")}} Instanzen repräsentieren einen bestimmten Zeitpunkt. Ein Aufruf von `toJSON()` gibt unter Verwendung von {{jsxref("Date.prototype.toISOString()", "toISOString()")}} einen String zurück, der den Wert des {{jsxref("Date")}} Objekts darstellt. Diese Methode ist dafür vorgesehen, {{jsxref("Date")}} Objekte während der {{Glossary("JSON")}} Serialisierung standardisiert zu serialisieren.

## Beispiele

### Einsatz von `toJSON()`

```js
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Bemerkung                                                 |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.44', 'Date.prototype.toJSON')}}                     | {{Spec2('ES5.1')}}     | Erstmalige Definition. Implementiert in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}}     | {{Spec2('ES6')}}         |                                                           |
| {{SpecName('ESDraft', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}} | {{Spec2('ESDraft')}} |                                                           |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.toJSON")}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
