---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - ECMAScript6
  - Global Objects
  - JavaScript
  - Referenz
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set
---
{{JSRef}}

Ein **`Set`**-Objekt speichert _eindeutige_ Werte jedes beliebigen Typs, egal ob es sich dabei um {{Glossary("Primitive", "primitive Werte")}} oder Objektreferenzen handelt.

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntax

    new Set([iterable]);

### Parameter

- iterable
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Statements/for...of), dessen Elemente zum neuen `Set` hinzugefügt werden sollen.
    Ist dieser Parameter nicht angegeben oder `null`, wird ein leeres `Set` erzeugt.

### Rückgabewert

Ein neues `Set` Objekt.

## Beschreibung

`Set` Objekte sind Sammlungen von Werten. Man kann über die Elemente iterieren; sie werden in der Reihenfolge ihres Hinzufügens gespeichert. Jeder Wert ist **nur einmal vorhanden**; er ist im `Set` eindeutig.

### Gleichheit

Da jeder Wert innerhalb eines `Set`s eindeutig sein muss, werden alle Werte auf Gleichheit überprüft. In einer früheren Version der ECMAScript Spezifikation verhielt sich der Algorithmus dafür anders als der für den `===` Operator. Insbesondere waren für `Set`s `+0` und `-0` verschiedene Werte (obwohl sie streng gleich sind). In der ECMAScript 2015 Spezifikation wurde das geändert, so dass `+0` und `-0` jetzt jeweils als gleicher Wert gelten. Siehe auch den Eintrag "Key equality for -0 and 0" in der Übersicht zur [Browserkompatibilität](#browserkompatibilität).

{{jsxref("NaN")}} und {{jsxref("undefined")}} können ebenfalls in einem Set gespeichert werden. Dabei werden alle `NaN` Werte gleichgesetzt, d.h. `NaN` gilt gleich `NaN` (auch wenn `NaN !== NaN`).

## Eigenschaften

- `Set.length`
  - : Der Wert der Eigenschaft `length` ist immer 0.
    Die Anzahl der Elemente eines Sets befindet sich in {{jsxref("Set.prototype.size")}}.
- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : Die Konstruktorfunktion, um abgeleitete Objekte zu erzeugen.
- {{jsxref("Set.prototype")}}
  - : Prototyp für den `Set` Konstruktor. Ermöglicht das Hinzufügen von Eigenschaften zu allen `Set` Objekten.

## `Set` Instanzen

Alle `Set` Instanzen erben von {{jsxref("Set.prototype")}}.

### Eigenschaften

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Set/prototype','Properties')}}

### Methoden

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Set/prototype','Methods')}}

## Beispiele

### Verwenden eines `Set` Objekts

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 4

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

mySet.size; // 3, we just removed one value
```

### Iterieren über ein `Set`

```js
// iterate over items in set
// logs the items in the order: 1, "some text"
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text"
for (let item of mySet.keys()) console.log(item);

// logs the items in the order: 1, "some text"
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text"
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert set to plain Array
var myArr = Array.from(mySet); // [1, "some text"]

// the following will also work if run in an HTML document
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// converting between Set and Array
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersect can be simulated via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
var difference = new Set([...set1].filter(x => !set2.has(x)));

// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### Gebräuchliche `Set` Operationen implementieren

```js
function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function symmetricDifference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}

function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
difference(setA, setC); // => Set [1, 2]
```

### `Array` und `Set`

```js
var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
```

### Duplikate entfernen aus einem `Array`

```js
// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
```

### `String` und `Set`

```js
var text = 'India';

var mySet = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
mySet.size;  // 5
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar           |
| -------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-set-objects', 'Set')}}         | {{Spec2('ES6')}}         | Initial definition. |
| {{SpecName('ESDraft', '#sec-set-objects', 'Set')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.builtins.Set")}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
