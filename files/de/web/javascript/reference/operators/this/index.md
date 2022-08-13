---
title: this
slug: Web/JavaScript/Reference/Operators/this
tags:
  - JavaScript
  - Operator
  - Primary Expressions
  - Reference
translation_of: Web/JavaScript/Reference/Operators/this
---
{{jsSidebar("Operators")}}

Das **this Schlüsselwort einer Funktion** in JavaScript verhält sich verglichen mit anderen Sprachen ein bisschen anders. Es gibt zudem Unterschiede zwischen dem [strict Modus](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) und nicht strict Modus.

In den meisten Fällen ist der Wert von `this` der Aufrufer der Funktion. Der Wert kann nicht während der Ausführung zugewiesen werden und kann sich jedes Mal, wenn die Funktion aufgerufen wird unterscheiden. ES5 führte die [`bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) Methode ein, [um den Wert vom `this` einer Funktion zu setzen (egal, wie sie aufgerufen wird)](#Die_bind_Methode). ECMAScript 2015 hat die [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) implementiert, die kein eigenes `this` besitzt (`this` verweist auf das `this` des umschließenden Ausführungskontextes).

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## Syntax

    this

## Globaler Kontext

Im globalen Ausführungskontext (außerhalb jeder Funktion), referenziert `this` auf das globale Objekt, egal ob im strict Modus oder nicht.

```js
// Im Webbrowser ist das window Objekt das globale Objekt:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b);  // "MDN"
console.log(b);         // "MDN"
```

## Funktionskontext

Innerhalb einer Funktion hängt der Wert von `this` davon ab, wie die Funktion aufgerufen wird.

### Einfacher Aufruf

Weil der folgende Code nicht im [strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist und weil `this` nicht vom Aufruf gesetzt wird, referenziert `this` das globale Objekt, welches in einem Browser `window` ist.

```js
function f1(){
  return this;
}

// In einem Browser:
f1() === window; // true

// In Node:
f1() === global; // true
```

Im strict Modus bleibt der Wert von `this` jedoch auf dem Wert, auf den er beim Eingeben des Ausführungskontextes festgelegt wurde. Im folgenden Fall wird dies standardmäßig auf `undefined` sein:

```js
function f2(){
  "use strict"; // see strict mode
  return this;
}

f2() === undefined; // true
```

Wenn `this` im **strict Modus** nicht vom Ausführungskontext definiert wird, bleibt dieser `undefined`.

> **Note:** Im zweiten Beispiel sollte `this` [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) sein, weil `f2` direkt und nicht als eine Methode oder Eigenschaft eines Objektes (z. B. `window.f2()`) aufgerufen wird. Diese Funktionalität war noch nicht in allen Browsern implementiert, als der Support für den strict Modus gestartet wurde. Als Folge, gaben diese fälschlicherweise das `window` Objekt zurück.

Um den Wert von `this` von einem in den anderen Kontext zu überführen, benutzt man [call](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [apply](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)**:**

```js
// Ein Objekt kann als erstes Argument beim Aufruf von call oder apply benutzt werden
// welches an den Aufruf gebunden wird.
var obj = {a: 'Custom'};

// Dieses Objekt wird auf dem globalen Objekt definiert
var a = 'Global';

function whatsThis() {
  return this.a; // Der Wert von this hängt davon ab, wie die Funktion aufgerufen wird.
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

Wenn eine Funktion das `this` Schlüsselwort im Körper verwendet, kann dessen Wert an ein Objekt gebunden werden, wenn die [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) oder [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) Methode genutzt wird, die alle Funktion von `Function.prototype` erben.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// Der erste Parameter ist das Objekt, welches als
// 'this' genutzt wird. Alle weiteren Parameter werden als
// Argumente für den Funktionsaufruf benutzt.
add.call(o, 5, 7); //16

// Der erste Parameter ist das Objekt, welches als
// 'this' genutzt wird. Der zweite Parameter ist ein Array.
// Dessen Elemente werden als Argumente für den Funktionsaufruf benutzt.
add.apply(o, [10, 20]); // 34
```

Bei `call` und `apply` ist zu beachten, dass wenn der für `this` übergebene Wert kein Objekt ist, wird dieser mit der internen Operation `ToObject` zu einem Objekt konvertiert. Ist der übergebene Wert ein primitiver Typ wie `7` oder `'foo'`, wird dieser mit einem zugehörigen Konstruktor zu einem Objekt konvertiert, so dass die primitive Nummer `7` mit `new Number(7)` und `'foo'` mit `new String('foo')` zu ein Objekt konvertiert wird.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]
```

### Die `bind` Methode

ECMAScript 5 hat [`Function.prototype.bind`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) eingeführt. Der Aufruf von `f.bind(someObject)` erstellt eine neue Funktion mit dem selben Körper und Gültigkeitsbereich von `f`, aber `this` unterscheidet sich zur original Funktion. In der neuen Funktion ist `this` permanent mit dem Parameter von `bind` gebunden, egal wie die Funktion benutzt wird.

```js
function f(){
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind funktioniert nur einmal!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(), o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

### Pfeilfunktionen

In [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), wird `this` auf das `this` des umschließenden lexikalischen Kontextes gesetzt. In globalem Code wird es auf das globale Objekt gesetzt.

```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

> **Note:** Hinweis: Wenn das this Argument von call, bind oder apply auf einer Pfeilfunktion benutzt werden, wird dieser ignoriert. Man kann dem Aufruf weitere Argumente hinzufügen, das erste Argument (thisArg) sollte aber null sein.

```js
// Aufruf als Methode eines Objektes
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true

// Versuch this mit call zu setzen
console.log(foo.call(obj) === globalObject); // true

// Versuch this mit bind zu setzen
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

Es ist egal, auf welches `this` für `foo` beim erstellen gesetzt wurde (im Beispiel oben das globale Objekt). Das selbe gilt für Pfeilfunktionen, die in einer anderen Funktion erstellt werden: ihr `this` wird auf das `this` des äußeren Ausführungskontext gesetzt.

```js
// Erstellt obj mit einer Methode bar, die eine Funktion zurück gibt,
// die ihr this zurück gibt. Die zurückgegebene  Funktion wird als
// Pfeilfunktion erstellt, so dass ihr this permanent an die umschließende
// Funktion gebunden ist. Der Wert von bar kann im Aufruf festgelegt werden,
// der wiederum den Wert der zurückgegebenen Funktion festlegt.
var obj = { bar : function() {
                    var x = (() => this);
                    return x;
                  }
          };

// Der Aufruf von bar als Methode von obj, setzt das this auf obj,
// Weist eine Referenz der zurückgegebenen Funktion fn zu.
var fn = obj.bar();

// Aufruf von fn ohne this zu setzen, wird normalerweise zum
// golbalen Objekt oder undefined im strict Modus führen.
console.log(fn() === obj); // true

// Aber achtung, wenn man die Methode von obj referenziert ohne sie aufzurufen
var fn2 = obj.bar;
// Wenn dann die Pfeilfunktion aufgerufen wird, ist this gleich dem globalen Objekt,
// weil es dem this von bar folgt.
console.log(fn2()() == window); // true
```

Im oberen Beispiel, gibt die Funktion (nennen wir sie anonyme Funktion A), die zu `obj.bar` zugewiesen ist, gibt eine andere Funktion (nennen wir sie anonyme Funktion B) zurück, die als Pfeilfunktion erstellt wurde. Als Ergebnis ist das `this` von B permanent das `this` von `obj.bar` (Funktion A) beim Aufruf. Wenn die zurückgegebene Funktion (Funktion B) aufgerufen wird, ist der `this` Wert immer der, der er initial war. Im obigen Beispielcode ist das `this` der Funktion B auf das `this` der Funktion A gesetzt, welches obj ist, so dass es auf `obj` gesetzt bleibt, während hingegen normalerweise `this` `undefined` oder das globale Objekt (oder jede andere Methode wie im vorherigen Beispiel im globalen Ausführungskontext) ist.

### Alseine Objektmethode

Wenn eine Funktion als Methode eines Objektes aufgerufen wird, hat `this` eine Referenz auf das Objekt, auf dem die Methode aufgerugen wurde.

Im folgenden Beispiel ist `this` innerhalb der Funktion auf `o` gebunden, wenn `o.f()` ausgeführt wird.

```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

Zu beachten ist, dass dieses Verhalten nicht davon beeinflusst ist wie und wo die Funktion definiert ist. Im folgenden Beispiel definierten wir eine Inlinefunktion `f` als Eigenschaft von `o`. Man könnte auch einfach die Funktion zuerst definieren und diese dann `o.f` zuweisen. Dieses hat das selbe Ergebnis zur Folge:

```js
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37
```

Das demonstriert, dass es nur wichtig ist, dass die Funktion als Eigenschaft `f` des Objektes `o` aufgerufen wurde.

Genauso ist die `this` Bindung nur von der unmittelbaren Mitgliederreferent beeinflusst. Im folgenden Beispiel, wenn die Funktion aufgerufen wird, wird diese als Methode `g` des Objektes `o.b` aufgerufen. Während der Ausführung referenziert `this` in der Funktion `o.b`. Der Fakt, dass das Objekt selbst eine Eigenschaft von `o` ist, hat keine Konsequenz, nur die unmittelbare Referenz ist wichtig.

```js
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // logs 42
```

#### `this` auf der Objektprototypenkette

Das selbe gilt für Methoden, die irgendwo auf der Objektprototypenkette definiert werden. Wenn die Methode auf einer Objektprototypenkette ist, referenziert `this` zu dem Objekte, auf dem die Methode aufgerufen wurde, so als währe die Methode auf dem Objekt.

```js
var o = {f: function() { return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

In diesem Beispiel hat das Objekt, welches der Variablen `p` zugewiesen wird, nicht ihre eigene `f` Eigenschaft, es erbt sie von seinem Prototyp. Aber es spielt keine Rolle, ob die Suche nach `f` eventuell eine Eigenschaft/Methode auf dem Objekt `o` findet; Die Suche begann als eine Referenz zu `p.f`, so hat `this` in der Funktion eine Referenz zu dem Objekt `p`. Weil `f` als Methode von `p` aufgerufen wurde, referenziert `this` `p`. Dieses ist eine interessante Funktion von JavaScripts's Prototypenvererbung.

#### `this` mit Gettern oder Settern

Wieder das selbe gilt für für Funktionen, die als Getter oder Setter aufgerufen werden. Eine Funktion, die als Getter oder Setter benutzt wird, hat `this` zu dem Objekt gebunden, auf dem der Getter oder Setter aufgerufen wurde.

```js
function sum(){
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average(){
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable:true, configurable:true});

console.log(o.average, o.sum); // logs 2, 6
```

### Als ein Konstruktor

Wenn eine Funktion als Konstruktor verwendet wird (mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Schlüsselwort), ist `this` an das neu erstellte Objekt gebunden.

> **Note:** Weil der Standard für einen Konstruktor besagt, dass das Objekt, welches auf `this` referenziert, zurückgegeben wird, kann stattdessen ein anderes Objekt zurückgegeben werden (wenn der Rückgabewert kein Objekt ist, wird `this` zurückgegeben).

```js
/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38
```

Im letzen Beispiel (`C2`) wird das gebundene `this` Objekt verworfen, weil während des Erstellens ein anderes Objekt zurückgegeben wird. (Das macht das Statement `this.a = 37;` zu todem Code. Er ist nicht ganz tod, weil er ausgeführt wird, aber entfernt werden kann ohne einen Effekt zu haben.)

### Als ein DOM Eventhandler

Wenn eine Funktion als Eventhandler genutzt wird, wird sein `this` auf das Element, welches das Event feuert, gesetzt (manche Browser folgen dieser Konvention nicht für das dynamische hinzufügen von Methoden nicht über `addEventListener`).

```js
// When called as a listener, turns the related element blue
function bluify(e){
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
```

### In einem Inlineeventhandler

Wenn Code in einem inline [on-event Handler](/de/docs/Web/Guide/Events/Event_handlers) aufgerufen wird, wird `this` auf das DOM Element gesetzt, auf dem der Listener aufgerufen wird:

```js
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

Der obere Alert zeigt `button`. Zu beachten ist, dass nur bei äußerem Code das `this` so gesetzt wird:

```js
<button onclick="alert((function(){return this}()));">
  Show inner this
</button>
```

In diesem Fall ist das `this` der inneren Funktion nicht gesetzt, so dass das globale/window Objekt zurückgegeben wird (z. B. das Standardobjekt in nicht strict Modus, wo `this` nicht vom Aufruf gesetzt wird).

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                                          |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-this-keyword', 'The this keyword')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-this-keyword', 'The this keyword')}}     | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ES5.1', '#sec-11.1.1', 'The this keyword')}}         | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES3', '#sec-11.1.1', 'The this keyword')}}             | {{Spec2('ES3')}}         |                                                    |
| {{SpecName('ES1', '#sec-11.1.1', 'The this keyword')}}             | {{Spec2('ES1')}}         | Erste Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.operators.this")}}

## Siehe auch

- [Strict Modus](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- [Gentle explanation of 'this' keyword in JavaScript](http://rainsoft.io/gentle-explanation-of-this-in-javascript/)
