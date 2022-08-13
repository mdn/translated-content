---
title: >-
  SyntaxError: a declaration in the head of a for-of loop can't have an
  initializer
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
tags:
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
original_slug: Web/JavaScript/Reference/Fehler/Invalid_for-of_initializer
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)

    SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was falsch gelaufen ist?

Der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife enthält einen Initialisierungsausdruck. Das ist eine Variable die deklariert und initialisiert wird |`for (var i = 0 of iterable)`|. Dieses ist nicht erlaubt in for...of Schleifen. Manchmal ist eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife gemeint, die eine Initialisierung erlaubt.

## Beispiele

### Nicht valide `for...of` Schleife

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### Valide `for...of` Schleife

Man muss die Initialisierung (`value = 50`) im Kopf der `for...of` Schleife entfernen. Wenn 50 als Offset gedacht ist, kann man eine Addition in den Körper der Schleife verschieben, wie im folgenden Beispiel:

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## Siehe auch

- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) – Verbietet ebenfalls eine Initialisierung im Strict Mode ([SyntaxError: for-in loop head declarations may not have initializers](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) – Erlaubt eine Initialisierung beim Iterieren.
