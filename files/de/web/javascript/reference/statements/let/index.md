---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - JavaScript
  - Statement
  - Variable declaration
  - Variables
  - let
translation_of: Web/JavaScript/Reference/Statements/let
---
{{jsSidebar("Statements")}}

Das Schlüsselwort **`let`** deklariert eine Variable im Gültigkeitsbereich des lokalen Blocks. Optional wird die Variable mit einem Wert initialisiert. **let** leitet sich vom englischen Verb "to let" ab, so daß man die Zeile "let x = 3" lesen kann als: "lassen wir x 3 sein" (let x be three), bekannt aus der Programmiersprache BASIC.

## Syntax

    let var1 [= wert1] [, var2 [= wert2]] [, ..., varN [= wertN]];

### Parameter

- `var1`, `var2`, …, `varN`
  - : Variablenname. Jeder legale Bezeichner ist erlaubt.
- `wert1`, `wert2`, …, `wertN`
  - : Initialwerte der Variablen. Jeder legale Ausdruck ist erlaubt.

## Beschreibung

`let` ermöglicht es Variablen zu deklarieren, deren Gültigkeitsbereich auf den Block, den Befehl oder den Ausdruck beschränkt ist, in dem sie deklariert sind. Der Unterschied zum [`var`](/de/docs/JavaScript/Reference/Statements/var) Schlüsselwort ist, dass der Gültigkeitsbereich auf Blöcke und nicht auf Funktionen bzw. Global beschränkt ist.

### Regeln für Gültigkeitsbereiche

Variablen, die mit `let` deklariert werden, haben als Gültigkeitsbereich den Block in dem sie definiert wurden und alle weiteren Unterblöcke in denen sie nicht neu definiert werden. In dieser Hinsicht funktioniert `let` ähnlich wie `var`. Der Unterschied besteht darin, dass der Gültigkeitbereich bei `var` Deklarierten Variablen die umschließende Funktion ist:

```js
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // gleiche Variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // andere variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
```

Auf der ersten Ebene von Programmen und Funktionen erzeugt `let` im globalen Objekt keine Property, `var` hingegen schon. Deshalb ist `this.y` im folgenden Beispiel `undefined`.

```js
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### Private Eigenschaften emulieren

Beim Einsatz von [Konstruktoren](/de/docs/Glossary/Konstruktor) können **`let`**-Deklarationen (alternativ zu [Closures](/de/docs/Web/JavaScript/Closures)) genutzt werden, um private Eigenschaften in mehreren Methoden zu verwenden.

```js
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

Das selbe Kapselungsmuster mit Funktionsabschlüssen über lokale Variablen kann mit `var` erstellt werden, aber dieses benötigt dann funktionsweite Sichtbarkeit (üblicherweise eine IIFE im Modulmuster) anstatt nur blockweite Sichtbarkeit wie das obenstehende Beispiel.

### Redeklarationen

Erneute Deklaration derselben Variable innerhalb desselben Gültigkeitsbereiches erzeugt einen Syntaxfehler ({{jsxref("SyntaxError")}}).

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

Der Körper einer [`switch`](/de/docs/JavaScript/Reference/Statements/switch)-Anweisung ist nur ein einzelner Block, weshalb das folgende Beispiel einen Fehler verursacht.

```js example-bad
let x = 1;
switch(x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

Ist innerhalb einer case-Klausel jedoch ein innerer Block eingebettet, erzeugt dieser seinen eigenen lexikalischen Gültigkeitsbereich. Das folgende Beispiel erzeugt deshalb keine solchen Redeklarations-Fehler, wie sie im vorangegangenen Beispiel auftraten.

```js
let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

### Sauberer Quelltext in inneren Funktionen

`let` macht den Programmcode manchmal leserlicher, wenn innere Funktionen eingesetzt werden.

```js
var list = document.getElementById("list");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}
```

Dieses Beispiel funktioniert wie erwartet, weil alle fünf Instanzen der anonymen inneren Funktionen auf verschiedene Instanzen der Variable `j` zugreifen. Wenn stattdessen `var` verwendet wird oder in der inneren Funktion statt `j` zu deklarieren `i` benutzt wird, funktioniert dies nicht.

### Zeitweilig tote Zonen und Fehler mit `let`

In ECMAScript 2015, werden Deklarationen mit `let` nicht an den Anfang des Blocks verschoben (hoist). Wird eine Variable vor der Deklaration in einem Block referenziert, führt dies zu einem [`ReferenceError`](/de/docs/JavaScript/Reference/Global_Objects/ReferenceError), weil sich die Variable bei Eintritt in den Block bis zur Verarbeitung der Deklaration in einer "zeitweilig toten Zone" (temporal dead zone) befindet.

```js
function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}
```

Ein [`switch`](/de/docs/JavaScript/Reference/Statements/switch) Block besteht nur aus einem Block, so dass Fehler wie im folgenden Beispiel auftreten können.

```js
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError für erneute Deklaration
    break;
}
```

### Ein weiteres Beispiel zeitweilig toter Zonen mit lexikalischen Gültigkeitsbereichen

Aufgrund seines lexikalischen Gültigkeitsbereiches wird der Bezeichner **"foo"** im untenstehenden Ausdruck `(foo + 55)` als das foo des if-Blocks interpretiert, **nicht** aber als die verdeckte Variable foo mit dem Wert 33.
Bei Auswertung des Ausdrucks existiert das foo des if-Blocks bereits im lexikalischen Gültigkeitsbereich, hat seine Initialisierung (welche Teil derselben Anweisung ist) aber noch nicht erreicht (und auch nicht **abgeschlossen**). Folglich ist es noch immer in seiner zeitweilig toten Zone.

