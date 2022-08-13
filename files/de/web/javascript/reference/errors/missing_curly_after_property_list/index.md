---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
original_slug: Web/JavaScript/Reference/Fehler/Missing_curly_after_property_list
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing } after property list

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt irgendwo in der [Objektinitialisierungs](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax einen Fehler. Es könnte ein vergessenes Komma sein oder eine vergessene geschweifte Klammer. Es muss auch geprüft werden, die Reihenfolge der schließenden runden und geschweiften Klammern richtig ist. Den Code richtig einzurücken und zu formatieren hilft bei der Suche nach dem Fehler.

## Beispiele

### Vergessenes Komma

Häufig wird ein Komma bei der Objektinitialisierung vergessen:

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

Richtig wäre:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3
};
```

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
