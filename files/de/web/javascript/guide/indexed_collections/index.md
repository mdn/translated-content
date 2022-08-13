---
title: Indexed collections
slug: Web/JavaScript/Guide/Indexed_collections
tags:
  - Guide
  - Handbuch
  - JavaScript
  - Method
  - Méthode
  - l10n:priority
translation_of: Web/JavaScript/Guide/Indexed_collections
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

Dieses Kapitel beschreibt Datensammlungen, die nach einem Indexwert sortiert sind. Diese beinhalten Arrays und Array-ähnliche Konstrukte, wie {{jsxref("Array")}} Objekte {{jsxref("TypedArray")}} Objekte.

## `Array` Objekt

Ein _Array_ ist ein sortiertes Set an Werten, die mit einem Namen und einem Index referenziert werden. Zum Beispiel könnte ein Array mit dem Namen `emp` Mitarbeiternamen enthalten, die über ihre Mitarbeiternummer indexiert sind. `emp[1]` würde somit Mitarbeiter Eins sein, `emp[2]` ist Mitarbeiter Zwei, und so weiter.

JavaScript hat keinen expliziten Array-Datentyp, aber es ist möglich, das vordefinierte `Array` Objekt und dessen Methoden zu verwenden, um mit Arrays zu arbeiten. Das `Array` Objekt verfügt über Methoden, um Arrays auf unterschiedliche Weisen zu manipulieren. Es hat ein Property um die Arraylänge zu bestimmen, und andere Properties für die Verwendung von Regular Expressions.

### Ein Array erstellen

Die folgenden Statements erstellen äquivalente Arrays:

```js
var arr = new Array(element0, element1, ..., elementN);
var arr = Array(element0, element1, ..., elementN);
var arr = [element0, element1, ..., elementN];
```

`element0, element1, ..., elementN` ist eine Liste von Werten für die Elemente im Array. Das Array wird mit den Werten als Elemente initialisiert. Das `length` Property des Arrays entspricht dann der Anzahl Argumente.

Die Bracket-Syntax wird als "Array-Literal" oder "Array-Initialisierer" bezeichnet. Es ist eine kürzere Form der Array-Erstellung und wird allgemein bevorzugt. Siehe [Array literals](/de/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals) für weitere Details.

Um ein leeres Array mit einer Länge von mehr als Null zu erstellen, kann eine der folgenden Statements verwendet werden:

```js
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// Folgendes hat den selben Effekt.
var arr = [];
arr.length = arrayLength;
```

> **Note:** **Bemerkung :** im obigen Code, `arrayLength` muss ein `Number` Objekt sein, ansonsten wird ein Array mit einem Element (dem übergebenen Wert) erstellt. Ein Aufruf von `arr.length` wird `arrayLength` zurückgeben, aber das Array besteht aus leeren (`undefined`) Elementen. Eine {{jsxref("Statements/for...in","for...in")}} Schleife wird keine der Elemente aus dem Array zurückgeben.

Neben der Zuweisung an eine neue Variable, wie im Beispiel oben gezeigt, können Arrays auch als Property eines neuen oder existierenden Objekts zugewiesen werden:

```js
var obj = {};
// Weist das Array einem Property des bestehenden Objekts 'obj'
// zu.
obj.prop = [element0, element1, ..., elementN];

// Weist das Array einem Property auf dem neuen Objekt 'obj'
// zu.
var obj = {prop: [element0, element1, ...., elementN]};
```

Wenn ein Array mit einem einzelnen `Number` Objekt erstellt werden soll, muss die Bracket-Syntax verwendet werden. Wenn ein einzelnes `Number` Objekt an den/der Array() Konstruktor oder Funktion übergeben wird, wird es als `arrayLength` und nicht als einzelnes Element interpretiert.

```js
var arr = [42];      // Erstellt ein Array mit genau einem
                     // Element: der Nummer 42.

var arr = Array(42); // Erstellt ein Array ohne Elemente und
                     // arr.length wird als 42 gesetzt; dies
                     // ist äquivalent zu:
var arr = [];
arr.length = 42;
```

Wenn `Array(N)` aufgerufen wird und `N` keine Ganzzahl ist, wird ein `RangeError` geworfen. Das folgende Beispiel illustriert dieses Verhalten:

```js
var arr = Array(9.3);  // RangeError: Invalid array length
                       // "Ungültige Array-Länge"
```

