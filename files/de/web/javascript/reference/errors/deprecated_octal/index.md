---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Deprecated_octal
original_slug: Web/JavaScript/Reference/Fehler/Deprecated_octal
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError:
    "0"-prefixed octal literals and octal escape sequences are deprecated;
    for octal literals use the "0o" prefix instead

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Oktalliterale und oktal maskierte Sequenzen sind veraltet und führen zu einem {{jsxref("SyntaxError")}} im Strict Mode. Ab ECMAScript 2015 wird in der standardisierten Syntax eine führende null gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" verwendet (`0o` oder `0O)`.

## Beispiele

### Oktalliteral mit führender 0

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Oktal maskierte Sequenz

```js example-bad
"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### Valide Oktalzahlen

Einsatz einer führenden null gefolgt von "o" oder "O":

```js example-good
0o3;
```

Statt oktal maskierte Sequenzen können hexadezimal maskierte Sequenzen benutzt werden:

```js example-good
'\xA9';
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
- [Warning: 08/09 is not a legal ECMA-262 octal constant](/de/docs/Web/JavaScript/Reference/Errors/Bad_octal)
