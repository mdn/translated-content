---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - filter
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/filter
---
{{JSRef}}

`filter()` erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen.

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## Syntax

    let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

### Parameter

- `callback`

  - : Eine Funktion, um jedes Element des Arrays zu testen. Die Funktion gibt `true` zurück, um das Element zu behalten, ansonsten `false`.

    - `element`
      - : Das aktuell zu testende Element aus dem Array.
    - `index` {{optional_inline}}
      - : Der Index des aktuell zu testenden Elements aus dem Array.
    - `array` {{optional_inline}}
      - : Das Array auf welchem `filter` aufgerufen wurde.

- `thisArg` {{optional_inline}}
  - : Wert, der als `this` innerhalb der Funktion genutzt wird.

### Rückgabewert

Ein neues Array mit den Elementen, die den Test bestanden haben. Wenn kein Element den Test besteht, wird ein leeres Array zurückgegeben.

## Beschreibung

`filter()` ruft eine bereitgestellte `callback`-Funktion einmal für jedes Element in einem Array auf und erstellt ein neues Array aller Werte, für die `callback` einen Wert zurückgibt [der umgewandelt `true` ergibt](/de/docs/Glossary/Truthy). `callback` wird nur für Indizes des Arrays aufgerufen, denen Werte zugewiesen wurden. Es wird nicht für Indizes aufgerufen, die gelöscht oder denen nie Werte zugewiesen wurden. Array-Elemente, die den Test in `callback` nicht bestehen, werden einfach übersprungen und sind im neuen Array nicht enthalten.

`callback` wird mit drei Argumenten aufgerufen:

1.  Der Wert des Elements
2.  Der Index des Elements
3.  Das Array-Objekt, das durchlaufen wird

Falls der Parameter `thisArg` an `filter` übergeben wird, wird er als Wert für `this` innerhalb von `callback` verwendet. Andernfalls hat `this` den Wert {{jsxref("undefined")}}. Welchen Wert `callback` letztendlich in `this` sieht wird gemäß [der üblichen Regeln bestimmt, nach denen `this` für eine Funktion ermittelt wird](/de/docs/Web/JavaScript/Reference/Operators/this).

`filter()` selbst verändert das Array nicht, auf dem es aufgerufen wird.

Der Bereich der von `filter()` verarbeiteten Elemente wird vor dem ersten Aufruf von `callback` festgelegt. Elemente, die nach Beginn des Aufrufs von `filter()` an das Array angehängt werden, werden von `callback` nicht berücksichtigt. Wenn vorhandene Elemente des Arrays geändert werden, ist der Wert maßgeblich, den `filter()` beim Erreichen eines Elements antrifft und dann an `callback` übergibt. Nachfolgende Elemente, die nach Beginn eines Durchlaufs von `filter()` gelöscht werden, bevor sie eingelesen werden konnten, werden nicht mehr berücksichtigt.

## Beispiele

### Alle kleinen Werte herausfiltern

Das folgende Beispiel nutzt `filter()`, um ein gefiltertes Array zu erstellen, aus dem alle Element mit Werten kleiner als 10 entfernt werden.

```js
function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Filtern von ungültigen Werten aus JSON

Das folgende Beispiel nutzt `filter()`, um ein gefiltertes JSON zu erstellen, in welchem alle Elemente mit numerischer `id` ungleich null sind.

```js
let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

let invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(obj) {
  if (isNumber(obj.id) && obj.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

let arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```

### Suchen in Arrays

Das folgende Beispiel nutzt `filter()`, um ein Array gemäß eines Suchkriterius zu filtern.

```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
```

#### ES2015 Implementierung

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
```

## Polyfill

`filter()` wurde dem ECMA-262-Standard in der 5. Auflage hinzugefügt. Als solches ist es möglicherweise nicht in allen Implementierungen des Standards enthalten. Sie können dies umgehen, indem Sie den folgenden Code am Anfang Ihrer Skripte einfügen, um die Verwendung von `filter()` in Implementierungen zu ermöglichen, die es nicht nativ unterstützen. Dieser Algorithmus entspricht dem in der 5. Auflage von ECMA-262 angegebenen Algorithmus, vorausgesetzt dass `callback.call()` mit dem ursprünglichen Wert von {{jsxref("Function.prototype.call()")}} auswertet wird und {{jsxref("Array.prototype.push()")}} seinen ursprünglichen Wert hat.

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    let len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined) {
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.20', 'Array.prototype.filter')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.6. |
| {{SpecName('ES2015', '#sec-array.prototype.filter', 'Array.prototype.filter')}}     | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.filter', 'Array.prototype.filter')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.filter")}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
