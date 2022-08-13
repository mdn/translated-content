---
title: Klassen
slug: Web/JavaScript/Reference/Classes
tags:
  - ECMAScript 2015
  - JavaScript
  - Klassen
  - Konstruktor
  - Vererbung
translation_of: Web/JavaScript/Reference/Classes
original_slug: Web/JavaScript/Reference/Klassen
---
{{JsSidebar("Classes")}}JavaScript Klassen, eingeführt in ECMAScript 2015, sind syntaktischer Zucker für das bestehende, auf Prototypen basierende, Vererbungsmodell von JavaScript. Diese Syntaxerweiterung führt **kein** neues OOP-Modell in die Sprache ein. JS Klassen ermöglichen es, mit klarer und verständlicher Syntax Objekte zu erstellen und Vererbung in Javascript zu realisieren.

## Klassendefinition

Klassen sind eigentlich Funktionen. Analog zu Funktionsausdrücken und Funktionsdeklarationen hat die Klassensyntax zwei Komponenten:

- Klassenausdrücke und
- Klassendeklarationen.

### Klassendeklaration

Eine Möglichkeit, Klassen zu definieren ist eine _Klassendeklaration_. Diese wird eingeleitet durch das Schlüsselwort `class`, gefolgt vom Namen der Klasse (hier: "Rectangle").

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Hoisting

Ein wichtiger Unterschied zwischen _Klassen-_ und _Funktionsdeklarationen_ besteht im sogenannten {{Glossary("Hoisting")}}. Funktionsdeklarationen werden an den Anfang des Definitionsbereichs "gehoben", für Klassen gilt dies nicht. Das heißt, um auf eine Klasse zuzugreifen, muss sie zuvor definiert worden sein, sonst führt dies zu einem {{jsxref("ReferenceError")}}:

```js example-bad
var p = new Polygon(); // ReferenceError

class Polygon {}
```

### Klassenausdruck

Ein _Klassenausdruck_ ist eine weitere Möglichkeit eine Klasse zu definieren. Dabei ist es optional, hinter dem Schlüsselwort `class` einen Namen anzugeben. Sollte ein Name angegeben werden, so gilt dieser nur innerhalb des Klassenkörpers.

```js
// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

## Klassenkörper und Methodendefinitionen

Der Körper der Klasse ist innerhalb der beiden geschweiften Klammern `{}`. Hier werden die Eigenschaften der Klasse definiert, wie Konstruktoren oder Methoden.

### "Strict mode"

Der Inhalt der Klassendeklaration und des Klassenausdrucks werden im "[strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)" ausgeführt.

### Konstruktor

Die [Konstruktor](/de/docs/Web/JavaScript/Reference/Klassen/constructor)-Methode ist eine spezielle Methode, um Objekte zu erzeugen und zu initialisieren. Eine Klasse kann nur eine spezielle Methode mit dem Namen "constructor" haben. Sollte es in einer Klasse mehrere "constructor"-Methoden geben, wird ein {{jsxref("SyntaxError")}} geworfen.

In der Konstruktor-Methode kann man mit dem Schlüsselwort "super", den Konstruktor der Elternklasse aufrufen.

### Prototype Methoden

Siehe auch [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Polygon {
  constructor(hoehe, breite) {
    this.hoehe = hoehe;
    this.breite = breite;
  }

  get flaeche() {
    return this.berechneFlaeche();
  }

  berechneFlaeche() {
    return this.hoehe * this.breite;
  }
}

const quadrat = new Polygon(10, 10);

console.log(quadrat.flaeche);
```

### Statische Methoden

Das Schlüsselwort [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static) definiert statische Methoden. Statische Methoden werden ohne Instanzierung einer Klasse aufgerufen und sind über eine erzeugte Instanz nicht aufrufbar. Oft werden in Applikationen statische Methoden für Hilfsfunktionen verwendet.

```js
class Punkt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static laenge(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Punkt(5, 5);
const p2 = new Punkt(10, 10);

console.log(Punkt.laenge(p1, p2));
```

### Boxing with prototype and static methods

Wird eine statische oder eine prototype-Methode aufgerufen, ohne dass ein Objekt in der Variable "this" liegt (oder mit "this" als Wahrheitswert, Zeichenkette, Nummer, undefiniert oder null), dann wird die Variable "this" im Funktionskörper undefined sein. Autoboxing wird nicht passieren. Das Verhalten wird das gleiche sein, sollte der Code nicht im "strict mode" geschrieben worden sein.

```js
class Tier {
  sprich() {
    return this;
  }
  static iss() {
    return this;
  }
}

let obj = new Tier();
let sprich = obj.sprich;
sprich(); // undefined

let iss = Tier.iss;
iss(); // undefined
```

