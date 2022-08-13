---
title: 'TypeError: invalid assignment to const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
tags:
  - Error
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_const_assignment
original_slug: Web/JavaScript/Reference/Fehler/Invalid_const_assignment
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: invalid assignment to const "x" (Firefox)
    TypeError: Assignment to constant variable. (Chrome)
    TypeError: Redeclaration of const 'x' (IE/Edge)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Eine Konstante ist ein Wert, der nicht von einem Programm während der normalen Ausführung, geändert werden kann. Sie kann nicht durch erneutes Zuweisen und Neudeklarationen geändert werden. In JavaScript werden Konstanten mit dem [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Schlüsselwort deklariert.

## Beispiel

### Nicht valide Neudeklaration

Weist eine Konstanten erneut einen Wert zu. Führt zu einem Fehler.

```js example-bad
const COLUMNS = 80;

// ...

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Den Fehler auflösen

Es gibt mehrere Optionen, um den Fehler zu vermeiden. Überprüfen Sie, was mit der betreffenden Konstante erreicht werden sollte.

#### Umbenennen

Wenn Sie eine andere Konstante deklarieren möchten, wählen Sie einen anderen Namen und benennen Sie ihn um. Dieser konstante Name ist dann in diesem Bereich vergeben.

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### `const`, `let` or `var`?

Verwenden Sie nicht `const`, wenn Sie keine Konstante deklarieren wollten. Vielleicht soll eine Blockvariable mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder eine globale Variable mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklariert werden.

```js example-good
let columns = 80;

// ...

let columns = 120;
```

#### Gültigkeitsbereich

Prüfen Sie, ob Sie im richtigen Gültigkeitsbereich sind. Sollte diese Konstante in diesen Gültigkeitsbereich oder sollte diese zum Beispiel in eine Funktion.

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### `const` und Unveränderlichkeit

Die `const` Deklaration erstellt eine nur lesbare Referenz zu einem Wert. Das bedeutet nicht, dass der enthaltene Wert Unveränderbar ist, sondern nur, dass der Bezeichner nicht neu definiert werden kann. Wenn die Konstante zum Beispiel ein Objekt ist, kann das Objekt selbst verändert werden. Es bedeutet nur, dass der Wert in der Variable nicht verändert werden kann.

```js example-bad
const obj = {foo: 'bar'};
obj = {foo: 'baz'}; // TypeError: invalid assignment to const `obj'
```

Aber man kann die Eigenschaften der Variable verändern:

```js example-good
obj.foo = 'baz';
obj; // Object { foo: "baz" }
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
