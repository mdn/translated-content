---
title: 'Warning: 08/09 is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
tags:
  - Errors
  - JavaScript
  - SyntaxError
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Bad_octal
original_slug: Web/JavaScript/Reference/Fehler/Bad_octal
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
    Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.

## Fehlertyp

Warnung. Die Ausführung von JavaScript wird nicht gestoppt.

## Was ist falsch gelaufen?

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von anderen Dezimalziffern. en alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zal als Oktalzahl interpretiert. Weil das nicht der Fall ist mit `08` und `09`, warnt JavaScript.

Zu beachten ist, dass Oktalliterale und oktal maskierte Sequenzen veraltet sind und eine zusätzliche Veraltungswarnung enthalten. Mit ECMAScript 6 und später wird diese Syntak mit einer führenden Null gefolgt von einem großen oder kleinen lateinischen Buschstaben "O" (`0o` or `0O)` benutzt. Sie dazu die Seite [lexical grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Octal) für mehr Informationen.

## Beispiele

### Ungültige Oktalzahlen

```js example-bad
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Gültige Oktalzahlen

Einsatz von einer führenden Null gefolgt von dem Buchstaben "o";

```js example-good
0O755;
0o644;
```

## Siehe auch

- [Lexical grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
- [SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)