Wenn im Code Arrays mit einzelnen Elements eines willkürlichen Datentyp verlangt sind, ist es sicherer, Array-Literals zu verwenden, oder zuerst ein leeres Array zu erstellen und dann das einzelne Element hinzuzufügen.

### Ein Array abfüllen

Ein Array kann abgefüllt werden, indem dessen Elemente mit Werten abgefüllt werden:

```js
var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';
```

> **Note:** **Bemerkung :** Wenn ein Wert dem Array-Operator übergeben wird, der kein Integer ist, wie im obigen Code, wird ein Property auf dem Array-Objekt erstellt, statt als Array-Element.Der Array-Operator ist die Rechteckige Klammer nach der Array-Variable.

```js
var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
```

Arrays können auch bei der Erstellung abgefüllt werden:

```js
var myArray = new Array('Hello', myVar, 3.14159);
var myArray = ['Mango', 'Apple', 'Orange'];
```

### Array-Elemente referenzieren

Ein Element in einem Array kann mit dessen Ordinalzahl (Index) referenziert werden. Beispielweise wird der folgende Array erstellt:

```js
var myArray = ['Earth', 'Wind', 'Fire'];
```

Das erste Element kann mit `myArray[0]`, und das zweite Element des Arrays mit `myArray[1]` referenziert werden. Der Index der Elemente beginnt mit Null.

> **Note:** **Bemerkung :** Der Array-Operator (Rechteckige Klammer) wird auch für den Zugriff auf die Properties des Arrays (Arrays sind in JavaScript auch Objekte) verwendet. Beispielsweise:

```js
var arr = ['one', 'two', 'three'];
arr[2];                            // three
arr['length'];                     // 3
```

### Das length Property verstehen

Auf dem Implementierungslevel, Arrays in JavaScript legen ihre Elemente als normale Properties eines Objekts (dem Array selbst) mit dessen Index als Property-Name ab. Das `length` Property ist speziell; Es gibt immer den Index des letzen Elements plus Eins (im folgenden Beispiel hat Dusty den Index 30, also gibt `cats.length` 30 + 1 zurück) zurück. Array-Indexe starten in JavaScript immer mit 0 und nicht mit 1. Dies bedeutet, dass das `length` Property immer um Eins grösser ist, als der höchste Index im Array:

```js
var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31
```

Das `length` Property kann auch beschrieben werden. Wird ein Wert zugewiesen, der kleiner ist, als die Anzahl Elemente im Array, wird das Array auf die angegebene Grösse geschrumpft; das Array wird geleert, wenn 0 zugewiesen wird:

```js
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // Loggt "Dusty, Misty" - Twiggy wurde
                   // entfernt.

cats.length = 0;
console.log(cats); // Loggt nichts; Das 'cats' Array ist leer.

cats.length = 3;
console.log(cats); // Loggt [undefined, undefined, undefined].
```

### Iteration über Arrays

Eine gebräuchliche Operation ist die Iteration über die Werte eines Arrays, um jedes Element auf eine Weise zu verarbeiten. Die einfachste Variate ist:

```js
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn es ausgeschlossen ist, dass eines der Elemente im Array in einem Boolean-Kontext als `false` evaluiert wird — beispielsweise, wenn es nur aus [DOM](/de/docs/DOM "en-US/docs/DOM") Knoten besteht — kann ein effizienterer Ausdruck verwendet werden:

```js
var divs = document.getElementsByTagName('div');
for (var i = 0, div; div = divs[i]; i++) {
  /* Verarbeite das div auf irgendeine Weise. */
}
```

Dies vermeidet den Overhead bei der Überprüfung der Array-Länge und weist der `div` Variable den aktuellen Wert des Schleifendurchlaufs sofort zu.

Die {{jsxref("Array.forEach", "forEach()")}} Methode erlaubt eine andere Variate zur Iteration über ein Array:

```js
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
```

Die Funktion, die `forEach` übergeben wird, wird für jedes Element im Array ausgeführt, wobei das Element als Argument der Funktion übergeben wird. Elemente ohne Wert (`undefined`) werden von `forEach` nicht iteriert.

Elemente ohne Wert werden von `forEach` nur übersprungen, wenn sie nicht manuell zugewiesen wurden:

```js
var array = ['first', 'second', , 'fourth'];

