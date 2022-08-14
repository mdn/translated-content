---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
---
{{JSRef}}

Die Methode **`concat()`** führt zwei oder mehr Arrays zu einem zusammen. Die Methode ändert nicht die existierenden Arrays, sondern gibt stattdessen ein neues zurück.

{{EmbedInteractiveExample("pages/js/array-concat.html")}}

## Syntax

    var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

### Parameter

- `valueN`
  - : Arrays und/oder Werte, die mit dem aktuellen zu einem neuen Array zusammenführt werden sollen.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

`concat` generiert ein neues Array. Dieses besteht aus den Elementen des Arrays, auf dem diese Methode aufgerufen wurde, gefolgt von dem Element oder den Elementen, die als Argument übergeben wurden.

Die `concat`Methode verändert nicht das `this` Objekt oder eines der übergebenen Argumente, sondern gibt eine flache Kopie (_shallow copy_) zurück, die Kopien der Elemente in den ursprünglichen Arrays enthält. Elemente der ursprünglichen Arrays werden folgendermaßen in das neue Array kopiert:

- Objektreferenzen (und nicht das eigentliche Objekt): `concat` kopiert Objektreferenzen in das neue Array. Sowohl das ursprüngliche Array als auch das neue Array zeigen auf das gleiche Objekt. Das heißt, wenn ein referiertes Objekt verändert wird, sind diese Änderungen sowohl im neuen als auch in den ursprünglichen Arrays sichtbar.
- Zeichenketten (Strings), Zahlen und Booleane (nicht {{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}} und {{jsxref("Global_Objects/Boolean", "Boolean")}} Objekte): `concat` kopiert die Werte von Strings und Zahlen in das neue Array.

> **Note:** **Anmerkung:** Die Zusammenführung von Arrays und Werten verändert die Ausgangswerte und -objekte nicht. Etwaige weitere Operationen auf dem neuen Array (nur wenn Elemente keine Objekt-Referenz sind) haben keine Auswirkungen auf die Ausgangsarrays und umgekehrt.

## Beispiele

### Zusammenführen zweier Arrays

Der folgende Quellcode führt zwei Arrays zusammen:

```js
var alpha = ['a', 'b', 'c'],;
var numeric = [1, 2, 3];

alpha.concat(numeric);
// Result: ['a', 'b', 'c', 1, 2, 3]
```

### Zusammenführen von drei Arrays

Der folgende Quellcode führt drei Arrays zusammen:

```js
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Zusammenführen von Werten in ein Array

Der folgende Quellcode führt drei Werte in ein Array zusammen:

```js
var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);
// Result: ['a', 'b', 'c', 1, 2, 3]
```

### Zusammenführen von geschachtelten Arrays

Der folgende Quellcode führt inneinander geschachtelte Array zusammen und demonstriert die Erhaltung der Referenzen:

```js
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// result in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]];
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.4', 'Array.prototype.concat')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.concat', 'Array.prototype.concat')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.concat', 'Array.prototype.concat')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.concat")}}

## Siehe auch

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} — Hinzufügen/Entfernen eines Elemente am Ende des Arrays.
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} — Hinzufügen/Entfernen eines Elemente am Beginn des Arrays.
- {{jsxref("Array.splice", "splice")}} — Hinzufügen/Entfernen eines Elemente an der angegebenen Stelle im Array.
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} – Kontrolle über flaches Konkatinieren.
