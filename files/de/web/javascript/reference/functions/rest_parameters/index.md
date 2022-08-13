---
title: Rest Parameter
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
  - Functions
  - JavaScript
  - Rest
  - Rest Parameter
translation_of: Web/JavaScript/Reference/Functions/rest_parameters
original_slug: Web/JavaScript/Reference/Functions/rest_parameter
---
{{jsSidebar("Functions")}}

Mit der **Rest Parameter** Syntax kann man beliebig viele Parameter als Array empfangen.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

## Syntax

```js
function f(a, b, ...restArgs) {
  // ...
}
```

## Beschreibung

Wenn vor dem letzten Parameter einer Funktion `...` steht wird aus diesem Parameter ein Array von `0` (inklusiv) bis zu `restArgs.length` (exklusiv), welches weitere der Funktion übergebene Parameter enthält.

Im oberen Beispiel enthält das `restArgs` alle weiteren Argumente außer die ersten beiden, da diese bereits von den Variablen `a` und `b` erfasst werden.

### Unterschiede zwischen Rest Parametern und dem `arguments` Objekt

Es gibt drei Hauptunterschiede zwischen Rest Parametern und dem [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments "arguments") Objekt:

- Rest Parameter sind nur die jenigen, die zu einem Namen gehören (z. B. in Funktionsausdrücken formal definierte Parameter), während das `arguments` Objekt alle übergebenen Argumente einer Funktion enthällt.
- Das `arguments` Objekt ist kein echtes Array, während Rest Parameter eine [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array "Array") sind, was bedeutet, dass Methoden wie [`sort`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "Array sort method"), [`map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map "Array map method"), [`forEach`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "Array forEach method") oder [`pop`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop "Array pop method") direkt angewendet werden können.
- Das `arguments` Objekt hat zusätzliche, spezielle Funktionalität (wie die `callee` Eigenschaft).

### Von `arguments` zu einem Array

Rest Parameter wurden eingeführt, um Standardcode zu reduzieren, welche beim Einsatz von `arguments` anfällt

```js
// Before rest parameters, the following could be found:
function f(a, b) {
  var args = Array.prototype.slice.call(arguments, f.length);

  // …
}

// to be equivalent of

function f(a, b, ...args) {

}
```

### Destrukturierte Rest Parameter

Rest Parameter können destrukturiert werden, was bedeutet, dass sie in einzelne Variablen entpackt werden können. Siehe [destrukturierende Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b and c are undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)
```

## Beispiele

Weil `theArgs` ein Array ist, ist die Anzahl der Argumente mit der `length` Eigenschaft gegeben:

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

Im nächsten Beispiel wird ein Rest Parameter eingesetzt, um alle Argumente außer dem ersten in einem Array zu sammeln. Jedes wird dann mit dem ersten Argument multipliziert und als Array zurückgegeben:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

Das folgende Beispiel zeigt, dass `Array` Methoden auf Rest Parameter jedoch nicht auf `arguments` Objekten eingesetzt werden können:

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // shows 1, 3, 5, 7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // this will never happen
}

// throws a TypeError: arguments.sort is not a function
console.log(sortArguments(5, 3, 7, 1));
```

Um `Array` Methoden auf einem `arguments` Objekt zu benutzen, muss dieses in ein echtes Array konvertiert werden.

```js
function sortArguments() {
  var args = Array.from(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar           |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-function-definitions', 'Function Definitions')}}     | {{Spec2('ES6')}}         | Initiale Definition |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.functions.rest_parameters")}}

## Siehe auch

- [Spread Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator "spread operator") (auch ‘`...`’)
- [Arguments Objekt](/de/docs/Web/JavaScript/Reference/Functions/arguments "arguments")
- [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")
- [Functions](/de/docs/Web/JavaScript/Reference/Functions "Functions and function scope")
- [Original Vorschlag von ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
- [Destrukturierte Zuweisungen](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
