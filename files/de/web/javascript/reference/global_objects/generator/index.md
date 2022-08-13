---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Legacy Generator
  - Legacy Iterator
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Generator
---
{{JSRef}}

Das **`Generator`** Objekt wird von der {{jsxref("Statements/function*", "Generator Function", "", 1)}} zurückgegeben und entspricht beidem, dem [Iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) und dem [Iterator Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol).

## Syntax

    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    var g = gen(); // "Generator { }"

## Methoden

- {{jsxref("Generator.prototype.next()")}}
  - : Gibt einen Wert vom Generator zurück (ausgelöst durch {{jsxref("Operators/yield", "yield")}}).
- {{jsxref("Generator.prototype.return()")}}
  - : Gibt den gegebene Wert zurück und beendet den Generator.
- {{jsxref("Generator.prototype.throw()")}}
  - : Erzeugt einen Fehler im Generator (beendet auch den Generator, wenn der Fehler nicht im Generator abgefangen wird).

## Beispiele

### Ein unendlicher Iterator

```js
function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Veraltete Generatorobjekte

Firefox (SpiderMonkey) hat eine frühe Version der Generatoren in [JavaScript 1.7](/de/docs/Web/JavaScript/New_in_JavaScript/1.7) implementiert, bei der kein Stern (\*) in der Funktionsdeklaration nötig war (man benutzte nur das `yield` Schlüsselwort im Funktionsrumpf). Seit Firefox 58 (Released am 23. Januar 2018) sind diese veralteten Generatoren entfernt ({{bug(1083482)}}).

### Veraltete Generator Methoden

- `Generator.prototype.next()`{{non-standard_inline}}
  - : Gibt einen Wert vom {{jsxref("Operators/yield", "yield")}} Ausdruck zurück. Diese korrespondiert mit der `next()` Methode in ES2015 Generator Objekt.
- `Generator.prototype.close()` {{non-standard_inline}}
  - : Beendet einen Generator, so dass der Aufruf von `next()` zu einem {{jsxref("StopIteration")}} Fehler führt. Diese korrespondiert mit der `return()` Methode in ES2015 Generator Objekt.
- `Generator.prototype.send()` {{non-standard_inline}}
  - : Wird benutzt, um einen Wert zum Generator zu senden. Der wert wird vom {{jsxref("Operators/yield", "yield")}} Ausdruck zurückgegeben und gibt einen Wert vom nächsten {{jsxref("Operators/yield", "yield")}} Ausdruck zurück. Diese korrespondiert mit der `next(x)` Methode in ES2015 Generator Objekt.
- **`Generator.`**`prototype.`**`throw()` **{{non-standard_inline}}
  - : Erzeugt einen Fehler im Generator. Diese korrespondiert mit der `throw()` Methode in ES2015 Generator Objekt.

### Veraltete Generator Beispiele

```js
function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generator-objects', 'Generator objects')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-generator-objects', 'Generator objects')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Generator")}}

## Siehe auch

### Veraltete Generatoren

- {{jsxref("Statements/Legacy_generator_function", "Die veraltete Generator Function", "", 1)}}
- {{jsxref("Operators/Legacy_generator_function", "Der veraltete Generator Functionsausdruck", "", 1)}}
- {{jsxref("StopIteration")}}
- [The legacy Iterator protocol](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol)

### ES2015 Generatoren

- {{jsxref("Functions", "Functions", "", 1)}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Operators/function", "function Ausdruck")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* Ausdruck")}}
- {{jsxref("GeneratorFunction")}}
- [The Iterator protocol](/de/docs/Web/JavaScript/Guide/The_Iterator_protocol)
