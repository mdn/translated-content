---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/join
---
{{JSRef}}

Die **`join()`** Methode verkettet alle Elemente eines Arrays (oder [Array-ähnlicher Objekte](/de/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)) durch Kommata getrennt oder einem angegebenen Trennzeichen in einem String und gibt diesen zurück. Enthält das Array nur ein Element wird nur dieses ohne Trennzeichen zurückgegeben.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Syntax

    arr.join([separator])

### Parameter

- `separator` {{optional_inline}}
  - : Gibt einen String an, um jedes Paar benachbarter Elemente des Arrays voneinander zu trennen. Das Trennzeichen wird bei Bedarf in einen String umgewandelt. Wenn nicht angegeben, werden die Array-Elemente durch ein Komma (",") getrennt. Wenn `separator` ein leerer String ist, werden alle Elemente ohne Trennzeichen miteinander verbunden.

### Rückgabewert

Ein String in dem alle Arrayelemente verkettet sind. Wenn `arr.length` gleich `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Alle Elemente des Arrays werden in Strings umgewandelt und in einem String miteinander verkettet

> **Warning:** Falls ein Element `undefined` oder `null` ist, wird es in einen leeren String umgewandelt.

## Beispiele

### Einen Array auf vier verschiedene Arten zusammenführen

Im folgenden Beispiel wird ein Array `a` mit drei Elementen erstellt, das dann viermal mit miteinander verbunden wird: mit dem Standardtrennzeichen, einem Komma mit Leerzeichen, einem Pluszeichen und einem leeren String.

```js
var a = ['Wind', 'Rain', 'Fire'];
a.join();       // 'Wind,Rain,Fire'
a.join(', ');   // 'Wind, Rain, Fire'
a.join(' + ');  // 'Wind + Rain + Fire'
a.join('');     // 'WindRainFire'
```

### Zusammenführen eines Array-ähnlichen Objekts

Das Folgende Beispiel fügt ein Array-ähnliches Objekt ({{jsxref("Functions/arguments", "arguments")}}) zusammen, indem {{jsxref("Function.prototype.call", "call()")}} auf `Array.prototype.join` aufgerufen wird.

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
// Erwartete Ausgabe: "1,a,true"
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.5', 'Array.prototype.join')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.join', 'Array.prototype.join')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.join', 'Array.prototype.join')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.join")}}

## Siehe auch

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
