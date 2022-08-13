---
title: 'SyntaxError: return not in function'
slug: Web/JavaScript/Reference/Errors/Bad_return_or_yield
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_return_or_yield
original_slug: Web/JavaScript/Reference/Fehler/Bad_return_or_yield
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: return not in function
    SyntaxError: yield not in function

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist falsch gelaufen?

Ein [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) oder [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) Statement wird außerhalb einer [Funktion](/de/docs/Web/JavaScript/Guide/Functions) aufgerufen. Es kann sein, dass geschweifte Klammern fehlen. Die Statements `return` und `yield` müssen in einer Funktion sein, weil sie die Ausführung der Funktion beenden (oder pausieren und wieder starten) und dem Funktionsaufrufer einen spezifizierten Wert zurückgeben.

## Beispiele

```js example-bad
var cheer = function(score) {
  if (score === 147)
    return 'Maximum!';
  };
  if (score > 100) {
    return 'Century!';
  }
}

// SyntaxError: return not in function
```

Die geschweiften Klammern sehen auf den ersten Blick richtig aus, jedoch fehlt in dem Code eine `{` nach dem ersten `if` Statement. Korrekt währe es wir folgt:

```js example-good
var cheer = function(score) {
  if (score === 147) {
    return 'Maximum!';
  }
  if (score > 100) {
    return 'Century!';
  }
};
```

## Siehe auch

- [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)
