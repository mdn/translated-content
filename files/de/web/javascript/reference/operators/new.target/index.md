---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Operators/new.target
---
{{JSSidebar("Operators")}}

Die **`new.target`** Eigenschaft lässt erkennen, ob eine Funktion oder ein Konstruktor mit dem [new](/de/docs/Web/JavaScript/Reference/Operators/new) Operator aufgerufen wurde. In Konstruktoren und Funktionen die mit dem [new](/de/docs/Web/JavaScript/Reference/Operators/new) Operator instanziiert wurde, gibt `new.target` eine Referenz zu dem Konstruktor oder der Funktion zurück. In normalen Funktionsaufrufen hat `new.target` den Wert {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## Syntax

    new.target

## Beschreibung

Die `new.target` Syntax besteht aus dem Schlüsselwort `"new"`, einem Punkt und dem Eigenschaftnamen `"target"`. Normalerweise steht `"new."` für einen Eigenschaftszugriff, jedoch ist `"new."` kein Objekt. In Konstruktoraufrufen referenziert `new.target` auf den Konstruktor, der mit `new` aufgerufen wurde und somit bekommt `"new."` einen virtuellen Kontext.

Die `new.target` Eigenschaft ist eine Metaeigenschaft, die in allen Funktionen erreichbar ist. In [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) referenziert `new.target` zum `new.target` der umschließenden Funktion.

## Beispiele

### `new.target` in Funktionsaufrufen

In normalen Funktionsaufrufen (im Gegensatz zu Konstruktorfunktionsaufrufen) ist `new.target` {{jsxref("undefined")}}. Damit lässt sich herausfinden, ob eine Funktion mit [new](/de/docs/Web/JavaScript/Reference/Operators/new) als Konstruktor aufgerufen wurde.

```js
function Foo() {
  if (!new.target) throw 'Foo() must be called with new';
  console.log('Foo instantiated with new');
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
```

### `new.target` in Konstruktoren

In Klassenkonstruktoren referenziert `new.target` den Konstruktor, der direkt mit `new` aufgerufen wurde. Das ist auch der Fall, wenn der Konstruktor in einer Elternklasse ist und vom Kinderkonstruktor weiter delegiert wurde.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A { constructor() { super(); } }

var a = new A(); // logs "A"
var b = new B(); // logs "B"

class C { constructor() { console.log(new.target); } }
class D extends C { constructor() { super(); } }

var c = new C(); // logs class C{constructor(){console.log(new.target);}}
var d = new D(); // logs class D extends C{constructor(){super();}}
```

Aus dem obigen Beispiel der Klasse C und D scheint es also, dass new\.target auf die Klassendefinition der Klasse zeigt, die initialisiert wird. Wenn beispielsweise D mit new initialisiert wurde, wurde die Klassendefinition von D ausgegeben und in ähnlicher Weise wurde im Fall von c die Klasse C ausgegeben.

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-built-in-function-objects', 'Built-in Function Objects')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-built-in-function-objects', 'Built-in Function Objects')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.operators.new_target")}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)
