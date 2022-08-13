---
title: Pfeilfunktionen
slug: Web/JavaScript/Reference/Functions/Arrow_functions
tags:
  - ECMAScript 2015
  - Functions
  - Intermediate
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/Arrow_functions
original_slug: Web/JavaScript/Reference/Functions/Pfeilfunktionen
---
{{jsSidebar("Functions")}}

Der **Ausdruck einer Pfeilfunktion** hat eine kürzere Syntax als ein [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) und hat kein eigenes [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), [arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments), [super](/de/docs/Web/JavaScript/Reference/Operators/super), oder [new.target](/de/docs/Web/JavaScript/Reference/Operators/new.target). Solche Funktionsausdrücke sind am besten für Funktionen, die nicht als Methode genutzt werden, geeignet und können nicht als Konstruktoren verwendet werden.

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

## Syntax

### Basis Syntax

    (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    // gleich zu: => { return expression; }

    // Klammern sind optional, wenn nur ein Parametername vorhanden ist:
    (singleParam) => { statements }
    singleParam => { statements }

    // Die Parameterliste für eine parameterlose Funktion muss mit einem Klammernpaar geschrieben werden
    () => { statements }

### Fortgeschrittene Syntax

    // Der Body kann eingeklammert werden, um ein Objektliteral Ausdruck zurück zu geben:
    params => ({foo: bar})

    // Rest Parameter und Default Parameter werden unterstützt
    (param1, param2, ...rest) => { statements }
    (param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
    statements }

    // Destrukturierung in der Parameterliste ist ebenfalls unterstützt
    var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
    f(); // 6

## Beschreibung

Siehe auch ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/).

Zwei Faktoren haben die Einführung von Pfeilfunktionen beeinflusst: kürzere Funktionen und dass `this` nicht gebunden ist.

### Kürzere Funktionen

```js
var elements = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

elements.map(function(element) {
  return element.length
}); // [8, 6, 7, 9]

elements.map(element => {
  return element.length
}); // [8, 6, 7, 9]

elements.map(({length}) => length); // [8, 6, 7, 9]
```

### Keine Bindung von `this`

Vor (der Einführung von) Pfeilfunktionen definierte jede Funktion ihren eigenen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert (d.h. ein neues Objekt im Falle eines Konstruktors; in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Funktionsaufrufen nicht definiert; bzw. das kontextuelle Objekt, wenn die Funktion als eine "Objekt-Methode" aufgerufen wurde, usw.). Dies stellte sich innerhalb eines objektorientierten Programmierstils als lästig heraus.

```js
function Person() {
  // Der Person() Konstruktor definiert `this` als Instanz von sich selbst.
  this.age = 0;

  setInterval(function growUp() {
    // Im nicht Strict Modus, definiert die growUp() Funktion `this`
    // als das globale Objekt (weil das der Ort ist, an dem growUp() ausgeführt wird),
    // das sich von dem `this`, welches vom Person() Konstruktor definiert wurde unterscheidet.
    this.age++;
  }, 1000);
}

var p = new Person();
```

In ECMAScript 3/5 konnte dies durch Zuweisung des Wertes von `this` an eine Variable, welche umschlossen werden konnte, behoben werden.

```js
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // Der Rückruf bezieht sich auf jene `that`-Variable,
    // deren Wert das zu erwartende Objekt ist.
    that.age++;
  }, 1000);
}
```

Alternativ könnte eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, sodass der passende `this`-Wert an die `growUp()`-Funktion übergeben würde.

Eine Pfeilfunktion erstellt keinen eigenen `this` Kontext, wodurch `this` die ursprüngliche Bedeutung des umschließenden Kontextes trägt. Somit funktioniert der folgende Code wie erwartet.

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| bezieht sich entsprechend auf das Person-Objekt
  }, 1000);
}

