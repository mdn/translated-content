---
title: Konstruktor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - ECMAScript 2015
  - JavaScript
  - Klassen
translation_of: Web/JavaScript/Reference/Classes/constructor
original_slug: Web/JavaScript/Reference/Klassen/constructor
---
{{jsSidebar("Classes")}}

Die `constructor` Methode ist eine spezielle Methode für das erzeugen und initialisieren von Objekten, die mit dem Schlüsselwort `class `erzeugt wurden.

## Syntax

    constructor([Argumente]) { ... }

## Beschreibung

In einer Klasse kann es nur eine Methode mit dem Namen "constructor" geben. Eine {{jsxref("SyntaxError")}} Fehlermeldung wird geworfen, wenn in einer Klasse die `constructor` Methode mehr als einmal vorhanden ist.

Die `constructor `Methode kann mit dem Schlüsselwort `super `die `constructor `Methode der Eltern-Klasse aufrufen.

Wenn man keine `constructor `Methode erzeugt, wird eine Standardkonstruktor verwendet.

## Beispiele

### Verwendung der `constructor` Methode

Dieser Quellcode Ausschnitt wurden vom [classes Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live Demo](https://googlechrome.github.io/samples/classes-es6/index.html)) übernommen.

```js
class Square extends Polygon {
  constructor(length) {
    // Hier wird die constructor Methode der Eltern-Klasse aufgerufen,
    // für die Parameter width und height wurde der übergebene length Parameter verwendet
    super(length, length);
    // Anmerkung: In abgeleiteten Klassen, muss die super() Methode aufgerufen werden,
    // bevor man das 'this' Objekt verwenden kann, da es sonst zu einen Referenz Fehler kommt
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Standardkonstruktoren

Wenn man keine `constructor `Methode anlegt, wird eine Standardkonstruktor verwendet. Für Basis Klassen ist der Standard Konstruktor:

```js
constructor() {}
```

Für vererbte Klassen, ist das der Standardkonstruktor:

```js
constructor(...args) {
  super(...args);
}
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-static-semantics-constructormethod', 'Constructor Method')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-static-semantics-constructormethod', 'Constructor Method')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [super()](/de/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/de/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/de/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/de/docs/Web/JavaScript/Reference/Classes)
