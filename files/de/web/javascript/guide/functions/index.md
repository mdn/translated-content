---
title: Funktionen
slug: Web/JavaScript/Guide/Functions
tags:
  - Beginner
  - Functions
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Functions
original_slug: Web/JavaScript/Guide/Funktionen
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Schleifen_und_Iterationen", "Web/JavaScript/Guide/Ausdruecke_und_Operatoren")}}

Funktionen sind ein Grundbaustein in JavaScript. Eine Funktion ist eine Prozedur - eine Reihe von Anweisungen, um eine Aufgabe auszuführen oder eine Wert auszurechnen. Um Funktionen zu verwenden, müssen diese im Scope (Gültigkeitsbereich) deklariert werden, in dem sie ausgeführt werden soll.

Siehe ebenfalls in der [ausführlichen Referenz über JavaScript Funktionen](/de/docs/Web/JavaScript/Reference/Functions) nach, um noch mehr Detail zu erfahren.

## Funktionen definieren

### Funktionsdeklaration

Eine **Funktionsdefinition** (auch **Funktionsdeklaration** oder **Funktionsanweisung** genannt) besteht aus dem Schlüsselwort [`function`](/de/docs/Web/JavaScript/Reference/Statements/function "function"), gefolgt von:

- Den Namen der Funktion.
- Eine Liste von Parametern, die in runden Klammern geschrieben sind und durch Kommas getrennt sind.
- Die JavaScript Anweisungen, die durch die Funktion definiert werden und innerhalb von geschweiften Klammern steht`.`

Das folgende Beispiel definiert eine Funktion mit dem Namen `square`:

```js
function square(number) {
  return number * number;
}
```

Die Funktion `square `nimmt einen Parameter entgegen, welcher `number` heißt. Die Funktion besteht aus einer Anweisung, die besagt, dass der Parameter der Funktion (das ist `number`), multipliziert mit sich selbst, zurückgegeben werden soll. Dabei gibt das [`return`](/de/docs/Web/JavaScript/Reference/Statements/return "return") Statement an, welcher Wert von der Funktion zurückzugeben wird.

```js
return number * number;
```

Bei Primitive Parameter, wie Zahlen, wird der Funktionen **der Wert** übergeben. Werte, die der Funktion übergeben wurden und innerhalb der Funktion geändert werden, ändert den Wert zwar innerhalb der Funktion, **aber nicht global oder in der aufrufenden Funktion**.

Wird ein Objekt als Parameter übergeben (z. B. ein nicht primitiver Wert wie ein {{jsxref("Array")}} oder ein selbst definiertes Objekt) und die Funktion ändert die Objekteigenschaften, so sind die Änderungen außerhalb der Funktion sichtbar, wie im folgendem Beispiel veranschaulicht wird:

```js
function myFunc(theObject) {       //Funktiondekleration
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make;  // x bekommt den Wert "Honda"

myFunc(mycar);
y = mycar.make;  // y  bekommt den Wert "Toyota"
                 // (die make Eigenschaft wurde in der Funktion geändert)
```

### Funktionsausdrücke

Während die Funktionsdeklarationen oben syntaktisch ein Statement sind, kann eine Funktion auch durch [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) erstellt werde. Derartige Funktionen können auch **anonym** sein; denn Funktionen benötigten keinen Namen. So kann zum Beispiel die Funktion `square` auch so definiert werden:

```js
var square = function(number) { return number * number; };
var x = square(4); // x bekommt den Wert 16
```

Jedoch kann die Funktion auch einen Name haben, um sich innerhalb der Funktion selbst aufzurufen oder die Funktion im Stack Traces des Debuggers zu identifizieren zu können:

```js
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(3));
```

Funktionsausdrücke sind praktisch, um Funktionen als ein Argument einer anderen Funktion zu übergeben. Das folgende Beispiel zeigt die Definition einer `map` Funktion, die eine Funktion als ersten Parameter erwartet:

```js
function map(f, a) {
  var result = [],i; // erstellt ein neues Array
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
```