// Gibt ['first', 'second', 'fourth'] zurück.
array.forEach(function(element) {
  console.log(element);
})

if (array[2] === undefined) { // true
  console.log('array[2] is undefined');
}

var array = ['first', 'second', undefined, 'fourth'];

// Gibt ['first', 'second', undefined, 'fourth'] zurück.
array.forEach(function(element) {
  console.log(element);
})
```

Weil JavaScript Elemente als normale Objekt-Properties abgelegt werden, ist es nicht ratsam Arrays mit {{jsxref("Statements/for...in","for...in")}} zu iterieren, weil normale Elemente plus alle aufzählbaren (enumerable) Properties aufgelistet werden.

### Array-Methoden

Das {{jsxref("Array")}} Objekt verfügt über folgende Methoden:

{{jsxref("Array.concat", "concat()")}} hängt zwei Arrays aneinander und gibt das kombinierte Array zurück.

```js
var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
// myArray ist nun ["1", "2", "3", "a", "b", "c"].
```

{{jsxref("Array.join", "join(deliminator = ',')")}} kombiniert alle Elemente eines Arrays in einen String mit einem Delimiter.

```js
var myArray = new Array('Earth', 'Wind', 'Fire');
var list = myArray.join(' - '); // list ist
                                // "Earth - Wind - Fire".
```

{{jsxref("Array.push", "push()")}} fügt eines oder mehrere Elemente an ein Array und gibt den Wert des neuen `length` Property zurück.

```js
var myArray = new Array('1', '2');
myArray.push('3'); // myArray ist nun ["1", "2", "3"].
```

{{jsxref("Array.pop", "pop()")}} entfernt das letzte Element des Arrays und gibt es zurück.

```js
var myArray = new Array('1', '2', '3');
var last = myArray.pop();
// myArray ist nun ["1", "2"], last = "3"
```

{{jsxref("Array.shift", "shift()")}} entfernt das erste Element des Arrays und gibt es zurück.

```js
var myArray = new Array('1', '2', '3');
var first = myArray.shift();
// myArray ist nun ["2", "3"], first = "1"
```

{{jsxref("Array.unshift", "unshift()")}} fügt eines oder mehrere Elemente an den Anfang des Arrays und gibt den Wert des neuen `length` Property zurück.

```js
var myArray = new Array('1', '2', '3');
myArray.unshift('4', '5');
// myArray wird ["4", "5", "1", "2", "3"].
```

{{jsxref("Array.slice", "slice(start_index, upto_index)")}} extrahiert einen Ausschnitt des Arrays und gibt ein neues Array zurück.

```js
var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); // Beginnt bei Index 1 und
                               // extrahiert alle Elemente bis
                               // Index 3 und gibt somit
                               // [ "b", "c", "d"] zurück.
```

{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} entfernt einen Teil des Arrays und ersetzt sie (optional). Der rückgegebene Wert entspricht den entfernten Elementen.

```js
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray ist nun ["1", "a", "b", "c", "d", "5"].
// Dieser Code startet mit Index 1 (wo '2' war), entfernt dort
// 3 Elemente, und fügt die Werte 'a' bis '5' ein.
```

{{jsxref("Array.reverse", "reverse()")}} kehrt die Reihenfolge der Array-Elemente um; das erste Element ist neu das letzte und das letzte Element ist nun das erste.

```js
var myArray = new Array('1', '2', '3');
myArray.reverse();
// Kehrt die Reihenfolge der Array-Elemente um.
// myArray = ["3", "2", "1"]
```

{{jsxref("Array.sort", "sort()")}} sortiert die Elemente im Array.

```js
var myArray = new Array('Earth', 'Wind', 'Fire');
myArray.sort();
// Sortiert das Array.
// myArray = ["Earth", "Fire", "Wind"]
```

`sort()` kann auch eine Callback-Funktion verwenden, um zu bestimmen, wie die Elemente miteinander verglichen werden sollen. Die Funktion vergleicht zwei Werte und gibt einen von drei Werten zurück:

Beispielsweise wird der folgende Code das Array nach dem letzten Buchstaben des Strings sortieren:

```js
var sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn);
// Sortiert das Array nach dem letzten Buchstaben.
// myArray = ["Wind","Fire","Earth"]
```

- Wenn `a` kleiner ist als `b`, -1 (oder eine andere negative Zahl) wird zurückgegeben
- Wenn `a` ist grösser als `b`, 1 (oder eine andere positive Zahl) wird zurückgegeben
- Wenn `a` und `b` äquivalent sind, wird 0 zurückgegeben.

{{jsxref("Array.indexOf", "indexOf(searchElement[, fromIndex])")}} durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // Loggt 1.
// Nochmals, die Suche beginnt ab dem Element mit dem Index 2.
console.log(a.indexOf('b', 2)); // Loggt 3.
console.log(a.indexOf('z')); // Loggt -1, weil 'z' nicht
                             // gefunden wurde.
```

