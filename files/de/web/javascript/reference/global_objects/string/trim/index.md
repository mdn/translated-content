---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/Trim
---
{{JSRef}}

Die**` trim()`** Methode entfernt Leerzeichen an beiden Enden einer Zeichenfolge. Das betrifft Leerzeichen verschiedenster Art (space, tab, no-break space, etc.) und alle Zeilenumbruch einleitende Zeichen (LF, CR, etc.).

## Syntax

    str.trim()

### Rückgabewert

Ein neuer String, der den gegebenen String ohne Whitespaces am Anfang und am Ende enthält.

## Beschreibung

Die `trim()` Methode gibt eine Zeichenfolge ohne Leerzeichen an beiden Enden zurück. `trim()` beeinflusst oder verändert nicht den ursprünglichen Wert der Zeichenfolge.

## Beispiele

### `trim()` verwenden

Das folgende Beispiel zeigt die kleingeschriebene Zeichenfolge **`'foo'`**:

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Ein Beispiel bei dem .trim() Leerzeichen an einem Ende entfernt

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

## Polyfill

Führe folgenden Code vor allem anderen aus um die Methode **`trim()`** zu erstellen sollte sie nativ nicht zur Verfügung stehen.

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar                                               |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.5.4.20', 'String.prototype.trim')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.8.1. |
| {{SpecName('ES6', '#sec-string.prototype.trim', 'String.prototype.trim')}}     | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-string.prototype.trim', 'String.prototype.trim')}} | {{Spec2('ESDraft')}} |                                                         |

## Browserkompatibilität

{{Compat("javascript.builtins.String.trim")}}

## Siehe auch

- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