Im folgenden Quelltext wird einer Funktion eine Funktion übergeben, welche zuvor durch einen Funktions-Ausdruck definiert wurde. Diese Funktion wird für jedes Element in einem Array (zweiter Parameter) ausgeführt.

```js
function map(f, a) {
  var result = []; // erstellt ein neues Array
  var i;
  for (i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
var f = function(x) {
  return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);
```

gibt \[0, 1, 8, 125, 1000] zurück.

In JavaScript kann eine Funktion definiert werden, wenn eine Bedingung erfüllt ist. Zum Beispiel wird `myFunc` nur definiert, wenn `num `gleich `0 `ist:

```js
var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}
```

Im Unterschied zu den hier gezeigten Funktionsdeklarationen, kann man auch den {{jsxref("Function")}} Konstruktor verwenden, um eine Funktion von einem String zur Laufzeit zu erstellen, ähnlich der {{jsxref("eval()")}} Funktion.

Eine **Methode** ist eine Funktion, die Eigenschaft eines Objektes ist. Mehr Informationen über Objekt und Methoden sind im Artikel "[Mit Objekten arbeiten](/de/docs/Web/JavaScript/Guide/Mit_Objekten_arbeiten)" zu finden.

## Aufruf von Funktionen

Das Definieren einer Funktion führen diese noch nicht aus. Die Definition gibt der Funktion lediglich einen Namen und beschreibt was geschehen soll, wenn die Funktion aufgerufen wird. Erst der **Aufruf** ermöglicht es die Aktionen mit den angegebenen Parametern durchzuführen. Zum Beispiel wird die vorher definierte Funktion `square` so aufgerufen:

```js
square(5);
```

Es wird die Funktion mit dem Argument 5 aufgerufen. Die Funktion führt ihre Anweisungen aus und gibt den Wert 25 zurück.

Funktionen müssen im Scope (Gültigkeitsbereich) sein, wenn sie aufgerufen werden, können jedoch auch erst später definiert werden, wie im folgenden Beispiel:

```js
console.log(square(5));
/* ... */
function square(n) { return n * n; }
```

Der Scope einer Funktion ist die Funktion in der sie deklariert wird, oder das gesamte Programm, falls sie auf oberster Ebene deklariert wird.

> **Note:** **Hinweis:** Nur die oben angegebene Syntax für Funktionen wird funktionieren (`function funcName(){}`). Der folgende Code funktioniert nicht. Das bedeutet, dass das nur mit Funktionsdeklarationen funktioniert aber nicht mit Funktionsausdrücken.

```js example-bad
console.log(square); // square ist mit dem Initialwert undefined gehoisted.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) {
  return n * n;
}
```

