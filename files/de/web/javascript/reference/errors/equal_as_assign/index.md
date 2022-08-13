---
title: 'SyntaxError: test for equality (==) mistyped as assignment (=)?'
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Equal_as_assign
original_slug: Web/JavaScript/Reference/Fehler/Equal_as_assign
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?

## Fehlertyp

{{jsxref("SyntaxError")}} Warnung nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Es gibt eine Zuweisung (`=`) an der eigentlich ein Gleichheitsprüfung (`==`) erwartet wird. Um das Debuggen zu unterstützen, warnt JavaScript diesen Fakt (im strict mode).

## Beispiele

### Zuweisung in bedingten Ausdrücken

Es ist ratsam in bedingten Ausdrücken (wie z. B. [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)) keine einfachen Zuweisungen zu verwenden, weil beim lesen des Codes eine Zuweisung mit einer Gleichheitsprüfung verwechselt werden kann. Zum Beispiel sollte folgender Code nicht verwendet werden:

```js example-bad
if (x = y) {
  // do the right thing
}
```

Wenn es notwendig ist eine Zuweisung in einem bedingten Ausdruck einzusetzen, ist es verbreitet, diese mit runden Klammern einzuklammern. Zum Beispiel:

```js
if ((x = y)) {
  // do the right thing
}
```

Andernfalls kann es sein, dass eigentliche eine Vergleichsoperation gemeint war (z. B. `==` oder `===`):

```js
if (x == y) {
  // do the right thing
}
```

## Siehe auch

- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
