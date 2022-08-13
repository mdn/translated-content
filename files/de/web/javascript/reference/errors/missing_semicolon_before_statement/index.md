---
title: 'SyntaxError: missing ; before statement'
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
original_slug: Web/JavaScript/Reference/Fehler/Missing_semicolon_before_statement
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing ; before statement

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist falsch gelaufen?

Es fehlt irgendwo ein Semikolon (`;`). [JavaScript Statements](/de/docs/Web/JavaScript/Reference/Statements) müssen durch ein Semikolon beendet werden. Einige Statements sind von der [automatischen Semikolon Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) betroffen, aber in diesem Fall muss man ein Semikolon geliefert werden, damit JavaScript den Quelltext korrekt lesen kann.

Meistens ist dieser Fehler eine Folge aus einem anderen Fehler, wie ein nicht escaptes Zeichen in einem String oder der falsche Einsatz von `var`. Es kann auch sein, dass man zu viele runde Klammern benutzt. Wenn dieser Fehler auftritt, sollte die Syntax gründlich geprüft werden.

## Beispiele

### Nicht escapte Strings

Dieser Fehler kann leicht auftreten, wenn ein String nicht richtig escapt wird und die JavaScript-Umgebung schon das Ende eines Strings erwartet. Zum Beispiel:

```js example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

Man kann doppelte Anführungszeichen benutzen oder das Apostroph escapen:

```js example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### Eigenschaften mit var deklarieren

Man kann Eigenschaften eines Objektes oder Arrays nicht mit einem `var` deklarieren.

```js example-bad
var obj = {};
var obj.foo = 'hi'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'there'; // SyntaxError missing ; before statement
```

Stattdessen muss das `var` Schlüsselwort vermieden werden:

```js example-good
var obj = {};
obj.foo = 'hi';

var array = [];
array[0] = 'there';
```

## Siehe auch

- [Automatische Semikolon Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)
- [JavaScript Statements](/de/docs/Web/JavaScript/Reference/Statements)
