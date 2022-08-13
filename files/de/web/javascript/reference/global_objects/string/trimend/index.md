---
title: String.prototype.trimRight()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/trimEnd
original_slug: Web/JavaScript/Reference/Global_Objects/String/TrimRight
---
{{JSRef}} {{non-standard_header}}

Die **`trimRight()`** Methode entfernt Leerzeichen vom rechten Ende der Zeichenkette.

## Syntax

    str.trimRight()

### Rückgabewert

Ein neuen String, der den alten String ohne Whitespaces auf der rechten Seite beinhaltet.

## Beschreibung

Die `trimRight()` Methode gibt die Zeichenkette ohne Leerzeichen am rechten Ende zurück. `trimRight()` manipuliert nicht den Wert der Zeichenkette.

## Beispiel

### `trimRight()` verwenden

Im folgenden Beispiel wird die Funktionalität dieser Methode dargestellt.

```js
var str = '   foo  ';

console.log(str.length);  // 8

str = str.trimRight();
console.log(str.length);  // 6
console.log(str);         // '   foo'
```

## Spezifikationen

Gehört keinem Standard an. Hinzugefügt in JavaScript 1.8.1.

## Browserkompatibilität

{{Compat("javascript.builtins.String.trimRight")}}

## Siehe auch

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
