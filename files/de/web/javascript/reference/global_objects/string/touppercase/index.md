---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---
{{JSRef}}

Die **`toUpperCase()`** Methode gibt den Wert des aufrufenden Strings in Großbuchstaben umgewandelt zurück.

## Syntax

    str.toUpperCase()

### Rückgabewert

Ein neuer String, der den alten String konvertiert zu Großbuchstaben enthält.

## Beschreibung

Die `toUpperCase()` Methode gibt den Wert des Strings in Großbuchstaben umgewandelt zurück. `toUpperCase()` hat keine Auswirkungen auf den Wert des Strings `str`.

## Beispiele

### Benutzung von `toUpperCase()`

```js
console.log('alphabet'.toUpperCase()); // 'ALPHABET'
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.16', 'String.prototype.toUpperCase')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
