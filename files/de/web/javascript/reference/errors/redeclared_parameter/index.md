---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Redeclared_parameter
original_slug: Web/JavaScript/Reference/Fehler/Redeclared_parameter
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: redeclaration of formal parameter "x" (Firefox)
    SyntaxError: Identifier "x" has already been declared (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Der selbe Variablenname wird für einen Funktionsparameter benutzt und dann in einer [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Zuweisung im Funktionskörper wieder neu deklariert. Das Neudeklarieren der gleichen Variablen in der selben Funktion oder im selben Block mit `let` ist in JavaScript nicht erlaubt.

## Beispiele

In diesem Fall wird der Parameter "arg" neu deklariert.

```js example-bad
function f(arg) {
  let arg = 'foo';
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Wenn der Wert von "arg" im Funktionskörper geändert werden soll, kann das getan werden, aber ohne die selbe Variable neu zu deklarieren. Oder anders gesagt, man kann das `let` Schlüsselwort weg lassen. Wenn eine neue Variable erstellt werden soll, muss sie umbenannt werden, damit es keine Konflikte mit dem Funktionsparameter mehr gibt.

```js example-good
function f(arg) {
  arg = 'foo';
}

function f(arg) {
  let bar = 'foo';
}
```

## Kompatibilitätshinweise

- Vor Firefox 49 {{geckoRelease(49)}}, wurde ein {{jsxref("TypeError")}} erzeugt ({{bug(1275240)}}).

## Siehe auch

- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
- [Deklarieren von Variablen](/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Deklarationen) im [JavaScript Guide](/de/docs/Web/JavaScript/Guide)
