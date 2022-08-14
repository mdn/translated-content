---
title: Funktionen
slug: Web/JavaScript/Reference/Functions
tags:
  - Constructor
  - Function
  - Functions
  - JavaScript
  - Parameter
  - parameters
translation_of: Web/JavaScript/Reference/Functions
---
{{jsSidebar("Functions")}}

Allgemein gesagt, ist eine Funktion ein "Unterprogramm", welches von Code außerhalb der Funktion (oder innerhalb der Funktion, im Fall von Rekursion) aufgerufen wird. Wie Programme selbst auch, ist eine Funktion eine Sequenz von ausgewählten Statements, die als Funktionskörper bezeichnet wird. Der Funktion können der Werte übergeben werden und die Funktion wird einen Wert zurückgeben.

In JavaScript sind Funktionen First-Class Objekte, weil sie Eigenschaften und Methoden genau wie jedes andere Objekt haben können. Was sie von anderen Objekten unterscheidet ist, dass sie aufgerufen werden können. Kurz gesagt sind es [`Function`](/de/docs/JavaScript/Reference/Global_Objects/Function) Objekte.

Für mehr Beispiele und Erklärungen, siehe auch im [JavaScript Guide über Funktionen](/de/docs/Web/JavaScript/Guide/Functions).

## Beschreibung

Jede Funktion in JavaScript ist ein `Function` Objekt. Siehe {{jsxref("Function")}} für mehr Informationen zu Eigenschaften und Methoden von `Function` Objekten.

