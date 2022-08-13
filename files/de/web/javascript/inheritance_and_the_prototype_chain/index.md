---
title: Vererbung und die Prototypenkette
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
tags:
  - Advanced
  - Guide
  - Inheritance
  - JavaScript
  - OOP
translation_of: Web/JavaScript/Inheritance_and_the_prototype_chain
---
{{jsSidebar("Advanced")}}

JavaScript mag für Entwickler, die in klassenbasierten Sprachen (wie etwa Java oder C++) Erfahrung haben, etwas verwirrend erscheinen. Der Grund dafür ist, dass JavaScript per se keine **`class`**-Implementierung bereitstellt (das **`class`**-Schlüsselwort wurde erst mit ES2015 eingeführt. Es ist jedoch syntaktischer Zucker, JavaScript bleibt Prototyp-basiert).

Wenn es um Vererbung geht, hat JavaScript nur ein Konstrukt anzubieten: Objekte. Jedes Objekt hat eine interne Verbindung zu einem anderen ("älteren") Objekt, welches als sein **Prototyp** bezeichnet wird. Dieses Prototypobjekt hat selbst einen Prototyp, der wiederum selbst einen Prototyp hat. Dies setzt sich fort, bis ein Objekt erreicht wird, dessen Prototyp `null` ist. null hat per Definition keinen Prototyp und bildet somit den Abschluß dieser **Prototypenkette**.

Dies wird oft als eine der Schwächen von JavaScript betrachtet, jedoch ist das Prototypmodell tatsächlich mächtiger als das klassische OO Modell. Es ist zum Beispiel relativ trivial, ein klassisches OO Modell auf einem Prototypmodell zu realisieren.

## Vererbung mit der Prototypenkette

### Vererbung von Eigenschaften

Objekte in JavaScript sind dynamische "Behälter" von Eigenschaften, welche auch seine "eigenen Eigenschaften" (**own properties**) genannt werden. JavaScript-Objekte haben eine Verknüpfung zu einem Prototypobjekt. Beim Versuch auf eine Objekteigenschaft zuzugreifen, wird die Eigenschaft nicht nur in dem Objekt selbst, sondern auch in seinem Prototyp, dem Prototyp des Prototyps, usw. gesucht. Dies wird so lange fortgesetzt, bis eine Eigenschaft mit entsprechendem Namen gefunden wurde oder das Ende der Prototypenkette erreicht ist.

> **Note:** Gemäß des ECMAScript-Standards, wird die Notation `someObject.[[Prototype]]` verwendet, um den Prototyp von `someObject` zu bezeichnen. Das ist äquivalent zu der JavaScript-Eigenschaft `__proto__ `(jetzt veraltet). Dies sollte nicht mit der `func.prototype` Eigenschaft von Funktionen verwechselt werden, welche stattdessen den `[[Prototype]]` von allen _Instanzen_ der entsprechenden Funktion spezifiziert. Seit ECMAScript 6 wird auf den `[[Prototype]]` mit Hilfe der Methoden {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} zugegriffen.

Folgendes passiert bei dem Versuch auf eine Eigenschaft zuzugreifen:

```js
// Angenommen, wir haben ein Objekt o, mit eigenen Eigenschaften a und b:
// {a: 1, b: 2}
// o.[[Prototype]] hat die Eigenschaften b und c:
// {b: 3, c: 4}
// Letztendlich ist o.[[Prototype]].[[Prototype]] null.
// Das ist das Ende der Prototypenkette, wobei null selbst
// keinen Prototyp mehr besitzt
// Daher sieht die gesamte Prototypenkette wie folgt aus:
// {a:1, b:2} ---> {b:3, c:4} ---> null

console.log(o.a); // 1
// Gibt es eine eigen Eigenschaft 'a' im Objekt o? Ja, und ihr Wert ist 1.

console.log(o.b); // 2
// Gibt es eine eigene Eigenschaft 'b' im Objekt o? Ja, und ihr Wert ist 2.
// Sein Prototyp hat auch eine 'b'-Eigenschaft, sie wird jedoch nicht
// berücksichtigt. Das nennt man "property shadowing"

console.log(o.c); // 4
// Gibt es eine eigene Eigenschaft 'c' im Objekt o?
// Nein, schaue im Prototyp.
// Gibt es eine eigene Eigenschaft 'c' in o.[[Prototype]]? Ja, ihr Wert ist 4.

console.log(o.d); // undefined
// Gibt es eine eigene Eigenschaft 'd' im Objekt o? Nein, schaue im Prototyp!
// Gibt es eine eigene Eigenschaft 'd' in o.[[Prototype]]? Nein, schaue im Prototyp!
// o.[[Prototype]].[[Prototype]] ist null, Ende der Suche.
// Keine Eigenschaft gefunden. Es wird undefined zurückgegeben.
```

