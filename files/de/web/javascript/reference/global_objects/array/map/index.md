---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/map
---
{{JSRef}}

Die **`map()`** (engl. _abbilden_) Methode wendet auf jedes Element des Arrays die bereitgestellte Funktion an und gibt das Ergebnis in einem neuen Array zurück.

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## Syntax

    var new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // Zurückgegebenes Element für new_array
    }[, thisArg])

### Parameter

- `callback`

  - : Funktion, die ein Element für das neue Array erstellt und drei Argumente entgegennimmt:

    - `currentValue`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`{{optional_inline}}
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`{{optional_inline}}
      - : Das Array, welches mit `map()` durchlaufen wird.

- `thisArg`{{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Ein neues Array, von dem jedes Element das Ergebnis der Callback-Funktion ist.

## Beschreibung

`map()` ruft eine bereitgestellte `callback` Funktion **für jedes Element** in einem Array der Reihe nach auf und erstellt aus den Ergebnissen ein neues Array. `callback` wird nur für Indizes des Arrays aufgerufen, denen Werte zugewiesen wurden, einschließlich {{jsxref("undefined")}}. Es wird nicht für fehlende Elemente des Arrays aufgerufen (d. h. Indizes, die noch nie festgelegt, gelöscht oder denen noch kein Wert zugewiesen wurde).

`map()` zu benutzen, wenn das davon neu erstellte Array nicht benutzt wird, gilt als [Anti-Pattern](https://de.wikipedia.org/wiki/Anti-Pattern). Verwenden Sie stattdessen {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("statements/for...of", "for...of")}}.

Sie sollten `map()` nicht verwenden, wenn:

- Sie das Array, das zurückgegeben wird, nicht benötigen und/oder
- Ihr Callback keinen Wert zurückgibt.

`callback` wird mit drei Argumenten aufgerufen:

1. Der Wert des Elements
2. Der Index des Elements
3. Das Array-Objekt, das durchlaufen wird

Falls der Parameter `thisArg` an `map()` übergeben wird, wird er als Wert für `this` innerhalb von `callback` verwendet. Andernfalls hat `this` den Wert {{jsxref("undefined")}}. Welchen Wert `callback` letztendlich in `this` steht, wird gemäß [der üblichen Regeln bestimmt, nach denen `this` für eine Funktion ermittelt wird](/de/docs/Web/JavaScript/Reference/Operators/this).

`map()` selbst verändert das Array nicht, auf dem es aufgerufen wird (das aufgerufene `callback` kann jedoch Änderungen vornehmen).

Der Bereich der von `map()` verarbeiteten Elemente wird vor dem ersten Aufruf von `callback` festgelegt. Elemente, die nach Beginn des Aufrufs von `map()` an das Array angehängt werden, werden von `callback` nicht berücksichtigt. Wenn vorhandene Elemente des Arrays geändert werden, ist der Wert maßgeblich, den `map()` beim Erreichen eines Elements antrifft und dann an `callback` übergibt. Nachfolgende Elemente, die nach Beginn eines Durchlaufs von `map()` gelöscht werden, bevor sie eingelesen werden konnten, werden nicht mehr berücksichtigt.

Aufgrund des in der Spezifikation definierten Algorithmus haben Arrays mit vielen leeren Elementen auch nach einem Aufruf von `map()` immer noch leere Elemente, wobei die leeren Elemente an ihren Indizes verbleiben.

## Beispiele

### Erstellen eines Arrays mit Quadratwurzeln aus einem Array mit Zahlen

Der folgende Code verwendet ein Array mit Zahlen und erstellt ein neues Array, das die Quadratwurzeln der Zahlen im ersten Array enthält.

```js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots ist jetzt [1, 2, 3]
// numbers ist immer noch [1, 4, 9]
```

### Objekte innerhalb eines Arrays mit `map()` neu formatieren

Der folgende Code nimmt ein Array mit Objekten und erstellt daraus ein neues Array, in dem die Objekte neu formatiert wurden.

```js
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj => {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray ist jetzt [{1: 10}, {2: 20}, {3: 30}],

// kvArray ist immer noch:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

### Erstellen eines Arrays mit Zahlen mithilfe einer Funktion, die ein Argument entgegennimmt

Der folgende Code zeigt, wie `map()` im Zusammenhang mit einer Funktion arbeitet, welche ein Argument entgegennimmt. Dem Argument wird automatisch der Wert des aktuellen Elements des Arrays zugewiesen, das von `map()` durchlaufen wird.

```js
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

// doubles ist jetzt [2, 8, 18]
// numbers ist immer noch [1, 4, 9]
```

### Generischer Einsatz von `map()`

In diesem Beispiel wird veranschaulicht, wie `map()` auf einen {{jsxref("Global_Objects/String", "String")}} angewendet wird, um ein Array mit Bytes zu erhalten, welche den jewiligen Zeichenwerten im [ASCII-Zeichensatz](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#ASCII-Tabelle) entsprechen:

```js
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) {
  return x.charCodeAt(0);
});
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

### Generischer Einsatz von `map()` zusammen mit `querySelectorAll()`

In diesem Beispiel wird gezeigt, wie Sie eine Sammlung von Objekten durchlaufen, die von {{domxref("document.querySelectorAll()", "querySelectorAll()")}} erfasst wurde. Dies liegt daran, dass {{domxref("document.querySelectorAll()", "querySelectorAll()")}} eine {{domxref("NodeList")}} zurückgibt, bei der es sich um eine Auflistung von Objekten handelt. In diesem Fall geben wir alle Werte der ausgewählten Optionen auf dem Bildschirm zurück:

```js
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```

Einfacher wäre die Methode {{jsxref("Array.from()")}}.

### Verzwickter Anwendungsfall

[(Inspiriert von diesem Blogpost)](http://www.wirfs-brock.com/allen/posts/166)

Üblicherweise wird die `callback` Funktion mit nur einem Argument benutzt. Das trifft auch für bestimmte andere Funktionen zu obwohl diese weitere optionale Argumente akzeptieren. Dies kann jedoch zu verwirrendem Verhalten führen.

Betrachten wir folgendes Beispiel:

```js
['1', '2', '3'].map(parseInt);

// Man würde erwarten [1, 2, 3]
// Tatsächlich ist das Ergebnis aber [1, NaN, NaN]

// parseInt wird oft nur mit einem Argument aufgerufen, akzeptiert aber zwei.
// Der erste ist ein Ausdruck und der zweite ist die Basis.

// Array.prototype.map übergibt 3 Argumente an die Callback-Funktion:
// das Element, den Index, das Array

// Das dritte Argument wird von parseInt ignoriert, das zweite jedoch nicht,
// was verwirrend sein kann. Siehe den Blogpost für weitere Details

// Falls der Link nicht funktioniert:
// ein kurzes Beispiel der Durchläufe:
// parseInt(string, radix) -> map(parseInt(value, index))
// erster Durchlauf  (Index ist 0): parseInt('1', 0) // führt zu parseInt('1', 0) -> 1
// zweiter Durchlauf (Index ist 1): parseInt('2', 1) // führt zu parseInt('2', 1) -> NaN
// dritter Durchlauf (Index ist 2): parseInt('3', 2) // führt zu parseInt('3', 2) -> NaN

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Tatsächliches Ergebnis ist ein Array mit Nummern (wie erwartet)

// Wie oben, jedoch unter Verwendung der kurzen Funktionssyntax mit Pfeil
['1', '2', '3'].map( str => parseInt(str) );

// Eine einfachere Methode, um selbiges zu erreichen, während Fallstricke vermieden werden:
['1', '2', '3'].map(Number); // [1, 2, 3]

// Im Gegensatz zu `parseInt` werden jedoch auch Fließkommazahlen oder (aufgelöste) Exponentialnotationen zurückgegeben:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
```

Eine alternative Ausgabe der `map()` Methode, welche mit {{jsxref("Global_Objects/parseInt", "parseInt()")}} als Parameter aufgerufen wird, funktioniert wie folgt:

```js
var xs = ['10', '10', '10'];

xs = xs.map(parseInt);

console.log(xs);
// Das tatsächliche Ergebnis von [ 10, NaN, 2 ] kann aufgrund der obigen Beschreibung unerwartet sein
```

## Polyfill

`map()` wurde dem ECMA-262-Standard in der 5. Auflage hinzugefügt. Als solches ist es möglicherweise nicht in allen Implementierungen des Standards enthalten. Sie können dies umgehen, indem Sie den folgenden Code am Anfang Ihrer Skripte einfügen, um die Verwendung von `map()` in Implementierungen zu ermöglichen, die es nicht nativ unterstützen. Dieser Dieser Algorithmus entspricht dem in der 5. Auflage von ECMA-262 angegebenen Algorithmus, vorausgesetzt {{jsxref("Object")}}, {{jsxref("TypeError")}} und {{jsxref("Array")}} haben ihre ursprünglichen Werte und `callback.call()` wird mit dem ursprünglichen Wert von {{jsxref("Function.prototype.call()")}} ausgewertet.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.19', 'Array.prototype.map')}}                 | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.map', 'Array.prototype.map')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.map', 'Array.prototype.map')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.map")}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}}-Objekt
- {{jsxref("Array.from()")}}
