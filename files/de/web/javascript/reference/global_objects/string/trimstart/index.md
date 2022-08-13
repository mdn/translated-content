---
title: String.prototype.trimLeft()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/trimStart
original_slug: Web/JavaScript/Reference/Global_Objects/String/TrimLeft
---
{{JSRef}} {{non-standard_header}}

Die **`trimLeft()`** Methode entfernt Leerzeichen vom linken Ende der Zeichenkette.

## Syntax

    str.trimLeft()

### Rückgabewert

Ein neuen String, der den alten String ohne Whitespaces auf der linken Seite beinhaltet.

## Beschreibung

Die `trimLeft()` Methode gibt die Zeichenkette ohne Leerzeichen am linken Ende zurück. `trimLeft()` manipuliert nicht den Wert der Zeichenkette.

## Beispiel

### `trimLeft()` verwenden

Im folgenden Beispiel wird die Funktionalität dieser Methode dargestellt.

```js
var str = '   foo  ';

console.log(str.length);  // 8

str = str.trimLeft();
console.log(str.length);  // 5
console.log(str);         // 'foo  '
```

## Spezifikationen

Gehört keinem Standard an. Hinzugefügt in JavaScript 1.8.1.

## Browserkompatibilität

{{Compat("javascript.builtins.String.trimLeft")}}

## Siehe auch

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