Die Argumente einer Funktion sind nicht auf Strings und Nummern limitiert, denn es können auch ganze Objekte übergeben werden. Die `showProps()` Funktion (definiert in Beitrag "[Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Mit_Objekten_arbeiten#Objekte_und_Eigenschaften "https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Working_with_Objects#Objects_and_Properties")") ist ein Beispiel für einer Funktion, die Objekte als Argument entgegennimmt.

Eine Funktion kann sich selbst Aufrufen. Zum Beispiel berechnet folgende Funktion die Fakultät rekursiv:

```js
function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
```

Die Fakultät von 1 bis 5 kann wie folgt berechnet werden:

```js
var a, b, c, d, e;
a = factorial(1); // a wird der Wert 1 zugewiesen
b = factorial(2); // b wird der Wert 2 zugewiesen
c = factorial(3); // c wird der Wert 6 zugewiesen
d = factorial(4); // d wird der Wert 24 zugewiesen
e = factorial(5); // e wird der Wert 120 zugewiesen
```

Es gibt aber noch weitere Möglichkeiten Funktionen aufzurufen. Oftmals gibt es Fälle, in denen Funktionen dynamisch aufgerufen werden müssen, die Anzahl der Argumente variiert oder der Kontext einer Funktion zur Laufzeit gesetzt werden muss. Das zieht nach sich, dass Funktionen selbst Objekte sind, die Methoden haben (siehe das {{jsxref("Function")}} Objekt). Eine diese Methoden ist die {{jsxref("Function.apply", "apply()")}} Methode, mit der man die oben genannten Aufgaben lösen kann.

## Scopes (Gültigkeitsbereiche) von Funktionen

Variablen, die in einer Funktion definiert werden, können nicht außerhalb der Funktion erreicht werden, weil die Variablen nur im Scope (Gültigkeitbereich) der Funktion definiert sind. Im Gegensatz dazu kann eine Funktion alle Variablen und Funktionen erreichen, die in dem Scope definiert wurden, in dem auch die Funktion definiert wurde. Anders gesagt kann eine Funktion, die im globalen Scope definiert wurde, alle Variablen und Funktionen des globalen Scopes erreichen. Wenn eine Funktion in einer Funktion definiert wird, kann die innere Funktion auf alle Definitionen seiner Elternfunktion und alle Definitionen, auf die die Elternfunktion Zugriff hat, zugreifen.

```js
// Die folgenden Variablen sind im globalen Scope definiert
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// Diese Funktion ist im globalen Scope definiert
function multiply() {
  return num1 * num2;
}

multiply(); // gibt 60 zurück

// Ein Beispiel für verschachtelte Funktionen
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

getScore(); // gibt "Chamahk scored 5" zurück
```

## Scope und der Funktionsstack

### Rekursion

Eine Funktion kann sich selbst referenzieren und aufrufen. Dabei gibt es drei Möglichkeiten, wie eine Funktion sich selbst referenzieren kann:

1.  Der Funktionsname
2.  [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3.  Eine im Scope liegende Variable, die auf die Funktion referenziert.

Nimmt man zum Beispiel folgende Funktion:

```js
var foo = function bar() {
   // Anweisungen
};
```

Folgende Anweisungen im Körper der Funktion bewirken alle das Gleiche:

1.  `bar()`
2.  `arguments.callee()`
3.  `foo()`

Eine Funktion, die sich selbst aufruft, wird _rekursive Funktion_ genannt. Rekursion ist dabei vergleichbar mit einer Schleife. Beide führen den selben Quelltext mehrfach aus und beide benötigen eine Bedingung (um eine unendliche Schleife zu vermeiden oder eine unendliche Rekursion zu vermeiden). Das nächste Beispiel zeigt eine Schleife:

```js
var x = 0;
while (x < 10) { // "x < 10" ist die Schleifenbedingung
   // do stuff
   x++;
}
```

Diese Schleife kann in eine rekursive Funktion konvertiert werden, die aufgerufen wird:

```js
function loop(x) {
  if (x >= 10) // "x >= 10" ist die Abbruchbedingung (gleich zu "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // der rekursive Aufruf
}
loop(0);
```

Jedoch können manche Algorithmen nicht in eine **einfache** Schleife umgewandelt werden. Zum Beispiel kann das Abrufen aller Knoten einer Baumstruktur (z. B. [DOM](/de/docs/DOM)) einfacher rekursiv realisieren werden:

```js
function walkTree(node) {
  if (node == null) //
    return;
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

Verglichen mit der Funktion `loop`, erzeugt hier jeder rekursive Aufruf mehrere weitere rekursive Aufrufe.

Es ist möglich jeden rekursiven Algorithmus in einen nicht rekursiven umzuwandeln, jedoch ist die Logik oftmals sehr viel komplexer und es wird ein zusätzlicher Stack benötigt. Rekursion nutzt ebenfalls einen Stack: den Funktionsstack.

Die Stack-ähnliche Funktionsweise kann in folgendem Beispiel betrachtet werden:

```js
function foo(i) {
  if (i < 0)
    return;
  console.log('begin:' + i);
  foo(i - 1);
  console.log('end:' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

### Verschachtelte Funktionen und Closures

Man kann eine Funktion in eine andere verschachteln. Die verschachtelte (innere) Funktion ist privat innerhalb ihrer Containerfunktion (äußere Funktion). Sie formt auch eine _Closure_. Eine Closure ist ein Ausdruck, der freie Variablen enthalten kann, (typischerweise eine Funktion) zusammen mit einer Umgebung, welche die diese Variablen einschließt (und damit den Ausdruck _abschließt_, daher der Name _closure_).

Weil eine verschachtelte Funktion eine Closure ist, bedeutet das, dass sie die Argumente und Variablen ihrer Containerfunktion vererbt bekommt. Anders gesagt enthält der Scope der inneren Funktion den Scope der äußeren Funktion.

Zusammenfassend:

- Die innere Funktion kann nur von Anweisungen der äußeren Funktion erreicht werden.
- Die innere Funktion formt eine Closure: die innere Funktion kann die Argumente und Variablen der äußeren Funktion benutzen, während die äußere Funktion nicht die Argumente und Variablen der inneren Funktion nutzen kann.

Im folgenden Beispiel werden innere Funktionen gezeigt:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // gibt 13 zurück
b = addSquares(3, 4); // gibt 25 zurück
c = addSquares(4, 5); // gibt 41 zurück
```

Weil die innere Funktion eine Closure formt, kann die äußere Funktion aufgerufen werden und Argumente für die innere und äußere Funktion spezifizieren::

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3);  // Man kann sich das folgendermaßen vorstellen
                         // gib mir eine Funktion, die 3 zu einem Parameter addiert.
result = fn_inside(5);   // gibt 8 zurück

result1 = outside(3)(5); // gibt 8 zurück
```

### Erhaltung von Variablen

Bemerkenswert ist, dass `x` erhalten wird, wenn `inside` zurückgegeben wird. Eine Closure muss alle Argumente und Variablen erhalten, die sie referenziert. Weil jeder Aufruf potenziell verschiedene Argumente benötigt, wird eine neue Closure für jeden Aufruf erstellt. Der Speicher kann nur freigegeben werden, wenn die zurückgegebene `inside` Funktion nicht mehr erreichbar ist.

Das ist nicht anders mit gespeicherten Referenzen in anderen Objekten, jedoch oftmals weniger deutlich, weil man diese nicht direkt referenziert und nicht inspizieren kann.

### Mehrfach verschachtelte Funktionen

Funktionen können mehrfach verschachtelt sein, z. B. eine Funktion (A) enthält eine Funktion (B), die eine Funktion (C) enthält. Beide Funktionen, B und C sind Closures, B kann A erreichen und C kann B erreichen. Zudem kann C auch A erreichen, weil C B erreichen kann und B A erreichen kann. Deswegen kann eine Closure mehrere Scopes enthalten.; sie enthält rekursiv die Scopes der Funktion, die der Container ist. Das wird Scopeverkettung (_scope chaining_) genannt.

Untersuche das nächste Beispiel:

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
```

In diesem Beispiel benutzt C die Variablen `y`, von B, und `x`, von A. Das kann gemacht werden weil:

1.  `B` ist eine Closure, die `A` enthält, z. B. `B` kann die Argumente und Variablen von `A` benutzen.
2.  `C `ist ein Closure, die `B` enthält.
3.  Weil die Closure von B auf A zugreifen kann, kann die Closure von C auf die Argumente und Variablen von A und B zugreifen. Anders gesagt verkettet C den Scope von B und A in dieser Reihenfolge.

Das umgekehrte ist nicht möglich. A kann nicht auf C zugreifen, weil A nicht auf die Variablen und Argumente von B zugreifen kann und C eine Variable von B ist. So bleibt C für B privat.

### Namenskonflikte

Wenn zwei Argumente oder Variablen in dem Scope einer Closure mit dem gleichen Namen existieren, gibt es einen Namenskonflikt. Der innerste Scope hat dann Vorrang, was bedeutet, dass der innerste Scope die höchste Priorität hat, während der äußerste Scope die geringste Priorität hat. Das ist wegen der Scopeverkettung. Das erste Glied in der Kette ist der innerste Scope und das letzt Glied ist der äußerste Scope. Dieses ist im folgenden Beispiel zu sehen:

```js
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // gibt 20 statt 10 zurück
```

Der Namenskonflikt tritt beim der Anweisung `return x` auf und ist zwischen dem Parmeter `x` von `inside` und der Variable `x` von `outside`. Die Scopekette ist hier {`inside`, `outside`, globales Objekt}. Dabei bekommt `x` von `inside` eine höhere Priorität als das `x` von `outside`. und 20 wird statt der 10 zurückgegeben.

## Closures

Closures sind eines der mächtigsten Funktionen von JavaScript. JavaScript unterstützt das Verschachteln von Funktionen und erlaubt der inneren Funktionen den vollen Zugriff auf alle definierten Variablen und Funktionen der äußeren Funktion (und alle anderen Variablen und Funktionen die die äußere Funktion erreichen kann). Jedoch hat die äußere Funktion keinen Zugriff auf die Variablen und Funktione, die in der innere Funktion definiert werden. Das unterstützt mehr oder weniger Sicherheit für die Variablen der inneren Funktion. Wenn die innere Funktion Zugriff auf den Scope der äußeren Funktion hat, müssen die Variablen und Funktionen der äußeren Funktion länger leben, als die Ausführungen der inneren Funktion, weil die innere Funktion das Überleben der äußeren Funktion managet. Eine Closure wird erstellt, wenn die innere Funktion irgendwie in einem äußeren Scope der äußeren Funktion erreichbar gemacht wird.

```js
var pet = function(name) {   // Die äußere Funktion definiert eine Variable "name"
  var getName = function() {
    return name;             // Die innere Funktion hat Zugriff auf die "name" Variable der äußeren Funktion
  }
  return getName;            // gibt die innere Funktion zurück
}
myPet = pet('Vivie');

myPet();                     // gibt "Vivie" zurück
```

Es kann viel komplexer sein, als der oben gezeigte Quelltext. Ein Objekt enthält Methoden zum verändern von inneren Variablen der äußeren Funktion.

```js
var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver
```

Im Quelltext oben ist die `name` Variable der äußeren Funktion in den inneren Funktionen erreichbar und es gibt keine andere Möglichkeit die inneren Variablen zu erreichen, als über die inneren Funktion. Die innere Variable der inneren Funktion fungiert als sicherer Speicher für die äußeren Parameter und Variablen. Sie enthalten permanent und sicher die Daten mit denen die innere Funktion arbeitet. Die Funktion hat niemals eine Variable beschrieben noch hat sie einen Namen.

```js
var getCode = (function() {
  var secureCode = '0]Eal(eh&2';    // Ein Code der nicht von Außerhalb verändert werden soll

  return function () {
    return secureCode;
  };
}());

getCode();    // gibt secureCode zurück.
```

Es gibt aber eine menge von Tücken, die der Einsatz von Closures mit sich bringt. Wenn eine innere Funktion eine Variable definiert, die den gleichen Namen wie eine Variable im äußeren Scope hat, kann die äußere Variable nicht mehr referenziert werden.

```js
var createPet = function(name) {  // Äußere Funktion definiert die Variable "name"
  return {
    setName: function(name) {    // Innere Funktion definiert ebenfalls eine Variable "name"
      name = name;               // Wie referenziert man die Variable "name" der äußeren Funktion?
    }
  }
}
```

## Einsatz des arguments Objekts

Die Argumente einer Funktion werden in einem Array-ähnlichen Objekt gewartet. In einer Funktion können die Argumente wie folgt adressiert werden:

```js
arguments[i]
```

`i` ist die Ordnungsnummer des Arguments, beginnend bei null. So ist das erste übergebene Argument einer Funktion `arguments[0]`. Die Anzahl der übergebenen Argumente ist `arguments.length`.

Mit dem `arguments` Objekt kann man eine Funktion mit mehr Agumenten aufrufen als sie formal deklariert wurden. Das ist oft nützlich, wenn man nicht weiß, wie viele Argumente einer Funktion übergeben werden. Mit `arguments.length` kann die Anzahl der Argumente, die einer Funktion übergeben wurde, ermittelt werden. Über das `arguments` Objekt können dann alle Argumente gelesen werden.

Zum Beispiel kann es eine Funktion geben, die verschieden viele Strings zusammenfügt. Das einzige formale Argument der Funktion ist das Trennzeichen, welches die Zeichen definiert, die zwischen den Strings eingefügt werden. Im folgenden Quelltext ist die Funktion implementiert:

```js
function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
```

Man kann der Funktion jede Anzahl an Argumenten übergeben und die Funktion fügt die Argumente in einem String zusammen:

```js
// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
```

> **Note:** **Hinweis:** Die `arguments` Variable ist "Array-ähnlich", aber kein Array. Es ist Array-ähnlich indem es nummerierte Indizes und eine `length` Eigenschaft hat. Jedoch unterstützt es nicht alle Array-Manipulations-Methoden.

Siehe im {{jsxref("Function")}} Objekt in den JavaScript Referenzen für mehr Informationen.

## Funktionsparameter

Mit ECMAScript 2015, gibt es zwei neue Arten von Parametern: Default-Parameter und Rest-Parameter.

### Default-Parameter

In JavaScript ist der Standardwert eines Parameters `undefined`. In manchen Situationen ist es sinnvoll den Standardwert auf einen anderen Wert zu setzen. Das ist das Einsatzgebiet von Default-Parametern.

In der Vergangenheit war die Strategie für das Setzen von Standardwerten, dass im Körper der Funktion geprüft wird, ob ein Parameter `undefined` ist und ihn in diesem Fall neu zu beschreiben. Wenn im folgenden Beispiel kein Argument `b` übergeben wird, wird dieser `undefined` sein und die Auswertung von `a*b` wird `NaN` sein. Deswegen ist dieser Fall in der zweiten Zeile des Beispiels abgefangen:

```js
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(5); // 5
```

Mit Default-Parametern ist die Überprüfung im Körper der Funktion nicht mehr nötig. Jetzt kann man `1` als Standardwert für `b` im Funktionskopf angeben:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

Für mehr Details, siehe in den Referenzen unter [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Rest-Parameter

Die [Rest-Parameter ](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)Syntax ermöglicht er eine unendliche Anzahl von Argumenten als Array zu repräsentieren. Im Beispiel wird der Rest-Parameter eingesetzt um die alle Argumente ab dem zweiten Argument zu sammeln. Danach werden diese mit dem ersten Parameter multipliziert. Dieses Beispiel benutzt Pfeilfunktionen, welche in nächsten Kapitel erklärt werden:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Pfeilfunktionen

Ein [Pfeilfunktions Ausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) hat eine kürzere Syntax verglichen mit Funktionsausdrücken und bindet lexikalisch den `this` Wert. Pfeilfunktionen sind immer anonym. Sie dazu auch den hacks.mozilla.org Blogbeitrag: "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)".

Zwei Faktoren haben die Einführung von Pfeilfunktionen beeinflusst: kürzere Funktionen und lexikalisches `this`.

### Kürzere Funktionen

In manchen funktionalen Patterns sind kurze Funktionen willkommen. Vergleiche:

```js
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryl­lium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map( s => s.length );

console.log(a3); // logs [8, 6, 7, 9]
```

### Lexikalisches `this`

Bis es Pfeilfunktionen gab, hat jede neue Funktion sein eigenen [this](/de/docs/Web/JavaScript/Reference/Operators/this) Wert definiert (ein neues Objekt in Fällen eines Konstruktors, undefined in Funktionsaufrufen im strict mode, das Kontextobjekt, wenn eine Funktion als Objektmethode aufgerufen wird, etc.). Das ist lästig mit objektorientierten Programmierstilen.

```js
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
```

In ECMAScript 3/5, wurde dieses Problem behoben, indem der Wert der Variablen `this` in einer weiteren Variablen gespeichert wird.

```js
function Person() {
  var self = this; // Some choose `that` instead of `self`.
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```

Alternativ kann eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) erstellt werden, so dass der Wert für `this` mit übergeben werden kann.

Pfeilfunktionen nutzen den `this` Wert des umschließenden Kontextes, so dass der folgende Quelltext wie erwartet funktioniert:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

## Vordefinierte Funktionen

JavaScript hat einige eingebaute Funktionen:

- {{jsxref("Global_Objects/eval", "eval()")}}
  - : Die **`eval()`** Methode wertet JavaScript Quelltext repräsentiert als String aus.
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}
  - : Die **`uneval()`** Methode erstellt einen String der Quelltext eines {{jsxref("Object")}}s repräsentiert.
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
  - : Die globale **`isFinite()`** Funktion ob ein übergebener Wert endlich ist. Der übergebene Wert wird, wenn es nötig ist, zu einer Zahl konvertiert.
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
  - : Die **`isNaN()`** Funktion überprüft, ob ein Wert {{jsxref("Global_Objects/NaN", "NaN")}} ist oder nicht. Hinweis: Wegen einigen Zwängen innerhalb der `isNaN` Funktion gibt es [interessante Regeln](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Beschreibung); alternativ kann auch die in ECMAScript 2015 definierte Funktion Funktion {{jsxref("Number.isNaN()")}} oder der Operator [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) verwendet werden, um einen {{jsxref("Global_Objects/NaN", "NaN")}} Wert zu erkennen.
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
  - : Doe **`parseFloat()`** Funktion liest einen String als Argument ein und gibt eine Gleitkommazahl zurück.
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
  - : Die **`parseInt()`** Funktion liest einen String als Argument ein und gibt eine ganze Zahl der Spezifizierten Basis zurück (die Basis ist in der Mathematik das Zahlensystem).
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
  - : Die **`decodeURI()`** Methode decodiert einen Uniform Resource Identifier (URI), der vorher mit der {{jsxref("Global_Objects/encodeURI", "encodeURI")}} Funktion order einer ähnlichen Funktion erstellt wurde.
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
  - : Die **`decodeURIComponent()`** Methode decodiert eine Uniform Resource Identifier (URI) Komponente, die vorher mit der {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} Funktion oder einer ähnlichen Funktion erstellt wurde.
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
  - : Die **`encodeURI()`** Methode codiert einen Uniform Resource Identifier (URI), indem jedes besondere Zeilen durch eine Sequenz aus zwei drei oder vier Zeichen escaped wird. Dieses Sequenzen Repräsentieren die UTF-8 Darstellung der Zeichen (wird nur vier escape Sequenzen von Zeichen zu zwei zwei Platzhalterzeichen umwandeln)
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
  - : Die **`encodeURIComponent()`** Methode codiert eine Uniform Resource Identifier (URI) Komponente, indem jedes besondere Zeilen durch eine Sequenz aus zwei drei oder vier Zeichen escaped wird. Dieses Sequenzen Repräsentieren die UTF-8 Darstellung der Zeichen (wird nur vier escape Sequenzen von Zeichen zu zwei zwei Platzhalterzeichen umwandeln)
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}
  - : Die veraltete **`escape()`** Methode berechnet einen neuen String indem manche Zeichen durch Hexadezimalsequenzen ersetzt werden. Man sollte {{jsxref("Global_Objects/encodeURI", "encodeURI")}} oder {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} stattdessen benutzen.
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}
  - : Die veraltete **`unescape()`** Methode berechnet einen neuen String indem Hexadezimalsequenzen durch die repräsentierenden Zeichen ersetzt werden. Die Hexadezimalsequenzen können von Funktionen wie {{jsxref("Global_Objects/escape", "escape")}} eingeführt werden. Weil `unescape()` veraltet ist, sollte man stattdessen die Funktion {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} oder {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} benutzen.

{{PreviousNext("Web/JavaScript/Guide/Schleifen_und_Iterationen", "Web/JavaScript/Guide/Ausdruecke_und_Operatoren")}}