Falls wir den vorherigen Quelltext mit klassischen funktionsbasierten Klassen schreiben, wird Autoboxing stattfinden. Dies wird auf dem Wert passieren, der für "this" an die Funktion übergeben wurde.

```js
function Tier() { }

Tier.prototype.sprich = function() {
  return this;
}

Tier.iss = function() {
  return this;
}

let obj = new Tier();
let sprich = obj.sprich;
sprich(); // Globales Objekt

let iss = Tier.iss;
iss(); // Globales Objekt
```

## Vererbung mittels `extends`

Das Schlüsselwort [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends) wird dafür verwendet, Klassendeklarationen und Klassenausdrücke zu erzeugen, die von einer anderen Klasse ableiten.

```js
class Tier{
  constructor(name) {
    this.name = name;
  }

  sprich() {
    console.log(this.name + ' macht ein Geräusch.');
  }
}

class Hund extends Tier{
  sprich() {
    console.log(this.name + ' bellt.');
  }
}

var h = new Hund('Wolfi');
h.sprich();
```

Existiert in der Unterklasse ein Konstruktor, muss dieser zuerst super() aufrufen, bevor "this" verwendet werden kann.

Man kann auch traditionelle funktionsbasierte Klassen erweitern:

```js
function Tier(name) {
  this.name = name;
}
Tier.prototype.sprich = function () {
  console.log(this.name + ' macht ein Geräusch.');
}

class Hund extends Tier {
  sprich() {
    super.sprich();
    console.log(this.name + ' bellt.');
  }
}

var h = new Hund('Wolfi');
h.sprich();
```

Klassen können nicht von regulären (nicht konstruierbaren) Objekten erben. Falls von einem regulärem Objekt geerbt werden soll, kann {{jsxref("Object.setPrototypeOf()")}} verwendet werden:

```js
var Tier = {
  sprich() {
    console.log(this.name + ' macht ein Geräusch.');
  }
};

class Hund {
  constructor(name) {
    this.name = name;
  }
  sprich() {
    console.log(this.name + ' bellt.');
  }
}

Object.setPrototypeOf(Hund.prototype, Tier);

var h = new Hund('Wolfi');
h.sprich();
```

## Species

Falls man zum Beispiel in einer selbst erzeugten Klasse `MyArray` den Konstruktor mit dem Konstruktor der {{jsxref("Array")}} Klasse überschreiben will, kann man dies mittels des species Musters erreichen.

Zum Beispiel, wenn man die {{jsxref("Array.map", "map()")}} Methode aufruft, wird der Default-Konstruktor der Klasse aufgerufen. Will man, dass stattdessen der Konstruktor der Elternklasse benutzt wird, kann man das {{jsxref("Symbol.species")}}-Symbol dafür verwenden:

```js
class MyArray extends Array {
  // Überschreibt species mit dem Konstruktor der Array-Klasses
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
```

## Elternklasse Methoden mit `super` aufrufen

Das Schlüsselwort [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) kann verwendet werden, um Methoden der Elternklassen aufzurufen

```js
class Katze{
  constructor(name) {
    this.name = name;
  }

  sprich() {
    console.log(this.name + ' macht ein Geräusch.');
  }
}

class Loewe extends Katze {
  sprich() {
    super.sprich();
    console.log(this.name + ' brüllt.');
  }
}
```

## Mix-ins

Abstrakte Subklassen oder _mix-ins_ sind Vorlagen für Klassen. Eine ECMAScript-Klasse kann nur von einer einzigen Klasse ableiten, damit ist beispielsweise mehrfache Vererbung von Helferklassen nicht möglich. Die gewünschte Funktionalität muss von der Elternklasse bereitgestellt werden.

Eine Funktion die als Input eine Elternklasse nimmt und als Output eine davon abgeleitete Subklasse ausgibt, kann verwendet werden, um mix-ins in ECMAScript zu erzeugen:

```js
var RechnerMixin = Base => class extends Base {
  rechne() { }
};

var ZufallsGeneratorMixin = Base => class extends Base {
  generiere() { }
};
```

Eine Klasse die ein solches mix-in verwendet kann so erzeugt werden:

```js
class Foo { }
class Bar extends RechnerMixin(ZufallsGeneratorMixin(Foo)) { }
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                 |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Ursprüngliche Definition. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                           |

## Browserkompatibilität

{{Compat}}

\[1] Benötigt den strikten Modus. Der Support im nicht-strikte Modus verbirgt sich hinter der Flag "Experimentelle JavaScript-Funktionen", welche standardmäßig deaktiviert ist.

## Siehe auch

- {{jsxref("Guide/Funktionen")}}
- {{jsxref("Statements/class")}}
- {{jsxref("Operators/class")}}
- {{jsxref("Operators/super")}}
- [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