{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement[, fromIndex])")}} funktioniert wie `indexOf`, aber startet die Suche am Ende des Arrays.

```js
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // Loggt 5.
// Startet die Suche ab dem Element mit dem Index 4.
console.log(a.lastIndexOf('b', 4)); // Loggt 1.
console.log(a.lastIndexOf('z')); // Loggt -1.
```

{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} führt `callback` für jedes Element aus.

```js
var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element); });
// Loggt jedes Element.
```

{{jsxref("Array.map", "map(callback[, thisObject])")}} gibt ein neues Array zurück, aus dem Rückgabewert der `callback` Funktion.

```js
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // Loggt ['A', 'B', 'C'].
```

{{jsxref("Array.filter", "filter(callback[, thisObject])")}} gibt ein Array zurück, das aus allen Elementen besteht, bei denen die `callback` Funtion `true` zurückgibt.

```js
var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item === 'number'; });
console.log(a2); // Loggt [10, 20, 30].
```

{{jsxref("Array.every", "every(callback[, thisObject])")}} gibt `true` zurück, wenn die `callback` Funktion für jedes Element auch `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // Loggt true.
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // Loggt false.
```

{{jsxref("Array.some", "some(callback[, thisObject])")}} gibt `true` zurück, wenn die `callback` Funktion für alle Elemente mindestens einmal `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // Loggt true.
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // Loggt true.
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // Loggt false.
```

Die obige Methoden, die eine `callback` Funktion als Argument verlangen sind als _Iterative Methoden_ bekannt, weil sie über das ganze Array auf irgendeine Weise iterieren. Jede der Methoden nimmt ein optionales zweites Argument `thisObject`. Wenn `thisObject` übergeben wird, wird es im Kontext der `callback` Funktion als `this` behandelt. Falls es nicht übergeben wird, wie es auch der Fall ist, wenn eine Funktion ausserhalb eines expliziten Objektkontext aufgerufen wird, referenziert this das globale Objekt ({{domxref("window")}}).

Die `callback` Funktion wird jeweils mit drei Argumenten aufgerufen. Das erste ist der Wert des aktuellen Elements in der Iteration, das zweite ist der Index des Elements und das dritte ist eine Referenz auf das Array selbst. JavaScript Funktionen ignorieren Parameter, die in der Liste nicht benannt werden, es ist somit sicher, eine Funktion als `callback` zu definieren, die nur ein einzelnes Argument nimmt, zum Beispiel `alert`.

{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} wendet `callback(firstValue, secondValue)` an, um die Liste auf einen einzelnen Wert zu reduzieren.

```js
var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) // Loggt 60.
```

{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} funktioniert wie `reduce()`, aber startet am Ende des Arrays.

`reduce` und `reduceRight` sind die unauffälligsten iterativen Array-Methoden. Sie sollten dazu verwendet werden, rekursiv jeweils zwei Werte miteinander zu kombinieren, bis nur noch ein einzelner Wert verbleibt.

### Mehrdimensionale Arrays

Arrays können verschachtelt sein. Das bedeutet, dass ein Array ein anderes Array als Element beinhalten kann. Mit dieser EIgenschaft von JavaScript können mehrdimensionale Arrays erstellt werden. Der folgende Code erstellt ein zwei-dimensionales Array:

```js
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']';
  }
}
```

Dieses Beispiel erstellt ein Array mit den folgenden Zeilen:

    Zeile 0: [0, 0] [0, 1] [0, 2] [0, 3]
    Zeile 1: [1, 0] [1, 1] [1, 2] [1, 3]
    Zeile 2: [2, 0] [2, 1] [2, 2] [2, 3]
    Zeile 3: [3, 0] [3, 1] [3, 2] [3, 3]

### Arrays und Regular Expressions

