---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toJSON
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toJSON
---
{{JSRef}}Zwraca objekt {{jsxref("Date")}} w postaci tekstu.

## Składnia

    dateObj.toJSON()

## Opis

`toJSON()` zwraca ciąg znaków (using {{jsxref("Date.prototype.toISOString()", "toISOString()")}}) reprezentujący wartość obiektu {{jsxref("Date")}}.

## Przykłady

### Użycie `toJSON()`

```js
var jsonDate = (new Date()).toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Specyfikacje

| Specification                                                                                            | Status                       | Comment                                                   |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.44', 'Date.prototype.toJSON')}}                     | {{Spec2('ES5.1')}}     | Początkowa definicja zaimplementowana w JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}}     | {{Spec2('ES6')}}         |                                                           |
| {{SpecName('ESDraft', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}} | {{Spec2('ESDraft')}} |                                                           |

## Kompatybilność

{{Compat("javascript.builtins.Date.toJSON")}}

## Zobacz także

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
