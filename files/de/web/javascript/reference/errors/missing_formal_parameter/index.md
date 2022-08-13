---
title: 'SyntaxError: missing formal parameter'
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_formal_parameter
original_slug: Web/JavaScript/Reference/Fehler/Missing_formal_parameter
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing formal parameter (Firefox)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

"Formaler Parameter" ist eine andere Bezeichnung für Funktionsparameter. Einer Funktion fehlen valide Parameter. In der Deklaration einer Funktion müssen die Parameternamen {{Glossary("Identifier", "Bezeichner")}}, kein Wert einer Nummer, eines Strings oder eines Objektes. Deklarieren und Aufrufen von Funktionen sind zwei verschiedene Schritte. Deklarieren setzt Bezeichner als Parametername voraus und beim Ausführen (Aufrufen) der Funktion müssen Werte für die Funktion benutzt werden.

In {{glossary("JavaScript")}} können Bezeichner nur alphanumerische Zeichen (und "$" und "\_") enthalten und können nicht mit einer Zahl beginnen. Ein Bezeichner unterscheidet sich von einem String, weil der String Daten sind und der Bezeichner teil des Codes.

## Beispiele

Funktionsparameter müssen Bezeichner beim erstellen der Funktion sein. Alle diese Funktionsdeklarationen schlagen fehl, wenn ein Wert als Parameter benutzt wird:

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

Man muss einen Bezeichner für die Funktionsdeklarationen benutzen:

```js example-good
function square(number) {
  return number * number;
};

function greet(greeting) {
  return greeting;
};

function log(arg) {
  console.log(arg)
};
```

Danach kann man die Funktionen mit beliebigen Argumentwerten aufrufen:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({obj: "value"}); // Object { obj: "value" }
```

## Siehe auch

- Andere Fehler, die etwas mit formalen Parametern zu tun haben:

  - [SyntaxError: Malformed formal parameter](/de/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/de/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