Das Hinzufügen einer Eigenschaft zu einem Objekt erzeugt eine dem Objekt eigene Eigenschaft. Die einzige Ausnahme zu den beschriebenen Regeln beim Setzen und Abrufen von Eigenschaften besteht, wenn eine geerbte Eigenschaft mit einem [Getter oder Setter](/de/docs/Web/JavaScript/Guide/Mit_Objekten_arbeiten#Defining_getters_and_setters) existiert.

### Vererben von "Methoden"

JavaScript hat keine "Methoden" wie diese bei Klassen-basierten Sprachen definiert werden. In JavaScript kann jede Funktion als eine normale Eigenschaft zu einem Objekt hinzugefügt werden. Eine vererbte Funktion verhält sich demnach genau wie jede andere Eigenschaft, inklusive "property shadowing" wie oben gezeigt (in diesem Fall ist das eine Art der _Überschreibung von Methoden_).

Wenn eine vererbte Funktion ausgeführt wird, zeigt der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this "this") zum erbenden Objekt und nicht zu dessen Prototyp, in dem diese Funktion eine eigene Eigenschaft (own property) ist.

```js
var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// Beim Aufruf von o.m referenziert 'this' hier das Objekt o.

var p = Object.create(o);
// p ist ein Objekt, welches von o erbt.

p.a = 4; // erzeugt ein Eigenschaft 'a' in p
console.log(p.m()); // 5
// Wird p.m aufgerufen, referenziert 'this' hier das Objekt p.
// Wenn also p die Funktion m von o erbt,
// 'this.a' referenziert p.a, der Eigenschaft 'a' in p.
```

## Verschiedene Wege, Objekte zu erzeugen und die resultierende Prototypenkette

### Objekte mit Syntax Konstrukten erzeugen

```js
var o = {a: 1};

// Das erzeugte Objekt o hat Object.prototype als seinen [[Prototype]]
// o hat keine eigene Eigenschaft namens 'hasOwnProperty'.
// hasOwnProperty ist eine eigene Eigenschaft von Object.prototype.
// Objekt o erbt hasOwnProperty von Object.prototype,
// Object.prototype wiederum hat null als Prototyp:
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays erben von Array.prototype
// (der Methoden wie indexOf, forEach, etc. hat)
// Die Prototypenkette sieht also so aus:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functionen erben von Function.prototype
// (der Methoden wie call, bind, etc. enthält):
// f ---> Function.prototype ---> Object.prototype ---> null
```

### Mittels Constructor

Ein "constructor" ist in JavaScript lediglich eine Funktion, die mit dem [new Operator](/de/docs/Web/JavaScript/Reference/Operators/new "new") aufgerufen wird.

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g ist ein Objekt mit eigenen Eigenschaften 'vertices' und 'edges'.
// g.[[Prototype]] ist der Wert von Graph.prototype, wenn new Graph() ausgeführt wird.
```

### Mit `Object.create`

ECMAScript 5 führte eine neue Methode ein: {{jsxref("Object.create()")}}. Der Aufruf dieser Methode erzeugt ein neues Objekt. Der erste Parameter dieser Methode ist der Prototyp des neu erzeugten Objekts:

```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (vererbt)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, denn d erbte nicht von Object.prototype
```

### Mit dem `class` Schlüsselwort

ECMAScript 6 führt einige neue Schlüsselwörter ein, um [Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu implementieren. Obwohl diese Konstrukte aussehen wie die, die Entwicklern aus Klassen-basierten Sprachen bekannt sind, verhalten sie sich doch anders. JavaScript bleibt Prototyp-basiert. Zu den neuen Schlüsselwörtern gehören {{jsxref("Statements/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}, {{jsxref("Classes/static", "static")}}, {{jsxref("Classes/extends", "extends")}}, und {{jsxref("Operators/super", "super")}}.

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

### Performance

Der Zugriff auf Eigenschaften, die sich weit oben in der Prototypenkette befinden, kann negativen Einfluss auf die Performance haben. Dies kann in Performance-kritischen Situationen zu Problemen führen. Hinzu kommt, dass beim Versuch, auf nicht existierende Eigenschaften zuzugreifen, immer die gesamte Prototypenkette durchlaufen wird.

Beim Iterieren über die Eigenschaften von Objekten wird über **jede** aufzählbare Eigenschaft iteriert, die auf der Prototypenkette vorkommt.

Um zu prüfen, ob ein Objekt eine Eigenschaft an sich _selbst_ definiert hat (own property) und nicht von der Prototypenkette geerbt hat, muss die Funktion [`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty") benutzt werden, die alle Objekte vom `Object.prototype` erben.

