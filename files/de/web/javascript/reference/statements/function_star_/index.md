---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript 2015
  - Function
  - Iterator
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/function*
---
{{jsSidebar("Statements")}}

Die **`function*`**-Deklaration ( Schlüsselwort `function` gefolgt von einem Stern) definiert eine _Generatorfunktion_, welche ein {{jsxref("Global_Objects/Generator","Generator")}}-Objekt zurückgibt.

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

Eine Generatorfunktion kann auch mittels des {{jsxref("GeneratorFunction")}}-Konstruktors definiert werden.

## Syntax

    function* name([param[, param[, ... param]]]) {
       statements
    }

- `name`
  - : Der Name der Funktion.

<!---->

- `param`
  - : Der Name eines an die Funktion zu übergebenden Arguments. Eine Funktion kann bis zu 255 Argumente haben.

<!---->

- `statements`
  - : Die den Körper der Funktion ergebenden Anweisungen.

## Beschreibung

Generatoren sind Funktionen, die verlassen und später wieder betreten werden können. Ihr Kontext (Variablenbindung) bleibt über die Wiedereintritte hinweg erhalten.

Der Aufruf einer Generatorfunktion führt ihren Körper nicht sofort aus; stattdessen wird ein [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)-Objekt einer Funktion zurückgegeben. Wenn die `next()`-Methode des Iterators aufgerufen wird, wird der Körper der Generatorfunktion bis zum ersten {{jsxref("Operators/yield", "yield")}}-Ausdruck ausgeführt, der den vom Iterator zurückzugebenden Wert spezifiziert oder mittels {{jsxref("Operators/yield*", "yield*")}} an eine andere Generatorfunktion weitergibt. Die Methode `next()` gibt ein Objekt mit einer `value`-Eigenschaft zurück, die den zurückgegebenen Wert enthält, und eine Eigenschaft `done`, die anzeigt, ob der Generator seinen letzten Wert zurückgegeben hat (boolescher Wert). Beim Aufrufen der `next()`-Methode mit einem Argument wird die Generatorfunktion weiter ausgeführt.

Ein `return`-Statement in einer Generatorfunktion sorgt dafür, dass der Generator fertig ist (Status `done`). Falls ein Wert zurückgegeben wird, dann wird dieser als `value` zurückgegeben. Anschließend wird kein weiterer Wert mehr zurückgegeben.

## Beispiele

### Einfaches Beispiel

```js
function* idMaker(){
  var index = 0;
  while(index < index+1)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...
```

### Beispiel mit yield\*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Übergeben von Argumenten in Generatoren

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
```

### Return Statement in einem Generator

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generatoren haben keinen Konstruktor

```js example-bad
function* f() {}
var obj = new f; // throws "TypeError: f ist kein Konstruktor"
```

## Spezifikationen

| Spezifikation                                            | Status                       | Kommentar                                                                                                                  |
| -------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#', 'function*')}}     | {{Spec2('ES2015')}}     | Initiale Definition.                                                                                                       |
| {{SpecName('ES2016', '#', 'function*')}}     | {{Spec2('ES2016')}}     | Änderung, dass Generatoren nicht über [[Construct]] trap verfügen und eine Ausnahme bei der Verwendung von `new` erzeugen. |
| {{SpecName('ESDraft', '#', 'function*')}} | {{Spec2('ESDraft')}} |                                                                                                                            |

## Browserkompatibilität

{{Compat("javascript.statements.generator_function")}}

## Firefox-spezifische Hinweise

#### Generatoren und Iteratoren in Firefox-Versionen vor 26

Ältere Firefox-Versionen implementierten eine ältere Version des Generatorenentwurfs. In den älteren Versionen wurden Generatoren, neben anderen Abweichungen, mit dem normalen Schlüsselwort `function` (ohne den Stern) definiert. Siehe [veraltete Generatorfunktion ](/de/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)für weitere Informationen.

#### `IteratorResult`-Objekt zurückgegeben anstatt Ausnahme erzeugt

Beginnend mit Gecko 29 {{geckoRelease(29)}} erzeugt die ausgeführte Generatorfunktion keine {{jsxref("TypeError")}} "generator has already finished"-Ausnahme mehr. Stattdessen gibt sie `ein IteratorResult`-Objekt mit `{ value: undefined, done: true }` ({{bug(958951)}}) zurück.

## Siehe auch

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} Objekt
- [Das Iteratorprotokol](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- Andere Quellen im Web:

  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Hemanth.HM: The New gen of \*gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
  - [Task.js](http://taskjs.org/)