Wenn ein Array das Resultat einer Regular Expression auf einem String ist, wird das Array Properties und Elemente zuückgeben, die Informationen zum Match liefern. Der Rückgabewert der {{jsxref("Global_Objects/RegExp/exec","RegExp.exec()")}}, {{jsxref("Global_Objects/String/match","String.match()")}}, und {{jsxref("Global_Objects/String/split","String.split()")}} Methode ist ein Array. Für weitere Informationen für die Verwendung von Arrays mit Regular Expressions, siehe [Regular Expressions](/de/docs/Web/JavaScript/Guide/Regular_Expressions).

### Mit Array-ähnlichen Objekten arbeiten

Manche JavaScript Objekte, wie {{domxref("NodeList")}}, welche von {{domxref("document.getElementsByTagName()")}} zurückgegeben oder als {{jsxref("Functions/arguments","arguments")}} in einem Funktionskörper referenziert wird, verhalten sich wie Arrays, aber teilen nicht alle deren Methoden. Das `arguments` Objekt stellt ein {{jsxref("Global_Objects/Function/length","length")}} Attribut zur Verfügung, implementiert aber beispielsweise nicht die {{jsxref("Array.forEach", "forEach()")}} Methode.

Array Prototyp-Methoden können auf einem Array-ähnlichen Objekt aufgerufen werden, siehe folgendes Beispiel:

```js
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
```

Array Prototyp-Methoden können auch für Strings verwendet werden, weil diese einen sequenziellen Zugriff auf deren Zeichen erlauben, ähnlich wie Arrays:

```js
Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr);
});
```

## Typisierte Arrays

[JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Typed_arrays) sind Array-ähnliche Objekte und stellen einen Mechanismus für den Zugriff auf Raw-Binärdaten zur Verfügung. Wie bereits erklärt, passen {{jsxref("Array")}} Objekte ihre Grösse dynamisch an und können beliebige Werte enthalten. JavaScript Engines führen Optimierungen durch, damit diese Arrays schneller sind. Je stärker Web-Applikationen werden mit Features wie Audio und Video Manipulation, Zugriff auf Raw Daten mit [WebSockets](/de/docs/WebSockets) und so weiter, ist es hilfreich, wenn JavaScript Code einfach und schnell Raw Binärdaten in typisierten Arrays manipulieren kann.

### Buffers und Views: Typisierte Array Architektur

Um maximale Flexibilität und Effizienz zu erreichen, werden typisierte Arrays in JavaScript auf **Buffers** und V**iews** aufgeteilt. Ein Buffer (implementiert durch das {{jsxref("ArrayBuffer")}} Objekt) ist ein Objekt, welches einen Block Daten repräsentiert; es hat kein Format und keine Mechanismen für den Zugriff auf Inhalte. Um auf den Speicher in einem Buffer zuzugreifen, wird eine View benötigt. Eine View stellt einen Kontext — einen Datentyp, Start-Offset und eine Anzahl Elemente — zur Verfügung, welcher die Daten in einen typisierten Array verwandelt.

![Typed arrays in an ArrayBuffer](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

### ArrayBuffer

Der {{jsxref("ArrayBuffer")}} ist ein Datentyp, welcher für die Darstellung von generischen Binär-Daten-Buffer mit einer fixen Grösse. Der Inhalt eines `ArrayBuffer` kann nicht direkt manipuliert werden; stattdessen kann eine typisierte Array-View oder eine {{jsxref("DataView")}} erstellt werden, welches den Buffer in einem spezifischen Format darstellt, welche dann für das Lesen und Schreiben der Inhalte auf dem Buffer verwendet werden kann.

### Typisierte Array-Views

Typisierte Array-Views haben selbstbeschreibende Namen und stellen Views für alle geläufigen numerischen Typen, wie `Int8`, `Uint32`, `Float64` und so weiter, zur Verfügung. Es gibt ein spezielles typisiertes Array: `Uint8ClampedArray`. Es klemmt (clamps) zwischen 0 und 255. Dies ist hilfreich für [Canvas Datenverarbeitung](/de/docs/Web/API/ImageData), zum Beispiel.

{{page("/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray", "TypedArray_objects")}}

Für weitere Informationen, siehe [JavaScript Typisierte Arrays](/de/docs/Web/JavaScript/Typed_arrays) und die Referenzdokumentation für die unterschiedlichen {{jsxref("TypedArray")}} Objekte.

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
