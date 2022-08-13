---
title: 'SyntaxError: missing = in const declaration'
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
tags:
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
original_slug: Web/JavaScript/Reference/Fehler/Missing_initializer_in_const
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing = in const declaration (Firefox)
    SyntaxError: Missing initializer in const declaration (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung des Programmes nicht geändert werden kann. Ihr kann kein neuer Wert zugewiesen werden und can nicht neu deklariert werden. In JavaScript werden Konstanten mit dem [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Schlüsselwort deklariert. Ein Initialwert für eine Konstante wird benötigt, was bedeutet, dass der Wert im gleichen Statement wie bei der Deklaration zugewiesen werden muss (was Sinn ergibt, weil der Wert später nicht mehr geändert werden kann).

## Beispiele

### Fehlender Initialwert bei const

Anders wie bei `var` or `let`, muss man bei `const` Deklarationen einen Initialwert angeben. Folgendes erzeugt einen Fehler:

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Den Fehler beheben

Es gibt mehrere Möglichkeiten den Fehler zu beheben. Es muss geprüft werden, was mit der Konstanten erreicht werden soll.

#### Hinzufügen eines konstanten Wertes

Der Wert muss im gleichen Statement wie die Deklaration spezifiziert werden:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` oder `var`?

Es sollte kein `const` verwendet werden, wenn keine Konstante gemeint ist. Vielleicht ist eine Variable für den Block ([`let`](/de/docs/Web/JavaScript/Reference/Statements/let)) oder eine global Variable ([`var`](/de/docs/Web/JavaScript/Reference/Statements/var)) gemeint. Beide benötigen keinen Initialwert.

```js example-good
let columns;
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
