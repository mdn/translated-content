---
title: 'SyntaxError: identifier starts immediately after numeric literal'
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Identifier_after_number
original_slug: Web/JavaScript/Reference/Fehler/Identifier_after_number
---
{{JSSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: identifier starts immediately after numeric literal (Firefox)
    SyntaxError: Unexpected number (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Die Namen von Variablen, {{Glossary("Identifier", "Bezeichner")}} genannt, haben einige Regeln, die der Code erfüllen muss.

Ein Bezeichner in JavaScript muss mit einem Buchstaben, einem Unterstrich (\_) oder einem Dollarzeichen ($) starten. Er kann nicht mit einer Ziffer beginnen. Nur nachfolgende Zeichen sind Ziffern (0-9).

## Beispiele

### Variablenname der mit einer Ziffer beginnt

Variablennamen dürfen in JavaScript nicht mit einer Zahl beginnen. Das folgende wird nciht funktionieren:

```js example-bad
var 1life = 'foo';
// SyntaxError: identifier starts immediately after numeric literal

var foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal
```

Man muss die Variable neu benenne, um die führende Zahl im Namen zu vermeiden.

```js example-good
var life1 = 'foo';
var foo = life1;
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Variablen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#Variablen) im [JavaScript Guide](/de/docs/Web/JavaScript/Guide)
