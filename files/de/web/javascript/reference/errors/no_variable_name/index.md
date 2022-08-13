---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
original_slug: Web/JavaScript/Reference/Fehler/No_variable_name
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing variable name (Firefox)
    SyntaxError: Unexpected token = (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Einer Variablen fehlt ein Name. Das wird zu einem {{jsxref("SyntaxError")}} im Code führen. Vermutlich ist ein Komma irgendwo falsch oder man kämpft mit einem Namen. Völlig verständlich! Dinge zu benennen ist so schwer.

## Beispiele

### Ein Variablenname fehlt

```js example-bad
var = "foo";
```

Es ist schwer gute Variablennamen zu vergeben. Das geht allen so.

```js example-good
var ohGodWhy = "foo";
```

### Reservierte Schlüsselwörter können kein Variablenname sein

Es gibt ein paar Namen, die [reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Schlüsselwörter) sind. Diese kann man nicht benutzen.

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### Deklarieren von mehreren Variablen

Man muss beim Deklarieren von mehreren Variablen besonders auf Kommas aufpassen. Gibt es ein überflüssiges Komma? Wurde aus Versehen ein Komma statt eines Semikolons verwendet?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

Die korrigierte Version:

```js example-good
var x, y = "foo";
var x = "foo";

var first = document.getElementById('one');
var second = document.getElementById('two');
```

### Arrays

{{jsxref("Array")}}-Literale in JavaScript benötigen eckige Klammern um die Werte. Folgendes funktioniert nicht:

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

Richtig ist:

```js example-good
var arr = [1,2,3,4,5];
```

## Siehe auch

- [Gute Variablennamen](http://wiki.c2.com/?GoodVariableNames)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
- [Variablendeklarationen im JavaScript Guide](/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Deklarationen)
