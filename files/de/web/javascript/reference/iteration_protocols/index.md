---
title: Iterations Protokolle
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - ECMAScript 2015
  - Intermediate
  - Iterable
  - Iterator
  - JavaScript
translation_of: Web/JavaScript/Reference/Iteration_protocols
---
{{jsSidebar("More")}}

Einige Änderungen in ECMAScript 2015 sind keine neuen Objekte oder Syntax, sondern Protokolle. Diese Protokolle können von jedem Objekt implementiert werden, wenn einige Konventionen eingehalten werden.

Es gibt zwei Protokolle: Das [Iterierbare (iterable) Protokoll](<#Das_Iterierbare_(iterable)_Protokoll>) und das [Iterator Protokoll](#Das_Iterator_Protokoll)

## Das Iterierbare (iterable) Protokoll

Das **Iterierbare (iterable)** Protokoll erlaubt es bei JavaScript-Objekten das Iterierverhalten zu definieren oder anzupassen, wie z. B. wie Werte in einem {{jsxref("Statements/for...of", "for..of")}} Konstrukt durchlaufen werden. Einige Standardtypen sind von sich aus schon Iterierbar mit einem Standarditerationsverhalten, so wie {{jsxref("Array")}} oder {{jsxref("Map")}}, wohingegen andere Typen (so wie {{jsxref("Object")}}) nicht Iterierbar sind.

Um **Iterierbar** zu sein, muss ein Objekt die **@@iterator** Methode implementieren, was bedeutet, dass das Objekte (oder ein Objekt weiter oben in der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) eine Eigenschaft mit dem **@@iterator** Schlüssel haben muss, welcher über die Konstante `{{jsxref("Symbol.iterator")}}` erreichbar ist:

| Eigenschaft         | Wert                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | Eine Funktion ohne Parameter, welche ein Objekt zurückgibt, welches dem [Iterator Protokoll](#Das_Iterator_Protokoll) entspricht. |

Immer wenn ein Objekt iteriert werden soll (z. B. am Anfang einer `for..of` Schleife), wird die `@@iterator` Methode mit keinem Argument aufgerufen und der zurückgegebene **Iterator** wird benutzt, um die zu iterierenden Werte zu bekommen.

## Das Iterator Protokoll

Das **Iterator** Protokoll definiert einen Standardweg, um eine Sequenz von Werte (endlich oder unendlich lang) zu produzieren.

Ein Objekt ist ein Iterator, wenn es die Methode **`next()`** mit folgender Semantik implementiert:

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col"><code>Wert</code></th>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        <p>
          Eine Funktion ohne Parameter, welche ein Objekt mit zwei Eigenschaften
          zurückgibt:
        </p>
        <ul>
          <li>
            <code>done</code> (boolean)
            <ul>
              <li>
                Hat den Wert <code>true</code>, wenn der Iterator das Ende der
                Iterierten Sequenz erreicht hat. In diesem Fall ist
                <code>value</code> ein optional spezifizierter Rückgabewert des
                Iterators. Der Rückgabewert ist
                <a
                  href="http://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads"
                  >hier</a
                >
                näher erklärt.
              </li>
              <li>
                Hat den Wert <code>false</code>, wenn der Iterator weitere Werte
                aus der Sequenz produzieren kann. Äquivalent ist, wenn die
                <code>done</code> Eigenschaft nicht definiert wird.
              </li>
            </ul>
          </li>
          <li>
            <code>value</code> - ein JavaScript Wert, der vom Iterator
            zurückgegeben wird. Kann weggelassen werden, wenn
            <code>done</code> den Wert <code>true</code> hat.
          </li>
        </ul>
        <p>
          Die <code>next</code> Methode gibt immer ein Objekt mit den
          Eigenschaften <code>done</code> und <code>value</code> zurück. Wird
          kein Objekt zurückgegeben (wie z. B. <code>false</code> oder
          <code>undefined</code>), wird ein {{jsxref("TypeError")}}
          ("iterator.next() returned a non-object value") erzeugt.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Einige Iteratoren sind wiederum iterierbar:

```js
var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString();           // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator]();    // true
```

## Beispiele für den Einsatz de Iterations Protokolle

Ein {{jsxref("String")}} ist ein Beispiel für ein standard iterierbares Objekt:

```js
var someString = 'hi';
typeof someString[Symbol.iterator];          // "function"
```

Der [Standard Iteratior](/de/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) von `String`s gibt die Codepoints einen nach dem anderen zurück:

```js
var iterator = someString[Symbol.iterator]();
iterator + '';                               // "[object String Iterator]"

iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }
```

Einige Standardkonstrukte, wie z. B. die [Spread Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator), benutzen unter der Decke das selbe Iterierbare Protokoll

```js
[...someString]                              // ["h", "i"]
```

Man kann das Iterierverhalben neu definieren indem eine eigene `@@iterator` Eigenschaft definiert wird:

```js
var someString = new String('hi');           // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string "bye"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
```

Zu bemerken ist, dass die Neudefinition von `@@iterator` hat Effekte auf Standardkonstrukte, die das Iterierbare Protokoll benutzen;

```js
[...someString];                             // ["bye"]
someString + '';                             // "hi"
```

## Iterierbare Beispiele

### Standard iterierbare Objekte

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} und {{jsxref("Set")}} sind im Standard iterierbar, weil jeder Prototyp der Objekte eine `@@iterator` Methode definiert.

### Benutzerdefiniertes Iterierbares Objekt

Man kann eigene Iterierbare Objekte wie folgt erstellen:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### Standard APIs akzeptieren Iterierbare Objekte

Es gibt viele APIs, die iterierbare Objekte akzeptieren, zum Beispiel: {{jsxref("Map", "Map([iterable])")}}, {{jsxref("WeakMap", "WeakMap([iterable])")}}, {{jsxref("Set", "Set([iterable])")}} and {{jsxref("WeakSet", "WeakSet([iterable])")}}:

```js
var myObj = {};
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2);               // "b"
new WeakMap([[{}, 'a'], [myObj, 'b'], [{}, 'c']]).get(myObj); // "b"
new Set([1, 2, 3]).has(3);                               // true
new Set('123').has('2');                                 // true
new WeakSet(function* () {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);                                         // true
```

Zudem sollten {{jsxref("Promise.all", "Promise.all(iterable)")}}, {{jsxref("Promise.race", "Promise.race(iterable)")}}, and {{jsxref("Array.from", "Array.from()")}} angeschaut werden.

### Syntaxen die iterierbare Objekte erwarten

Einige Statements und Ausdrücke erwarten iterierbare Objekt, zum Beispiel die [`for-of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife, [Spread Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator), [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*) und [destrukturierende Zuweisungen](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
for(let value of ['a', 'b', 'c']){
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(['a', 'b', 'c']);
a // "a"
```

### Nicht richtig definierte iterierbare Objekte

Wenn eine iterierbare `@@iterator` Methode keinen Iterator Objekt zurück gibt, ist es nicht richtig definiert. Wenn es so benutzt wird, führt das zu Laufzeitfehlern oder unerwartetem Verhalten:

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## Iterator Beispiele

### Einfacher Iterator

```js
function makeIterator(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

### Unendlicher Iterator

```js
function idMaker() {
    var index = 0;

    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### Mit einem Generator

```js
function* makeSimpleGenerator(array) {
    var nextIndex = 0;

    while (nextIndex < array.length) {
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true



function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

### Mit ES2015 Klassen (class)

```js
class SimpleClass {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {value: this.data[this.index++], done: false};
        } else {
          this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
          return {done: true};
        }
      }
    }
  };
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val);  //'0' '1' '2' '3' '4' '5'
}
```

## Ist ein Generator Objekt ein Iterator oder ein iterierbares Objekt?

Ein [Generatorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist beides, Iterator und Iterierbar:

```js
var aGeneratorObject = function* () {
    yield 1;
    yield 2;
    yield 3;
}();
typeof aGeneratorObject.next;
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator];
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable
[...aGeneratorObject];
// [1, 2, 3]
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-iteration', 'Iteration')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-iteration', 'Iteration')}} | {{Spec2('ESDraft')}} |                      |

## Siehe auch

- Für mehr Informationen über ES2015 Generatoren, siehe [die function\* Documentation](/de/docs/Web/JavaScript/Reference/Statements/function*).
