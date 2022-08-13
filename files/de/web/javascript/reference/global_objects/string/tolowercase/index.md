---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
tags:
  - JavaScript
  - Method
  - Prototype
  - Referenz
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---
{{JSRef}}

Die **`toLowerCase()`** Methode gibt den Wert des aufrufenden Strings in Kleinbuchstaben umgewandelt zurück.

## Syntax

    str.toLowerCase()

### Rückgabewert

Ein neuer String, der den alten String konvertiert zu Kleinbuchstaben enthält.

## Beschreibung

Die `toLowerCase()` Methode gibt den Wert des Strings in Kleinbuchstaben umgewandelt zurück. `toLowerCase()` hat keine Auswirkungen auf den Wert des Strings `str`.

## Beispiele

### Benutzung von `toLowerCase()`

```js
console.log('ALPHABET'.toLowerCase()); // 'alphabet'
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.16', 'String.prototype.toLowerCase')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.String.toLowerCase")}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
