---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/slice
---
{{JSRef}}

Die **`slice()`** Methode schreibt eine flache Kopie von einem Teil des Arrays in ein neues Array-Objekt von `begin` bis `end` (`end` nicht enthalten). Das originale Array wird nicht verändert.

{{EmbedInteractiveExample("pages/js/array-slice.html")}}

## Syntax

    arr.slice([begin[, end]])

### Parameter

- `begin`{{optional_inline}}

  - : Null-basierter Index, an welcher die Extraktion beginnt.

    Bei einem negativen Index kennzeichnet `begin` einen Versatz vom Ende der Sequenz. `slice(-2)` extrahiert die letzten zwei Elemente der Sequenz.

    Wenn `begin` undefiniert ist, beginnt `slice` bei Index `0`.

    Wenn `begin` größer als die Länge der Sequenz ist, wird ein leeres Array zurückgegeben.

- `end` {{optional_inline}}

  - : Null-basierter Index bevor die Extraktion endet. `slice` extrahiert bis zu, aber nicht inklusive `end`.

    `slice(1,4)` extrahiert vom zweiten bis zum vierten Element (Elemente sind indexiert als 1, 2 und 3).

    Bei einem negativen Index kennzeichnet `end` einen Versatz vom Ende der Sequenz. `slice(2, -1)` extrahiert vom dritten bis zum vorletzten Element der Sequenz.

    Wenn auf `end` weggelassen wird, extrahiert `slice` bis zum Ende der Sequenz (`arr.length`).

    Wenn `end` größer als die Länge der Sequenz ist, extrahiert `slice` bis zum Ende der Sequenz (`arr.length`)

### Rückgabewert

Ein neues Array, welches die extrahierten Elemente enthält.

## Beschreibung

`slice` verändert das originale Array nicht. Es gibt eine Schattenkopie der Elemente des Arrays zurück. Elemente des original Arrays werden folgendermaßen in das zurückgegeben Array kopiert:

- Für Objektreferenzen (nicht das aktuelle Objekt) kopiert `slice` die Objektreferenz in das neue Array. Beide, das originale und das neue Array, referenzieren das selbe Objekt. Wenn sich ein referenziertes Objekt ändert, ist die Änderungen beim neue und beim originalen Array zu sehen.
- Für die Typen string, number und boolean (nicht {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Boolean")}} Objekte) kopiert `slice` den Wert in das neue Array. Änderungen an string, number oder boolean in einem Array haben keine Auswirkung auf das andere Array.

Wenn ein neues Element zu einem Array hinzugefügt wird, hat es keine Auswirkung auf das andere Array.

## Beispiel

### Gibt einen Teil eines existierenden Arrays zurück.

```js
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits enthält  ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus enthält ['Orange','Lemon']
```

### Einsatz von `slice`

Im folgenden Beispiel erzeugt `slice` ein neues Array, `newCar`, von `myCar`.
Beide haben eine Referenz zu dem Objekt `myHonda`. Wenn sich die Farbe von `myHonda` zu lila ändert, dann ist die Änderung in beiden Arrays sichtbar.

```js
// Using slice, create newCar from myCar.
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + myCar.toSource());
console.log('newCar = ' + newCar.toSource());
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);
```

Dieses Skript schreibt:

```js
myCar = [{color:'red', wheels:4, engine:{cylinders:4, size:2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color:'red', wheels:4, engine:{cylinders:4, size:2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

## Array-ähnliche Objekte

Die `slice` Methode kann auch verwendete werden, um Array-ähnliche Objekte bzw. Collections in Arrays zu konvertieren. Man muss nur die Methode an das Objekt binden.
Die {{jsxref("Functions/arguments", "arguments")}} Variable innerhalb einer Funktion ist ein Beispiel für ein Array-ähnliches Objekte.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

Das Binden von Methoden funktioniert mit der `.call` Funktion von {{jsxref("Function.prototype")}} und der Aufruf kann reduziert werden zu `[].slice.call(arguments)` anstatt `Array.prototype.slice.call`. Mit der {{jsxref("Function.prototype.bind", "bind")}} Funktion kann der Aufruf immer vereinfacht werden.

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

## Cross-Browser-Verhalten

Obwohl host Objekte (wie das DOM Objekt) laut Spezifikation nicht dem Mozilla Verhalten beim Konvertieren mit `Array.prototype.slice` folgen muss und IE < 9 dies auch nicht tut, erlauben Versionen ab IE 9 dieses. “shimming” kann eine sicheres cross-browser Verhalten ermöglichen. So lange andere moderne Browser weiterhin dieses Verhalten unterstützen, sowie zur Zeit IE, Mozilla, Chrome, Safari und Opera es tun, werden Entwickler beim Lesen von (DOM unterstützendem) slice Code, basierend auf diesem Schema, von der Semantik nicht in die Irre geführt.Sie können mit Sicherheit auf die Semantik vertrauen um das de facto Standard Verhalten sicherzustellen. (Dieser shim ermöglicht es auch, dass IE mit dem zweiten Argument von slice() ein explizites {{jsxref("null")}}/{{jsxref("undefined")}}) als Wert verwendet. Bei älteren Versionen des IE war dies nicht erlaubt, jedoch funktioniert es bei allen modernen Browsern inklusive IE >= 9.)

```js
/**
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 * (technically, since host objects have been implementation-dependent,
 * at least before ES6, IE hasn't needed to work this way).
 * Also works on strings, fixes IE < 9 to allow an explicit undefined
 * for the 2nd argument (as in Firefox), and prevents errors when
 * called on other DOM objects.
 */
(function () {
  'use strict';
  var _slice = Array.prototype.slice;

  try {
    // Can't be used with DOM elements in IE < 9
    _slice.call(document.documentElement);
  } catch (e) { // Fails in IE < 9
    // This will work for genuine arrays, array-like objects,
    // NamedNodeMap (attributes, entities, notations),
    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
    Array.prototype.slice = function(begin, end) {
      // IE < 9 gets unhappy with an undefined end argument
      end = (typeof end !== 'undefined') ? end : this.length;

      // For native Array objects, we use the native slice function
      if (Object.prototype.toString.call(this) === '[object Array]'){
        return _slice.call(this, begin, end);
      }

      // For array like object we handle it ourselves.
      var i, cloned = [],
        size, len = this.length;

      // Handle negative value for "begin"
      var start = begin || 0;
      start = (start >= 0) ? start : Math.max(0, len + start);

      // Handle negative value for "end"
      var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Actual expected size of the slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
}());
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                 | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.10', 'Array.prototype.slice')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.slice', 'Array.prototype.slice')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.slice', 'Array.prototype.slice')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.slice")}}

## Siehe auch

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
