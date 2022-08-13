---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - Array
  - Example
  - Global Objects
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array
---
{{JSRef}}

Das JavaScript-**`Array`** ist ein globales Objekt und Konstruktor für das Erstellen von Arrays, welche listenähnliche Objekte sind.

**Ein Array erstellen**

```js
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2
```

**Zugriff auf ein Arrayelement (mit Index)**

```js
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana
```

**Über ein Array Iterieren**

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

**Ein Element am Ende des Arrays einfügen**

```js
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
```

**Ein Element am Ende des Arrays löschen**

```js
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
```

**Ein Element am Anfang des Arrays löschen**

```js
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
```

**Ein Element am Anfang des Arrays einfügen**

```js
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
```

**Den Index eines Elements im Array ermitteln**

```js
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1
```

**Ein Element mithilfe eines Index aus dem Array löschen**

```js
var removedItem = fruits.splice(pos, 1); // this is how to remove an item

// ["Strawberry", "Mango"]
```

**Elemente von einer Indexposition aus löschen**

```js
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]
```

**Ein Array kopieren**

```js
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
```

## Syntax

    [element0, element1, ..., elementN]
    new Array(element0, element1[, ...[, elementN]])
    new Array(arrayLength)

### Parameter

- `elementN`
  - : Ein JavaScript-Array wird mit den angegebenen Elementen initialisiert, es sei denn, an den `Array`-Konstruktor wird eine einzelne Zahl übergeben (siehe `arrayLength-`Parameter unten). Beachte, dass dieser Sonderfall nur für JavaScript-Arrays gilt, die mit dem `Array`-Konstruktor erstellt wurden, nicht für Array-Literale, die mit der Klammer-Syntax erstellt wurden.
- `arrayLength`
  - : Wenn lediglich eine Ganzzahl zwischen 0 und 232-1 (inklusive) als Argument an den `Array`-Konstruktor übergeben wird, ist der Rückgabewert ein JavaScript Array, dessen `length`-Eigenschaft dieser Zahl entspricht. (**Hinweis:** Dies impliziert ein Array mit leeren Elementen einer Anzahl von `arrayLength`, nicht Elementen mit Wert `undefined`). Handelt es sich bei dem Argument um irgendeine andere Zah,l wird eine {{jsxref("Global_Objects/RangeError", "RangeError")}} Exception ausgelöst.

## Beschreibung

Arrays sind listenähnliche Objekte, dessen Prototyp Methoden für Durchlauf- und Mutationsoperationen besitzt. Weder die Länge eines JavaScript-Arrays noch die Typen seiner Elemente sind fix. Da sich die Länge eines Arrays jederzeit ändern kann und Daten an nicht zusammenhängenden Positionen im Array gespeichert werden können, ist nicht garantiert, dass JavaScript-Arrays verdichtet sind; dies hängt davon ab, wie der Programmierer sie benutzt. Im Allgemeinen sind dies praktische Merkmale; falls jedoch diese Funktionalität für Ihren Anwendungsfall nicht wünschenswert ist, sollten Sie in Betracht ziehen, typisierte Arrays zu verwenden.

