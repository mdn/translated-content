---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
tags:
  - Errors
  - JavaScript
  - ReferenceError
  - Strict Mode
translation_of: Web/JavaScript/Reference/Errors/Undeclared_var
original_slug: Web/JavaScript/Reference/Fehler/Undeclared_var
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    ReferenceError: assignment to undeclared variable "x" (Firefox)
    ReferenceError: "x" is not defined (Chrome)
    ReferenceError: Variable undefined in strict mode (Edge)

## Fehlertyp

{{jsxref("ReferenceError")}} Warnung nur im [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Ein Wert wurde zu einer nicht deklarierten Variablen hinzugefügt. Oder mit anderen Worten, es gibt eine Zuweisung ohne das Schlüsselwort var. Es gibt einige Unterschiede zwischen deklarierten und nicht deklarierten Variablen, die zu unerwarteten Ergebnissen führen kann und weshalb der Fehler im Strict Mode erscheint.

Drei Dinge über deklarierte und nicht deklarierte Variablen:

- Deklarierte Variablen gehören zu dem Ausführungskontext, in dem sie deklariert werden. Nicht deklarierte Variablen sind immer global.
- Deklarierte Variablen werden erstellt bevor Code ausgeführt wird. Nicht deklarierte Variablen existieren erst, wenn der zugehörige Code ausgeführt wird.
- Deklarierte Variablen sind eine nicht konfigurierbare Eigenschaft des Ausführungskontextes (Funktion oder global). Nicht deklarierte Variablen sind konfigurierbar (sie können z. B. gelöscht werden).

Mehr Details und Beispiele findet man auf der [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Referenzseite.

Fehler mit nicht deklarierten Variablenzuweisungen gibt es nur im [Strict Mode Code](/de/docs/Web/JavaScript/Reference/Strict_mode). Außerhalb davon wird die Warnung einfach Ignoriert.

## Beispiele

### Falsche Fälle

In diesem Fall ist die "bar" eine nicht deklarierte Variable.

```js example-bad
function foo() {
  'use strict';
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Richtige Fälle

Um "bar" zu einer deklarierten Variable zu machen, kann das Schlüsselwort [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eingesetzt werden.

```js example-good
function foo() {
  'use strict';
  var bar = true;
}
foo();
```

## Siehe auch

- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