var p = new Person();
```

#### Zusammenhang mit dem Strict Mode

Vorausgesetzt, dass `this` aus dem umschließenden lexikalischen Kontext kommt, werden [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Regeln bezüglich `this` einfach ignoriert.

```js
var f = () => {'use strict'; return this};
f() === window; // oder das globale Objekt
```

Die restlichen strict mode Regeln verhalten sich normal.

#### Aufruf durch call oder apply

Da `this` in Pfeilfunktionen nicht gebunden ist, können `call()` oder `apply()` Methoden nur Argumente übergeben; `this` wird ignoriert:

```js
var adder = {
  base : 1,

  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // Dies würde 2 ausgeben
console.log(adder.addThruCall(1)); // Dies würde nach wie vor 2 ausgeben
```

### Keine Bindung von Argumenten

Pfeilfunktionen haben kein eigenes [`arguments` Objekt](/de/docs/Web/JavaScript/Reference/Functions/arguments). Somit ist `arguments` einfach eine Referenz auf den Namen innerhalb des umschließenden Geltungsbereichs (scope).

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // implizite Argumenten-Bindung von foo
  return f();
}

foo(1); // 2
```

In den meisten Fällen sind [Rest Parameters](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) eine gute Alternative zum Einsatz des `arguments` Objektes:

```js
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Pfeilfunktionen als Methoden

Wie angegeben, sind Ausdrücke von Pfeilfunktionen am besten geeignet für nicht-methodische Funktionen. Man sehe, was geschieht, wenn versucht wird, sie als Methoden zu verwenden.

```js
'use strict';

var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // gibt undefined, Window {...} aus (oder das globale Objekt)
obj.c(); // gibt 10, Object {...} aus
```

Pfeilfunktionen definieren (binden sozusagen) kein eigenes `this`. Ein anderes Beispiel, das {{jsxref("Object.defineProperty()")}} betrifft:

```js
'use strict';

var obj = {
  a: 10
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a+10; // stellt das globale Objekt 'Window' dar, 'this.a' gibt daher 'undefined' zurück
  }
});
```

### Verwendung des `new` Operators

Pfeilfunktionen können nicht als Konstruktoren verwendet werden. Sie führen zu einem Fehler, wenn auf ihnen ein `new` angewendet wird.

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

### Einsatz der `prototype` Eigenschaft

Pfeilfunktionen haben keine `prototype` Eigenschaft.

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

### Verwendung des Schlüsselwortes `yield`

Das [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Schlüsselwort sollte im Körper einer Pfeilfunktion nicht verwendet werden (außer wenn dies innerhalb von darin weiter verschachtelten Funktionen erlaubt ist). Als Folge können Pfeilfunktionen nicht als Generatoren verwendet werden.

## Funktionskörper

Pfeilfunktionen können entweder einen "knappen" oder einen gewöhnlichen "Blockkörper" haben.

In einem knappen Körper ist lediglich ein Ausdruck nötig und eine implizite Rückgabe wird angehängt. In einem Blockkörper muss eine explizite Rückgabe-Anweisung verwendet werden.

```js
var func = x => x * x;
// knappe Syntax, implizierte Rückgabe

var func = (x, y) => { return x + y; };
// mit Blockkörper, explizite Rückgabe wird benötigt
```

## Rückgabe von Objekt-Literalen

Man bedenke, dass die Rückgabe von Objekt-Literalen unter Verwendung der knappen Syntax `params => {object:literal}` nicht so ausgeführt wird, wie man es erwarten würde:

```js
var func = () => {  foo: 1  };
// Der Aufruf von func() gibt undefined zurück!

var func = () => {  foo: function() {}  };
// SyntaxError: function-Anweisung erfordert einen Namen
```

Der Grund dafür ist, dass der Code in geschweiften Klammern ({}) als eine Sequenz von Anweisungen übersetzt wird (d.h. foo wird als Bezeichner behandelt und nicht als Schlüssel eines Objekt-Literals).

Man bedenke, das Objekt-Literal in Klammern zu setzen:

```js
var func = () => ({ foo: 1 });
```

## Zeilenumbruch

Pfeilfunktionen können keinen Zeilenumbruch zwischen Parametern und dem Pfeil haben.

```js
var func = ()
           => 1;
// SyntaxError: Ausdruck erwartet, '=>' erhalten
```

## Übersetzungsreihenfolge

Der Pfeil innerhalb einer Pfeilfunktion ist kein Operator. Allerdings haben Pfeilfunktionen im Vergleich zu gewöhnlichen Funktionen besondere Übersetzungsregeln, welche mit der Priorität von Operatoren ([operator precedence](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)) anders interagieren.

```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```

## Weitere Beispiele

```js
// Eine leere Pfeilfunktion gibt undefined zurück
let empty = () => {};

(() => "foobar")()
// Gibt "foobar" zurück
// (Das ist eine Immediately Invoked Function Expression
// siehe IIFE im Glossar

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Einfaches filtering, mapping, ... von Arrays

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// Weitere knappe Zusicherungsketten (promise chains)
promise.then(a => {
  // ...
}).then(b => {
   // ...
});

// Parameterlose Pfeilfunktionen, welche visuell einfacher zu verstehen sind
setTimeout( _ => {
  console.log("I happen sooner");
  setTimeout( _ => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.functions.arrow_functions")}}

## Siehe auch

- ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
