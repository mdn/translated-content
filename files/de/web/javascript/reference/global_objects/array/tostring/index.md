---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toString
---
{{JSRef}}

Die **`toString()`** Methode gibt einen String zurück, der das Array und seine Elemente repräsentiert.

{{EmbedInteractiveExample("pages/js/array-tostring.html")}}

## Syntax

    arr.toString()

### Rückgabewert

Ein String, der die Elemente des Arrays repräsentiert.

## Beschreibung

Das {{jsxref("Array")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}. Für Arrayobjekte fügt die `toString` Methode das Array zu einem String zusammen, der jedes Element des Arrayelemente durch Kommata getrennt enthält.

JavaScript ruft die `toString` Methode automatisch auf wenn ein Array als Text repräsentiert wird oder wenn ein Array in einer Stringkonkatenation verwendet wird.

### ECMAScript 5 Semantik

Beginnend mt JavaScript 1.8.5 (Firefox 4), und mit der Semantik des ECMAScript der 5. Edition, ist die `toString()` Methode generisch und kann mit jeglichen Objekten verwendet werden. {{jsxref("Object.prototype.toString()")}} wird aufgerufen und der resultierende Wert wird zurückgegeben.

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.2', 'Array.prototype.toString')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.tostring', 'Array.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.tostring', 'Array.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.toString")}}

## Siehe auch

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
