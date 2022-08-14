---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reduce
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Reduce
---
{{JSRef}}

Die **`reduce()`**-Methode reduziert ein Array auf einen einzigen Wert, indem es jeweils zwei Elemente (von links nach rechts) durch eine gegebene Funktion reduziert.

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

## Syntax

    arr.reduce(callback[, initialValue])

### Parameter

- `callback`
  - : Funktion, welche auf jeden Wert im Array angewandet wird und vier Argumente hat:_ `accumulator`
    _ : Der kumulierte Wert ist der Rückgabewert von `callback`; der in der zuvor zurückgegebene Wert des letzten Aufrufes von `callback` oder `initialValue` werden verwendet.
    - `currentValue`
      - : Das aktuell zu verarbeitende Element des Arrays.
    - `currentIndex`{{optional_inline}}
      - : Der Index des aktuellen Elements des Arrays. Beginnt mit dem Index 0, falls `initialValue` angegeben wurde, ansonsten mit Index 1.
    - `array`{{optional_inline}}
      - : Das Array, auf dem `reduce` abgerufen wird.
- `initialValue`{{optional_inline}}
  - : Der Wert des ersten Arguments, der bei dem ersten Aufruf in `callback` zu benutzt wird. Wenn kein Initialwert angegeben wird, wird das erste Element des Arrays benutzt. Das Aufrufen von `reduce()` auf einem leeren Array ohne Initialwerts führt zu einem Fehler.

### Rückgabewert

Der Ergebniswert der Reduzierung.

## Beschreibung

`reduce()` führt die `callback`-Funktion für jedes existierende Element in dem Array aus, Ausnahme sind nicht gesetzte Werte. `callback` hat vier Parameter:

- `accumulator`
- `currentValue`
- `currentIndex`
- `array`

Beim ersten Aufruf von `callback` sind die Werte von `accumulator` und `currentValue` in Abhängigkeit vom Parameter `initialValue` wie folgt:

- Wenn `initialValue` beim Aufruf von `reduce()` angegeben wird, ist `accumulator` gleich dem `initialValue` und `currentValue` ist gleich dem ersten Wert im Array.
- Wenn kein `initialValue` angegeben wird, ist `accumulator` gleich mit dem ersten Wert im Array und `currentValue` wird gleich dem zweiten Wert im Array sein.

> **Note:** **Hinweis:** Wenn `initialValue` nicht angegeben wird, wird `reduce()` die `callback`-Funktion startend beim Index 1 aufrufen, der erste Index wird übersprungen. Wenn `initialValue` angegeben ist, wird bei Index 0 begonnen.

Wenn das Array leer ist und kein `initialValue` angegeben ist, wird ein {{jsxref("TypeError")}} erzeugt. Wenn das Array nur ein Element hat (die Position ist egal) und kein `initialValue` angegeben ist oder wenn `initialValue` angegeben ist und das Array leer ist, wird der einzelne Wert sofort zurückgegeben, ohne `callback` aufzurufen.

Es ist immer sicherer `initialValue` anzugeben, weil es drei mögliche Ergebnisse ohne `initialValue` gibt, wie es im folgenden Beispiel gezeigt ist.

```js
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
```

### Wie reduce() funktioniert

Angenommen die folgende `reduce()` Funktion wird genutzt:

```js
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
```

Die `callback`-Funktion wird viermal aufgerufen, mit den Parametern und Rückgabewert für jeden Aufruf wir folgend beschrieben:

| `callback` | `accumulator` | `currentValue` | `currentIndex` | `array`           | Rückgabewert |
| ---------- | ------------- | -------------- | -------------- | ----------------- | ------------ |
| 1. Aufruf  | `0`           | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `1`          |
| 2. Aufruf  | `1`           | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `3`          |
| 3. Aufruf  | `3`           | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `6`          |
| 4. Aufruf  | `6`           | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `10`         |

Der zurückgegebene Wert von `reduce()` ist der Rückgabewert der letzten `callback`-Funktion (`10`).

Es ist zusätzlich möglich eine {{jsxref("Functions/Arrow_functions", "Arrow-Funktion","",1)}} statt einer ganzen Funktion zu benutzen. Der folgende Quelltext erzeugt die gleiche Ausgabe wie der Vorherige:

```js
[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
```

Wenn als zweiter Parameter von `reduce()` `initialValue` angegeben ist, wird das Ergebnis wie folgt aussehen:

```js
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);
```

| `callback` | `accumulator` | `currentValue` | `currentIndex` | `array`           | Rückgabewert |
| ---------- | ------------- | -------------- | -------------- | ----------------- | ------------ |
| 1. Aufruf  | `10`          | `0`            | `0`            | `[0, 1, 2, 3, 4]` | `10`         |
| 2. Aufruf  | `10`          | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `11`         |
| 3. Aufruf  | `11`          | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `13`         |
| 4. Aufruf  | `13`          | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `16`         |
| 5. Aufruf  | `16`          | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `20`         |

Der von `reduce()` zurückgegebene Wert ist in diesem Fall `20`.

## Beispiele

### Alle Elemente eines Arrays summieren

```js
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 6
```

Alternativ als Arrow-Funktion geschrieben:

```js
var total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
);
```

### Summe von Werten in einem Objektarray

Um in einem Array von Objekten Werte aufzusummieren, **muss** ein Initialwert angegeben werden, so dass jedes Element in der Funktion durchlaufen wird.

```js
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6
```

Alternativ als Arrow-Funktion geschrieben:

```js
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6
```

### Geschachtelte Arrays zu einem flachen Array machen

```js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]
```

Alternativ als Arrow-Funktion geschrieben:

```js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);
```

### Zählen von Instanzen eines Wertes in einem Objekt

```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Objekte nach einer Eigenschaft gruppieren

```js
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if(!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age:21 }]
// }
```

### Verbinden von Arrays in einem Array von Objekten mithilfe des Spread-Operators und von `initialValue`

```js
// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Duplikate in einem Array entfernen

```js
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length;
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]
```

### Sequenzielle Abarbeitung von Promises

```js
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3 - will wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);    // 1200
```

### Funktionskomposition ermöglicht Pipelining

```js
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Mapfunktion mit reduce

```js
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].map(
  (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]
```

## Polyfill

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' +
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7
      var k = 0;
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}
```

Wenn es wirklich notwendig ist veraltete JavaScript-Umgebungen zu benutzen, die [`Object.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) nicht unterstützen, ist es besser `Array.prototype` nicht komplett zu ersetzen, weil man es nicht non-enumerable machen kann.

## Spezifikationen

| Spezification                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.21', 'Array.prototype.reduce()')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.8. |
| {{SpecName('ES6', '#sec-array.prototype.reduce', 'Array.prototype.reduce()')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.reduce', 'Array.prototype.reduce()')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.reduce")}}

## Siehe auch

- {{jsxref("Array.prototype.reduceRight()")}}
