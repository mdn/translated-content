---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reverse
---
{{JSRef}}

Die **`reverse()`** Methode kehrt die Reihenfolge der Arrayelemente _[in-place](https://de.wikipedia.org/wiki/In-place)_ um. Das erste Element wird zum letzen und das letzte wird zum ersten.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Syntax

    arr.reverse()

### Rückgabewert

Das umgedrehte Array.

## Beschreibung

Die `reverse` Methode kehrt die Reihenfolge der Elemente des angegebenen Arrays in-place um, ändert das Array und gibt eine Referenz zu diesem zurück.

## Beispiele

### Elemente in einem Array umkehren

Das folgende Beispiel erzeugt ein Array `a` mit 3 Elementen und kehrt die Reihenfolge des Arrays um. Der Aufruf von `reverse()` gibt eine Referenz zum umgekehrten Array `a` zurück.

```js
var a = [1, 2, 3];

console.log(a) // [1, 2, 3]

a.reverse();

console.log(a) // [3, 2, 1]
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.8', 'Array.prototype.reverse')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.reverse")}}

## Siehe auch

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
