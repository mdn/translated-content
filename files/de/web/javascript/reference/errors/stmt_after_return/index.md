---
title: 'Warning: unreachable code after return statement'
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Stmt_after_return
original_slug: Web/JavaScript/Reference/Fehler/Stmt_after_return
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: unreachable code after return statement (Firefox)

## Fehlertyp

Warnung

## Was ist falsch gelaufen?

Nicht erreichbarer Code nach einem return Statement tritt in folgenden Fällen auf:

- Wenn eine weitere Anweisung nach einer {{jsxref("Statements/return", "return")}} Anweisung folgt oder
- wenn man eine {{jsxref("Statements/return", "return")}} Anweisung ohne abschließendes Semikolon verwendet und anschließend eine weiteren Anweisung angibt.

Wenn eine Anweisung nach einer gültigen `return` Anweisung existiert, dann wird diese Warnmeldung ausgegeben, um aufzuzeigen, das der nachfolgende Quellcode nie ausgeführt wird.

Warum sollte man Semikolons am Ende einer `return` Anweisung verwenden? Da im Falle einer `return` Anweisung ohne Semikolon, die Absicht des Entwicklers nicht klar ist. Es stellt sich die Frage, ob die Anweisung nach dem `return` als Rückgabewert der Methode zu sehen ist, oder sollte die Ausführung gleich beim `return` beendet werden. Hier zeigt die Warnung an, dass es sich um einen uneindeutige Situation handelt.

Warnungen werden nicht erzeugt wenn nach einem semikolonlosen `return` folgende Anweisungen folgen:

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## Beispiele

### Fehlerfälle

```js example-bad
function f() {
  var x = 3;
  x += 4;
  return x;   // die return Anweisung beendet die Methode sofort.
  x -= 3;     // somit ist dieser Code nicht erreichbar und wird nie ausgeführt
}

function f() {
  return     // diese Zeile ist äquivalent zu `return;`
    3 + 4;   // somit kann diese Code-Zeile nie erreicht werden
}
```

### Gültige Fälle

```js example-good
function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  // OK: return ist die letzte Anweisung in der Methode
}

function f() {
  return 3 + 4  // OK: return ohne Semikolon, aber mit einem Ausdruck auf der gleiche Zeile
}
```

## Siehe auch

- {{jsxref("Statements/return", "Automatic Semicolon Insertion", "#Automatic_Semicolon_Insertion", 1)}}
