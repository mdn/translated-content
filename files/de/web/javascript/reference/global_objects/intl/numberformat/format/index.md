---
title: Intl.NumberFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
tags:
  - Internationalization
  - JavaScript
  - NumberFormat
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
---
{{JSRef}}

Die **`Intl.NumberFormat.prototype.format`** Eigenschaft gibt eine Getterfunktion zurück, die eine Zahl nach den Sprach- und Formatierungsoptionen dieses {{jsxref("NumberFormat")}} Objektes formatiert.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html")}}

## Syntax

    numberFormat.format(number)

### Parameter

- `number`
  - : Zahl, die formatiert werden soll.

## Beschreibung

Die Funktion, die von `format` Getter zurückgegeben wird, formatiert eine Zahl in einen String nach den angegebenen Sprach- und Formatierungsoptionen des {{jsxref("NumberFormat")}} Objektes.

## Beispiele

### Einsatz von `format`

Einsatz der vom `format` Getter zurückgegebenen Funktion zum Formatieren eines Währungswertes, hier für Russland:

```js
var options = { style: 'currency', currency: 'RUB' };
var numberFormat = new Intl.NumberFormat('ru-RU', options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
```

### Einsatz `format` mit `map`

Einsatz der vom `format` Getter zurückgegebenen Funktion zum Formatieren von allen Zahlen in einem Array. Zu bemerken ist, dass die Funktion an das {{jsxref("NumberFormat")}} Objekt gebunden ist, von dem sie stammt, so dass es direkt in {{jsxref("Array.prototype.map")}} verwendet werden kann.

```js
var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat('es-ES');
var formatted = a.map(numberFormat.format);
console.log(formatted.join('; '));
// → "123.456,789; 987.654,321; 456.789,123"
```

## Spezifikationen

| Spezifikation                                                                                                                                    | Status                           | Komment              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}}                                         | {{Spec2('ES Int 1.0')}} | Initiale Definition. |
| {{SpecName('ES Int 2.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}}                                         | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.prototype.format', 'Intl.NumberFormat.prototype.format')}} | {{Spec2('ES Int Draft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.NumberFormat.format")}}

## Siehe auch

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
