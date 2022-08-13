---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
tags:
  - ECMAScript 2015
  - Generators
  - Iterator
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/yield
---
{{jsSidebar("Operators")}}

Das `yield` Schlüsselwort wird eingesetzt zum Anhalten und Fortsetzen einer Generatorfunktion ({{jsxref("Statements/function*", "function*")}} oder [veralteten Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)) eingesetzt.

{{EmbedInteractiveExample("pages/js/expressions-yield.html")}}

## Syntax

    [rv] = yield [expression];

- `expression`
  - : Definiert den Wert, der von der Generatorfunktion über das [Iterator Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) zurückgegeben wird. wird dieser weggelassen, wird `undefined` zurückgegeben.
- `rv`
  - : Gibt den optionalen Wert zurück, der der `next()` Methode des Generators übergeben wird, damit dieser weiter verarbeitet werden kann.

## Beschreibung

Das `yield` Schlüsselwort hält die Ausführung der Generatorfunktion an und gibt den Wert des Ausdrucks nach dem `yield` Schlüsselwort an den Aufrufer des Generators zurück. Es kann als die generatorbasierte Version des `return` Schlüsselwortes gesehen werden.

Das `yield` Schlüsselwort gibt ein `IteratorResult` Objekt mit zwei Eigenschaften, `value` und `done`, zurück. Die `value` Eigenschaft ist das Ergebnis des ausgewerteten `yield` Ausdrucks und `done` ist `false`, was gedeutet, dass der Generator noch nicht fertig ist.

Solange ein `yield` Ausdruck pausiert, wird die Codeausführung des Generators pausiert, bis die `next()` Methode des Generators aufgerufen wird. Mit jedem Aufruf der Generator `next()` Methode läuft der Generator weiter, bis einer der folgenden Punkte eintritt:

- Ein `yield`, welches dazu führt, dass der Generator wieder Pausiert und einen neuen Generatorwert zurückgibt. Beim nächsten Aufruf von `next()` wird die Ausführung direkt nach dem `yield` fortgesetzt.
- {{jsxref("Statements/throw", "throw")}} wird eingesetzt um einen Fehler im Generator zu erzeugen. Dieses stoppt den Generator vollständig und führt dazu, dass die Ausführung beim Aufrufer fortgesetzt wird, wie es bei üblicherweise bei Fehlern der Fall ist.
- Das Ende einer Generatorfunktion wird erreicht; In diesem Fall endet die Ausführung des Generator und ein `IteratorResult` Objekt wird zum Aufrufer zurückgegeben, bei dem `value` {{jsxref("undefined")}} ist und `done` `true` ist.
- Ein {{jsxref("Statements/return", "return")}} Statement wird erreicht. In diesem Fall endet die Ausführung des Generators und ein `IteratorResult` Objekt wird zum Aufrufer zurückgegeben, welches als `value` den vom `return` Statement spezifizierten Wert enthält und `done` `true` ist.

Wenn ein optionaler Wert der `next()` Methode des Generators übergeben wird, wird der Wert es der aktuelle Rückgabewert der `yield` Operation sein.

Durch den Generatorcodepfad, seinem `yield` Operator und der Möglichkeit einen neuen Startwert zu spezifizierten, indem dieser an {{jsxref("Generator.prototype.next()")}} übergeben wird, sind Generatoren sehr leistungsstark und kontrollierbar.

## Beispiele

Der folgende Code ist die Deklaration einer Beispielgeneratorfunktion.

```js
function* countAppleSales () {
  var saleList = [3, 7, 5];
  for (var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

Wenn eine Generatorfunktion definiert ist, kann dieser benutzt werden, um einen Iterator, wie gezeigt, zu erstellen.

```js
var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

## Spezifikationen

| Spezifikation                                    | Status                       | Kommentar            |
| ------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#', 'Yield')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#', 'Yield')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.operators.yield")}}

## Firefox spezifische Hinweise

- Angefangen mit Gecko 29 {{geckoRelease(29)}}, erzeugt eine fertige Generatorfunktion keinen {{jsxref("TypeError")}} "generator has already finished" mehr. Stattdessen wird ein `IteratorResult` Objekt wie folgendes zurückgegeben: `{ value: undefined, done: true }` ({{bug(958951)}}).
- Angefangen mit Gecko 33 {{geckoRelease(33)}}, wurde das einlesen des `yield` Ausdrucks aktualisert, um konform mit der ES2015 Spezifikation zu sein ({{bug(981599)}}):

  - Der Ausdruck nach dem `yield` Schlüsselwort ist optional und das Weglassen führt nicht mehr zu einem {{jsxref("SyntaxError")}}: `function* countAppleSales() { yield; }`

## Siehe auch

- [Das Iterator Protokoll](/de/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}
