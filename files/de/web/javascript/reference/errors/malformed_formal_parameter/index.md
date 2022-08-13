---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
tags:
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
original_slug: Web/JavaScript/Reference/Fehler/Malformed_formal_parameter
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: malformed formal parameter (Firefox)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es existiert ein [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) Konstruktor mit mindestend zwei übergebenen Parametern im Quelltext. Der letzte Parameter ist der Quelltext für die neu zu erstellende Funktion. Der ganze Rest bildet die liste der Parameter der neu zu erstellenden Funktion.

Die Liste der Parameter ist manchmal nicht valide. Das kann passieren, wenn versehendlich ein Schlüsselword, wie `if` oder `var`, für die namen der Parameter verwendet werden. Ein andere Grund kann eine falsche Interpunktion in der Argumentenliste verwendet wird. Auch ein falscher Wert wie eine Zahl oder ein Objekt kann die Ursache sein.

## OK, das löst mein Problem. Aber warum hast du das nicht sofort gesagt?

Zugegeben, die Formulierung in der Fehlermeldung ist etwas seltsam. "formal parameter" ist eine andere Art "Funktionsargument" oder "Funktionsparameter" zu sagen. Und wir verwenden das Wort "malformed", weil alle Firefox-Ingenieure sehr große Fans des Romans Gothic Horror sind.

## Beispiele

### Invalide Fälle

```js example-bad
var f = Function('x y', 'return x + y;');
// SyntaxError (missing a comma)

var f = Function('x,', 'return x;');
// SyntaxError (extraneous comma)

var f = Function(37, "alert('OK')");
// SyntaxError (numbers can't be argument names)
```

### Valide Fälle

```js example-good
var f = Function('x, y', 'return x + y;');  // correctly punctuated

var f = Function('x', "return x;');

// if you can, avoid using Function - this is much faster
var f = function(x) { return x; };
```

## Siehe auch

- [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Über Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [_Frankenstein_ by Mary Wollstonecraft Shelley, voller E-Text](https://www.gutenberg.org/ebooks/84)
