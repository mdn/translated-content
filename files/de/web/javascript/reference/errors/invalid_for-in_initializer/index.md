---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
original_slug: Web/JavaScript/Reference/Fehler/Invalid_for-in_initializer
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: for-in loop head declarations may not have initializers (Firefox)

    SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Der Kopf einer [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife enthält einen Initialisierungsausdruck. Das ist, wenn eine Variable deklariert und mit einem Wert initialisiert wird (`for(var i = 0 in obj)`). Ohne Strict Mode wird die Initialisierung still ignoriert und verhält sich wie `for(var i in obj)`. Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein `SyntaxError` erzeugt.

## Beispiele

Das Beispiel erzeugt einen `SyntaxError`:

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### Valide for-in Schleife

Man kann die Initialisierung (`i = 0`) im Kopf der for-in Schleife entfernen.

```js example-good
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### Array Iteration

Die for...in Schleife [sollte nicht für Array Iterationen benutzt werden](/de/docs/Web/JavaScript/Reference/Statements/for...in#Array_Iteration_und_for...in). Zum Iterieren von durch ein {{jsxref("Array")}} sollte eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife statt einer `for-in` Schleife benutzt werden. Die `for` Schleife erlaubt es dann auch eine Initialisierung vorzunehmen:

```js example-good
var arr = [ "a", "b", "c" ]

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) – ebenfalls keine Initialisierung erlaubt (im Strict und normalen Mode).
- [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) – Präferiert für das Iterieren über ein Array. Erlaubt das Initialisieren.
