---
title: 'SyntaxError: function statement requires a name'
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Unnamed_function_statement
original_slug: Web/JavaScript/Reference/Fehler/Unnamed_function_statement
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: function statement requires a name [Firefox]
    SyntaxError: Unexpected token ( [Chrome]

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt eine [Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/function) im Code, welches einen Namen benötigt. Man muss überprüfen, wie Funktionen definiert sind und ob diese einen Namen benötigen oder ob diese Funktion ein Funktionsausdruck ist (eine {{Glossary("IIFE")}}) oder ob die Funktion im richtigen Kontext geschrieben ist.

## Beispiele

### Statements vs Ausdrücke

Ein _[Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/function)_ (oder _Funktionsdeklaration_) benötigt einen Namen. Folgendes funktioniert nicht:

```js example-bad
function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
```

Man kann stattdessen ein [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) (Zuweisung) nutzen:

```js example-good
var greet = function() {
  return 'Hello world';
};
```

Manchmal soll auch eine auch eine [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression) sein, welche eine Funktion ist, die nach der Definition direkt ausgeführt wird. Dafür müssen ein paar mehr Klammern benutzt werden:

```js example-good
(function () {

})();
```

### Funktionen mit Labeln

Wenn man ein [Funktionslabel](/de/docs/Web/JavaScript/Reference/Statements/label) benutzt, muss ein Funktionsnamen nach dem `function` Schlüsselwort stehen. Folgendes funktioniert nicht:

```js example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

Das folgende funktioniert:

```js example-good
function Greeter() {
  german: function g() {
    return "Moin";
  }
}
```

### Objektmethoden

Wenn man eine Methode für ein Objekt erstellen möchte, muss ein Objekt erstellt werden. Die folgende Syntax ohne einen Namen nach dem `function` Schlüsselwort ist zulässig.

```js example-good
var greeter = {
  german: function () {
    return "Moin";
  }
};
```

### Callback Syntax

Zudem sollte die Syntax bei Callbackfunktionen geprüft werden. Komma- und Klammersetzung kann schnell schwierig werden.

```js example-bad
promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

Richtig ist folgendes:

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
```

## Siehe auch

- [Funktionen im JavaScript Guide](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [Label](/de/docs/Web/JavaScript/Reference/Statements/label)
