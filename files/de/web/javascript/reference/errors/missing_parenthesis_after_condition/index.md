---
title: 'SyntaxError: missing ) after condition'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
original_slug: Web/JavaScript/Reference/Fehler/Missing_parenthesis_after_condition
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing ) after condition

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt einen Fehler beim schreiben einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Bedingung. In jeder Programmiersprache benötigt man Fallunterscheidungen abhängig von Eingaben. Das if Statement führt ein Statement auf, wenn eine Bedingung true wird. In JavaScript muss diese Bedingung in runden Klammern nach dem `if` Schlüsselwort geschrieben werden, wie dieses:

```js
if (condition) {
  // do something if the condition is true
}
```

## Beispiele

Es könnte nur ein Versehen sein, weshalb man alle runden Klammern im Code gründlich überprüfen sollte.

```js example-bad
if (3 > Math.PI {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

Um das Problem zu beheben, muss eine schließende runde Klammer nach der Bedingung geschrieben werden.

```js example-good
if (3 > Math.PI) {
  console.log("wait what?");
}
```

Wenn man aus einer anderen Programmiersprache kommt, passiert es schnell, dass Schlüsselwörter benutzt werden, die in JavaScript eine andere oder garkeine Bedeutung haben.

```js example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

Stattdessen muss die richtige [Vergleichsoperation](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) benutzt werden. Zum Beispiel:

```js example-good
if (done === true) {
 console.log("we are done!");
}
```

## Siehe auch

- [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Entscheidungen im Code treffen — Bedingungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals)