[`hasOwnProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty "/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty") ist das einzige Konstrukt in JavaScript das beim Umgang mit Eigenschaften von Objekten **nicht** die Prototypenkette durchläuft.

Hinweis: Es reicht **nicht** aus, zu prüfen, ob eine Eigenschaft [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) ist, um deren Existenz zu pfüfen. Die Eigenschaft könnte durchaus existieren, aber ihr aktueller Wert könnte aktuell explizit auf `undefined` gesetzt worden sein.

### Bad practice: Erweiterung von nativen Prototypen

Ein oft anzutreffendes "Feature" ist es, den `Object.prototype` oder einen anderen eingebauten Prototypen zu erweitern.

Diese Technik, die als "monkey patching" bezeichnet wird, zerstört die _Kapselung_. Auch wenn diese Technik in populären Frameworks wie Prototype.js benutzt wird, gibt es dennoch keinen guten Grund dafür, die eingebauten Prototypen mit zuätzlicher, nicht-standard Funktionalität anzureichern.

Der **einzige** gute Grund für die Erweiterung von eingebauten Prototypen ist es, Features neuerer JavaScript Engines zurück zu portieren, beipielsweise `Array.forEach`, etc.

## Beispiel

`B` soll erben von `A`:

```js
function A(a){
  this.varA = a;
}

// Was ist der Sinn darin, varA in den Prototyp aufzunehmen, wenn A.prototype.varA immer überschrieben wird von
// this.varA, vorausgesetzt Funktion A wird wie oben gezeigt definiert?
A.prototype = {
  varA : null,  // Sollte varA nicht vom Prototyp entfernt werden, da nicht benötigt wird?
      // Vielleicht ist es eine Optimierung, um den Platz in versteckten Klassen zu allozieren?
      // https://developers.google.com/speed/articles/optimizing-javascript#initializing-instance-variables
      // wäre ein valides Argument, wenn varA nicht individuell für jede Instanz initialisiert würde
  doSomething : function(){
    // ...
  }
}

function B(a, b){
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB : {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true
  },
  doSomething : {
    value: function(){ // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

Die wichtigsten Stellen hier sind:

- Typen werden in `.prototype` definiert
- `Object.create()` wird benutzt um zu vererben

## `prototype` und `Object.getPrototypeOf`

JavaScript kann etwas verwirrend sein für Entwickler, die aus der Java- oder C++ Welt kommen, da es komplett dynamisch ist, alles zur Laufzeit passiert und es keine Klassen hat. Alles dreht sich um Instanzen (Objekte). Sogar die "Klassen", die wir simulieren sind nur Funktions-Objekte.

Wahrscheinlich hast Du bereits erkannt, dass unsere `function A` eine spezielle Eigenschaft namens `prototype` hat. Diese spezielle Eigenschaft agiert mit dem JavaScript `new `operator. Die Referenz des Prototypobjektes wird dabei in die interne `[[Prototype]]` Eigenschaft der neu erzeugten Instanz kopiert. Wenn man beispielsweise `var a1 = new A()` ausführt, setzt JavaScript (nachdem das Objekt im Speicher erzeugt und ehe function `A()` - mit `this` auf das neue Objekt definiert - ausgeführt wurde) `a1.[[Prototype]] = A.prototype`. Wenn dann auf Eigenschaften der Instanz zugegriffen wird, prüft JavaScript zuerst, ob diese an der Instanz existieren ehe es in `[[Prototype]]` danach schaut. Das heisst, das alles, was an der `prototype` Eigenschaft definiert wird, in allen Instanzen verfügbar ist. Die Eigenschaften in `prototype` könnten sogar später geändert werden und wären somit in allen existierenden Instanzen geändert.

Wenn man im Beispiel von oben also `var a1 = new A(); var a2 = new A();` schreibt, dann würde `a1.doSomething` eigentlich auf `Object.getPrototypeOf(a1).doSomething` referenzieren, welches identisch ist mit `A.prototype.doSomething`, das am Anfang definiert wurde. Somit ist: `Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething`.

Kurz gesagt ist `prototype` für Typen gedacht, während `Object.getPrototypeOf()` für alle Instanzen das Gleiche ist.

`[[Prototype]]` wird _rekursiv_ durchlaufen, das heisst:
`a1.doSomething`,
`Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething`
etc., bis es gefunden wurde oder `Object.getPrototypeOf` null zurück gibt.

Wenn man also folgendes aufruft:

```js
var o = new Foo();
```

... macht JavaScript eigentlich dies:

```js
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

(oder ähnlich) und wenn man danach Folgendes aufruft:

```js
o.someProp;
```

wird geprüft, ob `o` eine Eigenschaft namens `someProp` hat. Falls nicht, wird nach `Object.getPrototypeOf(o).someProp` gesucht und wenn dies auch nicht existiert, dann in `Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp` und so weiter.

## Zusammenfassung

Es ist essentiell das Modell der Prototypischen Vererbung zu verstehen ehe man komplexen Code schreibt, der darauf aufbaut. Man sollte sich außerdem über die Länge der Prototypenkette im Klaren sein und diese ggf. stückeln, um Performance-Problemen vorzubeugen. Außerdem sollten die eingebauten Prototypen niemals erweitert werden, außer es dient der Kompatibilitär mit neueren JavaScript-Features.
