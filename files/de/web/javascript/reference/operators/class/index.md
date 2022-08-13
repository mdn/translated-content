---
title: Der class-Ausdruck
slug: Web/JavaScript/Reference/Operators/class
tags:
  - Classes
  - ECMAScript 2015
  - Expression
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/class
---
{{jsSidebar("Operators")}}

Der class-Ausdruck ist eine Methode zur Definition einer Klasse in ECMAScript 2015. Ähnlich wie beim {{jsxref("Operators/function", "function-Ausdruck")}} kann der class-Ausdruck benannt oder unbenannt sein. Ist er benannt, so gilt der Name nur lokal im Klassenkörper. JavaScript-Klassen nutzen prototyp-basierte Vererbung.

## Syntax

    var MyClass = class [className] [extends] {
      // Klassenkörper
    };

## Beschreibung

Ein class-Ausdruck hat die gleiche Syntax wie die {{jsxref("Statements/class", "class-Anweisung (Deklaration)")}}. Jedoch kann mit dem class-Ausdruck der Klassenname ("binding identifier") ausgelassen werden, was mit der class-Anweisung nicht möglich ist. Zusätzlich erlaubt ein class-Ausdruck das erneute Deklarieren einer Klasse, ohne dass ein Fehler wie bei der {{jsxref("Statements/class", "class-Deklaration")}} auftritt. Die constructor-Eigenschaft ist optional. Zudem wird der _typeof_-Operator bei so deklarierten Klassen immer den Typ "function" zurückgeben.

Genau wie mit class-Anweisungen wird der Körper der Klasse im {{jsxref("Strict_mode", "strict mode")}} ausgeführt.

```js
'use strict';
var Foo = class {}; // constructor-Eigenschaft ist optional
var Foo = class {}; // erneute Deklaration is erlaubt

typeof Foo;      // gibt "function" zurück
typeof class {}; // gibt "function" zurück

Foo instanceof Object;   // true
Foo instanceof Function; // true
class Foo {}; // erzeugt einen TypeError, weil eine erneute Deklaration nicht erlaubt ist
```

## Beispiele

### Ein einfacher Klassenausdruck

Dies ist nur ein einfacher anonymer class-Ausdruck der über die "Foo"-Variable angesprochen werden kann.

```js
var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // ""
```

### Benannte class-Ausdrücke

Wenn Sie innerhalb des Klassenkörpers auf die aktuelle Klasse verweisen möchten, können Sie einen benannten class-Ausdruck verwenden. Dieser Name ist nur im Bereich der Klasse selbst gültig und sichtbar.

```js
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | erstmalige Definition |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                       |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Operators/function", "function-Ausdruck")}}
- {{jsxref("Statements/class", "class-Anweisung")}}
- {{jsxref("Classes", "Klassen")}}
