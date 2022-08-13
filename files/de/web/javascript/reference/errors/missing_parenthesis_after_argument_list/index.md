---
title: 'SyntaxError: missing ) after argument list'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
original_slug: Web/JavaScript/Reference/Fehler/Missing_parenthesis_after_argument_list
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing ) after argument list

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist falsch gelaufen?

Es gibt einen Fehler mit der Art wie die Funktion aufgerufen wird. Es kann sich hier zum Beispiel um einen Tippfehler, einem fehlenden Operator oder einen nicht richtig abgeschlossenen String handeln.

## Beispiele

Bei einem fehlenden "+" Operator, um zwei Strings zu konkatinieren,erwartet JavaScript , dass nur `"PI: " der Parameter`für die "log" Funktion ist. Darum sollte danach die Funktion mit einer abschliessenden Klammer abgeschlossen werden.

```js example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

Man kann den Fehler korrigieren, indem man den "`+`" Operator hinzufügt:

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

## Siehe auch

- [Functions](/de/docs/Web/JavaScript/Guide/Functions)