Um einen Wert abweichend vom Standard zurückzugeben, muss eine Funktion ein [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Statement haben, welches den Rückgabewert spezifiziert. Eine Funktion ohne ein return Statement wird den Standardwert zurückgeben. Im Fall eines [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)aufrufes mit dem Schlüsselwort [`new`](/de/docs/Web/JavaScript/Reference/Operators/new), wird der als Standardwert der Wert vom `this` Parameter zurückgegeben. Für alle anderen Funktionen wird als Standardwert {{jsxref("undefined")}} zurückgegeben.

Die Parameter eines Funktionsaufrufes sind die Argumente der Funktion. Argumente werden als Werte der Funktion übergeben. Wenn die Funktion den Wert eines Argumentes ändert, wirkt sich die Änderung nicht global oder in der aufrufenden Funktion aus. Jedoch sind auch Objektreferenzen Werte, welche speziell sind: Wenn die Funktion die Eigenschaften eines referenzierte Objekts ändern, ist die Änderung außerhalb der Funktion sichtbar, wie im folgenden Beispiel gezeigt wird:

```js
/* Deklariert die Funktion 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * Deklariert die Variable 'mycar';
 * Erstellt und initialisiert ein neues Objekt;
 * Weist Referenz 'mycar' zu
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* gibt 'Honda' aus */
console.log(mycar.brand);

/* Übergibt Objektreferenz der Funktion */
myFunc(mycar);

/*
 * gibt 'Toyota' als Wert der 'brand' Eigenschaft
 * des Objektes aus, so wie er von der Funktion geändert wurde.
 */
console.log(mycar.brand);
```

Das [`this` Schlüsselwort](/de/docs/Web/JavaScript/Reference/Operators/this) referenziert nicht zum aktuell ausgeführten Funktion, so, dass man das `Function` Objekt über den Namen referenzierten muss, auch im Funktionskörper.

## Funktionen definieren

Es gibt verschiedenen Möglichkeiten Funktionen zu definieren:

### Die Funktionsdeklaration (`function` Statement)

Es gibt eine spezielle Syntax für das Deklarieren von Funktionen (siehe [Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/function) für mehr Details):

    function name([param[, param[, ... param]]]) {
       statements
    }

- `name`
  - : Der Funktionsname.

<!---->

- `param`
  - : Der Name eines Arguments, welches der Funktion übergeben wird. Eine Funktion kann bis zu 255 Argumente haben.

<!---->

- `statements`
  - : Die Statements, welche den Funktionskörper der Funktion bilden.

### Der Funktionsausdruck (`function` Ausdruck)

Ein Funktionsausdruck ist ähnlich wie eine Funktionsdeklaration und hat die selbe Syntax (siehe [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) für Details). Ein Funktionsausdruck ist manchmal ein Teil eines größeren Ausdrucks. Man kann benannte Funktionsausdrücke (in denen der Name des Ausdrucks zum Beispiel im Aufrufstack benutzt wird) oder anonyme Funktionsausdrücke definieren. Funktionsausdrücke werden nicht an den Anfang des Gültigkeitsbereiches verschoben (_hoisted_), was bedeutet, dass sie nicht vor der Definition im Code benutzt werden können.

    function [name]([param[, param[, ... param]]]) {
       statements
    }

- `name`
  - : Der Funktionsname. Kann weggelassen werden, wodurch die Funktion eine sogenannte anonyme Funktion ist.

<!---->

- `param`
  - : Der Name eines Arguments, welches der Funktion übergeben wird. Eine Funktion kann bis zu 255 Argumente haben.
- `statements`
  - : Die Statements, welche den Funktionskörper der Funktion bilden.

Hier ist ein Beispiel für einen **anonymen** Funktionsausdruck (`name` wird nicht benutzt):

```js
var myFunction = function() {
    statements
}
```

Es ist auch möglich den Namen in der Funktionsdefinition erreichbar zu machen, indem eine **benannter** Funktionsausdruck erstellt wird:

```js
var myFunction = function namedFunction(){
    statements
}
```

Ein Vorteil beim Erstellen eines benannten Funktionsausdrucks ist, dass im Fall eines auftretenden Fehlers, der Name der Funktion im Stack Trace enthalten ist, was es einfacher macht den Ursprung des Fehlers zu finden.

Wie gezeigt, beginnen beide Beispiele nicht mit dem `function` Schlüsselwort. Statements die Funktionen enthalten aber nicht mit `function` beginnen, sind Funktionsausdrücke.

Wenn eine Funktion nur einmal benutzt wird, wird ein Pattern namens **IIFE (_Immediately Invokable Function Expression_)** genutzt.

```js
(function() {
    statements
})();
```

IIFE sind Funktionsausdrücke, die direkt nach dem Definieren ausgeführt werden.

### Die Generatorfunktionendeklaration (`function*` Statement)

Es gibt eine spezielle Syntax für die Deklaration von Generatorfunktionen (siehe {{jsxref('Statements/function*', 'function* Statement')}} für Details):

    function* name([param[, param[, ... param]]]) {
       statements
    }

- `name`
  - : Der Funktionsname.

<!---->

- `param`
  - : Der Name eines Arguments, welches der Funktion übergeben wird. Eine Funktion kann bis zu 255 Argumente haben.

<!---->

- `statements`
  - : Die Statements, welche den Funktionskörper der Funktion bilden.

### Der Generatorfunktionsausdruck (`function*` Ausdruck)

Ein Generatorfunktionsausdruck ist ähnlich wie eine Generatorfunktionsdeklaration und hat die selbe Syntax (siehe {{jsxref('Operators/function*', 'function* expression')}} für Details):

    function* [name]([param[, param[, ... param]]]) {
       statements
    }

- `name`
  - : Der Funktionsname. Kann weggelassen werden, wodurch die Funktion eine sogenannte anonyme Funktion ist.

<!---->

- `param`
  - : Der Name eines Arguments, welches der Funktion übergeben wird. Eine Funktion kann bis zu 255 Argumente haben.
- `statements`
  - : Die Statements, welche den Funktionskörper der Funktion bilden.

### Der Pfeilfunktionsausdruck (=>)

Eine Pfeilfunktionsausdruck hat eine kürzere Syntax und der `this` Wert ist lexikalisch gebunden (siehe [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Pfeilfunktionen) für Details):

    ([param[, param]]) => {
       statements
    }

    param => expression

- `param`
  - : Der Name eines Arguments. Keine Argumente müssen mit `()` angegeben werden. Für nur ein Argument sind die Klammern nicht notwendig (z. B. `foo => 1`).
- `statements or expression`
  - : Mehrere Statements müssen in Klammern geschrieben werden. Ein einziger Ausdruck benötigt keine Klammern. Dieser Ausdruck ist implizit der Rückgabewert der Funktion.

### Der `Function` Konstruktor

> **Note:** **Hinweis:** Der Einsatz des `Function` Konstruktors, um eine Funktion zu erstellen wird nicht empfohlen, weil der Funktionskörper als String übergeben wird, welcher von einigen JS Engines nicht optimiert werden kann und zu Problemen führen kann.

Wie alle anderen Objekte, können {{jsxref("Function")}} Objekte mit dem `new` Operator erstellt werden:

    new Function (arg1, arg2, ... argN, functionBody)

- `arg1, arg2, ... argN`
  - : Null oder mehr Namen, welche von der Funktion als formale Parameter benutzt werden. Jeder muss ein valider JavaScript Bezeichner sein.

<!---->

- `functionBody`
  - : Ein String, der die JavaScript Statements enthält, die den Funktionskörper formen.

Das Ausführen des `Function` Konstruktors als Funktion (ohne den Einsatz des `new` Operators) hat den selben Effekt wie das Aufrufen als Konstruktor.

### Der `GeneratorFunction` Konstruktor

> **Note:** **Hinweis:** `GeneratorFunction` ist kein globales Objekt, kann aber von Generatorfunktionsinstanzen erhalten werden (siehe {{jsxref("GeneratorFunction")}} für mehr Details).

> **Note:** **Hinweis:** Der Einsatz des `GeneratorFunction` Konstruktors, um eine Funktion zu erstellen wird nicht empfohlen, weil der Funktionskörper als String übergeben wird, welcher von einigen JS Engines nicht optimiert werden kann und zu Problemen führen kann.

Wie alle anderen Objekte, können {{jsxref("GeneratorFunction")}} Objekte mit dem `new` Operator erstellt werden:

    new GeneratorFunction (arg1, arg2, ... argN, functionBody)

- `arg1, arg2, ... argN`
  - : Null oder mehr Namen, welche von der Funktion als formale Parameter benutzt werden. Jeder muss ein valider JavaScript Bezeichner sein oder eine Liste solcher Strings mit Komma getrennt. Zum Beispiel "`x`", "`theValue`", or "`a,b`".

<!---->

- `functionBody`
  - : Ein String, der die JavaScript Statements enthält, die den Funktionskörper formen.

Das Ausführen des `GeneratorFunction `Konstruktors als Funktion (ohne den Einsatz des `new` Operators) hat den selben Effekt wie das Aufrufen als Konstruktor.

## Funktionsparameter

### Standardparameter

Standard Funktionsparameter erlauben es formale Parameter mit einem Standardwert zu initialisieren, wenn kein Wert oder `undefined` übergeben wird. Für mehr Details siehe [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Rest Parameter

Die Rest Parameter Syntax erlaubt die Repräsentation von beliebig fielen Argumenten als ein Array. Für mehr Details siehe [Rest Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters).

## Das `arguments` Objekt

Man kann die Funktionsargumente in einer Funktion referenzieren, indem das `arguments` Objekt benutzt wird. Siehe [arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments).

- [`arguments`](/de/docs/JavaScript/Reference/Functions_and_function_scope/arguments): Ein arrayähnliches Objekt, welches die übergebenen Argumente in der aktuell ausgeführten Funktion enthält.
- [`arguments.callee`](/de/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee) {{Deprecated_inline}}: Die aktuell ausgeführte Funktion.
- [`arguments.caller`](/de/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller) {{Obsolete_inline}} : Die Funktion, die die aktuell ausgeführte Funktion aufgerufen hat.
- [`arguments.length`](/de/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length): Die Anzahl der Argumente, die der Funktion übergeben wurden.

## Methodenfunktionen definieren

### Getter und Setter Funktionen

Man kann Getter (Zugriffsmethoden) und Setter (Änderungsmethoden) bei jedem Standardobjekt oder benutzerdefinierten Objekt, welches das Hinzufügen von neuen Eigenschaften unterstützt. Die Syntax für das Definieren von Gettern und Settern beim Einsatz der Objektliteralsyntax.

- [get](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Bindet eine Objekteigenschaft an eine Funktion, welche aufgerufen wird, wenn der Wert der Eigenschaft abgefragt wird.
- [set](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Bindet eine Objekteigenschaft an eine Funktion, welche aufgerufen wird, wenn der Wert der Eigenschaft geändert wird.

### Methodendefinitionssyntax

Angefangen mit ECMAScript 2015 kann man eigene Methoden in einer kürzeren Syntax, ähnlich wie Getter und Setter, definieren. Siehe [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) für mehr Details.

```js
var obj = {
  foo() {},
  bar() {}
};
```

## Konstruktor vs. Deklaration vs. Ausdruck

Das folgende wird verglichen:

Eine Funktion, die mit dem `Function` Konstruktor definiert wird und der Variablen `multiply` zugewiesen wird:

```js
var multiply = new Function('x', 'y', 'return x * y');
```

Eine Funktionsdeklaration mit dem Namen `multiply`:

```js
function multiply(x, y) {
   return x * y;
} // there is no semicolon here
```

Ein Funktionsausdruck einer anonymen Funktion, die der Variablen `multiply` zugewiesen wird:

```js
var multiply = function(x, y) {
   return x * y;
};
```

Ein Funktionsausdruck der Funktion `func_name`, die der Variablen `multiply` zugewiesen wird:

```js
var multiply = function func_name(x, y) {
   return x * y;
};
```

### Unterschiede

Alle machen annähernd die selben Dinge, jedoch mit kleinen subtilen Unterschieden:

Es gibt einen Unterschied zwischen dem Funktionsnamen und der Variable, der die Funktion zugewiesen wird. Der Funktionsnamen kann nicht geändert werden, während die Variable, die mit der Funktion zugewiesen ist, überschrieben werden kann. Der Funktionsname kann nur innerhalb des Funktionskörpers benutzt werden. Der Versuch diesen außerhalb des Funktionskörpers zu benutzen resultiert in einem Fehler (oder `undefined`, wenn der Funktionsname vorher mit einem `var` Statement deklariert wurde). Zum Beispiel:

```js
var y = function x() {};
alert(x); // Führt zu einem Error
```

Der Funktionsname taucht auch auf, wenn die Funktion mit der [toString Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) serialisiert wird.

Auf der anderen Seite ist die Variable, der die Funktion zugewiesen ist, nur durch ihren Gültigkeitsbereich begrenzt, der garantiert den Geltungsbereich einschließt, in dem die Funktion deklariert ist.

Wie das 4. Beispiel zeigt, kann sich der Funktionsname von dem Namen der Variablen, der die Funktion zugewiesen ist, unterscheiden. Diese sind nicht voneinander abhängig. Eine Funktionsdeklaration erstellt ebenfalls eine Variable mit dem selben Namen wie die Funktion. Im Gegensatz zu den durch Funktionsausdrücke definierten Funktionen können Funktionen, die durch Funktionsdeklarationen definiert sind, über ihren Namen in dem Bereich aufgerufen werden, in dem sie definiert wurden:

Eine Funktionsdefinition mit '`new Function'` hat keinen Funktionsnamen. In der [SpiderMonkey](/de/docs/Mozilla/Projects/SpiderMonkey) JavaScript Engine haben solche Funktionen in serialisierter Form immer den Namen "anonymous". Zum Beispiel gibt `alert(new Function())` folgendes aus:

```js
function anonymous() {
}
```

Weil die Funktion aktuell keinen Namen hat, ist `anonymous` keine Variable, die in der Funktion erreicht werden kann. Zum Beispiel führt folgendes zu einem Fehler:

```js
var foo = new Function("alert(anonymous);");
foo();
```

Anders als Funktionsdefinitionen mit Funktionsausdrücken oder dem `Function` Konstruktor, kann eine Funktionsdefinition mit Funktionsdeklaration genutzt werden, bevor bevor sie deklariert wird. Zum Beispiel:

```js
foo(); // alerts FOO!
function foo() {
   alert('FOO!');
}
```

Eine Funktionsdefinition mit einem Funktionsausdruck oder einer Funktionsdeklaration erbt den aktuellen Gültigkeitsbereich. Das bedeutet, die Funktion bildet eine Closure. Auf der anderen Seite erbt eine Funktion, die mit dem `Function` Konstruktor definiert wird, keinen anderen Gültigkeitsbereich außer dem globalen (welchen alle Funktionen erben).

```js
/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
```

Funktionsdefinitionen als Funktionsausdrücke und Funktionsdeklarationen werden nur einmal übersetzt, während das bei `Function` Konstruktoren nicht so ist. Das bedeutet, dass der Funktionskörper, der dem `Function` Konstruktor übergeben wird, mit jedem Aufruf des Konstruktors erneut übersetzt wird. Weil ein Funktionsausdruck jedes mal eine Closure erstellt und der Funktionskörper aber nicht erneut übersetzt wird, sind Funktionsausdrücke um einiges schneller als "`new Function(...)`". Deshalb sollte der `Function` Konstruktor überall vermieden werden, wo es geht.

Es sollte bemerkt werden, dass immer wenn Funktionsausdrücke und Funktionsdeklarationen verschachtelt in einer Funktion generiert vom `Function` Konstruktor erstellt werden, sie nicht mehrfach übersetzt werden. Zum Beispiel:

```js
var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // The segment "function() {\n\talert(bar);\n}" of the function body string is not re-parsed.
```

Eine Funktionsdeklaration wird sehr einfach (und oft unabsichtlich) in einen Funktionsausdruck geändert. Eine Funktionsdeklaration hört auf eine zu sein, wenn:

- sie ein Teil eines Ausdrucks wird
- sie kein "source element" einer Funktion oder des Skriptes selbst ist. Ein "source element" ist ein nicht geschachteltes Statement im Skript oder eines Funktionskörpers:

```js
var x = 0;               // source element
if (x === 0) {           // source element
   x = 10;               // not a source element
   function boo() {}     // not a source element
}
function foo() {         // source element
   var y = 20;           // source element
   function bar() {}     // source element
   while (y === 10) {    // source element
      function blah() {} // not a source element
      y++;               // not a source element
   }
}
```

### Beispiele

```js
// Funktionsdeklaration
function foo() {}

// Funktionsausdruck
(function bar() {})

// Funktionsausdruck
x = function hello() {}


if (x) {
   // Funktionsausdruck
   function world() {}
}


// Funktionsdeklaration
function a() {
   // Funktionsdeklaration
   function b() {}
   if (0) {
      // Funktionsausdruck
      function c() {}
   }
}
```

## Funktionen als Block-Level-Element

Beginnend mit ES2015 sind Funktionen im [strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) an den Block gebunden. Vor ES2015 waren Funktionen auf Blockebene im strikten Modus verboten.

```js
'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 nicht im strict Modus
```

### Block-level Funktionen im nicht-strict Code

Kurz gesagt: nicht machen.

Im nicht strict Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Zum Beispiel:

```js
if (shouldDefineZero) {
   function zero() {     // DANGER: compatibility risk
      console.log("This is zero.");
   }
}
```

ES2015 besagt, dass wenn `shouldDefineZero` false ist, `zero` niemals definiert wird, weil der Block nie ausgeführt wird. Jedoch ist das ein neuer Teil des Standards. Historisch war dieser Teil unspezifiziert und einigen Browser definierten `zero` egal, ob der Block ausgeführt wurde oder nicht.

Im [strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verhalten sich alle Browser, die ES2015 unterstützen, gleich. `zero` wird nur Definiert wenn `shouldDefineZero` true ist und nur in dem Gültigkeitsbereich des `if`-Blocks.

Ein sicherer Weg eine Funktion bedingt zu definieren ist es einen Funktionsausdruck einer Variablen zuzuweisen:

```js
var zero;
if (shouldDefineZero) {
   zero = function() {
      console.log("This is zero.");
   };
}
```

## Beispiele

### Zurückgeben einer formatierten Zahl

Die folgende Funktion gibt einen String zurück, der eine formatierte Zahlenrepräsentation mit führenden Nullen enthält.

```js
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
   var numStr = num.toString();             // Initialize return value as string
   var numZeros = totalLen - numStr.length; // Calculate no. of zeros
   for (var i = 1; i <= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
```

Die folgende Statements rufen die padZeros Funktion auf.

```js
var result;
result = padZeros(42,4); // returns "0042"
result = padZeros(42,2); // returns "42"
result = padZeros(5,4);  // returns "0005"
```

### Prüfen, ob eine Funktoin vorhanden ist

Man kann prüfen, ob eine Funktion existiert, indem man den `typeof` Operator benutzt wird. Im folgenden Beispiel wird getestet, ob das Objekt `window` eine Eigenschaft mit dem Namen `noFunc` hat, die eine Funktion ist. Wenn das so ist, wird sie benutzt, andernfalls wird etwas anderes gemacht.

```js
 if ('function' === typeof window.noFunc) {
   // use noFunc()
 } else {
   // do something else
 }
```

Zu beachten ist, dass im `if` Test eine Referenz zu `noFunc` benutzt wird — es stehen keine Klammern `()` nach dem Funktionsnamen, so dass die Funktion nicht aufgerufen wird.

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                                                     |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0                          |
| {{SpecName('ES5.1', '#sec-13', 'Function Definition')}}                             | {{Spec2('ES5.1')}}     |                                                                               |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}     | {{Spec2('ES6')}}         | Neu: Pfeilfunktionen, Generatorfunktionen, Standardparameter, Rest Parameter. |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ESDraft')}} |                                                                               |

## Browserkompatibilität

{{Compat("javascript.functions")}}

## Siehe auch

- {{jsxref("Statements/function", "Funktionsstatement")}}
- {{jsxref("Operators/function", "Funktionsausdruck")}}
- {{jsxref("Statements/function*", "function* Statement")}}
- {{jsxref("Operators/function*", "function* Ausdruck")}}
- {{jsxref("Function")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen")}}
- {{jsxref("Functions/Default_parameters", "Standardparameter")}}
- {{jsxref("Functions/rest_parameters", "Rest Parameter")}}
- {{jsxref("Functions/arguments", "Arguments Objekt")}}
- {{jsxref("Functions/get", "Getter")}}
- {{jsxref("Functions/set", "Setter")}}
- {{jsxref("Functions/Method_definitions", "Methodendefinitionen")}}
- [Funktionen und Funktionsgültigkeitsbereiche](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope)
