---
title: Klasse
slug: Web/JavaScript/Reference/Statements/class
tags:
  - Deklaration
  - ECMAScript 2015
  - JavaScript
  - Klasse
  - Klassen
  - Ref
  - Statement
translation_of: Web/JavaScript/Reference/Statements/class
---
{{jsSidebar("Statements")}}Die **Klassendeklaration** erstellt eine neue Klasse mit einem Namen unter Verwendung von prototypen Vererbung.

Sie können eine Klasse auch mit Hilfe einer {{jsxref("Operators/class", "class expression", "", 1)}} definieren. Unglücklicherweise ist es mit diesen class-Ausdrücken nicht möglich eine existierende Klasse erneut zu deklarieren. Dieses führt zu einem TypeError.

## Syntax

```js
class name [extends] {
  // class body
}
```

## Beschreibung

Genau wie mit class expressions, wird der body der Klassendeklaration im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Die constructor Eigenschaft ist optional.

Klassendeklarationen sind nicht {{Glossary("Hoisting", "hoisted")}} (im Gegensatz zu [function declarations](/de/docs/Web/JavaScript/Reference/Statements/function)).

## Beispiele

### Eine einfache Klassendeklaration

Im folgenden Beispiel definieren wir zuerst eine Klasse mit dem Namen Polygon. Diese wird danach erweitert, um eine Klasse mit dem Namen Square zu erstellen. Beachten Sie, dass die Anweisung`super()`nur im Konstruktor verwendet werden kann und vor dem `this`Schlüsselwort verwendet werden kann.

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
```

> **Warning:** ### Versuch eine Klasse zweimal zu deklarierenNeudeklarieren einer Klasse unter Einsatz von Klassendeklarationen führt zu einem TypeError.`js class Foo {}; class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared`Der gleiche Fehler tritt auch auf, wenn eine Klasse zuvor mit einem class-Ausdruck definiert wurde.```js
> var Foo = class {};
> class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared
>
> ```
>
> ```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar        |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Erste Definition |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                  |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`function` declaration](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/de/docs/Web/JavaScript/Reference/Classes)
