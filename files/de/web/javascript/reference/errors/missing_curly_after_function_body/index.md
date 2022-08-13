---
title: 'SyntaxError: missing } after function body'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
original_slug: Web/JavaScript/Reference/Fehler/Missing_curly_after_function_body
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing } after function body

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt einen Syntaxfehler irgendwo beim erstellen von Funktionen. Man sollte prüfen, ob alle runden und geschweiften Klammern in der richtigen Reihenfolge sind. Einrückung und Formatierung des Codes hilft dabei den Fehler zu erkennen.

## Beispiele

### Schließende geschweifte Klammer vergessen

Oftmals fehlt eine geschweifte Klammer im Funktionsocde:

```js example-bad
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

Richtig wäre:

```js example-good
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
```

Es kann deutlich verwirrender sein, wenn {{Glossary("IIFE")}}, [Closures](/de/docs/Web/JavaScript/Closures), oder andere Konstrukte, die viele verschiedene Klammern benutzt, eingesetzt werden, wie zum Beispiel:

```js example-bad
(function() { if (true) { return false; } );
```

Oftmals hilft verschiedenes Einrücken oder doppeltes Prüfen der Einrückung, um den Fehler zu finden.

```js example-good
(function() {
  if (true) {
    return false;
  }
});
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
