---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/forEach
---
{{JSRef}}

Die **`forEach()`** Methode führt eine übergebene Funktion für jedes Element eines Arrays aus.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

// a // b // c

## Syntax

    arr.forEach(function callback(currentValue [, index [, array]]) {
        // Ihr Iterator
    }[, thisArg]);

### Parameter

- `callback`

  - : Funktion, die auf jedes Element angewendet wird mit drei Argumenten:

    - `currentValue`
      - : Der Wert des aktuellen Elements im Array.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements im Array.
    - `array` {{optional_inline}}
      - : Das Array, welches mit `forEach()` durlaufen wird.

- `thisArg` {{optional_inline}}
  - : Wert der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

`forEach()` ruft eine bereitgestellte `callback`-Funktion einmal für jedes Element in einem Array in aufsteigender Reihenfolge auf. Sie wird nicht für Elemente aufgerufen, die gelöscht oder nicht initialisiert wurden (d. h. Arrays mit leeren Elementen).

`callback` wird mit drei Argumenten aufgerufen:

1. Der Wert des Elements
2. Der Index des Elements
3. Das Array-Objekt, das durchlaufen wird

Falls der Parameter `thisArg` an `forEach()` übergeben wird, wird er als Wert für `this` innerhalb von `callback` verwendet. Andernfalls hat `this` den Wert {{jsxref("undefined")}}. Welchen Wert `callback` letztendlich in `this` sieht wird gemäß [der üblichen Regeln bestimmt, nach denen `this` für eine Funktion ermittelt wird](/de/docs/Web/JavaScript/Reference/Operators/this).

`forEach()` selbst verändert das Array nicht, auf dem es aufgerufen wird (das aufgerufene `callback` kann jedoch Änderungen vornehmen).

Der Bereich der von `forEach()` verarbeiteten Elemente wird vor dem ersten Aufruf von `callback` festgelegt. Elemente, die nach Beginn des Aufrufs von `forEach()` an das Array angehängt werden, werden von `callback` nicht berücksichtigt. Wenn vorhandene Elemente des Arrays geändert werden, ist der Wert maßgeblich, den `forEach()` beim Erreichen eines Elements antrifft und dann an `callback` übergibt. Nachfolgende Elemente, die nach Beginn eines Durchlaufs von `forEach()` gelöscht werden (z. B. durch {{jsxref("Array.prototype.shift()", "shift()")}}), bevor sie eingelesen werden konnten, werden nicht mehr berücksichtigt (siehe Beispiel unten).

`forEach()` führt `callback` einmal für jedes Element im Array aus; im Gegensatz zu {{jsxref("Array.prototype.map()", "map()")}} oder {{jsxref("Array.prototype.reduce()", "reduce()")}} gibt es immer den Wert {{jsxref("undefined")}} zurück und ist nicht verknüpfbar. Der typische Anwendungsfall ist das Ausführen von Nebenwirkungen am Ende einer einer solchen Kette.

> **Note:** Es gibt keine Möglichkeit eine `forEach()`-Schleife zu unterbrechen oder zu verlassen, außer durch das erzeugen einer Exception. Wird eine solche Möglichkeit jedoch benötigt, stellt `forEach()` das falsche Mittel dar.Vorzeitiges Verlassen ist verfügbar in:\* Einer einfachen Schleife
>
> - Einer {{jsxref("statements/for...of", "for...of")}} Schleife
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}Die anderen Array Methoden {{jsxref("Array.prototype.every()", "every()")}}, {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}} und {{jsxref("Array.prototype.findIndex()", "findIndex()")}} prüfen die Elemente im Array auf eine Bedingung, die einen {{Glossary("Truthy")}}-Wert zurückgibt mit dem bestimmt wird, ob weitere Durchläufe nötig sind.

## Beispiele

### `forEach()` statt einer for-Schleife

```js
const items = ['item1', 'item2', 'item3'];
const copy = [];

// Vorher
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// Nachher
items.forEach(function(item){
  copy.push(item);
});
```

### Inhalte eines Arrays ausgeben

> **Hinweis:** Um den Inhalt eines Arrays vorformatiert auf der Konsole auszugeben können Sie auch {{jsxref("console.table()")}} verwenden. Dieses Beispiel zeigt eine weitere Möglichkeit mittels `forEach()`.

Der folgende Code gibt eine Zeile pro Element des Arrays aus:

```js
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Hinweis zur Auslassung: Es gibt keinen Eintrag mit dem Index 2
// somit wird dieser übersprungen
[2, 5, , 9].forEach(logArrayElements);
// Ausgabe:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Verwendung von `thisArg`

Das folgende (fingierte) Beispiel aktualisiert die Eigenschaften eines Objekts eines jeden Eintrags im Array:

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Beachten
};

var obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3
obj.sum;
// 16
```

Da `forEach()` der Parameter `thisArg` (`this`) zur Verfügung steht, wird er bei jedem Aufruf an `callback` weitergegeben, um es als seinen `this`-Wert zu benutzen.

> **Note:** Wenn das Funktionsargument durch die [Pfeilnotation](/de/docs/Web/JavaScript/Reference/Functions/Pfeilfunktionen) angegeben wird, kann der Parameter `thisArg` weggelassen werden, da Pfeilfunktionen den {{jsxref("Operators/this", "this")}}-Wert lexikalisch vermerken.

### Funktion zum Kopieren eines Objekts

Der folgende Code erzeugt eine Kopie des übergebenen Objekts. Es gibt verschiedene Möglichkeiten, ein Objekt zu kopieren. Die Folgende ist nur eine davon und dient zur Veranschaulichung, wie `Array.prototype.forEach()` funktioniert, indem ECMAScript 5 `Object.*` Meta-Funktionen genutzt werden.

```js
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // o2 sieht jetzt aus wie o1
```

### Wird das Array während des Durchlaufes modifiziert, könnten andere Elemente übersprungen werden.

Das folgende Beispiel protokolliert "eins", "zwei", "vier". Wenn der Eintrag mit dem Wert "zwei" erreicht ist, wird der erste Eintrag des Arrays mit {{jsxref("Array.prototype.shift()", "shift()")}} entfernt, was dazu führt, dass alle übrigen Einträge um eine Position aufrücken. Weil Element "vier" jetzt an einer früheren Position im Array ist, wird "drei" übersprungen. `forEach()` erzeugt keine Kopie des Arrays vor dem Durchlauf.

```js
var words = ['eins', 'zwei', 'drei', 'vier'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'zwei') {
    words.shift();
  }
});
// eins
// zwei
// vier
```

## Polyfill

`forEach()` wurde dem ECMA-262-Standard in der 5. Auflage hinzugefügt. Als solches ist es möglicherweise nicht in allen Implementierungen des Standards enthalten. Sie können dies umgehen, indem Sie den folgenden Code am Anfang Ihrer Skripte einfügen, um die Verwendung von `forEach()` in Implementierungen zu ermöglichen, die es nicht nativ unterstützen. Dieser Algorithmus entspricht dem in der 5. Auflage von ECMA-262 angegebenen Algorithmus, vorausgesetzt {{jsxref("Object")}} und {{jsxref("TypeError")}} haben ihre ursprünglichen Werte und `callback.call()` wird mit dem ursprünglichen Wert von {{jsxref("Function.prototype.call")}} ausgewertet.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this === null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.18', 'Array.prototype.forEach')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}} | {{Spec2('ESDraft')}} |                                                       |

## Browser-Kompatibilität

{{Compat("javascript.builtins.Array.forEach")}}

## Siehe auch

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