Arrays können keine Strings als Index benutzen (wie bei[assoziativen Arrays](http://www.andrewdupont.net/2006/05/18/javascript-associative-arrays-considered-harmful/)), sondern müssen Ganzzahlen verwenden. Der Zugriff mit nicht-ganzzahligen Werten über die [Klammernotation](/de/docs/Web/JavaScript/Guide/Mit_Objekten_arbeiten#Objekte_und_Eigenschaften) (oder [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) bezieht sich nicht auf ein Element im Array, sondern legt eine Eigenschaft des Array-Objekts fest oder greift darauf zu. Die Eigenschaften des Array-Objekts und die Liste der Array-Elemente sind voneinander getrennt. Die [Durchlauf- und Mutationsoperationen](/de/docs/Web/JavaScript/Guide/Indexed_collections#Array-Methoden) des Arrays können nicht auf diese benannten Eigenschaften angewendet werden.

### Auf Elemente des Arrays zugreifen

JavaScript-Arrays sind nullindiziert: Das erste Element eines Arrays befindet sich am Index `0`, das letzte Element befindet sich an demjenigen Index, der dem Wert der Eigenschaft {{jsxref ("Array.length", "length")}} des Arrays minus 1 entspricht. Die Verwendung einer ungültigen Indexnummer gibt `undefined` zurück.

```js
var arr = ['Das erste Element', 'Das zweite Element', 'Das letzte Element'];
console.log(arr[0]);              // Ausgabe: 'Das erste Element'
console.log(arr[1]);              // Ausgabe: 'Das zweite Element'
console.log(arr[arr.length - 1]); // Ausgabe: 'Das letzte Element'
```

Array-Elemente sind Objekteigenschaften genau so wie `toString`. Wenn man jedoch wie folgt auf ein Element eines Arrays versucht zuzugreifen, wird ein Syntaxfehler ausgegeben, da der Name der Eigenschaft ungültig ist:

```js
console.log(arr.0); // Syntaxfehler
```

Es gibt nichts Besonderes an JavaScript-Arrays und den Eigenschaften, die dies verursachen. JavaScript-Eigenschaften, die mit einer Ziffer beginnen, können nicht mit Punktnotation referenziert werden und müssen über Klammernotation aufgerufen werden. Wenn man beispielsweise ein Objekt mit einer Eigenschaft namens `'3d'` hat, kann es nur in Klammern angegeben werden, z. B.:

```js
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // ein Syntaxfehler
console.log(years[0]);  // funktioniert
```

```js
renderer.3d.setTexture(model, 'character.png');     // ein Syntaxfehler
renderer['3d'].setTexture(model, 'character.png');  // works funktioniert
```

Beachten Sie, dass im obigen Beispiel `'3d'` in Anführungszeichen gesetzt werden musste. Es ist auch möglich, die JavaScript-Array-Indizes in Anführungszeichen zu setzen (z. B. `years['2']` statt `years[2]`), obwohl dies nicht erforderlich ist. Die 2 in `years[2]` wird von der JavaScript-Engine durch eine implizite Konvertierung mittels `toString` zwingend in eine Zeichenfolge umgewandelt. Aus diesem Grund beziehen sich `'2'` und `'02'` auf zwei unterschiedliche Elemente des `years`-Objekts und das folgende Beispiel würde `true` ergeben:

```js
console.log(years['2'] != years['02']);
```

Ebenso kann auf Objekteigenschaften, die zufällig reservierte Wörter(!) sind, nur als Stringliterale in Klammern zugegriffen werden:

```js
var promise = {
  'var'  : 'text',
  'array': [1, 2, 3, 4]
};

console.log(promise['var']);
```

### Beziehung zwischen `length` und numerischen Eigenschaften

Die Eigenschaft {{jsxref("Array.length", "length")}} eines JavaScript-Arrays und numerische Eigenschaften sind miteinander verbunden. Etliche der eingebauten Array-Methoden (z. B. {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}}, etc.) berücksichtigen den Wert der {{jsxref("Array.length", "length")}} Eigenschaft eines Arrays, wenn diese aufgerufen werden. Andere Methoden (z. B. {{jsxref("Array.push", "push()")}}, {{jsxref("Array.splice", "splice()")}}, etc.) bewirken ebenfalls eine Veränderung der Eigenschaft {{jsxref("Array.length", "length")}} eines Arrays.

```js
var fruits = [];
fruits.push('banana', 'apple', 'peach');

console.log(fruits.length); // 3
```

Wird einem JavaScript-Array eine Eigenschaft zugewiesen, bei der es sich um einen gültigen Array-Index handelt und dieser Index außerhalb der aktuellen Grenzen des Arrays liegt, aktualisiert die Engine die Eigenschaft {{jsxref("Array.length", "length")}} des Arrays entsprechend:

```js
fruits[5] = 'mango';
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Beim Erhöhen von {{jsxref("Array.length", "length")}}.

```js
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
```

Beim Verringern von {{jsxref("Array.length", "length")}} werden jedoch Elemente gelöscht.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Der Artikel zu {{jsxref("Array.length")}} geht genauer darauf ein.

### Erstellen eines Arrays als Ergebnis einer Übereinstimmung

Das Ergebnis einer Übereinstimmung eines regulären Ausdrucks und einem String kann ein JavaScript-Array erstellen. Dieses Array verfügt über Eigenschaften und Elemente, die Informationen zur Übereinstimmung beinhalten. Solch ein Array wird von {{jsxref("RegExp.exec")}}, {{jsxref("String.match")}} und {{jsxref("String.replace")}} zurückgegeben. Am folgenden Beispiel sollen diese Eigenschaften und Elemente erläutert werden, die Tabelle darunter enthält; weitere Informationen hierzu:

```js
// Übereinstimmung eines d, gefolgt von einem oder mehreren b, gefolgt von einem d
// Übereinstimmende b's und die darauf folgenden d's merken
// Groß-/Kleinschreibung ignorieren

var myRegEx = /d(b+)(d)/i;
var myArray = myRegEx.exec('cdbBdbsbz');
```

Die Eigenschaften und Elemente werden wie folgt zurückgegeben:

| Eigenschaft/Element | Beschreibung                                                                                                                                                                                                   | Beispiel       |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `input`             | Eine schreibgeschützte Eigenschaft, die die ursprüngliche Zeichenfolge widerspiegelt, mit der der reguläre Ausdruck abgeglichen wurde.                                                                         | cdbBdbsbz      |
| `index`             | Eine schreibgeschützte Eigenschaft, bei der es sich um den nullbasierten Index der Übereinstimmung in der Zeichenfolge handelt.                                                                                | 1              |
| `[0]`               | Ein schreibgeschütztes Element, das die zuletzt übereinstimmenden Zeichen angibt.                                                                                                                              | dbBd           |
| `[1], ...[n]`       | Schreibgeschützte Elemente, die die in Klammern gesetzten Unterzeichenfolgen angeben, sofern sie im regulären Ausdruck enthalten sind. Die Anzahl der möglichen geklammerten Teilzeichenfolgen ist unbegrenzt. | [1]: bB [2]: d |

## Eigenschaften

- Array.length
  - : Die Eigenschaft `length` des `Array-`Konstruktors, deren Wert 1 ist.
- {{jsxref("Array.@@species", "get Array[@@species]")}}
  - : Die Konstruktorfunktion zum Erstellen abgeleiteter Objekte.
- {{jsxref("Array.prototype")}}
  - : Ermöglicht das Hinzufügen von Eigenschaften zu allen Array-Objekten.

## Methoden

- {{jsxref("Array.from()")}}
  - : Erstellt eine neue `Array`-Instanz aus einem Array-ähnlichen oder iterierbaren Objekt.
- {{jsxref("Array.isArray()")}}
  - : Gibt `true` zurück, wenn eine Variable ein Array ist, andernfalls `false`.
- {{jsxref("Array.of()")}}
  - : Erstellt eine neue `Array`-Instanz mit einer variablen Anzahl von Argumenten, unabhängig von Anzahl oder Typ der Argumente.

## `Array` Instanzen

Alle `Array`-Instanzen erben von {{jsxref("Array.prototype")}}. Das Prototypobjekt des `Array`-Konstruktors kann geändert werden, um alle `Array`-Instanzen zu beeinflussen.

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype', 'Eigenschaften')}}

### Methoden

#### Mutationsmethoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype', 'Mutationsmethoden')}}

#### Zugriffsmethoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype', 'Zugriffsmethoden')}}

#### Zählmethoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype', 'Zählmethoden')}}

## Generische `Array`-Methoden

> **Warning:** **Generische Array Methoden sind nicht standardisiert, veraltet und werden in naher Zukunft entfernt.**

Manchmal möchte man Array-Methoden auf Strings oder andere Array-ähnliche Objekte anwenden (z. B. auf {{jsxref("Functions/arguments", "Argumente", "", 1)}} von Funktionen). Auf diese Weise behandelt man eine Zeichenfolge wie ein Array von Zeichen (oder ein nicht-Array wie ein Array). Um beispielsweise zu prüfen, ob jedes Zeichen in der Variablen `str` ein Buchstabe ist, würde man Folgendes schreiben:

```js
function isLetter(character) {
  return character >= 'a' && character <= 'z';
}

if (Array.prototype.every.call(str, isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}
```

Diese Schreibweise wurde in JavaScript 1.6 von einer kürzeren abgelöst:

```js
if (Array.every(str, isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}
```

{{jsxref("Global_Objects/String", "Generische Methoden", "#Generische_String-Methoden", 1)}} gibt es ebenfalls für {{jsxref("Global_Objects/String", "Strings")}}.

Diese sind **nicht** Teil der ECMAScript-Standards und werden von nicht-Gecko-Browsern nicht unterstützt. Als Standardvariante können Sie Ihr Objekt mit {{jsxref("Array.from()")}} in ein richtiges Array konvertieren. Diese Methode wird in alten Browsern möglicherweise nicht unterstützt:

```js
if (Array.from(str).every(isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}
```

## Beispiele

### Erstellen eines Arrays

Das folgende Beispiel erzeugt ein Array `msgArray` mit der Länge 0, weist dann `msgArray[0]` und `msgArray[99]` Werte zu und ändert somit die Länge des Arrays auf 100.

```js
var msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('Die Länge ist 100.');
}
```

### Erstellen eines zweidimensionalen Arrays

Im Folgenden wird ein Schachbrett als zweidimensionales Array von Strings erzeugt. Der erste Zug erfolgt durch Kopieren des 'p' in (6,4) nach (4,4). Die alte Position (6,4) wird als leer markiert.

```js
var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Ziehe Bauern 2 Felder vorwärts
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
```

Das ist die Ausgabe:

    R,N,B,Q,K,B,N,R
    P,P,P,P,P,P,P,P
     , , , , , , ,
     , , , , , , ,
     , , , , , , ,
     , , , , , , ,
    p,p,p,p,p,p,p,p
    r,n,b,q,k,b,n,r

    R,N,B,Q,K,B,N,R
    P,P,P,P,P,P,P,P
     , , , , , , ,
     , , , , , , ,
     , , , ,p, , ,
     , , , , , , ,
    p,p,p,p, ,p,p,p
    r,n,b,q,k,b,n,r

### Einsatz eines Arrays, um Werte tabellarisch auszugeben

```js
values = [];
for (var x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)
```

Das Resultat ist:

    0   1   0
    1   2   2
    2   4   8
    3   8   18
    4   16  32
    5   32  50
    6   64  72
    7   128 98
    8   256 128
    9   512 162

(Die erste Spalte ist der Index)

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| {{SpecName('ES5.1', '#sec-15.4', 'Array')}}                 | {{Spec2('ES5.1')}}     | Neue Methoden hinzugefügt: {{jsxref("Array.isArray")}}, {{jsxref("Array.prototype.indexOf", "indexOf")}}, {{jsxref("Array.prototype.lastIndexOf", "lastIndexOf")}}, {{jsxref("Array.prototype.every", "every")}}, {{jsxref("Array.prototype.some", "some")}}, {{jsxref("Array.prototype.forEach", "forEach")}}, {{jsxref("Array.prototype.map", "map")}}, {{jsxref("Array.prototype.filter", "filter")}}, {{jsxref("Array.prototype.reduce", "reduce")}}, {{jsxref("Array.prototype.reduceRight", "reduceRight")}} |
| {{SpecName('ES6', '#sec-array-objects', 'Array')}}     | {{Spec2('ES6')}}         | Neue Methoden hinzugefügt: {{jsxref("Array.from")}}, {{jsxref("Array.of")}}, {{jsxref("Array.prototype.find", "find")}}, {{jsxref("Array.prototype.findIndex", "findIndex")}}, {{jsxref("Array.prototype.fill", "fill")}}, {{jsxref("Array.prototype.copyWithin", "copyWithin")}}                                                                                                                                                                                                                                                                                                             |
| {{SpecName('ES7', '#sec-array-objects', 'Array')}}     | {{Spec2('ES7')}}         | Neue Methode hinzugefügt: {{jsxref("Array.prototype.includes()")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| {{SpecName('ESDraft', '#sec-array-objects', 'Array')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Browserkompatibilität

{{Compat("javascript.builtins.Array")}}

## Siehe auch

- [JavaScript Guide: “Indexing object properties”](/de/docs/Web/JavaScript/Guide/Mit_Objekten_arbeiten#Indexing_object_properties)
- [JavaScript Guide: “Predefined Core Objects: `Array` Object”](/de/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Array_Object)
- [Array comprehensions](/de/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)
- [Polyfill für JavaScript 1.8.5 generische Arrays und ECMAScript 5 Array Extras](https://github.com/plusdude/array-generics)
- [Typisierte Arrays](/de/docs/JavaScript_typed_arrays)