```js example-bad
function test(){
   var foo = 33;
   if (true) {
      let foo = (foo + 55); // ReferenceError
   }
}
test();
```

Dieses Phänomen kann in einer Situation wie der folgenden verwirren. Die Anweisung `let n of n.a` gehört bereits zum eigenen Gültigkeitsbereich des Blocks der for-Schleife. Der Bezeichner **"n.a"** wird als Eigenschaft 'a' des Objektes 'n' interpretiert, welches im ersten Teil derselben Anweisung deklariert wird ("let n"). Dieses befindet sich noch immer in seiner zeitweilig toten Zone, da bei Auswertung des Ausdrucks die Deklarationsanweisung als noch nicht erreicht und **abgeschlossen** gilt.

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) { // ReferenceError
    console.log(n);
  }
}

go({a: [1, 2, 3]});
```

## Nicht-standardisierte `let` Ausdrücke

### `let` Blöcke

> **Warning:** Die Unterstützung für `let` Blöcke wurde in Gecko 44 entfernt ({{bug(1167029)}}).

**`let` Blöcke** ermöglichen es Werte von Variablen in einem Block zu bearbeiten, ohne gleichnamige Variablen außerhalb des Blocks zu beeinflussen.

#### Syntax

    let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) block;

#### Beschreibung

Der `let` Block unterstützt lokales Scoping für Variablen. Es funktioniert mit dem Binden von keiner oder mehreren Variablen im lexikalischen Scope eines einzigen Blocks. Ansonsten ist es genau das selbe wie ein Block Statement. Zu beachten ist, dass Variablen, die innerhalb des `let` Blocks mit `var` definiert werden auch außerhalb des Blocks verfügbar sind, weil diese an die Funktion gebunden werden. Wenn ein `let` Block-Syntax benutzt wird, ist das `let` gefolgt von runden Klammern zwingend notwendig. Fehler beim benutzen führen zu einem Syntaxerror.

#### Beispiel

```js
var x = 5;
var y = 0;

let (x = x+10, y = 12) {
  console.log(x+y); // 27
}

console.log(x + y); // 5
```

Die Regeln für den Codeblock sind die gleichen wie für alle anderen Blöcke in JavaScript. Er hat seine Eigenen lokalen Variablen, die mit `let` deklariert sind.

#### Regeln für Gültigkeitsbereiche

Die Sichtbarkeit von mit `let` definierten Variablen ist der `let` Block selbst und auch jeder weitere innere Block in diesem Block, wenn die inneren Blöcke keine Variablen mit dem gleichen Namen definieren.

### `let` Ausdrücke

> **Warning:** Die Unterstützung für `let` Blöcke wurde in Gecko 41 entfernt ({{bug(1023609)}}).

Der **`let` Ausdruck** setzt die Sichtbarkeit einer Variablen auf nur einen Ausdruck.

#### Syntax

    let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;

#### Beispiel

Man kann `let` benutzen, um Variablen nur für einen Ausdruck zu benutzen:

```js
var a = 5;
let(a = 6) console.log(a); // 6
console.log(a); // 5
```

#### Regeln für Gültigkeitsbereiche

Gegeben ist folgender `let` Ausdruck:

    let (decls) expr

Es wird ein impliziter Block um _expr_ erstellt.

## Name

Die Erklärung, daß **let** von englisch "to let sth. be sth." abgeleitet ist und so "**let**" als Name (reserviertes Wort) ausgewählt wurde, ist [hier (englisch)](https://stackoverflow.com/questions/37916940/js-why-let-have-this-name) zu finden.

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| {{SpecName('ES2015', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ES2015')}}     | Initiale Definition. Definiert keine let Ausdrücke und let Blöcke. |
| {{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}} | {{Spec2('ESDraft')}} |                                                                    |

## Browserkompatibilität

{{Compat}}

## Firefox-spezifische Hinweise

- Vor SpiderMonkey 46 {{geckoRelease(46)}}, wurde ein {{jsxref("TypeError")}} statt einem {{jsxref("SyntaxError")}} erzeugt, wenn Neudeklarationen durchgeführt wurden ({{bug(1198833)}}, {{bug(1275240)}}).
- Vor SpiderMonkey 44 {{geckoRelease(44)}}, war `let` nur in Quelltexten verfügbar, die im HTML durch ein `<script type="application/javascript;version=1.7">` Block umfasst wurden (oder höhere Versionen) und hatte eine andere Semantik.
- Die Unterstützung in {{domxref("Worker")}} Codes ist hinter dem `dom.workers.latestJSVersion` flag versteckt ({{bug(487070)}}). Mit versionsfreiem `let`, wird das Flag für diese Funktion entfernt ({{bug(1219523)}}).
- ES2015-Einhaltung für `let` für SpIderMonkey wird in {{bug(950547)}} nachverfolgt.

## Siehe auch

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)[(englisch)](http://stackoverflow.com/questions/37916940/js-why-let-have-this-name)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)[(englisch)](http://stackoverflow.com/questions/37916940/js-why-let-have-this-name)
- [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md)[(englisch)](http://stackoverflow.com/questions/37916940/js-why-let-have-this-name)
