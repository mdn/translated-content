---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Left-hand-side expression
  - Operator
translation_of: Web/JavaScript/Reference/Operators/super
---
{{jsSidebar("Operators")}}Das **super** Schlüsselwort wird verwendet, um Funktionen in einem Vaterobjekt auszuführen.Die `super.prop` und `super[expr]` Ausdrücke sind in allen [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) und [Objekt Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verfügbar.

## Syntax

    super([arguments]); // calls the parent constructor.
    super.functionOnParent([arguments]);

## Beschreibung

Wenn ein Konstruktor verwendet wird, muss das `super` Schlüsselwort verwendet werden, bevor das `this` Schlüsselwort verwendet werden kann. Mit dem `super` Schlüsselwort kann man auch Funktionen im Vaterobjekt ausführen.

## Beispiel

### `super` in Klassen verwenden

Der Codeabschnitt ist vom [classes Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um das duplizieren von Teilen des Konstruktors zu vermeiden, was zwischen `Rectangle` und `Square` üblich ist.

```js
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}
```

### `super` Aufruf in statischen Methoden

`super` kann auch in [statischen](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden verwendet werden.

```js
class Rectangle {
  constructor() {}
  static logNbSides() {
    return 'I habe 4 sides';
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + ' wich are all equal';
  }
}
Square.logDescription(); // 'I habe 4 sides wich are all equal'
```

### Das Löschen von Supereigenschaften erzeugt einen Fehler

Man kann den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) in Verbindung mit `super.prop` oder `super[expr]` nicht einsetzen, um Eigenschaften zu löschen, es führt zu einem {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo;
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### `super.prop` kann keine schreibgeschützten Eigenschaften überschreiben

Wenn eine schreibgeschützte Eigenschaft mit z.B. {{jsxref("Object.defineProperty")}}" erzeugt wird, kann der Wert nicht mit `super` überschrieben werden.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;  // Der Wert kann nicht überschrieben werden
  }
}

var y = new Y();
x.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

### Nutzen von `super.prop` in Objektliteralen

super kann auch in der [object initializer / literal](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) Notation verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Beispiel wird mit `super` die Funktion im ersten Objekt aufgerufen. Das funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}. Damit ist es möglich den Prototypen von `obj2` auf `obj1` zu setzen, damit `super method1` in `obj1` findet.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar           |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-super-keyword', 'super')}} | {{Spec2('ES2015')}}     | Initiale Definition |
| {{SpecName('ESDraft', '#sec-super-keyword', 'super')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.operators.super")}}

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
