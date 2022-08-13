---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
tags:
  - ECMAScript 2015
  - Generators
  - Iterable
  - Iterator
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/yield*
---
{{jsSidebar("Operators")}}

Der **`yield*` Ausdruck** wird eingesetzt um an einen anderen {{jsxref("Statements/function*", "Generator")}} oder iterierbares Objekt zu delegieren.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntax

     yield* [[expression]];

- `expression`
  - : Der Ausdruck, der ein Iterierbares Objekt zurückgibt.

## Beschreibung

Das `yield*` Ausdrucksliteral iteriert über den Operanden und gibt jeden zurückgegebenen Wert zurück.

Der Wert von `yield*` Ausdrücken selbst ist der Wert der vom Iterator zurückgegeben wird, wenn der geschlossen wird (z. B., wenn `done` `true` ist).

## Beispiele

### Zu einem anderen Generator delegieren

Im folgenden Code werden Werte von `g1()` und `g2()` beim Aufruf von `next()`zurückgegeben.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### Andere Iterable Objekte

Neben Generatorobjekten kann `yield*` auch andere Iterable Objekte wie Arrays, Strings oder Arguments-Objekte zurückgeben.

```js
function* g3() {
  yield* [1, 2];
  yield* '34';
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "3", done: false}
console.log(iterator.next()); // {value: "4", done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### Der Wert des `yield*` Ausdrucks selbst

`yield*` ist ein Ausdruck, kein Statement, weshalb es zu einem Wert ausgewertet wird.

```js
function* g4() {
  yield* [1, 2, 3];
  return 'foo';
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true},
                              // g4() returned {value: 'foo', done: true} at this point

console.log(result);          // "foo"
```

## Spezifikationen

| Spezifikation                                    | Status                       | Kommentar            |
| ------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#', 'Yield')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#', 'Yield')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.operators.yield_star")}}

## Firefox spezifische Hinweise

- Beginnend mit Gecko 33 {{geckoRelease(33)}}, wurde das Einlesen des yield Ausdrucks aktualisiert, um der ES2015 Spezifikation gerecht zu werden ({{bug(981599)}}):

  - Die Zeilenumbruchrestriktion ist jetzt Implementiert. Es ist kein Zeilenumbruch zwischen "yield" and "\*" erlaubt. Code wie der folgende erzeugt einen {{jsxref("SyntaxError")}}:

    ```js
    function* foo() {
      yield
      *[];
    }
    ```

## Siehe auch

- [Das Iterator Protokoll](/de/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* Ausdruck")}}
- {{jsxref("Operators/yield", "yield")}}
