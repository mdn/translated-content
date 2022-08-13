---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Constructor
  - Function
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Function
---
{{JSRef}}

Der **`Function` Konstruktor** erstellt ein neues `Funktion` Objekt. Das direkte Aufrufen kann Funktionen dynamisch erstellen, hat aber Sicherheits- und Performanceprobleme genau wie der Einsatz von {{jsxref("eval")}}. Im Gegensatz zu `eval` ermöglicht der Function-Konstruktor die Ausführung von Code im globalen Gültigkeitsbereich, was zu besseren Programmiergewohnheiten führt und eine effizientere Code-Minimierung ermöglicht.

{{EmbedInteractiveExample("pages/js/function-constructor.html")}}

Jede JavaScript Funktion ist aktuell ein `Function` Objekt. Das kann mit dem Code `(function(){}).constructor === Function` gezeigt werden, der `true` zurückgibt.

## Syntax

    new Function ([arg1[, arg2[, ...argN]],] functionBody)

### Parameter

- `arg1, arg2, ... argN`
  - : Namen die von der Funktion als formelle Argumentname genutzt werden. Jeder davon muss ein String sein, welcher ein gültiger JavaScript Bezeichner ist oder einer Liste von solchen Strings, getrennt mit Kommata ist. Zum Beispiel: "`x`", "`derWert`", oder "`a,b`".
- `functionBody`
  - : Ein String, welcher den JavaScript Ausdruck als Funktions-Definition beinhaltet.

## Beschreibung

Mit dem `Function` Konstruktor erstellte `Function`-Objekte werden übersetzt, sobald die Funktion erstellt wurde. Das ist weniger effizient, als wenn man eine Funktion als [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/function) deklariert und diese innerhalb des Codes abruft, weil diese mit dem Rest des Codes übersetzt werden.

Alle der Funktion übergegebenen Argumente werden als Namen der Bezeichner der Parameter in der zu erstellenden Funktion in der angegebenen Reihenfolge behandelt.

Das Aufrufen des `Function` Konstruktors als Funktion (ohne den `new` Operator) hat dieselbe Wirkung, wie als Konstrukteuraufruf. Jedoch kann das Weglassen des `new` Operators eine kleinere minimierten Codegröße (4 Byte kleiner) erreichen, so dass es besser ist `Function` ohne `new` zu benutzen.

## Eigenschaften und Methoden von `Function`

Das globale `Function` Objekt hat eigene Methoden und Eigenschaften, doch, da es eine Funktion selbst ist, erbt es einige Methoden und Eigenschaften durch die Prototypkette aus {{jsxref("Function.prototype")}}.

## `Function` Prototyp Objekt

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype', 'Eigenschaften')}}

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype', 'Methoden')}}

## `Function` Instanzen

Funktions-Instanzen erben Methoden und Eigenschaften vom {{jsxref("Function.prototype")}}. Wie bei allen Konstruktoren kann das Prototypen Objekt verändern werden, um Änderungen an allen Funktions-Instanzen durchzuführen.

## Beispiele

### Spezifizieren von Argumente mit dem `Function` Konstruktor

Der folgende Code erstellt ein Funktions-Objekt, mit zwei Argumenten.

```js
// Das Beispiel kann direkt in der JavaScript Console ausgeführt werden.

// Erstellt eine Funktion mit zwei Argumenten und gibt die Summe dieser Argumente zurück
var adder = new Function('a', 'b', 'return a + b');

// Aufruf der Funktion
adder(2, 6);
// > 8
```

Die Argumente "a" und "b" sind formale Argument-Namen, welche im Funktionskörper genutzt werden, "`return a + b`".

### Unterschiede zwischen dem `Function` Konstruktor und Funktionsdeklarationen

Funktionen, die mit dem `Function` Konstruktor erstellt werden, erstellen keine Closures in ihrem Erstellungskontext; Sie werden immer im globalen Scope erstellt. Wenn diese ausgeführt wird, kann sie nur auf eigene lokale oder globale Variablen zugreifen, jedoch nicht auf die aus dem Erstellungskontext des `Function` Konstruktor aufzufes. Dieses ist der Unterschied zum Einsatz von {{jsxref("eval")}} mit Quelltext für einen Funktionsausdruck.

```js
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
```

Der "richtige" Weg für das Ausführen von externen Code mit `Function` (Für maximale Minimierung).

```js
function makeFunction(code){
    return Funktion('"use strict";return ' + code)();
}
var add = makeFunktion(
  "" + function(a, b, c){ return a + b + c } // dieser Code ist in einer seperaten Datei irgendwo im Produktivprogramm
)
console.log( add(1, 2, 3) );  // gibt sechs aus
```

Zu beachten ist, dass der obere Code komplett unpraktikabel ist. Man sollte `Function` niemals so missbrauchen. Stattdessen ist der obere Code nur als vereinfachtes Beispiel für eine Art Modulloader zu sehen, wobei es ein Basisskript gibt, welches dann hunderte von großen optionalen Modulen lädt. Dadurch muss ein Benutzer nicht lange warten, bis alle Module heruntergeladen sind, sondern der Clientcomputer lädt nur die benötigten Module und eine Seite lädt schneller. Dabei wird es beim auswerten von vielen Funktionen empfohlen, sie gebündelt zu übersetzen anstatt jede einzeln.

```js
function bulkMakeFunctions(){
    var str = "", i = 1, Len = arguments.length;
    if(Len) {
        str = arguments[0];
        while (i !== Len) str += "," + arguments[i], ++i;
    }
    return Funktion('"use strict";return[' + str + ']')();
}
const [
    add,
    sub,
    mul,
    div
] = bulkMakeFunctions(
    "function(a,b){return a+b}",
    "function(a,b){return a-b}",
    "function(a,b){return a*b}",
    "function(a,b){return a/b}"
);
console.log(sub(add(mul(4, 3), div(225, 5)), 7));
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.3', 'Function')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-function-objects', 'Function')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-function-objects', 'Function')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Function")}}

## Siehe auch

- {{jsxref("Functions", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
